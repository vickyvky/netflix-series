import React,{useState,useEffect,useRef} from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import * as callAPI from './api.js'
import EpisodeSeasons from './EpisodeSeasons.jsx';

export default function SeriesDetailedView() {
    const [seriesDetails, setSeriesDetails] = useState();
    const [seasonsDetails, setSeasonsDetails] = useState();
    const [episodesDetails, setEpisodesDetails] = useState()
    let { id } = useParams();
    console.log(id);
    useEffect(() => {
        (!seriesDetails||id!==seriesDetails.id.toString())
        && callAPI.getSingleShow(id).then(res=>(setSeriesDetails(res)))
        && callAPI.getSeasons(id).then(res=>(setSeasonsDetails(res)))
        && callAPI.getEpisodes(id).then(res=>(setEpisodesDetails(res)))
        ;
    })
    const handleSeasonChange=(e)=>{
        const input=e.target.value;
        callAPI.getEpisodes(input).then(res=>(setEpisodesDetails(res)));
        console.log(episodesDetails);
    }
    return ( 
        <div className="single-show">
            <Link to="/"className="btn btn-dark">Go Back</Link>
            {seriesDetails && <div className="media">
        <div className="image">
            <img className="media-left" style={{width: "30rem"}} src={seriesDetails.image.original} alt={seriesDetails.name} />
        </div>
    
        <div className="media-body">
            <h2 className="media-heading">{seriesDetails.name}</h2>
            <span><strong>Genres: </strong></span>
            {
                seriesDetails.genres.map((g,i)=>(
                    <span key={i}>{g} </span>
                ))
            }
            <p  style={{wordWrap: "break-word",width:"300px",alignContent:"center"}}>
                {seriesDetails.summary.replace(/<p>|<b>|<\/p>|<\/b>/gm,"")}
            </p>
            <select className="custom-select mr-sm-2" onChange={(event)=>handleSeasonChange(event)}>{seasonsDetails && seasonsDetails.map(eachSeason=><option value={eachSeason.id}>{"Season "+eachSeason.number}</option>)}
        </select>
        <h3>Episodes:</h3><br/>
        <ul>
    {episodesDetails && episodesDetails.map((eachEpisodes,index)=><li key={index}>{eachEpisodes.name+ " Duration: "+eachEpisodes.runtime+ "m Release Date: "+eachEpisodes.airdate }</li>)}
    </ul>
        </div> </div>
        }
    </div>
    )
}
