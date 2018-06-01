import React from 'react';
import Button from './button';

const ArrowButtons = (props) => {
    return (
        <div className="control-buttons">
            <Button text="Previous" />
            <Button text="Next" />
        </div>
    );
}

export default ArrowButtons;