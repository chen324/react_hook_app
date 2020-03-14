import http from "./http";
export default function getMessageList(id){
  return function(dispath,getState){
    dispath({
      type: "MESSAGE_LOAD"
    })
    let {page} = getState().messageList;
    return http.post(`/lecturer/getcomment?page=1&rows=20`,{
      article_id: id
    }).then(res=>{
      if(!res.data.length){
        dispath({
          type: "MESSAGE_LOADEND"
        });
        return false;
      }
      dispath({
        type: "MESSAGE_LOADOVER",
        messageList: res.data
      })
      return true;
    })
  }
}