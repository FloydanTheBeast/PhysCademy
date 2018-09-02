export default {
    BookCard: {
        display: 'inline-block',
        position: 'relative',
        top: '0',
        bottom: '0',
        width: '20rem',
        border: '1px solid #111',
        borderRadius: '10px',
        margin: '20px 40px 0',
        color: '#fff',
        fontFamily: '"Montserrat", sans-serif',
        opacity: '0.7',
        transition: 'all 0.2s 0.1s ease-in',
        '& > h2, & > p': {
            margin: '20px'
        },
        '& > p': {
            opacity: '0.7'
        },
        '&:hover': {
            marginTop: '40px',
            opacity: '1',
            cursor: 'pointer',
            transform: 'scale(1.05, 1.05)'
        }
    },
    BookImage: {
        display: 'block',
        width: '20rem',
        height: '30rem',
    }
}