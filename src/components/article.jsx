import React from 'react';
import ReactDOM from 'react-dom';

const Article = (props) => {
    return (
        <div className="article">
            <h1 className="article-title">{props.title}</h1>
            <p>{props.children}</p>
        </div>
    );
};


export default Article;