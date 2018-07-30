import React, {Component, createElement} from 'react';
import axios from 'axios';
import marksy from 'marksy/components';
import { InlineMath, BlockMath } from 'react-katex';
import Modal from './modalWindow';

const compileMarkdown = marksy({
    createElement,
    components: {
        // TODO: Добавить все кастомные компоненты
        InlineMath(props) {
            return <InlineMath>{props.children}</InlineMath>
        },
        BlockMath(props) {
            return <BlockMath>{String.raw`${props.children}`}</BlockMath>
        },
        // ModalWindow(props) {
        //     return <ModalWindow>{props.children}</ModalWindow>
        // }
    }
});

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.getTextFromApi();
    }

    render() {
        return (
            <div className='article'>
                <h1 className='article-title'>{this.props.name}</h1>
                <div>{compileMarkdown(this.state.text).tree}</div>
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.text != nextState.text) {
            return true;
        }
        this.getTextFromApi();
        return false;
    }

    getTextFromApi() {
        axios.get(`http://localhost:8081/lessons/${this.props.section}/${this.props.name}`)
            .then(res => {
                    this.setState({text: res.data});
                    this.forceUpdate();
                }
            )
            .catch(err => console.error(err.response.data));
    }
};

export default Article;