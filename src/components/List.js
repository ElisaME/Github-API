import React , { Component } from "react";
import { connect } from "react-redux";

export class List extends Component{
  
  render(){
    return (
      <div>
        <img alt="avatar" src={this.props.user.avatar_url}/>
        <h2>{this.props.user.login}</h2>
        <p><a href={this.props.user.html_url} target="blank">GitHub Profile </a></p>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    user: state.personalInfoArr
  };
}
export default connect(
  mapStateToProps,
  null
)(List);

// const mapStateToProps = state => {
//   return { user: state.user };
// };

// const UsersList = ({ user }) => (
//   <ul>
//     {user.map(el => (
//       <li key={el.id}>{el.login}</li>
//     ))}
//   </ul>
// );
// const List = connect(mapStateToProps)(UsersList);

// export default List;