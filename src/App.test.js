import React from 'react'
import { render } from 'react-dom'
import createApp from './App'

const App = createApp(React)

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<App />, div)
})
