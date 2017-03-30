import './App.css'
import React from 'react'
import createDraft from './components/Draft'
const Draft = createDraft(React)

export default React => () => (
  <div className="container">
      <Draft />
      <hr />
      <div className="footer">
        <a href="https://github.com/pirey/draftor">View Source</a>
      </div>
  </div>
)
