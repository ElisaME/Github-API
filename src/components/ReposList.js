import React , { Component } from "react";
import { connect } from "react-redux";
import { reset_action } from "../actions/ReposActions"
import {Container} from "reactstrap"
import styled from "styled-components"

export class ReposList extends Component{
  render(){
    const RepoContainer = styled.div`
      display:flex;
      justify-content:flex-start;
      align-items: center;
      padding: 2%;
      margin: 2% 0%;
      img{
        margin:20px;
      }
    `

    return (
      <Container>
        {this.props.repos.map(repo=> (
          <RepoContainer key={repo.id}>
          
            <img src={repo.owner.avatar_url} alt={repo.owner.login} width="150" height="150"/>            
            <div>
            <h3>{repo.name}</h3>
            <p>Repositorie on Github: <a target="blank" href={repo.html_url}>{repo.html_url}</a></p>
            <p>Owner:<a target="blank" href={repo.owner.html_url}>{repo.owner.login}</a></p>
            <p>Language:{repo.language}</p>
            <p>Description:{repo.description}</p>
            </div>
          </RepoContainer>
        ))}
      </Container>
    );
  }
}


function mapStateToProps(state) {
  return {
    repos: state.reposResults
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
)(ReposList);