// @flow
import React from 'react';
const pet = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Sashsa'),
    React.createElement('h2', {}, 'Dog'),
    React.createElement('h2', {}, 'Mutt')
  ]);
};

const area = r => {
  return Math.PI * r * r;
};

const result = area('1O');

export default pet;
