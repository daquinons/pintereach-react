import React from 'react';
import { connect } from 'react-redux';
import { deleteBoard } from '../../state/reducers/boards';
import Card, { CloseButton } from './Card';
import styled from 'styled-components';

const StyledCardBoardContainer = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
`;

const CardBoard = props => {
  const { board } = props;

  const onClose = event => {
    event.stopPropagation();
    // eslint-disable-next-line no-restricted-globals
    const toDelete = confirm(
      'Do you want to delete this board? All your articles will be lost forever'
    );
    if (toDelete) props.deleteBoard(board.id, props.userId);
  };

  const numberOfArticlesInBoard = board.articles ? board.articles.length : "no";

  return (
    <Card url={`/boards/${board.id}`}>
      <StyledCardBoardContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h4>{board.board_title}</h4>
        <p>This board has {numberOfArticlesInBoard} articles</p>
      </StyledCardBoardContainer>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    userId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { deleteBoard }
)(CardBoard);
