import React, { Component } from 'react';
import injectSheet from 'react-jss';
import styles from './ModalStyles';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.hanldleKeyDown = this.hanldleKeyDown.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    };

    componentDidMount() {
        window.addEventListener('keydown', this.hanldleKeyDown);
        document.addEventListener('mouseup', this.handleOutsideClick);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
        document.removeEventListener('mouseup', this.handleOutsideClick);
    };

    render() {
        const {
            onClose,
            classes
        } = this.props;

        return (
            <div className={classes.ModalContainer}>
                <div className={classes.Modal} ref={node => (this.modal = node)}>
                    <div className={classes.ModalContent}>
                        {this.props.children}
                    </div>
                </div>

                <button 
                    type='button'
                    className={classes.ModalCloseBtn}
                    onClick={onClose}
                />
            </div>
        );
    };

    closeModal() {
        window.removeEventListener('keydown', this.hanldleKeyDown);
        document.removeEventListener('mouseup', this.handleOutsideClick);
        this.props.onClose();
    }

    hanldleKeyDown(e) {
        if (e.keyCode === 27) {
            e.preventDefault();
            this.closeModal();
        }
    };

    handleOutsideClick(e) {
        if (this.modal) {
            if (!this.modal.contains(e.target)) {
                this.closeModal();
            }
        }
    };
};

export default injectSheet(styles)(Modal);