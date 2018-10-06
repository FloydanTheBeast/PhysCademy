export default {
    Logo: {
        width: '500px',
        fontSize: '0',
        boxShadow: '12.5px 12.5px 10px #191919',
        margin: '40px auto',
        color: '#fff',
        transition: 'all 0.3s',
        '&:hover': {
            boxShadow: 'none',
            width: '600px',
            cursor: 'pointer',
            filter: 'contrast(125%)'
        },
        '& .text-left, & .background-right': {
            fill: '#25313c !important',
        },
    },
    Fixed: {
        position: 'fixed',
        left: '50%',
        transform: 'translateX(-50%)'
    }
};