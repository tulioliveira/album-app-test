import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Title inline>Testing Title Element</Title>, div);
  ReactDOM.unmountComponentAtNode(div);
});
