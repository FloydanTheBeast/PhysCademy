import React from 'react'
import injectStyles from 'react-jss'
import Markdown from 'markdown-to-jsx'
import { InlineMath, BlockMath } from '../Math/Math'
import TestAnswer from '../TestAnswer/TestAnswer'
import ExpandableText from '../ExpandableText/ExpandableText'
import styles from './QuestionStyles'

class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasAnswered: false,
            correctAnswer: false
        }
    }

    render() {
        const { classes } = this.props
        const isWrong = this.state.hasAnswered && !this.state.correctAnswer
        const isCorrect = this.state.correctAnswer

        return (
            <div className={`${classes.QuestionBox} ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}>
                <h2>{this.props.name}</h2>

                <Markdown options={{
                    overrides: {
                        InlineMath,
                        BlockMath
                    },
                    forceBlock: true
                }}>
                    {this.props.task}
                </Markdown>

                <div className={classes.OptionsBox}>
                    {this.props.options.map((option, index) => {
                        return (
                        <TestAnswer
                            key={index}
                            handleClick={this.handleChoice.bind(this)}
                            correct={parseInt(this.props.answer) === index ? 1 : null}>
                            {option}
                        </TestAnswer>
                    )})}
                </div>
                
                {this.state.hasAnswered && (
                    <ExpandableText title={'Решение'}>
                        <Markdown options={{
                            overrides: {
                                InlineMath,
                                BlockMath
                            },
                            forceBlock: true
                        }}>
                            {this.props.solution}
                        </Markdown>
                    </ExpandableText>
                )}
            </div>
        )
    }

    handleChoice(isCorrect) {
        if (isCorrect)
            this.setState({
                hasAnswered: true,
                correctAnswer: true
            })
        else 
            this.setState({
                hasAnswered: true,
                correctAnswer: false
            })
    }

}

export default injectStyles(styles)(Question)