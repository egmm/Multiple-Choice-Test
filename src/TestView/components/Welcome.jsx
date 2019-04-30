import React, { Fragment } from 'react';
import Button from '../../common/Button';


const Welcome = ({ testName, onClick }) => {
    return (
        <Fragment>
            <div id="title">
                <p>You're about to take the</p>
                <h1>{testName}</h1>
            </div>
            <Button action='Take the test!' onClick={onClick} />
        </Fragment>
    );
}

export default Welcome;
