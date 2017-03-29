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
        }}><a
          style={{
            textDecoration: 'none',
            color: 'darkslategrey'
          }}
          href="https://github.com/pirey/drafter"
        >View Source</a></div>
    </div>
  </div>
)
