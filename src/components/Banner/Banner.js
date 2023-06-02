import React, { useEffect , useState} from 'react'
import './Banner.css';
import axios from '../../axios'
import {imageUrl} from '../../constants/constants'

function Banner() {
const [movie, setmovie] = useState([])
  useEffect(() => {
    axios.get('/trending/all/day?api_key=61b8e4e536905a70d039d88e7ef3719d').then((response=>{
      setmovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])

    }))
  }, [])
  
  return (
    <div 
  style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className="banner">
        <div className="content">
            <h1 className='title'>{movie ? movie.title:"Movie Name"}</h1>
            <br />
            <h5 className='overview'>{movie ? movie.overview:""}</h5>
            <br />
            <div className ="buttons">
                <button className="buttonone"> Play</button>
                <button className="buttontwo">More info</button>
                
            </div>
        </div>
    </div>
    
  )
}

export default Banner