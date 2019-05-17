import React from "react";

class AddSmurfs extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <form>
          <h2>Please enter the details below:</h2>
          <div>
            <div>Name:</div>
            <div>
              <input type="text" />
            </div>
            <div>Age:</div>
            <div>
              <input type="text" />
            </div>
            <div>Height:</div>
            <div>
              <input type="text" />
            </div>
            <div className="form-button">
              <button>Add</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddSmurfs;
