<template>
    <div class="main" >
        <div v-if="userType == ''">
            <el-radio-group v-model="tabPosition3" style="margin-bottom: 30px;" @change="typeChange">
                <el-radio-button label="1">资产审批</el-radio-button>
                <el-radio-button label="2" >物业巡检审批</el-radio-button>
            </el-radio-group>
        </div>
        <!--超管-->
        <div v-if="(user == '超管' || user == '审批人') && tabPosition3 == '1'">
        <!--<div v-if="user == '审批人'">-->
            <el-row class="zzzz">
                <el-form ref="form" :lg="24">
                    <el-col  :lg="7">
                        <el-col :lg="8"><div class="topLeft">资产审批管理：</div></el-col>
                        <el-col :lg="16">
                            <el-radio-group v-model="tabPosition" style="margin-bottom: 20px;" @change="ZCtype">
                                <el-radio-button label="-1">全部</el-radio-button>
                                <el-radio-button label="1">已审批</el-radio-button>
                                <el-radio-button label="0">未审批</el-radio-button>
                            </el-radio-group>
                        </el-col>
                        <!--<el-form-item label="资产审批管理：">-->
                            <!--<el-radio-group v-model="tabPosition" style="margin-bottom: 20px;" @change="ZCtype">-->
                                <!--<el-radio-button label="-1">全部</el-radio-button>-->
                                <!--<el-radio-button label="1">已审批</el-radio-button>-->
                                <!--<el-radio-button label="0">未审批</el-radio-button>-->
                            <!--</el-radio-group>-->
                        <!--</el-form-item>-->
                    </el-col>
                    <el-col  :lg="12">
                        <el-col :lg="8"><div class="topLeft">审批类型：</div></el-col>
                        <el-col :lg="16">
                            <el-select  v-model="spoptionsval" placeholder="请选择" @change="spoptionsvals">
                                <el-option
                                        v-for="item in spoptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <!--<el-form-item label="审批类型：">-->
                            <!--<el-select  v-model="spoptionsval" placeholder="请选择" @change="spoptionsvals">-->
                                <!--<el-option-->
                                        <!--v-for="item in spoptions"-->
                                        <!--:key="item.value"-->
                                        <!--:label="item.label"-->
                                        <!--:value="item.value">-->
                                <!--</el-option>-->
                            <!--</el-select>-->
                        <!--</el-form-item>-->
                    </el-col>
                    <el-col  :lg="5">
                        <div class="btns2">
                            <!--<el-button type="danger" @click="plsp">批量审批</el-button>-->
                            <!--<el-button type="primary">导出</el-button>-->
                        </div>
                    </el-col>
                    <!--<el-col class="rightS">-->
                        <!--<div class="btns2">-->
                            <!--<el-button type="danger" @click="plsp">批量审批</el-button>-->
                            <!--<el-button type="primary">导出</el-button>-->
                        <!--</div>-->
                    <!--</el-col>-->
                </el-form>
            </el-row>
            <el-row class="tables" >
                <el-table
                        ref="multipleTable"
                        :data="tableData"
                        tooltip-effect="dark"
                        :height="heighTable"
                        :key="toggleIndex"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column  type="index" label="序号"></el-table-column>
                    <el-table-column prop="meansBook.assetCode" label="资产编号"></el-table-column>
                    <el-table-column prop="meansBook.assetUser" label="产权人"></el-table-column>
                    <el-table-column prop="tableData" label="审批类型">
                        <template slot-scope="tableData">
                            <div v-if="tableData.row.roveType == 1">资产新增</div>
                            <div v-if="tableData.row.roveType == 2">资产修改</div>
                            <div v-if="tableData.row.roveType == 3">资产删除</div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="tableData" label="提交人/单位">
                        <template slot-scope="tableData">
                            <div>123</div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="meansBook.houseAddress" label="房屋坐落"></el-table-column>
                    <el-table-column prop="tableData" label="提交时间">
                        <template slot-scope="tableData">
                            <div>{{tableData.row.createTime | dateFormat}}</div>
                        </template>

                    </el-table-column>
                    <el-table-column
                            prop="tableData"
                            label="详情"
                    >
                        <template slot-scope="tableData">
                            <el-button  @click="detail(tableData.$index,tableData.row,'sp')" type="text" size="small">详情</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column  label="审批状态">
                        <template slot-scope="tableData">
                            <div v-if="tableData.row.roveType == 1">
                                <div v-if="tableData.row.status == 0">（新增）审批中</div>
                                <div v-if="tableData.row.status == 1" style="color: #5daf34;">（新增）审批通过</div>
                                <div v-if="tableData.row.status == 2" style="color: red;">（新增）审批驳回</div>
                            </div>
                            <div v-if="tableData.row.roveType == 2">
                                <div v-if="tableData.row.status == 0">（修改）审批中</div>
                                <div v-if="tableData.row.status == 1" style="color: #5daf34;">（修改）审批通过</div>
                                <div v-if="tableData.row.status == 2" style="color: red;">（修改）审批驳回</div>
                            </div>
                            <div v-if="tableData.row.roveType == 3">
                                <div v-if="tableData.row.status == 0">（删除）审批中</div>
                                <div v-if="tableData.row.status == 1" style="color: #5daf34;">（删除）审批通过</div>
                                <div v-if="tableData.row.status == 2" style="color: red;">（删除）审批驳回</div>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                    >
                        <template slot-scope="tableData">
                            <div v-if="sysAuthAdmin == ''">
                                <div>
                                    <el-button  type="text" size="small" style="color: #999;">通过</el-button>
                                    <el-button  type="text" size="small" style="color: #999;">驳回</el-button>
                                </div>
                            </div>
                            <div v-else>
                                <div v-if="tableData.row.status == 0">
                                    <el-button  type="text" size="small" @click="zcSuccess(tableData.row)">通过</el-button>
                                    <el-button  type="text" size="small" @click="zcBack(tableData.row)">驳回</el-button>
                                </div>
                                <div v-else>
                                    <el-button  type="text" size="small" style="color: #999;">通过</el-button>
                                    <el-button  type="text" size="small" style="color: #999;">驳回</el-button>
                                </div>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>
            <el-row style="margin-top: 48px;text-align: right" class="pagination">
                <el-pagination
                        background
                        :current-page.sync="pageNum"
                        :hide-on-single-page='pageType'
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :page-size="pageSize"
                        :page-sizes="pageSizesList"
                        layout=" prev, pager, next, sizes,jumper"
                        :total="total">
                </el-pagination>
            </el-row>
            <!--<el-dialog-->
                    <!--:title="title"-->
                    <!--:visible.sync="dialogVisibleAdd"-->

                    <!--width="60%">-->
                <!--<assets-infor :type="type" ></assets-infor>-->
            <!--</el-dialog>-->
            <!--资产详情查看-->
        </div>

        <!--资产管理员-->
        <div v-if="user == '提交人'">
            <el-row>
                <el-form ref="form" :lg="24">
                    <el-col  :lg="9">
                        <el-col :lg="8"><div class="topLeft">资产审批管理：</div></el-col>
                        <el-col :lg="16">
                            <el-radio-group v-model="tabPosition2" style="margin-bottom: 30px;" @change="typeChange2">
                                <el-radio-button label="-1">全部</el-radio-button>
                                <el-radio-button label="0">审批中</el-radio-button>
                                <el-radio-button label="1">已审批</el-radio-button>
                                <el-radio-button label="2">未通过</el-radio-button>
                            </el-radio-group>
                        </el-col>
                        <!--<el-form-item label="资产审批管理：">-->
                            <!--<el-radio-group v-model="tabPosition2" style="margin-bottom: 30px;" @change="typeChange2">-->
                                <!--<el-radio-button label="-1">全部</el-radio-button>-->
                                <!--<el-radio-button label="0">审批中</el-radio-button>-->
                                <!--<el-radio-button label="1">已审批</el-radio-button>-->
                                <!--<el-radio-button label="2">未通过</el-radio-button>-->
                            <!--</el-radio-group>-->
                        <!--</el-form-item>-->
                    </el-col>
                    <el-col  :lg="10">
                        <el-col :lg="8"><div class="topLeft">审批类型：</div></el-col>
                        <el-col :lg="16">
                            <el-select  v-model="spoptionsval" placeholder="请选择" @change="spoptionsvals">
                                <el-option
                                        v-for="item in spoptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <!--<el-form-item label="审批类型：">-->
                            <!--<el-select  v-model="spoptionsval" placeholder="请选择" @change="spoptionsvals">-->
                                <!--<el-option-->
                                        <!--v-for="item in spoptions"-->
                                        <!--:key="item.value"-->
                                        <!--:label="item.label"-->
                                        <!--:value="item.value">-->
                                <!--</el-option>-->
                            <!--</el-select>-->
                        <!--</el-form-item>-->
                    </el-col>
                    <el-col  :lg="3">
                        <div class="btns2">
                            <!--<el-button type="danger">批量修改</el-button>-->
                            <!--<el-button type="primary">导出</el-button>-->
                        </div>
                    </el-col>
                </el-form>
            </el-row>
            <el-row class="tables" >
                <el-table
                        ref="multipleTable"
                        :data="tableData2"
                        tooltip-effect="dark"
                        :height="heighTable"
                        :key="toggleIndex"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column  type="index" label="序号"></el-table-column>
                    <el-table-column prop="meansBook.assetCode" label="资产编号"></el-table-column>
                    <el-table-column prop="meansBook.assetUser" label="产权人"></el-table-column>
                    <el-table-column prop="meansBook.houseAddress" label="房屋坐落"></el-table-column>
                    <el-table-column label="提交时间">
                        <template slot-scope="tableData2">
                            {{tableData2.row.createTime | dateFormat}}
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="详情"
                    >
                        <template slot-scope="tableData2">
                            <el-button  @click="detail(tableData2.$index,tableData2.row,'sp')" type="text" size="small">详情</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column prop="date6" label="审批状态">
                        <template slot-scope="tableData2">
                            <div v-if="tableData2.row.roveType === 1">
                                <div v-if="tableData2.row.status === 0">（新增）审批中</div>
                                <div v-if="tableData2.row.status === 1" style="color: #5daf34;">（新增）审批通过</div>
                                <div v-if="tableData2.row.status === 2" style="color: red;">（新增）审批驳回</div>
                            </div>
                            <div v-if="tableData2.row.roveType === 2">
                                <div v-if="tableData2.row.status === 0">（修改）审批中</div>
                                <div v-if="tableData2.row.status === 1" style="color: #5daf34;">（修改）审批通过</div>
                                <div v-if="tableData2.row.status === 2" style="color: red;">（修改）审批驳回</div>
                            </div>
                            <div v-if="tableData2.row.roveType === 3">
                                <div v-if="tableData2.row.status === 0">（删除）审批中</div>
                                <div v-if="tableData2.row.status === 1" style="color: #5daf34;">（删除）审批通过</div>
                                <div v-if="tableData2.row.status === 2" style="color: red;">（删除）审批驳回</div>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="meansBook.remark" label="备注"></el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                    >
                        <template slot-scope="tableData2">
                               <div v-if="
                               tableData2.row.status !==0

