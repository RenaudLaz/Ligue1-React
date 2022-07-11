import '../styles/Header.css'
import logo from '../assets/logo.png'
import champion from '../assets/champion.png'

function Header() {
    return <div className='ligue1-header'>
        <div className='ligue1-champion'>
            <img src={champion} alt='Paris saint germain' className='ligue1-logo-psg' />
            <p>Champion 2022: Paris Saint Germain</p>
        </div>
        <div className='ligue1-sponsor'>
            <img src={logo} alt='Ligue1 Uber eats' className='ligue1-logo' />
            <h1>LIGUE 1 - Uber <span className='ligue1-eats'>Eats</span></h1>
        </div>
    </div>
}

export default Header