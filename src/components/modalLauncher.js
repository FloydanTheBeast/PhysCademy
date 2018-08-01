import React, { Component } from 'react';
import Modal from './modal';
import injectStyles from 'react-jss';
import styles from './modalLauncherStyles';

class ModalLauncher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpenned: false
        }
    };
    
    render() {
        const { classes } = this.props;

        return (
            <div>
                <button
                    type='button'
                    className={classes.modalOpenBtn}
                    onClick={this.toggleModal.bind(this)}
                >
                    {this.props.buttonLabel}
                </button>

                { this.state.modalIsOpenned &&
                    <Modal onClose={this.toggleModal.bind(this)}>
                        {this.props.children}
                    </Modal>
                }
            </div>
        );
    };

    toggleModal() {
        this.setState(
            { modalIsOpenned: !this.state.modalIsOpenned }
        );
    }
};

export default injectStyles(styles)(ModalLauncher);