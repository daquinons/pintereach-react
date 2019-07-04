import React from 'react';
import { connect } from 'react-redux';
import { getAllUserBoards, getArticles } from '../../state/reducers/boards';
import withRestrictedToAuth from '../../hoc/withRestrictedToAuth';
import CardArticle from '../Card/CardArticle';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import ButtonLink from '../ButtonLink/ButtonLink';
import StyledContainerFlex from '../StyledContainerFlex/StyledContainerFlex';
import AddArticleForm from '../AddArticleForm/AddArticleForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ArticlesList = props => {
  const { userId, getAllUserBoards, boards, isLoggedIn } = props;
  const boardId = props.match.params.id;
  const [currentBoard, setCurrentBoard] = React.useState();
  const [articles, setArticles] = React.useState([]);
  const [owner, setOwner] = React.useState(true);
  const [modalShow, setModalShow] = React.useState(false);

  const getArticlesForCurrentBoard = React.useCallback(async () => {
    let selected = boards.find(board => String(board.id) === boardId);
    if (!selected && isLoggedIn) {
      // If the user is not the owner of the owner of the board
      setOwner(false);
      const articles = await getArticles(boardId);
      selected = { board_title: 'Shared Board', articles };
    }

    if (selected) {
      setCurrentBoard(selected);
      setArticles(selected.articles);
    }
  }, [boardId, boards, isLoggedIn]);

  React.useEffect(() => {
    getAllUserBoards(userId);
  }, [userId, getAllUserBoards]);

  React.useEffect(() => {
    getArticlesForCurrentBoard();
  }, [getArticlesForCurrentBoard]);

  const modalClose = () => {
    setModalShow(false);
  };

  if (currentBoard) {
    return (
      <div>
        <HeaderContainer>
          <Row>
            <Col sm={4}>{currentBoard.board_title}</Col>
            {owner ? (
              <Col className="text-md-right" sm={{ span: 1, offset: 7 }}>
                <ButtonLink onClick={() => setModalShow(true)}>Add</ButtonLink>
                <AddArticleForm
                  onSuccess={props.getAllUserBoards}
                  boardId={boardId}
                  userId={userId}
                  show={modalShow}
                  onHide={modalClose}
                />
              </Col>
            ) : null}
          </Row>
        </HeaderContainer>
        <Container>
          <Row>
            <Col className="text-center" md={{ span: 12 }}>
              <StyledContainerFlex>
                {articles ? (
                  articles.map((article, index) => (
                    <CardArticle key={index} article={article} />
                  ))
                ) : (
                  <div>No articles, please add one to your board.</div>
                )}
              </StyledContainerFlex>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return null;
};

const mapStateToProps = state => {
  return {
    boards: state.boards.boards,
    userId: state.auth.userId,
    isLoggedIn: !!state.auth.token && state.auth.token !== 'null'
  };
};

export default connect(
  mapStateToProps,
  { getAllUserBoards }
)(withRestrictedToAuth(ArticlesList));
