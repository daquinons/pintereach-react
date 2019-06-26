import React from 'react';
import { connect } from 'react-redux';
import { getAllUserBoards, postArticle } from '../../state/reducers/boards';
import withRestrictedToAuth from '../../hoc/withRestrictedToAuth';
import CardArticle from '../Card/CardArticle';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import ButtonLink from '../ButtonLink/ButtonLink';
import StyledContainerFlex from '../StyledContainerFlex/StyledContainerFlex';
import AddArticleForm from '../AddArticleForm/AddArticleForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ArticlesList = props => {
  const { userId, getAllUserBoards, boards, postArticle } = props;
  const boardId = props.match.params.id;
  const [currentBoard, setCurrentBoard] = React.useState();
  const [articles, setArticles] = React.useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  React.useEffect(() => {
    getAllUserBoards(userId);
  }, [userId, getAllUserBoards]);

  React.useEffect(() => {
    const getArticlesForCurrentBoard = () => {
      const selected = boards.find(board => String(board.id) === boardId);
      if (selected) {
        setCurrentBoard(selected);
        setArticles(selected.articles);
      }
    };

    getArticlesForCurrentBoard();
  }, [boards, boardId]);

  const modalClose = () => {
    setModalShow(false);
  };

  if (currentBoard) {
    return (
      <div>
        <HeaderContainer>
          <Row>
            <Col sm={4}>{currentBoard.board_title}</Col>
            <Col className="text-md-right" sm={{ span: 1, offset: 7 }}>
              <ButtonLink onClick={() => setModalShow(true)}>Add</ButtonLink>
              <AddArticleForm
                addArticle={postArticle}
                boardId={boardId}
                userId={userId}
                show={modalShow}
                onHide={modalClose}
              />
            </Col>
          </Row>
        </HeaderContainer>
        <StyledContainerFlex>
          {articles ? (
            articles.map((article, index) => (
              <CardArticle key={index} article={article} />
            ))
          ) : (
            <div>No articles, please add one to your board.</div>
          )}
        </StyledContainerFlex>
      </div>
    );
  }

  return null;
};

const mapStateToProps = state => {
  return {
    boards: state.boards.boards,
    userId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { getAllUserBoards, postArticle }
)(withRestrictedToAuth(ArticlesList));
