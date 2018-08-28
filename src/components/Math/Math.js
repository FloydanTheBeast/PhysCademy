import React from 'react';
import katex from 'katex';
import injectStyles from 'react-jss';
import { InlineMathStyles, BlockMathStyles } from './MathStyles';
import styles from './MathStyles';

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

const BlockMath = injectStyles(BlockMathStyles)(BlockMathComponent);
const InlineMath = injectStyles(InlineMathStyles)(InlineMathComponent);

export { InlineMath, BlockMath };