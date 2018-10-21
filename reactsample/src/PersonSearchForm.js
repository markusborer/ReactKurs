import React from 'react';
import { Row, Input } from 'react-materialize';

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
            <Row>
                <Input label="Name" onKeyUp={this.onKeyUp} />
            </Row>
        );
    }

}

export default PersonSearchForm;