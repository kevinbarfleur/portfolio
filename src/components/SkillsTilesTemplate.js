import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import posed from 'react-pose'

const SkillsTilesContainer = posed.div({
  open: {
    x: '0%',
    delayChildren: 600,
    staggerChildren: 100,
    delay: 100
  },
  closed: { x: '-100%', delay: 100 }
})

const SkillsTile = posed.div({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
})

const skillsIcons = [
  require('../icons/integration.png'),
  require('../icons/javascript.png'),
  require('../icons/modules.png'),
  require('../icons/react.png'),
  require('../icons/git.png'),
  require('../icons/langues.png')
]

class SkillsTilesTemplate extends Component {
  render() {
    const isVisible = this.props.tiles_isOpen

    return (
      <SkillsTilesContainer
        ref="worksTiles"
        pose={isVisible ? 'open' : 'closed'}
      >
        <Row>
          <Col className="skillsTile" xs="6">
            <SkillsTile>
              <img src={skillsIcons[0]} alt="" />
              <h4>Intégration</h4>
              <p className="skillIntro">
                Intégration de maquettes au format HTML et CSS :
              </p>
              <p>
                <span>○</span> Mise en place des règles de bases SEO. <br />○
                Gestion du responsive à l’aide de Flexbox et CSS Grid.
              </p>
            </SkillsTile>
          </Col>

          <Col className="skillsTile" xs="6">
            <SkillsTile>
              <img src={skillsIcons[1]} alt="icone javascript ES5 ES6" />
              <h4>JavaScript</h4>
              <p className="skillIntro">
                Développement de fonctionnalités en JavaScript :
              </p>
              <p>
                <span>○</span> Développement “From Scratch” en ES5/ES6. <br />
                <span>○</span> Utilisation de librairies diverses. <br />
                <span>○</span> Travail avec les API.
              </p>
            </SkillsTile>
          </Col>
        </Row>
        <Row>
          <Col className="skillsTile" xs="6">
            <SkillsTile>
              <img src={skillsIcons[2]} alt="icone module bundler" />
              <h4>Modules Bundler</h4>
              <p className="skillIntro">
                Configuration de projets avec Webpack ou Parcel :
              </p>
              <p>
                <span>○</span> Utilisation de préprocesseurs CSS : Sass &
                Stylus. <br />
                <span>○</span> Prise en charge des compatibilités JS à l’aide de
                Babel.
              </p>
            </SkillsTile>
          </Col>
          <Col className="skillsTile" xs="6">
            <SkillsTile>
              <img src={skillsIcons[3]} alt="icone react javascript" />
              <h4>React</h4>
              <p className="skillIntro">
                Développement d’applications web avec React :
              </p>
              <p>
                <span>○</span> Compréhension des fonctionnalités de base. <br />
                <span>○</span> Routage / Gestion des URL simple avec React
                Router. <br />
                <span>○</span> Fonctionnalités de base de Firebase avec React.
              </p>
            </SkillsTile>
          </Col>
        </Row>
        <Row>
          <Col className="skillsTile" xs="6">
            <SkillsTile>
              <img src={skillsIcons[4]} alt="icone git github" />
              <h4>Git</h4>
              <p className="skillIntro">
                Bases du versioning avec Git et Github :
              </p>
              <p>
                <span>○</span> J’utilise principalement les Commit et les Push
                pour sauvegarder et versionner mes projets. <br />{' '}
                <span>○</span> Je n’ai pas encore eu l’occasion de travailler
                avec les features de travail en équipe comme les Pull et les
                Merge Request.
              </p>
            </SkillsTile>
          </Col>
          <Col className="skillsTile" xs="6">
            <SkillsTile>
              <img src={skillsIcons[5]} alt="icone langues" />
              <h4>Langues</h4>
              <p>
                <span>○</span> Français : Langue maternelle. <br />
                <span>○</span> Anglais : Compréhension écrite moyenne permettant
                l’étude des documentations, etc..
              </p>
            </SkillsTile>
          </Col>
        </Row>
      </SkillsTilesContainer>
    )
  }
}

export default SkillsTilesTemplate
