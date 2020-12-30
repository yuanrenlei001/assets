<template id="type">
           <div class="count kan">
               <el-dialog
                       title="资产详情"
                       :visible.sync="showDialog"
                       @close="handleClose"
                       width="700px">
               <el-row>
                   <el-form ref="form">
                       <el-col :span="24">
                           <el-form-item label="产权名：">
                               <el-input v-model="tmp&&tmp.assetCode?tmp.assetCode:meansBook.assetCode" placeholder="" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="产权人：">
                               <el-input v-model="tmp&&tmp.assetUser?tmp.assetUser:meansBook.assetUser" placeholder="" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="房屋坐落：">
                               <el-input v-model="tmp&&tmp.houseAddress?tmp.houseAddress:meansBook.houseAddress" placeholder="" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="原使用产权人：">
                               <el-input v-model="tmp&&tmp.assetUserOri?tmp.assetUserOri:meansBook.assetUserOri" placeholder="" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col  :span="24">
                           <el-form-item label="房屋性质：" >
                               <el-input v-model="tmp&&tmp.houseNature?tmp.houseNature:meansBook.houseNature" placeholder="" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col  :span="24">
                           <el-form-item label="房屋结构：" >
                               <el-input v-model="tmp&&tmp.houseStructure?tmp.houseStructure:meansBook.houseStructure" placeholder="" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="未登记建筑面积：">
                               <el-input v-model="tmp&&tmp.noCheckinArea?tmp.noCheckinArea:meansBook.noCheckinArea+' m²'" placeholder="" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="房屋建筑面积：">
                               <el-input v-model="tmp&&tmp.landArea?tmp.landArea:meansBook.landArea+' m²'" placeholder="" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col  :span="24">
                           <el-form-item label="产权用途：" >
                               <el-input v-model="tmp&&tmp.assetUse?tmp.assetUse:meansBook.assetUse" placeholder="" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="土地面积：">
                               <el-input v-model="tmp&&tmp.landArea?tmp.landArea:meansBook.landArea+' m²'" placeholder="" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col  :span="24">
                           <el-form-item label="土地用途：" >
                               <el-input v-model="tmp&&tmp.landUse?tmp.landUse:meansBook.landUse" placeholder="" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col  :span="24">
                           <el-form-item label="土地性质：" >
                               <el-input v-model="tmp&&tmp.landNature?tmp.landNature:meansBook.landNature" placeholder="" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="不动产证：">
                               <el-input v-model="tmp&&tmp.realEstate?tmp.realEstate:meansBook.realEstate" placeholder="" style="width: 200px;" :disabled="disabled"></el-input>
                               <img class="meansBookImg"  :src="tmp&&tmp.realEstateAttach?tmp.realEstateAttach:meansBook.realEstateAttach" alt="">
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="房产证：">
                               <el-input v-model="tmp&&tmp.realHouse?tmp.realHouse:meansBook.realHouse" placeholder="请输入内容" style="width: 200px;" :disabled="disabled"></el-input>
                               <img class="meansBookImg"  :src="tmp&&tmp.realHouseAttach?tmp.realHouseAttach:meansBook.realHouseAttach" alt="">
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="土地证：">
                               <el-input v-model="tmp&&tmp.realLand?tmp.realLand:meansBook.realLand" placeholder="请输入内容" style="width: 200px;" :disabled="disabled"></el-input>
                               <img class="meansBookImg"  :src="tmp&&tmp.realLandAttach?tmp.realLandAttach:meansBook.realLandAttach" alt="">
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="协议金额：">
                               <el-input v-model="tmp&&tmp.dealAmount?tmp.dealAmount:meansBook.dealAmount+' m²'" placeholder="" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col  :span="24">
                           <el-form-item label="房屋现状：" >
                               <el-input v-model="tmp&&tmp.houseNow?tmp.houseNow:meansBook.houseNow" placeholder="" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="房屋档案编号：">
                               <el-input v-model="tmp&&tmp.houseNo?tmp.houseNo:meansBook.houseNo" placeholder="" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col  :span="24">
                           <el-form-item label="未登记建筑：" >
                               <el-input v-model="tmp&&tmp.noCheckin?tmp.noCheckin:meansBook.noCheckin" placeholder="" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="备注：">
                               <el-input v-model="tmp&&tmp.remark?tmp.remark:meansBook.remark" placeholder="" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24" class="phone">
                           <el-form-item label="照片：">
                               <img :src="tmp&&tmp.pic?tmp.pic:meansBook.pic" alt="" style="width: 100px; height: 100px">
                           </el-form-item>
                       </el-col>
                       <el-col class="table" :span="24" style="text-align: center;margin-top: 20px;">
                           <el-col :span="9">
                               水&nbsp;&nbsp;&nbsp;&nbsp;户名：
                               <el-input v-model="tmp&&tmp.accNameWater?tmp.accNameWater:meansBook.accNameWater" placeholder="" :disabled="disabled"></el-input>
                           </el-col>
                           <el-col :span="7">
                               户号
                               <el-input v-model="tmp&&tmp.accNoWater?tmp.accNoWater:meansBook.accNoWater" placeholder="" :disabled="disabled"></el-input>
                           </el-col>
                           <el-col :span="8">
                               缴款方式
                               <el-input v-model="tmp&&tmp.accTypeWater?tmp.accTypeWater:meansBook.accTypeWater" placeholder="" :disabled="disabled"></el-input>
                           </el-col>

                       </el-col>
                       <el-col class="table" :span="24" style="text-align: center;margin-top: 20px;">
                           <el-col :span="9">
                               电&nbsp;&nbsp;&nbsp;&nbsp;户名：
                               <el-input v-model="tmp&&tmp.accNameElec?tmp.accNameElec:meansBook.accNameElec" placeholder="" :disabled="disabled"></el-input>
                           </el-col>
                           <el-col :span="7">
                               户号
                               <el-input v-model="tmp&&tmp.accNoElec?tmp.accNoElec:meansBook.accNoElec" placeholder="" :disabled="disabled"></el-input>
                           </el-col>
                           <el-col :span="8">
                               缴款方式
                               <el-input v-model="tmp&&tmp.accTypeElec?tmp.accTypeElec:meansBook.accTypeElec" placeholder="" :disabled="disabled"></el-input>
                           </el-col>

                       </el-col>
                       <el-col class="table" :span="24" style="text-align: center;margin-top: 20px;">
                           <el-col :span="9">
                               燃气&nbsp;&nbsp;户名：
                               <el-input v-model="tmp&&tmp.accNameGas?tmp.accNameGas:meansBook.accNameGas" placeholder="" :disabled="disabled"></el-input>
                           </el-col>
                           <el-col :span="7">
                               户号
                               <el-input v-model="tmp&&tmp.accNoGas?tmp.accNoGas:meansBook.accNoGas" placeholder="" :disabled="disabled"></el-input>
                           </el-col>
                           <el-col :span="8">
                               缴款方式
                               <el-input v-model="tmp&&tmp.accTypeGas?tmp.accTypeGas:meansBook.accTypeGas" placeholder="" :disabled="disabled"></el-input>
                           </el-col>
                           <el-col :span="24" style="position: relative;margin: 0;">
                               <div class="map"></div>
                           </el-col>
                           <!--<div v-if="typesss == 'sp'"  >-->
                               <!--<div style="font-size: 30px;margin: 20px 0;">审批流程：</div>-->
                               <!--<el-col :span="24">-->
                                   <!--<el-form-item label="审批：">-->
                                       <!--<div class="sp">-->
                                           <!--<div>-->
                                               <!--<div>发起人：</div>-->
                                               <!--<div v-for="item in approvalFindList.openRole">-->
                                                   <!--<div v-for="items in item.users">-->
                                                       <!--<img :src="items.avatar" alt=""><p>{{items.name}}</p>-->
                                                   <!--</div>-->
                                               <!--</div>-->
                                           <!--</div>-->
                                           <!--<div>-->
                                               <!--<div>审批人：</div>-->
                                               <!--<div v-for="item in approvalFindList.checkRole">-->
                                                   <!--<div v-for="items in item.users">-->
                                                       <!--<img :src="items.avatar" alt=""><p>{{items.name}}</p>-->
                                                   <!--</div>-->
                                               <!--</div>-->
                                           <!--</div>-->
                                           <!--&lt;!&ndash;<div  v-for="item in approvalFindList.openRole"><img src="@/assets/logo.png" alt=""><p>{{item.name}}</p></div>&ndash;&gt;-->
                                           <!--&lt;!&ndash;<div v-for="item in approvalFindList.checkRole"><img src="@/assets/logo.png" alt=""><p>{{item.name}}</p></div>&ndash;&gt;-->
                                           <!--&lt;!&ndash;<span class="hr"></span>&ndash;&gt;-->
                                       <!--</div>-->
                                   <!--</el-form-item>-->

                               <!--</el-col>-->
                               <!--<el-col :span="24">-->
                                   <!--<el-form-item label="抄送：">-->
                                       <!--<div class="sp">-->
                                           <!--<div>-->
                                               <!--<div>抄送人：</div>-->
                                               <!--<div v-for="item in approvalFindList.noticeRole">-->
                                                   <!--<div v-for="items in item.users">-->
                                                       <!--<img :src="items.avatar" alt=""><p>{{items.name}}</p>-->
                                                   <!--</div>-->
                                               <!--</div>-->
                                           <!--</div>-->
                                       <!--</div>-->
                                   <!--</el-form-item>-->

                               <!--</el-col>-->
                           <!--</div>-->
                       </el-col>
                   </el-form>
               </el-row>
               </el-dialog>
           </div>
