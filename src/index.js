import React from 'react';
import { render } from 'react-dom';
import { pet } from './pet';

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt me!'),
    React.createElement(pet),
    React.createElement(pet),
    React.createElement(pet)
  ]);
};

render(React.createElement(App), document.getElementById('root'));
