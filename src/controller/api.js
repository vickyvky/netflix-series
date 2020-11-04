const APIURL = "https://api.tvmaze.com/search/shows?q=";
const SHOWBASEURL = "https://api.tvmaze.com/shows";
const SEASONBASEURL = "https://api.tvmaze.com/seasons";
export async function getShow(show){
    return fetch(SHOWBASEURL+show)
    .then(resp=>{
      if(!resp.ok){
        if(resp.status>=400 && resp.status<500){
          return resp.json().then(data=>{
            let err = {errorMessage: data.message};
            throw err;
          });
        }else{
          let err = {errorMessage: "Failed to load"};
          throw err;
        }
      }
      return resp.json();
    });
}
export async function searchShow(show){
    return fetch(APIURL+'/'+show)
    .then(resp=>{
      if(!resp.ok){
        if(resp.status>=400 && resp.status<500){
          return resp.json().then(data=>{
            let err = {errorMessage: data.message};
            throw err;
          });
        }else{
          let err = {errorMessage: "Failed to load"};
          throw err;
        }
      }
      return resp.json();
    });
}
export async function getSingleShow(id){
  return fetch(SHOWBASEURL+'/'+id)
         .then(resp=>{
          if(!resp.ok){
            if(resp.status>=400 && resp.status<500){
              return resp.json().then(data=>{
                let err = {errorMessage: data.message};
                throw err;
              });
            }else{
              let err = {errorMessage: "Failed to load"};
              throw err;
            }
          }
          return resp.json();           
         });
}
export async function getSeasons(id){
    return fetch(SHOWBASEURL+'/'+id+'/seasons')
           .then(resp=>{
            if(!resp.ok){
              if(resp.status>=400 && resp.status<500){
                return resp.json().then(data=>{
                  let err = {errorMessage: data.message};
                  throw err;
                });
              }else{
                let err = {errorMessage: "Failed to load"};
                throw err;
              }
            }
            return resp.json();           
           });
  }

  export async function getEpisodes(id){
    return fetch(SEASONBASEURL+'/'+id+'/episodes')
           .then(resp=>{
            if(!resp.ok){
              if(resp.status>=400 && resp.status<500){
                return resp.json().then(data=>{
                  let err = {errorMessage: data.message};
                  throw err;
                });
              }else{
                let err = {errorMessage: "Failed to load"};
                throw err;
              }
            }
            return resp.json();           
           });
  }