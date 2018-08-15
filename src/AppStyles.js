export default {
    // Import all fonts
    '@import': `url('https://fonts.googleapis.com/css?family=Ubuntu')`,
    App: {
        backgroundColor: '#34495e',
        display: 'grid',
        gridTemplateAreas:
            '"menu list content"',
        gridTemplateColumns: 'auto 1fr 4fr',
        '& a': {
            color: '#fff',
            textDecoration: 'none'
        },
        '& .content': {
            gridArea: 'content'
        }
    }
};