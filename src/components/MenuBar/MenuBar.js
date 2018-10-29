import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import InlineSVG from 'svg-inline-react';
import injectStyles from 'react-jss';
import styles from './MenuBarStyles';
import LightenDarkenColor from '../../utils/LightenDarkenColor';

const MenuBar = (props) => {
    const { classes } = props;

    return (
        <div className={classes.MenuBar}>
                <NavLink exact className={classes.MenuBarItem} to='/' activeClassName='selected'>
                    <InlineSVG className={classes.MenuBarIcon}
                    src={require('Images/HomePage.svg')} />
                </NavLink>

                <NavLink className={classes.MenuBarItem} to='/lessons' activeClassName='selected'>
                    <InlineSVG className={classes.MenuBarIcon}
                    src={require('Images/LessonsSection.svg')} />
                </NavLink>

                <NavLink className={classes.MenuBarItem} to='/persons' activeClassName='selected'>
                    <InlineSVG className={classes.MenuBarIcon}
                    src={require('Images/PersonsSection.svg')} />
                </NavLink>

                <NavLink className={classes.MenuBarItem} to='/books' activeClassName='selected'>
                    <InlineSVG className={classes.MenuBarIcon}
                    src={require('Images/BooksSection.svg')} />
                </NavLink>
                <NavLink className={classes.MenuBarItem} to='/settings' activeClassName='selected'>
                    <InlineSVG className={classes.MenuBarIcon}
                    src={require('Images/SettingsSection.svg')} />
                </NavLink>
        </div>
    )
}

export default injectStyles(styles)(MenuBar);
