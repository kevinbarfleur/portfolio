import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import TrackVisibility from 'react-on-screen'
import SkillsTilesTemplate from './SkillsTilesTemplate'

// Styles
import '../style/skills.scss'

class Skills extends Component {
  render() {
    const SkillsTilesView = ({ isVisible }) => {
      const windowWidth = this.props.windowWidth

      if (isVisible && windowWidth < 400) {
        return <SkillsTilesTemplate tiles_isOpen={true} />
      } else if (!isVisible && windowWidth < 400) {
        return <SkillsTilesTemplate tiles_isOpen={true} />
      }

      return isVisible ? (
        <SkillsTilesTemplate tiles_isOpen={true} />
      ) : (
        <SkillsTilesTemplate tiles_isOpen={false} />
      )
    }

    return (
      <div className="Skills">
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <div className="skillsTitle">
              <h2>COMPÉTENCES</h2>
              <div className="rec-large" />
            </div>
          </Col>
        </Row>
        <Container>
          <TrackVisibility partialVisibility>{SkillsTilesView}</TrackVisibility>
        </Container>
      </div>
    )
  }
}

export default Skills
