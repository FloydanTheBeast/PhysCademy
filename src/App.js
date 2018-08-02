// TODO: Попробовать добавить этот файл в index.html чтобы он загружался в Electron
import 'katex/dist/katex.css';

import React from 'react';
import axios from 'axios';
import { Route, Link, HashRouter, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Button from './components/button';
import Logo from './components/logo';
import ArrowButtons from './components/arrowButtons';
import Article from './components/article';
import Formula from './components/formula';
import LessonsList from './components/lessonsList';
import MenuBar from './components/menuBar.js'
import Modal from './components/modalLauncher';
import ExpandableText from './components/expandableText';

import 'normalize.css';
import './main.scss';

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
        return(
            <HashRouter basename='/'>
                <div className='container'>
                    <MenuBar />
                    <div className='content'>    
                        <Logo />
                        <Switch>
                            <Route path='/lessons/:section/:name' render={({ match }, props) => (
                                    <Article section={match.params.section} name={match.params.name} />
                                )
                            }/>
                            <Route path='/' render={props => (
                                    <div className='content'>
                                    </div>
                                )
                            } />
                        </Switch>
                    </div>
                    <LessonsList lessons={this.state.lessonsList} />
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

export default App;