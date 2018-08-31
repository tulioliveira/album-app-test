import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Grid>Testing Grid Element</Grid>, div);
  ReactDOM.unmountComponentAtNode(div);
});
