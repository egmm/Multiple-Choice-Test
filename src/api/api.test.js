import { multiChoiceTest, checkAnswers } from './api';
import quiz from './quiz.json';


it('Returns the data correctly', () => {
    return multiChoiceTest().then(response => expect(response).toEqual(quiz));
})

describe('Checking the submitAnswer method', () => {
    test('Returns 0 when giving 0 answers', () => {
        const expected = { topScore: 100, score: 0 };
        const failedChoices = [
            { id: '1', answers: [] },
            { id: '2', answers: [] },
            { id: '3', answers: [] },
            { id: '4', answers: [] },
            { id: '5', answers: [] },
            { id: '6', answers: [] },
            { id: '7', answers: [] },
            { id: '8', answers: [] },
            { id: '9', answers: [] },
        ];
        return checkAnswers(failedChoices)
            .then(response => expect(response).toEqual(expected));
    });
    test('Returns 100 when giving all answers correct', () => {
        const expected = { topScore: 100, score: 100 };
        const failedChoices = [
            { id: '1', answers: ["1"] },
            { id: '2', answers: ["4"] },
            { id: '3', answers: ["7"] },
            { id: '4', answers: ["10"] },
            { id: '5', answers: ["13"] },
            { id: '6', answers: ["16"] },
            { id: '7', answers: ["19"] },
            { id: '8', answers: ["22"] },
            { id: '9', answers: ["25"] },
        ];
        return checkAnswers(failedChoices)
            .then(response => expect(response).toEqual(expected));
    });
    test('Returns correct score to a given case', () => {
        const expected = { topScore: 100, score: 67 };
        const failedChoices = [
            { id: '1', answers: [] },
            { id: '2', answers: ["4"] },
            { id: '3', answers: ["7"] },
            { id: '4', answers: [] },
            { id: '5', answers: ["13"] },
            { id: '6', answers: ["16"] },
            { id: '7', answers: [] },
            { id: '8', answers: ["22"] },
            { id: '9', answers: ["25"] },
        ];
        return checkAnswers(failedChoices)
            .then(response => expect(response).toEqual(expected));
    });
})