import React from 'react'
import injectStyles from 'react-jss'
import styles from './TestAnswerStyles'
import Markdown from 'markdown-to-jsx'
import { InlineMath, BlockMath } from '../Math/Math'

const TestAnswer = props => {
    return (
        <div onClick={() => props.handleClick(props.correct)} className={props.classes.AnswerBox}>
            <Markdown options={{
                overrides: {
                    InlineMath,
                    BlockMath
                },
                forceBlock: true
            }}>
                {props.children}
            </Markdown>
        </div>
    )
}

export default injectStyles(styles)(TestAnswer)