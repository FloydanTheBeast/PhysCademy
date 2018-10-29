import LightenDarkenColor from '../../utils/LightenDarkenColor'
import themes from '../../themes';

export default theme => ({
    Article: {
        width: '90%',
        margin: '0 auto',
        font: '1.25rem "Montserrat", sans-serif',
        gridArea: 'content',
        '& > div': {
            marginBottom: '100px',
            '& > h2:not(:first-child)': {
                borderTop: '1px dashed #fff',
                margin: '0',
                padding: '30px 0',
                marginTop: '30px'
            },
            '& > p': {
                margin: '10px 30px'
            },
            '& > ol, & > ul': {
                marginLeft: '50px',
                padding: '0'
            }
        }
    },
    ArticleTitle: {
        borderLeft: '0.5rem solid #fff',
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