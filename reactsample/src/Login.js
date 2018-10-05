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
        let welcomeMessage;
        if (this.state.isLoggedIn) {
            welcomeMessage = <div>{'Welcome ' + this.props.name}</div>;
        }
        return (
            <React.Fragment>
                <button onClick={this.onClick}>{this.state.isLoggedIn ? 'Logout' : 'Login'}</button>
                {welcomeMessage}
            </React.Fragment>
        );
    }

}

export default Login;