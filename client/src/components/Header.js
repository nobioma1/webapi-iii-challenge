import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin: 0;
  }
`;

const Nav = styled.div`
  a {
    padding: 20px;
    text-decoration: none;
    color: dodgerblue;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Tatus Blog</h1>
      <Nav>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/">Posts</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
