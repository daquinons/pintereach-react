import React from 'react';
import NavBar from './components/NavBar/NavBar';
import AppRouter from './components/AppRouter/AppRouter';
import Container from 'react-bootstrap/Container';

const App = props => {
  return (
    <Container>
      <NavBar />
      <AppRouter />
    </Container>
  );
};

export default App;
