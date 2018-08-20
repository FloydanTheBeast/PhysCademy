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
                                    <Link onClick={this.handleLinkClick} key={`lesson${lessonIndex}`} to={`/lessons/${section}/${lesson}`}>
                                        <p>{lesson}</p>
                                    </Link>
                                )
                            })
                        }
                    </div>
                )
            });
    };

    handleLinkClick() {
        // Скролл вверх документа при обновлении контента
        document.documentElement.scrollTop = 0;
    };
};

export default injectStyles(styles)(LessonsList);
