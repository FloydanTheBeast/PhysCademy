import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button';
import Logo from './components/logo';
import ArrowButtons from './components/arrowButtons';

class App extends React.Component {
    render() {
        return(
            <div className="header">
                <h1 className="label">Logo Component</h1>
                <Logo />
                <h1 className="label">Button Component</h1>
                <Button text="Button"></Button>
                <h1 className="label">Arrow Buttons Component</h1>
                <ArrowButtons />
            </div>
        )
    }
}

let root = document.querySelector("#root");

ReactDOM.render(<App />, root);