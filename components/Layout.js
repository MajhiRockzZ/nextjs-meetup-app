import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <main>{children}</main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  main {
    margin: 3rem auto;
    width: 90%;
    max-width: 40rem;
  }
`;

export default Layout;
