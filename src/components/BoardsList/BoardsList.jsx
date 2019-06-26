import React from 'react';
import { connect } from 'react-redux';
import { getAllUserBoards, postBoard } from '../../state/reducers/boards';
import withRestrictedToAuth from '../../hoc/withRestrictedToAuth';
import ButtonLink from '../ButtonLink/ButtonLink';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import AddBoardForm from '../AddBoardForm/AddBoardForm';
import StyledContainerFlex from '../StyledContainerFlex/StyledContainerFlex';
import CardBoard from '../Card/CardBoard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BoardsList = props => {
  const { userId, getAllUserBoards, postBoard } = props;
  const [modalShow, setModalShow] = React.useState(false);

  React.useEffect(() => {
    getAllUserBoards(userId);
  }, [userId, getAllUserBoards]);

  const modalClose = () => {
    setModalShow(false);
  };

  return (
    <div>
      <HeaderContainer>
        <Row>
          <Col sm={4}>My Boards</Col>
          <Col className="text-md-right" sm={{ span: 1, offset: 7 }}>
            <ButtonLink onClick={() => setModalShow(true)}>Add</ButtonLink>
            <AddBoardForm
              addBoard={postBoard}
              userId={userId}
              show={modalShow}
              onHide={modalClose}
            />
          </Col>
        </Row>
      </HeaderContainer>
      <Container>
        <Row>
          <Col className="text-center" md={{ span: 12 }}>
            <StyledContainerFlex>
              {props.boards.length > 0 ? (
                props.boards.map((board, index) => (
                  <CardBoard key={index} board={board} />
                ))
              ) : (
                <div>No boards, please add one.</div>
              )}
            </StyledContainerFlex>
          </Col>
        </Row>
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
  { getAllUserBoards, postBoard }
)(withRestrictedToAuth(BoardsList));
