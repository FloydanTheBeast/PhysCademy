import React, { Component } from 'react';
import injectStyles from 'react-jss';
import axios from 'axios';
import path from 'path';
import { Link } from 'react-router-dom';
import styles from './PersonsListStyles';
import ModalLauncher from '../ModalLauncher/ModalLauncher';

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
                    <ModalLauncher key={`person${personIndex}`} button={
                        <div className={classes.PersonCard}>
                            {/* <div className={classes.Image} style={{backgroundImage: `url('${imageUrl}')`}}>

                            </div> */}
                            <img src={imageUrl} />
                            <h3>{person}</h3>
                            <p>
                                {this.state.personsList[person]['date-of-birth'] || 'Дата рождения не указана'}
                                -
                                {this.state.personsList[person]['date-of-death'] || 'Дата смерти не указана'}
                            </p>
                        </div>
                    }>
                        {this.state.personsList[person].bio}
                    </ModalLauncher>
                )
            });
        }
    }
}

export default injectStyles(styles)(PersonsList);