import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
export default function Cards(props) {

    const {seriesDetails} = props;
    let imageURL = seriesDetails.image===null?logo:seriesDetails.image.medium
    return (
        <div className="card flex-row flex-wrap" style={{width: "25rem",maxWidth: "100%",overflow: "hidden"}}>
        
        <div className="card-header border-0">
         <img className="card-img-left" src={imageURL} alt="Card cap"></img>
        </div>
        <div className="card-block px-1" style={{wordWrap: "break-word"}}>
    <h4 className="card-title"  style={{wordWrap: "break-word",width:"150px"}}>{seriesDetails.name}</h4>
            <p className="card-text"> </p>
            <Link to={`/series/${seriesDetails.id}`} className="btn btn-primary">Show Episodes</Link>
        </div>
     
      </div>
    )
}
