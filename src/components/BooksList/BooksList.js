import React, { Component } from 'react';
import axios from 'axios';
import injectStyles from 'react-jss';
import path from 'path';
import Markdown from 'markdown-to-jsx';
import ModalLauncher from '../ModalLauncher/ModalLauncher';
import styles from './BookListStyles';

class BooksList extends Component {
    constructor(props) {
        super(props);
        this.axiosSource = axios.CancelToken.source();
        this.state = {
            booksList: []
        }
    }

    componentDidMount() {
        setTimeout(() => this.getBooksList(), 250)
    }

    componentWillUnmount() {
        this.axiosSource.cancel('Operation canceled due to component being unmounted.');
    }

    render() {
        const { classes } = this.props;

        return(
            <div className={classes.BooksContainer}>
                <h1>Книги</h1>
                <div className={classes.BooksList}>
                    {this.handleBooksList()}
                </div>
            </div>
        )
    }

    getBooksList() {
        axios.get('http://localhost:8081/booksList', {cancelToken: this.axiosSource.token})
            .then(res => {
                this.setState({
                    booksList: res.data
                });
            })
            .catch(err => console.log('Error: ', err))
    }

    handleBooksList() {
        const { classes } = this.props;

        if (this.state.booksList.length) {
            return this.state.booksList.map((book, bookId) => {
                return (
                    <ModalLauncher key={`book${bookId}`} className={classes.BookCard}
                        button={
                            <React.Fragment>
                                <div className={classes.BookCoverPreview}>
                                    <img src={book.image ? path.relative(process.cwd(), path.join('server', book.image)) : undefined}/>
                                </div>
                                <div className={classes.BookInfoBox}>
                                    <div className={classes.BookInfo}>
                                        <h1>{book.name}</h1>
                                        <h2>{book.author}</h2>
                                    </div>
                                </div>
                            </React.Fragment>
                        }>

                        <div className={classes.BookCardHeader}>
                            <div className={classes.BookCover}>
                                <img src={book.image ? path.relative(process.cwd(), path.join('server', book.image)) : ''} 
                                className={classes.BookImage} />
                            </div>
                            <h2>{book.name}</h2>
                            <p>{book.author}</p>
                        </div>

                        <Markdown className={classes.BookDescription} 
                            options={{
                                forceBlock: true
                            }}
                        >
                            {book.description}
                        </Markdown>
                    </ModalLauncher>
                )
            })
        } else return (
            // <h1>Loading...</h1>
            <div></div> // TODO: Добавить элемент, отображающийся во время загрузки
        )
    }
}

export default injectStyles(styles)(BooksList);