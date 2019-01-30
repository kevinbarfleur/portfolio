import React, { Component } from 'react'
import TrackVisibility from 'react-on-screen'
import posed from 'react-pose'
import { Row, Col } from 'reactstrap'

// Styles
import '../style/contact.scss'

const ContactContainer = posed.div({
  open: {
    y: 0,
    opacity: 1,
    delayChildren: 500,
    staggerChildren: 100,
    delay: 100,
    transition: {
      duration: 1000
    }
  },
  closed: { y: 20, opacity: 0 }
})

const ContactTile = posed.div({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
})

class Contact extends Component {
  render() {
    const ContactContent = (
      <Row>
        <Col xs="6">
          <div className="Contactline" />
          <h2>Contact</h2>
          <p>
            <a href="https://kevinbarfleur.netlify.com">
              kevinbarfleur.netlify.com
            </a>
            <a href="https://github.com/kevinbarfleur">
              github.com/kevinbarfleur
            </a>
            <a href="https://codepen.io/kevin_barfleur">
              codepen.io/kevin_barfleur
            </a>
          </p>
        </Col>
        <Col xs="6">.col-6</Col>
      </Row>
    )

    const ContactView = ({ isVisible }) => {
      return isVisible ? (
        <ContactContainer pose="open">
          <ContactTile>
            <div className="Contact">{ContactContent}</div>
          </ContactTile>
        </ContactContainer>
      ) : (
        <ContactContainer pose="closed">
          <ContactTile>
            <div className="Contact">{ContactContent}</div>
          </ContactTile>
        </ContactContainer>
      )
    }

    return (
      <React.Fragment>
        <TrackVisibility partialVisibility>{ContactView}</TrackVisibility>
      </React.Fragment>
    )
  }
}

export default Contact
