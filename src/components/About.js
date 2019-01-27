import React, { Component } from 'react'

// style
import '../style/about.scss'

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="name">
          <p>KÉVIN BARFLEUR</p>
          <div className="blueSquare" />
        </div>

        <div className="mainTitle">
          <div className="line" />
          <h1>
            INTÉGRATEUR
            <br />
            DÉVELOPPEUR FRONT END
          </h1>
          <div className="rec-large" />
        </div>
        <div className="intro">
          <p>
            J’ai toujours été attiré par les ordinateurs, les jeux vidéo et tout
            ce qui ce qui est synonyme d’innovation technologique. Le Web a
            cependant quelque chose en plus qui a fait la différence :
            l’importance du visuel.
          </p>
          <br />
          <p>
            J’ai donc entrepris de me former dans ce milieu en autodidacte. Par
            chance, le web fourmille de ressources en tout genre sur lesquelles
            j’ai pu travailler ces deux dernières années.
          </p>
          <br />
          <p>
            Vous êtes désormais libre de parcourir ces deux pages sur lesquelles
            je présente mes objectifs professionnels, un échantillon des travaux
            que j’ai effectué ainsi que mes compétences.
          </p>
          <br />
        </div>

        <div className="objectifs">
          <div className="line" />
          <h2>MES OBJECTIFS</h2>
        </div>
      </div>
    )
  }
}

export default About
