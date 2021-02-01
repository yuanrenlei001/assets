<template>
    <div class="main">
        <el-row style="margin-left: 160px;">
            <el-col :span="22" >
                <el-row class="tables" style="margin-top: 20px;">
                    数据权限：
                    <el-table
                            border
                            ref="multipleTable"
                            :data="tableData"
                            tooltip-effect="dark"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">
                        <el-table-column  prop="date" label="权限名称"></el-table-column>
                        <el-table-column prop="name" label="权限说明"></el-table-column>
                    </el-table>
                </el-row>
                <el-row class="tables" style="margin-top: 20px;">
                    功能权限：
                    <el-table
                            ref="multipleTable"
                            :data="tableData2"
                            border
                            tooltip-effect="dark"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">
                        <el-table-column  prop="date" label="权限名称"></el-table-column>
                        <el-table-column prop="name" label="权限说明"></el-table-column>
                    </el-table>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import DateChart from '@/components/assets/DateChart'
    import AssetsInfor from '@/components/assets/AssetsInfor'
    export default {
        name: 'login',
        data () {
            return {
                checked:true,
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
                    {date: '地图', name: '查看地图',},
                    {date: '资产信息', name: '资产所有属性信息',}
                ],
                tableData2: [
                    {date: '资产信息修改', name: '可对资产属性信息进行修改',},
                    {date: '用户管理', name: '可对系统用户账号以及密码进行修改，可添加、删除用户',}
                ],
                multipleSelection: [],
                parentMessage: '我是来自父组件的消息',
                dialogVisible: false,
                dialogVisibleAdd: false,
                dialogVisibleAdd2: false,
                title:'admin',
                type:'',
                imageUrl: '',
                input:''
            }
        },
        components:{
            DateChart,AssetsInfor
        },
        methods:{
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
    .tables>>>th{padding: 0;height:80px;background: #eee;font-size: 24px;font-weight: normal;color: #333;text-align: center;}
    .tables>>>.el-table {border: 1px dotted #eee;}
    .tables>>>.el-table__row td{padding: 0;height:50px;text-align: center;color: #333;}
    .pagination>>>.el-pagination.is-background .btn-next, .pagination>>>.el-pagination.is-background .btn-prev, .pagination>>>.el-pagination.is-background .el-pager li{width: 48px;height:48px;text-align: center;line-height: 48px;font-size: 18px;}
    .pagination>>>.el-pagination.is-background .el-pager li:not(.disabled).active {background-color:rgba(75,116,255,.62)}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
