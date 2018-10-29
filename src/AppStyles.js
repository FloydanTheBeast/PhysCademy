import MontserratNormal from 'Fonts/Montserrat/Montserrat-Regular.ttf';
import MontserratBold from 'Fonts/Montserrat/Montserrat-Bold.ttf';
import LightenDarkenColor from './utils/LightenDarkenColor';

export default theme => ({
    // Import all fonts
    '@font-face': [
        {
            fontFamily: 'Montserrat',
            src: `url(${MontserratBold})`,
            fontWeight: 'bold'
        },
        {
            fontFamily: 'Montserrat',
            src: `url(${MontserratNormal})`,
            fontWeight: 'normal'
        },   
    ],
    App: {
        // backgroundColor: '#2C3A47',
        display: 'grid',
        gridTemplateAreas:
            '"menu list content"',
        gridTemplateColumns: 'auto auto 1fr',
        '& a': {
            color: 'inherit',
            textDecoration: 'none'
        },
        '& img': {
            userSelect: 'none'
        },
        '& .content': {
            gridArea: 'content',
        },
        '& > div': {
            '&::-webkit-scrollbar': {
                width: '10px'
            },
            '&::-webkit-scrollbar-track': {
                backgroundColor: '#2C3A47'
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#222',
                borderRadius: '15px'
            }
        }
    },
    LessonsPage: {
        gridArea: 'content',
    },
    ContentList: {
        gridArea: 'content',
        width: '100%'
    },
    '@global': {
        'html': {
            fontSize: '16px'
        },
        'body': {
            // overflowY: 'scroll', // Решение бага при котором меню становилось чуть шире из-за появившегося скроллбара
            backgroundColor: theme.backgroundColor,
            fontFamily: '"Montserrat", sans-serif',
            color: theme.fontColor
        },
        '::selection': {
            color: LightenDarkenColor('#2C3A47', 10),
            backgroundColor: 'rgba(249, 202, 36, 0.99)'
        },
        'html::-webkit-scrollbar': {
            width: '10px',
            position: 'fixed'
        },
        'html::-webkit-scrollbar-track': {
            backgroundColor: '#2C3A47'
        },
        'html::-webkit-scrollbar-thumb': {
            backgroundColor: '#222',
            borderRadius: '15px'
        },
        'div::-webkit-scrollbar': {
            width: '10px',
            margin: '10px'
        },
        'div::-webkit-scrollbar-track': {
            backgroundColor: 'rgba(0, 0, 0, 0)',
        },
        'div::-webkit-scrollbar-thumb': {
            backgroundColor: '#222',
            borderRadius: '15px'
        }
    },
})