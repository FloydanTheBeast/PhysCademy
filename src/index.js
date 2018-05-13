import 'katex/dist/katex.css';
import KaTeX from 'katex';

import React from 'react';
import ReactDOM from 'react-dom';

import Button from './components/button';
import Logo from './components/logo';
import ArrowButtons from './components/arrowButtons';
import Article from './components/article';
import Formula from './components/formula';

const title = "Lorem ipsum dolor sit amet.";
const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem atque expedita, esse assumenda, recusandae vitae commodi reprehenderit illum quia natus eaque ad at sit, mollitia ut earum numquam temporibus nam. Voluptatibus dolores, officiis numquam quisquam quibusdam enim a deleniti inventore aperiam maiores placeat hic pariatur, suscipit optio cupiditate, modi illo.";

import './main.css';

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
                <h1 className="label">Article Component</h1>
                <Article title={title} text={text}><Formula>{"c = \\pm\\sqrt{a^2 + b^2}"}</Formula></Article>
            </div>
        )
    }
}

let root = document.querySelector("#root");

ReactDOM.render(<App />, root);