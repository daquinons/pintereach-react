import React from 'react';
import { connect } from 'react-redux';
import { getAllUserBoards, postBoard } from '../../state/reducers/boards';
import withRestrictedToAuth from '../../hoc/withRestrictedToAuth';
import CardArticle from '../Card/CardArticle';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import ButtonLink from '../ButtonLink/ButtonLink';
import StyledContainerFlex from '../StyledContainerFlex/StyledContainerFlex';
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
    const getArticlesForCurrentBoard = () => {
      const selected = boards.find(board => String(board.id) === boardId);
      if (selected) {
        setCurrentBoard(selected);
        setArticles(selected.articles);
      }
    };

    getArticlesForCurrentBoard();
  }, [boards, boardId]);



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
              <ButtonLink onClick={addNew}>Add</ButtonLink>
            </Col>
          </Row>
        </HeaderContainer>
        <StyledContainerFlex>
          {articles ? (
            articles.map((article, index) => <CardArticle key={index} article={article} />)
          ) : (
            <div>No articles</div>
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
  { getAllUserBoards, postBoard }
)(withRestrictedToAuth(ArticlesList));
