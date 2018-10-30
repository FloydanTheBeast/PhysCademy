export default theme => ({
    ReadingProgressBar: {
        position: 'sticky',
        display: 'inline-block',
        height: '10px',
        width: '100%',
        top: 'calc(100% - 30px)',
        zIndex: '1000',
        '&::-webkit-progress-bar': {
            borderRadius: '10px',
            backgroundColor: 'transparent'
        },
        '&::-webkit-progress-value': {
            backgroundColor: theme.backgroundColorAccentDark,
            borderRadius: '10px',
        }
    },
    '@global': {
        progress: {
            appearance: 'none'
        }
    }
})