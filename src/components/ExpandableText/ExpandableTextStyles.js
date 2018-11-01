import LightenDarkenColor from '../../utils/LightenDarkenColor'

export default theme => ({
    ExpandableTextContainer: {
        width: '80%',
        maxWidth: '60rem',
        minWidth: '20rem',
        margin: '2rem 0'
    },

    ExpandableTextPreview: {    
        backgroundColor: theme.backgroundColorDark,
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
            borderBottom: `4px solid ${theme.iconColor}`,
            borderLeft: `4px solid ${theme.iconColor}`,
            margin: 'auto 0',
            transform: 'rotateZ(45deg)'
        },
        '&.open:after': {
            transform: 'rotateZ(-45deg)'
        }
    },

    ExpandableTextContent: {
        border: `2px solid ${theme.borderColor}`,
        backgroundColor: theme.backgroundColorLight,
        padding: '2rem'
    }
})