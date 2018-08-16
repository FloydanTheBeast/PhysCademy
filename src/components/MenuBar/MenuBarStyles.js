import LightenDarkenColor from '../../utils/LightenDarkenColor'

export default {
    MenuBar: {
        backgroundColor: LightenDarkenColor('#2C3A47', -15),
        gridArea: 'menu',
        borderRight: '2px solid #222',
        position: 'sticky',
        height: '100vh',
        overflowY: 'auto',
        top: '0',
        width: '150px'
    },
    MenuBarItem: {
        display: 'block',
        position: 'relative',
        width: '150px',
        height: '150px',
        '&:hover': {
            backgroundColor: LightenDarkenColor('#2C3A47', -40),
            cursor: 'pointer'
        }
    },
    MenuBarIcon: {
        '& svg': {
            width: '130px',
            height: '130px',
            fill: '#fff',
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            '& line, & path': {
                stroke: '#fff !important',
                fill: '#fff !important'
            }
        }
    }
}