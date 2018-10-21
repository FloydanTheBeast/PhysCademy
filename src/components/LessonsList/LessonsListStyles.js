import LightenDarkenColor from '../../utils/LightenDarkenColor'

const LessonsListStyles = {
    '& h1': {
        display: 'block',
        color: '#fff',
        fontFamily: '"Montserrat", sans-serif',
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
        transition: 'all 0.3s',
        '& > p': {
            padding: '6px',
            transition: 'all 0.5s',
            borderRadius: '10px' 
        },
        '&.selected': {
            color: '#f5cd79',
            '& > p': {
                borderLeft: '6px solid #f5cd79',
                paddingLeft: '8px',
                borderRadius: 0
            }
        },
        '&:hover:not(.selected)': {
            '& > p': {
                backgroundColor: LightenDarkenColor('#2C3A47', -40),
            }
        },
        '& p': {
            fontFamily: '"Montserrat", sans-serif',
        }
    }
}

export default {
    LessonsList: {
        gridArea: 'list',
        minWidth: '320px',
        maxWidth: '350px',
        width: '20vw',
        borderRight: '2px solid #222',
        backgroundColor: LightenDarkenColor('#2C3A47', -15),
        overflowY: 'auto',
        position: 'sticky',
        top: '0',
        height: '100vh',
        padding: '0 2.5%',
        userSelect: 'none',
        extend: LessonsListStyles,
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
        extend: LessonsListStyles,
        '& h1': {
            display: 'inline-block',
            fontSize: '3.5rem',
            marginLeft: '5%'
        },
        '& a': {
            '& p': {
                margin: '0 0 0 7.5%',
                fontSize: '1.75rem',
                paddingBottom: '16px'
            }
        },
        '& $LessonsSection': {
            '& a:last-child': {
                borderBottom: 'none'
            }
        }
    },
    LessonsSection: {
        '& a:last-child': {
            display: 'block',
            borderBottom: '2px solid #222',
            '& p': {
                marginBottom: '10px',
            }
        }
    },
    
}