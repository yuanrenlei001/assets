<template>
    <div class="main">
        <el-row style="margin-left: 160px;" class="yhgl">
            <el-col :span="24">
                <el-row style="margin-bottom: 26px;">
                    <el-form ref="form" :lg="24">
                        <el-col  :lg="18">
                            <el-col :lg="4"><div class="topLeft">用户角色：</div></el-col>
                            <el-col :lg="16">
                                <el-select  v-model="adminListVal" placeholder="请选择" @change="adminLis">
                                    <el-option
                                            v-for="item in adminList"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-col>
                            <!--<el-form-item label="用户角色：">-->
                                <!--<el-select  v-model="adminListVal" placeholder="请选择" @change="adminLis">-->
                                    <!--<el-option-->
                                            <!--v-for="item in adminList"-->
                                            <!--:key="item.value"-->
                                            <!--:label="item.label"-->
                                            <!--:value="item.value">-->
                                    <!--</el-option>-->
                                <!--</el-select>-->
                            <!--</el-form-item>-->
                        </el-col>
                        <el-col  :lg="6">
                            <el-col :lg="16">
                                <div class="btns2">
                                    <!--<el-button type="success" >查询</el-button>-->
                                    <el-button type="primary" @click="handleClickNew">新增</el-button>
                                    <el-button type="danger" @click="daochu">导出</el-button>
                                </div>
                            </el-col>
                            <!--<el-form-item label="用户角色：">-->
                            <!--<el-select  v-model="adminListVal" placeholder="请选择" @change="adminLis">-->
                            <!--<el-option-->
                            <!--v-for="item in adminList"-->
                            <!--:key="item.value"-->
                            <!--:label="item.label"-->
                            <!--:value="item.value">-->
                            <!--</el-option>-->
                            <!--</el-select>-->
                            <!--</el-form-item>-->
                        </el-col>
                        <!--<el-col class="sort" :span="6">-->
                            <!--<el-form-item label="所属单位：">-->
                                <!--<el-select  v-model="value" placeholder="请选择">-->
                                    <!--<el-option-->
                                            <!--v-for="item in options"-->
                                            <!--:key="item.value"-->
                                            <!--:label="item.label"-->
                                            <!--:value="item.value">-->
                                    <!--</el-option>-->
                                <!--</el-select>-->
                            <!--</el-form-item>-->
                        <!--</el-col>-->
                        <!--<el-col class="sort" :span="6">-->
                                <!--<el-input-->
                                        <!--placeholder="请输入内容"-->
                                        <!--prefix-icon="el-icon-search"-->
                                        <!--v-model="input2">-->
                                <!--</el-input>-->
                        <!--</el-col>-->

                        <!--<el-col  class="rightS">-->
                            <!--<div class="btns2">-->
                                <!--&lt;!&ndash;<el-button type="success" >查询</el-button>&ndash;&gt;-->
                                <!--<el-button type="primary" @click="handleClickNew">新增</el-button>-->
                                <!--<el-button type="danger" @click="daochu">导出</el-button>-->
                            <!--</div>-->
                        <!--</el-col>-->
                    </el-form>
                </el-row>
                <el-row class="tables" style="margin-top: 0px;">
                    <el-table
                            ref="multipleTable"
                            :data="tableData"
                            :height="heighTable"
                            tooltip-effect="dark"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="55"></el-table-column>
                        <el-table-column  prop="id" label="ID"></el-table-column>
                        <el-table-column prop="userName" label="用户账号"></el-table-column>
                        <el-table-column prop="roleName" label="用户角色">
                            <template slot-scope="tableData" >
                                <div v-for="item in adminList" v-if="item.value == tableData.row.roleId">
                                    {{item.label}}
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="name" label="姓名"></el-table-column>
                        <el-table-column prop="unit" label="所属单位"></el-table-column>
                        <el-table-column prop="mobile" label="联系电话"></el-table-column>
                        <el-table-column   label="注册时间">
                            <template slot-scope="tableData">{{tableData.row.createTime | dateFormat}}</template>
                        </el-table-column>
                        <el-table-column
                                fixed="right"
                                label="启用"
                        >
                            <template slot-scope="tableData" v-if="tableData.row.userName !=='admin'">
                                <el-switch
                                        v-model="tableData.row.status == 1?true:false"
                                        @change="active(tableData.row)"
                                        active-color="#13ce66"
                                        inactive-color="#ff4949">
                                </el-switch>
                            </template>
                        </el-table-column>
                        <el-table-column
                                fixed="right"
                                label="操作"
                        >
                            <template slot-scope="tableData">
                                <el-button @click="handleClick(tableData.$index,tableData.row,'detail')" type="text" size="small">查看</el-button>
                                <el-button @click="handleClick(tableData.$index,tableData.row,'edit')" type="text" size="small">编辑</el-button>
                                <el-button @click="detClick(tableData.$index,tableData.row)" type="text" size="small">禁用</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-row>
                <el-row style="margin-top: 48px;text-align: right" class="pagination">
                    <el-pagination
                            background
                            @current-change="currentchange"
                            :current-page="pageData.pageNum"
                            :page-size = "pageData.pageSize"
                            :total = "pageData.total"
                            layout="prev, pager, next"
                            >
                    </el-pagination>
                </el-row>
            </el-col>
        </el-row>
        <el-dialog
                :title="title"
                :visible.sync="dialogVisibleAdd"
                width="1000px">
            <div class="userss">
                <el-row>
                    <el-col :span="7" style="text-align: right;padding-right: 20px;">
                        <img :src="data.avatar" alt="" style="width: 178px;height:178px;" v-if="userType == 'detail'">
                        <div v-else>
                            <el-upload
                                    class="avatar-uploader"
                                    action="http://61.153.180.66:9098/file/attachment/upload?type=asset"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                <img v-if="urlImg" :src="urlImg" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <div style="line-height: 30px;font-size: 16px;margin-right: 70px;">{{data.name}}</div>
                        </div>
                    </el-col>
                    <el-col :span="14" class="userss">
                        <ul>
                            <li>
                                <div class="userLeft">ID</div><div class="userRight"><el-input v-model="data.id" placeholder="请输入内容" :disabled="disabled"></el-input></div>
                                <div class="userLeft">用户账户</div><div class="userRight"><el-input v-model="data.userName" placeholder="请输入内容"  :disabled="disabled"></el-input></div>
                                <div class="userLeft">密码</div><div class="userRight"><el-input v-model="data.password" placeholder="请输入内容" type="password" :disabled="disabled"></el-input></div>
                                <div class="userLeft">用户角色</div>
                                <div class="userRight">
                                    <el-select  v-model="data.roleName" placeholder="请选择" :disabled="disabled" @change="assetUseChange">
                                        <el-option
                                                v-for="item in adminList"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="userLeft">姓名</div><div class="userRight"><el-input v-model="data.name" placeholder="请输入内容" :disabled="disabled"></el-input></div>
                                <div class="userLeft">所属单位</div><div class="userRight"><el-input v-model="data.unit" placeholder="请输入内容" :disabled="disabled"></el-input></div>
                                <div class="userLeft">联系电话</div><div class="userRight"><el-input v-model="data.mobile" placeholder="请输入内容" :disabled="disabled"></el-input></div>
                                <div class="userLeft">注册时间</div><div class="userRight">
                                {{data.createTime | dateFormat}}
                                <!--<el-input v-model="data.createTime" placeholder="请输入内容" :disabled="disabled"></el-input>-->
                            </div>
                            </li>
                        </ul>
                    </el-col>
                    <el-col :span="24" style="text-align: right;margin-top: 20px;">
                        <el-button type="primary" round @click="edit">保存</el-button>
                        <el-button type="success" round @click="dialogVisibleAdd = false">取消</el-button>
                    </el-col>
                </el-row>
            </div>
        </el-dialog>
        <el-dialog
                :title="title"
                class="add"
                :visible.sync="dialogVisiblenewAdd"
                width="1000px">
            <div class="userss">
                <el-row>
                    <el-col :span="7" style="text-align: right;padding-right: 20px;">
                        <div>
                            <el-upload
                                    class="avatar-uploader"
                                    action="http://61.153.180.66:9098/file/attachment/upload?type=asset"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                <img v-if="urlImg" :src="urlImg" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <div style="line-height: 30px;font-size: 16px;margin-right: 70px;">{{name}}</div>
                        </div>
                    </el-col>
                    <el-col :span="14" class="userss">
                        <ul>
                            <li>
                                <!--<div class="userLeft">ID</div><div class="userRight"><el-input v-model="id" placeholder="请输入内容" :disabled="disabled"></el-input></div>-->
                                <div class="userLeft">用户账户</div><div class="userRight"><el-input v-model="userName" placeholder="请输入内容"  :disabled="disabled"></el-input></div>
                                <div class="userLeft">密码</div><div class="userRight">
                                <el-input  v-model="pwd" placeholder="请输入内容" :disabled="disabled"></el-input>
                            </div>
                                <div class="userLeft">用户角色</div>
                                <div class="userRight">
                                    <el-select  v-model="roleName" placeholder="请选择" :disabled="disabled" @change="assetUseChange">
                                        <el-option
                                                v-for="item in adminList"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="userLeft">姓名</div><div class="userRight"><el-input v-model="name" placeholder="请输入内容" :disabled="disabled"></el-input></div>
                                <div class="userLeft">所属单位</div><div class="userRight"><el-input v-model="unit" placeholder="请输入内容" :disabled="disabled"></el-input></div>
                                <div class="userLeft">联系电话</div><div class="userRight"><el-input v-model="mobile" placeholder="请输入内容" :disabled="disabled"></el-input></div>
                            </li>
                        </ul>
                    </el-col>
                    <el-col :span="24" style="text-align: right;margin-top: 20px;">
                        <el-button type="primary" round @click="open">新建</el-button>
                        <el-button type="success" round @click="dialogVisiblenewAdd = false">取消</el-button>
                    </el-col>
                </el-row>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import DateChart from '@/components/assets/DateChart'
    import AssetsInfor from '@/components/assets/AssetsInfor'
    export default {
        name: 'login',
        data () {
            return {
                num:0,
                showBtnDealImg:true,
                noneBtnDealImg:false,
                limitCountImg:1,   //上传图片的最大数量
                input2:'',
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
                value22: '',
                tableData: [
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-08',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-06',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-07',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }
                ],
                multipleSelection: [],
                parentMessage: '我是来自父组件的消息',
                dialogVisible: false,
                dialogVisibleAdd: false,
                dialogVisiblenewAdd: false,
                title:'',
                type:'',
                imageUrl: '',
                input:'',
                list:'',
                data:'',
                userType:'',
                disabled:false,
                id:'',
                userName:'',
                pwd:'',
                roleId:'',
                roleName:'',
                name:'',
                mobile:'',
                unit:'',
                avatar:'',
                roleIdList:'',
                adminList:'',
                adminListVal:'',
                dialogImageUrl: '',
                urlImg:'',
                pageData:'',
                pageNum:1,
                types:''

            }
        },
        components:{
            DateChart,AssetsInfor
        },
        methods:{
            daochu(){
                var url =this.getAjax + '/admin/sysUserAdmin/listExport';
                // this.formSubmit(url,this.formDatas)
                this.$axios({
                    url: url,
                    method: "post",
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Token':sessionStorage.getItem('token')
                    },
                    responseType: 'blob',
                    data:new FormData()
                }).then(res => {
                    this.download(res.data);
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
            adminLis(val){
                this.findList(1,val);
            },
            sizechange(data){
                console.log(1)
            },
            currentchange(data){
                console.log(2)
                this.findList(data)
            },
            active(data){
                console.log(data)
                var status = data.status;
                if(status == '1'){
                    this.$message({
                        message: '已经启用，无需再次开启！',
                        type: 'warning'
                    });
                }else{
                    var data = {'id':data.id}
                    var that = this;
                    this.$confirm('确定启用该用户吗?', '启用', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        that.$axios({
                            url: that.getAjax + '/admin/sysUserAdmin/recover',
                            method: "post",
                            headers: {
                                'Content-Type': 'application/json;charset=UTF-8',
                                'Token':sessionStorage.getItem('token')
                            },
                            data:data
                        }).then(res => {
                            if(res.data.code == '1001'){
                                that.$message({
                                    message: '用户启用成功',
                                    type: 'success'
                                });
                                that.findList(1);

                            }else{
                                that.$message({
                                    message: res.data.msg,
                                    type: 'warning'
                                });
                            }
                        })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消！'
                        });
                    });
                }
            },
            assetUseChange(val){this.roleId = val;console.log(val)},
            findList(pageNum,str){
                var that = this;
                console.log(pageNum)
                var data = {
                    "pageNum": pageNum,
                    "pageSize": 10,
                    "roleId":str
                }
                this.$axios({
                    url: this.getAjax + '/admin/sysUserAdmin/list',
                    method: "post",
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Token':sessionStorage.getItem('token')
                    },
                    data:data
                }).then(res => {
                    if(res.data.code == '1001'){
                        this.tableData = res.data.data.list
                    this.pageData = '';
                    this.pageData = res.data.data
                    // for(var i=0;i<res.data.data.list.length;i++){
                    //     this.tableData[i].createTime = (this.tableData[i].createTime)
                    // }
                    // console.log(this.tableData[0].createTime | dateFormat)
                }else{
                    this.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                }
            })
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
            handleClick(index,data,type){
                var that = this;
                if(type == 'edit'){
                    this.disabled = false
                    this.title = '信息编辑'
                    this.types = 'edit'
                }else {
                    this.disabled  = true
                    this.title = '查看用户'
                    this.types = 'chakan'
                }
                that.dialogVisibleAdd = true;
                this.data = data;
                this.urlImg = data.avatar
                this.userType = type;
                console.log(this.types)
            },
            handleAvatarSuccess(res, file) {
                console.log(res)
                console.log(file)
                this.urlImg = res.data[0]
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isLt2M;
            },
            handleClickNew(){
                this.dialogVisiblenewAdd = true
            },
            // 查询角色
            sysRoleAdmin(){
                var that = this;
                this.$axios({
                    url: this.getAjax + '/admin/sysRoleAdmin/findList',
                    method: "get",
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Token':sessionStorage.getItem('token')
                    },
                    data:{}
                }).then(res => {
                    if(res.data.code == '1001'){
                    var list = res.data.data;
                    var arr = [];
                    for(var i=0;i<list.length;i++){
                        var obj = {};
                        obj['value']=list[i].id
                        obj['label']=list[i].name
                        arr.push(obj)
                    }
                    var p = {'value':'','label':'全部'}
                        // unshift()
                        arr.unshift(p)
                    this.adminList = arr
                    console.log(arr)
                }else{
                    this.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                }
            })
            },
            // 新建用户
            open(){
                var data = {
                    'id':null,
                    'userName':this.userName,
                    'pwd':this.pwd,
                    'roleId':this.roleId,
                    'name':this.name,
                    'mobile':this.mobile,
                    'unit':this.unit,
                    'avatar':this.urlImg,
                }
                var that = this;
                this.$axios({
                    url: this.getAjax + '/admin/sysUserAdmin/saveOrUpdate',
                    method: "post",
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Token':sessionStorage.getItem('token')
                    },
                    data:data
                }).then(res => {
                    if(res.data.code == '1001'){
                    that.$message({
                        message: '用户新建成功',
                        type: 'success'
                    });
                    this.dialogVisiblenewAdd = false
                    that.findList(1);

                }else{
                    that.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                }
            })
            },
            // 编辑保存用户
            edit(){
                var data = {
                    'id':this.data.id,
                    'userName':this.data.userName,
                    'pwd':this.data.pwd,
                    'roleId':this.roleId,
                    'name':this.data.name,
                    'mobile':this.data.mobile,
                    'unit':this.data.unit,
                    'avatar':this.urlImg
                }
                console.log(data)
                var that = this;
                this.$axios({
                    url: this.getAjax + '/admin/sysUserAdmin/saveOrUpdate',
                    method: "post",
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Token':sessionStorage.getItem('token')
                    },
                    data:data
                }).then(res => {
                    if(res.data.code == '1001'){
                    that.$message({
                        message: '用户修改成功',
                        type: 'success'
                    });
                    this.dialogVisibleAdd = false;
                    that.findList(1);

                }else{
                    that.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                }
            })
            },
            // 删除用户
            detClick(index,data){
                console.log(data)
                var data = {'id':data.id}
                var that = this;
                this.$confirm('确定禁用该用户吗？', '禁用', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    that.$axios({
                        url: that.getAjax + '/admin/sysUserAdmin/delSysUser',
                        method: "post",
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8',
                            'Token':sessionStorage.getItem('token')
                        },
                        data:data
                    }).then(res => {
                        if(res.data.code == '1001'){
                            that.$message({
                                message: '用户禁用成功',
                                type: 'success'
                            });
                            that.findList(1);

                        }else{
                            that.$message({
                                message: res.data.msg,
                                type: 'warning'
                            });
                        }
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消！'
                    });
                });
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
                this.num = 0
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            uploadSuccess(file){
                console.log(file)
                if(file.code == 1){
                    this.num = 1
                    this.avatar = file.data[0]
                }
                console.log(this.num ==0?'UoloadSty':'disUoloadSty')
            },
        },
        created:function () {
            this.$nextTick(()=>{
                var _h = window.screen.height;
                console.log(_h)
                if(_h == '768'){
                    this.heighTable = _h*0.3
                }else if(_h == '900'){
                    this.heighTable = _h*0.4
                }
                else{
                    this.heighTable = _h*0.5
                }

            })
        },
        mounted(){
            this.findList(1,'');
            this.sysRoleAdmin();
        }
    }
