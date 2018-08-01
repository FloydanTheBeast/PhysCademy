import React, {Component, createElement} from 'react';
import axios from 'axios';
import marksy from 'marksy/components';
import { InlineMath, BlockMath } from 'react-katex';
import Modal from './modalLauncher';

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
        Modal(props) {
            return <Modal buttonLabel={props.buttonLabel}>{props.children}</Modal>
        }
    }
});

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.getTextFromApi = this.getTextFromApi.bind(this);
        this.getTextFromApi(props.section, props.name);
        
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
        if (this.props.name == nextProps.name &&
            this.props.section == nextProps.section) {
            return false;
        }
        this.getTextFromApi(nextProps.section, nextProps.name);
        return true;
    }

    getTextFromApi(section, name) {
        axios.get(`http://localhost:8081/lessons/${section}/${name}`)
            .then(res => {
                    this.setState({text: res.data});
                    this.forceUpdate();
                }
            )
            .catch(err => console.error(err.response.data));
    }
};

export default Article;