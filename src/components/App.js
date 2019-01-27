import React, { Component } from 'react'
import About from './About'

//styles
import '../style/app.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="detail-lines">
          <div className="left-line-1 lines" />
          <div className="left-line-2 lines" />
          <div className="left-line-3 lines" />
          <div className="center-line lines" />
          <div className="right-line-1 lines" />
          <div className="right-line-2 lines" />
          <div className="right-line-3 lines" />
        </div>

        <About />
      </div>
    )
  }
}

export default App
