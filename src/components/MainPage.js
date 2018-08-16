import React from 'react';
import AppLogo from './AppLogo/AppLogo';
import LessonsList from './LessonsList/LessonsList';

const MainPage = () => {
    return(
        <div className='main-page'>
            <AppLogo />
            <LessonsList extended />
        </div>
    )
}

export default MainPage;