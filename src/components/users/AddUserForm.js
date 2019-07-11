import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';


import { addUser } from '../../actions/users';

const AddPostUserContainer = styled.div`
  width: 35%;

  form {
    display: flex;
    flex-direction: column;

    input,
    button {
      margin: 5px;
      padding: 5px;
      border: 1px solid gray;
      border-radius: 3px;
    }
  }
`;

class AddUserForm extends Component {
  state = {
    name: '',
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addUser(this.state);
  };

  render() {
    return (
      <AddPostUserContainer>
        <h2>Add new User</h2>
        {this.props.err && <p>{this.props.err}</p>}
        <form onSubmit={this.submitHandler}>
          <label>Enter User's name:</label>
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </AddPostUserContainer>
    );
  }
}

export default connect(
  state => ({ err: state.userReducer.error }),
  { addUser },
)(AddUserForm);
