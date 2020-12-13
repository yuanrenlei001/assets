<template>
    <div class="main" >
        <div>（演示用！）
            <el-radio-group v-model="tabPosition3" style="margin-bottom: 30px;" @change="typeChange">
                <el-radio-button label="1">超管</el-radio-button>
                <el-radio-button label="2" >资管提交人</el-radio-button>
                <el-radio-button label="2" >资管提审批人</el-radio-button>
                <el-radio-button label="3" >物业管理人</el-radio-button>
            </el-radio-group>
            （演示用！）
        </div>
        <!--超管-->
        <div v-if="user == 1">
            <el-row>
                <el-form ref="form" >
                    <el-col class="sort" :span="7">
                        <el-form-item label="资产审批管理：">
                            <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
                                <el-radio-button label="top">全部</el-radio-button>
                                <el-radio-button label="right">已审批</el-radio-button>
                                <el-radio-button label="left">未审批</el-radio-button>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col class="sort" :span="12">
                        <el-form-item label="审批类型：">
                            <el-select  v-model="value" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                            <el-input style="width: 500px;"
                                      placeholder="请输入内容"
                                      prefix-icon="el-icon-search"
                                      v-model="input2">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3" class="rightS">
                        <div class="btns2">
                            <el-button type="danger">批量修改</el-button>
                            <el-button type="primary">导出</el-button>
                        </div>
                    </el-col>
                </el-form>
            </el-row>
            <el-row class="tables" >
                <el-table
                        ref="multipleTable"
                        :data="tableData"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column  prop="date1" label="序号"></el-table-column>
                    <el-table-column prop="date2" label="审批类型"></el-table-column>
                    <el-table-column prop="date3" label="提交人/单位"></el-table-column>
                    <el-table-column prop="date4" label="提交时间"></el-table-column>
                    <el-table-column
                            label="变更详情"
                    >
                        <template slot-scope="scope">
                            <el-button @click="ZCdetail" type="text" size="small">详情</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column prop="date5" label="审批人/单位"></el-table-column>
                    <el-table-column prop="date6" label="审批状态"></el-table-column>
                    <el-table-column prop="date7" label="备注"></el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                    >
                        <template slot-scope="scope">
                            <el-button  type="text" size="small">通过</el-button>
                            <el-button  type="text" size="small">驳回</el-button>
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
                        :total="400">
                </el-pagination>
            </el-row>
            <!--<el-dialog-->
                    <!--:title="title"-->
                    <!--:visible.sync="dialogVisibleAdd"-->

                    <!--width="60%">-->
                <!--<assets-infor :type="type" ></assets-infor>-->
            <!--</el-dialog>-->
            <!--资产详情查看-->
            <assets-kan :AssetsKanVisible="AssetsKanVisible"  @changeShow="showAssetsKan" ref="AssetsKanRef"></assets-kan>
        </div>

        <!--资产管理员-->
        <div v-if="user == 2">
            <el-row>
                <el-form ref="form" >
                    <el-col class="sort" :span="9">
                        <el-form-item label="资产审批管理：">
                            <el-radio-group v-model="tabPosition2" style="margin-bottom: 30px;">
                                <el-radio-button label="top">全部</el-radio-button>
                                <el-radio-button label="left">未审批</el-radio-button>
                                <el-radio-button label="left1">审批中</el-radio-button>
                                <el-radio-button label="left2">已通过</el-radio-button>
                                <el-radio-button label="left3">未通过</el-radio-button>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col class="sort" :span="10">
                        <el-form-item label="审批类型：">
                            <el-select  v-model="value" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                            <el-input style="width: 300px;"
                                      placeholder="请输入内容"
                                      prefix-icon="el-icon-search"
                                      v-model="input2">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3" class="rightS">
                        <div class="btns2">
                            <el-button type="danger">批量修改</el-button>
                            <el-button type="primary">导出</el-button>
                        </div>
                    </el-col>
                </el-form>
            </el-row>
            <el-row class="tables" >
                <el-table
                        ref="multipleTable"
                        :data="tableData2"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column  prop="date1" label="序号"></el-table-column>
                    <el-table-column prop="date2" label="审批类型"></el-table-column>
                    <el-table-column prop="date3" label="提交人/单位"></el-table-column>
                    <el-table-column prop="date4" label="提交时间"></el-table-column>
                    <el-table-column
                            label="变更详情"
                    >
                        <template slot-scope="scope">
                            <el-button @click="ZCdetail" type="text" size="small">详情</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column prop="date6" label="审批状态"></el-table-column>
                    <el-table-column prop="date7" label="备注"></el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                    >
                        <template slot-scope="scope">
                            <el-button  type="text" size="small">修改</el-button>
                            <el-button  type="text" size="small">撤销</el-button>
                            <el-button  type="text" size="small">催办</el-button>
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
                        :total="400">
                </el-pagination>
            </el-row>
            <el-dialog
                    :title="title"
                    :visible.sync="dialogVisibleAdd2"

                    width="60%">
                <assets-infor-manager :type="type" ></assets-infor-manager>
            </el-dialog>
        </div>
        <!--物业-->
        <div v-if="user == 3">
            <el-row>
                <el-form ref="form" >
                    <el-col class="sort" :span="9">
                            <el-radio-group v-model="tabPosition2" >
                                <el-radio-button label="top">全部</el-radio-button>
                                <el-radio-button label="left">未审批</el-radio-button>
                                <el-radio-button label="left1">待审批</el-radio-button>
                                <el-radio-button label="left1">处理中</el-radio-button>
                                <el-radio-button label="left2">已完成</el-radio-button>
                                <el-radio-button label="left3">被驳回</el-radio-button>
                            </el-radio-group>
                    </el-col>
                </el-form>

            </el-row>
            <el-row>
                <el-form ref="form" >
                    <el-col class="sort" :span="8">
                        <el-form-item label="巡检时间：">
                            <el-date-picker
                                    v-model="value1"
                                    type="datetimerange"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                    :default-time="['12:00:00']">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="sort" :span="10">
                        <el-form-item label="问题类型：">
                            <el-select  v-model="value" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                            <el-input style="width: 300px;"
                                      placeholder="请输入内容"
                                      prefix-icon="el-icon-search"
                                      v-model="input2">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3" class="rightS">
                        <div class="btns2">
                            <el-button type="danger">批量审批</el-button>
                            <el-button type="primary">导出</el-button>
                        </div>
                    </el-col>
                </el-form>
            </el-row>
            <el-row class="tables" style="margin-top: 20px;">
                <el-table
                        ref="multipleTable"
                        :data="tableData3"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column  prop="date1" label="序号"></el-table-column>
                    <el-table-column prop="date3" label="产权人"></el-table-column>
                    <el-table-column prop="date8" label="资产坐落"></el-table-column>
                    <el-table-column prop="date5" label="巡检人/单位"></el-table-column>
                    <el-table-column prop="date4" label="巡检时间"></el-table-column>
                    <el-table-column prop="date6" label="问题类型"></el-table-column>
                    <el-table-column
                            label="问题详情"
                    >
                        <template slot-scope="scope">
                            <el-button  type="text" size="small" @click="detail">详情</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                    >
                        <template slot-scope="scope">
                            <el-button  type="text" size="small" @click="open('success')">通过</el-button>
                            <el-button  type="text" size="small" @click="open('cancel')">驳回</el-button>
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
                        :total="400">
                </el-pagination>
            </el-row>

            <!--巡检问题详情-->
            <assets-infor-wuye :dialogKan="dialogKan"  @changeShow="showdialogKan" ref="dialogKanRef"></assets-infor-wuye>
        </div>
    </div>
