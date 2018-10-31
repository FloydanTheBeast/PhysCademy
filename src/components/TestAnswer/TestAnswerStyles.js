export default theme => ({
    AnswerBox: {
        border: `1px dashed ${theme.borderColorAccent}`,
        width: '45%',
        textAlign: 'center',
        padding: '0.5rem 0',
        margin: '1rem 0',
        boxSizing: 'border-box',
        borderRadius: '10px',
        backgroundColor: theme.backgroundColor,
        transition: 'all 0.3s',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: theme.backgroundColorDark,
            borderRadius: 0
        },
        '& > *:hover': {
            transform: 'none',
            fontSize: '1rem',
            margin: '1rem 0',
        }
    }
})