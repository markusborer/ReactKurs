import React from 'react';

class PersonSearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    onKeyUp(e) {
        e.preventDefault();
        this.props.onChange(e.target.value);
      }

    render() {
        return (
            <div>
                <span>Name: </span>
                <input type="text" onKeyUp={this.onKeyUp} />
            </div>
        );
    }

}

export default PersonSearchForm;