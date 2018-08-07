import React from 'react';
import katex from 'katex';

const renderTex = (raw) => {
    return {
        __html: ` ${katex.renderToString(raw)} `
    }
}

const InlineMath = (props) => {
    return(
        <span dangerouslySetInnerHTML={
            renderTex(String.raw`${props.math}`)
        }></span>
    );
};

const BlockMath = (props) => {
    return(
        <div dangerouslySetInnerHTML={
            renderTex(String.raw`${props.math}`)
        }></div>
    );
};

export { InlineMath, BlockMath };