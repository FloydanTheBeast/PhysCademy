const ImageAlignment = {
    position: 'relative',
    left: '50%',
    top: '50%',
    marginRight: '50%',
    transform: 'translate(-50%, 0)'
}

export default {
    PersonsList: {
        width: '95%',
        margin: '40px auto 40px',
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
        borderRadius: '20px',
        textAlign: 'center',
        transition: 'all 0.2s ease-in-out',
        opacity: '0.75',
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
            extend: ImageAlignment
        }
    },
    PersonImage: {
        width: '80%',
        margin: '20px auto 0',
        overflow: 'hidden',
        borderRadius: '20px',
        '& > img': {
            extend: ImageAlignment,
            height: '20rem',
            borderRadius: '20px',
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
        maxWidth: '900px',
        margin: '60px auto 40px',
    }
}