import React, { Component } from 'react'
import injectStyles from 'react-jss'
import styles from './ExpandableTextStyles'
import Expander from 'animakit-expander'

class ExpandableText extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isExpanded: false
        }
        this.toggleExtension = this.toggleExtension.bind(this)
        this.isOpen = true
        this.heightIsChecked = false
        this.height = 0
    }

    render() {
        const { classes } = this.props
        const openClass = this.state.isExpanded ? 'open' : ''

        return (
            <div className={classes.ExpandableTextContainer}>
                <div className={`${classes.ExpandableTextPreview} ${openClass}`} onClick={() => this.toggleExtension()}>
                    <h2>{this.props.title || 'Дополнительная информация'}</h2>
                    <i className={classes.ExpandableTextIcon}></i>
                </div>

                <Expander 
                    expanded={this.state.isExpanded}
                    duration={400}>
                    {<div className={`${classes.ExpandableTextContent} ${openClass}`}>
                        {this.props.children}
                    </div>}
                </Expander>
            </div>
        )
    }

    toggleExtension() {
        this.setState({
            isExpanded: !this.state.isExpanded
        })
        // console.log(div.offsetHeight)
        // if (!this.heightIsChecked) {
        //     this.height = div.offsetHeight
        //     this.heightIsChecked = true
        // }

        // if (this.isOpen) {
        //     this.open = false
        //     div.style.height = 0
        // } else {
        //     this.isOpen = true
        //     div.style.height = `${this.height}px`
        // }
    }
}

export default injectStyles(styles)(ExpandableText)