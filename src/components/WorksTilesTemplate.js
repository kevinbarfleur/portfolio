import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import posed from 'react-pose'

const WorksTilesContainer = posed.div({
  open: {
    x: '0%',
    delayChildren: 400,
    staggerChildren: 100
  },
  closed: { x: '-100%', delay: 100 }
})

const WorksTile = posed.div({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
})

class WorksTilesTemplate extends Component {
  render() {
    const isVisible = this.props.tiles_isOpen

    return (
      <WorksTilesContainer
        ref="worksTiles"
        pose={isVisible ? 'open' : 'closed'}
      >
        <Row className="worksContent">
          <Col className="tile" xs="6">
            <WorksTile>
              <div className="projets">
                <h4>PROJETS</h4>
                <p>
                  <a href="https://maevacarriere.netlify.com" target="_blank">
                    maevacarriere.netlify.com
                  </a>
                </p>
                <p>
                  <span>○</span> Site personnel de Maëva Carriere - Jusriste.{' '}
                  <br />○ Utilisation de React.js
                </p>
                <p>
                  <a href="https://howstheweather.netlify.com" target="_blank">
                    howstheweather.netlify.com
                  </a>
                </p>
                <p>
                  <span>○</span> Application web météo. <br />○ Utilisation de
                  React.js, API de OpenWeatherMap.
                </p>
                <p>
                  <a
                    href="https://kevinbarfleur.github.io/blog-template"
                    target="_blank"
                  >
                    kevinbarfleur.github.io/blog-template
                  </a>
                </p>
                <p>
                  <span>○</span> Développement d’un microblog avec CMS intégré.{' '}
                  <br />○ En développement, mobiles et tablettes non pris en
                  charge. <br /> ○ Utilisation de React.js, Firebase, React
                  Quill.
                </p>
              </div>
            </WorksTile>
          </Col>
          <Col className="tile wrapTile" xs="6">
            <WorksTile>
              <div className="experiences">
                <h4>EXPÉRIENCES</h4>
                <p>
                  <a href="https://www.agwanet.com/" target="_blank">
                    Agwanet
                  </a>
                </p>
                <p>
                  Stage Juillet - Août 2018 :<br />
                  <br />
                  <span>○</span> Intégration de PSD au format HTML et CSS.
                  <br />
                  <span>○</span> Maintenance de projets Joomla!
                  <br />
                  <span>○</span> Configuration et maintenance de projets
                  Prestashop.
                  <br />○ Initiation à Bootstrap.
                </p>
              </div>
            </WorksTile>
            <WorksTile>
              <div className="autres">
                <h4>AUTRES</h4>
                <p>
                  Vous pouvez consulter mes autres travaux sur mes profils
                  Github et codepen :
                </p>
                <p>
                  <a href="github.com/kevinbarfleur">Github</a> <br />
                  <a href="codepen.io/kevin_barfleur">Codepen</a>
                </p>
              </div>
            </WorksTile>
          </Col>
        </Row>
      </WorksTilesContainer>
    )
  }
}

export default WorksTilesTemplate
