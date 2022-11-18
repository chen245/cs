<template>
  <div class="container">
    <div class="header">
      <ul class="rowone">
        <li></li>
        <li>{{nowDate}} &nbsp;&nbsp;&nbsp;&nbsp;{{weekDay}}</li>
        <li>{{nowTime}}</li>
      </ul>
      <div class="rowtwo">
        <img src="./static/images/title.png">
      </div>
    </div>
    <show-main class="showMain"></show-main>
    <show-bottom class="showBottom"></show-bottom>
  </div>
</template>
<script>
import './static/js/flexible'
import ShowMain from './components/ShowMain/ShowMain.vue'
import ShowBottom from './components/ShowBottom/ShowBottom.vue'
export default {
  name: 'App',
  components:{
    ShowMain,
    ShowBottom,
  },
  data() {
    return {
      nowDate:'',
      nowTime:'',
      weekDay:''
    }
  },
  methods: {
    formatTime(){
      let date=new Date();
      let year=date.getFullYear();
      let month=date.getMonth()+1;
      let day=date.getDate();
      let weeks=date.getDay();
      let hours = date.getHours();    
      let minutes = date.getMinutes();  
      let seconds = date.getSeconds(); 
      
      month = month < 10 ? `0${month}` : month;
      day = day < 10 ? `0${day}` : day;
      hours = hours < 10 ? `0${hours}` : hours;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      
      switch(weeks){
					case 0:
						this.weekDay="星期日";
						break;
					case 1:
						this.weekDay="星期一";
						break;
					case 2:
						this.weekDay="星期二";
						break;
					case 3:
						this.weekDay="星期三";
						break;
					case 4:
						this.weekDay="星期四";
						break;
					case 5:
						this.weekDay="星期五";
						break;
					default:
						this.weekDay="星期六";
						break;
				}
      this.nowDate=year+'/'+month+'/'+day
      this.nowTime=hours+': '+minutes+': '+seconds
    }
  },
  mounted() {
    setInterval(()=>{
      this.formatTime()
    },1000)
  },
  
}
</script>

<style>
* {
  padding: 0%;
  margin: 0%;
  font-family: PingFangSC-Regular, PingFang SC;
  color: #FFF;
  box-sizing: border-box;
  text-decoration: none;
}
.container {
  background: url(./static/images/index.png) no-repeat;
  background-size: contain;
  width: 24rem;
  height: 13.5rem;
  padding-bottom: .25rem;
  position: relative;
}
.header {
    background: url(./static/images/top.png) no-repeat;
    background-size: cover;
    height: 7.6875rem;
    width: 24rem;
    padding: 0 .25rem;  
  } 
  .rowone { 
   height: 0.55rem;
   width: 23.5rem;
  }
  .rowone li {
    height: 0.55rem;
    line-height: 0.55rem;
    float: left;
    text-align: right;
  }
  .rowone li:nth-child(1) {
    width: 17.43rem;
  }
  .rowone li:nth-child(2) {
    width: 3.3rem;
    font-size: .175rem;
    padding: 0.1rem 0.4rem 0rem 0rem;
    font-weight: 400;
    letter-spacing: .0063rem;
  }
  .rowone li:nth-child(3) {
    font-weight: 600;
    width: 2.77rem;
    font-size: .2625rem;
    letter-spacing: 0.0125rem;
  }
  .rowtwo {
    height: 1rem;
    line-height: 1rem;
    width: 23.5rem;
    text-align: center;
  }
  .rowtwo img {
    width: 3.8937rem;
    height: .3rem;
  }
li {
  list-style: none;
}
.showMain{
  position: absolute;
  left: 0;
  top: 1.2rem;
  width: 24rem;
  height: 9rem;
}
.showBottom{
  position: absolute;
  left: 0;
  bottom: 0.25rem;
  width: 24rem;
  height: 3.1rem;
  padding-top: 0.2rem ;
}
</style>
