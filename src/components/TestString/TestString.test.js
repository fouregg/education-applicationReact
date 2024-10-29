import React from 'react';
import ReactDOM from 'react-dom';
import TestString from './TestString';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestString />, div);
  ReactDOM.unmountComponentAtNode(div);
});