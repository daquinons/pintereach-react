import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const StyledCardBoardContainer = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
`;

const CardHome = props => {
  return (
    <Card>
      <StyledCardBoardContainer>
        <h4>{props.text}</h4>
      </StyledCardBoardContainer>
    </Card>
  );
};

export default CardHome;
