import LightenDarkenColor from '../../utils/LightenDarkenColor'

export default {
    ExpandableTextContainer: {
        width: '80%',
        maxWidth: '800px',
        minWidth: '500px',
        margin: '30px 0 30px 50px',
        color: '#fff'
    },

    ExpandableTextPreview: {    
        backgroundColor: LightenDarkenColor('#2C3A47', -20),
        padding: '1rem 0 1rem 2rem',
        '&:hover': {
            cursor: 'pointer'
        },
        '& > h2': {
            margin: '0'
        }
    },

    ExpandableTextContent: {
        border: `2px solid ${LightenDarkenColor('#2C3A47', -20)}`,
        backgroundColor: LightenDarkenColor('#2C3A47', 20),
        color: 'inherit',
        display: 'none',
        padding: '2rem',
        '&.open': {
            display: 'block'
        }
    }
};