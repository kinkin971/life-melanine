import React from 'react';

import "./pages.styles.scss"
const Accueil = () => {

    return (
        <>
            <div className="decouvrez_nos_nouveautes row">
                <div className=" col-lg-8 decouvrez_nos_nouveautes_image">

                </div>

                <div className=" col-lg-4 decouvrez_nos_nouveautes_description">
                    <h3>Découvrez nos nouveautés</h3>
                    <p>Chaque mois, nous vous proposons une sélection de produits à découvrir</p>
                    <div className='button'>
                        <span>Découvrez notre sélection</span>
                    </div>
                </div>

            </div>
            <div className=" decouvrez_sans_limite row">

                <div className=" decouvrez_sans_limite_description col-lg-6 ">
                    <h3>Découvrez sans limite</h3>
                    <p>Envie de rester au fait des nouveauté sur le marché? Envie de tester avant d’adopter. La Mélanine box est faite pour vous</p>
                    <p>Abonnez-vous à la Mélanine box et recevez en exclusivité des produits et des accessoires.</p>
                </div>

                <div className="decouvrez_sans_limite_image col-lg-6 ">

                </div>

            </div>
        </>
    )
}

export default Accueil;