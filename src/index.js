import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import themes from './themes'
import { ThemeProvider } from 'react-jss'

let root = document.querySelector("#root")

class ThemedApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'light'
        }
    }

    render() {
        return (
            <ThemeProvider theme={themes[this.state.theme]}>
                <App changeTheme={this.changeTheme.bind(this)} />
            </ThemeProvider>
        )
    }

    changeTheme(theme) {
        this.setState({ theme })
    }
}

ReactDOM.render(<ThemedApp />, root)