">
                                   <el-button  type="text" size="small" style="color: #999;">修改</el-button>
                                   <el-button  type="text" size="small" style="color: #999;">撤销</el-button>
                                   <el-button  type="text" size="small" style="color: #999;">催办</el-button>
                               </div>
                            <div v-else>

                                <el-button  type="text" size="small" @click="dialogUpdates(tableData2.$index,tableData2.row)">修改</el-button>
                                <el-button  type="text" size="small" @click="cexiao(tableData2.row)">撤销</el-button>
                                <el-button  type="text" size="small" @click="cui(tableData2.row)">催办</el-button>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>
            <el-row style="margin-top: 48px;text-align: right" class="pagination">
                <el-pagination
                        background
                        :current-page.sync="pageNum"
                        :hide-on-single-page='pageType'
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :page-size="pageSize"
                        :page-sizes="pageSizesList"
                        layout=" prev, pager, next, sizes,jumper"
                        :total="total">
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
        <div v-if="(user == '物业审批人' || user=='超管' )&& tabPosition3 == '2'">
        <!--<div>-->
            <el-row style="margin-top: 20px;">
                <el-form ref="form" >
                    <el-col  :lg="8">
                        <el-radio-group v-model="wytabPosition2" @change="wyChange" >
                            <el-radio-button label="-1">全部</el-radio-button>
                            <el-radio-button label="0">待审批</el-radio-button>
                            <el-radio-button label="1">处理中</el-radio-button>
                            <el-radio-button label="3">已完成</el-radio-button>
                            <el-radio-button label="2">被驳回</el-radio-button>
                        </el-radio-group>
                    </el-col>
                    <el-col  :lg="7">
                        <el-col :lg="8"><div class="topLeft">巡检时间：</div></el-col>
                        <el-col :lg="16">
                            <el-date-picker
                                     style="width: 100%;"
                                    v-model="value1"
                                    type="daterange"
                                    align="right"
                                    value-format="yyyy-MM-dd"
                                    unlink-panels
                                    range-separator="至"
                                    @change="time"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                    :picker-options="pickerOptions">
                            </el-date-picker>
                        </el-col>
                    </el-col>
                    <el-col  :lg="8">
                        <el-col :lg="4" style="opacity: 0;">
                            <div class="topLeft">土：</div>
                        </el-col>
                        <el-col :lg="6"><div class="topLeft" style="text-align: center;">问题：</div></el-col>
                        <el-col :lg="8">
                            <el-select v-model="value" multiple placeholder="请选择" @change="questions">
                                <el-option
                                        v-for="item in options2"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :lg="2" style="opacity: 0;">
                            <div class="topLeft">土：</div>
                        </el-col>
                        <el-col :lg="4">
                            <el-button type="warning" @click="xunjian">巡检打卡</el-button>
                        </el-col>
                        <!--<el-form-item label="问题类型：">-->
                            <!--<el-select v-model="value" multiple placeholder="请选择" @change="questions">-->
                                <!--<el-option-->
                                        <!--v-for="item in options2"-->
                                        <!--:key="item.value"-->
                                        <!--:label="item.label"-->
                                        <!--:value="item.value">-->
                                <!--</el-option>-->
                            <!--</el-select>-->
                        <!--</el-form-item>-->
                    </el-col>
                </el-form>
            </el-row>
            <el-row class="tables" style="margin-top: 20px;">
                <el-table
                        ref="multipleTable"
                        :data="wytableData2"
                        :height="heighTable"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column  type="index" label="序号"></el-table-column>
                    <el-table-column prop="meansBook.assetUser" label="产权人"></el-table-column>
                    <el-table-column prop="meansBook.houseAddress" label="资产坐落"></el-table-column>
                    <el-table-column prop="sysUser.name" label="巡检人/单位"></el-table-column>
                    <el-table-column prop="date4" label="巡检时间">
                        <template slot-scope="wytableData2">
                            {{wytableData2.row.createTime | dateFormat}}
                        </template>
                    </el-table-column>
                    <el-table-column prop="question" label="问题类型"></el-table-column>
                    <el-table-column
                            label="问题详情"
                    >
                        <template slot-scope="wytableData2">
                            <el-button  type="text" size="small" @click="detail2(wytableData2.row)">详情</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                    >
                        <template slot-scope="wytableData2">
                            <div v-if="sysAuthAdmin == ''">
                                <div>
                                    <el-button  type="text" size="small" style="color: #999;">通过</el-button>
                                    <el-button  type="text" size="small" style="color: #999;">驳回</el-button>
                                </div>
                            </div>
                            <div v-else>
                                <div v-if="wytableData2.row.status == 0">
                                    <el-button  type="text" size="small" @click="open('success',wytableData2.row.id)">通过</el-button>
                                    <el-button  type="text" size="small" @click="open('cancel',wytableData2.row.id)">驳回</el-button>
                                </div>
                                <div v-else>
                                    <el-button  type="text" size="small" style="color: #999;">通过</el-button>
                                    <el-button  type="text" size="small" style="color: #999;">驳回</el-button>
                                </div>
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
                        :hide-on-single-page='pageType'
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="page.pageSize"
                        layout=" prev, pager, next, sizes,jumper"
                        :total="page.total">
                </el-pagination>
            </el-row>

            <!--巡检问题详情-->
            <assets-infor-wuye :dialogKan="dialogKan"  @changeShow="showdialogKan" ref="dialogKanRef"></assets-infor-wuye>
            <mapxj :dialogXj="dialogXj"  @changeShow="showdialogXj" ref="dialogXjRef"></mapxj>
        </div>
        <!--处理人-->
        <div v-if="(user == '巡检处理人')&& tabPosition3 == '2'">
            <!--<div>-->
            <el-row style="margin-top: 20px;">
                <el-form ref="form" >
                    <el-col  :lg="7">
                        <el-col :lg="8"><div class="topLeft">巡检时间：</div></el-col>
                        <el-col :lg="16">
                            <el-date-picker
                                    style="width: 100%;"
                                    v-model="value1"
                                    type="daterange"
                                    align="right"
                                    value-format="yyyy-MM-dd"
                                    unlink-panels
                                    range-separator="至"
                                    @change="time"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                    :picker-options="pickerOptions">
                            </el-date-picker>
                        </el-col>
                    </el-col>
                    <el-col  :lg="8">
                        <el-col :lg="4" style="opacity: 0;">
                            <div class="topLeft">土：</div>
                        </el-col>
                        <el-col :lg="6"><div class="topLeft" style="text-align: center;">问题：</div></el-col>
                        <el-col :lg="8">
                            <el-select v-model="value" multiple placeholder="请选择" @change="questions">
                                <el-option
                                        v-for="item in options2"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :lg="2" style="opacity: 0;">
                            <div class="topLeft">土：</div>
                        </el-col>
                        <!--<el-form-item label="问题类型：">-->
                        <!--<el-select v-model="value" multiple placeholder="请选择" @change="questions">-->
                        <!--<el-option-->
                        <!--v-for="item in options2"-->
                        <!--:key="item.value"-->
                        <!--:label="item.label"-->
                        <!--:value="item.value">-->
                        <!--</el-option>-->
                        <!--</el-select>-->
                        <!--</el-form-item>-->
                    </el-col>
                </el-form>
            </el-row>
            <el-row class="tables" style="margin-top: 20px;">
                <el-table
                        ref="multipleTable"
                        :data="wytableData2"
                        :height="heighTable"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column  type="index" label="序号"></el-table-column>
                    <el-table-column prop="meansBook.assetUser" label="产权人"></el-table-column>
                    <el-table-column prop="meansBook.houseAddress" label="资产坐落"></el-table-column>
                    <el-table-column prop="sysUser.name" label="巡检人/单位"></el-table-column>
                    <el-table-column prop="date4" label="巡检时间">
                        <template slot-scope="wytableData2">
                            {{wytableData2.row.createTime | dateFormat}}
                        </template>
                    </el-table-column>
                    <el-table-column prop="question" label="问题类型"></el-table-column>
                    <el-table-column
                            label="问题详情"
                    >
                        <template slot-scope="wytableData2">
                            <el-button  type="text" size="small" @click="detail2(wytableData2.row)">详情</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                    >
                        <template slot-scope="wytableData2">
                            <el-button  type="text" size="small">处理</el-button>
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
                        :hide-on-single-page='pageType'
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="page.pageSize"
                        layout=" prev, pager, next, sizes,jumper"
                        :total="page.total">
                </el-pagination>
            </el-row>

            <!--巡检问题详情-->
            <assets-infor-wuye :dialogKan="dialogKan"  @changeShow="showdialogKan" ref="dialogKanRef"></assets-infor-wuye>
            <mapxj :dialogXj="dialogXj"  @changeShow="showdialogXj" ref="dialogXjRef"></mapxj>
        </div>
        <!--资产详情查看-->
        <assets-kan :AssetsKanVisible="AssetsKanVisible"  @changeShow="showAssetsKan" ref="AssetsKanRef"></assets-kan>
        <!--资产修改-->
        <assets-infor :dialogUpdate="dialogUpdate" @child-event="newInforUpdate"  @changeShow="showdialogUpdate" ref="dialogUpdateRef"></assets-infor>
    </div>
