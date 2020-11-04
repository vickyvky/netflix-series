import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import * as callAPI from '../controller/api'

export default function NavBar() {
    const [searchedSeriesList, setSearchedSeriesList] = useState();
    const isSeriesNotEmpty=(searchedSeriesList && searchedSeriesList.length !==0);
    const [showSearch, setShow] = useState("");
    const handleSearch=(e)=>{
        const input= e.target.value;
        input?setShow("show"):setShow("");
        callAPI.searchShow(e.target.value).then(res=>(
            res.length!==0?setSearchedSeriesList(res):setSearchedSeriesList(
                [{show:{id:"",name:"No Series Found"}}]
                )
            )
        );
        input&&isSeriesNotEmpty&&setSearchedSeriesList([{show:{id:"",name:"Loading"}}]);
    }
    
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand">NetFlix Series</a>
                
                <form className="form-inline">
                    <li className="nav-item dropdown">
                    <input className="form-control mr-sm-2" type="search" onChange={(event)=>handleSearch(event)} placeholder="Search" aria-label="Search"/>
                     <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
                     <div className={"dropdown-menu "+showSearch} aria-labelledby="navbarDropdown">
    {searchedSeriesList && searchedSeriesList.map((eachSeries,index)=><Link key={index} onClick={()=>setShow("")} className="dropdown-item" to={`/series/${eachSeries.show.id}`}>{eachSeries.show.name}</Link>)}
                         </div>
                         </li>
                </form>
                
            </nav>
        </div>
    )
}
