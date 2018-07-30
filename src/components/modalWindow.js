import React from 'react';
import Button from './button'

/* TODO: Переделать компонент, сделать его независимым 
от передающихся в props функций и от z-index */

class Modal extends React.Component {
    render() {
        if (!this.props.isOpened) return null;
        
        return(
            <div className="modal">
                <div className="modal-window">
                    {this.props.children}
                    <Button text="Close" onClick={this.close.bind(this)}/>
                </div>
                <div className="modal-background" onClick={this.close.bind(this)}></div>
            </div>
        );
    };

    close() {
        if (this.props.onClose) this.props.onClose();
    }
}

export default Modal;