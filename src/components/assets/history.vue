<template id="type">
           <div class="count">
               <el-dialog
                       title="资产详情"
                       :visible.sync="showDialog"
                       @close="handleClose"
                       width="80%">
               <el-row>
                   <el-row class="tables" >
                       <el-table
                               ref="multipleTable"
                               :data="tableData"
                               tooltip-effect="dark"
                               style="width: 100%"
                       >
                           <el-table-column type="selection" width="55"></el-table-column>
                           <el-table-column  type="index" label="序号"></el-table-column>
                           <el-table-column prop="delReason" label="删除原因"></el-table-column>
                           <el-table-column prop="delName" label="删除人"></el-table-column>
                           <el-table-column prop="houseAddress" label="删除时间">
                               <template slot-scope="tableData">
                                   {{tableData.row.delTime | dateFormat}}
                               </template>
                           </el-table-column>
                           <el-table-column prop="delRemark" label="删除备注"></el-table-column>
                           <el-table-column prop="landUse" label="资产编号"></el-table-column>
                           <el-table-column prop="landNature" label="产权人"></el-table-column>
                           <el-table-column prop="address7" label="房历史租聘情况">
                               <template slot-scope="tableData">
                                   <el-button  @click="detailHistory(tableData.row)" type="text" size="small">详情</el-button>
                               </template>
                           </el-table-column>
                           <el-table-column  label="资产详情">
                               <template slot-scope="tableData">
                                   <el-button  @click="details(tableData.row)" type="text" size="small">详情</el-button>
                               </template>
                           </el-table-column>
                       </el-table>
                   </el-row>
               </el-row>
               </el-dialog>
               <!--历史租聘123合同-->
               <el-dialog
                       :visible.sync="hisytor"
                       v-if="hisytor"
                       title="历史租聘详情"
                       width="80%">
                   <el-row>
                       <el-form rel="form">
                           <el-col :span="24">
                               <el-table
                                       ref="multipleTable"
                                       :data="hisytortableData"
                                       tooltip-effect="dark"
                                       style="width: 100%"
                                       >
                                   <el-table-column prop="assetCode" label="合同编号"></el-table-column>
                                   <el-table-column prop="tenant" label="承租方"></el-table-column>
                                   <el-table-column prop="formats" label="租金"></el-table-column>
                                   <el-table-column prop="houseNature" label="租约日期">
                                       <template slot-scope="hisytortableData">
                                           {{hisytortableData.row.rentStart}} - {{hisytortableData.row.rentEnd}}
                                       </template>
                                   </el-table-column>
                                   <el-table-column prop="hisytortableData" label="合同详情">
                                       <template slot-scope="hisytortableData">
                                           <el-button @click="historyHt(hisytortableData.row)" type="text" size="small">详情</el-button>
                                       </template>
                                   </el-table-column>
                                   <el-table-column prop="houseNature" label="合同状态">
                                       <template slot-scope="hisytortableData">
                                           <div v-if="hisytortableData.row.status == 1">正常</div>
                                           <div v-if="hisytortableData.row.status == 2">即将到期</div>
                                           <div v-if="hisytortableData.row.status == 3">已缴纳</div>
                                           <div v-if="hisytortableData.row.status == 4">已超期</div>
                                       </template>
                                   </el-table-column>
                                   <el-table-column prop="remark" label="备注"></el-table-column>
                               </el-table>
                           </el-col>
                       </el-form>
                   </el-row>
               </el-dialog>
               <assets-kan :AssetsKanVisible="AssetsKanVisible"  @changeShow="showAssetsKan" ref="AssetsKanRef"></assets-kan>
           </div>
</template>

