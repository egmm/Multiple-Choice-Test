import quiz from './quiz.json';
import correctChoices from './correct_choices.json';


export function multiChoiceTest() {
    const time = (Math.random() * 1000).toFixed();
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(quiz), time)
    });
}

function getScore(question, value) {
    const choiceValue = 100 / correctChoices[question.id].length;
    const total = question.answers.reduce((prev, curr) => {
        if (correctChoices[question.id].includes(curr)) {
            return prev + choiceValue;
        }
        return prev;
    }, 0);
    const isCorrect = total === 100 ? 'correct' : 'incorrect';
    return [(value * total) / 100, isCorrect];
}

export function checkAnswers(qa) {
    const results = [];
    const time = (Math.random() * 1000).toFixed();
    const questionPoint = 100 / quiz.questions.length;
    // Calculate the score of each question
    const scores = qa.map(question => {
        const [score, isCorrect] = getScore(question, questionPoint)
        results.push({
            id: question.id,
            result: isCorrect,
            score
        })
        return score;
    });
    const response = {
        topScore: 100,
        totalScore: Math.round(scores.reduce((prev, curr) => prev + curr)),
        results
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(response), time)
    });
}