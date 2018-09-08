export default {
    PersonsList: {
        width: '90%',
        margin: '50px auto 0',
        gridArea: 'content',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 250px))',
        gridColumnGap: '30px',
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
        overflow: 'hidden',
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
    PersonImage: {
        width: '20rem',
        overflow: 'hidden',
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