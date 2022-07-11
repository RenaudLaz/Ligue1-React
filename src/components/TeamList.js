import { clubList } from '../datas/ClubList'
import '../styles/TeamList.css'

function TeamList() {
    const club = clubList.reduce(
        (acc, city) =>
            acc.includes(city.club) ? acc : acc.concat(city.club),
        []
    )
    return (
        <div>
            <ul>
                {club.map((city, index) => (
                    <li key={`${city}-${index}`}>{city}</li>
                ))}
            </ul>
            <ul className='ligue1-club-list'>
                {clubList.map((city) => (
                    <li key={city.name} className='ligue1-club-item'>
                        {city.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TeamList