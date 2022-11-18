<template>
  <div class="contain_bottom">
    <vue-seamless-scroll
        :data="listData"
        :class-option="classOption"
        class="warp"
    >
      <ul class="ul-item">
        <li class="li-item" v-for="(item, index) in listData" :key="index">
          <ul class="bottom_system">
            <li class="system_title">{{item.xtm}}</li>
            <li class="system_data">
              <span class="data_title">数据量:</span>
              <span class="data_num" :title="formatNum(item.sjl).oldNum">{{formatNum(item.sjl).newNum}}</span>
              <span class="data_unit">{{formatNum(item.sjl).unit}}条</span>
            </li>
            <li class="system_file system_data">
              <span class="data_title">文件数:</span>
              <span class="data_num" :title="formatNum(item.wjs).oldNum">{{formatNum(item.wjs).newNum}}</span>
              <span class="data_unit">{{formatNum(item.wjs).unit}}个</span>
            </li>
          </ul>
        </li>
      </ul>
    </vue-seamless-scroll>
  </div>
</template>

<script>
import request from '@/utils/request'
import {formatNum} from "@/utils/tools"
export default {
  name: 'ShowBottom',
  data() {
    return {
      formatNum,
      listData: [],
      sysList:[],
      classOption: {
        limitMoveNum: 6,
        direction: 2,
        step:0.5,
        isSingleRemUnit:true,
        singleWidth:4,
      }
    }
  },
  methods: {
    getSystemData(){
      request.get("/screen/sjjr").then(res=>{
        this.listData=res.sysTemGroup;
      })
    }
  },
  created() {
    this.getSystemData();
  },
  mounted() {
  },

}
</script>
},

<style scoped>
.warp {
  width: 24rem;
  height: 2.0625rem;
  overflow: hidden;
}
.ul-item {
  display: flex;
}
.li-item {
  width: 3.375rem;
  height: 2.0625rem;
  background: url(../../static/images/bottom_system.png) no-repeat;
  background-size: contain;
  margin: 0 0.3125rem;
  letter-spacing: .0125rem;
}
.system_title {
  font-size: .2625rem;
  font-weight: 500;
  color: #FFFFFF;
  line-height: .375rem;
  margin: 0.3rem 0rem 0.1rem 0rem;
  text-align: center;
}
.system_data {
  height: .375rem;
  margin: 0rem 0.3rem;
}
.system_data span {
  line-height: .375rem;
}
.system_data .data_title {
  font-size: .225rem;
  font-weight: 400;
  color: #FFFFFF;
  vertical-align: bottom;
}
.system_data .data_num {
  font-size: .3rem;
  color: #FFDF92;
  float: left;
  margin-left:0.15rem;
  text-shadow:none;
}
.system_data .data_unit {
  font-size: .225rem;
  color: #BDBDCA;
  margin-left:0.1rem;
  float: left;
}
.li-item:nth-child(2n) .data_num {
  color: #50E5E5;
}
</style>
