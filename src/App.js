import React from 'react'
import createDraft from './components/Draft'
const Draft = createDraft(React)

export default React => () => (
  <div>
    <div style={{
      width: '400px',
      margin: 'auto'
    }}>
      <Draft />
      <hr />
      <div
        style={{
          fontFamily: 'cursive'
        }}>2017 &copy; Drafter App</div>
    </div>
  </div>
)
