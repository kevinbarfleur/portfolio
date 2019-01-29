import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

import About from './About'
import Works from './Works'
import Skills from './Skills'

//styles
import '../style/app.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  state = {
    windowWidth: window.innerWidth
  }

  componentWillMount() {
    this.getWindowDimensions()
  }

  getWindowDimensions = () => {
    window.addEventListener('resize', event => {
      this.setState({ windowWidth: window.innerWidth })
    })
  }

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

        <Row>
          <Col>
            <About />
            <Works windowWidth={this.state.windowWidth} />
            <Skills />
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
