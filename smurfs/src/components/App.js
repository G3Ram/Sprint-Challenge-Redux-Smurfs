import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, delSmurfs } from "../actions";
import ShowSmurfs from "./ShowSmurfs";
import AddSmurfs from "./AddSmurfs";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(":: IN COMPONENT DID MOUNT ::");
    this.props.getSmurfs();
  }

  delSmurfs = id => {
    console.log(":: DELETE SMURF CLICKED ::" + id);
    this.props.delSmurfs(id);
  };

  render() {
    return (
      <div className="App">
        <div className="smurf-header-container">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your Redux version of Smurfs!</div>
        </div>
        <ShowSmurfs smurfs={this.props.smurfs} delSmurfs={this.delSmurfs} />
        <AddSmurfs />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs.smurfs,
    isLoading: state.smurfs.isLoading,
    error: state.smurfs.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, delSmurfs }
)(App);
