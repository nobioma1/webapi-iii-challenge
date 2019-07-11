import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components';

import { getUsers, deleteUser } from '../../actions/users';

const UsersListContainer = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
`;

const User = styled.div`
  width: 45%;
  padding: 5px;
  margin: 5px;
  border: 1px solid gray;
  border-radius: 3px;

  a {
    display: block;
    text-decoration: none;
    color: dodgerblue;
  }

  svg {
    opacity: 0.6;
    cursor: pointer;
  }
`;

class UsersList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <UsersListContainer>
        {this.props.users.map(user => (
          <User key={user.id}>
            <h3>{user.name}</h3>
            <FaTrash onClick={() => this.props.deleteUser(user.id)} />
            <Link to={`/${user.id}/posts`}>View Posts by {user.name}</Link>
          </User>
        ))}
      </UsersListContainer>
    );
  }
}

export default connect(
  state => ({ users: state.userReducer.users.reverse() }),
  { getUsers, deleteUser },
)(UsersList);
