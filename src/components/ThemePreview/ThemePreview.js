import React from 'react'
import injectStyles from 'react-jss'
import styles from './ThemePreviewStyles'

const ThemePreview = props => {
    return (
        <div
            className={props.classes.ThemePreview}
            onClick={() => props.changeTheme(props.themeName)}>
            {props.theme.name}
        </div>
    )
}

export default injectStyles(styles)(ThemePreview)