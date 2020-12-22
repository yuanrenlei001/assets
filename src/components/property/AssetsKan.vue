<template id="type">
    <div class="count">
        <el-dialog
                title="新增合同"
                :visible.sync="showDialog"
                width="700px"
                @close="handleClose">
            <el-row>
                <el-form ref="form" >
                    <el-col v-if="str == 'zy'" :span="24" style="position: relative;">
                        <el-form-item label="资产编号：" v-for='(item,index) in assetCode'>
                            <el-input v-model="item.value" placeholder="请输入内容" disabled></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="资产坐落：">
                            <el-input v-model="houseAddr" disabled placeholder="请输入内容" ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="合同编号：">
                            <el-input v-model="pactCode" disabled placeholder="请输入内容" ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="承租方：">
                            <el-input v-model="tenant" disabled placeholder="请输入内容" ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="联系方式：">
                            <el-input v-model="contact" disabled placeholder="请输入内容" ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="租金（元）：">
                            <el-input v-model="rentAmount" disabled placeholder="请输入内容" ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="物业费（元）：">
                            <el-input v-model="fee" disabled placeholder="请输入内容" ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="租约日期：">
                            <el-date-picker
                                    v-model="value1"
                                    disabled
                                    type="daterange"
                                    value-format="yyyy-MM-dd"
                                    @change="getTime"
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="店名：">
                            <el-input v-model="tradeName" disabled placeholder="请输入内容" :disabled="disabled"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col  :span="24">
                        <el-form-item label="业态：" >
                            <el-select  v-model="formatsVal" disabled placeholder="请选择" :disabled="disabled" @change="formatsList">
                                <el-option
                                        v-for="item in formats"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.label">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="保证金：">
                            <el-input v-model="margin" disabled placeholder="请输入内容" :disabled="disabled"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="备注：">
                            <el-input v-model="remark" disabled placeholder="请输入内容" :disabled="disabled"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="附件：">
                                <img width="100%" style="width: 146px;height:146px;" :src="attach" alt="">
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <!--<el-form-item label="付租方式：">共计2笔，总金额20000元</el-form-item>-->
                        <el-form-item label="付租方式："></el-form-item>
                    </el-col>
                    <el-col :span="24" class="pay" v-for='(item,index) in books2'>
                        <el-col :span="10" style="position: relative;margin-bottom: 20px;">
                            <div style="display: none;">{{item.num = index+1}}</div>
                            <div style="position: absolute;top:15px;left:0;">第 {{index+1}} 笔</div>
                            <el-date-picker style="margin-left: 60px;"
                                            v-model="item.dateStr"
                                            type="date"
                                            disabled
                                            @change="timeChange(item.dateStr)"
                                            value-format="yyyy-MM-dd"
                                            placeholder="选择日期">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="12">
                            <el-select class="selecr"  v-model="item.rentType" placeholder="请选择" disabled @change="houseNowChange4(item.rentType)">
                                <el-option
                                        v-for="item in RoleAdmin"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.label">
                                </el-option>
                            </el-select>
                            <span class="inputs"><el-input  v-model="item.rentAmount" disabled placeholder="请输入金额" ></el-input></span>
                            <span class="inputs" v-if="item.payStatus == 1">正常</span>
                            <span class="inputs" v-if="item.payStatus == 2">即将到期</span>
                            <span class="inputs" v-if="item.payStatus == 3">已缴纳</span>
                            <span class="inputs" v-if="item.payStatus == 4">已超期</span>
                        </el-col>
                    </el-col>
                    <el-col style="text-align: right;">
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
            dialogVisibleKanwy:{
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                houseAddr:'',
                showDialog:false,
                assetCode:[{value:null}],
                pactCode:'',
                tenant:'',
                contact:'',
                rentAmount:'',
                fee:'',
                rentStart:'',
                rentEnd:'',
                tradeName:'',
                formats:[
                    {value:'1',label:'租金'},
                    {value:'2',label:'物业'},
                    {value:'3',label:'外租'},
                ],
                books2:[
                    {id:null,num:null,dateStr:null,rentAmount:null,attach:null,rentType:null}
                ],
                formatsVal:'',
                margin:'',
                RoleAdmin:[
                    {value:1,label:'租金'},
                    {value:2,label:'物业'},
                ],
                remark:'',
                attach:'',
                input:'',
                input2:'',
                pic:[],//照片
                disabled:true,
                disableds:false,
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
                value1: '',
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
                showUpload:false,
                showDialog:false,
                times: [],
                params:'',
                id:'',
                str:'',
                attach:'',
            }
        },
        components:{
        },
        watch:{
            dialogVisibleKanwy(oldVal,newVal){
                this.showDialog = this.dialogVisibleKanwy
            },
        },
        methods:{
            detail(data,str){
                console.log('***********')
                this.id = data.id
                this.str = str
                var that = this;
                if(str == 'zy'){
                    this.$axios({
                        url: this.getAjax + '/admin/property/findDetails?id='+data.id,
                        method: "get",
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8',
                            'Token':sessionStorage.getItem('token')
                        },
                        data:{}
                    }).then(res => {
                        if(res.data.code == '2004'){
                            this.$message({
                                message: res.data.msg,
                                type: 'warning'
                            });
                            this.$router.push('/')
                        }else{
                            var params = res.data.data
                            // var list = res.data.data;
                            // that.list();
                            var arr = [];
                            var ass= params.assetCode.split(',');
                            for(var i=0;i<ass.length;i++){
                                var obj = {};
                                obj['value'] = ass[i]
                                arr.push(obj)
                            }
                            that.assetCode = arr
                            that.attach = params.attach
                            that.houseAddr = params.houseAddr
                            that.pactCode = params.pactCode
                            that.tenant = params.tenant
                            that.contact = params.contact
                            that.rentAmount = params.rentAmount
                            that.fee = params.fee
                            that.tradeName = params.tradeName
                            that.formatsVal = params.formats
                            that.margin = params.margin
                            that.remark = params.remark
                            that.books2 = params.propertyPayTypeList
                            that.value1 = [params.rentStart,params.rentEnd]
                            that.rentStart = params.rentStart
                            that.rentEnd = params.rentEnd
                            console.log(that.params)
                        }
                    })
                }else{
                    this.$axios({
                        url: this.getAjax + '/admin/property/findDetails?id='+data.id,
                        method: "get",
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8',
                            'Token':sessionStorage.getItem('token')
                        },
                        data:{}
                    }).then(res => {
                        if(res.data.code == '2004'){
                            this.$message({
                                message: res.data.msg,
                                type: 'warning'
                            });
                            this.$router.push('/')
                        }else{
                            var params = res.data.data
                            that.houseAddr = params.houseAddr
                            that.attach = params.attach
                            that.pactCode = params.pactCode
                            that.tenant = params.tenant
                            that.contact = params.contact
                            that.rentAmount = params.rentAmount
                            that.fee = params.fee
                            that.tradeName = params.tradeName
                            that.formatsVal = params.formats
                            that.margin = params.margin
                            that.remark = params.remark
                            that.books2 = params.propertyPayTypeList
                            that.value1 = [params.rentStart,params.rentEnd]
                            that.rentStart = params.rentStart
                            that.rentEnd = params.rentEnd
                            console.log(that.params)
                        }
                    })
                }
            },
            timeChange(id){
                console.log(id)
                this.times = id
                let testColData = {}
                console.log(this.books2)
                for(let i = 0; i< this.books2.length; i++){
                    if(this.books2[i].id == id){
                        testColData = this.books2[i]
                    }
                }
                console.log(testColData)
                // let data = this.books2
                // for(let i = 0; i < data.length; i++){
                //     if(data[i].id == testColData.id){
                //         console.log(data[i])
                //         data[i].label = testColData.label;
                //         data[i].value = testColData.value;
                //     }
                // }
            },
            houseNowChange4(data){
                console.log(data)
                // this.booksid2 = id
                // let testColData = {}
                // for(let i = 0; i< this.RoleAdmin.length; i++){
                //     if(this.RoleAdmin[i].id == id){
                //         testColData = this.RoleAdmin[i]
                //     }
                // }
                // console.log(testColData)
                // let data = this.books2
                // for(let i = 0; i < data.length; i++){
                //     if(data[i].id == testColData.id){
                //         console.log(data[i])
                //         data[i].label = testColData.label;
                //         data[i].value = testColData.value;
                //     }
                // }
            },
            newAdd2(){
                this.books2.push({
                    id: null,
                    num: null,
                    dateStr:null,
                    rentAmount:null,
                    attach:null,
                    rentType:null,
                });
            },
            handlePictureCardPreview(file) {
                console.log(file)
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            phone(res, file, fileList) {
                if(fileList.length >= 3){
                    this.showUpload = true
                }
                console.log(res.data[0])
                console.log(file.name)
                // this.pic.push({'url':res.data[0],'name':file.name})
                this.pic = file.name+'#_#'+res.data[0]
                console.log(this.pic)
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            getTime(date){
                this.rentStart= date[0];
                this.rentEnd= date[1];
                console.log(date);//这个数据就可以直接拿过去传给后台用啦~~
            },
            formatsList(val){
                console.log(val)
            },
            newAdds(){
                this.assetCode.push({
                    value: null,
                });
            },
            open() {
                var arr = [];
                for(var i=0;i<this.assetCode.length;i++){
                    arr.push(this.assetCode[i].value)
                }
                var str = arr.join(",");
                var data= {
                    'id':this.id,
                    'assetCode':str,
                    'houseAddr':this.houseAddr,
                    'pactCode':this.pactCode,
                    'tenant':this.tenant,
                    'contact':this.contact,
                    'rentAmount':this.rentAmount,
                    'fee':this.fee,
                    'rentStart':this.rentStart,
                    'rentEnd':this.rentEnd,
                    'tradeName':this.tradeName,
                    'formats':this.formatsVal,
                    'margin':this.margin,
                    'remark':this.remark,
                    'typeItem':1,
                    'propertyPayTypeList':this.books2
                }
                console.log(data)
                if(str == '' ||this.houseAddr==''||this.tenant==''||this.contact==''||this.rentAmount==''
                    ||this.fee==''||this.rentStart==''||this.rentEnd==''||this.tradeName==''||this.formatsVal==''
                    ||this.margin==''||this.remark==''||this.propertyPayTypeList==[]
                ){
                    this.$message({
                        message: '值不能为空！',
                        type: 'warning'
                    });
                }else{
                    console.log(data)
                    var that = this;
                    this.$axios({
                        url: this.getAjax + '/admin/property/addOrUpdate',
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
                        // var list = res.data.data;
                        // that.list();
                        // console.log(list)
                        this.$alert('修改已提交，等待管理员审核', '提示', {
                            callback: action => {
                            this.$emit('changeShow','false')
                        this.$emit('child-event',data)
                    }
                    });
                    }
                })
                }

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
                let that = this;
                that.map = new T.Map("mapDiv");
                that.map.centerAndZoom(new T.LngLat(116.30034, 40.07689), that.zoom); // 设置显示地图的中心点和级别
                // 添加地图类型控件
                that.addCtrl();

                // 普通标注
                let site = [
                    { lng: 116.30034, lat: 39.98054 },
                    { lng: 116.41238, lat: 40.07689 },
                    { lng: 116.34143, lat: 40.03403 },
                ];
                that.markerPoint(site);
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
    .files>>>.el-upload-list {width: 30%;margin-left: 33%;}
    .coordinate>>>.el-form-item__label {width: 25%;}
    .sum {height:100px;background: #fff;width: 90%;}
    .sumLeft {float:left;line-height: 115px;margin-left: 48px;}
    .sumRight {margin-left: 130px;padding-top: 20px;}
    .sumRight p:first-child {font-size: 16px;color: #666;}
    .sumRight p:last-child {font-size: 30px;color: #333;margin-top: 10px;}
    .pay>>>.el-input{width: 200px;}
    .pay .selecr>>>.el-input {width: 100px;}
    .pay .inputs>>>.el-input {width: 150px;}
</style>
