import React from 'react';
import { connect } from 'react-redux';
import { deleteArticle } from '../../state/reducers/boards';
import Card, { CloseButton } from './Card';

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
      <div style={{width: "100%", height: "100%"}} onClick={openArticle}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <p>{article.article_label}</p>
      </div>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    userId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { deleteArticle }
)(CardArticle);
