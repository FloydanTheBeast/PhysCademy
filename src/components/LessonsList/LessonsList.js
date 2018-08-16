import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import injectStyles from 'react-jss';
import styles from './LessonsListStyles';

class LessonsList extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { classes } = this.props;

        return(
            <div className={`${this.props.extended ? classes.ExtendedLessonsList: classes.LessonsList}`}>
                {this.fetchLessonsList()}
            </div>
        );
    };

    fetchLessonsList() {
        const { classes } = this.props;

        if (this.props.lessons)
            return Object.keys(this.props.lessons).map((section, sectionIndex) => {
                return (
                    <div className={classes.LessonsSection} key={`section${sectionIndex}`}>
                        <h1>{section}</h1>
                        {
                            this.props.lessons[section].map((lesson, lessonIndex) => {
                                return (
                                    <Link key={`lesson${lessonIndex}`} to={`/lessons/${section}/${lesson.name}`}>
                                        <p>{lesson.name}</p>
                                    </Link>
                                )
                            })
                        }
                    </div>
                )
            });
    };
}

export default injectStyles(styles)(LessonsList);
