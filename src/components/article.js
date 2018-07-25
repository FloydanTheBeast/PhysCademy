import React, {Component} from 'react';
import axios from 'axios';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8081/lessons?name=test')
            .then(res => this.setState(
                {
                    text: res.data
                }
            ))
            .catch(err => console.error(err.response.data));
    }

    render() {
        return (
            <div className="article">
                <h1 className="article-title">{this.props.title}</h1>
                <div>{this.props.children}{this.state.text}</div>
            </div>
        );
    }
};

export default Article;