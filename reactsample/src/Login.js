import React from 'react';
import { Button } from 'react-materialize';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        this.props.onChange(!this.props.isLoggedIn);
    }
    
    render() {
        return (
            <Button onClick={this.onClick}>{this.props.isLoggedIn ? 'Logout' : 'Login'}</Button>
        );
    }

}

export default Login;