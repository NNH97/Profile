import React from "react";
import "./footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Hoai</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">
                            Portfolio
                        </a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a
                        href="https://github.com/NNH97"
                        className="footer__social-link"
                        target="_blank"
                    >
                        <i className="uil uil-github-alt"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nguyen-hoai-281b36197/"
                        className="footer__social-link"
                        target="_blank"
                    >
                        <i class="uil uil-linkedin-alt"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Copyright Crypticalcoder.</span>
            </div>
        </footer>
    );
}

export default Footer;
