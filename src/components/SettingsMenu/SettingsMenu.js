import React from 'react'
import injectStyles, { ThemeProvider } from 'react-jss'
import ThemePreview from '../ThemePreview/ThemePreview'
import styles from './SettingsMenuStyles'
import themes from '../../themes'

export default injectStyles(styles)((props) => {
    const { onThemeChange, classes } = props

    return (
        <div className={classes.SettingsMenu}> 
            <h1>Пользовательские настройки</h1>
            <div>
                <h2>Тема оформления</h2>
                <ul className={classes.ThemesList}>
                    {Object.keys(themes).map(theme => (
                        <ThemeProvider key={theme} theme={themes[theme]}>
                            <ThemePreview changeTheme={onThemeChange} themeName={theme} theme={themes[theme]} />
                        </ThemeProvider>
                    ))}
                </ul>
            </div>
        </div>
    )
})