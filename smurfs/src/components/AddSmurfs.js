import React from "react";
import { connect } from "react-redux";
import { addSmurfs } from "../actions";

class AddSmurfs extends React.Component {
  constructor() {
    super();
    this.state = {
      newSmurf: { name: "", age: 0, height: 0 }
    };
  }

  handleChange = e => {
    e.persist();
    console.log(":: IN HANDLE CHANGE ::");
    console.log(e.target.value);
    this.setState(prevState => ({
      ...this.state,
      newSmurf: {
        ...prevState.newSmurf,
        [e.target.name]: e.target.value
      }
    }));
  };

  addSmurfs = e => {
    e.preventDefault();
    console.log(":: ADD CLICKED ::");
    this.props.addSmurfs(this.state.newSmurf);
    this.setState({
      newSmurf: { name: "", age: 0, height: 0 }
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addSmurfs}>
          <h2>Please enter the details below:</h2>
          <div>
            <div>Name:</div>
            <div>
              <input
                type="text"
                name="name"
                value={this.state.newSmurf.name}
                onChange={this.handleChange}
              />
            </div>
            <div>Age:</div>
            <div>
              <input
                type="text"
                name="age"
                value={this.state.newSmurf.age}
                onChange={this.handleChange}
              />
            </div>
            <div>Height:</div>
            <div>
              <input
                type="text"
                name="height"
                value={this.state.newSmurf.height}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-button">
              <button onClick={this.addSmurfs}>Add</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addSmurfs }
)(AddSmurfs);
