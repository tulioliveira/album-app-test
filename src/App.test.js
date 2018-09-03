import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';

const mockStore = configureMockStore([thunk]);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider
      store={mockStore({
        layout: [],
        sheet: []
      })}
    >
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
