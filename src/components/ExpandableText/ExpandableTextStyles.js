import LightenDarkenColor from '../../utils/LightenDarkenColor'

export default {
    '@keyframes': {
        'from': ''
    },
    ExpandableTextContainer: {
        width: '80%',
        maxWidth: '1000px',
        minWidth: '600px',
        margin: '30px 0 30px 50px',
        color: '#fff'
    },

    ExpandableTextPreview: {    
        backgroundColor: LightenDarkenColor('#2C3A47', -20),
        padding: '1rem 2rem 1rem 2rem',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        '&:hover': {
            cursor: 'pointer'
        },
        '& > h2': {
            margin: '0',
            paddingRight: '10px'
        },
        '&:after': {
            transition: 'all 0.4s',
            content: '""',
            height: 0,
            width: 0,
            padding: '6px',
            borderBottom: '4px solid #fff',
            borderLeft: '4px solid #fff',
            margin: 'auto 0',
            transform: 'rotateZ(45deg)'
        },
        '&.open:after': {
            transform: 'rotateZ(-45deg)'
        }
    },

    ExpandableTextContent: {
        border: `2px solid ${LightenDarkenColor('#2C3A47', -20)}`,
        backgroundColor: LightenDarkenColor('#2C3A47', 20),
        color: 'inherit',
        padding: '2rem'
    }
};