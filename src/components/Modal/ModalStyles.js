export default {
    '@global': {
        'body': { overflow: 'hidden' }
    },

    ModalContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        padding: '1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: '9999',
        opacity: 1,
        overflowX: 'hidden',
        overflowY: 'auto',
    },

    Modal: {
        color: '#000',
        width: '60%',
        backgroundColor: '#fff',
        textAlign: 'center',
        borderRadius: '0.5rem'
    },

    ModalCloseBtn: {
        position: 'fixed',
        top: 0,
        right: 0,
        background: '#fff',
        width: '2.5rem',
        height: '2.5rem',
        padding: 0,
        border: 0,
        cursor: 'pointer',
        outline: 0,
        boxShadow: [0, 0, '0.625rem', 'rgba(0, 0, 0, 0.2)'],
    
        '&:before, &:after': {
          content: '""',
          position: 'absolute',
          top: '1.2rem',
          left: '0.25rem',
          width: '2rem',
          height: '0.1rem',
          backgroundColor: '#888',
        },
    
        '&:before': { transform: 'rotate(45deg)' },
        '&:after': { transform: 'rotate(-45deg)' },
    
        '&:hover:before, &:hover:after': {
          backgroundColor: '#444',
        },
      },
};