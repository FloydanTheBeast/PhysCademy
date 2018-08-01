import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuBar extends Component {
    render() {
        return (
            <div className='menu-bar'>
                    <Link className='menu-bar-item' to='/lessonsList'>
                        <div className='menu-bar-button'>Lessons</div>
                    </Link>
            </div>
        )
    }
}

export default MenuBar;
