import React from 'react';
import katex from 'katex';
import injectStyles from 'react-jss';
import blockMathStyles from './BlockMathStyles';
import inlineMathStyles from './InlineMathStyles';

const renderTex = (raw) => {
    return {
        __html: ` ${katex.renderToString(raw)} `
    }
}

const InlineMathComponent = (props) => {
    return(
        <span className={props.classes.InlineMath} dangerouslySetInnerHTML={
            renderTex(String.raw`${props.math}`)
        }></span>
    );
};

const BlockMathComponent = (props) => {
    return(
        <div className={props.classes.BlockMath} dangerouslySetInnerHTML={
            renderTex(String.raw`${props.math}`)
        }></div>
    );
};

const BlockMath = injectStyles(blockMathStyles)(BlockMathComponent);
const InlineMath = injectStyles(inlineMathStyles)(InlineMathComponent);

export { InlineMath, BlockMath };