import MontserratNormal from 'Fonts/Montserrat/Montserrat-Regular.ttf';
import MontserratBold from 'Fonts/Montserrat/Montserrat-Bold.ttf';

export default {
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
        backgroundColor: '#2C3A47',
        display: 'grid',
        gridTemplateAreas:
            '"menu list content"',
        gridTemplateColumns: 'auto auto 1fr',
        '& a': {
            color: '#fff',
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
        'body': {
            // overflowY: 'scroll', // Решение бага при котором меню становилось чуть шире из-за появившегося скроллбара
            backgroundColor: '#2C3A47'
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
};