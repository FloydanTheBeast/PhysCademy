export default theme => ({
    SettingsMenu: {
        width: '90%',
        margin: '0 auto',
        gridArea: 'content',
        '& h1': {
            fontSize: '3rem',
            margin: '3rem 0'
        },
        '& h2': {
            fontSize: '2rem',
            margin: '0 0 2rem 0'
        },
        '& > div': {
            margin: '0 0 2rem 0',
            padding: '2rem 2.5rem 2rem 2.5rem',
            border: `1px dashed ${theme.borderColorAccent}`,
            borderRadius: '20px'
        }
    },
    ThemesList: {
        display: 'inline-flex',
        flexFlow: 'row wrap',
        overflow: 'hidden',
        padding: 0,
        margin: 0,
        '& > div': {
            border: `1px solid ${theme.borderColorAccent}`,
            width: '12rem',
            height: '4rem',
            textAlign: 'center',
            fontWeight: '800',
            fontSize: '1.25rem',
            lineHeight: '4rem'
        }
    },
    InterfaceSizesList: {
        display: 'inline-flex',
        flexFlow: 'row wrap',
        overflow: 'hidden',
        padding: 0,
        margin: 0,
        '& > div': {
            border: `1px dashed ${theme.borderColorAccent}`,
            backgroundColor: theme.backgroundColor,
            width: '12rem',
            height: '4rem',
            textAlign: 'center',
            fontWeight: '800',
            fontSize: '1.25rem',
            lineHeight: '4rem',
            margin: '0 2rem 2rem 0',
            transition: 'all 0.3s',
            '&:hover': {
                backgroundColor: theme.backgroundColorDarkHover,
                cursor: 'pointer'
            }
        }
    }
})