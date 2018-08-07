import React, { Component } from 'react';
import injectStyles from 'react-jss';
import styles from './expandableTextStyles';

class ExpandableText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
        this.toggleExtension = this.toggleExtension.bind(this);
    };

    render() {
        const { classes } = this.props;
        const openClass = this.state.isExpanded ? 'open' : '';

        return (
            <div className={classes.expandableTextContainer}>
                <div className={classes.expandableTextPreview} onClick={this.toggleExtension}>
                    <h2>{this.props.title || 'Дополнительная информация'}</h2>
                    <i className={classes.expandableTextIcon}></i>
                </div>

                <div className={`${classes.expandableTextContent} ${openClass}`}>
                    {this.props.children}
                </div>
            </div>
        );
    };

    toggleExtension() {
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    }
};

export default injectStyles(styles)(ExpandableText);