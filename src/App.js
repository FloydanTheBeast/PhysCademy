// TODO: Попробовать добавить этот файл в index.html чтобы он загружался в Electron
import 'katex/dist/katex.css';

import React from 'react';
import axios from 'axios';
import { Route, Link, HashRouter, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import injectStyles from 'react-jss';

import Logo from './components/AppLogo/AppLogo';
import ArrowButtons from './components/ArrowButtons';
import Article from './components/Article/Article';
import LessonsList from './components/LessonsList/LessonsList';
import MenuBar from './components/MenuBar/MenuBar'
import Modal from './components/ModalLauncher/ModalLauncher';
import ExpandableText from './components/ExpandableText';
import styles from './AppStyles';

import 'normalize.css';

const history = createBrowserHistory();

class App extends React.Component {
    constructor(props) {
        super(props); 
        this.axiosSource = axios.CancelToken.source();
        this.state = {
            modalOpened: false,
            lessonsList: [],
        };
    };

    componentDidMount() {
        this.setState({isMounted: true}, this.getLessonsList);
    };

    componentWillUnmount() {
        this.axiosSource.cancel('Operation canceled due component being unmounted.');
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
                                    <Article section={match.params.section} name={match.params.name} />,
                                    <LessonsList lessons={this.state.lessonsList} />
                                ]
                            )
                        }/>
                        <Route path='/' render={props => (
                                <div className={classes.ContentList}>
                                    <Logo />
                                    <LessonsList extended lessons={this.state.lessonsList} />
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

    getLessonsList() {
        axios.get('http://localhost:8081/lessonsList', {cancelToken: this.axiosSource.token})
            .then(res => {
                this.setState({lessonsList: res.data});
            })
            .catch(err => console.log('Error: ', err));
    };
}

export default injectStyles(styles)(App);