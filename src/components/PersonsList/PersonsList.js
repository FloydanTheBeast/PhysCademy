import React, { Component } from 'react';
import injectStyles from 'react-jss';
import axios from 'axios';
import path from 'path';
import styles from './PersonsListStyles';
import ModalLauncher from '../ModalLauncher/ModalLauncher';
import Markdown from 'markdown-to-jsx';

class PersonsList extends Component {
    constructor(props) {
        super(props);
        this.axiosSource = axios.CancelToken.source();
        this.state = {
            personsList: {}
        }
    }

    componentDidMount() {
        this.getPersonsList();
    }

    componentWillUnmount() {
        this.axiosSource.cancel('Operation canceled due to component being unmounted.');
    }

    render() {
        const { classes } = this.props;

        return(
            <div className={classes.PersonsList}>
                {this.handlePersonsList()}
            </div>
        )
    }

    getPersonsList() {
        axios.get('http://localhost:8081/personsList', {cancelToken: this.axiosSource.token})
            .then(res => {
                this.setState({
                    personsList: res.data
                });
            })
            .catch(err => console.log('Error: ', err))
    }

    handlePersonsList() {
        const { classes } = this.props;

        if (this.state.personsList) {
            return Object.keys(this.state.personsList).map((person, personIndex) => {
                const imageUrl = path.join(__dirname, 'server', this.state.personsList[person]['image']);

                return (
                    <ModalLauncher className={classes.PersonCard} key={`person${personIndex}`} button={[
                        <div className={classes.ImagePreview} key='image'>
                            <img src={imageUrl} />
                        </div>,
                        <h3 key='name'>{person}</h3>,
                        <p key='briefInfo'>
                            {this.state.personsList[person]['date-of-birth'] || 'Дата рождения не указана'}
                            -
                            {this.state.personsList[person]['date-of-death'] || 'Дата смерти не указана'}
                        </p>
                    ]}>

                        <div className={classes.PersonCardHeader}>
                            <div className={classes.PersonImage}>
                                <img src={imageUrl} />
                            </div>
                            <h2>{person}</h2>
                            <p>
                                {this.state.personsList[person]['date-of-birth'] || 'Дата рождения не указана'}
                                -
                                {this.state.personsList[person]['date-of-death'] || 'Дата смерти не указана'}
                            </p>
                        </div>

                        <Markdown className={classes.PersonBio} options={{
                            forceBlock: true
                        }}>
                            {this.state.personsList[person].bio}
                        </Markdown>
                    </ModalLauncher>
                )
            });
        }
    }
}

export default injectStyles(styles)(PersonsList);