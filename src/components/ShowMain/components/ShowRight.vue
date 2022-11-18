<template>
  <div class="aside">
    <el-row>
      <span class="titleSpan">
        <img src="../../../static/images/titleLine.png">
        <p class="titleSpan_p1">数据应用（对外）</p>
        <p class="titleSpan_p2">
          <span class="span_data" :title="tds.oldNum">{{tds.newNum}}</span>
          <span class="span_text">{{tds.unit}}条通道</span>
        </p>
      </span>
    </el-row>
    <el-row class="right_content">
      <el-row class="content_head">
        <el-row class="content_detail1">
          <img src="../../../static/images/content_detail1.png">
          <el-row class="content_detail1_data">
            <span class="p1" :title="totalFileNumOut.oldNum">{{totalFileNumOut.newNum}}<span>个</span></span>
            <span class="p2">文件总量（对外）</span>
          </el-row>
        </el-row>
        <el-row class="content_detail2">
          <vue-seamless-scroll :data="fileSystemListOut" :class-option="classOption" class="warp">
            <ul class="warp_ul">
              <li v-for="(item, index) in fileSystemListOut" :key="index" class="content_detail4 listStyle">
                <ul>
                  <li class="circle" :style="{borderColor:color[index]}"></li>
                  <li class="content_detail4_data">
                    <span class="data_title">{{item.xtm}}</span>
                    <span class="data_unit">{{formatNum(item.wjs).unit}}个</span>
                    <span class="data_num" :title="formatNum(item.wjs).oldNum">{{formatNum(item.wjs).newNum}}</span>
                  </li>
                </ul>
              </li>
              <!--              <li class="point_info"><img src="../../../static/images/point.png">加密字段</li>-->
              <!--              <li class="point_info second"><img src="../../../static/images/point.png">加密字段</li>-->
            </ul>
          </vue-seamless-scroll>
        </el-row>
        <el-row class="content_detail1 content_detail3">
          <img src="../../../static/images/content_detail3.png">
          <el-row class="content_detail1_data" style="padding-top:0.5rem;">
            <span class="p1" :title="totalDataNumOut.oldNum">{{totalDataNumOut.newNum}}<span>{{totalDataNumOut.unit}}条</span></span>
            <span class="p2">数据总量（对外）</span>
          </el-row>
        </el-row>
        <el-row class="content_detail4 fixed">
          <vue-seamless-scroll :data="dataSystemListOut" :class-option="classOption2" class="warp2">
            <ul>
              <li v-for="(item, index) in dataSystemListOut" :key="index" class="content_detail4 listStyle fixedListStyle">
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
  name: 'ShowRight',
  data() {
    return {
      formatNum,
      tds:'',
      totalFileNumOut:'',
      totalDataNumOut:'',
      color:["#00FFFF","#01B9FD","#FF8F1B","#FFF892","#00FFFF","#01B9FD","#FF8F1B","#FFF892"],
      fileSystemListOut:[],
      dataSystemListOut:[],
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
      request.get("/screen/dwsjyy").then(res=>{
        this.tds=this.formatNum(res.tds);
        const dataNumListOut=res.sjlAndWjl;
        this.totalDataNumOut=this.formatNum(dataNumListOut[0].sjl);
        this.totalFileNumOut=this.formatNum(dataNumListOut[0].wjsl);
        this.fileSystemListOut=this.getSystemListOut(res.sysTemGroup).file;
        this.dataSystemListOut=this.getSystemListOut(res.sysTemGroup).data;
      })
    },
    getSystemListOut(sysTemlist){
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
}
</script>
<style scoped>
@import '../../../static/css/global.css';
.titleSpan img {
  left: 1.4rem;
}
.titleSpan_p1 {
  left: 2rem;
}
.titleSpan_p2 {
  background: none;
  width: 2rem;
  right:.55rem;
}
.right_content {
  height: 7.5rem;
  background: url(../../../static/images/right_content.png)  no-repeat;
  background-size: contain;
  padding: 0rem 0.5rem 0.5rem 0rem;
}
.content_head {
  padding-left: 2rem;
}
/*.listStyle:nth-child(2n) .content_detail4_data{*/
/*  margin-left: 0.34rem;*/
/*  background: none;*/
/*  border: 1px dashed rgba(0,255,255,0.45);*/
/*}*/
/*.listStyle:nth-child(2n) .content_detail4_data .data_title,*/
/*.listStyle:nth-child(2n) .content_detail4_data .data_unit ,*/
/*.listStyle:nth-child(2n) .content_detail4_data .data_num {*/
/*  font-size: 0.2rem;*/
/*  color: #FFFFFF;*/
/*  margin: 0 0.18rem;*/
/*}*/
.fixedListStyle:nth-child(2n) .content_detail4_data {
  margin-left: 0.22rem;
  background: url(../../../static/images/detail.png) no-repeat;
  background-size: contain;
  border: none;
}
.warp_ul {
  position: relative;
}
.point_info {
  position: absolute;
  font-size: .2rem;
  color: #BDBDCA;
  line-height: 0.375rem;
  top: 0.35rem;
  left: 1.53rem;
  padding: 0 0.3rem 0 0.75rem;
  text-align: center;
  letter-spacing: .0125rem;
}
.second {
  top: 1.75rem;
}
.point_info img {
  width: 0.15rem;
  height: 0.35rem;
  vertical-align:bottom;
  transform: translateX(-0.4rem);
}
/*.fixedListStyle:nth-child(2n) .content_detail4_data .data_title,*/
/*.fixedListStyle:nth-child(2n) .content_detail4_data .data_unit ,*/
/*.fixedListStyle:nth-child(2n) .content_detail4_data .data_num {*/
/*  font-size: 0.225rem;*/
/*  color: #FFFFFF;*/
/*  margin: 0;*/
/*}*/
/*.fixedListStyle:nth-child(2n) .content_detail4_data .data_num {*/
/*  font-size: 0.3rem;*/
/*  color: #E2F8FF;*/
/*  text-shadow: 0px 0px 8px rgba(0, 255, 255, 0.76);*/
/*}*/
/*.fixedListStyle:nth-child(2n) .content_detail4_data .data_unit {*/
/*  margin-left: 0.1rem;*/
/*  color: #BDBDCA;*/
/*}*/
</style>
