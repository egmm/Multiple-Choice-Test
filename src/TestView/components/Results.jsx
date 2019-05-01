import React, { Fragment } from 'react';
import Button from '../../common/Button';
import './results.css';


const Results = ({ scores, questions, onClick }) => {
    const getResults = (id) => {
        for (const question of scores.results) {
            if (id === question.id) {
                return [question.score, question.result];
            }
        }
    }
    return (
        <Fragment>
            <h2>{`Your total score is `}</h2>
            <p>{`${scores.totalScore} of ${scores.topScore} points`}</p>
            <ul id="results">
                {
                    questions.map((question, k) => {
                        const [score, result] = getResults(question.id);
                        return (
                            <li key={k}>
                                <h5>{question.statement}</h5>
                                <div>
                                    <span className={result}>
                                        {result}
                                    </span>
                                    <span>-</span>
                                    <span>{`${score.toFixed(2)} points`}</span>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
            <Button action='Go home' onClick={onClick} />
        </Fragment>
    );
}

export default Results;