</template>

<script>
    export default {
  name: 'login',
        props:{
            AssetsKanVisible:{
                type: Boolean,
                default: false,
            },
            mes:{type:String}
        },
  data () {
    return {
        meansBook:{'assetCode':123},
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
        approvalFindList:'',
        typesss:'',
        map: "", // 对象
        zoom: 10, // 地图的初始化级别，及放大比例
        multipleSelection: [],
        types:'',
        fileList: [{
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
            name: 'food2.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }],
        tmp:null,
    }
  },
        components:{
        },
    watch:{
        // 监听 addOrUpdateVisible 改变
        AssetsKanVisible(oldVal,newVal){
            this.showDialog = this.AssetsKanVisible
        },
    },
    methods:{
        detail(param,str){
            var id = param;
            console.log(str)
            this.typesss = str
            if(str == 'sp'){
                var that = this;
                this.$axios({
                    url: this.getAjax + '/admin/approval/findList',
                    method: "get",
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Token':sessionStorage.getItem('token')
                    },
                    data:{}
                }).then(res => {
                    if(res.data.code == '1001'){
                    var list = res.data.data;
                    var arr = ''
                    for(var i=0;i<list.length;i++){
                        if(list[i].alias == 'zichangengxin'){
                            arr = list[i]
                        }
                    }
                    that.approvalFindList = arr
                }else{
                    this.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                }
            })
            }
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
                    this.tmp = res.data.data.tmp
                    console.log(this.meansBook)
                    console.log(this.tmp)
            }else{
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                });
            }
        })
        },
        // open() {
        //     this.$alert('修改已提交，等待管理员审核', '提示', {
        //         callback: action => {
        //             this.$emit('changeShow','false')
        //         }
        //     });
        // },
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
    .kan>>>.el-input.is-disabled .el-input__inner {color: #606266;}
    .files>>>.el-upload-list {width: 30%;margin-left: 33%;}
    .coordinate>>>.el-form-item__label {width: 25%;}
    .sum {height:100px;background: #fff;width: 90%;}
    .sumLeft {float:left;line-height: 115px;margin-left: 48px;}
    .sumRight {margin-left: 130px;padding-top: 20px;}
    .sumRight p:first-child {font-size: 16px;color: #666;}
    .sumRight p:last-child {font-size: 30px;color: #333;margin-top: 10px;}
    .count .table>>>.el-input {width: 150px;}
    .sp {width: 100%;position: relative;}
    .sp div {display: inline-block;text-align: center;position: relative;z-index: 2;font-size: 12px;margin-right: 5px;}
    .sp img {width: 40px;height:40px;background-color: #fff;}
    .sp p {width: 100%;text-align: center;line-height: normal;margin-top: -10px;font-size: 12px;color: #333;}
    .sp .hr {display: block;height:1px;width: 60%;z-index: 1;position: absolute;top:22px;left:110px;border-bottom: 3px dotted #333;}
    .sp .add {position: absolute;top:0;left:50%;font-size: 40px;color: #333;font-weight: bold;}
</style>
