import http from "./http";
export default function isLogin(){
  return function(dispath){
    return http.post("/user/islogin").then(res=>{
      if(res.data.code === 0){
        dispath({
          type: "LOGIN",
          user: res.data.username
        })
      }
    })
  }
}