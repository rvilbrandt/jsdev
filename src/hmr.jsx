import React from 'react';
import Horst from './horst.jsx';
import { hot } from 'react-hot-loader';

const Hmr = () => (<Horst>
  <h1>this is react</h1>
</Horst>);

export default hot(module)(Hmr);
