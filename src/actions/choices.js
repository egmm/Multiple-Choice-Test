// Actions
export const CHOICE_SELECTED = 'CHOICE_SELECTED';
export const CHOICE_DESELECTED = 'CHOICE_DESELECTED ';

// Action Creators
export function selectChoice(payload) {
    return { type: CHOICE_SELECTED, payload };
}
export function deselectChoice(payload) {
    return { type: CHOICE_DESELECTED, payload };
}