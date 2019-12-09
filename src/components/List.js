import React , { Component } from "react";
import { connect } from "react-redux";
import { reset_action } from "../actions/actions"

export class List extends Component{
  render(){
    return (
      <div>
        {this.props.users.map(user=> (
          <div>
            <img alt="" src={user.avatar_url} width="100" height="100"/>
            <p><a target="blank" href={user.html_url}>{user.login}</a></p>
          </div>
        ))}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    users: state.usersResults,
  };
}

function mapDispatchToProps(dispatch) {
  dispatch (reset_action())
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);