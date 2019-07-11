import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Posts from './posts/Posts';
import Users from './users/Users';
import UserPosts from './users/UserPosts';

const AppContainer = styled.div`
  margin: auto;
  width: 800px;
  padding: 10px;
  font-family: 'PT Sans', sans-serif;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Route exact path="/" component={Posts} />
        <Route path="/users" component={Users} />
        <Route path="/:id/posts" component={UserPosts} />
      </AppContainer>
    </Router>
  );
};

export default App;
