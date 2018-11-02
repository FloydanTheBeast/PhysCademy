import React from 'react'
import ReactDOM from 'react-dom'
import { ipcRenderer } from 'electron'
import App from './App'
import themes from './themes'
import { ThemeProvider } from 'react-jss'

let root = document.querySelector("#root")

class ThemedApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'light',
            interfaceSize: 1
        }
    }

    componentDidMount() {
        ipcRenderer.send('settings:load')
        ipcRenderer.on('settings:loaded', (event, settings) => {
            if (settings) this.setState(settings)
        })
    }

    render() {
        const theme = Object.assign({}, themes[this.state.theme])
        theme.interfaceSize = this.state.interfaceSize

        return (
            <ThemeProvider theme={theme}>
                <App
                    changeTheme={this.changeTheme.bind(this)}
                    setIntefaceSize={this.setIntefaceSize.bind(this)} />
            </ThemeProvider>
        )
    }

    setIntefaceSize(interfaceSize) {
        const settings = Object.assign({}, { theme: this.state.theme }, { interfaceSize })
        ipcRenderer.send('settings:save', settings)
        this.setState({ interfaceSize })
    }

    changeTheme(theme) {
        const settings = Object.assign({}, { theme }, { interfaceSize: this.state.interfaceSize })
        ipcRenderer.send('settings:save', settings)
        this.setState({ theme })
    }
}

ReactDOM.render(<ThemedApp />, root)