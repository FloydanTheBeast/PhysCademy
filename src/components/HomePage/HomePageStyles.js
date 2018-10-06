export default {
    HomePage: {
        position: 'relative',
        top: '50%',
        transform: 'translateY(calc(-50% - 80px))',
        fontFamily: 'Montserrat',
        color: '#fff',
        width: '60%',
        margin: '0 auto',
        fontSize: '32px',
        lineHeight: '150%',
        '& span': {
            transition: 'all 0.3s',
            opacity: '0.8'
        }
    },
    AppName: {
        display: 'inline-block',
        margin: 0,
        fontSize: '4rem',
        transition: 'all 0.3s',
        '&:hover': {
            fontSize: '5rem',
            '&+span': {
                opacity: '0.5'
            }
        }
    }
}