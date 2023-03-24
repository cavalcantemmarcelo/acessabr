import React from 'react';
import './footer.scss';
import iconTop from '../../images/icon-top.png';

function Footer(){
    return(
        <footer className="footer">
            <div className="footer__section footer__section--first">
                <div className="footer__container">
                    <p>
                        <strong>Observação:</strong> este site é uma amostra de desenvolvimento tecnológico de iniciativa independente, as informações aqui apresentadas podem estar eventualmente desatualizadas, por isso recomendamos sempre conferir as informações diretamente com o estabelecimento. A exibição dos locais, nesta página não caracteria recomendação de uso.
                    </p>
                </div>
            </div>
            <div className="footer__section footer__section--second">
                <div className="footer__container">
                    <p>
                        <strong>AcessaBR - Acessibilidade urbana para todos.</strong>
                        <small>
                            Projetado por <a href="https://github.com/cavalcantemmarcelo" target="_blank">Marcelo Cavalcante</a>.
                        </small>
                    </p>
                    <a href="#top" className="button">
                        <img src={iconTop} alt="Voltar ao top" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;