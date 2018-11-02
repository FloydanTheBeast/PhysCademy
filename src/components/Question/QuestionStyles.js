export default theme => ({
    QuestionBox: {
        '& > h2': {
            fontSize: '2rem',
            margin: '0'
        },
        '&.correct': {
            borderColor: '#2ecc71',
            borderLeft: '2rem solid #2ecc71',
            borderRadius: 0
        },
        '&.wrong': {
            borderColor: '#e74c3c',
            borderLeft: '2rem solid #e74c3c',
            borderRadius: 0
        },
        boxSizing: 'border-box',
        transition: 'all 0.3s ease-in-out',
        width: '90%',
        margin: '0 auto 4rem',
        padding: '2rem 4rem',
        border: `2px solid ${theme.borderColor}`,
        borderRadius: '20px'
    },
    OptionsBox: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around'
    },
})