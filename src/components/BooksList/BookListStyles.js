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
        gridRowGap: '4rem',
        alignItems: 'start',
        justifyContent: 'center'
    },
    BookCard: {
        color: '#fff',
        width: '31rem',
        display: 'flex',
        flexFlow: 'row nowrap',
        borderRadius: '6px',
        overflow: 'hidden',
        transition: 'all 0.5s',
        backgroundImage: "url('assets/Images/BookBackground.jpg')",
        backgroundPosition: 'center',
        backgroundSize: '115%',
        padding: '1rem',
        '&:hover': {
            backgroundSize: '100%',
            '& img': {
                transform: 'scale(1.05)'
            },
            '& $BookInfoBox': {
                paddingBottom: '2rem',
            },
            cursor: 'pointer',
            transform: 'translateY(-10px)',
            boxShadow: `15px 15px 5px ${theme.shadowColor}`
        }
    },
    BookCoverPreview: {
        position: 'relative',
        minWidth: '10rem',
        padding: '2rem 0 3rem 1rem',
        '& > img': {
            transition: 'all 0.6s 0.1s',
            position: 'relative',
            display: 'block',
            margin: '0 auto',
            width: '10rem',
            height: '14rem',
        }
    },
    BookInfoBox: {
        transition: 'all 0.5s',
        display: 'flex',
        width: '100%',
        padding: '0 0 0 1.5rem',
    },
    BookInfo: {
        margin: 'auto 0',
        '& > h1': {
            fontSize: '1.5rem'
        },
        '& > h2': {
            fontSize: '1.125rem',
            opacity: '0.7'
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
            minWidth: '20rem',
            maxWidth: '22rem',
            height: '30rem',
        }
    },
    BookDescription: {
        width: '70%',
        maxWidth: '900px',
        margin: '60px auto 40px'
    }
})