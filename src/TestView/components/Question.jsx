import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button';
import Choices from './Choices';
import './question.css';


const Question = ({ question, choiceClicked, submit, selectedChoices }) => {
    return (
        <Fragment>
            <h4>{question.statement}</h4>
            <Choices
                questionId={question.id}
                choices={question.options}
                selected={selectedChoices}
                onClick={choiceClicked} />
            <Button action='Next' onClick={() => submit(question.id)} />
        </Fragment>
    );
}

Question.propTypes = {
    question: PropTypes.shape({
        id: PropTypes.string,
        statement: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string,
            id: PropTypes.string
        }))
    }),
    selectedChoices: PropTypes.arrayOf(PropTypes.string),
    choiceClicked: PropTypes.func,
    submit: PropTypes.func
};

Question.defaultProps = {
    question: null,
    selectedChoices: [],
    choiceClicked: () => null,
    submit: () => null
};

export default Question;
