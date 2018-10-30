export default {
    HomePage: {
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)',
        fontFamily: 'Montserrat',
        width: '70%',
        margin: '0 auto',
        fontSize: '32px',
        lineHeight: '150%',
        '& span': {
            transition: 'all 0.3s',
            opacity: '0.9'
        }
    },
    AppName: {
        display: 'inline-block',
        margin: 0,
        fontSize: '4rem',
        transition: 'all 0.3s',
        '&:hover': {
            '&+span': {
                opacity: '0.3'
            }
        }
    }
}