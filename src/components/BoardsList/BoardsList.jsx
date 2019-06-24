import React from 'react';
import { connect } from 'react-redux';
import { getAllUserBoards } from '../../state/reducers/boards';
import withRestrictedToAuth from '../../hoc/withRestrictedToAuth';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import Container from 'react-bootstrap/Container';

const BoardsList = props => {
  const { userId, getAllUserBoards } = props;

  React.useEffect(() => {
    getAllUserBoards(userId);
  }, [userId, getAllUserBoards]);

  return (
    <div>
      <HeaderContainer>
        <span>My Boards</span>
      </HeaderContainer>
      <Container>
        {props.boards.map(board => (
          <li>{board.board_title}</li>
        ))}
      </Container>
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
