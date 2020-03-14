import http from "./http";
export default function getWork(id){
  return function(dispath){
    return http.post(`/lecturer/info`,{
      article_id: id
    }).then(res=>{
      // console.log(res);
      dispath({
        type: "WORK_LOADOVER",
        data: res.data
      })
    })
  }
}