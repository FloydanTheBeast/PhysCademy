export default theme => ({
    ThemePreview: {
        backgroundColor: theme.backgroundColor,
        color: theme.fontColor,
        transition: 'all 0.2s',
        '&:hover': {
            backgroundColor: theme.backgroundColorDarkHover,
            cursor: 'pointer'
        }
    }
})