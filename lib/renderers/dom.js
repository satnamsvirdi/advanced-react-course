import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import StateApi from 'state-api';

import App from 'components/App';

const store = new StateApi(window.initialData);

hydrateRoot(
  document.getElementById('root'),
  <App store={store} />
);
