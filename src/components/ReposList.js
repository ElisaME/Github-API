import React , { Component } from "react";
import { connect } from "react-redux";
import { reset_action } from "../actions/ReposActions"

export class ReposList extends Component{
  render(){
    return (
      <div>
        {this.props.repos.map(repo=> (
          <div>
            <p><a target="blank" href={repo.html_url}>{repo.name}</a></p>
            <p>{repo.description}</p>
          </div>
        ))}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    repos: state.reposResults
  };
}

function mapDispatchToProps(dispatch) {
  dispatch (reset_action())
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposList);