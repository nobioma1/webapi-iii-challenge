import React, { Component } from 'react';
import styled from 'styled-components';

import PostsList from './PostsList';
import AddPostForm from './AddPostForm';


const PostsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Posts extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Posts</h2>
        <PostsContainer>
          <PostsList />
          <AddPostForm />
        </PostsContainer>
      </React.Fragment>
    );
  }
}

export default Posts;
