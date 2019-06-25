import React from 'react';
import Card, { CloseButton } from './Card';

const CardArticle = props => {
  const { article } = props;

  return (
    <a href={article.url} rel="noopener noreferrer" target="_blank">
      <Card>
        <>
          <CloseButton>X</CloseButton>
          <p>{article.article_label}</p>
        </>
      </Card>
    </a>
  );
};

export default CardArticle;
