import React from 'react';
import { connect } from 'react-redux';
import { getAllUserBoards } from '../../state/reducers/boards';
import withRestrictedToAuth from '../../hoc/withRestrictedToAuth';

const BoardsList = props => {
  const { userId, getAllUserBoards } = props;

  React.useEffect(() => {
    getAllUserBoards(userId);
  }, [userId, getAllUserBoards]);

  return (
    <div>
      <h2>My Boards</h2>
      {props.boards.map(board => (
        <li>{board.board_title}</li>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    boards: state.boards.boards,
    userId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { getAllUserBoards }
)(withRestrictedToAuth(BoardsList));
