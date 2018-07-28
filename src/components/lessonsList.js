import React, { Component } from 'react'

class LessonsList extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            <ul>
                {this.fetchLessonsList()}
            </ul>
        );
    };

    fetchLessonsList() {
        return this.props.lessons.map((lesson, index) => {
            return (
                <div className="article" key={index}>
                    <h1>{lesson.name}</h1>
                    <p>Test content</p>
                </div>
            )
        });
    };
}

export default LessonsList;
