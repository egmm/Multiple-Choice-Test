import {
    TEST_REQUEST,
    TEST_RECEIVED,
    TEST_REQUEST_FAILED,
    ANSWERS_TO_SUBMIT
} from '../actions/multipleChoiceTest';

const initialState = {
    isFetching: false,
    content: null,
    error: null,
    answers: []
};

export function testView(state = initialState, action) {
    switch (action.type) {
        case TEST_REQUEST:
            return { ...state, isFetching: true };
        case TEST_RECEIVED:
            return { ...state, isFetching: false, content: action.payload };
        case TEST_REQUEST_FAILED:
            return { ...state, isFetching: false, error: action.payload };
        case ANSWERS_TO_SUBMIT:
            return { ...state, answers: [...state.answers, action.payload] };
        default:
            return state;
    }
}