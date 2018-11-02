import LightenDarkenColor from '../../utils/LightenDarkenColor'

export default theme => ({
    MenuBar: {
        transition: 'all 0.3s ease-in-out',
        backgroundColor: theme.backgroundColorDark,
        gridArea: 'menu',
        borderRight: `2px solid ${theme.borderColor}`,
        position: 'sticky',
        height: '100vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        top: '0',
        width: '7.5rem',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    MenuBarItem: {
        display: 'block',
        position: 'relative',
        width: '7.5rem',
        height: '7.5rem',
        borderLeft: `0 solid ${theme.backgroundColorAccentDark}`,
        borderTop: '0 solid transparent',
        borderBottom: '0 solid transparent',
        transition: 'background-color 0.3s ease-in-out, border 0.5s ease-in-out',
        boxSizing: 'border-box',
        '&:focus': {
            backgroundColor: theme.backgroundColorAccentDark,
            outline: 'none'
        },
        '&.selected': {
            borderLeft: `0.75rem solid ${theme.backgroundColorAccentDark}`,
            borderTop: '0.75rem solid transparent',
            borderBottom: '0.75rem solid transparent',
            boxSizing: 'border-box',
            backgroundColor: theme.backgroundColorAccent,
            '& svg': {
                fill: `${theme.iconColorSelected} !important`,
            }
        },
        '&:not(.selected):hover': {
            backgroundColor: theme.backgroundColorDarkHover,
            cursor: 'pointer'
        }
    },
    MenuBarIcon: {
        '& svg': {
            width: '5rem',
            height: '5rem',
            fill: theme.iconColor,
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-in-out',
            '& path': {
                fill: `${theme.iconColor} !important`
            }
        }
    }
})