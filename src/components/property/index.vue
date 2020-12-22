<template>
    <div class="main">
        <div>
            <el-radio-group v-model="typeItem" style="margin-bottom: 30px;" @change="typeChange">
                <el-radio-button label="1">自有资产合同</el-radio-button>
                <el-radio-button label="2" >外租资产合同</el-radio-button>
            </el-radio-group>
        </div>
       <div v-if="user == 1">
           <el-row >
               <el-form ref="form" >
                   <el-col class="sort" :span="4">
                       <el-form-item label="付款状态：">
                           <el-select  v-model="value" placeholder="请选择">
                               <el-option
                                       v-for="item in options"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                               </el-option>
                           </el-select>
                       </el-form-item>
                   </el-col>
                   <el-col class="sort times" :span="6">
                       <el-form-item label="日期：">
                           <el-date-picker
                                   v-model="value2"
                                   type="daterange"
                                   align="right"
                                   unlink-panels
                                   range-separator="至"
                                   start-placeholder="开始日期"
                                   end-placeholder="结束日期"
                                   :picker-options="pickerOptions">
                           </el-date-picker>
                       </el-form-item>
                   </el-col>
                   <el-col class="sort" :span="5">
                       <el-input
                               placeholder="请输入内容"
                               prefix-icon="el-icon-search"
                               v-model="input2">
                       </el-input>
                   </el-col>

                   <el-col :span="5" class="rightS">
                       <div class="btns2">
                           <el-button type="success" @click="dialogVisible = true">统计</el-button>
                           <el-button  type="primary" @click="handleClickss">新增</el-button>
                           <el-button type="primary" @click="findExportTitles">导出</el-button>
                       </div>
                   </el-col>
               </el-form>
           </el-row>
           <el-row class="tables">
               <el-table
                       ref="multipleTable"
                       :data="tableData"
                       tooltip-effect="dark"
                       :key="toggleIndex"
                       style="width: 100%"
                       @selection-change="handleSelectionChange">
                   <el-table-column type="selection" width="55"></el-table-column>
                   <el-table-column  type="index" label="序号"></el-table-column>
                   <el-table-column prop="pactCode" label="合同编号"></el-table-column>
                   <el-table-column prop="tenant" label="承租方"></el-table-column>
                   <el-table-column prop="contact" label="联系方式"></el-table-column>
                   <el-table-column prop="houseAddr" label="房屋坐落"></el-table-column>
                   <el-table-column prop="rentAmount" label="租金（元）"></el-table-column>
                   <el-table-column prop="fee" label="物业费（元）"></el-table-column>
                   <el-table-column prop="time" width="200" label="租约日期">
                       <template scope="tableData">
                           <span >{{tableData.row.rentStart}} - {{tableData.row.rentEnd}}</span>
                       </template>
                   </el-table-column>
                   <el-table-column prop="tradeName" label="店名"></el-table-column>
                   <el-table-column prop="formats" label="业态"></el-table-column>
                   <el-table-column prop="margin" label="保证金"></el-table-column>
                   <el-table-column prop="date9" label="付款状态">
                       <template scope="tableData">
                           <el-button  type="text" size="small" @click="fkzt(tableData.row)">详情</el-button>
                           <!--<span v-if="tableData.row.date9 === '1'" style="color:deepskyblue;">已缴纳</span>-->
                           <!--<span v-if="tableData.row.date9 === '2'" style="color:red;">已超期</span>-->
                           <!--<span v-if="tableData.row.date9 === '3'" style="color:orange;">即将到期</span>-->
                       </template>
                   </el-table-column>
                   <el-table-column
                           label="合同详情"
                   >
                       <template slot-scope="tableData">
                           <el-button  type="text" size="small" @click="kan(tableData.row)">详情</el-button>
                       </template>
                   </el-table-column>
                   <el-table-column
                           label="资产详情"
                   >
                       <template slot-scope="tableData">
                           <el-button  type="text" size="small" @click="zclist(tableData.row)">详情</el-button>
                       </template>
                   </el-table-column>
                   <el-table-column prop="remark" label="备注"></el-table-column>
                   <el-table-column
                           fixed="right"
                           label="操作"
                   >
                       <template slot-scope="tableData">
                           <div v-if="sysAuthAdmin !== '' && sysAuthAdmin !== 'zcxxlrjgx' && sysAuthAdmin !== 'zcgxsp'">
                               <el-button  type="text" size="small" @click="info(tableData.row)">修改</el-button>
                               <el-button type="text" size="small" @click="del(tableData.row)">删除</el-button>
                           </div>
                           <div v-else>
                               <el-button  type="text" size="small" style="color: #999;">修改</el-button>
                               <el-button type="text" size="small" style="color: #999;">删除</el-button>
                           </div>
                       </template>
                   </el-table-column>
               </el-table>
           </el-row>
           <el-row style="margin-top: 48px;text-align: right" class="pagination">
               <el-pagination
                       background
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="page.pageNum"
                       :page-sizes="[10, 20, 30, 40]"
                       :page-size="page.pageSize"
                       layout=" prev, pager, next, sizes,jumper"
                       :total="page.total">
               </el-pagination>
           </el-row>
       </div>
        <div v-if="user == 2">
            <el-row >
                <el-form ref="form" >
                    <el-col class="sort" :span="4">
                        <el-form-item label="付款状态：">
                            <el-select  v-model="value" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col class="sort times" :span="8">
                        <el-form-item label="日期：">
                            <el-date-picker
                                    v-model="value2"
                                    type="daterange"
                                    align="right"
                                    unlink-panels
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                    :picker-options="pickerOptions">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="sort" :span="5">
                        <el-input
                                placeholder="请输入内容"
                                prefix-icon="el-icon-search"
                                v-model="input2">
                        </el-input>
                    </el-col>

                    <el-col :span="5" class="rightS">
                        <div class="btns2">
                            <el-button type="primary" @click="handleClicksswz">新增</el-button>
                        </div>
                    </el-col>
                </el-form>
            </el-row>
            <el-row class="tables" >
                <el-table
                        ref="multipleTable"
                        :data="tableData"
                        :key="toggleIndex"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column  type="index" label="序号"></el-table-column>
                    <el-table-column prop="pactCode" label="租进合同编号"></el-table-column>
                    <el-table-column prop="tenant" label="承租方"></el-table-column>
                    <el-table-column prop="contact" label="联系方式"></el-table-column>
                    <el-table-column prop="houseAddr" width="200" label="房屋坐落"></el-table-column>
                    <el-table-column prop="rentAmount" label="租金（元）"></el-table-column>
                    <el-table-column prop="fee" label="物业费（元）"></el-table-column>
                    <el-table-column prop="date8" width="200" label="租约日期">
                        <template scope="tableData">
                            <span >{{tableData.row.rentStart}} - {{tableData.row.rentEnd}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="tradeName"  label="店名"></el-table-column>
                    <el-table-column prop="formats"  label="业态"></el-table-column>
                    <el-table-column prop="margin"  label="保证金（元）"></el-table-column>
                    <el-table-column prop="tableData" label="付款状态">
                        <template scope="tableData">
                            <el-button  type="text" size="small" @click="fkzt(tableData.row)">详情</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="合同详情"
                    >
                        <template slot-scope="tableData">
                            <el-button  type="text" size="small" @click="kan(tableData.row)">详情</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column prop="contStatus" label="合同状态"></el-table-column>
                    <el-table-column prop="remark" label="备注"></el-table-column>
                    <el-table-column
                            label="操作"
                    >
                        <template slot-scope="tableData">
                            <div v-if="sysAuthAdmin !== '' && sysAuthAdmin !== 'zcxxlrjgx' && sysAuthAdmin !== 'zcgxsp'">
                                <el-button  type="text" size="small" @click="info(tableData.row)">修改</el-button>
                                <el-button type="text" size="small" @click="del(tableData.row)">删除</el-button>
                            </div>
                            <div v-else>
                                <el-button  type="text" size="small" style="color: #999;">修改</el-button>
                                <el-button type="text" size="small" style="color: #999;">删除</el-button>
                            </div>
                        </template>

                    </el-table-column>
                    <el-table-column
                            label="历史出租合同"
                    >
                        <template slot-scope="scope">
                            <el-button  type="text" size="small" @click="kan">详情</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>
            <el-row style="margin-top: 48px;text-align: right" class="pagination">
                <el-pagination
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="10"
                        layout=" prev, pager, next, sizes,jumper"
                        :total="page.total">
                </el-pagination>
            </el-row>
        </div>
        <el-dialog
                :visible.sync="dialogVisible"
                width="680px">
            <date-chart @childEvent="parentMethod"></date-chart>
        </el-dialog>
        <!--新增-->
        <assets-add :dialogVisibleAdd="dialogVisibleAdd" @child-event="newInforAdd"  @changeShow="showdialogVisibleAdd" ref="dialogVisibleAddRef"></assets-add>
        <!--查看-->
        <assets-kan :dialogVisibleKanwy="dialogVisibleKanwy"  @changeShow="showdialogVisibleKan" ref="dialogVisibleKanwyRef"></assets-kan>
        <!--修改-->
        <assets-infor :dialogVisibleInfor="dialogVisibleInfor" @child-event="newInforInfo"  @changeShow="showdialogVisibleInfor" ref="dialogVisibleInforRef"></assets-infor>

        <!--资产列表-->
        <el-dialog
                :visible.sync="zcvisible"
                title="资产详情"
                width="80%">
            <div class="countDel">
                <el-row>
                    <el-form ref="form" >
                        <el-table
                                ref="multipleTable"
                                :data="tablezclist"
                                tooltip-effect="dark"
                                style="width: 100%"
                                @selection-change="handleSelectionChange">
                            <el-table-column type="selection" width="55"></el-table-column>
                            <el-table-column  type="index" label="序号"></el-table-column>
                            <el-table-column prop="assetCode" label="资产编号"></el-table-column>
                            <el-table-column prop="assetUser" label="产权人"></el-table-column>
                            <el-table-column prop="houseAddress" label="房屋坐落"></el-table-column>
                            <el-table-column prop="houseNature" label="房屋性质"></el-table-column>
                            <el-table-column prop="landUse" label="土地用途"></el-table-column>
                            <el-table-column prop="realEstate" label="不动产证"></el-table-column>
                            <el-table-column prop="houseNow" label="房屋现状"></el-table-column>
                            <el-table-column
                                    label="历史租聘情况"
                            >
                                <template slot-scope="tableData">
                                    <el-button  type="text" size="small" >详情</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="资产详情"
                            >
                                <template slot-scope="tableData">
                                    <el-button  type="text" size="small" @click="zcdetail(tableData.row)">详情</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-form>
                </el-row>
            </div>
        </el-dialog>

        <!--资产详情查看-->
        <assets-kans  :AssetsKanVisible="AssetsKanVisible"  @changeShow="showAssetsKan" ref="AssetsKanRef"></assets-kans>
        <!--付款状态-->
        <el-dialog
                :visible.sync="skvisible"
                title="租金缴纳情况"
                width="700px">
            <div class="countDel">
                <el-row>
                    <el-form ref="form" >
                        <el-col :span="24">
                            <!--<el-form-item label="付租方式：">共计2笔，总金额20000元</el-form-item>-->
                            <el-form-item label="付租方式："></el-form-item>
                        </el-col>
                        <el-col :span="24" class="pay" v-for='(item,index) in books2' style="position: relative;">
                            <el-col :span="10" style="position: relative;margin-bottom: 20px;">
                                <div style="display: none;">{{item.num = index+1}}</div>
                                <div style="position: absolute;top:15px;left:0;">第 {{index+1}} 笔</div>
                                <el-input style="margin-left: 50px;" v-model="item.dateStr" placeholder="请输入内容" disabled></el-input>
                            </el-col>
                            <el-col :span="10" style="position: relative">
                                <el-input v-model="item.rentAmount" placeholder="请输入内容" disabled></el-input>
                                <div class="sjsc">
                                    <el-upload
                                            class="upload-demo"
                                            action="http://39.100.95.204:2005/file/attachment/upload?type=asset"
                                            :on-preview="handlePictureCardPreview"
                                            :on-success="phone.bind(null, {'index':index,'data':item})"
                                            multiple
                                            :limit="1"
                                            :file-list="item.img"
                                            :class="{hide:showUpload}"
                                            :on-remove="handleRemove">
                                        <!--<i class="el-icon-plus"></i>-->
                                        <el-button size="small" type="primary">点击上传</el-button>
                                    </el-upload>
                                    <!--<el-dialog :visible.sync="dialogVisibless">-->
                                        <!--<img width="100%" :src="dialogImageUrl" alt="">-->
                                    <!--</el-dialog>-->
                                    <span></span>
                                </div>
                            </el-col>
                        </el-col>

                        <div>共计：{{books2.length}} 笔 累计金额：{{Amount}}</div>
                    </el-form>
                </el-row>
            </div>
        </el-dialog>
        <!--导出-->
        <el-dialog
                :visible.sync="findExportTitle"
                v-if="findExportTitle"
                title="选择导出字段"
                width="500px">
            <el-row>
                <el-form rel="form">
                    <el-col :span="24">
                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                        <div style="margin: 15px 0;"></div>
                        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                            <el-checkbox v-for="city in cities" :label="city" :key="city.key">{{city.key}}</el-checkbox>
                        </el-checkbox-group>
                    </el-col>
                    <el-col :span="24" style="text-align: right;margin-top: 20px;">
                        <el-button type="primary" round @click="daochu">导出</el-button>
                    </el-col>
                </el-form>
            </el-row>
        </el-dialog>
    </div>
</template>

<script>
    import DateChart from '@/components/property/DateChart'
    import AssetsInfor from '@/components/property/AssetsInfor'
    import AssetsAdd from '@/components/property/AssetsAdd'
    import AssetsKan from '@/components/property/AssetsKan'
    import AssetsKans from '@/components/assets/AssetsKan'
    export default {
        name: 'login',
        data () {
            return {
                Amount:0,
                toggleIndex:0,
                sysAuthAdmin:sessionStorage.getItem('authStr'),
                dialogVisibleKanwy:false,
                disabled:true,
                AssetsKanVisible: false,
                skvisible: false,
                zcvisible:false,
                dialogVisibless:false,
                currentPage4: 4,
                user:1,
                input2:'',
                value2:'',
                options: [
                    {
                        value: '选项1',
                        label: '模拟数据1'
                    }, {
                        value: '选项2',
                        label: '模拟数据2'
                    }, {
                        value: '选项3',
                        label: '模拟数据3'
                    }, {
                        value: '选项4',
                        label: '模拟数据4'
                    }, {
                        value: '选项5',
                        label: '模拟数据5'
                    }
                ],
                typeItem:'1',
                value: '',
                tableData: [],
                tableData2: [
                ],
                tablezclist:[],
                multipleSelection: [],
                parentMessage: '我是来自父组件的消息',
                dialogVisible: false,
                dialogVisibleAdd: false,
                dialogVisibleKan: false,
                dialogVisibleInfor: false,
                title:'',
                realLandAttach:[],
                type:'',
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                books2:[
                    {id:null,num:null,dateStr:null,rentAmount:null,attach:null,rentType:null}
                ],
                page:'',
                pageNum:1,
                pageSize:10,
                itemtypes:'zy',
                dialogImageUrl:'',
                showUpload:false,
                pic:[],
                picUrl:'',
                handlePic:[],
                formDatas:'',
                checkAll: false,
                checkedCities: [],
                cities: [{'title':'上海','key':'shanghai'},{'title':'上海1','key':'shanghai1'},{'title':'上海2','key':'shanghai2'},],
                isIndeterminate: false,
                findExportTitle:false,
            }
        },
        components:{
            DateChart,AssetsInfor,AssetsAdd,AssetsKan,AssetsKans
        },
        methods:{
            // 获取导出列表
            findExportTitles(){
                this.findExportTitle = true
                this.$axios({
                    url: this.getAjax + '/admin/property/findExportTitle',
                    method: "get",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Token':sessionStorage.getItem('token')
                    },
                    data:{}
                }).then(res => {
                    if(res.data.code == '1001'){
                        this.cities = res.data.data
                    }else{
                        this.$message({
                            message: res.data.msg,
                            type: 'warning'
                        });
                    }
                })
            },
            handleCheckAllChange(val) {
                const cityOptions = this.cities;
                this.checkedCities = val ? cityOptions : [];
                this.isIndeterminate = false;
                this.exports(this.checkedCities)
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
                this.exports(value)
            },
            // 导出
            exports(str){
                var arr = []
                for(var i=0;i<str.length;i++){
                    var obj = {};
                    obj['title']=str[i].key
                    obj['key']=str[i].title
                    arr.push(obj)
                }
                // var data = str
                var that = this;
                var formData = new FormData();
                console.log(JSON.stringify(arr))
                formData.append('exportTitle',JSON.stringify(arr))
                this.formDatas = formData

            },
            daochu(){
                var url =this.getAjax + '/admin/property/export';
                // this.formSubmit(url,this.formDatas)
                this.$axios({
                    url: url,
                    method: "post",
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Token':sessionStorage.getItem('token')
                    },
                    responseType: 'blob',
                    data:this.formDatas
                }).then(res => {
                    this.download(res.data)
                })
            },
            download(data){
                if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                    let blob = new Blob([data], {
                        type: 'application/vnd.ms-excel'
                    })
                    window.navigator.msSaveOrOpenBlob(blob,
                        new Date().getTime() + '.xlsxs')
                } else {
                    /* 火狐谷歌的文件下载方式 */
                    var blob = new Blob([data])
                    var downloadElement = document.createElement('a')
                    var href = window.URL.createObjectURL(blob)
                    downloadElement.href = href
                    downloadElement.download = new Date().getTime() + '.xlsx'
                    document.body.appendChild(downloadElement)
                    downloadElement.click()
                    document.body.removeChild(downloadElement)
                    window.URL.revokeObjectURL(href)
                }
            },
            formSubmit(url,data){

                sessionStorage.getItem('token')
                var form1 = document.createElement('form');
                document.body.appendChild(form1);
                for(var key in data){
                    var input = document.createElement('input');
                    input.name = key;
                    input.value = data[key];
                    form1.appendChild(input)
                }
                form1.method = 'POST';
                form1.enctype = 'multipart/form-data';
                form1.action = url;
                console.log(url)
                console.log(data)
                console.log(form1)
                // form1.submit();
                // document.body.removeChild(form1)
            },
            handleExceed(files, fileList) {
                console.log(fileList)
            },
            handlePictureCardPreview(file) {
                console.log(file)
                this.dialogImageUrl = file.url;
                this.dialogVisibless = true;
            },
            phone(obj,res,file) {
                var obj4 = {}
                console.log(this.books2)
                this.$set(obj4,'name','新增收据');
                this.$set(obj4,'url',res.data[0]);
                this.handlePic = []
                this.handlePic.push(obj4);
                obj.data['attach'] = res.data[0]

                var that = this;
                setTimeout(function(){
                    that.books2[obj.index]['img'] = []
                    that.books2[obj.index]['img'].push(obj4)
                },100)
                console.log(this.books2)
                this.$axios({
                    url: this.getAjax + '/admin/property/updatePayList',
                    method: "post",
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Token':sessionStorage.getItem('token')
                    },
                    data:this.books2
                }).then(res => {
                })
                // admin/property/updatePayList
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
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
            },
            // 付款状态
            fkzt(data){
                this.skvisible = true;
                console.log(data.id)
                var that = this;
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
                        this.Amount = 0;
                    that.books2 = params.propertyPayTypeList
                        for(var i=0;i<that.books2.length;i++){
                            var obj4 = {}
                            that.$set(obj4,'name','第'+(i+1)+'笔收据');
                            that.$set(obj4,'url',that.books2[i].attach);
                            var arr4 = []
                            arr4.push(obj4)
                            that.books2[i]['img'] = arr4
                            this.Amount += parseFloat(that.books2[i].rentAmount)
                        }
                        console.log(that.books2)
                }
            })
            },
            // 资产详情
            zcdetail(data){
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
            // 获取资产列表
            zclist(data){
                this.zcvisible = true;
                var that = this;
                this.$axios({
                    url: this.getAjax + '/admin/meansAdmin/findListByCode?assetCode='+data.assetCode,
                    method: "get",
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Token':sessionStorage.getItem('token')
                    },
                    data:{}
                }).then(res => {
                    if(res.data.code == '1001'){
                        that.tablezclist = res.data.data
                }else{
                    this.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                }
            })
            },
            // 删除
            del(data){
                var that = this;
                console.log(data.id)
                this.$confirm('确认删除该合同吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios({
                    url: this.getAjax + '/admin/property/delete',
                    method: "post",
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Token':sessionStorage.getItem('token')
                    },
                    data:{'id':data.id}
                }).then(res => {
                    if(res.data.code == '1001'){
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                        this.findList(this.user,this.pageNum,this.pageSize)
                }else{
                    this.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                }
            })

            }).catch(() => {
                    this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
            },
            newInforAdd(data){this.findList(this.user,this.pageNum,this.pageSize)},
            newInforInfo(data){this.findList(this.user,this.pageNum,this.pageSize)},
            // 查询列表
            findList(type,pageNum,pageSize){
                var that = this;
                this.toggleIndex = Math.random()
                var data = {
                    "pageNum": pageNum,
                    "pageSize": pageSize,
                    "typeItem": type
                }
                this.$axios({
                    url: this.getAjax + '/admin/property/findList',
                    method: "post",
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Token':sessionStorage.getItem('token')
                    },
                    data:data
                }).then(res => {
                    if(res.data.code == '1001'){
                    var list = res.data.data.list;
                    this.page = [];
                    this.page = res.data.data;
                    console.log(this.page)
                    this.tableData = list
                }else{
                    this.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                }
            })
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pageSize = val
                    this.findList(this.user,this.pageNum,this.pageSize)
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.pageNum = val;
                this.findList(this.user,this.pageNum,this.pageSize)
            },
            typeChange(val){
                console.log(val)
                this.toggleIndex = Math.random()
                this.user = val
                if(val ==  1){
                    this.itemtypes = 'zy'
                }else{
                    this.itemtypes = 'wz'
                }
                this.findList(val,1,10)
            },
            handleClickss(){
                var sysAuthAdmin = this.sysAuthAdmin;
                if(sysAuthAdmin == '' || sysAuthAdmin == 'zcxxlrjgx' || sysAuthAdmin == 'zcgxsp'){
                    this.$message({
                        message: '暂无权限！',
                        type: 'warning'
                    });
                }else{
                    this.dialogVisibleAdd = true
                    var type = this.user
                    this.$refs.dialogVisibleAddRef.detail(type,'zy')
                }

            },
            // 外租合同
            handleClicksswz(){
                var sysAuthAdmin = this.sysAuthAdmin;
                if(sysAuthAdmin == '' || sysAuthAdmin == 'zcxxlrjgx' || sysAuthAdmin == 'zcgxsp'){
                    this.$message({
                        message: '暂无权限！',
                        type: 'warning'
                    });
                }else{
                    this.dialogVisibleAdd = true
                    var type = this.user
                    this.$refs.dialogVisibleAddRef.detail(type,'wz')
                }

            },
            showdialogVisibleAdd(data){
                if(data === 'false'){
                    this.dialogVisibleAdd = false
                }else{
                    this.dialogVisibleAdd = true
                }
            },

            kan(data){
                this.dialogVisibleKanwy = true
                this.$refs.dialogVisibleKanwyRef.detail(data)
            },
            showdialogVisibleKan(data){
                if(data === 'false'){
                    this.dialogVisibleKanwy = false
                }else{
                    this.dialogVisibleKanwy = true
                }
            },

            info(data){
                this.dialogVisibleInfor = true
                this.$refs.dialogVisibleInforRef.detail(data,this.itemtypes)
            },
            showdialogVisibleInfor(data){
                if(data === 'false'){
                    this.dialogVisibleInfor = false
                }else{
                    this.dialogVisibleInfor = true
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            parentMethod({ name, age }) {
                console.log(this.parentMessage, name, age)
            },
            parentMethod2() {
                console.log(123)
            },
        },
        created:function () {
        },
        mounted(){
            this.findList(1,1,10);
        }
    }
