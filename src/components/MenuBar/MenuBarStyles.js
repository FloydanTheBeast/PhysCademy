import LightenDarkenColor from '../../utils/LightenDarkenColor'

export default {
    MenuBar: {
        gridArea: 'menu',
        borderRight: '2px solid #fff'
    },
    MenuBarItem: {
        display: 'block',
        position: 'relative',
        width: '150px',
        height: '150px',
        borderBottom: '1px solid #fff',
        '&:hover': {
            backgroundColor: LightenDarkenColor('#34495e', -15),
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