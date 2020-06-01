###########环境依赖 
"axios": "^0.19.0", 
"better-scroll": "^1.15.2", 
"http-proxy-middleware": "^0.20.0", 
"proxy": "^0.2.4", 
"qs": "^6.9.0", 
"react": "^16.9.0", 
"react-dom": "^16.9.0", 
"react-redux": "^7.1.1", 
"react-router-dom": "^5.0.1", 
"react-scripts": "3.1.2", 
"redux": "^4.0.4", 
"redux-thunk": "^2.3.0" 

###########部署步骤 
1.利用脚手架创建项目 create-react-app reactapp 
 
2.npm install // 安装node运行环境 
 
3.cd reactapp // 进入项目 
 
4.yarn start(npm start) // 运行项目 
 
###########目录结构描述 
│  .gitignore 
│  package-lock.json        // 环境依赖具体信息 
│  package.json             // 环境依赖 
│  README.md                // help 
│  yarn.lock 
│   
├─.vscode 
│      settings.json 
│       
├─public 
│      favicon.ico 
│      index.html           // 项目入口 
│      logo192.png 
│      logo512.png 
│      manifest.json 
│      robots.txt 
│       
└─src 
    │  App.js               // 主组件
    │  index.js             // 组件入口
    │  serviceWorker.js
    │  setupProxy.js        // 数据代理
    │  
    ├─commom
    │  ├─component          // 公用组件
    │  │      frame.js
    │  │      header.js
    │  │      menu.js
    │  │      skeleton.js
    │  │      tab.js
    │  │      toDate.js
    │  │      
    │  ├─css                // 样式
    │  │      class.css
    │  │      common.css
    │  │      index.css
    │  │      login.css
    │  │      miiaov.css
    │  │      reset.css
    │  │      teacher.css
    │  │      
    │  ├─font               // 字体
    │  │      iconfont.svg
    │  │      iconfont.ttf
    │  │      PingFang_Bold.ttf
    │  │      方正兰亭纤黑_GBK.TTF
    │  │      
    │  ├─hook
    │  │      index.js
    │  │      
    │  ├─images             // 图片
    │  │      banner1.jpg
    │  │      banner2.jpg
    │  │      banner3.jpg
    │  │      banner4.jpg
    │  │      btn_bg.png
    │  │      button_bg.png
    │  │      chat.png
    │  │      class_bg.jpg
    │  │      class_week.png
    │  │      comment_photo.png
    │  │      dot.png
    │  │      elastic_bg.png
    │  │      icon1.png
    │  │      icon2.png
    │  │      icon3.png
    │  │      icon_edit.png
    │  │      icon_email.png
    │  │      icon_email_focus.png
    │  │      icon_lock.png
    │  │      icon_lock_focus.png
    │  │      icon_menu.png
    │  │      icon_more.png
    │  │      icon_user.png
    │  │      line.jpg
    │  │      list1.png
    │  │      list1_bg.jpg
    │  │      list2.png
    │  │      list2_bg.jpg
    │  │      list3.png
    │  │      list3_bg.jpg
    │  │      list4.png
    │  │      list4_bg.jpg
    │  │      login_bg.jpg
    │  │      login_title.png
    │  │      logo.png
    │  │      menu.png
    │  │      once.png
    │  │      teacher_bg.jpg
    │  │      teacher_email.png
    │  │      teacher_new.png
    │  │      teacher_phone.png
    │  │      teacher_photo.png
    │  │      teachr_title.png
    │  │      user_img.png
    │  │      week.png
    │  │      week1.png
    │  │      week2.png
    │  │      week3.png
    │  │      week4.png
    │  │      week5.png
    │  │      week6.png
    │  │      work1.jpg
    │  │      work2.jpg
    │  │      work3.jpg
    │  │      work4.jpg
    │  │      work5.jpg
    │  │      work6.jpg
    │  │      xiaole.png
    │  │      zan.png
    │  │      zan_black.png
    │  │      
    │  └─less
    │          class.less
    │          common.less
    │          index.less
    │          login.less
    │          miiaov.less
    │          reset.less
    │          teacher.less
    │          
    ├─router                 // 路由
    │      index.js          // 路由主入口
    │      route_list.js     // 路由列表
    │      
    ├─store                  // 数据管理
    │  │  index.js           // 主入口
    │  │  
    │  ├─action
    │  │      getLecturers.js
    │  │      getMessageList.js
    │  │      getWork.js
    │  │      getWorks.js
    │  │      good.js
    │  │      http.js
    │  │      isLogin.js
    │  │      login.js
    │  │      logout.js
    │  │      putMessage.js
    │  │      register.js
    │  │      
    │  └─reducers
    │          good.js
    │          index.js
    │          lecturers.js
    │          login.js
    │          messageList.js
    │          work.js
    │          works.js
    │          
    └─view                     // 视图呈现
        ├─course
        │      index.js
        │      
        ├─index
        │      course.js
        │      index.js
        │      miaov.js
        │      vip.js
        │      works.js
        │      
        ├─lecturer
        │      footer.js
        │      index.js
        │      join.js
        │      lecturerAlert.js
        │      lecturerTab.js
        │      
        ├─login
        │      index.js
        │      login.js
        │      register.js
        │      
        └─work
                article.js
                good.js
                index.js
                main.js
                message.js
                messageList.js