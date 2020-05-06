import React from 'react';

import './_footer.style.scss'

const Footer = () => {

    return (
        <>
            <section id='footer'>
                <div className="row">
                    <div className="col-md-12 text-center ">
                        <span><b>Offre exclusive</b></span>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center ">
                        <h1>Profitez des réductions spéciales <br />« Mélaninie gurlz »</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center ">
                        <p>Qui n’aime pas les remises ? Abonnez-vous et devenez une « Mélanine gurl » pour profiter d’une offre exclusive.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center ">
                        <button type="button" class="btn btn-primary">Abonne toi </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;