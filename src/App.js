import 'katex/dist/katex.css';

import React from 'react';
import axios from 'axios';
import { Route, Link, HashRouter, Switch} from 'react-router-dom';
import injectStyles from 'react-jss';

import Logo from './components/AppLogo/AppLogo';
import ArrowButtons from './components/ArrowButtons';
import Article from './components/Article/Article';
import LessonsList from './components/LessonsList/LessonsList';
import MenuBar from './components/MenuBar/MenuBar'
import Modal from './components/ModalLauncher/ModalLauncher';
import ExpandableText from './components/ExpandableText/ExpandableText';
import PersonsList from './components/PersonsList/PersonsList';
import BooksList from './components/BooksList/BooksList';
import HomePage from './components/HomePage/HomePage'
import styles from './AppStyles';

import 'normalize.css';
import 'smoothscroll-for-websites';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.axiosSource = axios.CancelToken.source()
        this.state = {
            modalOpened: false,
            lessonsList: {}
        }
        this.fetchLessonsList = this.fetchLessonsList.bind(this)
    };

    render() {
        const { classes } = this.props;
        const { lessonsList } = this.state

        return(
            <HashRouter basename='/'>
                <div className={`${classes.App} container`}>
                    <MenuBar />
                    <Switch>
                        <Route path='/lessons/:section/:name' render={({ match }, props) => {
                            const prevArticle = lessonsList[match.params.section] ? lessonsList[match.params.section][lessonsList[match.params.section].findIndex(el => el === match.params.name) - 1] : undefined
                            const nextArticle = lessonsList[match.params.section] ? lessonsList[match.params.section][lessonsList[match.params.section].findIndex(el => el === match.params.name) + 1] : undefined

                            return (
                                <React.Fragment>
                                    <Article
                                        nextArticle={nextArticle ? `/lessons/${match.params.section}/${nextArticle}` : undefined}
                                        previousArticle={prevArticle ? `/lessons/${match.params.section}/${prevArticle}` : undefined}
                                        section={match.params.section} 
                                        name={match.params.name} />
                                    <LessonsList fetchLessons={this.fetchLessonsList} />
                                </React.Fragment>
                            )}
                        }/>
                        <Route path='/persons' render={({ match }, props) => (
                                <PersonsList />
                            )   
                        } />
                        <Route path='/books' render={({ match }, props) => (
                                <BooksList />
                            )   
                        } />
                        <Route path='/lessons' render={props => (
                                <div className={classes.ContentList}>
                                    <LessonsList extended lessons={this.state.lessonsList} />
                                </div>
                            )
                        } />
                        <Route path='/' render={props => (
                                <div className={classes.ContentList}>
                                    <HomePage />
                                </div>
                            )
                        } />
                    </Switch>
                </div>
            </HashRouter>
        )
    };

    fetchLessonsList(lessonsList) {
        console.log(lessonsList)
        this.setState({ lessonsList })
    }

    openModal() {
        this.setState({ modalOpened: true })
    }

    closeModal() {
        this.setState({ modalOpened: false })
    }
}

export default injectStyles(styles)(App)