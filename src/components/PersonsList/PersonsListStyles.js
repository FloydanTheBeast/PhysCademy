import LightenDarkenColor from "../../utils/LightenDarkenColor";

export default theme => ({
    PersonsContainer: {
        width: '100%',
        gridArea: 'content',
        '& > h1': {
            textAlign: 'center',
            fontSize: '3.5rem'
        }
    },
    PersonsList: {
        margin: '6rem auto 40px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 32rem))',
        gridAutoRows: 'max-content',
        gridColumnGap: '3rem',
        gridRowGap: '6rem',
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
        paddingBottom: '2rem',
        width: '32rem',
        borderRadius: '10px',
        backgroundColor: theme.backgroundColorDark,
        transition: 'all 0.4s'
    },

    ImagePreview: {
        boxSizing: 'border-box',
        border: `0px solid ${theme.borderColor}`,
        padding: 0,
        overflow: 'hidden',
        height: '14rem',
        width: '12rem',
        margin: '-2rem 0 auto 1.5rem',
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
        width: '50%',
        padding: '2rem 1.25rem',
        '& > h2': {
            fontSize: '1.5rem'
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