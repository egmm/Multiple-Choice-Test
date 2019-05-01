import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom';
import Welcome from '../components/Welcome';
import QuestionsList from './QuestionsList';
import Results from '../components/Results';
import { fetchTest } from '../../actions/multipleChoiceTest';
import './testView.css';


class TestView extends Component {
    constructor(props) {
        super(props);
        this.state = { test: null };
    }
    componentDidMount() {
        this.props.fetchTest();
    }
    goToTest = () => {
        const { history } = this.props;
        history.push('/test');
    }
    goHome = () => {
        this.props.history.push('/');
    }
    get content() {
        const { test, scores } = this.props;
        if (test.error) {
            return <h1>Something went wrong</h1>
        }
        return (
            <Switch>
                <Route
                    exact path='/'
                    render={() => (
                        <Welcome testName={test.content.name} onClick={this.goToTest} />
                    )} />
                <Route
                    path='/test'
                    render={({ history }) => (
                        <QuestionsList history={history} questions={test.content.questions} />
                    )} />
                <Route path='/results' render={() => {
                    if (scores.isFetching) {
                        return <h1>Loading</h1>
                    }
                    return (
                        scores.results ?
                            <Results
                                scores={scores.results}
                                questions={test.content.questions}
                                onClick={this.goHome} /> :
                            <p>We don't have results yet. Try to take a test first!</p>
                    );
                }} />
            </Switch>
        );
    }
    render() {
        const { test } = this.props;
        return (
            <div id="container">
                {test.isFetching || test.content === null ? <h1>Loading</h1> : this.content}
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

const mapStateToProps = state => {
    return {
        test: state.testView,
        scores: state.scores
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchTest }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TestView);
