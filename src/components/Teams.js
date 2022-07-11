import { clubList } from '../datas/ClubList'
import '../styles/Teams.css'

function Teams({ name, stadium, year, logo }) {
    const categories = clubList.reduce(
        (acc, club) =>
            acc.includes(club.name) ? acc : acc.concat(club.name),
        []
    )
    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <li key={clubList.name} className='ligue1-club-item'>
                <img className='ligue1-club-item-cover' src={clubList.logo} alt={`${clubList.name} logo`} />
                {clubList.name}
                {clubList.stadium}
                {clubList.year}
            </li>
        </div>
    )
}

export default Teams