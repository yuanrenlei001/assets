<template>
    <div class="main">
        <el-row style="margin-left: 160px;">
            <el-col :span="24" class="splcs">
                <el-row class="tables" style="margin-top: 20px;">
                    <el-table
                            border
                            ref="multipleTable"
                            :data="tableData"
                            tooltip-effect="dark"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">
                        <el-table-column  type="index" label="序号" width="100"></el-table-column>
                        <el-table-column  prop="typeName" label="审批类型">
                            <template slot-scope="tableData">
                                <div>{{tableData.row.typeName}}</div>
                            </template>
                        </el-table-column>
                        <el-table-column  prop="descStr" label="流程说明"></el-table-column>
                        <el-table-column  prop="approval" label="审批流程">
                            <template slot-scope="tableData">
                                <div v-for="item in tableData.row.openRole">发起人:{{item.name}}</div>
                                <div v-for="item in tableData.row.checkRole">审批人:{{item.name}}</div>
                                <div v-for="item in tableData.row.noticeRole">抄送人:{{item.name}}</div>
                            </template>
                        </el-table-column>
                        <el-table-column  prop="check" label="使用状态">
                            <template slot-scope="tableData">
                                <el-checkbox v-model="checked" v-if="tableData.row.status == 1"></el-checkbox>
                                <el-checkbox v-model="checkedFalse" v-else></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column
                                fixed="right"
                                label="操作"
                        >
                            <template slot-scope="tableData">
                                <el-button  type="text" size="small" @click="handleClickss(tableData.row.id,tableData.row)">修改</el-button>
                                <!--<el-button @click="handleClick(tableData.$index,tableData.row,'edit')" type="text" size="small">编辑</el-button>-->
                                <!--<el-button @click="detClick(tableData.$index,tableData.row)" type="text" size="small">删除</el-button>-->
                            </template>
                        </el-table-column>
                    </el-table>
                </el-row>
            </el-col>
        </el-row>
        <el-dialog
                title="审批流程修改"
                :visible.sync="NewAdd"
                v-if="NewAdd"
                width="550px">
            <div class="count">
                <el-form ref="form" >
                    <el-row>
                        <el-col :span="24">
                            <el-form-item label="审批类型名称：">
                                <el-select  v-model="splxVal" placeholder="请选择" style="margin-left: 25px;"  @change="houseNowChange1">
                                    <el-option
                                            v-for="item in splx"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="谁发起该审批：">
                                <el-select  v-model="OpenRoleIdVal" placeholder="请选择" style="margin-left: 25px;" @change="houseNowChange2">
                                    <el-option
                                            v-for="item in RoleAdmin"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" style="position: relative;">
                            <el-form-item label="审批人：" style="margin-left: 48px;" v-for='(item,index) in books'  :key="item.id">
                                <el-select  v-model="books[index].label" placeholder="请选择" style="margin-left: 25px;" @change="houseNowChange3(item.id)">
                                    <el-option
                                            v-for="item in RoleAdmin"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-button type="primary" style="margin-left: 20px;
    position: absolute;
    bottom: 24px;
    right: 70px;" @click="newAdds">添加</el-button>
                        </el-col>
                        <el-col :span="24" style="position: relative;">
                            <el-form-item label="抄送人：" style="margin-left: 48px;" v-for='(item,index) in books2'  :key="item.id">
                                    <el-select  v-model="books2[index].id" placeholder="请选择" style="margin-left: 25px;" @change="houseNowChange4(item.id)">
                                        <el-option
                                                v-for="item in RoleAdmin"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                            </el-form-item>
                            <el-button type="primary" style="margin-left: 20px;
    position: absolute;
    bottom: 24px;
    right: 70px;" @click="newAdds2">添加</el-button>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="流程说明：" style="margin-left: 35px;">
                                <el-input
                                        style="margin-left: 23px;"
                                        placeholder="请输入内容"
                                        prefix-icon="el-icon-search"
                                        v-model="descStrInput">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" style="text-align: right;margin-top: 20px;">
                            <el-button type="primary" round  @click="success">保存</el-button>
                            <el-button type="success" round @click="cancel">取消</el-button>
                        </el-col>
                    </el-row>
                </el-form>
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
                myValue:[],
                NewAdd:false,
                checked:true,
                checkedFalse:true,
                input2:'',
                splx:[
                    {value:'1',label:'资产更新'},
                    {value:'2',label:'物业巡检审批'},
                ],
                RoleAdmin:[],
                splxVal:'',
                OpenRoleIdVal:'',
                CheckRoleIdsVal:'',
                NoticeRoleIdsVal:'',
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
                approvalId:'',
                descStrInput:'',
                books:[{id:null,label:null,value:null}],
                books2:[{id:null,label:null,value:null}],
                booksid:'',
                booksid2:'',
            }
        },
        components:{
            DateChart,AssetsInfor
        },
        methods:{
            cancel(){
                this.NewAdd = false;
            },
            handleClickss(id,data){
                this.NewAdd = true;
                this.approvalId = id;
                console.log(data)
                this.splxVal = data.typeName;
                this.descStrInput = data.descStr;
                this.OpenRoleIdVal = data.openRole[0].id;
                this.checkRoleVal = data.checkRole[0].id;
                this.noticeRoleVal = data.noticeRole[0].id;
                var checkRole = data.checkRole;
                var arr = [];
                for(var i=0;i<checkRole.length;i++){
                    var obj = {};
                    obj['id'] = i+1;
                    obj['label'] = checkRole[i].name;
                    obj['value'] = checkRole[i].id;
                    arr.push(obj)
                }
                this.books = arr
                console.log(arr)
                var noticeRole = data.noticeRole;
                var arr2 = [];
                for(var i=0;i<noticeRole.length;i++){
                    var obj = {};
                    obj['id'] = i+1;
                    obj['label'] = noticeRole[i].name;
                    obj['value'] = noticeRole[i].id;
                    arr2.push(obj)
                }
                this.books2 = arr2
            },
            // 审批流程
            list(){
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
                    that.tableData = list;
                }else if(res.data.code == '2004'){
                    this.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                    this.$router.push('/')
                }else{
                    this.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                }
            })
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
                    var arr = [];
                    for(var i=0;i<list.length;i++){
                        var obj = {};
                        obj['value'] = list[i].id
                        obj['id'] = list[i].id
                        obj['label'] = list[i].name
                        that.RoleAdmin.push(obj)
                    }
                }
            })
            },
            // 修改流程
            success(){
                var id = this.approvalId;
                var typeName = this.splxVal == 1?'资产更新':'物业巡检审批';
                var roveOpenRoleId = this.OpenRoleIdVal;
                var descStr = this.descStrInput;
                var lenBooks = this.books;
                var arr = [];
                for(var i=0;i<lenBooks.length;i++){
                    arr.push(lenBooks[i].value)
                }
                var roveCheckRoleIds = arr.join("-")
                var lenBooks2 = this.books2;
                var arr2 = [];
                for(var j=0;j<lenBooks2.length;j++){
                    arr2.push(lenBooks2[j].value)
                }
                var roveNoticeRoleIds = arr2.join("-")
                var data = {
                    'id':id,
                    'typeName':typeName,
                    'descStr':descStr,
                    'roveOpenRoleId':roveOpenRoleId,
                    'roveCheckRoleIds':roveCheckRoleIds,
                    'roveNoticeRoleIds':roveNoticeRoleIds,
                    'status':1
                }
                console.log(data)
                if(typeName == '' || descStr == '' || roveOpenRoleId == '' || roveCheckRoleIds == '' || roveNoticeRoleIds == ''){
                    this.$message({
                        message: '输入框内值不能为空！',
                        type: 'warning'
                    });
                }else{
                    console.log(data)
                    var that = this;
                    this.$axios({
                        url: this.getAjax + '/admin/approval/update',
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
                        that.list();
                        // console.log(list)
                        that.NewAdd = false;
                    }
                })
                }

            },
            houseNowChange1(val){
                this.splxVal = val
            },
            houseNowChange2(val){this.OpenRoleIdVal = val;console.log(val)},
            houseNowChange3(id){
                // this.checkRoleVal = val
                this.booksid = id
                let testColData = {}
                for(let i = 0; i< this.RoleAdmin.length; i++){
                    if(this.RoleAdmin[i].id == id){
                        testColData = this.RoleAdmin[i]
                    }
                }
                console.log(id)
                this.checkRoleVal = testColData;
                let data = this.books
                for(let i = 0; i < data.length; i++){
                    if(data[i].id == testColData.id){
                        console.log(data[i])
                        data[i].label = testColData.label;
                        data[i].value = testColData.value;
                    }
                }
                console.log(data)
            },
            houseNowChange4(id){
                this.booksid2 = id
                let testColData = {}
                for(let i = 0; i< this.RoleAdmin.length; i++){
                    if(this.RoleAdmin[i].id == id){
                        testColData = this.RoleAdmin[i]
                    }
                }
                console.log(testColData)
                let data = this.books2
                for(let i = 0; i < data.length; i++){
                    if(data[i].id == testColData.id){
                        console.log(data[i])
                        data[i].label = testColData.label;
                        data[i].value = testColData.value;
                    }
                }
            },
            newAdds(){
                this.books.push({
                    id: null,
                    value: null,
                    label:null
                });
            },
            newAdds2(){
                this.books2.push({
                    id: null,
                    value: null,
                    label:null
                });
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
            edit(){
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
        },
        mounted(){
            this.list();
            this.findList();
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
    .btns2 {position: absolute;top:0;right:-55px;}
    .tables>>>th{padding: 0;height:80px;background: #eee;font-size: 16px;font-weight: normal;color: #333;text-align: center;}
    .tables>>>.el-table {border: 1px dotted #eee;}
    .tables>>>.el-table__row td{padding: 0;height:50px;text-align: center;color: #333;}
    .pagination>>>.el-pagination.is-background .btn-next, .pagination>>>.el-pagination.is-background .btn-prev, .pagination>>>.el-pagination.is-background .el-pager li{width: 48px;height:48px;text-align: center;line-height: 48px;font-size: 18px;}
    .pagination>>>.el-pagination.is-background .el-pager li:not(.disabled).active {background-color:rgba(75,116,255,.62)}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
