import React from 'react'
import injectStyles from 'react-jss'
import styles from './SettingsMenuStyles'

export default injectStyles(styles)((props) => {
    const { onThemeChange, classes } = props

    return (
        <div className={classes.SettingsMenu}> 
            <h1>Пользовательские настройки</h1>
            <h2 onClick={() => onThemeChange('dark')}>DARK</h2>
            <h2 onClick={() => onThemeChange('light')}>LIGHT</h2>
        </div>
    )
})