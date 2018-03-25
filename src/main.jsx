import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Hmr from './hmr.jsx';

ReactDOM.render(
  <AppContainer>
    <Hmr />
  </AppContainer>,
  document.getElementById('root'),
);

// if (module.hot) {
//   module.hot.accept('./hmr.jsx', () => {
//     const NewHmr = require('./hmr.jsx').Hmr;
//     ReactDOM.render(
//       <NewHmr />,
//       document.getElementById('root'),
//     );
//   });
// }
