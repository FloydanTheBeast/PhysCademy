import React from 'react';

const Button = (props) => {
    if (!props.img)
        return (
            <div className="button">{props.text}</div>
        );
    else
        return (
            <div className="button">
                {props.text}
                <object data={Img} type="image/svg+xml" className="arrow-icon"></object>
            </div>
        );
};

export default Button;