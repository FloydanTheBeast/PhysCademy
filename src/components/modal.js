import React, { Component } from 'react';
import injectSheet from 'react-jss';
import styles from './modalStyles';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.hanldleKeyUp = this.hanldleKeyUp.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    };

    componentDidMount() {
        window.addEventListener('keyup', this.hanldleKeyUp);
        document.addEventListener('mouseup', this.handleOutsideClick);
    };

    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleKeyUp);
        document.removeEventListener('click', this.handleOutsideClick);
    };

    render() {
        const {
            onClose,
            classes
        } = this.props;

        console.log('RENDER MODAL');

        return (
            <div className={classes.modalContainer}>
                <div className={classes.modal} ref={node => (this.modal = node)}>
                    <div className={classes.modalContent}>
                        {this.props.children}
                    </div>
                </div>

                <button 
                    type='button'
                    className={classes.modalCloseBtn}
                    onClick={onClose}
                />
            </div>
        );
    };

    hanldleKeyUp(e) {
        if (e.keyCode === 27) {
            e.preventDefault();
            this.props.onClose();
            window.removeEventListener('keyup', this.hanldleKeyUp)
        }
    };

    handleOutsideClick(e) {
        if (this.modal) {
            if (!this.modal.contains(e.target)) {
                this.props.onClose();
                document.removeEventListener('mouseup', this.handleOutsideClick);
            }
        }
    };
};

export default injectSheet(styles)(Modal);