import React from 'react';
import { render } from '@testing-library/react';
import ArticleList from '../ArticleList';

jest.mock('../Article', () => {
  const MockArticle = (props) => <div data-testid={`article-${props.article.id}`} />;
  MockArticle.displayName = 'ArticleContainer';
  return { __esModule: true, default: MockArticle };
});

describe('ArticleList', () => {

  const testProps = {
    articles: {
      a: {id: 'a'},
      b: {id: 'b'}
    },
  };

  it('renders correctly', () => {
    const { container } = render(
      <ArticleList 
        {...testProps}
      />
    );

    expect(container.querySelectorAll('[data-testid^="article-"]').length).toBe(2);
  });

});