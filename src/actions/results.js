import { checkAnswers as validateAnswers } from '../api/api';

export const SUBMIT_ANSWERS = 'SUBMIT_ANSWERS';
export const RECEIVED_ANSWERS = 'RECEIVED_ANSWERS ';
export const ANSWERS_CHECK_FAILED = 'ANSWERS_CHECK_FAILED ';

// Action Creators
function submitAnswers() {
    return { type: SUBMIT_ANSWERS };
}
function receiveAnswers(payload) {
    return { type: RECEIVED_ANSWERS, payload };
}
function answersCheckFailed(payload) {
    return { type: ANSWERS_CHECK_FAILED, payload };
}


export function checkAnswers(answers) {
    return function (dispatch) {
        dispatch(submitAnswers());
        return validateAnswers(answers)
            .then(response => response, err => {
                console.error(err);
                dispatch(answersCheckFailed(err));
            })
            .then(response => dispatch(receiveAnswers(response)));
    }
}