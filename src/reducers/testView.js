const initialState = {
    isFetching: false,
    content: null,
    error: null
};

export function testView(state = initialState, action) {
    switch (action.type) {
        case 'TEST_REQUEST':
            return { ...state, isFetching: true };
        case 'TEST_RECEIVED':
            return { ...state, isFetching: false, content: action.payload };
        case 'TEST_REQUEST_FAILED':
            return { ...state, isFetching: false, error: action.payload };
        default:
            return state;
    }
}