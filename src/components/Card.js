import { clubList } from '../datas/ClubList'
import '../styles/Card.css'
import L1 from '../assets/championnat.png'
import CDF from '../assets/coupeDeFrance.png'
import CDL from '../assets/coupeDeLigue.png'
import TDC from '../assets/tropheeDesChamp.png'


function CLubs() {


    return (
        <div>
            <div className='ligue1'>
                {clubList.map((club) => (
                    <a href='#' key={club.name} className='ligue1-club-name'>
                        <div>
                            <h2>{club.name}</h2>
                            <br />
                            <img src={club.logo} alt='ligue1 logo club' className='logo-club' />
                            <br />
                        </div>
                        <p>Stade : {club.stadium}</p>
                        <p>Année de création : {club.year}</p>
                        <br />
                        <span className='palmares'>
                            <h3>Palmares:</h3>
                            <br />                             <br />

                            <p>
                                <img src={L1} alt='ligue1' className='logo-trophee' />

                                Ligue 1: {club.l1}
                            </p>
                            <p>
                                <img src={CDF} alt='coupeFrance' className='logo-trophee' />
                                Coupe de france: {club.cdf}
                            </p>
                            <p>
                                <img src={CDL} alt='coupeLigue' className='logo-trophee' />
                                Coupe de la ligue: {club.cdl}
                            </p>
                            <p>
                                <img src={TDC} alt='tropheeChamp' className='logo-trophee' />
                                Trophée des champions: {club.tdc}
                            </p>
                        </span>
                    </a>
                ))}
            </div>
        </div >
    )






}
export default CLubs