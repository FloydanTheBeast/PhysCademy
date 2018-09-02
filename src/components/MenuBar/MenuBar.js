import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import InlineSVG from 'svg-inline-react';
import injectStyles from 'react-jss';
import styles from './MenuBarStyles';
import LightenDarkenColor from '../../utils/LightenDarkenColor'

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

    // FIXME: Цвет фона должен меняться в зависимости от темы
    componentDidMount() {
        ReactDOM.findDOMNode(this.state.currentSection.current).style.backgroundColor = LightenDarkenColor('#2C3A47', -40)
    }

    componentWillUpdate() {
        ReactDOM.findDOMNode(this.state.currentSection.current).style.backgroundColor = ''
    }

    componentDidUpdate() {
        ReactDOM.findDOMNode(this.state.currentSection.current).style.backgroundColor = LightenDarkenColor('#2C3A47', -40)
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.MenuBar}>
                    <Link className={classes.MenuBarItem} to='/' ref={this.lessonsSection} onClick={() => this.setState({currentSection: this.lessonsSection})}>
                        <InlineSVG className={classes.MenuBarIcon}
                        src={require('../../../assets/Images/LessonsSection.svg')} />
                    </Link>

                    <Link className={classes.MenuBarItem} to='/persons' ref={this.personsSection} onClick={() => this.setState({currentSection: this.personsSection})}>
                        <InlineSVG className={classes.MenuBarIcon}
                        src={require('../../../assets/Images/PersonsSection.svg')} />
                    </Link>

                    <Link className={classes.MenuBarItem} to='/books' ref={this.booksSection} onClick={() => this.setState({currentSection: this.booksSection})}>
                        Books
                    </Link>
            </div>
        )
    }
}

export default injectStyles(styles)(MenuBar);
