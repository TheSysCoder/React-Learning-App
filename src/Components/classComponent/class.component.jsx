import React from "react";
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <h3>This is class component</h3>
        <p>Learn Form Handling</p>
        <form>
          <div>
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleUsernameChange.bind(this)}
            />
          </div>
          <p>My name is {this.state.username}</p>
        </form>
      </div>
    );
  }
}
export default ClassComponent;
