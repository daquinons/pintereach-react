import React from 'react';
import NavBar from './components/NavBar/NavBar';
import AppRouter from './components/AppRouter/AppRouter';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  background-color: #efefef;
  color: hsl(0,0%,20%);

  &&& {
    max-width: auto;
    min-width: 95%;
    min-height: 20rem;
    border-radius: 4px;
    padding: 0;
    padding-bottom: 2rem;
  }
`;


const App = props => {
  return (
    <>
      <NavBar />
      <StyledContainer>
        <AppRouter />
      </StyledContainer>
    </>
  );
};

export default App;
