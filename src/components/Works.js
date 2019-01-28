import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

// Styles
import '../style/works.scss'

class Works extends Component {
  render() {
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
        <Row className="worksContent">
          <Col className="tile" xs="6">
            <div className="projets">
              <h4>PROJETS</h4>
              <p>
                <a href="maevacarriere.netlify.com">
                  maevacarriere.netlify.com
                </a>
              </p>
              <p>
                <span>○</span> Site personnel de Maëva Carriere - Jusriste.{' '}
                <br />○ Utilisation de React.js
              </p>
              <p>
                <a href="howstheweather.netlify.com">
                  howstheweather.netlify.com
                </a>
              </p>
              <p>
                <span>○</span> Application web météo. <br />○ Utilisation de
                React.js, API de OpenWeatherMap.
              </p>
              <p>
                <a href="kevinbarfleur.github.io/blog-template">
                  kevinbarfleur.github.io/blog-template
                </a>
              </p>
              <p>
                <span>○</span> Développement d’un microblog avec CMS intégré.{' '}
                <br />○ En développement, mobiles et tablettes non pris en
                charge. <br /> ○ Utilisation de React.js, Firebase, React Quill.
              </p>
            </div>
          </Col>
          <Col className="tile wrapTile" xs="6">
            <div className="experiences">
              <h4>EXPÉRIENCES</h4>
              <p>
                <a href="https://www.agwanet.com/">Agwanet</a>
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
            <div className="autres">
              <h4>AUTRES</h4>
              <p>
                Vous pouvez consulter mes autres travaux sur mes profils Github
                et codepen :
              </p>
              <p>
                <a href="github.com/kevinbarfleur">Github</a> <br />
                <a href="codepen.io/kevin_barfleur">Codepen</a>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Works
