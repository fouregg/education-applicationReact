import React from 'react';
import ReactDOM from 'react-dom';
import UserCard from './UserCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});