import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom';
import Welcome from '../components/Welcome';
import QuestionsList from './QuestionsList';
import quiz from '../../api/quiz.json';
import './testView.css';


class TestView extends Component {
    constructor(props) {
        super(props);
        this.state = { current: 0 };
    }
    goToTest = () => {
        const { history } = this.props;
        history.push('/test');
    }
    render() {
        const { name, questions } = quiz;
        return (
            <div id="container">
                <Switch>
                    <Route
                        exact path='/'
                        render={() => (
                            <Welcome testName={name} onClick={this.goToTest} />
                        )} />
                    <Route
                        path='/test'
                        render={() => (
                            <QuestionsList questions={questions} />
                        )} />
                </Switch>
            </div>
        );
    }
}

TestView.propTypes = {
    test: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        questions: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            statement: PropTypes.string,
            options: PropTypes.arrayOf(PropTypes.shape({
                value: PropTypes.string,
                id: PropTypes.string
            }))
        }))
    })
}

TestView.defaultProps = {
    test: null
};

export default TestView;
