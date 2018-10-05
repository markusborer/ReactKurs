import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        this.setState({ isLoggedIn: !this.state.isLoggedIn });
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick}>{this.state.isLoggedIn ? 'Logout' : 'Login'}</button>
                <div>{this.state.isLoggedIn ? 'Welcome ' + this.props.name : 'Please Login'}</div>
            </div>
        );
    }

}

export default Login;