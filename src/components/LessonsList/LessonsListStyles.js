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
            borderBottom: '5px solid #ddd',
            paddingBottom: '10px',
            '&:before': {
                content: '"\\00B6"',
                opacity: '0.8',
                marginRight: '1rem',
            },
        }
    },
    '& a': {
        transition: 'all 0.3s',
        '&.selected': {
            color: '#f5cd79',
            '&>p': {
                transition: 'all 0.5s',
                borderLeft: '6px solid #f5cd79',
                paddingLeft: '8px'
            }
        },
        '&:hover:not(.selected)': {
            color: LightenDarkenColor('#ffffff', -25),
        },
        '& p': {
            fontFamily: '"Montserrat", sans-serif',
        }
    }
}

export default {
    LessonsList: {
        gridArea: 'list',
        minWidth: '300px',
        maxWidth: '350px',
        width: '20vw',
        borderRight: '2px solid #222',
        backgroundColor: LightenDarkenColor('#2C3A47', -15),
        overflowY: 'auto',
        position: 'sticky',
        top: '0',
        height: '100vh',
        padding: '0 2.5%',
        extend: LessonsListStyles,
        '& h1': {
            textAlign: 'center',
            fontSize: '2.25rem',
            margin: '30px auto',
        },
        '& a': {
            '& p': {
                fontSize: '1.25rem',
                margin: '0 10px 5px',
                padding: '6px 0'
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