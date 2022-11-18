<template>
  <div class="aside">
    <el-row>
      <span class="titleSpan">
        <img src="../../../static/images/titleLine.png">
        <p class="titleSpan_p1">数据应用（对内）</p>
        <p class="titleSpan_p2">
          <span class="span_data" :title="tds.oldNum">{{tds.newNum}}</span>
          <span class="span_text">{{tds.unit}}条通道</span>
        </p>
      </span>
    </el-row>
    <el-row class="left_content">
      <el-row>
        <el-row class="content_detail1">
          <img src="../../../static/images/content_detail1.png">
          <el-row class="content_detail1_data">
            <span class="p1" :title="totalFileNumIn.oldNum">{{totalFileNumIn.newNum}}<span>{{totalFileNumIn.unit}}个</span></span>
            <span class="p2">文件总量（对内）</span>
          </el-row>
        </el-row>
        <el-row class="content_detail2">
          <vue-seamless-scroll :data="fileSystemListIn" :class-option="classOption" class="warp">
            <ul>
              <li v-for="(item, index) in fileSystemListIn" :key="index" class="content_detail4 listStyle">
                <ul class="listStyle_ul">
                  <li class="circle" :style="{borderColor:color[index]}"></li>
                  <li class="content_detail4_data">
                    <span class="data_title">{{item.xtm}}</span>
                    <span class="data_num" :title="formatNum(item.wjs).oldNum">{{formatNum(item.wjs).newNum}}<span class="data_unit">{{formatNum(item.wjs).unit}}个</span></span>
                  </li>
                </ul>
              </li>
            </ul>
          </vue-seamless-scroll>
        </el-row>
        <el-row class="content_detail1 content_detail3">
          <img src="../../../static/images/content_detail3.png">
          <el-row class="content_detail1_data" style="padding-top:0.5rem;">
            <span class="p1" :title="totalDataNumIn.oldNum">{{totalDataNumIn.newNum}}<span>{{totalDataNumIn.unit}}条</span></span>
            <span class="p2">数据总量（对内）</span>
          </el-row>
        </el-row>
        <el-row class="content_detail4 fixed">
          <vue-seamless-scroll :data="dataSystemListIn" :class-option="classOption2" class="warp2">
            <ul>
              <li v-for="(item, index) in dataSystemListIn" :key="index" class="content_detail4 listStyle">
                <ul class="listStyle_ul">
                  <li class="circle" :style="{borderColor:color[index]}"></li>
                  <li class="content_detail4_data">
                    <span class="data_title">{{item.xtm}}</span>
                    <span class="data_num" :title="formatNum(item.sjl).oldNum">{{formatNum(item.sjl).newNum}}<span class="data_unit">{{formatNum(item.sjl).unit}}条</span></span>
                  </li>
                </ul>
              </li>
            </ul>
          </vue-seamless-scroll>
        </el-row>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import request from '@/utils/request'
import {formatNum} from "@/utils/tools"
export default {
  name: 'ShowLeft',
  data() {
    return {
      formatNum,
      tds:'',
      totalFileNumIn:'',
      totalDataNumIn:'',
      color:["#00FFFF","#01B9FD","#FF8F1B","#FFF892","#00FFFF","#01B9FD","#FF8F1B","#FFF892"],
      fileSystemListIn: [],
      dataSystemListIn:[],
      classOption: {
        isSingleRemUnit:true,
        singleHeight: 0.69,
        step:0.2,
        limitMoveNum:4,
      },
      classOption2: {
        isSingleRemUnit:true,
        singleHeight: 0.69,
        step:0.2,
        limitMoveNum:2,
      },
    }
  },
  methods:{
    getDataForIn(){
      request.get("/screen/dnsjyy").then(res=>{
        this.tds=formatNum(res.tds);
        const dataNumListIn=res.sjlAndWjl;
        this.totalDataNumIn=this.formatNum(dataNumListIn[0].sjl);
        this.totalFileNumIn=this.formatNum(dataNumListIn[0].wjsl);
        this.fileSystemListIn=this.getSystemListIn(res.sysTemGroup).file;
        this.dataSystemListIn=this.getSystemListIn(res.sysTemGroup).data;
      })
    },
    getSystemListIn(sysTemlist){
      const list={data:[],file:[]};
      for (let item of sysTemlist) {
        if (item.sjl){
          list.data.push(item);
        }else if (item.wjs){
          list.file.push(item);
        }
      }
      return list;
    }
  },
  created() {
    this.getDataForIn();
  },
  mounted() {

  },
}
</script>
<style scoped>
@import '../../../static/css/global.css';
.titleSpan img {
  left: 0.5rem;
}
.titleSpan_p1 {
  left: 1.15rem;
}
.titleSpan_p2 {
  background: none;
  width: 2rem;
  right:1.5rem;
}
.left_content {
  height: 7.5rem;
  background: url(../../../static/images/left_content.png)  no-repeat;
  background-size: contain;
  padding: 0rem 0rem 0.5rem 0.5rem;
}
</style>
