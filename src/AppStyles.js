import MontserratNormal from 'Fonts/Montserrat/Montserrat-Regular.ttf'
import MontserratBold from 'Fonts/Montserrat/Montserrat-Bold.ttf'
import MontserratExtraBold from 'Fonts/Montserrat/Montserrat-ExtraBold.ttf'
import MontserratBlack from 'Fonts/Montserrat/Montserrat-Black.ttf'
import LightenDarkenColor from './utils/LightenDarkenColor'

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
        {
            fontFamily: 'Montserrat',
            src: `url(${MontserratExtraBold})`,
            fontWeight: '800'
        },
        {
            fontFamily: 'Montserrat',
            src: `url(${MontserratBlack})`,
            fontWeight: '900'
        }  
    ],
    App: {
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
        }
    },
    LessonsPage: {
        gridArea: 'content',
    },
    ContentList: {
        gridArea: 'content',
        width: '100%'
    },
    '@media (min-width: 1440px)': {
        '@global': {
            'html': {
                fontSize: `calc(20px * ${theme.interfaceSize})`
            }
        }
    },
    '@media (max-width: 1440px)': {
        '@global': {
            'html': {
                fontSize: `calc(16px * ${theme.interfaceSize})`
            }
        }
    },
    '@media (max-width: 1024px)': {
        '@global': {
            'html': {
                fontSize: `calc(12px * ${theme.interfaceSize})`
            }
        }
    },
    '@global': {
        'body': {
            // overflowY: 'scroll', // Решение бага при котором меню становилось чуть шире из-за появившегося скроллбара
            transition: 'background-color 0.3s ease-in-out',
            backgroundColor: theme.backgroundColor,
            fontFamily: '"Montserrat", sans-serif',
            color: theme.fontColor
        },
        'h1, h2': {
            fontWeight: 900
        },
        '::selection': {
            color: theme.backgroundColor,
            backgroundColor: theme.selectionColor
        },
        'html::-webkit-scrollbar': {
            width: '10px',
            position: 'fixed'
        },
        'html::-webkit-scrollbar-track': {
            backgroundColor: theme.backgroundColor
        },
        'html::-webkit-scrollbar-thumb': {
            backgroundColor: theme.scrollbarColor,
            borderRadius: '15px'
        },
        'div::-webkit-scrollbar': {
            width: '10px',
            margin: '10px'
        },
        'div::-webkit-scrollbar-track': {
            backgroundColor: theme.backgroundColor,
        },
        'div::-webkit-scrollbar-thumb': {
            backgroundColor: theme.scrollbarColor,
            borderRadius: '15px'
        }
    },
})