// Pages/home/home.js
// getApp()获取App()产生的示例对象
const app =getApp()
// console.log(app.globalData.name);
const name = app.globalData.name;
const name = app.globalData.age;

Page({
  handleGetUserInfo(event){
    console.log(event);
  }
})