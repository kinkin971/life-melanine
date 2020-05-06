import React from 'react';

import './Header.scss'

const Header = () => {

    return (
        <div className="header">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src="https://lifeandmelanine.com/wp-content/uploads/2020/03/logo-sur-fond-transparent-1.png" alt="logo" />
                    </div>
                    <div class="col">
                        <ul>
                            <li><a href='#'>blog</a></li>
                            <li><a href='#'>blog</a></li>
                            <li><a href='#'>blog</a></li>
                            <li><a href='#'>blog</a></li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h1>Toute La Beauté En Un Lieu </h1>
                    </div>

                </div>
            </div>
        </ div>
    )
}

export default Header;