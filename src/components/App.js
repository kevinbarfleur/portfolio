import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

import About from './About'
import Works from './Works'
import Skills from './Skills'
import Contact from './Contact'

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
    window.addEventListener('resize', () => {
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
          <Col className="mainContainer">
            <About />
            <Works windowWidth={this.state.windowWidth} />
            <Skills windowWidth={this.state.windowWidth} />
            <Contact />
            <div className="copyright">
              <p>
                Développé avec{' '}
                <i style={{ color: '#f44336' }} class="far fa-heart" /> et{' '}
                <i style={{ color: '#2196f3' }} class="fab fa-react" />
              </p>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
