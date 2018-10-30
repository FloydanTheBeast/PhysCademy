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
        width: '120px',
    },
    MenuBarItem: {
        display: 'block',
        position: 'relative',
        width: '120px',
        height: '120px',
        transition: 'background-color 0.3s ease-in-out, border-left 0.3s ease-in-out',
        '&:focus': {
            backgroundColor: '#f1bb4a',
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
            width: '80px',
            height: '80px',
            fill: theme.iconColor,
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-in-out'
        }
    }
})