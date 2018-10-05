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
import styles from './AppStyles';

import 'normalize.css';
import 'smoothscroll-for-websites';

class App extends React.Component {
    constructor(props) {
        super(props); 
        this.axiosSource = axios.CancelToken.source();
        this.state = {
            modalOpened: false
        };
    };

    render() {
        const { classes } = this.props;

        return(
            <HashRouter basename='/'>
                <div className={`${classes.App} container`}>
                    <MenuBar />
                    <Switch>
                        <Route path='/lessons/:section/:name' render={({ match }, props) => (
                                [
                                    <Article key='article' section={match.params.section} name={match.params.name} />,
                                    <LessonsList key='lessons-list' />
                                ]
                            )
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
                                    <Logo />
                                </div>
                            )
                        } />
                    </Switch>
                </div>
            </HashRouter>
        )
    };

    openModal() {
        this.setState({modalOpened: true});
    };

    closeModal() {
        this.setState({modalOpened: false});
    };
}

export default injectStyles(styles)(App);