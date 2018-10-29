import LightenDarkenColor from './utils/LightenDarkenColor'

export default {
    light: {
        fontColor: '#444',
        backgroundColor: '#fff',
        backgroundColorDark: LightenDarkenColor('#ffffff', -5),
        backgroundColorDarkHover: LightenDarkenColor('#ffffff', -15),
        backgroundColorLight: '#fff',
        iconColor: '#222',
        borderColor: '#888',
        borderColorAccent: '#444',
        shadowColor: '#555'
    },
    dark: {
        fontColor: '#fff',
        backgroundColor: '#2C3A47',
        backgroundColorDark: LightenDarkenColor('#2C3A47', -15),
        backgroundColorDarkHover: LightenDarkenColor('#2C3A47', -30),
        backgroundColorLight: LightenDarkenColor('#2C3A47', 20),
        iconColor: '#fff',
        borderColor: '#222',
        borderColorAccent: '#fff',
        shadowColor: '#111'
    }
}