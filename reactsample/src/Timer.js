import React from 'react';

class Timer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{new Date().toLocaleTimeString()}</div>
        );
    }

}

export default Timer;