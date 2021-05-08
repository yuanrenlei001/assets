<template id="type">
    <div class="count kan" id="WY">
        <el-dialog
                class="abow_dialog"
                title="物业管理 > 物业合同新增"
                :visible.sync="showDialog"
                width="1000px"
                @close="handleClose">
        <el-row>
            <el-form ref="form" class="newKan wyKan">
                <el-col :span="24" class="wyAddHeaght" style="padding-top:26px;">
                    <el-col :lg="12">
                        <el-col :lg="22"  style="position: relative;margin-bottom: 0;">
                            <div  v-for='(item,index) in assetCode' >
                                <el-col style="margin-bottom: 26px;" :lg="24">
                                    <el-col :lg="11"><div class="textLeft">资产编号：</div></el-col>
                                    <el-col :lg="11">
                                        <el-select
                                                style="width:81%;"
                                                @change="zcChange(item)"
                                                v-model="item.value"
                                                filterable
                                                remote
                                                reserve-keyword
                                                placeholder="请输入资产坐落"
                                                :remote-method="remoteMethod"
                                                :loading="loading">
                                            <el-option
                                                    v-for="items in zcoptions"
                                                    :key="items.value"
                                                    :label="items.label"
                                                    :value="items.value">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                </el-col>
                                <el-col :lg="24" style="margin-bottom: 26px;">
                                    <el-col :lg="11"><div class="textLeft">资产坐落：</div></el-col>
                                    <el-col :lg="9">
                                        <el-input  style="font-size: 12px;" v-model="item.houseAddr" placeholder="选择后自动生成" disabled="disabled"></el-input>
                                    </el-col>
                                    <!--<el-form-item label="资产坐落：">-->
                                        <!--<el-input v-model="item.houseAddr" placeholder="选择资产编号后自动生成" disabled="disabled"></el-input>-->
                                    <!--</el-form-item>-->
                                </el-col>
                                <!--<el-form-item label="资产编号：">-->
                                    <!--<el-select-->
                                            <!--@change="zcChange(item)"-->
                                            <!--v-model="item.value"-->
                                            <!--filterable-->
                                            <!--remote-->
                                            <!--reserve-keyword-->
                                            <!--placeholder="请输入资产坐落或产权人"-->
                                            <!--:remote-method="remoteMethod"-->
                                            <!--:loading="loading">-->
                                        <!--<el-option-->
                                                <!--v-for="items in zcoptions"-->
                                                <!--:key="items.value"-->
                                                <!--:label="items.label"-->
                                                <!--:value="items.value">-->
                                        <!--</el-option>-->
                                    <!--</el-select>-->
                                <!--</el-form-item>-->
                                <!--<el-form-item label="资产坐落：">-->
                                    <!--<el-input v-model="item.houseAddr" placeholder="选择资产编号后自动生成" disabled="disabled"></el-input>-->
                                <!--</el-form-item>-->

                            </div>
                            <el-button type="primary" style="margin-left: 20px;
    position: absolute;
    bottom:26px;
    right: 0;" @click="newAdds">添加</el-button>
                        </el-col>
                        <el-col :lg="22">
                            <el-col :lg="11"><div class="textLeft">合同编号：</div></el-col>
                            <el-col :lg="13"><el-input v-model="pactCode" placeholder="请输入内容" ></el-input></el-col>
                            <!--<el-form-item label="合同编号：">-->
                                <!--<el-input v-model="pactCode" placeholder="请输入内容" ></el-input>-->
                            <!--</el-form-item>-->
                        </el-col>
                        <el-col :lg="22">
                            <el-col :lg="11"><div class="textLeft">承租方：</div></el-col>
                            <el-col :lg="13"><el-input v-model="tenant" placeholder="请输入内容" ></el-input></el-col>
                            <!--<el-form-item label="承租方：">-->
                                <!--<el-input v-model="tenant" placeholder="请输入内容" ></el-input>-->
                            <!--</el-form-item>-->
                        </el-col>
                        <el-col :lg="22">
                            <el-col :lg="11"><div class="textLeft">联系方式：</div></el-col>
                            <el-col :lg="13"><el-input v-model="contact" placeholder="请输入内容" ></el-input></el-col>
                            <!--<el-form-item label="联系方式：">-->
                                <!--<el-input v-model="contact" placeholder="请输入内容" ></el-input>-->
                            <!--</el-form-item>-->
                        </el-col>
                        <el-col :lg="22">
                            <el-col :lg="11"><div class="textLeft">租金（元）：</div></el-col>
                            <el-col :lg="13"><el-input v-model="rentAmount" placeholder="请输入内容" ></el-input></el-col>
                            <!--<el-form-item label="租金（元）：">-->
                                <!--<el-input v-model="rentAmount" placeholder="请输入内容" ></el-input>-->
                            <!--</el-form-item>-->
                        </el-col>
                        <el-col :lg="22">
                            <el-col :lg="11"><div class="textLeft">物业费（元）：</div></el-col>
                            <el-col :lg="13"><el-input v-model="fee" placeholder="请输入内容" ></el-input></el-col>
                            <!--<el-form-item label="物业费（元）：">-->
                                <!--<el-input v-model="fee" placeholder="请输入内容" ></el-input>-->
                            <!--</el-form-item>-->
                        </el-col>
                    </el-col>
                    <el-col :lg="12">
                        <el-col :lg="22">
                            <el-col :lg="11"><div class="textLeft">租约日期：</div></el-col>
                            <el-col :lg="13">
                                <el-date-picker
                                        v-model="value1"
                                        type="daterange"
                                        value-format="yyyy-MM-dd"
                                        @change="getTime"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                                </el-date-picker>
                            </el-col>
                            <!--<el-form-item label="租约日期：">-->
                                <!--<el-date-picker-->
                                        <!--v-model="value1"-->
                                        <!--type="daterange"-->
                                        <!--value-format="yyyy-MM-dd"-->
                                        <!--@change="getTime"-->
                                        <!--range-separator="至"-->
                                        <!--start-placeholder="开始日期"-->
                                        <!--end-placeholder="结束日期">-->
                                <!--</el-date-picker>-->
                            <!--</el-form-item>-->
                        </el-col>
                        <el-col :lg="22">
                            <el-col :lg="11"><div class="textLeft">店名：</div></el-col>
                            <el-col :lg="13">
                                <el-input v-model="tradeName" placeholder="请输入内容" :disabled="disabled"></el-input>
                            </el-col>
                            <!--<el-form-item label="店名：">-->
                                <!--<el-input v-model="tradeName" placeholder="请输入内容" :disabled="disabled"></el-input>-->
                            <!--</el-form-item>-->
                        </el-col>
                        <el-col  :lg="22">
                            <el-col :lg="11"><div class="textLeft">业态：</div></el-col>
                            <el-col :lg="13">
                                <el-select  v-model="formatsVal" style="width: 100%;" placeholder="请选择" :disabled="disabled" @change="formatsList">
                                    <el-option
                                            v-for="item in formats"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.label">
                                    </el-option>
                                </el-select>
                            </el-col>
                            <!--<el-form-item label="业态：" >-->
                                <!--<el-select  v-model="formatsVal" placeholder="请选择" :disabled="disabled" @change="formatsList">-->
                                    <!--<el-option-->
                                            <!--v-for="item in formats"-->
                                            <!--:key="item.value"-->
                                            <!--:label="item.label"-->
                                            <!--:value="item.label">-->
                                    <!--</el-option>-->
                                <!--</el-select>-->
                            <!--</el-form-item>-->
                        </el-col>
                        <el-col :lg="22">
                            <el-col :lg="11"><div class="textLeft">保证金：</div></el-col>
                            <el-col :lg="13">
                                <el-input v-model="margin" placeholder="请输入内容" :disabled="disabled"></el-input>
                            </el-col>
                            <!--<el-form-item label="保证金：">-->
                                <!--<el-input v-model="margin" placeholder="请输入内容" :disabled="disabled"></el-input>-->
                            <!--</el-form-item>-->
                        </el-col>
                        <el-col :lg="22">
                            <el-col :lg="11"><div class="textLeft">备注：</div></el-col>
                            <el-col :lg="13">
                                <el-input v-model="remark" placeholder="请输入内容" :disabled="disabled"></el-input>
                            </el-col>
                            <!--<el-form-item label="备注：">-->
                                <!--<el-input v-model="remark" placeholder="请输入内容" :disabled="disabled"></el-input>-->
                            <!--</el-form-item>-->
                        </el-col>
                        <el-col :lg="22" class="fj">
                            <el-col :lg="11"><div class="textLeft">附件：</div></el-col>
                            <el-col :lg="13">
                                <el-upload
                                        class="upload-demo"
                                        action="http://61.153.180.66:9098/file/attachment/upload?type=asset"
                                        :on-preview="handlePictureCardPreview"
                                        :on-success="phone"
                                        multiple
                                        ref="upload"
                                        :class="{hide:showUpload}"
                                        :on-remove="handleRemove">
                                    <el-button size="small" type="primary" >点击上传</el-button>
                                </el-upload>
                            </el-col>
                            <!--<el-form-item label="附件：">-->
                                <!--<el-upload-->
                                        <!--class="upload-demo"-->
                                        <!--action="http://61.153.180.66:9098/file/attachment/upload?type=asset"-->
                                        <!--:on-preview="handlePictureCardPreview"-->
                                        <!--:on-success="phone"-->
                                        <!--multiple-->
                                        <!--ref="upload"-->
                                        <!--:class="{hide:showUpload}"-->
                                        <!--:on-remove="handleRemove">-->
                                    <!--<el-button size="small" type="primary" >点击上传</el-button>-->
                                <!--</el-upload>-->
                            <!--</el-form-item>-->
                        </el-col>
                    </el-col>
                    <el-col :lg="24">
                        <el-col :lg="5"><div class="textLeft">付租方式：</div></el-col>
                        <el-col :lg="19">
                            <el-col :lg="20" class="pay" v-for='(item,index) in books2'>
                                <el-col :lg="10" style="position: relative;margin-bottom: 20px;">
                                    <div style="display: none;">{{item.num = index+1}}</div>
                                    <div style="position: absolute;top:15px;left:0;">第 {{index+1}} 笔</div>
                                    <el-date-picker style="margin-left: 60px;width: 69% !important;"
                                                    v-model="item.dateStr"
                                                    type="date"
                                                    @change="timeChange(item.dateStr)"
                                                    value-format="yyyy-MM-dd"
                                                    placeholder="选择日期">
                                    </el-date-picker>
                                </el-col>
                                <el-col :lg="13">
                                    <el-select class="selecr" style="width: 40%;"  v-model="item.rentType" placeholder="请选择" :disabled="disabled" @change="houseNowChange4(item.rentType)">
                                        <el-option
                                                v-for="item in RoleAdmin"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.label">
                                        </el-option>
                                    </el-select>
                                    <span class="inputs"><el-input  v-model="item.rentAmount" placeholder="请输入金额" ></el-input></span>
                                </el-col>
                            </el-col>
                            <el-col :lg="4"><el-button type="primary" @click="newAdd2" style="width: 100px;">添加</el-button></el-col>
                        </el-col>
                    </el-col>
                    <el-col :span="23" style="text-align: right;margin: 40px 0;">
                        <el-button type="primary" round @click="open">提交</el-button>
                        <el-button type="success" round @click="showDialog = false">取消</el-button>
                    </el-col>
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
        houseAddr:'',
        showDialog:false,
        assetCode:[{value:null,houseAddr:null}],
        pactCode:'',
        tenant:'',
        contact:'',
        rentAmount:'',
        fee:'',
        rentStart:'',
        rentEnd:'',
        tradeName:'',
        formats:[
            {value:'1',label:'旅游休闲'},
            {value:'2',label:'食品'},
            {value:'3',label:'餐饮'},
            {value:'4',label:'小吃'},
            {value:'5',label:'住宅'},
            {value:'6',label:'仓库'},
            {value:'7',label:'其他'},
            {value:'8',label:'土特产'},
            {value:'9',label:'民宿'},
            {value:'10',label:'酒吧'},
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
        disabled:false,
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
        str:'',
        showUpload:false,
        times: [],
        typeItem:'',
        picUrl:'',
        zcoptions: [],
        // value: [],
        list: [],
        loading: false,
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
        remoteMethod(query) {
            var that =this;
            if (query !== '') {
                this.loading = true;
                var data = {search:query}
                setTimeout(() => {
                    this.loading = false;
                    this.$axios({
                        url: this.getAjax + '/admin/meansAdmin/findHouseAddrByCode',
                        method: "post",
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8',
                            'Token':sessionStorage.getItem('token')
                        },
                        data:data
                    }).then(res => {
                        console.log(res)
                        var arr = [];
                        var list = res.data.data
                        for(var i=0;i<list.length;i++){
                            var obj = {};
                            obj['value'] = list[i].assetCode
                            obj['label'] = list[i].assetCode
                            obj['address'] = list[i].houseAddress
                            arr.push(obj)
                        }
                        this.zcoptions  = arr
                        console.log(arr)
                    })
                    // this.zcoptions = this.list.filter(item => {
                    //     return item.label.toLowerCase()
                    //         .indexOf(query.toLowerCase()) > -1;
                    // });
                    // console.log(this.zcoptions)
                }, 200);
            } else {
                this.zcoptions = [];
            }
        },
        zcChange(item){
            console.log(item)
            var val = item.value
            var arr = this.zcoptions
            for(var i=0;i<arr.length;i++){
                if(val === arr[i].value){
                    item.houseAddr = arr[i].address
                }
            }
            // this.assetCode[index].houseAddr = this.zcoptions[0].label
        },
        inputFunc:function(id){
            console.log(id)
            // if(document.querySelector('input')==document.activeElement){
            //     this.fuzzy_search(this.searchVal.trim());
            // }
        },
        detail(type,str){
            console.log(type,str)
            this.typeItem = type
            this.str = str
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
            // if(fileList.length >= 3){
            //     this.showUpload = true
            // }
            // this.pic.push({'url':res.data[0],'name':file.name})
            // this.picUrl = this.pic[0].url
            var arr = []
            var arrs = []
            for(var i=0;i<fileList.length;i++){
                var obj = {};
                var img = {};
                obj['url'] = fileList[i].response.data[0]
                obj['name'] = fileList[i].name
                img['name'] =  fileList[i].name+'#_#'+fileList[i].response.data[0]
                arr.push(obj)
                arrs.push(img)
            }
            this.pic = arr
            var imgs= []
            for(var j=0;j<arrs.length;j++){
                imgs.push(arrs[j].name)
            }
            this.picUrl = imgs.toString()
        },
        handleRemove(file, fileList) {
            var arr = []
            var arrs = []
            for(var i=0;i<fileList.length;i++){
                var obj = {};
                var img = {};
                obj['url'] = fileList[i].response.data[0]
                obj['name'] = fileList[i].name
                img['name'] =  fileList[i].response.data[0]
                arr.push(obj)
                arrs.push(img)
            }
            this.pic = arr
            var imgs= []
            for(var j=0;j<arrs.length;j++){
                imgs.push(arrs[j].name)
            }
            this.picUrl = imgs.toString()
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
                houseAddr:null
            });
        },
        open() {
            if(this.str == 'zy'){
                var arr = [];
                for(var i=0;i<this.assetCode.length;i++){
                    if(this.assetCode[i].value){
                        arr.push(this.assetCode[i].value)
                    }
                }
                var str = arr.join(",");
                var arrs = [];
                for(var j=0;j<this.assetCode.length;j++){
                    if(this.assetCode[j].houseAddr){
                        arrs.push(this.assetCode[j].houseAddr)
                    }
                }
                var strs = arrs.join(",");
                var data= {
                    'id':null,
                    'assetCode':str,
                    'attach':this.picUrl,
                    'houseAddr':strs,
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
                    'typeItem':this.typeItem,
                    'propertyPayTypeList':this.books2,
                    'pid':0,
                    'typeCore':1
                }
                console.log(data)
                if(str === '' ||strs===''||this.tenant===''||this.contact===''||this.rentAmount===''
                    ||this.fee===''||this.rentStart===''||this.rentEnd===''||this.tradeName===''||this.formatsVal===''
                    ||this.margin===''||(this.books2[0].dateStr =='' ||this.books2[0].dateStr ==null || this.books2[0].rentAmount =='' || this.books2[0].rentAmount ==null || this.books2[0].rentType =='' ||this.books2[0].rentType ==null)
                )
                {
                    this.$message({
                        message: '值不能为空！',
                        type: 'warning'
                    });
                }
                else{
                    var that = this;
                    this.$confirm('确认提交？', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$axios({
                            url: this.getAjax + '/admin/property/addOrUpdate',
                            method: "post",
                            headers: {
                                'Content-Type': 'application/json;charset=UTF-8',
                                'Token':sessionStorage.getItem('token')
                            },
                            data:data
                        })
                            .then(res => {
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
                                        this.$emit('changeShow','false')
                                        this.$emit('child-event',data)
                                        this.assetCode =[{value:null,houseAddr:null}]
                                        this.picUrl = ''
                                        this.houseAddr = ''
                                        this.pactCode = ''
                                        this.tenant = ''
                                        this.contact = ''
                                        this.rentAmount = ''
                                        this.fee = ''
                                        this.rentStart = ''
                                        this.rentEnd = ''
                                        this.value1 = ''
                                        this.tradeName = ''
                                        this.margin = ''
                                        this.formatsVal = ''
                                        this.remark = ''
                                        this.typeItem = ''
                                        this.dialogImageUrl = ''
                                        this.$refs.upload.clearFiles()
                                        this.books2 = [
                                            {id:null,num:null,dateStr:null,rentAmount:null,attach:null,rentType:null}
                                        ];
                            }
                        })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消'
                        });
                    });
                }

            }
            else if (this.str == 'wz'){
                var arr = [];
                for(var i=0;i<this.assetCode.length;i++){
                    if(this.assetCode[i].value){
                        arr.push(this.assetCode[i].value)
                    }
                }
                var str = arr.join(",");
                var arrs = [];
                for(var j=0;j<this.assetCode.length;j++){
                    if(this.assetCode[j].houseAddr){
                        arrs.push(this.assetCode[j].houseAddr)
                    }
                }
                var strs = arrs.join(",");
                var data= {
                    'id':null,
                    'assetCode':str,
                    'attach':this.picUrl,
                    'houseAddr':strs,
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
                    'typeItem':this.typeItem,
                    'propertyPayTypeList':this.books2,
                    'pid':0,
                    'typeCore':1
                }
                console.log(data)

                if(str === '' ||strs===''||this.tenant===''||this.contact===''||this.rentAmount===''
                    ||this.fee===''||this.rentStart===''||this.rentEnd===''||this.tradeName===''||this.formatsVal===''
                    ||this.picUrl === ''
                    ||this.margin===''||(this.books2[0].dateStr =='' ||this.books2[0].dateStr ==null || this.books2[0].rentAmount =='' || this.books2[0].rentAmount ==null || this.books2[0].rentType =='' ||this.books2[0].rentType ==null)
                )
                {
                    this.$message({
                        message: '除备注外其余值不能为空，请检查！',
                        type: 'warning'
                    });
                }
                else{
                    var that = this;
                    this.$confirm('确认提交?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$axios({
                            url: this.getAjax + '/admin/property/addOrUpdate',
                            method: "post",
                            headers: {
                                'Content-Type': 'application/json;charset=UTF-8',
                                'Token':sessionStorage.getItem('token')
                            },
                            data:data
                        })
                            .then(res => {
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
                                            this.$emit('changeShow','false')
                                            this.$emit('child-event',data)
                                            this.assetCode =[{value:null,houseAddr:null}]
                                            this.picUrl = ''
                                            this.houseAddr = ''
                                            this.pactCode = ''
                                            this.tenant = ''
                                            this.contact = ''
                                            this.rentAmount = ''
                                            this.fee = ''
                                            this.rentStart = ''
                                            this.rentEnd = ''
                                            this.value1 = ''
                                            this.tradeName = ''
                                            this.margin = ''
                                            this.formatsVal = ''
                                            this.remark = ''
                                            this.typeItem = ''
                                            this.dialogImageUrl = ''
                                            this.$refs.upload.clearFiles()
                                            this.books2 = [
                                                {id:null,num:null,dateStr:null,rentAmount:null,attach:null,rentType:null}
                                            ];
                                }
                            })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消'
                        });
                    });
                }
            }
            else if (this.str == 'zj'){
                var arr = [];
                for(var i=0;i<this.assetCode.length;i++){
                    if(this.assetCode[i].value){
                        arr.push(this.assetCode[i].value)
                    }
                }
                var str = arr.join(",");
                var arrs = [];
                for(var j=0;j<this.assetCode.length;j++){
                    if(this.assetCode[j].houseAddr){
                        arrs.push(this.assetCode[j].houseAddr)
                    }
                }
                var strs = arrs.join(",");
                var data= {
                    'id':null,
                    'assetCode':str,
                    'attach':this.picUrl,
                    'houseAddr':strs,
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
                    'typeItem':2,
                    'propertyPayTypeList':this.books2,
                    'pid':this.typeItem,
                    'typeCore':2
                }
                console.log(data)

                if(str === '' ||strs===''||this.tenant===''||this.contact===''||this.rentAmount===''
                    ||this.fee===''||this.rentStart===''||this.rentEnd===''||this.tradeName===''||this.formatsVal===''
                    ||this.picUrl === ''
                    ||this.margin===''||(this.books2[0].dateStr =='' ||this.books2[0].dateStr ==null || this.books2[0].rentAmount =='' || this.books2[0].rentAmount ==null || this.books2[0].rentType =='' ||this.books2[0].rentType ==null)
                )
                {
                    this.$message({
                        message: '除备注外其余值不能为空，请检查！',
                        type: 'warning'
                    });
                }
                else{
                    var that = this;
                    this.$confirm('确认提交?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$axios({
                            url: this.getAjax + '/admin/property/addOrUpdate',
                            method: "post",
                            headers: {
                                'Content-Type': 'application/json;charset=UTF-8',
                                'Token':sessionStorage.getItem('token')
                            },
                            data:data
                        })
                            .then(res => {
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
                                    this.$parent.ZCkan(this.typeItem)
                                    this.$emit('changeShow','false')
                                    this.$emit('child-event',data)
                                    this.assetCode =[{value:null,houseAddr:null}]
                                    this.picUrl = ''
                                    this.houseAddr = ''
                                    this.pactCode = ''
                                    this.tenant = ''
                                    this.contact = ''
                                    this.rentAmount = ''
                                    this.fee = ''
                                    this.rentStart = ''
                                    this.rentEnd = ''
                                    this.value1 = ''
                                    this.tradeName = ''
                                    this.margin = ''
                                    this.formatsVal = ''
                                    this.remark = ''
                                    this.typeItem = ''
                                    this.dialogImageUrl = ''
                                    this.$refs.upload.clearFiles()
                                    this.books2 = [
                                        {id:null,num:null,dateStr:null,rentAmount:null,attach:null,rentType:null}
                                    ];
                                }
                            })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消'
                        });
                    });
                }
            }
            this.zcoptions = [];
        },
        handleClose(){
            // 子组件调用父组件方法，并传递参数
            this.assetCode =[{value:null,hcouseAddr:null}]
            this.zcoptions = [];
            this.picUrl = ''
            this.houseAddr = ''
            this.pactCode = ''
            this.tenant = ''
            this.contact = ''
            this.rentAmount = ''
            this.fee = ''
            this.rentStart = ''
            this.rentEnd = ''
            this.value1 = ''
            this.tradeName = ''
            this.margin = ''
            this.formatsVal = ''
            this.remark = ''
            this.typeItem = ''
            this.dialogImageUrl = ''
            this.$refs.upload.clearFiles()
            this.books2 = [
                {id:null,num:null,dateStr:null,rentAmount:null,attach:null,rentType:null}
            ];
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
    .fj>>>.el-upload-list--text {margin-left: 25%;width: 50%;}
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
