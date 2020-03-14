import http from "./http";
export default function getWorks(){
  return function(dispath,getState){
    dispath({
      type: "LOAD"
    })
    let {page} = getState().works;
    return http.post(`/lecturer/lists?page=${page}&rows=8`,{
      order: "desc",
      sort: "sort",
      category_id: 1,
      recommend: 1
    }).then(res=>{
      if(!res.data.length){
        dispath({
          type: "LOADEND"
        });
        return false;
      }
      dispath({
        type: "LOADOVER",
        data: res.data
      })
      return true;
    })
  }
}