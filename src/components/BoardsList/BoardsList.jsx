import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUserBoards, postBoard } from '../../state/reducers/boards';
import withRestrictedToAuth from '../../hoc/withRestrictedToAuth';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import Card from '../Card/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const StyledContainerFlex = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const BoardsList = props => {
  const { userId, getAllUserBoards } = props;

  React.useEffect(() => {
    getAllUserBoards(userId);
  }, [userId, getAllUserBoards]);

  const addNew = () => {
    const nameBoard = prompt("Please, enter the name for your new board", "");
    if (nameBoard) props.postBoard(nameBoard, props.userId); 
  }

  return (
    <div>
      <HeaderContainer>
        <Row>
          <Col sm={4}>My Boards</Col>
          <Col className="text-md-right" sm={{ span: 1, offset: 7 }}>
          <button onClick={addNew}>Add</button>
          </Col>
        </Row>
      </HeaderContainer>
      <StyledContainerFlex>
        {props.boards.map(board => (
          <Card url={`/boards/${board.id}`}>
            <p>{board.board_title}</p>
          </Card>
        ))}
      </StyledContainerFlex>
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
  { getAllUserBoards, postBoard }
)(withRestrictedToAuth(BoardsList));
