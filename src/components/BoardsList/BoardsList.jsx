import React from 'react';
import { connect } from 'react-redux';
import * as authUtils from '../../utils/auth';
import { getAllUserBoards } from '../../state/reducers/boards';
import withRestrictedToAuth from '../../hoc/withRestrictedToAuth';

const BoardsList = props => {
  React.useEffect(() => {
    props.getAllUserBoards(authUtils.getUserId());
  }, [props]);

  const render = () => {
    return(
      <div>
        <h2>My Boards</h2>
        {props.boards.map(board => <li>{board.board_title}</li>)}
      </div>
    )
  }

  return(
    render()
  )
}

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
