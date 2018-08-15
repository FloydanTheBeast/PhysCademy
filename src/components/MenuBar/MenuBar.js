import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InlineSVG from 'svg-inline-react';
import injectStyles from 'react-jss';
import styles from './MenuBarStyles';
import MenuBarStyles from './MenuBarStyles';

class MenuBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.MenuBar}>
                    <Link className={classes.MenuBarItem} to='/'>
                        <InlineSVG className={classes.MenuBarIcon}
                        src={require('../../../assets/Images/LessonsSection.svg')} />
                    </Link>
            </div>
        )
    }
}

export default injectStyles(MenuBarStyles)(MenuBar);
