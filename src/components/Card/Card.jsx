import React from 'react';
import { withRouter } from 'react-router-dom'
import styled from 'styled-components';

const StyledCard = styled.div`
  cursor: pointer;
  position: relative;
  background-color: white;
  border-radius: 4px;
  width: 200px;
  height: 250px;
  box-shadow: rgba(0, 0, 0, 0.0470588) 0px 0px 0px 2px;
  margin-bottom: 1rem;
`;

const Card = withRouter((props) => {
  const onClick = () => {
    props.history.push(props.url);
  }
  return(
    <StyledCard onClick={onClick}>
      {{...props.children}}
    </StyledCard>
  )
});

export default Card;
