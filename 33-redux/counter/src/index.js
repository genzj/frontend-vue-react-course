import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import CounterView from './containers/CounterView'
import rootReducer from './reducers'
import './main.css'

const store = createStore(rootReducer, applyMiddleware(thunk))
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Provider store={store}>
    <CounterView />
  </Provider>
  ,
  rootEl
)

render()
store.subscribe(render)
