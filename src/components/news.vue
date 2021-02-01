<template>
    <div class="main">
        <!--<el-row class="tables" >-->
            <!--<el-table-->
                    <!--ref="multipleTable"-->
                    <!--:data="tableData"-->
                    <!--tooltip-effect="dark"-->
                    <!--:key="toggleIndex"-->
                    <!--style="width: 100%"-->
                    <!--&gt;-->
                <!--<el-table-column  type="index" label="序号" width="100"></el-table-column>-->
                <!--<el-table-column  label="消息类型">-->
                    <!--<template slot-scope="tableData">-->
                        <!--<div v-if="tableData.row.msgType == 'zcsp'">资产审批</div>-->
                        <!--<div v-if="tableData.row.msgType == 'ht'">合同提示</div>-->
                        <!--<div v-if="tableData.row.msgType == 'xjsp'">巡检审批</div>-->
                        <!--<div v-if="tableData.row.msgType == 'xjfk'">巡检反馈</div>-->
                    <!--</template>-->
                <!--</el-table-column>-->
                <!--<el-table-column prop="data1" label="时间">-->
                    <!--<template slot-scope="tableData">-->
                        <!--{{tableData.row.createTime | dateFormat}}-->
                    <!--</template>-->
                <!--</el-table-column>-->
                <!--<el-table-column-->
                        <!--fixed="right"-->
                        <!--label="操作"-->
                <!--&gt;-->
                    <!--<template slot-scope="tableData">-->
                        <!--<div>-->
                            <!--<el-button  type="text" size="small"  @click="gourl(tableData.row)">查看</el-button>-->
                        <!--</div>-->
                    <!--</template>-->
                <!--</el-table-column>-->
            <!--</el-table>-->
        <!--</el-row>-->
    </div>
</template>

<script>
    import DateChart from '@/components/assets/DateChart'
    import AssetsInfor from '@/components/assets/AssetsInfor'
    export default {
        name: 'login',

        data () {
            return {
                input2:'',
                value1:'',
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
                title:'',
                type:'',
                imageUrl: '',
                input:'',
                toggleIndex:'',
                lists:'',
                name:'maps',
                tabs:'',
                news:false,
            }
        },
        components:{
            DateChart,AssetsInfor
        },
        methods:{
            gourl(data){
                console.log(data)
                this.$emit('update:active','property')
                this.name = 'property';
                this.tabs = false;
                this.new = false;
            },
            // 消息列表
            list(){
                var that = this;
                this.toggleIndex = Math.random()
                this.$axios({
                    url: this.getAjax + '/admin/messageAdmin/findMessage',
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
                        this.tableData = res.data.data
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
            handleClick(type){
                var that = this;
                if(type == 'add'){
                    this.title = '新建用户'
                }else if(type == 'edit'){
                    this.title = '信息编辑'
                }else {
                    this.title = '查看用户'
                }
                that.dialogVisibleAdd = true
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
