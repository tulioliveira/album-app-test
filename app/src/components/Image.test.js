import React from 'react';
import ReactDOM from 'react-dom';
import Image from './Image';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Image imageIndex="2" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
