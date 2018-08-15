import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InlineSVG from 'svg-inline-react';

class MenuBar extends Component {
    render() {
        return (
            <div className='menu-bar'>
                    <Link className='menu-bar-item' to='/'>
                        <div className='menu-bar-button'>
                            <InlineSVG className='lessons-logo' src={require('../../assets/Images/LessonsSection.svg')} />
                        </div>
                    </Link>
            </div>
        )
    }
}

export default MenuBar;
