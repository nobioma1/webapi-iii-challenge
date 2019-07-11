import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components';

import { getPosts, deletePost } from '../../actions/posts';

const PostsListContainer = styled.div`
  width: 60%;
`;

const Post = styled.div`
  width: 100%;
  padding: 5px;
  margin: 5px;
  border: 1px solid gray;
  border-radius: 3px;

  svg {
    opacity: 0.6;
    cursor: pointer;
  }
`;

class PostsList extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <PostsListContainer>
        {this.props.posts.map(post => (
          <Post key={post.id}>
            <h3>{post.text}</h3>
            <FaTrash onClick={() => this.props.deletePost(post.id)} />
          </Post>
        ))}
      </PostsListContainer>
    );
  }
}

export default connect(
  state => ({ posts: state.postReducer.posts.reverse() }),
  { getPosts, deletePost },
)(PostsList);
