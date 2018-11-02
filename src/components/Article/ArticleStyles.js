import LightenDarkenColor from '../../utils/LightenDarkenColor'

export default theme => ({
    Article: {
        width: '100%',
        margin: '0 auto',
        padding: '0 3rem',
        boxSizing: 'border-box',
        fontSize: '1.25rem',
        gridArea: 'content',
        '& > div': {
            marginBottom: '6rem',
            '& > h2:not(:first-child)': {
                borderTop: `1px dashed ${theme.borderColor}`,
                margin: '0',
                padding: '2rem 0',
                marginTop: '2rem'
            },
            '& > p': {
                margin: '0.75rem 0'
            },
            '& > ol, & > ul': {
                marginLeft: '1rem',
                padding: '0'
            }
        }
    },
    ArticleTitle: {
        borderLeft: `0.5rem solid ${theme.fontColor}`,
        paddingLeft: '1rem'
    },
    NavButtons: {
        width: '80%',
        display: 'flex',
        flexFlow: 'row wrap',
        margin: '0 auto',
        justifyItems: 'stretch',
        justifyContent: 'center',
        '& > a': {
            maxWidth: '50%',
            textAlign: 'center',
            flex: 1,
            backgroundColor: theme.backgroundColorDark,
            padding: '10px 20px',
            border: '1px solid #222',
            borderRadius: '5px',
            margin: '20px',
            transition: 'all 0.3s',
            '&:hover': {
                backgroundColor: theme.backgroundColorDarkHover
            }
        }
    },
})