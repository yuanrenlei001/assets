<template>
    <div class="main">
        <el-row style="margin-left: 160px;">
            <el-col :span="22" >
                <el-row>
                    <el-form ref="form" >
                        <el-col class="sort" :span="6" style="margin-bottom: 30px;">
                            <el-form-item label=" ">
                                <!--<el-select  v-model="value" placeholder="请选择">-->
                                    <!--<el-option-->
                                            <!--v-for="item in options"-->
                                            <!--:key="item.value"-->
                                            <!--:label="item.label"-->
                                            <!--:value="item.value">-->
                                    <!--</el-option>-->
                                <!--</el-select>-->
                            </el-form-item>
                        </el-col>
                        <!--<el-col class="sort" :span="6">-->
                            <!--<el-input-->
                                    <!--placeholder="请输入内容"-->
                                    <!--prefix-icon="el-icon-search"-->
                                    <!--v-model="input2">-->
                            <!--</el-input>-->
                        <!--</el-col>-->
                        <el-col :span="16" class="rightS">
                            <div class="btns2">
                                <el-button type="primary" @click="add">新增</el-button>
                                <el-button type="danger" @click="daochu">导出</el-button>
                            </div>
                        </el-col>
                    </el-form>
                </el-row>
                <el-row class="tables" style="margin-top: 40px;">
                    <el-table
                            ref="multipleTable"
                            :data="tableData"
                            :height="heighTable"
                            tooltip-effect="dark"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="55"></el-table-column>
                        <el-table-column  type="index" label="序号" width="100"></el-table-column>
                        <el-table-column prop="name" label="角色名称"></el-table-column>
                        <el-table-column
                                fixed="right"
                                label="操作"
                        >
                            <template slot-scope="tableData">
                                <el-button @click="edit(tableData.row)" type="text" size="small">编辑</el-button>
                                <el-button type="text" size="small" @click="delt(tableData.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-row>
                <!--<el-row style="margin-top: 48px;text-align: right" class="pagination">-->
                    <!--<el-pagination-->
                            <!--background-->
                            <!--layout="prev, pager, next"-->
                            <!--:total="1000">-->
                    <!--</el-pagination>-->
                <!--</el-row>-->
            </el-col>
        </el-row>

        <el-dialog
                title="新建角色"
                :visible.sync="dialogVisibleAdd"
                width="35%">
            <el-row>
                <el-form ref="form" style="padding-left: 50px;">
                    <el-col :span="20">
                        <el-form-item label="角色名称：">
                            <el-input v-model="name" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="20">
                        <el-form-item label="角色描述：">
                            <el-input v-model="descStr" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="20">
                        <el-form-item label="权限选择：">
                            <el-select v-model="value1" multiple placeholder="请选择" @change="sysRoleAdmin">
                                <el-option
                                        v-for="item in options"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="20" style="text-align: right;margin-top: 50px;">
                        <el-button type="primary" @click="add2">确定</el-button>
                        <el-button type="success" @click="canel">取消</el-button>
                    </el-col>
                </el-form>
            </el-row>
        </el-dialog>
        <el-dialog
                class="fixed"
                :title="title +'角色权限设置'"
                :visible.sync="dialogVisibleAdd2"
                width="35%">
            <el-row>
                <el-form ref="form" style="padding-left: 50px;">
                    <el-col :span="20">
                        <el-form-item label="角色名称：">
                            <el-input v-model="name" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="20">
                        <el-form-item label="角色描述：">
                            <el-input v-model="descStr" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="20">
                        <el-form-item label="权限选择：">
                            <el-select v-model="value1" multiple placeholder="请选择" @change="sysRoleAdmin">
                                <el-option
                                        v-for="item in options"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="20" style="text-align: right;margin-top: 50px;">
                        <el-button type="primary" @click="add3">确定</el-button>
                        <el-button type="success" @click="canel">取消</el-button>
                    </el-col>
                </el-form>
            </el-row>
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
                heighTable:300,
                checked:true,
                input2:'',
                name:'',
                value1:'',
                descStr:'',
                options: [
                ],
                value: '',
                value22: '',
                tableData: [

                ],
                multipleSelection: [],
                parentMessage: '我是来自父组件的消息',
                dialogVisible: false,
                dialogVisibleAdd: false,
                dialogVisibleAdd2: false,
                title:'admin',
                type:'',
                imageUrl: '',
                input:'',
                authDataIds:'',
                listAuthData:'',
                id:''
            }
        },
        components:{
            DateChart,AssetsInfor
        },
        methods:{
            daochu(){
                var url =this.getAjax + '/admin/sysRoleAdmin/export';
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
            delt(){
                this.$message({
                    message: '角色暂不支持删除',
                    type: 'warning'
                });
            },
            add2(){
                var data = {
                    'id':null,
                    'name':this.name,
                    'descStr':this.descStr,
                    'authDataIds':this.authDataIds,
                }
                if(this.name == ''){
                    this.$message({
                        message: '角色名称不能为空',
                        type: 'warning'
                    });
                }else if(this.descStr == ''){
                    this.$message({
                        message: '角色描述不能为空',
                        type: 'warning'
                    });
                }else if(this.authDataIds == ''){
                    this.$message({
                        message: '权限选择不能为空',
                        type: 'warning'
                    });
                }else{
                    this.$axios({
                        url: this.getAjax + '/admin/sysRoleAdmin/saveOrUpdate',
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
                        this.$message({
                            message: '成功',
                            type: 'warning'
                        });
                        this.findList();
                        this.dialogVisibleAdd = false;
                    }
                })
                }
                console.log(data)

            },
            add3(){
                var data = {
                    'id':this.id,
                    'name':this.name,
                    'descStr':this.descStr,
                    'authDataIds':this.authDataIds,
                }
                console.log(data)
                if(this.name == ''){
                    this.$message({
                        message: '角色名称不能为空',
                        type: 'warning'
                    });
                }else if(this.descStr == ''){
                    this.$message({
                        message: '角色描述不能为空',
                        type: 'warning'
                    });
                }else if(this.authDataIds == ''){
                    this.$message({
                        message: '权限选择不能为空',
                        type: 'warning'
                    });
                }else{
                    this.$axios({
                        url: this.getAjax + '/admin/sysRoleAdmin/saveOrUpdate',
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
                        this.$message({
                            message: '成功',
                            type: 'warning'
                        });
                        this.findList();
                        this.dialogVisibleAdd = false;
                        this.dialogVisibleAdd2 = false;
                    }
                })
                }
            },
            canel(){
                this.dialogVisibleAdd = false;
                this.dialogVisibleAdd2 = false;
            },
            sysRoleAdmin(data){
                this.authDataIds = data;
            },
            // 获取角色列表
            findList(){
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
                    if(res.data.code == '2004'){
                    this.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                    this.$router.push('/')
                }else{
                    var list = res.data.data;
                    this.tableData = list
                    // var list = res.data.data.listAuthData;
                    // var arr = [];
                    // for(var i=0;i<list[i].length;i++){
                    //     var obj = {};
                    //     obj['value'] = list[i].id
                    //     obj['label'] = list[i].name
                    //     arr.push(obj)
                    //     console.log(obj)
                    // }
                    // this.options = arr
                }
            })
            },
            findLists(){
                var that = this;
                this.$axios({
                    url: this.getAjax + '/admin/sysAuthAdmin/findList',
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
                    var list = res.data.data.listAuthData;
                    this.listAuthData = list;
                    // var arr = [];
                    // for(var i=0;i<list[i].length;i++){
                    //     console.log(123)
                    //     var obj = {};
                    //     obj['value'] = list[i].id
                    //     obj['label'] = list[i].name
                    //     arr.push(obj)
                    // }
                    that.options = list
                }
            })
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            // handClose(){
            //     this.dialogVisibleAdd = false;
            //     this.type = ''
            // },
            parentMethod({ name, age }) {
                console.log(this.parentMessage, name, age)
            },
            parentMethod2() {
                console.log(123)
            },
            add(){
                this.dialogVisibleAdd = true
            },
            edit(data){
                console.log(data)
                this.name = data.name;
                this.id = data.id;
                this.descStr = data.descStr;
                this.name = data.name;
                this.name = data.name;
                this.value1 = data.authDataIds;
                this.authDataIds = data.authDataIds;
                this.dialogVisibleAdd2 = true
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
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
            this.findList();
            this.findLists();
        }
    }
