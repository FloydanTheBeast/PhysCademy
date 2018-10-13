import LightenDarkenColor from '../../utils/LightenDarkenColor'

export default {
    '@keyframes': {
        'from': ''
    },
    ExpandableTextContainer: {
        width: '80%',
        maxWidth: '800px',
        minWidth: '500px',
        margin: '30px 0 30px 50px',
        color: '#fff',
        // transition: 'max-height 1s ease-in-out'
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
            margin: '0'
        },
        '&:after': {
            transition: 'all 0.4s',
            content: '""',
            height: '0.75rem',
            width: '0.75rem',
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