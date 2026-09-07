import { useContext, useEffect, useReducer } from 'react';
import StoreContext from './StoreContext';

const storeProvider = (extraProps = () => ({})) => (Component) => {
  const WithStore = (props) => {
    const store = useContext(StoreContext);
    const [, forceUpdate] = useReducer((x) => x + 1, 0);

    useEffect(() => {
      const subscriptionId = store.subscribe(forceUpdate);

      return () => {
        store.unsubscribe(subscriptionId);
      };
    }, [store]);

    return (
      <Component
        {...props}
        {...extraProps(store, props)}
        store={store}
      />
    );
  };

  WithStore.displayName = `${Component.displayName || Component.name || 'Component'}Container`;
  return WithStore;
};

export default storeProvider;
