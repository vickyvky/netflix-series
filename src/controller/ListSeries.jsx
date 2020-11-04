import React,{useState,useEffect} from 'react'
import Cards from '../components/Cards.jsx';
import * as callAPI from './api.js'


export default function ListSeries() {
const [seriesList, setSeriesList] = useState();
const [f,...pages]=[...Array(11).keys()];
const [pageNo, setPageNo] = useState(1);
const [isLoading, setIsLoading] = useState("");
const page=pageNo;
useEffect(() => {
callAPI.getShow("?page="+pageNo).then(res=>(setSeriesList(res)));
seriesList&&seriesList.length ==0 ?setIsLoading("Loading..."):setIsLoading("");
},[pageNo])
const handlePageChange=(e)=>{
    let p= (e=="INC"?setPageNo(Number(pageNo)+1):setPageNo(Number(pageNo)-1));   
}

    return (
        <div><div className="row mt-5 justify-content-center">
           {seriesList&&seriesList.map(eachSeries=>(<Cards seriesDetails={eachSeries} />))}
           </div>
           {pageNo!==1&&<button type="button" className="btn btn-primary mt-2 mr-2" onClick={()=>handlePageChange("DEC")}>Previous</button>}
           <button type="button" className="btn btn-primary mt-2 mr-2" onClick={()=>handlePageChange("INC")}>Next</button>
           {isLoading}
           {/* {pages.map(i=><button type="button" className="btn btn-primary mt-2 mr-2">{i}</button>)} */}
        </div>
    )
}
