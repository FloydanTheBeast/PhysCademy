import LightenDarkenColor from "../../utils/LightenDarkenColor";

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
        paddingTop: '10rem',
        gridArea: 'content',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 660px))',
        gridAutoRows: '30rem',
        gridColumnGap: '4rem',
        gridRowGap: '1rem',
        alignItems: 'start',
        justifyContent: 'center',
        fontFamily: '"Montserrat", sans-serif',
        color: '#fff'
    },
    PersonCardContainer: {
        height: '100%'
    },
    PersonCard: {
        '&:hover': {
            cursor: 'pointer',
            transform: 'translateY(-5px)',
            boxShadow: '15px 15px 5px #111',
            '& $ImagePreview': {
                border: '4px solid #fff',
                transform: 'translateY(-1rem)'
            }
        },
        display: 'flex',
        position: 'relative',
        margin: 'auto',
        width: '45rem',
        height: '45%',
        borderRadius: '5px',
        backgroundColor: '#182028',
        transition: 'all 0.4s'
    },

    ImagePreview: {
        boxSizing: 'border-box',
        border: '0px solid #182028',
        padding: 0,
        overflow: 'hidden',
        height: '22rem',
        width: '20rem',
        margin: '-10rem 0 0 3rem',
        transition: 'all 0.4s',
        '& img': {
            height: '100%',
            minWidth: '100%',
            position: 'relative',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        }
    },
    Info: {
        width: '40%',
        padding: '2rem 3rem',
        '& > h2': {
            fontSize: '2rem'
        },
        '& > p': {
            opacity: 0.7
        }
    },
    PersonImage: {
        width: '80%',
        margin: '40px auto 0',
        overflow: 'hidden',
        '& > img': {
            height: '20rem',
            borderRadius: '10px',
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