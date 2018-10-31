import React from 'react'
import axios from 'axios'
import injectStyles from 'react-jss'
import Question from '../Question/Question'
import styles from './TestsListStyles'

class TestsList extends React.Component {
    constructor(props) {
        super(props)
        this.fetchTestsList()
        this.state = {
            testsList: []
        }
    }

    render() {
        const { classes } = this.props

        return (
            <div className={classes.TestsContainer}>
                <h1>Проверка знаний</h1>
                <ul className={classes.TestsList}>
                    {this.state.testsList.map(question => (
                        <Question {...question} />
                    ))}
                </ul>
            </div>
        )
    }

    fetchTestsList() {
        axios.get('http://localhost:8081/tests')
            .then(res => {
                this.setState({ testsList: res.data })
            })
            .catch(err => console.log(err.response.data))
    }
}

export default injectStyles(styles)(TestsList)