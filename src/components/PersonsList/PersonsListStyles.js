export default {
    PersonsList: {
        width: '95%',
        margin: '40px auto 0',
        gridArea: 'content',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 250px))',
        gridAutoRows: 'max-content',
        gridColumnGap: '40px',
        gridRowGap: '40px',
        alignItems: 'start',
        justifyContent: 'center',
        fontFamily: '"Montserrat", sans-serif',
    },
    PersonCardContainer: {
        height: '100%'
    },
    PersonCard: {
        maxWidth: '250px',
        height: '100%',
        overflow: 'hidden',
        border: '3px solid #222',
        borderRadius: '10px',
        textAlign: 'center',
        transition: 'all 0.2s ease-in-out',
        opacity: '0.7',
        color: '#fff',
        '& img': {
            height: '250px',
            minWidth: '100%'
        },
        '& h3': {
            margin: '10px 0',
            fontSize: '1.25rem'
        },
        '& p': {
            fontSize: '0.875rem',
            fontWeight: '200'
        },
        '&:hover': {
            transform: 'scale(1.05, 1.05)',
            opacity: '1',
            cursor: 'pointer'
        }
    },
    ImagePreview: {
        '& img': {
            position: 'relative',
            left: '50%',
            marginRight: '-50',
            transform: 'translate(-50%, 0)'
        }
    },
    PersonImage: {
        width: '20rem',
        margin: '20px auto 0',
        '& > img': {
            height: '20rem',
            borderRadius: '5px',
        }
    },
    PersonCardHeader: {
        textAlign: 'center',
        '& > h2': {
            fontSize: '2rem'
        },
        '& > p': {
            fontSize: '1.25rem'
        }
    },
    PersonBio: {
        width: '70%',
        margin: '40px auto',
    }
}