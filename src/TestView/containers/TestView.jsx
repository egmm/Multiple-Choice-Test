import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Welcome from '../components/Welcome';
import quiz from '../../api/quiz.json';
import './testView.css';


class TestView extends Component {
    constructor(props) {
        super(props);
        this.state = { current: 0 };
    }
    render() {
        const { name } = quiz;
        return (
            <div id="container">
                <Welcome testName={name} />
            </div>
        );
    }
}

export default TestView;
