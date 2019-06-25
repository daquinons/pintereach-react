import React from 'react';
import Card from './Card';

const CardArticle = props => {
  const { article } = props;

  return (
    <a href={article.url} target="_blank">
      <Card>
        <p>{article.article_label}</p>
      </Card>
    </a>
  );
};

export default CardArticle;
