export default {
    // Import all fonts
    '@font-face': [
        {
            fontFamily: 'Montserrat',
            src: 'url(assets/Fonts/Montserrat/Montserrat-Bold.ttf)',
            fontWeight: 'bold'
        },
        {
            fontFamily: 'Montserrat',
            src: 'url(assets/Fonts/Montserrat/Montserrat-Regular.ttf)',
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
        'html::-webkit-scrollbar': {
            width: '10px'
        },
        'html::-webkit-scrollbar-track': {
            backgroundColor: '#2C3A47'
        },
        'html::-webkit-scrollbar-thumb': {
            backgroundColor: '#222',
            borderRadius: '15px'
        }
    },
};