</script>
<style>

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
    .user>>>.el-input {width: 100%;border: transparent;}
    .user>>>.el-input__inner {padding: 0;border: transparent;}
    .user li {height:50px;line-height: 50px;}
    .user li div {float:left;border: 1px solid rgba(153,153,153,.5);font-size: 20px;}
    .userLeft {background: #eee;width: 170px;padding-right: 30px;text-align: right;}
    .userRight {width: 400px;padding-left: 10px;border-left: none;}
    .main {padding: 43px;}
    .sort {margin-right: 28px;}
    .fixed>>>.el-dialog {background: #fff;}
    .btns>>>.el-button{background-color:rgba(122, 149, 250, 0.74);width: 58px;height:58px;padding: 0;text-align: center;line-height: 58px;
        font-size: 18px;
    }
    .btns>>>.el-menu--horizontal>.el-menu-item {color: #fff;}
    .rightS {position: relative;}
    .btns {position: absolute;top:-10px;right:-68px;}
    .btns2 {position: absolute;top:0;right:0;}
    .tables>>>th{padding: 0;height:80px;background: #eee;font-size: 16px;font-weight: normal;color: #333;text-align: center;}
    .tables>>>.el-table {border: 1px dotted #eee;}
    .tables>>>.el-table__row td{padding: 0;height:50px;text-align: center;color: #333;}
    .pagination>>>.el-pagination.is-background .btn-next, .pagination>>>.el-pagination.is-background .btn-prev, .pagination>>>.el-pagination.is-background .el-pager li{width: 48px;height:48px;text-align: center;line-height: 48px;font-size: 18px;}
    .pagination>>>.el-pagination.is-background .el-pager li:not(.disabled).active {background-color:rgba(75,116,255,.62)}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
