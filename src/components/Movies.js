import { useEffect } from "react"
import axios from "axios"
import { saveMovies } from "../redux/movieReducer"
import { useSelector, useDispatch } from "react-redux"

const Movies = (props) => {
  const { movies } = useSelector((state) => state.movieReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get("/api/movies")
      .then((res) => {
        dispatch(saveMovies(res.data))
      })
      .catch((err) => console.log(err))
  }, [])
  console.log(movies)
  return <div>
    {movies.map((movie) => {
      return (
        <div>{movie.title}</div>
      )
    })}
  </div>
}

export default Movies
