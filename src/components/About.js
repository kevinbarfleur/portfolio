import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Works from './Works'

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
                J’ai toujours été attiré par les ordinateurs, les jeux vidéo et
                tout ce qui ce qui est synonyme d’innovation technologique. Le
                Web a cependant quelque chose en plus qui a fait la différence :
                l’importance du visuel.
              </p>
              <br />
              <p>
                J’ai donc entrepris de me former dans ce milieu en autodidacte.
                Par chance, le web fourmille de ressources en tout genre sur
                lesquelles j’ai pu travailler ces deux dernières années.
              </p>
              <br />
              <p>
                Vous êtes désormais libre de parcourir ces deux pages sur
                lesquelles je présente mes objectifs professionnels, un
                échantillon des travaux que j’ai effectué ainsi que mes
                compétences.
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

        <Works />
      </Container>
    )
  }
}

export default About
