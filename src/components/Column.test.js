import React from 'react';
import ReactDOM from 'react-dom';
import Column from './Column';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Column>Testing Column Element</Column>, div);
  ReactDOM.unmountComponentAtNode(div);
});
