// app.js
App({
  onLaunch (options) {
    // Do something initial when launch.
    console.log(options);
  },
  onShow (options) {
    // Do something when show.
    // console.log(options);
    // // 判断小程序的进入场景
    // switch(options.scene){
    //   case 1001:
    //     break;
    //   case 1005:
    //     break;
    // }

    // 获取用户信息，获取到之后，将用户信息传递给服务器
    wx.getUserInfo({
      success:(res)=>{
        console.log(res);
      }
    })
  },
  onHide () {
    // Do something when hide.
  },
  onError (msg) {
    console.log(msg)
  },
  // 可全局调用的数据
  globalData:{
    name:'huanghuang',
    age:18
  }
})
