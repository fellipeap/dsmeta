import logo from '../../assets/img/logo.svg';

import './styles.css';
function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="fellipe01235@gmail.com">@fellipeaparecido</a>
                </p>
            </div>
        </header>
    )
}

export default Header;