</script>
<style>
    .disUoloadSty .el-upload--picture-card{
        display:none;   /* 上传按钮隐藏 */
    }
    .UoloadSty .el-upload--picture-card{
        display:block;   /* 上传按钮隐藏 */
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    .el-form-item__label {font-size: 16px;color: #333;}
</style>
<style scoped>
    .userss>>>.el-input {width: 100%;border: transparent;}
    .userss>>>.el-input__inner {padding: 0;border: transparent;}
    .userss li {height:50px;line-height: 50px;}
    .userss li div {float:left;border: 1px solid rgba(153,153,153,.5);font-size: 20px;}
    .userLeft {background: #eee;width: 170px;padding-right: 30px;text-align: right;}
    .userRight {width: 300px;padding-left: 10px;border-left: none;}
    .main {padding: 43px;}
    .sort {margin-right: 28px;}
    .btns>>>.el-button{background-color:rgba(122, 149, 250, 0.74);width: 58px;height:58px;padding: 0;text-align: center;line-height: 58px;
        font-size: 18px;
    }
    .btns>>>.el-menu--horizontal>.el-menu-item {color: #fff;}
    .rightS {position: relative;}
    .btns {position: absolute;top:-10px;right:-68px;}
    .btns2 {position: absolute;top:0;right:0;}
    .tables>>>th{padding: 0;height:80px;background: #eee;font-size: 24px;font-weight: normal;color: #333;text-align: center;}
    .tables>>>.el-table {border: 1px dotted #eee;}
    .tables>>>.el-table__row td{padding: 0;height:50px;text-align: center;color: #333;}
    .pagination>>>.el-pagination.is-background .btn-next, .pagination>>>.el-pagination.is-background .btn-prev, .pagination>>>.el-pagination.is-background .el-pager li{width: 48px;height:48px;text-align: center;line-height: 48px;font-size: 18px;}
    .pagination>>>.el-pagination.is-background .el-pager li:not(.disabled).active {background-color:rgba(75,116,255,.62)}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
