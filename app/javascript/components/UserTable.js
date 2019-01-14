import React from "react"
import PropTypes from "prop-types"
class UserTable extends React.Component {
  constructor (props) {
    super(props);
    this.renderPopulatedTable = this.renderPopulatedTable.bind(this);

    this.state = {
      people: JSON.parse( this.props.people )
    };
  }

  handleClickEdit () {
    alert('tada!');
  }

  renderEmptyTable () {
    return (
      <tbody>
        <tr>
          <td colSpan="6">No people found.</td>
        </tr>
      </tbody>
    );
  }

  renderPopulatedTable () {
    console.log('renderPopulatedTable');
    console.dir(this.state);
    let i = 0;
    var listItems = this.state.people.map(function(item) {
      return (
        <tr key={i++}>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.email}</td>
          <td>{item.notes}</td>
          <td>
            <a className="btn btn-default" onClick={this.handleClickEdit} >Edit</a>
          </td>
          <td>
            <a className="btn btn-danger" href>Delete</a>
          </td>
        </tr>
      );
    }, this);

    return (
      <tbody>
        {listItems}
      </tbody>
    );

  }
  //People: {this.props.people}
  render () {
    return (
      <React.Fragment>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Notes</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </tr>
          </thead>

            {this.state.people.length < 1 ? this.renderEmptyTable() : this.renderPopulatedTable()}

        </table>
      </React.Fragment>
    );
  }
}

UserTable.propTypes = {
  people: PropTypes.string
};
export default UserTable
