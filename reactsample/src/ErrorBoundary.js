import React from 'react';

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <p><b>Es ist ein Fehler aufgetreten. Sie müssen die Seite neu laden (F5).</b></p>
                    <p></p>
                    <p>
                        {this.state.error && this.state.error.toString()}
                    </p>
                    <p></p>
                    <pre>
                        {this.state.errorInfo.componentStack}
                    </pre>
                </div>
            );
        } else {
            return this.props.children;
        }
    }

}

export default ErrorBoundary;