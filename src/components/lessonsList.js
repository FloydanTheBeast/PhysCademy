import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LessonsList extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            <div className='lessons-list'>
                {this.fetchLessonsList()}
            </div>
        );
    };

    fetchLessonsList() {
        if (this.props.lessons)
            return Object.keys(this.props.lessons).map((section, sectionIndex) => {
                return (
                    <div className='lessons-section' key={`section${sectionIndex}`}>
                        <h1>{section}</h1>
                        {
                            this.props.lessons[section].map((lesson, lessonIndex) => {
                                return (
                                    <Link key={`lesson${lessonIndex}`} to={`/lessons/${section}/${lesson.name}`}>
                                        <h2>{lesson.name}</h2>
                                    </Link>
                                )
                            })
                        }
                    </div>
                )
            });
    };
}

export default LessonsList;
