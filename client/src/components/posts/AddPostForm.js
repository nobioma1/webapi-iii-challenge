import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addPost } from '../../actions/posts';

const AddPostFormContainer = styled.div`
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

class AddPostForm extends Component {
  state = {
    id: '',
    text: '',
  };

  submitHandler = e => {
    const { id, text } = this.state;
    e.preventDefault();
    this.props.addPost(id, { text });
  };

  render() {
    return (
      <AddPostFormContainer>
        <h2>Add new Post</h2>
        {this.props.err && <p>{this.props.err}</p>}
        <form onSubmit={this.submitHandler}>
          <label>Enter Post:</label>
          <input
            type="text"
            onChange={e => this.setState({ text: e.target.value })}
            required
          />
          <label>Enter Your Personal ID:</label>
          <input
            type="text"
            onChange={e => this.setState({ id: e.target.value })}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </AddPostFormContainer>
    );
  }
}

export default connect(
  state => ({ err: state.postReducer.error }),
  { addPost },
)(AddPostForm);
