import LightenDarkenColor from '../../utils/LightenDarkenColor'

export default {
    BooksList: {
        width: '95%',
        margin: '40px auto 40px',
        gridArea: 'content',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 900px))',
        gridAutoRows: 'max-content',
        gridColumnGap: '100px',
        gridRowGap: '100px',
        alignItems: 'start',
        justifyContent: 'center',
        fontFamily: '"Montserrat", sans-serif',
    },
    BookCard: {
        width: '900px',
        display: 'flex',
        flexFlow: 'row nowrap',
        borderRadius: '6px',
        overflow: 'hidden',
        transition: 'all 0.35s 0.1s',
        border: '5px solid #182028',
        '&:hover': {
            '& img': {
                transform: 'scale(1.05)'
            },
            cursor: 'pointer',
            border: '5px solid #fff',
            transform: 'translateY(-10px)',
            boxShadow: '15px 15px 5px #111'
        }
    },
    BookCoverPreview: {
        position: 'relative',
        minWidth: '25rem',
        padding: '5rem 0',
        '& > img': {
            transition: 'all 0.5s 0.1s',
            position: 'relative',
            display: 'block',
            margin: '0 auto',
            width: '15rem',
            height: '22rem',
        }
    },
    Background: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundImage: "url('../../../../../assets/Images/BookBackground.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        filter: 'blur(0.5px)',
        filter: 'contrast(90%)'
    },
    BookInfoBox: {
        display: 'flex',
        width: '100%',
        color: '#fff',
        backgroundColor: '#182028',
        padding: '0 60px',
    },
    BookInfo: {
        margin: 'auto 0',
        '& > h1': {
            fontSize: '2rem'
        },
        '& > h2': {
            fontSize: '1.5rem',
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
}