import React, { Component } from "react";
import { connect } from "react-redux";
import { getPersonalInfo, saveUsername } from "../actions";

class UsersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ user: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.saveUser(this.state.user);
    this.props.searchUser(this.state.user)
    console.log(this.state.user)
    this.setState({ user: "" });
  }

  render() {
    const { user } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="user">user</label>
          <input
            type="text"
            id="user"
            value={user}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveUser: (payload) => dispatch(saveUsername(payload)),
    searchUser: (payload) => dispatch(getPersonalInfo(payload))
  };
}

const Form = connect(
  null,
  mapDispatchToProps
)(UsersForm);

export default Form;