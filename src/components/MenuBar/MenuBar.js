import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import InlineSVG from 'svg-inline-react';
import injectStyles from 'react-jss';
import styles from './MenuBarStyles';
import LightenDarkenColor from '../../utils/LightenDarkenColor';

class MenuBar extends Component {
    constructor(props) {
        super(props);
        this.lessonsSection = React.createRef();
        this.personsSection = React.createRef();
        this.booksSection = React.createRef();

        this.state = {
            currentSection: this.lessonsSection
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.MenuBar}>
                    <NavLink className={classes.MenuBarItem} to='/lessons' activeClassName='selected' onClick={() => this.setState({currentSection: this.lessonsSection})}>
                        <InlineSVG className={classes.MenuBarIcon}
                        src={require('../../../assets/Images/LessonsSection.svg')} />
                    </NavLink>

                    <NavLink className={classes.MenuBarItem} to='/persons' activeClassName='selected' onClick={() => this.setState({currentSection: this.personsSection})}>
                        <InlineSVG className={classes.MenuBarIcon}
                        src={require('../../../assets/Images/PersonsSection.svg')} />
                    </NavLink>

                    <NavLink className={classes.MenuBarItem} to='/books' activeClassName='selected' onClick={() => this.setState({currentSection: this.booksSection})}>
                        <InlineSVG className={classes.MenuBarIcon}
                        src={require('../../../assets/Images/BooksSection.svg')} />
                    </NavLink>
            </div>
        )
    }
}

export default injectStyles(styles)(MenuBar);
