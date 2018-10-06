export default {
    Article: {
        width: '90%',
        margin: '0 auto',
        color: '#fff',
        font: '1.25rem "Montserrat", sans-serif',
        gridArea: 'content',
        '& > div': {
            marginBottom: '100px',
            '& > h2:not(:first-child)': {
                borderTop: '1px dashed #fff',
                margin: '0',
                padding: '30px 0',
                marginTop: '30px'
            },
            '& > p': {
                margin: '10px 30px'
            },
            '& > ol, & > ul': {
                marginLeft: '50px',
                padding: '0'
            }
        }
    },
    ArticleTitle: {
        borderLeft: '0.5rem solid #fff',
        paddingLeft: '1rem'
    },
    NavigationButtons: {
        margin: 0,
    }
}