<template id="type">
    <div class="count">
        <el-dialog
                title="资产详情"
                :visible.sync="showDialog"
                @close="handleClose"
                width="700px">
            <el-row>
                <el-form ref="form" >
                    <el-col :span="24">
                        <el-form-item label=" * 资产编号：">
                            <el-input v-model="assetCode" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label=" * 产权人：">
                            <el-input v-model="assetUser" placeholder="请输入内容" :disabled="disabled"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label=" * 房屋坐落：">
                            <el-input v-model="houseAddress" placeholder="请输入内容" :disabled="disabled"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="原使用产权人：">
                            <el-input v-model="assetUserOri" placeholder="请输入内容" :disabled="disabled"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col  :span="24">
                        <el-form-item label=" * 房屋类型：" >
                            <el-select  v-model="houseNatureVal" placeholder="请选择" :disabled="disabled" @change="houseNatureChange">
                                <el-option
                                        v-for="item in houseNature"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.label">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <!--<el-col  :span="24">-->
                    <!--<el-form-item label="房屋结构：" >-->
                    <!--<el-select  v-model="value" placeholder="请选择" :disabled="disabled">-->
                    <!--<el-option-->
                    <!--v-for="item in options"-->
                    <!--:key="item.value"-->
                    <!--:label="item.label"-->
                    <!--:value="item.value">-->
                    <!--</el-option>-->
                    <!--</el-select>-->
                    <!--</el-form-item>-->
                    <!--</el-col>-->
                    <el-col :span="24">
                        <el-form-item label="未登记建筑面积：">
                            <el-input v-model="noCheckinArea" placeholder="请输入内容" type="number" :disabled="disabled"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label=" * 房屋建筑面积：">
                            <el-input v-model="houseArea" placeholder="请输入内容" type="number" :disabled="disabled"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col  :span="24">
                        <el-form-item label=" * 用途（产权用途）：" >
                            <el-select  v-model="assetUseVal" placeholder="请选择" :disabled="disabled" @change="assetUseChange">
                                <el-option
                                        v-for="item in assetUse"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.label">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label=" * 土地面积/m²：">
                            <el-input v-model="landArea" placeholder="请输入内容" type="number" :disabled="disabled"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col  :span="24">
                        <el-form-item label=" * 土地用途：" >
                            <el-select  v-model="landUseVal" placeholder="请选择" :disabled="disabled" @change="landUseChange">
                                <el-option
                                        v-for="item in landUse"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.label">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col  :span="24">
                        <el-form-item label=" * 土地性质：" >
                            <el-select  v-model="landNatureVal" placeholder="请选择" :disabled="disabled" @change="landNatureChange">
                                <el-option
                                        v-for="item in landNature"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.label">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col  :span="24">
                        <el-form-item label="未登记建筑：" >
                            <el-select  v-model="noCheckinVal" placeholder="请选择" :disabled="disabled" @change="noCheckinChange">
                                <el-option
                                        v-for="item in noCheckin"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.label">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" class="filess">
                        <el-form-item label="不动产证：">
                            <el-input v-model="realEstate" placeholder="请输入内容" style="width: 200px;"></el-input>
                            <el-upload
                                    class="upload-demo"
                                    :action="upload()"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :before-remove="beforeRemove"
                                    :on-success = 'handleSuccess'
                                    multiple
                                    :limit="3"
                                    :on-exceed="handleExceed"
                                    :file-list="realEstateAttach">
                                <el-button size="small" type="primary">点击上传</el-button>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" class="filess">
                        <el-form-item label="房产证：">
                            <el-input v-model="realHouse" placeholder="请输入内容" style="width: 200px;"></el-input>
                            <el-upload
                                    class="upload-demo"
                                    action="http://39.100.95.204:2005/file/attachment/upload?type=asset"
                                    :on-remove="realHouseAttachRemove"
                                    :on-success = 'realHouseAttachSuccess'
                                    :limit="3"
                                    :file-list="realHouseAttach">
                                <el-button size="small" type="primary">点击上传</el-button>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" class="filess">
                        <el-form-item label="土地证：">
                            <el-input v-model="realLand" placeholder="请输入内容" style="width: 200px;"></el-input>
                            <el-upload
                                    class="upload-demo"
                                    action="http://39.100.95.204:2005/file/attachment/upload?type=asset"
                                    :on-preview="realLandAttachPreview"
                                    :on-remove="realLandAttachRemove"
                                    :before-remove="realLandAttachRemove"
                                    :on-success = 'realLandAttachSuccess'
                                    multiple
                                    :limit="3"
                                    :on-exceed="realLandAttachExceed"
                                    :file-list="realLandAttach">
                                <el-button size="small" type="primary">点击上传</el-button>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="协议金额：">
                            <el-input v-model="dealAmount" placeholder="请输入内容" type="number" :disabled="disabled"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col  :span="24">
                        <el-form-item label=" * 房屋现状：" >
                            <el-select  v-model="houseNowVal" placeholder="请选择" :disabled="disabled" @change="houseNowChange">
                                <el-option
                                        v-for="item in houseNow"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.label">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="房屋档案编号：">
                            <el-input v-model="houseNo" placeholder="请输入内容" :disabled="disabled"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="备注：">
                            <el-input v-model="remark" placeholder="请输入内容" :disabled="disabled"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" class="phone">
                        <el-form-item label="照片：">
                            <el-upload
                                    action="http://39.100.95.204:2005/file/attachment/upload?type=asset"
                                    list-type="picture-card"
                                    :on-preview="handlePictureCardPreview"
                                    :on-success="phone"
                                    :limit="3"
                                    :class="{hide:showUpload}"
                                    :on-remove="handleRemove">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible">
                                <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>
                        </el-form-item>
                    </el-col>
                    <el-col class="table" :span="24" style="text-align: center;margin-top: 20px;">
                        <el-col :span="9">
                            水&nbsp;&nbsp;&nbsp;&nbsp;户名：
                            <el-input v-model="accNameWater" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="7">
                            户号
                            <el-input v-model="accNoWater" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="8">
                            缴款方式
                            <el-input v-model="accTypeWater" placeholder="请输入内容"></el-input>
                        </el-col>

                    </el-col>
                    <el-col class="table" :span="24" style="text-align: center;margin-top: 20px;">
                        <el-col :span="9">
                            电&nbsp;&nbsp;&nbsp;&nbsp;户名：
                            <el-input v-model="accNameElec" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="7">
                            户号
                            <el-input v-model="accNoElec" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="8">
                            缴款方式
                            <el-input v-model="accTypeElec" placeholder="请输入内容"></el-input>
                        </el-col>

                    </el-col>
                    <el-col class="table" :span="24" style="text-align: center;margin-top: 20px;">
                        <el-col :span="9">
                            燃气&nbsp;&nbsp;户名：
                            <el-input v-model="accNameGas" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="7">
                            户号
                            <el-input v-model="accNoGas" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="8">
                            缴款方式
                            <el-input v-model="accTypeGas" placeholder="请输入内容"></el-input>
                        </el-col>

                    </el-col>
                    <el-col :span="24" style="text-align: right;margin-top: 20px;">
                        <el-button type="primary" round @click="open">保存</el-button>
                        <el-button type="success" round @click="showDialog = false">取消</el-button>
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
            dialogVisibleAdd:{
                type: Boolean,
                default: false
            }
        },
  data () {
    return {
        showUpload:false,
        showDialog:false,
        input:'',
        input2:'',
        disabled:false,
        disableds:false,
        dialogImageUrl: '',
        dialogVisible: false,
        houseNature:[{value:'1',label:'房屋类型1'}, {value:'2',label:'房屋类型2'},],
        houseNatureVal:'',
        assetUse:[{value:'1',label:'产权用途1'}, {value:'2',label:'产权用途2'},],
        assetUseVal:'',
        landUse:[{value:'1',label:'土地用途1'}, {value:'2',label:'土地用途2'},],
        landUseVal:'',
        landNature:[{value:'1',label:'土地性质1'}, {value:'2',label:'土地性质2'},],
        landNatureVal:'',
        noCheckin:[{value:'1',label:'未登记建筑1'}, {value:'2',label:'未登记建筑2'},],
        noCheckinVal:'',
        houseNow:[{value:'1',label:'房屋现状1'}, {value:'2',label:'房屋现状2'},],
        houseNowVal:'',
        assetCode:'',//资产编号
        assetUser:'',//产权人
        houseAddress:'',//房屋坐落
        assetUserOri:'',//原使用产权人
        noCheckinArea:'',//未登记建筑面积
        realEstate:'',//不动产证
        houseArea:'',//房屋建筑面积
        landArea:'',//土地面积
        realHouse:'',//房产证
        realLand:'',//土地证
        dealAmount:'',//协议金额
        houseNo:'',//房屋档案编号
        remark:'',//备注
        pic:[],//照片
        accNameWater:'',//水：户名
        accNoWater:'',//水：户号
        accTypeWater:'',//水：缴款方式
        accNameElec:'',//电：户名qa waz
        accNoElec:'',//电：户号
        accTypeElec:'',//电：缴款方式
        accNameGas:'',//燃气：户名
        accNoGas:'',//燃气：户号
        accTypeGas:'',//燃气：缴款方式
        realEstateAttach:[],//不动产证文件
        realHouseAttach:[],//房产证文件
        realLandAttach:[],//土地证文件
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
        fileList: [],
        realEstateAttachUrl:'',
        realHouseAttachUrl:'',
        realLandAttachUrl:'',
        picUrl:'',
    }
  },
        components:{
        },
    watch:{
        dialogVisibleAdd(oldVal,newVal){
            this.showDialog = this.dialogVisibleAdd
        },
    },
    methods:{
        open() {
            var data = {
                'id':null,
                'assetCode':this.assetCode,
                'assetUser':this.assetUser,
                'houseAddress':this.houseAddress,
                'assetUserOri':this.assetUserOri,
                'houseNature':this.houseNatureVal,
                'noCheckinArea':this.noCheckinArea,
                'houseArea':this.houseArea,
                'assetUse':this.assetUseVal,
                'landArea':this.landArea,
                'landUse':this.landUseVal,
                'landNature':this.landNatureVal,
                'noCheckin':this.noCheckinVal,
                'realEstate':this.realEstate,
                'realEstateAttach':this.realEstateAttachUrl,
                'realHouseAttach':this.realHouseAttachUrl,
                'realHouse':this.realHouse,
                'realLandAttach':this.realLandAttachUrl,
                'realLand':this.realLand,
                'dealAmount':this.dealAmount,
                'houseNow':this.houseNowVal,
                'houseNo':this.houseNo,
                'remark':this.remark,
                'pic':this.picUrl,
                'accNameWater':this.accNameWater,
                'accNoWater':this.accNoWater,
                'accTypeWater':this.accTypeWater,
                'accNameElec':this.accNameElec,
                'accNoElec':this.accNoElec,
                'accTypeElec':this.accTypeElec,
                'accNameGas':this.accNameGas,
                'accNoGas':this.accNoGas,
                'accTypeGas':this.accTypeGas,
            }
            if(data.assetCode == ''){
                this.$message({
                    message: '资产编号不能为空',
                    type: 'warning'
                });
                return;
            }
            if(data.assetUser == ''){
                this.$message({
                    message: '产权人不能为空',
                    type: 'warning'
                });
                return;
            }
            if(data.houseAddress == ''){
                this.$message({
                    message: '房屋坐落不能为空',
                    type: 'warning'
                });
                return;
            }
            if(data.houseNature == ''){
                this.$message({
                    message: '房屋类型不能为空',
                    type: 'warning'
                });
                return;
            }
            if(data.houseArea == ''){
                this.$message({
                    message: '房屋建筑面积不能为空',
                    type: 'warning'
                });
                return;
            }
            if(data.assetUseVal == ''){
                this.$message({
                    message: '产权用途不能为空',
                    type: 'warning'
                });
                return;
            }
            if(data.landArea == ''){
                this.$message({
                    message: '土地面积不能为空',
                    type: 'warning'
                });
                return;
            }
            if(data.assetUse == ''){
                this.$message({
                    message: '土地用途为空',
                    type: 'warning'
                });
                return;
            }
            if(data.landNatureVal){
                this.$message({
                    message: '土地性质为空',
                    type: 'warning'
                });
                return;
            }
            if(data.houseNowVal == ''){
                this.$message({
                    message: '房屋现状为空',
                    type: 'warning'
                });
                return;
            }
                this.$alert('已提交，等待管理员审核', '提示', {
                    callback: action => {
                    this.$emit('changeShow','false')
                this.$emit('child-event',data)
            }
            });
        },
        upload(){
            return 'http://39.100.95.204:2005/file/attachment/upload?type=asset'
        },
        houseNatureChange(val){console.log(val)},
        assetUseChange(val){this.assetUseVal = val;},
        landUseChange(val){this.landUseVal = val;},
        landNatureChange(val){this.landNatureVal = val;},
        noCheckinChange(val){this.noCheckinVal = val;},
        houseNowChange(val){this.houseNowVal = val;},
        // 不动产证
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handleSuccess(res,file){
            console.log(res)
            this.realEstateAttach.push({'url':res.data[0],'name':file.name})
            this.realEstateAttachUrl = this.realEstateAttach[0].url
            console.log(this.realEstateAttach)
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        // 房产证
        realHouseAttachRemove(file, fileList) {
            console.log(file, fileList);
        },
        realHouseAttachPreview(file) {
            console.log(file);
        },
        realHouseAttachExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        realHouseAttachRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        realHouseAttachSuccess(res,file){
            this.realHouseAttach.push({'url':res.data[0],'name':file.name})
            this.realHouseAttachUrl = this.realHouseAttach[0].url
        },
        // 土地证
        realLandAttachRemove(file, fileList) {
            console.log(file, fileList);
        },
        realLandAttachPreview(file) {
            console.log(file);
        },
        realLandAttachExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        realLandAttachRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        realLandAttachSuccess(res,file){
            this.realLandAttach.push({'url':res.data[0],'name':file.name})
            this.realLandAttachUrl = this.realLandAttach[0].url
        },
        // 照片
        handleRemove(file, fileList) {
            if(fileList.length < 4){
                this.showUpload = false
            }
        },
        phone(res, file, fileList) {
            if(fileList.length >= 3){
                this.showUpload = true
            }
            console.log(res.data[0])
            console.log(file.name)
            this.pic.push({'url':res.data[0],'name':file.name})
            this.picUrl = this.pic[0].url
        },
        handleClose(){
            // 子组件调用父组件方法，并传递参数
            this.$emit('changeShow','false')
        },
        handlePictureCardPreview(file) {
            console.log(file)
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
    #mapDiv {
        height: 150px;
        width:500px;
        position: relative;
        left:50%;
        margin-left: -250px;
    }
    .count>>>.charts {position: relative;left:50%;margin-left: -150px;}
    .count>>>.col {margin: 0 25px 25px 0;background: #fff;}
    .count>>>.el-form-item__label {width: 25%;font-size: 14px;line-height: 40px;}
    .count>>>.el-form-item {margin-bottom: 5px;}
    .count>>>.el-input {width: 400px;}
    .count>>>.el-upload--picture-card {width: 40px;height:40px;position: absolute;top:0;right:220px;}
    .count>>>.el-upload--picture-card i {width: 40px;height:40px;position: absolute;top:6px;left:0;}
    .count .phone>>>.el-upload--picture-card {width: 140px;height:140px;position: relative;right: inherit;}
    .count .phone>>>.el-upload--picture-card i {width: 140px;height:140px;position: relative;}
    .count .table>>>.el-input {width: 150px;}
    .filess>>>.el-upload-list{
        position: absolute;
        top: 0;
        left: 90px;
    }
    .count>>>.upload-demo {    width: 200px;
        position: absolute;
        top: 0;
        right: 85px;
        z-index: 9999;}
    /*.count>>>.el-upload-list{position: absolute;left:90px;top:0;}*/
    .count>>>.el-upload-list__item-name{width: 140px;}

    .files>>>.el-upload-list {width: 30%;margin-left: 33%;}
    .coordinate>>>.el-form-item__label {width: 25%;}
    .sum {height:100px;background: #fff;width: 90%;}
    .sumLeft {float:left;line-height: 115px;margin-left: 48px;}
    .sumRight {margin-left: 130px;padding-top: 20px;}
    .sumRight p:first-child {font-size: 16px;color: #666;}
    .sumRight p:last-child {font-size: 30px;color: #333;margin-top: 10px;}
    .phone >>> .hide .el-upload--picture-card {
        display: none;
    }
</style>
