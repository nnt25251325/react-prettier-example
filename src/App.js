import React, { Suspense } from 'react';

import './assets/scss/style.scss';

import Pages from './pages';
import { RouterLoading } from './components';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<RouterLoading />}>
        <Pages />
      </Suspense>
    </div>
  );
}

export default App;
