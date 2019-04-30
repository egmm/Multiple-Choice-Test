import React from 'react';
import './button.css';

const Button = ({ action, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="fancy-button">
            {action}
        </button>
    );
}

export default Button;
