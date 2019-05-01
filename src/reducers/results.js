import {
    SUBMIT_ANSWERS,
    RECEIVED_ANSWERS,
    ANSWERS_CHECK_FAILED
} from '../actions/results';

const initialState = {
    isFetching: false,
    results: null,
    error: null
}

export function scores(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_ANSWERS:
            return { ...state, isFetching: true };
        case RECEIVED_ANSWERS:
            return {
                ...state,
                isFetching: false,
                results: action.payload
            };
        case ANSWERS_CHECK_FAILED:
            return { ...state, isFetching: false, error: action.payload };
        default:
            return state;
    }
}

