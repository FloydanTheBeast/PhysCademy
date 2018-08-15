import React, {Component, createElement} from 'react';
import axios from 'axios';
import Modal from './ModalLauncher';
import Markdown, { compiler } from 'markdown-to-jsx';
import ExpandableText from './ExpandableText';
import { InlineMath, BlockMath } from './Math';

const CustomComponents = {
    InlineMath,
    BlockMath,
    Modal,
    ExpandableText
};

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.getTextFromApi = this.getTextFromApi.bind(this);
        this.getTextFromApi(props.section, props.name);
    };

    render() {
        return (
            <div className='article'>
                <h1 className='article-title'>{this.props.name}</h1>
                <Markdown options={{
                    overrides: CustomComponents,
                    forceBlock: true
                }}>
                    {this.state.text}
                </Markdown>
            </div>
        );
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.name == nextProps.name &&
            this.props.section == nextProps.section) {
            return false;
        }
        this.getTextFromApi(nextProps.section, nextProps.name);
        return true;
    };

    getTextFromApi(section, name) {
        axios.get(`http://localhost:8081/lessons/${section}/${name}`)
            .then(res => {
                    this.setState({text: res.data});
                    this.forceUpdate();
                }
            )
            .catch(err => console.error(err.response.data));
    };
};

export default Article;