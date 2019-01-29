import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

// Styles
import '../style/skills.scss'

class Skills extends Component {
  render() {
    return (
      <Container className="Skills">
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <div className="skillsTitle">
              <h2>COMPÉTENCES</h2>
              <div className="rec-large" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="skillsTile" xs="6">
            Intégration
          </Col>
          <Col className="skillsTile" xs="6">
            JavaScript
          </Col>
        </Row>
        <Row>
          <Col className="skillsTile" xs="6">
            Module Bundler
          </Col>
          <Col className="skillsTile" xs="6">
            React
          </Col>
        </Row>
        <Row>
          <Col className="skillsTile" xs="6">
            Git
          </Col>
          <Col className="skillsTile" xs="6">
            Autres
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Skills
