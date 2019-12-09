import React , { Component } from "react";
import { connect } from "react-redux";
import { reset_action } from "../actions/actions"
import { Col , Row} from "reactstrap"
import styled from "styled-components"

export class List extends Component{
  render(){
    const Image = styled.img`
    width:100px;
    height:100px
  `
    return (
      <Row>
        {this.props.users.map(user=> (
          <Col sm={3} className="text-center" key={user.id}>
            <Image alt="" src={user.avatar_url}/>
            <p><a target="blank" href={user.html_url}>{user.login}</a></p>
          </Col>
        ))}
      </Row>
    );
  }
}


function mapStateToProps(state) {
  return {
    users: state.usersResults,
  };
}

function mapDispatchToProps(dispatch) {
  return reset_action(
    {
      reset_action: reset_action
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);