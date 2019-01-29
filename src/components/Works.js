import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
// import posed from 'react-pose'
import TrackVisibility from 'react-on-screen'
import WorksTilesTemplate from './WorksTilesTemplate'

// Styles
import '../style/works.scss'

class Works extends Component {
  render() {
    const TilesView = ({ isVisible }) => {
      const windowWidth = this.props.windowWidth

      if (isVisible && windowWidth < 400) {
        return <WorksTilesTemplate tiles_isOpen={true} />
      } else if (!isVisible && windowWidth < 400) {
        return <WorksTilesTemplate tiles_isOpen={true} />
      }

      return isVisible ? (
        <WorksTilesTemplate tiles_isOpen={true} />
      ) : (
        <WorksTilesTemplate tiles_isOpen={false} />
      )
    }

    return (
      <div className="Works">
        <Row>
          <Col xs="6">
            <div className="worksTitle">
              <div className="line" />
              <div className="blueSquare" />
              <h2>EXPÉRIENCES</h2>
              <h2>PROJETS</h2>
            </div>
          </Col>
        </Row>
        <TrackVisibility partialVisibility>{TilesView}</TrackVisibility>
      </div>
    )
  }
}

export default Works
