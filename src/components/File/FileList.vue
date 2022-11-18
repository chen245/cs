<template>
    <div class="center">
        <div class="navigate">
            <span><button @click="backIndex">首页</button></span>
            <span><button v-if="$store.state.fileListTitle" @click="backFileList">&nbsp;&gt;&nbsp;安全制度</button></span>
            <span><button v-if="$store.state.content"> &nbsp;&gt;&nbsp;详情</button></span>
        </div>
        <div class="content">
            <ul v-if="$store.state.fileList">
                <li v-for="(file,index) in listData" :key="index" class="item" @click="content(file.id)">{{file.fileName}}</li>
            </ul>
            <div v-if="$store.state.content" class="detail">
                <div class="head" v-html="head"></div>
                <div class="text" v-html="text"></div>
            </div>
            <el-pagination
                small
                layout="->,prev, pager, next"
                :page-size="pageSize"
                :total="totalElements"
                :current-page="currentPage"
                @current-change="getPageNum"
                v-if="$store.state.fileList">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import request from '@/utils/request'
export default {
    name:'FileList',
    data(){
        return{
            listData:[],
            totalElements:0,
            pageSize:15,
            text:'',
            head:'',
            currentPage:1,
        }
    },
    methods:{
        //回到首页
        backIndex(){
            this.$store.state.showMain=true;
            this.$store.state.showFileList=false;
            this.$store.state.fileList=true;
            this.$store.state.content=false;
            this.$store.state.fileListTitle=false;
        },
        //展示详情
        content(fileId){
            this.$store.state.fileList=false;
            this.$store.state.content=true;
            this.getFileById(fileId);
        },
        //回到文件列表
        backFileList(){
            this.$store.state.fileList=true;
            this.$store.state.content=false;
        },
        //文件详细
        getFileById(fileId){
            request.get('/meta/dam/api/dev/query/safety_system_file_content?'+'fileId='+fileId).then(
                res =>{
                    if(res.code=='200' && res.result){
                    this.text=res.result.content;
                    this.head=res.result.fileName;
                    }
                })
        },
        //分页
        getPageList(pageNum){
            request.get('/meta/dam/api/dev/query/safety_system_file_list?'+'page='+pageNum+'&size=15').then(
                res=>{
                    if(res.code=='200' && res.result){
                        this.listData=res.result.content;
                        this.totalElements=res.result.totalElements;
                    }
                }
            )
        },
        //获取当前页码
        getPageNum(pageNum) {
            this.currentPage=pageNum;
            this.getPageList(this.currentPage)
        }
    },
    mounted(){
        // this.totalElements=this.$store.state.fileData.totalElements;
        //调用文件内容详情
        this.getFileById(this.$store.state.fileId);
        this.getPageList(this.currentPage);
    }
}
</script>

<style>
.center {
    width: 19.4rem;
    height: 12.2rem;
    position: absolute;
    left: 2.3rem;
    top: 1.3rem;
    padding: 0rem 2.3rem;
    background: url(../../static/images/content.png) no-repeat;
    background-size: 24rem 13.6rem;
    background-position: -2.3rem -1.4rem;
}
.navigate {
    width: 14.8rem;
    height: 0.6rem;
    font-size: .2062rem;
    font-weight: 400;
    letter-spacing: .0125rem;
    line-height: 0.6rem;
}
.navigate span button {
    cursor:pointer;
    background: none;
    border: none;
}
.content {
    height: 11.0563rem;
    background:url(../../static/images/fileContent.png) no-repeat;
    background-size: contain;
    padding: .6rem .2687rem;
    position: relative;
}
.content ul .item {
    width: 14.2625rem;
    display: block;
    height: .5rem;
    line-height: .5rem;
    font-size: .225rem;
    background: rgba(15,41,93,0.3);
    margin-bottom: .125rem;
    cursor:pointer;
}
.btn-prev,.el-pager li,.btn-next {
    background: none !important;
}
.el-pagination {
    position: absolute;
    right: 0.5rem;
    bottom: 0rem;
}
.detail {
    overflow-y: scroll;
    overflow-x:hidden;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar {
    width: .0187rem;
    /*滚动条宽度*/
    height: .0187rem;
    /*滚动条高度*/
    background-color: #e6eaee;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 .0375rem rgba(202, 202, 202, 0.3);
    background-color: #bdc6ce;
    /*滚动条的背景颜色*/
  }

.head {
width: 14.2625rem;
height: 0.8rem;
font-size: .35rem;
letter-spacing: .0125rem;
text-align: center;
line-height: 0.8rem;
}
.text {
    width: 14.2625rem;
    height: 9rem;
    white-space: pre-line;
    font-size: .2rem;
    color: #FEFEFE; 
    letter-spacing: .0125rem;
}
</style>