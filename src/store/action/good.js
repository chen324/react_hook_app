import http from "./http";
function getGood(id){
  return function(dispath){
    return http.post(`/lecturer/getgood`,{
      article_id: id
    }).then(res=>{
      if(res.data.code === 0){
        dispath({
          type: "GOOD",
          goodid: res.data.gooid
        });
      }else{
        dispath({
          type: "CANCEL_GOOD"
        })
      }
    })
  }
}

function setGood(id){
  return function(dispath){
    return http.post(`/lecturer/good`,{
      article_id: id
    }).then(res=>{
      console.log(res);
      if(res.data.code === 0){
        dispath(getGood(id));
        return true;
      }
    })
  }
}

function cancelGood({id,goodid}){
  return function(dispath){
    return http.post(`/lecturer/cancelgood`,{
      article_id: id,
      goodid
    }).then(res=>{
      if(res.data.code === 0){
        dispath({
          type: "CANCEL_GOOD"
        });
        return true;
      }
    })
  }
}

export {getGood,setGood,cancelGood};