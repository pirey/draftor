import React from 'react'
import { render } from 'react-dom'
import createApp from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

const persistedState = loadState()
let store = createStore(reducer, persistedState)

store.subscribe(throttle(() => {
  saveState(store.getState())
  console.log(store.getState())
}, 1000))

const App = createApp(React)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
