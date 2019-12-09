import React, { Component } from "react";
import { connect } from "react-redux";
import { getDetailedRepo, saveRepoName } from "../actions/ReposActions";
import styled from "styled-components"
import {Container, Button, FormGroup, Label, Input, Col} from "reactstrap"

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
    const Subtitle = styled.h3`
      margin-top:30px;
    `

    return (
      <Container>
        <Subtitle>Search repositories from Github</Subtitle>
        <form onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Label htmlFor="repo" sm={2}>Enter repositorie:</Label>
          <Col sm={3}>
          <Input
            type="text"
            id="repo"
            value={repo}
            onChange={this.handleChange}
          />
          </Col>
          <Button color="info" type="submit">Search</Button>
        </FormGroup>
      </form>
      </Container>
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