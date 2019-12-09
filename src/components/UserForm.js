import React, { Component } from "react";
import { connect } from "react-redux";
import { getPersonalInfo, saveUsername } from "../actions/actions";
import { Container, Button, FormGroup, Label, Input, Col } from "reactstrap";
import styled from "styled-components"

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
    this.setState({ user: "" });
  }

  render() {
    const { user } = this.state;
    const Subtitle = styled.h3`
      margin-top:30px;
    `

    return (
      <Container>
        <Subtitle>Search users from Github</Subtitle>
        <form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label htmlFor="user" sm={2}>Enter username:</Label>
            <Col sm={3}>
            <Input
              type="text"
              id="user"
              value={user}
              onChange={this.handleChange}
            />
            </Col>
            <Button color="info" sm={2} type="submit">Search</Button>
          </FormGroup>
          
        </form>
      </Container>
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