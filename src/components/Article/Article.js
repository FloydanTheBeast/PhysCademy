import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Markdown from 'markdown-to-jsx'
import injectStyles from 'react-jss'

import Modal from '../ModalLauncher/ModalLauncher'
import ExpandableText from '../ExpandableText/ExpandableText'
import ReadingProgressBar from '../ReadingProgressBar/ReadingProgressBar'
import { InlineMath, BlockMath } from '../Math/Math'
import styles from './ArticleStyles'

const CustomComponents = {
    InlineMath,
    BlockMath,
    Modal,
    ExpandableText
}

class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.fetchTextFromApi = this.fetchTextFromApi.bind(this)
        this.fetchTextFromApi(props.section, props.name)
    }

    render() {
        const { classes } = this.props
        
        return (
            <div className={classes.Article}>
                <ReadingProgressBar />
                <h1 className={classes.ArticleTitle}>{this.props.name}</h1>
                <Markdown options={{
                    overrides: CustomComponents,
                    forceBlock: true
                }}>
                    {this.state.text}
                </Markdown>
                <div className={classes.NavButtons}>
                    {this.props.previousArticle &&
                        <Link className={classes.NavButtonLeft} onClick={() => window.scrollTo(0, 0)} to={this.props.previousArticle}>Назад</Link>
                    }
                    {this.props.nextArticle &&
                        <Link className={classes.NavButtonRight} onClick={() => window.scrollTo(0, 0)} to={this.props.nextArticle}>Далее</Link>
                    }
                </div>
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.name === nextProps.name &&
            this.props.section === nextProps.section &&
            this.props.previousArticle === nextProps.previousArticle &&
            this.props.nextArticle === nextProps.nextArticle) {
            return false
        }
        this.fetchTextFromApi(nextProps.section, nextProps.name)
        return true
    }

    fetchTextFromApi(section, name) {
        axios.get(`http://localhost:8081/lessons/${encodeURI(section)}/${encodeURI(name)}`)
            .then(res => {
                    this.setState({ text: res.data })
                    this.forceUpdate()
                }
            )
            .catch(err => console.error(err.response.data))
    }
}

export default injectStyles(styles)(Article)