</script>
<style>
    .el-input {width: 200px;}
    .el-form-item__label {font-size: 16px;color: #333;}
    .el-dialog {background-color: #f2f2f2;}
</style>
<style scoped>
    .main {padding: 20px 43px;}
    .sort {margin-right: 28px;}
    .btns>>>.el-button{background-color:rgba(122, 149, 250, 0.74);width: 58px;height:58px;padding: 0;text-align: center;line-height: 58px;
        font-size: 18px;
    }
    .btns>>>.el-menu--horizontal>.el-menu-item {color: #fff;}
    .rightS {position: relative;}
    .btns {position: absolute;top:-10px;right:-68px;}
    .btns2 {position: absolute;top:0;right:-90px;}
    .tables>>>th{padding: 0;height:80px;background: #eee;font-size: 16px;font-weight: bold;color: #333;text-align: center;}
    .tables>>>.el-table {border: 1px dotted #eee;}
    .tables>>>.el-table__row td{padding: 0;height:50px;text-align: center;color: #333;}
    .times>>>.el-form-item__label{margin-left: 0px;}
    .pagination>>>.el-pagination.is-background .btn-next, .pagination>>>.el-pagination.is-background .btn-prev, .pagination>>>.el-pagination.is-background .el-pager li{width: 48px;height:48px;text-align: center;line-height: 48px;font-size: 18px;}
    .pagination>>>.el-pagination.is-background .el-pager li:not(.disabled).active {background-color:rgba(75,116,255,.62)}
    .main>>>.el-input--mini .el-input__inner {height:48px;line-height: 48px;}
    .main>>>.el-pagination__editor.el-input .el-input__inner {height:48px;line-height: 48px;}
    .sjsc {position: absolute;top:5px;right:-25px;}
    /*.sjsc>>>.el-upload {width: 40px;height:40px;}*/
    .sjsc>>>.el-upload-list{position: absolute;top:24px;left:0;}
    /*.sjsc>>>.el-upload-list--picture-card .el-upload-list__item{right:-100px;width: 40px;height:40px;}*/
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