</template>

<script>
    import AssetsInfor from '@/components/information/AssetsInfor'
    import AssetsInforManager from '@/components/information/AssetsInforManager'
    import AssetsInforWuye from '@/components/information/AssetsInforWuye'
    import AssetsKan from '@/components/assets/AssetsKan'
    export default {
        name: 'login',
        data () {
            return {
                currentPage4: 4,
                user:'1',
                input2:'',
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
                value: '',
                value1: '',
                tableData: [
                    {date1: '1',date2:'新增资产',date3:'沈振国',date4:'2020-05-16 14:28',date5:'超管',date6:'已审批',date7:'',date8:'LT0001'},
                    {date1: '2',date2:'信息更新',date3:'沈振国',date4:'2020-05-16 14:28',date5:'超管',date6:'待审批',date7:'',date8:'LT0001'},
                    {date1: '3',date2:'资产处置',date3:'沈振国',date4:'2020-05-16 14:28',date5:'超管',date6:'审批中',date7:'',date8:'LT0001'},
                    {date1: '4',date2:'资产维修',date3:'沈振国',date4:'2020-05-16 14:28',date5:'超管',date6:'审批中',date7:'',date8:'LT0001'},
                    {date1: '5',date2:'资产维修',date3:'沈振国',date4:'2020-05-16 14:28',date5:'超管',date6:'已审批',date7:'',date8:'LT0001'},
                    {date1: '6',date2:'资产维修',date3:'沈振国',date4:'2020-05-16 14:28',date5:'超管',date6:'审批中',date7:'',date8:'LT0001'},
                    {date1: '7',date2:'资产维修',date3:'沈振国',date4:'2020-05-16 14:28',date5:'超管',date6:'已审批',date7:'',date8:'LT0001'},
                    {date1: '8',date2:'资产维修',date3:'沈振国',date4:'2020-05-16 14:28',date5:'超管',date6:'审批中',date7:'',date8:'LT0001'},
                    {date1: '9',date2:'资产维修',date3:'沈振国',date4:'2020-05-16 14:28',date5:'超管',date6:'已审批',date7:'',date8:'LT0001'},
                    {date1: '10',date2:'资产维修',date3:'沈振国',date4:'2020-05-16 14:28',date5:'超管',date6:'已审批',date7:'',date8:'LT0001'},
                ],
                tableData2: [
                    {date1: '1',date2:'新增资产',date3:'沈振国',date4:'2020-05-16 14:28',date5:'超管',date6:'已审批',date7:'',date8:'LT0001'},
                    {date1: '2',date2:'信息更新',date3:'沈振国',date4:'2020-05-16 14:28',date5:'超管',date6:'待审批',date7:'',date8:'LT0001'},
                    {date1: '3',date2:'资产处置',date3:'沈振国',date4:'2020-05-16 14:28',date5:'超管',date6:'审批中',date7:'',date8:'LT0001'},
                    {date1: '4',date2:'资产维修',date3:'沈振国',date4:'2020-05-16 14:28',date5:'超管',date6:'审批中',date7:'',date8:'LT0001'},
                    {date1: '5',date2:'资产维修',date3:'沈振国',date4:'2020-05-16 14:28',date5:'超管',date6:'已审批',date7:'',date8:'LT0001'},
                    {date1: '6',date2:'资产维修',date3:'沈振国',date4:'2020-05-16 14:28',date5:'超管',date6:'审批中',date7:'',date8:'LT0001'},
                    {date1: '7',date2:'资产维修',date3:'沈振国',date4:'2020-05-16 14:28',date5:'超管',date6:'已审批',date7:'',date8:'LT0001'},
                    {date1: '8',date2:'资产维修',date3:'沈振国',date4:'2020-05-16 14:28',date5:'超管',date6:'审批中',date7:'',date8:'LT0001'},
                    {date1: '9',date2:'资产维修',date3:'沈振国',date4:'2020-05-16 14:28',date5:'超管',date6:'已审批',date7:'',date8:'LT0001'},
                    {date1: '10',date2:'资产维修',date3:'沈振国',date4:'2020-05-16 14:28',date5:'超管',date6:'已审批',date7:'',date8:'LT0001'},
                ],
                tableData3: [
                    {date1: '1',date2:'新增资产',date3:'沈振国',date4:'2020-05-16 14:28',date5:'浙江南浔旅游集团',date6:'类型1',date7:'',date8:'寸池潭7号'},
                    {date1: '2',date2:'信息更新',date3:'沈振国',date4:'2020-05-16 14:28',date5:'浙江南浔旅游集团',date6:'类型2',date7:'',date8:'下塘东街7弄3号'},
                    {date1: '3',date2:'资产处置',date3:'沈振国',date4:'2020-05-16 14:28',date5:'浙江南浔旅游集团',date6:'类型3',date7:'',date8:'爱勤弄11号'},
                    {date1: '4',date2:'资产维修',date3:'沈振国',date4:'2020-05-16 14:28',date5:'浙江南浔旅游集团',date6:'类型4',date7:'',date8:'爱勤弄13号'},
                    {date1: '5',date2:'资产维修',date3:'沈振国',date4:'2020-05-16 14:28',date5:'浙江南浔旅游集团',date6:'类型1',date7:'',date8:'爱勤弄15号'},
                    {date1: '6',date2:'资产维修',date3:'沈振国',date4:'2020-05-16 14:28',date5:'浙江南浔旅游集团',date6:'类型1',date7:'',date8:'爱勤弄17号'},
                    {date1: '7',date2:'资产维修',date3:'沈振国',date4:'2020-05-16 14:28',date5:'浙江南浔旅游集团',date6:'类型1',date7:'',date8:'爱勤弄18号'},
                    {date1: '8',date2:'资产维修',date3:'沈振国',date4:'2020-05-16 14:28',date5:'浙江南浔旅游集团',date6:'类型1',date7:'',date8:'爱勤弄22号'},
                    {date1: '9',date2:'资产维修',date3:'沈振国',date4:'2020-05-16 14:28',date5:'浙江南浔旅游集团',date6:'类型1',date7:'',date8:'爱勤弄12号'},
                    {date1: '10',date2:'资产维修',date3:'沈振国',date4:'2020-05-16 14:28',date5:'浙江南浔旅游集团',date6:'类型1',date7:'',date8:'爱勤弄8号'},
                ],
                multipleSelection: [],
                parentMessage: '我是来自父组件的消息',
                dialogVisible: false,
                dialogVisibleAdd: false,
                dialogVisibleAdd2: false,
                dialogVisibleAdd3: false,
                AssetsKanVisible: false,
                dialogKan: false,
                title:'',
                type:'',
                type2:'',
                type3:'',
                tabPosition: 'left',
                tabPosition2: 'left',
                tabPosition3:'1'
            }
        },
        components:{
            AssetsInfor,AssetsInforManager,AssetsInforWuye,AssetsKan
        },
        methods:{
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            ZCdetail(){
                this.AssetsKanVisible = true
            },
            showAssetsKan(data){
                if(data === 'false'){
                    this.AssetsKanVisible = false
                }else{
                    this.AssetsKanVisible = true
                }
            },
            typeChange(val){
                console.log(val)
                this.user = val
            },
            open(type) {
                console.log(type)
                if(type=='success'){
                    this.$alert('审批已通过', '提示', {
                        callback: action => {
                        }
                    });
                }else{
                    this.$alert('审批已驳回', '提示', {
                        callback: action => {
                        }
                    });
                }

            },

            // 巡检问题详情
            detail(){
                this.dialogKan = true
            },
            showdialogKan(data){
                if(data === 'false'){
                    this.dialogKan = false
                }else{
                    this.dialogKan = true
                }
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
                    this.title = '新增资产信息'
                }else if(type == 'edit'){
                    this.title = '修改资产信息'
                }else {
                    this.title = '资产详情'
                }
                that.type = type;
                that.dialogVisibleAdd = true

            },
            handleClick2(type){
                var that = this;
                if(type == 'add'){
                    this.title = '新增资产信息'
                }else if(type == 'edit'){
                    this.title = '修改资产信息'
                }else {
                    this.title = '资产详情'
                }
                that.type2 = type;
                that.dialogVisibleAdd2 = true

            },
            handleClick3(type){
                var that = this;
                if(type == 'add'){
                    this.title = '新增资产信息'
                }else if(type == 'edit'){
                    this.title = '修改资产信息'
                }else {
                    this.title = '资产详情'
                }
                that.type3 = type;
                that.dialogVisibleAdd3 = true

            }
        },
        created:function () {
        }
    }
</script>
<style>
    .el-input {width: 200px;}
    .el-form-item__label {font-size: 16px;color: #333;}
    .el-dialog {background-color: #f2f2f2;}
</style>
<style scoped>
    .main {padding:20px 43px;}
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
    .pagination>>>.el-pagination.is-background .btn-next, .pagination>>>.el-pagination.is-background .btn-prev, .pagination>>>.el-pagination.is-background .el-pager li{width: 48px;height:48px;text-align: center;line-height: 48px;font-size: 18px;}
    .pagination>>>.el-pagination.is-background .el-pager li:not(.disabled).active {background-color:rgba(75,116,255,.62)}
    .main>>>.el-input--mini .el-input__inner {height:48px;line-height: 48px;}
    .main>>>.el-pagination__editor.el-input .el-input__inner {height:48px;line-height: 48px;}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
