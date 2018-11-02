import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from 'redux'
import registerServiceWorker from './registerServiceWorker';
const store = (state={},action:{type:string})=>{
  return state
}
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();