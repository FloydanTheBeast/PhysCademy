export default {
    BookCard: {
        width: '20rem',
        border: '1px solid #111',
        borderRadius: '10px',
        margin: '40px',
        color: '#fff',
        fontFamily: '"Montserrat", sans-serif',
        opacity: '0.7',
        transition: 'all 0.2s',
        '& > h2, & > p': {
            margin: '20px'
        },
        '& > p': {
            opacity: '0.7'
        },
        '&:hover': {
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