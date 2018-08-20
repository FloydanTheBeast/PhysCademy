import React, {Component, createElement} from 'react';
import axios from 'axios';
import Markdown from 'markdown-to-jsx';
import injectStyles from 'react-jss';

import Modal from '../ModalLauncher/ModalLauncher';
import ExpandableText from '../ExpandableText/ExpandableText';
import { InlineMath, BlockMath } from '../Math/Math';
import styles from './ArticleStyles';

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
        this.fetchTextFromApi = this.fetchTextFromApi.bind(this);
        this.fetchTextFromApi(props.section, props.name);
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.Article}>
                <h1 className={classes.ArticleTitle}>{this.props.name}</h1>
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
        this.fetchTextFromApi(nextProps.section, nextProps.name);
        return true;
    };

    fetchTextFromApi(section, name) {
        axios.get(`http://localhost:8081/lessons/${encodeURI(section)}/${encodeURI(name)}`)
            .then(res => {
                    this.setState({text: res.data});
                    this.forceUpdate();
                }
            )
            .catch(err => console.error(err.response.data));
    };
};

export default injectStyles(styles)(Article);