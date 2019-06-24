import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  color: #4c4c4c;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.0980392) 0px 2px 0px 0px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 2.5rem;
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export default props => {
  return (
    <HeaderContainer>
      <Container>{{ ...props.children }}</Container>
    </HeaderContainer>
  );
};
