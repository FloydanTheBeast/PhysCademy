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
        this.getBooksList();
    }

    componentWillUnmount() {
        this.axiosSource.cancel('Operation canceled due to component being unmounted.');
    }

    render() {
        const { classes } = this.props;

        return(
            <div className={classes.BooksList}>
                {this.handleBooksList()}
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

        if (this.state.booksList) {
            return this.state.booksList.map((book, bookId) => {
                return (
                    <ModalLauncher key={`book${bookId}`} className={classes.BookCard}
                        button={
                            // [
                            //     <img key='cover' src={book.image ? path.relative(__dirname, path.join('server', book.image)) : ''} 
                            //     className={classes.BookCoverPreview} />,
                            //     <h2 key='name'>{book.name}</h2>,
                            //     <p key='author'>{book.author}</p>
                            // ]
                            <React.Fragment>
                                <div className={classes.BookCoverPreview}>
                                    <div className={classes.Background}></div>
                                    <img src={book.image ? path.relative(__dirname, path.join('server', book.image)) : undefined}/>
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
                                <img src={book.image ? path.relative(__dirname, path.join('server', book.image)) : ''} 
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
        }
    }
}

export default injectStyles(styles)(BooksList);