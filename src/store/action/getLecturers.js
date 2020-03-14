import http from "./http";
export default function getLecturers(){
  return function(dispath){
    dispath({
      type: "LOAD"
    })
    return http.post(`/lecturer/lists?page=1&rows=100`,{
      order: "desc",
      sort: "sort",
      category_id: 2
    }).then(res=>{
      dispath({
        type: "LOAD_LECTURERS",
        data: res.data
      });
    })
  }
}