import { render, screen } from '@testing-library/react';
import ArticleList from '../ArticleList';
import StoreContext from '../StoreContext';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: {
        id: 'a',
        title: 'Title A',
        date: '2018-01-01T00:00:00.000Z',
        body: 'Body A',
        authorId: 'author-a',
      },
      b: {
        id: 'b',
        title: 'Title B',
        date: '2018-01-02T00:00:00.000Z',
        body: 'Body B',
        authorId: 'author-b',
      },
    },
  };

  const mockStore = {
    lookupAuthor: () => ({
      firstName: 'Test',
      lastName: 'Author',
      website: 'http://example.com',
    }),
    subscribe: jest.fn(() => 1),
    unsubscribe: jest.fn(),
    getState: () => ({ timestamp: new Date('2018-01-01T00:00:00.000Z') }),
    setSearchTerm: jest.fn(),
    startClock: jest.fn(),
  };

  it('renders correctly', () => {
    const { container } = render(
      <StoreContext.Provider value={mockStore}>
        <ArticleList
          {...testProps}
        />
      </StoreContext.Provider>,
    );

    expect(screen.getByText('Title A')).toBeTruthy();
    expect(screen.getByText('Title B')).toBeTruthy();
    expect(container.querySelectorAll('a')).toHaveLength(2);
  });
});
