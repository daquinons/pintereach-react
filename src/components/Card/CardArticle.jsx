import React from 'react';
import { connect } from 'react-redux';
import { deleteArticle } from '../../state/reducers/boards';
import Card, { CloseButton } from './Card';
import styled from 'styled-components';

const CardArticle = props => {
  const { article } = props;
  const onClose = event => {
    event.stopPropagation();
    // eslint-disable-next-line no-restricted-globals
    const toDelete = confirm('Do you want to delete this article?');
    if (toDelete) props.deleteArticle(article.id, props.userId);
  };

  const openArticle = () => {
    const win = window.open(article.url, '_blank');
    win.focus();
  };

  return (
    <Card>
      <StyledCardBoardContainer onClick={openArticle}>
          <CloseButton onClick={onClose}>×</CloseButton>
          <h4>{article.article_label}</h4>
          <p><a href={article.url} target="_blank" rel="noopener noreferrer">{article.url}</a></p>
      </StyledCardBoardContainer>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    userId: state.auth.userId
  };
};

const StyledCardBoardContainer = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
`;

export default connect(
  mapStateToProps,
  { deleteArticle }
)(CardArticle);
