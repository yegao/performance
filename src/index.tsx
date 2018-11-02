import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from 'redux'
import registerServiceWorker from './registerServiceWorker';
const reducer = (state={},action:{type:string})=>{
  return state
}

const store = createStore(reducer);

store.subscribe(()=>{
  const state = store.getState();
  console.log(state);
})

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();