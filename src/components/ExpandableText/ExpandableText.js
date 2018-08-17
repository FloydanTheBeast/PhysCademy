import React, { Component } from 'react';
import injectStyles from 'react-jss';
import styles from './ExpandableTextStyles';

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
            <div className={classes.ExpandableTextContainer}>
                <div className={classes.ExpandableTextPreview} onClick={this.toggleExtension}>
                    <h2>{this.props.title || 'Дополнительная информация'}</h2>
                    <i className={classes.ExpandableTextIcon}></i>
                </div>

                <div className={`${classes.ExpandableTextContent} ${openClass}`}>
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