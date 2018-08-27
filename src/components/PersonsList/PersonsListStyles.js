export default {
    PersonsList: {
        width: '90%',
        margin: '50px auto 0',
        gridArea: 'content',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 1fr)',
        alignItems: 'start',
        justifyItems: 'stretch',
    },
    PersonCard: {
        maxWidth: '250px',
        overflow: 'hidden',
        border: '3px solid #222',
        borderRadius: '10px',
        textAlign: 'center',
        transition: 'all 0.2s ease-in-out',
        opacity: '0.7',
        '& img': {
            width: '250px',
            height: '250px',
        },
        '& h3': {
            margin: '10px 0',
            color: '#fff',
            font: '1.25rem sans-serif'
        },
        '& p': {
            font: '1rem sans-serif',
            fontWeight: '200'
        },
        '&:hover': {
            transform: 'scale(1.05, 1.05)',
            opacity: '1'
        }
    },
}