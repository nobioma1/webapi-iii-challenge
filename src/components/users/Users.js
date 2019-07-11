import React, { Component } from 'react';
import styled from 'styled-components';

import UsersList from './UsersList';
import AddUserForm from './AddUserForm';

const UsersContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Users extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Users List</h2>
        <UsersContainer>
          <UsersList />
          <AddUserForm />
        </UsersContainer>
      </React.Fragment>
    );
  }
}

export default Users;
