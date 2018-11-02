import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import injectStyles from 'react-jss'
import styles from './LessonsListStyles'

class LessonsList extends Component {
    constructor(props) {
        super(props)
        this.axiosSource = axios.CancelToken.source()
        this.state = {
            lessonsList: {}
        }
    }

    componentDidMount() {
        this.getLessonsList()
    }

    componentWillUnmount() {
        this.axiosSource.cancel('Operation canceled due to component being unmounted.')
    }

    render() {
        const { classes } = this.props

        return(
            <div className={`${this.props.extended ? classes.ExtendedLessonsList: classes.LessonsList}`}>
                {this.handleLessonsList()}
            </div>
        )
    }

    getLessonsList() {
        axios.get('http://localhost:8081/lessonsList', {cancelToken: this.axiosSource.token})
            .then(res => {
                this.setState({ lessonsList: res.data })
                this.props.fetchLessons(res.data)
            })
            .catch(err => console.log('Error: ', err))
    }

    handleLessonsList() {
        const { classes } = this.props

        if (this.state.lessonsList) {
            return Object.keys(this.state.lessonsList).map((section, sectionIndex) => {
                return (
                    <div className={classes.LessonsSection} key={`section${sectionIndex}`}>
                        <h1>{section}</h1>
                        {
                            this.state.lessonsList[section].map((lesson, lessonIndex) => {
                                return (
                                    <NavLink activeClassName='selected' onClick={this.handleLinkClick} key={`lesson${lessonIndex}`} to={`/lessons/${section}/${lesson}`}>
                                        <p>{lesson}</p>
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                )
            })
        }
    }

    handleLinkClick() {
        // Скролл вверх документа при обновлении контента
        document.documentElement.scrollTop = 0
    }
}

export default injectStyles(styles)(LessonsList)
