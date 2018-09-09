export default {
    BooksList: {
        width: '95%',
        margin: '30px auto 0',
        gridArea: 'content',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 20rem))',
        gridAutoRows: 'max-content',
        gridColumnGap: '50px',
        gridRowGap: '50px',
        alignItems: 'start',
        justifyContent: 'center',
        fontFamily: '"Montserrat", sans-serif',
    },
    BookCard: {
        position: 'relative',
        zIndex: 1,
        height: '100%',
        width: '20rem',
        border: '1px solid #111',
        borderRadius: '20px',
        overflow: 'hidden',
        color: '#fff',
        opacity: '0.7',
        transition: 'all 0.3s 0.1s ease-in',
        '& > h2, & > p': {
            margin: '20px'
        },
        '& > p': {
            opacity: '0.7'
        },
        '&:hover': {
            opacity: '1',
            cursor: 'pointer',
            transform: 'rotateX(30deg)',
            boxShadow: '25px 25px 10px #111'
        }
    },
    BookImage: {
        display: 'block',
        width: '20rem',
        height: '30rem',
    },
    BookDescription: {
        width: '70%',
        margin: '0 auto '
    }
}