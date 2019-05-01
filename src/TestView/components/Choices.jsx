import React from 'react';
import PropTypes from 'prop-types'
import Checkbox from '../../common/Checkbox';
import './choices.css';


const Choices = ({ questionId, choices, selected, onClick }) => {
    return (
        <ul className="choices">
            {
                choices.map((choice, k) => {
                    const isSelected = selected.includes(choice.id);
                    return (
                        <li key={k} onClick={() => onClick(choice.id, questionId)}>
                            <Checkbox isSelected={isSelected} />
                            <span>{choice.value}</span>
                        </li>
                    );
                })
            }
        </ul>
    );
}

Choices.propTypes = {
    choices: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        value: PropTypes.string
    })),
    selected: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func
}

Choices.defaultProps = {
    choices: [],
    selected: [],
    onClick: () => null
};

export default Choices;
