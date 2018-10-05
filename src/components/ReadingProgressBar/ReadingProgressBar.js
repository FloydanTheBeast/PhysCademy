import React , { Component } from 'react'
import injectStyles from 'react-jss'
import styles from './ReadingProgressBarStyles'

class ReadingProgressBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollPercentage: Math.round(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100)
        }
    }
    
    componentDidMount() {
        document.addEventListener('scroll', () => this.setState({ scrollPercentage: Math.round(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100) }))
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', () => this.setState({ scrollPercentage: Math.round(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100) }))
    }

    render() {
        return(
            <progress className={this.props.classes.ReadingProgressBar} max={100} value={this.state.scrollPercentage || 0}/>
        )
    }
}

export default injectStyles(styles)(ReadingProgressBar)