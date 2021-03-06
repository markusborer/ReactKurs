import React from 'react';
import { Table } from 'react-materialize';

class PersonSearchResult extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const rows = [];
        this.props.persons.forEach(person => {
            rows.push(<PersonRow key={person.name + '___' + person.vorname} person={person} />)
        });
        return (
            <Table hoverable="true">
                <thead>
                    <PersonHeader />
                </thead>
                <tbody>
                    {rows}
                </tbody>
          </Table>
        );
    }

}

class PersonHeader extends React.Component {
    render() {
        return (
            <tr>
                <th>Name</th>
                <th>Vorname</th>
            </tr>
        )
    }
}
  
class PersonRow extends React.Component {
    render() {
        if (this.props.person.name === 'XXX1') {
            throw new Error('I crashed!');
        }
        return (
            <tr>
                <td>{this.props.person.name}</td>
                <td>{this.props.person.vorname}</td>
            </tr>
        )
    }
}
  
export default PersonSearchResult;