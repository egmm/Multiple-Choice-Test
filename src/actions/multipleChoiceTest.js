import { multiChoiceTest } from '../api/api';

// Actions
export const TEST_REQUEST = 'TEST_REQUEST ';
export const TEST_RECEIVED = 'TEST_RECEIVED ';
export const TEST_REQUEST_FAILED = 'TEST_REQUEST_FAILED ';

// Action Creators
function getTest() {
    return { type: TEST_REQUEST };
}
function receiveTest(payload) {
    return { type: TEST_RECEIVED, payload };
}
function fetchTestFail(payload) {
    return { type: TEST_RECEIVED, payload };
}

export function fetchTest() {
    return function (dispatch) {
        dispatch(getTest);
        return multiChoiceTest()
            .then(response => response, err => {
                console.error(err);
                dispatch(fetchTestFail(err));
            })
            .then(response => dispatch(receiveTest(response)));
    }
}