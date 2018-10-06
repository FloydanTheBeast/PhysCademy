export default {
    Logo: {
        display: 'flex',
        '& svg': {
            height: '100%',
            height: '80px',
            fontSize: '0',
            boxShadow: '12.5px 12.5px 10px #191919',
            margin: '0 auto',
            color: '#fff',
            transition: 'all 0.3s',
            '&:hover': {
                boxShadow: 'none',
                transform: 'scale(1.1, 1.1)',
                cursor: 'pointer',
                filter: 'contrast(125%)'
            },
        },
        '& .text-left, & .background-right': {
            fill: '#25313c !important',
        },
    },
    Header: {
        position: 'sticky',
        width: '100%',
        top: '2rem',
        zIndex: 1000
    }
};