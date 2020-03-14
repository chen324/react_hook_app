import http from "./http";
export default function logout(){
  return function(dispath){
    return http.post("/user/logout").then(res=>{
      if(res.data.code === 0){
        dispath({
          type: "LOGOUT"
        })
      }
    })
  }
}