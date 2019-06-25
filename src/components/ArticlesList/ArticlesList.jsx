import React from 'react';
import { connect } from 'react-redux';
import { getAllUserBoards, postBoard } from '../../state/reducers/boards';
import withRestrictedToAuth from '../../hoc/withRestrictedToAuth';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ArticlesList = props => {
  const { userId, getAllUserBoards, boards } = props;
  const boardId = props.match.params.id;
  const [currentBoard, setCurrentBoard] = React.useState();
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    getAllUserBoards(userId);
  }, [userId, getAllUserBoards]);

  React.useEffect(() => {
    getArticlesForCurrentBoard();
  }, [boards]);

  const getArticlesForCurrentBoard = () => {
    const selected = boards.find(board => String(board.id) === boardId);
    if (selected) {
      setCurrentBoard(selected);
      setArticles(selected.articles);  
    }
  };

  const addNew = () => {
    const nameBoard = prompt('Please, enter the name for your new board', '');
    if (nameBoard) props.postBoard(nameBoard, props.userId);
  };

  if (currentBoard) {
    return (
      <div>
        <HeaderContainer>
          <Row>
            <Col sm={4}>{currentBoard.board_title}</Col>
            <Col className="text-md-right" sm={{ span: 1, offset: 7 }}>
              <button onClick={addNew}>Add Article</button>
            </Col>
          </Row>
        </HeaderContainer>
        <Container>
          {articles ? articles.map(article => (
            <a href={article.url} target="_blank"><p>{article.article_label}</p></a>
          )) : <div>No articles</div>}
        </Container>
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
  { getAllUserBoards, postBoard }
)(withRestrictedToAuth(ArticlesList));
