import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store, history } from './redux/store';
import { GlobalStyle } from './globalStyle';
import App from './App';
import reportWebVitals from './reportWebVitals';

render(
  <Provider store={store}>
    <GlobalStyle />
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
