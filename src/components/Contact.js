import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import TrackVisibility from 'react-on-screen'

// Styles
import '../style/contact.scss'

const avatar = require('../images/avatar.png')

const TitleTracked = ({ isVisible }) => {
  const titleHidden = {
    transform: 'translateX(-50px)',
    opacity: '0',
    transition: '1s'
  }
  const titleVisible = {
    transform: 'translateX(0px)',
    opacity: '1',
    transition: '1s'
  }

  const lineHidden = {
    width: '0%',
    transition: '2s'
  }
  const lineVisible = {
    width: '35%',
    transition: '2s'
  }

  const styleTitle = isVisible ? titleVisible : titleHidden
  const styleLine = isVisible ? lineVisible : lineHidden

  return (
    <div className="contactTitle" style={styleTitle}>
      <h2>Contact</h2>
      <div className="Contactline" style={styleLine} />
    </div>
  )
}

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="ContactBackground">
          <Row className="contactContent">
            <Col xs="6">
              <div className="informations">
                <TrackVisibility partialVisibility>
                  <TitleTracked />
                </TrackVisibility>
                <p>
                  <a
                    className="important"
                    href="https://kevinbarfleur.netlify.com"
                  >
                    kevinbarfleur.netlify.com
                  </a>{' '}
                  <br />
                  <a href="https://github.com/kevinbarfleur">
                    github.com/kevinbarfleur
                  </a>
                  <br />
                  <a href="https://codepen.io/kevin_barfleur">
                    codepen.io/kevin_barfleur
                  </a>
                  <br />
                </p>
                <p className="me">
                  <a
                    className="important"
                    href="mailto:kevinbarfleur@gmail.com"
                  >
                    kevinbarfleur@gmail.com
                  </a>{' '}
                  —{' '}
                  <a className="important" href="tel:+33768123058">
                    0768.12.30.58
                  </a>{' '}
                  — 92160, Antony <br />
                  27 ans — Permis B.
                </p>
              </div>
            </Col>
            <Col xs="6">
              <div className="photo">
                <img src={avatar} alt="Kévin Barfleur" />
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    )
  }
}

export default Contact
