import LightenDarkenColor from "../../utils/LightenDarkenColor";

export default theme => ({
    PersonsList: {
        width: '95%',
        margin: '40px auto 40px',
        paddingTop: '10rem',
        gridArea: 'content',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 45rem))',
        gridAutoRows: '30rem',
        gridColumnGap: '4rem',
        gridRowGap: '1rem',
        alignItems: 'start',
        justifyContent: 'center',
        fontFamily: '"Montserrat", sans-serif',
    },
    PersonCardContainer: {
        height: '100%'
    },
    PersonCard: {
        '&:hover': {
            cursor: 'pointer',
            transform: 'translateY(-5px)',
            boxShadow: `15px 15px 5px ${theme.shadowColor}`,
            '& $ImagePreview': {
                border: `4px solid ${theme.borderColor}`,
                transform: 'translateY(-1rem)'
            }
        },
        display: 'flex',
        position: 'relative',
        margin: 'auto',
        width: '45rem',
        height: '45%',
        borderRadius: '5px',
        backgroundColor: theme.backgroundColorDark,
        transition: 'all 0.4s'
    },

    ImagePreview: {
        boxSizing: 'border-box',
        border: `0px solid ${theme.borderColor}`,
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
})