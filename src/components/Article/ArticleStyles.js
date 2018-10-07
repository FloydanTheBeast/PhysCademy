import LightenDarkenColor from '../../utils/LightenDarkenColor'

export default {
    Article: {
        width: '90%',
        margin: '0 auto',
        color: '#fff',
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
        width: '600px',
        display: 'flex',
        flexFlow: 'row nowrap',
        margin: '0 auto',
        justifyItems: 'stretch',
        justifyContent: 'center',
        '& > a': {
            textAlign: 'center',
            flex: 1,
            backgroundColor: '#2C3A47',
            padding: '10px 20px',
            border: '1px solid #222',
            borderRadius: '5px',
            margin: '20px',
            transition: 'all 0.3s',
            '&:hover': {
                backgroundColor: LightenDarkenColor('#2C3A47', -20)
            }
        }
    },
}