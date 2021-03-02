import Hero from '../../assest/hero.svg';
import './header.style.css';

const Header = () => (
    <div className='header'>
        <img src={Hero} alt="hero" className="hero-img"/>
        <div className="header-info">
            <h1>Your favourite tunes</h1>
            <h2>All 🌞 and 🌙</h2>
        </div>
    </div>
);

export default Header;