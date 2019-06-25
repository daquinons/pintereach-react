import React from 'react';
import { connect } from 'react-redux';
import { deleteBoard } from '../../state/reducers/boards';
import Card, { CloseButton } from './Card';
import withRestrictedToAuth from '../../hoc/withRestrictedToAuth';

const CardBoard = props => {
  const { board } = props;

  const onClose = (event) => {
    event.stopPropagation();
    // eslint-disable-next-line no-restricted-globals
    const toDelete = confirm("Do you want to delete this board? All your articles will be lost forever");
    if (toDelete) props.deleteBoard(board.id, props.userId);
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

const mapStateToProps = state => {
  return {
    userId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { deleteBoard }
)(withRestrictedToAuth(CardBoard));

