export default {
    PersonsList: {
        width: '90%',
        margin: '50px auto 0',
        gridArea: 'content',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 1fr)',
        alignItems: 'start',
        justifyItems: 'stretch',
        fontFamily: '"Montserrat", sans-serif'
    },
    PersonCard: {
        maxWidth: '250px',
        overflow: 'hidden',
        border: '3px solid #222',
        borderRadius: '10px',
        textAlign: 'center',
        transition: 'all 0.2s ease-in-out',
        opacity: '0.7',
        color: '#fff',
        '& img': {
            width: '250px',
            height: '250px',
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
    PersonImage: {
        width: '20rem',
        margin: '20px auto 0',
        
        '& > img': {
            width: '20rem',
            height: '20rem',
            borderRadius: '5px',
        }
    }
}