import { useCallback, useEffect, useState } from 'react';
import pickBy from 'lodash.pickby';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import TimeStamp from './TimeStamp';
import StoreContext from './StoreContext';

const App = ({ store }) => {
  const appState = useCallback(() => {
    const { articles, searchTerm } = store.getState();
    return { articles, searchTerm };
  }, [store]);

  const [state, setState] = useState(appState);

  useEffect(() => {
    const subscriptionId = store.subscribe(() => {
      setState(appState());
    });
    store.startClock();

    return () => {
      store.unsubscribe(subscriptionId);
    };
  }, [store, appState]);

  let { articles, searchTerm } = state;
  const searchRE = new RegExp(searchTerm, 'i');
  if (searchTerm) {
    articles = pickBy(articles, (value) => {
      return value.title.match(searchRE)
        || value.body.match(searchRE);
    });
  }

  return (
    <StoreContext.Provider value={store}>
      <div>
        <TimeStamp />
        <SearchBar />
        <ArticleList
          articles={articles}
        />
      </div>
    </StoreContext.Provider>
  );
};

export default App;
