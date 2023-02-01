// app.js
App({
  // 生命周期函数:后台存活2小时
  // 小程序初始化完成时，会执行的生命周期函数
  onLaunch(options) {
    console.log('小程序初始化完成了:onlaunch')
    // wx.request({
    //   url: '',
    // })

    // 异步调用
    wx.getUserInfo({
      // 数据拿到之后在进行回调
      success:function(res){
        console.log(res);
      }
    }),
    setTimeout(()=>{
      const err = new Error()
      throw err
    },3000)
    // setTimeout(function(){
    //   const err = new Error()
    //   throw err
    // },3000)
  },
  // 小程序界面显示出来之后会执行的生命周期函数
  onShow:function(options){
    console.log('界面显示出来:onShow');
  },
  onHide:function(){
    console.log("界面隐藏时执行:onHide");
  },
  onError (msg) {
    console.log("小程序中发生了一些错误时会执行:onError")
  },
})
