import { clubList } from '../datas/ClubList'
import '../styles/Card.css'

function CLubs() {


    return (
        <div>
            <div className='ligue1'>
                {clubList.map((club) => (
                    <a href='#' key={club.name} className='ligue1-club-name'>
                        <div>
                            <h2>{club.name}</h2>
                            <img src={club.logo} alt='ligue1 logo club' className='ligue1-logo-club' />
                        </div>
                        <p>Stade : {club.stadium}</p>
                        <p>Année de création : {club.year}</p>
                        <span>
                            <h3>Palmares:</h3>
                            <p>L1:</p>
                            <p>Cdf:</p>
                            <p>Cdl:</p>
                            <p>Tdc:</p>
                        </span>
                    </a>
                ))}
            </div>
        </div>
    )






}
export default CLubs