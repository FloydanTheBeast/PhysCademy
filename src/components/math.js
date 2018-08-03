import React from 'react'
import { InlineMath as InlineFormula, BlockMath as BlockFormula } from 'react-katex';

const InlineMath = (props) => {
    return(
        <InlineFormula>
            {String.raw`${props.children}`}
        </InlineFormula>
    );
};

const BlockMath = (props) => {
    return(
        <BlockFormula>
            {String.raw`${props.children}`}
        </BlockFormula>
    );
};


export { InlineMath, BlockMath };