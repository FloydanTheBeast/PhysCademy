import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button';
import Logo from './components/logo';

class App extends React.Component {
    render() {
        return(
            <h1 className="logo">Test</h1>
        )
    }
}

let root = document.querySelector("#root");

ReactDOM.render(<App />, root);