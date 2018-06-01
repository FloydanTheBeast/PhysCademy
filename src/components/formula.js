import React from 'react'
import ReactDOM from 'react-dom';
import katex from 'katex';

class Formula extends React.Component {
    renderKatex(formula) {
        return katex.renderToString(formula, {displayMode: false});
    }

    componentDidMount() {
    }

    render () {
        return(
            <div dangerouslySetInnerHTML = {{__html: this.renderKatex(this.props.children)}}></div>
        );
    };
};

export default Formula;