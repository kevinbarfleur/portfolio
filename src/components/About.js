import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

// style
import '../style/about.scss'

class About extends Component {
  render() {
    return (
      <Container className="about">
        <div className="name">
          <p>KÉVIN BARFLEUR</p>
          <div className="blueSquare" />
        </div>

        <Row>
          <Col sm="12" md={{ size: 6, offset: 1 }}>
            <div className="mainTitle">
              <div className="line" />
              <h1>
                INTÉGRATEUR
                <br />
                DÉVELOPPEUR FRONT END
              </h1>
              <div className="rec-large" />
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm="12" md={{ size: 6, offset: 1 }}>
            <div className="intro">
              <p>
                J’ai toujours été attiré par l’innovation technologique. L’un
                des aspects cette innovation, le Web, a suscité mon intérêt en
                raison de la place qu’il accorde depuis quelques années au
                visuel.
              </p>
              <br />
              <p>
                J’ai donc entrepris de me former dans ce milieu en autodidacte.
                Par chance, le web fourmille de ressources en tout genre sur
                lesquelles j’ai pu travailler ces deux dernières années.
              </p>
              <br />
              <p>
                Aussi, je vous propose, ci-après, un état des lieux de mes
                objectifs professionnels, des compétences que j’ai acquis mais
                aussi un échantillon des travaux que j’ai effectué jusqu’ici.
              </p>
              <br />
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm="12" md={{ size: 6, offset: 6 }}>
            <div className="objectifs">
              <div className="line" />
              <h2>MES OBJECTIFS</h2>
              <p>
                Intégrer une équipe travaillant avec des technologies actuelles.
              </p>
              <p>Contribuer au développement Front de projets au quotidien.</p>
              <p>
                Me perfectionner en JavaScript et améliorer ma compréhension des
                frameworks et librairies JS.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default About
