import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongCard = props => {
  const {songDetails, onClickDeleteSong} = props
  const {id, imageUrl, name, genre, duration} = songDetails
  const onClickDelete = () => {
    onClickDeleteSong(id)
  }
  return (
    <li key={id} className="item">
      <div className="album-container">
        <img src={imageUrl} alt="track" className="album-img" />
        <div className="genre-container">
          <p className="item-name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          testid="delete"
          className="del-btn"
          onClick={onClickDelete}
        >
          <AiOutlineDelete size="20px" />
        </button>
      </div>
    </li>
  )
}
export default SongCard
