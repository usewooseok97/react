import PropTypes from "prop-types"
function Movie({title,mediumCoverImage,summary,genres}){
    return     <div>
      {title}
      <br />
      <img src={mediumCoverImage} alt=""/>
      <p>{summary}</p>
      <ul>
        {genres && genres.map(g => (
        <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
    }

  Movie.propTypes ={
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
    mediumCoverImage:PropTypes.string.isRequired,
  }
export default Movie;