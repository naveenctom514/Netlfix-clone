import React, { useEffect } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { useState } from 'react'
import {imageUrl} from '../../constants/constants'


function RowPost(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {

    axios.get(props.url).then((responce=>{
      setMovies(responce.data.results)
    }))
  }, [])
  
  return (
    <div>
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
              {movies.map((obj)=>
              <img className={props.isbig ? 'posterbig' : 'poster'}  src={`${imageUrl+obj.backdrop_path}`} alt="" />
              )}
            </div>
        </div>
    </div>
  )
}

export default RowPost