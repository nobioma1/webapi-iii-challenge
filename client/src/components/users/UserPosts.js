import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getUserPosts } from '../../actions/users';

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

class UserPosts extends Component {
  componentDidMount() {
    this.userPosts();
  }

  userPosts = () => {
    const id = this.props.match.params.id;
    this.props.getUserPosts(id);
  };

  render() {
    const { userPosts } = this.props;
    return (
      <div>
        {userPosts.length > 0 ? (
          <div>
            <h2>Posts by {userPosts[0].postedBy}</h2>
            {userPosts.map(post => (
              <Post key={post.id}>
                <h3>{post.text}</h3>
              </Post>
            ))}
          </div>
        ) : (
          <p>No Post By User</p>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({ userPosts: state.userReducer.userPosts }),
  { getUserPosts },
)(UserPosts);
