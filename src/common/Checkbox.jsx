import React from 'react';
import './checkbox.css';


const Checkbox = ({ isSelected = false }) => {
    return <div className={`checkbox ${isSelected && 'checked'}`}></div>;
}

export default Checkbox;