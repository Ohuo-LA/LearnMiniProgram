// Pages/home/home.js
Page({
  data:{
  name:'梨花',
  age:18,
  students:[
    {id:0,name:'haha',age:23},
    {id:1,name:'xixi',age:54},
    {id:2,name:'huhu',age:12}
  ],
  counter:0
  },
  handleBtnClick(){
    // console.log('按钮发生了点击~~');

    // 1.错误做法，页面不会刷新
    // this.data.counter +=1
    // console.log(this.data.counter);

    // 2.this.setData()
    this.setData({
      counter:this.data.counter +1
    })
  },
  handleSubtraction(){
    this.setData({
      counter:this.data.counter-1
    })
  }
})