<script>
    import AssetsKan from '@/components/assets/AssetsKan'
    export default {
  name: 'login',
        props:{
            historyDel:{
                type: Boolean,
                default: false,
            },
            mes:{type:String}
        },
  data () {
    return {
        hisytor:false,
        tableData:[],
        meansBook:'',
        showDialog:false,
        input:'',
        input01:'00125',
        input02:'中国工商银行股份有限公司湖州南浔支行',
        input03:'南浔镇宝善路21号',
        input04:'中国工商银行股份有限公司湖州南浔支行',
        input05:'353.16 m²',
        input06:'159.15 m²',
        input07:'文保单位',
        input08:'双证已注销',
        input001:'南浔旅游风景区',
        input002:'0123456789',
        input003:'代缴',
        input2:'',
        value1:'混合',
        value2:'商业划拨',
        value3:'空闲',
        disabled:true,
        disableds:true,
        dialogImageUrl: '',
        dialogVisible: false,
        options: [
            {
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }
        ],
        value: '',
        map: "", // 对象
        zoom: 10, // 地图的初始化级别，及放大比例
        multipleSelection: [],
        types:'',
        pageNum:1,
        pageSize:10,
        total:1,
        AssetsKanVisible:false,
        fileList: [{
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
            name: 'food2.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }],
        hisytortableData:[]
    }
  },
        components:{
            AssetsKan
        },
    watch:{
        // 监听 addOrUpdateVisible 改变
        historyDel(oldVal,newVal){
            this.showDialog = this.historyDel
        },
    },
    methods:{
        historyHt(){},
        detailHistory(data){
        this.hisytor= true;
        var id = data.assetCode;
        this.$axios({
            url: this.getAjax + '/admin/property/findListByAssetCode?assetCode='+id,
            method: "get",
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Token':sessionStorage.getItem('token')
            },
            data:{}
        }).then(res => {
            if(res.data.code == '1001'){
            this.hisytortableData = res.data.data
        }else{
            this.$message({
                message: res.data.msg,
                type: 'warning'
            });
        }
    })
    },
        // 资产详情查看
        details(data){
            this.AssetsKanVisible = true
            let param = data.id
            this.$refs.AssetsKanRef.detail(param)
        },
        showAssetsKan(data){
            if(data === 'false'){
                this.AssetsKanVisible = false
            }else{
                this.AssetsKanVisible = true
            }
        },
        // 查询详情列表
        list(){
            var that = this;
            var data ={
                "pageNum": this.pageNum,
                "pageSize": this.pageSize,
            }
            this.$axios({
                url: this.getAjax + '/admin/meansAdmin/findDelHistory',
                method: "post",
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Token':sessionStorage.getItem('token')
                },
                data:data
            }).then(res => {
                if(res.data.code == '2004'){
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                });
                this.$router.push('/')
            }else{
                var list = res.data.data.list;
                that.tableData = list;
                that.total = res.data.data.total
                console.log(that.total)
                if(that.total<=1){
                    that.pageType = false
                }
            }
        })
        },
        detail(param){
            var id = param;
            this.$axios({
                url: this.getAjax + '/admin/meansAdmin/findDetails?id='+id,
                method: "get",
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Token':sessionStorage.getItem('token')
                },
                data:{}
            }).then(res => {
                if(res.data.code = '1001'){
                    this.meansBook = res.data.data.meansBook;
                    console.log(this.meansBook)
            }else{
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                });
            }
        })
        },
        handleClose(){
            // 子组件调用父组件方法，并传递参数
            this.$emit('changeShow','false')
        },
        handleRemove(file) {
            console.log(file);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleDownload(file) {
            console.log(file);
        },
        handleChange(file, fileList) {
            this.fileList = fileList.slice(-3);
        },
        onLoad() {
        },

    },
    mounted(){
        this.$emit('childEvent', { name: 'zhangsan', age:  10 });
        this.list();
    },
    created:function () {

    }
}
</script>
<style scoped>
    .meansBookImg {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 0;
        right: 220px;
    }
    .map {
        height: 250px;
        width:600px;
        position: relative;
        left:50%;
        margin-left: -300px;
        background: aliceblue;
        margin-top: 30px;
    }
    .count>>>.charts {position: relative;left:50%;margin-left: -150px;}
    .count>>>.col {margin: 0 25px 25px 0;background: #fff;}
    .count>>>.el-form-item__label {width: 30%;font-size: 14px;line-height: 40px;}
    .count>>>.el-form-item {margin-bottom: 5px;}
    .count>>>.el-input {width: 400px;}
    .count>>>.el-upload--picture-card {width: 40px;height:40px;position: absolute;top:0;right:220px;}
    .count>>>.el-upload--picture-card i {width: 40px;height:40px;position: absolute;top:6px;left:0;}
    .count .phone>>>.el-upload--picture-card {width: 140px;height:140px;position: relative;right: inherit;}
    .count .phone>>>.el-upload--picture-card i {width: 140px;height:140px;position: relative;}
    .files>>>.el-upload-list {width: 30%;margin-left: 33%;}
    .coordinate>>>.el-form-item__label {width: 25%;}
    .sum {height:100px;background: #fff;width: 90%;}
    .sumLeft {float:left;line-height: 115px;margin-left: 48px;}
    .sumRight {margin-left: 130px;padding-top: 20px;}
    .sumRight p:first-child {font-size: 16px;color: #666;}
    .sumRight p:last-child {font-size: 30px;color: #333;margin-top: 10px;}
    .count .table>>>.el-input {width: 150px;}

</style>
