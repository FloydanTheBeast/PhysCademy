import LightenDarkenColor from '../../utils/LightenDarkenColor'

export default theme => ({
    BooksContainer: {
        gridArea: 'content',
        width: '100%',
        '& > h1': {
            textAlign: 'center',
            fontSize: '3.5rem'
        }
    },
    BooksList: {
        margin: '40px auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 33rem))',
        gridAutoRows: 'max-content',
        gridColumnGap: '2rem',
        gridRowGap: '3rem',
        alignItems: 'start',
        justifyContent: 'center'
    },
    BookCard: {
        width: '33rem',
        display: 'flex',
        flexFlow: 'row nowrap',
        borderRadius: '6px',
        overflow: 'hidden',
        transition: 'all 0.35s 0.1s',
        border: `3px solid ${theme.borderColor}`,
        '&:hover': {
            '& img': {
                transform: 'scale(1.05)'
            },
            cursor: 'pointer',
            border: `3px solid ${theme.borderColorAccent}`,
            transform: 'translateY(-10px)',
            boxShadow: `15px 15px 5px ${theme.shadowColor}`
        }
    },
    BookCoverPreview: {
        position: 'relative',
        minWidth: '15rem',
        padding: '3rem 0',
        '& > img': {
            transition: 'all 0.5s 0.1s',
            position: 'relative',
            display: 'block',
            margin: '0 auto',
            width: '10rem',
            height: '14rem',
        }
    },
    Background: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundImage: "url('assets/Images/BookBackground.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // filter: 'blur(1px)',
        filter: 'contrast(90%)'
    },
    BookInfoBox: {
        display: 'flex',
        width: '100%',
        backgroundColor: theme.backgroundColorDark,
        padding: '0 1.5rem',
    },
    BookInfo: {
        margin: 'auto 0',
        '& > h1': {
            fontSize: '1.5rem'
        },
        '& > h2': {
            fontSize: '1.125rem',
            opacity: '0.6'
        }
    },
    BookCardHeader: {
        textAlign: 'center',
        '& > h2': {
            fontSize: '2rem'
        },
        '& > p': {
            fontSize: '1.25rem'
        }
    },
    BookCover: {
        '& img': {
            display: 'block',
            borderRadius: '20px',
            position: 'relative',
            left: '50%',
            margin: '40px -50% 40px 0',
            transform: 'translate(-50%, 0)',
            width: '20rem',
            height: '30rem',
        }
    },
    BookDescription: {
        width: '70%',
        maxWidth: '900px',
        margin: '60px auto 40px'
    }
})