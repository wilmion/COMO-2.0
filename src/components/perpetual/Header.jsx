import React from 'react';
import loge from '../../Images/loges/loge.png';

const Header = () => (
        <header className="header">
            <section className="header__content">
                <section className="header__grid--column" >
                    <picture>
                        <img className="headergrid__image" tabIndex="0" src={loge} alt="specialized loge" />
                    </picture>
                    <nav className="header__nav">
                        <ul className="header__nav__list">
                            <li className="header__nav__list__item" tabIndex="0">&gt; COMO</li>
                            <li className="header__nav__list__item" tabIndex="0">VADO</li>
                            <li className="header__nav__list__item" tabIndex="0">VADO SL</li>
                        </ul>
                    </nav>
                </section>
                <section className="header__grid--column">
                    <h1 className="header__title" tabIndex="0">TURBO COMO</h1>
                    <h2 className="header__slogan" tabIndex="0">ERES TÚ,SÓLO QUE MÁS RÁPIDO</h2>
                </section>
                <section className="header__grid--column">
                    <a className="header__button" tabIndex="0">CONTÁCTANOS</a>
                </section>
                <div className="none"></div>
            </section>
        </header>
);

export default Header;