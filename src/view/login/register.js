import React,{useState} from 'react';
import { connect } from 'react-redux';
import login from "../../store/action/login";
import {withRouter} from "react-router-dom";
import {useBack} from "../../common/hook/index";
import register from '../../store/action/register';

function RegisterBox(props){
  // console.log(props);
  const [user,setUser] = useState("");
  const [password,setPassword] = useState("");
  const [password2,setPassword2] = useState("");
  const [vcode,setVCode] = useState("");
  const [vcodeShow,setVCodeShow] = useState(false);
  const [vcodeSrc,setVCodeSrc] = useState("/miaov/user/verify?" + Date.now());
  let point = {};
  const back = useBack(props.history);
  const {setDeg} = props;
  function toRegister(){
    props.dispatch(register({
      verify: vcode,
      username: user,
      password,
      repassword: password2
    })).then(data=>{
      console.log(data);
      alert(data.msg);
      setTimeout(() => {
        if(data.code === 0){
          setDeg(0);
        }
        setVCodeSrc("/miaov/user/verify?" + Date.now());
      }, 100);
    });
  }
  return (
      <div className="register_box">
        <h3>注册账号</h3>
          <div className="register_form">
              <p>
                  <input 
                    type="text" 
                    placeholder="用户名"
                    value={user}
                    onChange={(e)=>{
                      setUser(e.target.value);
                    }}
                   />
              </p>
              <p>
                  <input 
                    type="password" 
                    placeholder="请输入密码" 
                    value={password}
                    onChange={(e)=>{
                      setPassword(e.target.value);
                    }}
                  />
              </p>
              <p>
                  <input 
                    type="password" 
                    placeholder="请确认密码" 
                    value={password2}
                    onChange={(e)=>{
                      setPassword2(e.target.value);
                    }}
                  />
              </p>
              <p className="clearfix">
                  <input 
                    type="text" 
                    placeholder="验证码" 
                    className="verifyCode" 
                    value={vcode}
                    onChange={(e)=>{
                      setVCode(e.target.value);
                    }}
                    onFocus={()=>{
                      setVCodeShow(true);
                    }}
                  />
                  {vcodeShow?
                  <img 
                    alt=""
                    className="verify" 
                    src={vcodeSrc} 
                    onTouchStart={(e)=>{
                      let touch = e.changedTouches[0];
                      point.x = touch.pageX;
                      point.y = touch.pageY;
                      // console.log(e.changedTouches[0]);
                    }}
                    onTouchEnd={(e)=>{
                      let touch = e.changedTouches[0];
                      let nowPoint = {
                        x: touch.pageX,
                        y: touch.pageY
                      };
                      if(Math.abs(nowPoint.x - point.x)<5&&Math.abs(nowPoint.y - point.y)<5){
                        setVCodeSrc("/miaov/user/verify?" + Date.now());
                      }
                    }}
                  />:""}
              </p>
              <button 
              className="form_btn"
              onClick={toRegister}
              >马上注册</button>
              <p className="form_tip">已有帐号？<a
                onClick={()=>{
                  setDeg(0);
                }}
              >立即登陆</a></p>
          </div>
      </div>
  );
}

export default connect(res=>res)(withRouter(RegisterBox));