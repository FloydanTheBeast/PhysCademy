import LightenDarkenColor from '../../utils/LightenDarkenColor'

const LessonsListStyles = theme => ({
    '& h1': {
        display: 'block',
        transition: 'all 0.3s',
        '&:before': {
            content: '"\\00B6"',
            opacity: '0.2',
            marginRight: '0.75rem',
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
            padding: '0.5rem',
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
        minWidth: '21rem',
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
            padding: '0 1rem',
            wordBreak: 'break-word',
            textAlign: 'center',
            fontSize: '2rem',
            margin: '1rem auto 2rem',
        },
        '& a': {
            '& p': {
                fontSize: '1.5rem',
                margin: '0 0.75rem 0.5rem'
            }
        },
    },
    ExtendedLessonsList: {
        extend: LessonsListStyles(theme),
        '& h1': {
            display: 'inline-block',
            fontSize: '3.5rem',
            marginLeft: '3rem'
        },
        '& a': {
            '& p': {
                margin: '0 0 0 7rem',
                fontSize: '1.75rem',
                padding: '0.75rem'
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
        padding: '1.5rem 0',
        borderBottom: `2px solid ${theme.borderColor}`,
        '&:last-child': {
            borderBottom: 'none'
        }
    }  
})