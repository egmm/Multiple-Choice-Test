import { CHOICE_DESELECTED, CHOICE_SELECTED } from '../actions/choices';

const initialState = { selected: [] };

export function choices(state = initialState, action) {
    const prevSelected = state.selected;
    const currSelected = action.payload;
    switch (action.type) {
        case CHOICE_SELECTED:

            return { ...state, selected: [...prevSelected, currSelected] };
        case CHOICE_DESELECTED:
            return {
                ...state,
                selected: prevSelected.filter(prev => prev !== currSelected)
            };

        default:
            return state;
    }
}