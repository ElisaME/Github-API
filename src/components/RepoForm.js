import React, { Component } from "react";
import { connect } from "react-redux";
import { getDetailedRepo, saveRepoName } from "../actions/ReposActions";

class RepoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ repo: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.saveRepoName(this.state.repo);
    this.props.searchRepo(this.state.repo)
    console.log(this.state.repo)
    this.setState({ repo: "" });
  }

  render() {
    const { repo } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="repo">repo</label>
          <input
            type="text"
            id="repo"
            value={repo}
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
    saveRepoName: (payload) => dispatch(saveRepoName(payload)),
    searchRepo: (payload) => dispatch(getDetailedRepo(payload))
  };
}

const Form = connect(
  null,
  mapDispatchToProps
)(RepoForm);

export default Form;