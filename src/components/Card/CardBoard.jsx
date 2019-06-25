import React from 'react';
import Card from './Card';

const CardBoard = props => {
  const { board } = props;

  return (
    <Card url={`/boards/${board.id}`}>
      <p>{board.board_title}</p>
    </Card>
  );
};

export default CardBoard;
