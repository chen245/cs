<template>
  <div class="center">
    <el-row class="center_top">
    </el-row>
    <el-row class="center_bottom">
      <el-row class="center_bottom_line">
      </el-row>
      <ul class="bottom_content">
        <li class="content_list">
          <el-row class="content_detail1" style="padding-top:0.1rem">
            <img src="../../../static/images/content_detail1.png">
            <el-row class="content_detail1_data" style="z-index: 999;top:0.1rem">
              <span class="p1" :title="formatNum(result.sjl).oldNum">{{formatNum(result.sjl).newNum}}<span>{{formatNum(result.sjl).unit}}条</span></span>
              <span class="p2">数据接入总量</span>
            </el-row>
          </el-row>
        </li>
        <li class="content_list">
          <el-row class="content_detail1 content_detail3">
            <img src="../../../static/images/content_detail2.png">
            <el-row class="content_detail1_data" style="padding-top:0.5rem;">
              <span class="p1" :title="formatNum(result.tds).oldNum">{{formatNum(result.tds).newNum}}<span>{{formatNum(result.tds).unit}}条</span></span>
              <span class="p2">通道总量</span>
            </el-row>
          </el-row>
        </li>
        <li class="content_list">
          <el-row class="content_detail1 content_detail3">
            <img src="../../../static/images/content_detail3.png">
            <el-row class="content_detail1_data" style="padding-top:0.5rem; z-index: 999;">
              <span class="p1" :title="formatNum(result.wjs).oldNum">{{formatNum(result.wjs).newNum}}<span>{{formatNum(result.wjs).unit}}个</span></span>
              <span class="p2">文件接入总量</span>
            </el-row>
          </el-row>
        </li>
      </ul>
      <el-row class="center_buttom_top">
        数据接入
      </el-row>
      <el-row class="left_point">

      </el-row>
      <el-row class="right_point">

      </el-row>
    </el-row>
  </div>
</template>

<script>
import request from "@/utils/request";
import {formatNum} from "@/utils/tools"
export default {
  name: 'ShowCenter',
  data(){
    return {
      formatNum,
      result:{},
    }
  },
  methods:{
    getSystemData(){
      request.get("/screen/sjjr").then(res=>{
        this.result=res;
      })
    }
  },
  created() {
    this.getSystemData();
  }

}
</script>

<style scoped>
@import '../../../static/css/global.css';
.center_top {
  height: 6.95rem;
  background: url(../../../static/images/center_top.png) no-repeat;
  background-size: contain;
}
.center_bottom {
  height: 2.05rem;
}
.center_bottom_line {
  height: 0.5rem;
  background: url(../../../static/images/center_bottom_line.png) no-repeat;
  background-size: 11.8rem 0.5rem;
  background-position: 1.2rem 0rem;
}
.bottom_content {
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
}
.content_list {
  width: 4rem;
}
.center_buttom_top{
  width: 4.625rem;
  line-height: .7188rem;
  position: absolute;
  left: 4.6rem;
  top: 0.2rem;
  background-color: aqua;
  text-align: center;
  font-size: .3rem;
  font-weight: 500;
  letter-spacing: .0187rem;
  background: url(../../../static/images/center_bottom_top.png) no-repeat;
  background-size: contain;
}
.left_point {
  width: 4rem;
  height: 4rem;
  position: absolute;
  left: 1rem;
  bottom: .4rem;
  background: url(../../../static/images/left_point.png) no-repeat;
  background-size: contain;
}
.right_point {
  width: 4rem;
  height: 4rem;
  position: absolute;
  right: 1rem;
  bottom: .4rem;
  background: url(../../../static/images/right_point.png) no-repeat;
  background-size: contain;
}
</style>
