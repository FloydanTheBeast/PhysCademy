import LightenDarkenColor from '../../utils/LightenDarkenColor'

export default {
    LessonsList: {
        gridArea: 'list',
        textAlign: 'center',
        height: '100vh',
        minWidth: '250px',
        borderRight: '2px solid #fff',
        '& h1': {
            color: '#fff'
        },
        '& a:hover': {
            color: LightenDarkenColor('#ffffff', -25),
            transition: 'color 0.3s'
        }
    }
}