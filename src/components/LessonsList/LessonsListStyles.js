import LightenDarkenColor from '../../utils/LightenDarkenColor'

const LessonsListStyles = theme => ({
    '& h1': {
        display: 'block',
        transition: 'all 0.3s',
        '&:before': {
            content: '"\\00B6"',
            opacity: '0.2',
            marginRight: '1rem',
            transition: 'all 0.3s',
        },
        '&:hover':{
            '&:before': {
                opacity: '0.9'
            },
        }
    },
    '& a': {
        display: 'block',
        transition: 'all 0.3s',
        '&:focus': {
            outline: 'none',
            '& > p': {
                backgroundColor: theme.backgroundColorDark
            }
        },
        '& > p': {
            padding: '6px',
            transition: 'all 0.5s',
            borderRadius: '10px' 
        },
        '&.selected': {
            color: theme.backgroundColorAccentDark,
            '& > p': {
                borderLeft: `6px solid ${theme.backgroundColorAccentDark}`,
                paddingLeft: '8px',
                borderRadius: 0
            }
        },
        '&:hover:not(.selected)': {
            '& > p': {
                backgroundColor: theme.backgroundColorDarkHover
            }
        },
        '& p': {
            fontFamily: '"Montserrat", sans-serif',
        }
    }
})

export default theme => ({
    LessonsList: {
        gridArea: 'list',
        minWidth: '320px',
        maxWidth: '350px',
        width: '20vw',
        borderRight: `2px solid ${theme.borderColor}`,
        backgroundColor: theme.backgroundColorDark,
        overflowY: 'auto',
        position: 'sticky',
        top: '0',
        height: '100vh',
        padding: '0 2.5%',
        userSelect: 'none',
        extend: LessonsListStyles(theme),
        '& h1': {
            textAlign: 'center',
            fontSize: '2.25rem',
            margin: '30px auto',
        },
        '& a': {
            '& p': {
                fontSize: '1.25rem',
                margin: '0 10px 5px'
            }
        },
    },
    ExtendedLessonsList: {
        extend: LessonsListStyles(theme),
        '& h1': {
            display: 'inline-block',
            fontSize: '3.5rem',
            marginLeft: '5%'
        },
        '& a': {
            '& p': {
                margin: '0 0 0 7.5%',
                fontSize: '1.75rem',
                padding: '10px'
            }
        },
        '& $LessonsSection': {
            borderBottom: 'none',
            '& a:last-child': {
                borderBottom: 'none'
            }
        }
    },
    LessonsSection: {
        paddingBottom: '10px',
        borderBottom: `2px solid ${theme.borderColor}`
    }  
})