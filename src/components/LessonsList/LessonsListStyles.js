import LightenDarkenColor from '../../utils/LightenDarkenColor'

const LessonsListStyles = {
    '& h1': {
        color: '#fff',
        fontFamily: '"Montseratt", sans-serif'
    },
    '& a': {
        '&:hover': {
            color: LightenDarkenColor('#ffffff', -25),
            transition: 'color 0.3s'
        },
        '& p': {
            fontFamily: '"Montseratt", sans-serif',
        }
    }
}

export default {
    LessonsList: {
        gridArea: 'list',
        textAlign: 'center',
        minWidth: '250px',
        borderRight: '2px solid #222',
        backgroundColor: LightenDarkenColor('#2C3A47', -15),
        overflowY: 'auto',
        position: 'sticky',
        top: '0',
        height: '100vh',
        padding: '0 2.5%',
        extend: LessonsListStyles,
        '& h1': {
            fontSize: '2.25rem',
            margin: '30px 0',
        },
        '& a': {
            '& p': {
                fontSize: '1.25rem',
                width: '90%',
                margin: '0 auto',
                paddingBottom: '12px'
            }
        },
    },
    ExtendedLessonsList: {
        extend: LessonsListStyles,
        '& h1': {
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
            '& a:last-child p': {
                borderBottom: 'none'
            }
        }
    },
    LessonsSection: {
        '& a:last-child p': {
            borderBottom: '2px solid #111'
        }
    },
    
}