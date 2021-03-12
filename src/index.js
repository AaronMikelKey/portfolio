import React from 'react'
import App from './App'
import { render } from 'react-dom'


  render(
    <div>
      <App />
    </div>,
    document.getElementById('app')
  )
module.hot.accept()