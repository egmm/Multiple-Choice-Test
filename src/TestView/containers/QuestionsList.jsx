import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Question from '../components/Question';
import { selectChoice, deselectChoice } from '../../actions/choices';
import { addAnswer } from '../../actions/multipleChoiceTest';
import { checkAnswers } from '../../actions/results';


class QuestionsList extends Component {
    constructor(props) {
        super(props);
        this.state = { current: 0, preliminarChoices: [] };
    }
    nextQuestion = (currentQuestion) => {
        const { history, questions, addAnswer, answers, checkAnswers } = this.props;
        const { current, preliminarChoices } = this.state;
        const toSubmit = { id: currentQuestion, answers: preliminarChoices };
        if (questions.length - 1 === current) {
            checkAnswers([...answers, toSubmit]);
            history.push('/results');
        }
        addAnswer(toSubmit);
        this.setState({ current: current + 1 });
        this.setState({ preliminarChoices: [] });
    }
    choiceClicked = (choice) => {
        const { selectChoice, deselectChoice, choices } = this.props;
        const { selected } = choices;
        const { preliminarChoices } = this.state;
        if (selected.includes(choice)) {
            deselectChoice(choice);
            this.setState({
                preliminarChoices: preliminarChoices.filter(pre => pre !== choice)
            })
        }
        else {
            selectChoice(choice);
            this.setState({ preliminarChoices: [...preliminarChoices, choice] });
        }
    }
    render() {
        const { questions, choices } = this.props;
        const { current } = this.state;
        return (
            <div className="question-container">
                <Question
                    question={questions[current]}
                    selectedChoices={choices.selected}
                    choiceClicked={this.choiceClicked}
                    submit={this.nextQuestion} />
            </div>
        );
    }
}

QuestionsList.propTypes = {
    questions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        statement: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string,
            id: PropTypes.string
        }))
    })),
    choices: PropTypes.shape({ selected: PropTypes.arrayOf(PropTypes.string) }),
    answers: PropTypes.array,
    selectChoice: PropTypes.func,
    deselectChoice: PropTypes.func,
    history: PropTypes.object,
    checkAnswers: PropTypes.func
}

QuestionsList.defaultProps = {
    question: null,
    choices: { selected: [] },
    answers: [],
    selectChoice: () => null,
    deselectChoice: () => null,
    history: null,
    checkAnswers: () => null
}

const mapStateToProps = state => {
    return {
        choices: state.choices,
        answers: state.testView.answers
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectChoice,
        deselectChoice,
        addAnswer,
        checkAnswers
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);
