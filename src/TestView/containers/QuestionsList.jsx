import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Question from '../components/Question';
import { selectChoice, deselectChoice } from '../../actions/choices';


class QuestionsList extends Component {
    constructor(props) {
        super(props);
        this.state = { current: 0 };
    }
    nextQuestion = () => {
        const { current } = this.state;
        this.setState({ current: current + 1 });
    }
    choiceClicked = (choice) => {
        const { selectChoice, deselectChoice, choices } = this.props;
        const { selected } = choices;
        if (selected.includes(choice)) {
            deselectChoice(choice);
        }
        else {
            selectChoice(choice);
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
    selectChoice: PropTypes.func,
    deselectChoice: PropTypes.func
}

QuestionsList.defaultProps = {
    question: null,
    choices: { selected: [] },
    selectChoice: () => null,
    deselectChoice: () => null
}

const mapStateToProps = state => {
    return {
        choices: state.choices
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectChoice, deselectChoice }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);
