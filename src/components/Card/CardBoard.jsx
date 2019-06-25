import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const CardBoard = props => {
  const { board } = props;

  const CloseButton = styled.div`
    color: #ff0075;
    padding: 0.5rem;
    position: absolute;
    font-weight: 700;
    top: 0px;
    right: 0px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
       -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none; 

  `;

  const onClose = (event) => {
    event.stopPropagation();
    // eslint-disable-next-line no-restricted-globals
    const toDelete = confirm("Do you want to delete this board? All your articles will be lost forever");
  }

  return (
    <Card url={`/boards/${board.id}`}>
      <>
      <CloseButton onClick={onClose}>X</CloseButton>
      <p>{board.board_title}</p>
      </>
    </Card>
  );
};

export default CardBoard;