</template>

<script>
    import AssetsInfor from '@/components/assets/AssetsInfor'
    import AssetsInforManager from '@/components/information/AssetsInforManager'
    import AssetsInforWuye from '@/components/information/AssetsInforWuye'
    import AssetsKan from '@/components/assets/AssetsKan'
    import mapxj from '@/components/information/AssetsInforXj'
    export default {
        name: 'login',
        data () {
            return {
                heighTable:300,
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
                wytabPosition2:-1,
                sysAuthAdmin:sessionStorage.getItem('authStr'),
                dialogUpdate: false,
                toggleIndex:0,
                userType:sessionStorage.getItem('authStr'),
                currentPage4: 4,
                user:1,
                input2:'',
                options2: [{
                    value: '门窗锁损坏',
                    label: '门窗锁损坏'
                }, {
                    value: '房屋损坏',
                    label: '房屋损坏'
                }, {
                    value: '占用',
                    label: '占用'
                }, {
                    value: '环境卫生',
                    label: '环境卫生'
                }, {
                    value: '其他',
                    label: '其他'
                }],
                spoptions:[
                    {label:'全部',value:'-1'},{label:'审批中',value:'0'},{label:'已审批',value:'1'},{label:'未通过',value:'2'}
                ],
                spoptionsval:'',
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
                ],
                tableData2: [
                ],
                wytableData2: [
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
                dialogXj: false,
                title:'',
                type:'',
                type2:'',
                type3:'',
                tabPosition: -1,
                tabPosition2: '-1',
                tabPosition3:'1',
                total:1,
                page:'',
                pageNum:1,
                pageSize:10,
                pageType:false,
                pageSizesList: [10, 15, 20, 30, 50],
                status:-1,
                isAccount: true,
                startTime:'',
                endTime:'',
                val:''
            }
        },
        components:{
            AssetsInfor,AssetsInforManager,AssetsInforWuye,AssetsKan,mapxj
        },
        methods:{
            xunjian(){
                this.dialogXj =true;
                this.$refs.dialogXjRef.detail('123')
                },
            time(e){
                console.log(e)
                if(e){
                    this.startTime=e[0]
                    this.endTime=e[1]
                    this.wysplist(1,this.val,this.startTime,this.endTime);
                    // this.findList(1,this.val,this.rentStart,this.rentEnd);
                }else{
                    this.rentStart=''
                    this.rentEnd=''
                    this.wysplist(1,this.val,this.startTime,this.endTime);
                    // this.findList(1,this.val,this.rentStart,this.rentEnd);
                }

            },
            questions(val){
                this.val = val.toString();
                this.wysplist(1,this.val,this.startTime,this.endTime);
            },
            // 物业审批人
            wysplist(page,question,startTime,endTime){
                var that = this;
                this.toggleIndex = Math.random()
                var data ={
                    question:question,
                    pageNum:page,
                    pageSize:10,
                    status:this.wytabPosition2,
                    startTime:startTime,
                    endTime:endTime
                }
                this.$axios({
                    url: this.getAjax + '/admin/meansBookReportAdmin/findList',
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
                        var list = res.data.data.records;
                        that.wytableData2 = '';
                        that.wytableData2 = list;
                        this.page = [];
                        this.page = res.data.data;
                        that.total = res.data.data.total
                        if(that.total<=1){
                            that.pageType = false
                        }
                    }
                })
            },
            // 催办
            cui(data){
                this.$axios({
                    url: this.getAjax + '/admin/meansRoveAdmin/sth',
                    method: "post",
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Token':sessionStorage.getItem('token')
                    },
                    data:{
                        'id':data.id,
                    }
                }).then(res => {
                    this.$message({
                        type: 'success',
                        message: '已发送催办消息给管理员，请耐心等待!'
                    });
                    this.stjlist()
                })
            },
            // 提交人撤销审批
            cexiao(data){
                var that = this;
                this.$confirm('通过该项审批？', '审批提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios({
                        url: this.getAjax + '/admin/meansRoveAdmin/undo',
                        method: "post",
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8',
                            'Token':sessionStorage.getItem('token')
                        },
                        data:{
                            'id':data.id,
                        }
                    }).then(res => {
                        this.$message({
                            type: 'success',
                            message: '撤销成功!'
                        });
                        this.stjlist()
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消！'
                    });
                });
            },
            // 批量审批
            plsp(){
                var sysAuthAdmin = this.sysAuthAdmin
                if(sysAuthAdmin == ''){
                    this.$message({
                        message: '暂无权限！',
                        type: 'warning'
                    });
                }else{

                }
            },
            // 资产修改
            // dialogUpdates(index,data){
            //     this.dialogUpdate = true
            //     let param = data.id
            //     this.$refs.dialogUpdateRef.detail(param)
            // },
            newInforUpdate(data){
                this.findList();
            },
            showdialogUpdate(data){
                if(data === 'false'){
                    this.dialogUpdate = false
                }else{
                    this.dialogUpdate = true
                }
            },
            ZCtype(data){
                this.status ='';
                this.status = data;
                this.splist();
            },
            zcSuccess(data) {
                var that = this;
                this.$confirm('通过该项审批？', '审批提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios({
                    url: this.getAjax + '/admin/meansRoveAdmin/check',
                    method: "post",
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Token':sessionStorage.getItem('token')
                    },
                    data:{
                        'id':data.id,
                        'status':1,
                        "remark":""
                    }
                }).then(res => {
                    this.$message({
                    type: 'success',
                    message: '审批成功!'
                });
                this.splist();
            })
            }).catch(() => {
                    this.$message({
                    type: 'info',
                    message: '已取消审批！'
                });
            });
            },
            zcBack(data) {
                var that = this;
                this.$prompt('拒绝该项审批？请输入驳回理由！', '审批提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({ value }) => {
                    this.$axios({
                        url: this.getAjax + '/admin/meansRoveAdmin/check',
                        method: "post",
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8',
                            'Token':sessionStorage.getItem('token')
                        },
                        data:{
                            'id':data.id,
                            'status':2,
                            "remark":value
                        }
                    }).then(res => {
                        this.$message({
                            type: 'success',
                            message: '驳回成功!'
                        });
                        this.splist();
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消驳回！'
                    });
                });
            },
            // 资产详情查看
            detail(index,data,str){
                this.AssetsKanVisible = true
                let param = data.meansBook.id
                this.$refs.AssetsKanRef.detail(param,str)
            },
            // 资产修改
            dialogUpdates(index,data){
                this.dialogUpdate = true
                let param = data.meansBook.id
                this.$refs.dialogUpdateRef.detail(param)
            },
            showAssetsKan(data){
                if(data === 'false'){
                    this.AssetsKanVisible = false
                }else{
                    this.AssetsKanVisible = true
                }
            },
            // 审批人审批列表
            splist(){
                var that = this;
                this.toggleIndex = Math.random()
                var data ={
                    "pageNum": this.pageNum,
                    "pageSize": this.pageSize,
                    "status": this.status
                }
                this.$axios({
                    url: this.getAjax + '/admin/meansRoveAdmin/findListCheck',
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
                    var list = res.data.data.list;
                    that.tableData = '';
                    that.tableData = list;
                    that.total = res.data.data.total
                    if(that.total<=1){
                        that.pageType = false
                    }
                }
            })
            },
            // 提交人审批列表
            stjlist(){
                var that = this;
                this.toggleIndex = Math.random()
                var data ={
                    "pageNum": this.pageNum,
                    "pageSize": this.pageSize,
                    "status": this.status
                }
                this.$axios({
                    url: this.getAjax + '/admin/meansRoveAdmin/findListOpen',
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
                    var list = res.data.data.list;
                    that.tableData2 = '';
                    that.tableData2 = list;
                    that.total = res.data.data.total
                    if(that.total<=1){
                        that.pageType = false
                    }
                }
            })
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pageSize = val
                var userType = this.userType;
                if(userType == ''){
                    this.user = '超管';
                    this.status = -1
                    this.splist();
                }else if(userType == 'zcxxlrjgx'){
                    this.user = '提交人';
                    this.status = -1
                    this.stjlist();
                }else if(userType == 'zcgxsp'){
                    this.user = '审批人';
                    this.status = -1
                    this.splist();
                }else if(userType == 'xjsb,xjyjsp,htgx'){
                    this.user = '物业审批人';
                    this.status = -1
                    this.wysplist(1,'');
                }else if(userType == 'xjsb,htgx'){
                    this.user = '提交人';
                    this.status = -1
                    this.stjlist();
                }
            },
            handleCurrentChange(val) {
                console.log(this.userType);
                var userType = this.userType;
                this.pageNum = val
                if(userType == ''){
                    this.user = '超管';
                    this.status = -1;
                    if(this.tabPosition3 == 1){
                        this.splist();
                    }else{
                        this.wysplist(this.pageNum,'');
                    }
                }else if(userType == 'zcxxlrjgx'){
                    this.user = '提交人';
                    this.status = -1
                    this.stjlist();
                }else if(userType == 'zcgxsp'){
                    this.user = '审批人';
                    this.status = -1
                    this.splist();
                }else if(userType == 'xjsb,xjyjsp,htgx'){
                    this.user = '物业审批人';
                    this.status = -1
                    this.wysplist(1,'');
                }else if(userType == 'xjsb,htgx'){
                    this.user = '提交人';
                    this.status = -1
                    this.stjlist();
                }
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
                this.tabPosition3 = val
                this.pageNum = 1;
                if(val == 1){
                    this.splist();
                }else{
                    this.wysplist(1,this.val,this.startTime,this.endTime);
                }
            },
            wyChange(val){
                this.wytabPosition2 = val
                this.wysplist(1)
            },
            typeChange2(val){
                console.log(val)
                this.status ='';
                this.status = val
                this.stjlist()
            },
            spoptionsvals(val){
                console.log(val)
                var userType = this.userType;
                this.status = val
                if(userType == ''){
                    this.status = val
                    this.splist();
                }else if(userType == 'zcxxlrjgx'){
                    this.stjlist(val);
                }else if(userType == 'zcgxsp'){
                    this.status = val
                    this.splist();
                }else if(userType == 'xjsb,xjyjsp,htgx'){
                    this.wysplist(val,'');
                }else if(userType == 'xjsb,htgx'){
                    this.stjlist(val);
                }
                else if(userType == 'xjejsp'){
                    this.wysplist(val,'');
                }
            },
            open(type,id) {
                var arr = []
                arr.push(id)
                if(type=='success'){
                    var data = {
                        ids:arr,
                        status:1,
                        remark:''
                    }
                    console.log(data)
                    this.$axios({
                        url: this.getAjax + '/admin/meansBookReportAdmin/check',
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
                            this.$alert('审批已通过', '提示', {
                                callback: action => {
                                    this.wysplist(1)
                                }
                            });
                        }
                    })
                }
                else{

                    this.$prompt('请输入驳回理由', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                    }).then(({ value }) => {
                        var data = {
                            ids:arr,
                            status:2,
                            remark:value
                        }
                        this.$axios({
                            url: this.getAjax + '/admin/meansBookReportAdmin/check',
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
                                    type: 'success',
                                    message: '驳回成功！'
                                });
                                this.wysplist(1)
                            }
                        })
                        console.log(data)
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '取消驳回'
                        });
                    });
                }

            },

            // 巡检问题详情
            detail2(data){
                this.dialogKan = true
                this.$refs.dialogKanRef.detail(data)
            },
            showdialogKan(data){
                if(data === 'false'){
                    this.dialogKan = false
                }else{
                    this.dialogKan = true
                }
            },
            showdialogXj(data){
                console.log(data)
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
            var userType = this.userType;
            console.log(userType)
            if(userType == ''){
                console.log(1)
                this.user = '超管';
                this.status = -1
                this.splist();
                this.wysplist(1,this.val,this.startTime,this.endTime);
            }else if(userType == 'zcxxlrjgx'){
                console.log(2)
                this.user = '提交人';
                this.status = -1
                this.stjlist();
            }else if(userType == 'zcgxsp'){
                console.log(3)
                this.user = '审批人';
                this.status = -1
                this.splist();
            }else if(userType == 'xjsb,xjyjsp,htgx' || userType == 'xjsb,xjyjsp'  ){
                console.log(4)
                this.user = '物业审批人';
                this.status = -1
                this.tabPosition3 = 2

                this.wysplist(1,this.val,this.startTime,this.endTime);
            }else if(userType == 'xjsb,htgx'){
                this.user = '无权限';
                this.status = -1
                this.stjlist();
            }
            else if(userType == 'xjejsp' || userType == 'xjejsp,htgx'){
                this.user = '物业审批人';
                this.status = -1
                this.tabPosition3 = 2
                this.wysplist(1,this.val,this.startTime,this.endTime);
            }
            else if(userType == 'xjcl'){
                this.user = '巡检处理人';
                this.status = -1
                this.tabPosition3 = 2
                this.wysplist(1,this.val,this.startTime,this.endTime);
            }
        }
    }
</script>
<style>
    /*.el-input {width: 200px;}*/
    .el-form-item__label {font-size: 16px;color: #333;}
    .el-dialog {background-color: #f2f2f2;}
    .el-message-box  .el-input {width: 370px;}
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
    .btns2 {position: absolute;top:0;right:0;}
    .tables>>>th{padding: 0;height:80px;background: #eee;font-size: 16px;font-weight: bold;color: #333;text-align: center;}
    .tables>>>.el-table {border: 1px dotted #eee;}
    .tables>>>.el-table__row td{padding: 0;height:50px;text-align: center;color: #333;}
    .pagination>>>.el-pagination.is-background .btn-next, .pagination>>>.el-pagination.is-background .btn-prev, .pagination>>>.el-pagination.is-background .el-pager li{width: 48px;height:48px;text-align: center;line-height: 48px;font-size: 18px;}
    .pagination>>>.el-pagination.is-background .el-pager li:not(.disabled).active {background-color:rgba(75,116,255,.62)}
    .main>>>.el-input--mini .el-input__inner {height:48px;line-height: 48px;}
    .main>>>.el-pagination__editor.el-input .el-input__inner {height:48px;line-height: 48px;}

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
