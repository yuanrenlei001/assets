<template>
    <div class="main">
        <div>
            <el-radio-group v-model="typeItem" style="margin-bottom: 30px;" @change="typeChange">
                <el-radio-button label="1">自有资产合同</el-radio-button>
                <el-radio-button label="2" >外租资产合同</el-radio-button>
            </el-radio-group>
        </div>
       <div v-if="user == 1">
           <el-row  class="tops" style="position: relative;">
               <el-form ref="form" :lg="24" >
                   <el-col  :lg="5">
                       <el-col :lg="8"><div class="topLeft">付款状态：</div></el-col>
                       <el-col :lg="16">
                           <el-select  v-model="valuefk" placeholder="请选择" @change="fk">
                               <el-option
                                       v-for="item in optionsfk"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                               </el-option>
                           </el-select>
                       </el-col>
                       <!--<el-form-item label="付款状态：">-->
                           <!--<el-select  v-model="valuefk" placeholder="请选择" @change="fk">-->
                               <!--<el-option-->
                                       <!--v-for="item in optionsfk"-->
                                       <!--:key="item.value"-->
                                       <!--:label="item.label"-->
                                       <!--:value="item.value">-->
                               <!--</el-option>-->
                           <!--</el-select>-->
                       <!--</el-form-item>-->
                   </el-col>
                   <el-col  :lg="8">
                       <el-col :lg="8"><div class="topLeft">日期：</div></el-col>
                       <el-col :lg="16">
                           <el-date-picker
                                   v-model="value2"
                                   type="daterange"
                                   align="right"
                                   value-format="yyyy-MM-dd"
                                   unlink-panels
                                   range-separator="至"
                                   @change="time"
                                   start-placeholder="开始日期"
                                   end-placeholder="结束日期"
                           >
                           </el-date-picker>
                       </el-col>
                       <!--<el-form-item label="日期：">-->
                           <!--<el-date-picker-->
                                   <!--v-model="value2"-->
                                   <!--type="daterange"-->
                                   <!--align="right"-->
                                   <!--value-format="yyyy-MM-dd"-->
                                   <!--unlink-panels-->
                                   <!--range-separator="至"-->
                                   <!--@change="time"-->
                                   <!--start-placeholder="开始日期"-->
                                   <!--end-placeholder="结束日期"-->
                                   <!--&gt;-->
                           <!--</el-date-picker>-->
                       <!--</el-form-item>-->
                   </el-col>
                   <el-col  :lg="4">
                       <el-col :lg="4" style="opacity: 0;">
                       <div class="topLeft">土：</div>
                   </el-col>
                       <el-col :lg="16">
                           <el-input placeholder="请输入合同编号" v-model="input2" clearable  @clear="searchHandle" class="input-with-select">
                               <el-button slot="append" icon="el-icon-search" @click="searchs"></el-button>
                           </el-input>
                       </el-col>
                       <!--<el-input placeholder="请输入合同编号" v-model="input2" clearable  @clear="searchHandle" class="input-with-select">-->
                           <!--<el-button slot="append" icon="el-icon-search" @click="searchs"></el-button>-->
                       <!--</el-input>-->
                   </el-col>
                   <el-col  :lg="8">
                       <div class="btns2">
                           <el-button type="success" @click="dialogVisibleShow">统计</el-button>
                           <el-button type="primary" @click="handleClickss">新增</el-button>
                           <el-button type="primary" @click="findExportTitles">导出</el-button>
                       </div>
                   </el-col>
                   <!--<el-col class="rightS">-->
                       <!--<div class="btns2">-->
                           <!--<el-button type="success" @click="dialogVisible = true">统计</el-button>-->
                           <!--<el-button  type="primary" @click="handleClickss">新增</el-button>-->
                           <!--<el-button type="primary" @click="findExportTitles">导出</el-button>-->
                       <!--</div>-->
                   <!--</el-col>-->
               </el-form>
           </el-row>
           <el-row class="tables" style="margin-top: 26px;">
               <el-table
                       ref="multipleTable"
                       :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                       tooltip-effect="dark"
                       :height="heighTable"
                       :key="toggleIndex"
                       style="width: 100%"
                       @selection-change="handleSelectionChange">
                   <el-table-column type="selection" width="55"></el-table-column>
                   <el-table-column  type="index" width="80" label="序号"></el-table-column>
                   <!--<el-table-column prop="date9" width="100" label="付款详情">-->
                       <!--<template scope="tableData">-->
                           <!--<div v-for="item in tableData.row.propertyPayTypeList">{{item.jkStatus}} ： {{item.rentAmount}}</div>-->
                       <!--</template>-->
                   <!--</el-table-column>-->
                   <el-table-column prop="pactCode" width="100" label="合同编号"></el-table-column>
                   <el-table-column prop="tenant" label="承租方"></el-table-column>
                   <el-table-column prop="contact" width="100" label="联系方式"></el-table-column>
                   <el-table-column prop="houseAddr" width="100" label="房屋坐落"></el-table-column>
                   <el-table-column prop="rentAmount" width="100" label="租金（元）"></el-table-column>
                   <el-table-column prop="fee" width="150" label="物业费（元）"></el-table-column>
                   <el-table-column prop="time" width="200" label="租约日期">
                       <template scope="tableData">
                           <span >{{tableData.row.rentStart}} - {{tableData.row.rentEnd}}</span>
                       </template>
                   </el-table-column>
                   <el-table-column prop="tradeName" label="店名"></el-table-column>
                   <el-table-column prop="formats" label="业态"></el-table-column>
                   <el-table-column prop="margin" label="保证金"></el-table-column>
                   <el-table-column prop="date9" width="100" label="付款详情">
                       <template scope="tableData">
                           <el-button  type="text" size="small" @click="fkzt(tableData.row)">详情</el-button>
                           <!--<span v-if="tableData.row.date9 === '1'" style="color:deepskyblue;">已缴纳</span>-->
                           <!--<span v-if="tableData.row.date9 === '2'" style="color:red;">已超期</span>-->
                           <!--<span v-if="tableData.row.date9 === '3'" style="color:orange;">即将到期</span>-->
                       </template>
                   </el-table-column>
                   <el-table-column label="付款状态" width="100">
                       <template slot-scope="tableData">
                           <div >{{tableData.row.flag}}</div>
                       </template>
                   </el-table-column>
                   <el-table-column label="合同详情" width="100">
                       <template slot-scope="tableData">
                           <el-button  type="text" size="small" @click="kan(tableData.row,'zy')">详情</el-button>
                       </template>
                   </el-table-column>
                   <el-table-column
                           label="资产详情" width="100"
                   >
                       <template slot-scope="tableData">
                           <el-button  type="text" size="small" @click="zclist(tableData.row)">详情</el-button>
                       </template>
                   </el-table-column>
                   <el-table-column prop="remark" label="备注"></el-table-column>
                   <el-table-column
                           fixed="right"
                           label="操作"
                           width="100"
                   >
                       <template slot-scope="tableData">
                           <div v-if="sysAuthAdmin !== '' && sysAuthAdmin !== 'zcxxlrjgx' && sysAuthAdmin !== 'zcgxsp'">
                               <el-button  type="text" size="small" @click="info(tableData.row)">修改</el-button>
                               <!--<el-button type="text" size="small" @click="del(tableData.row)">删除</el-button>-->
                           </div>
                           <div v-else>
                               <el-button  type="text" size="small" style="color: #999;">修改</el-button>
                               <!--<el-button type="text" size="small" style="color: #999;">删除</el-button>-->
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
                       :current-page="currentPage"
                       :page-sizes="[10, 20, 30, 40]"
                       :page-size="pagesize"
                       layout=" prev, pager, next, sizes,jumper"
                       :total="this.tableData.length">
               </el-pagination>
           </el-row>
       </div>
        <div v-if="user == 2">
            <el-row  class="wz">
                <el-form ref="form" :lg="24">
                    <el-col  :span="5">
                        <el-col :lg="8"><div class="topLeft">付款状态：</div></el-col>
                        <el-col :lg="16">
                            <el-select  v-model="valuefk" placeholder="请选择" @change="fk">
                                <el-option
                                        v-for="item in optionsfk"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <!--<el-form-item label="付款状态：">-->
                            <!--<el-select  v-model="valuefk" placeholder="请选择" @change="fk">-->
                                <!--<el-option-->
                                        <!--v-for="item in optionsfk"-->
                                        <!--:key="item.value"-->
                                        <!--:label="item.label"-->
                                        <!--:value="item.value">-->
                                <!--</el-option>-->
                            <!--</el-select>-->
                        <!--</el-form-item>-->
                    </el-col>
                    <el-col  :span="8">
                        <el-col :lg="8"><div class="topLeft">日期：</div></el-col>
                        <el-col :lg="16">
                            <el-date-picker
                                    v-model="value2"
                                    type="daterange"
                                    align="right"
                                    value-format="yyyy-MM-dd"
                                    unlink-panels
                                    range-separator="至"
                                    @change="time"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                            >
                            </el-date-picker>
                        </el-col>
                        <!--<el-form-item label="日期：">-->
                            <!--<el-date-picker-->
                                    <!--v-model="value2"-->
                                    <!--type="daterange"-->
                                    <!--align="right"-->
                                    <!--value-format="yyyy-MM-dd"-->
                                    <!--unlink-panels-->
                                    <!--range-separator="至"-->
                                    <!--@change="time"-->
                                    <!--start-placeholder="开始日期"-->
                                    <!--end-placeholder="结束日期"-->
                                    <!--&gt;-->
                            <!--</el-date-picker>-->
                        <!--</el-form-item>-->
                    </el-col>
                    <el-col  :span="4">
                        <el-col :lg="4" style="opacity: 0;">
                            <div class="topLeft">土：</div>
                        </el-col>
                        <el-col :span="16">
                            <el-input placeholder="请输入合同编号" clearable v-model="input2" @clear="searchHandle" class="input-with-select">
                                <el-button slot="append" icon="el-icon-search" @click="searchs"></el-button>
                            </el-input>
                        </el-col>
                    </el-col>

                    <el-col class="rightS">
                        <div class="btns2">
                            <el-button type="primary" @click="handleClicksswz">新增</el-button>
                        </div>
                    </el-col>
                </el-form>
            </el-row>
            <el-row class="tables" style="margin-top: 26px;" >
                <el-table
                        ref="multipleTable"
                        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                        :height="heighTable"
                        :key="toggleIndex"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column  type="index" label="序号"></el-table-column>
                    <el-table-column prop="pactCode" width="150" label="租进合同编号"></el-table-column>
                    <el-table-column prop="tenant" label="承租方"></el-table-column>
                    <el-table-column prop="contact" width="100" label="联系方式"></el-table-column>
                    <el-table-column prop="houseAddr" width="200" label="房屋坐落"></el-table-column>
                    <el-table-column prop="rentAmount" width="100" label="租金（元）"></el-table-column>
                    <el-table-column prop="fee" width="150" label="物业费（元）"></el-table-column>
                    <el-table-column prop="date8" width="200" label="租约日期">
                        <template scope="tableData">
                            <span >{{tableData.row.rentStart}} - {{tableData.row.rentEnd}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="tradeName"  label="店名"></el-table-column>
                    <el-table-column prop="formats"  label="业态"></el-table-column>
                    <el-table-column prop="margin"  width="150" label="保证金（元）"></el-table-column>
                    <el-table-column prop="tableData" width="100" label="付款详情">
                        <template scope="tableData">
                            <el-button  type="text" size="small" @click="fkzt(tableData.row)">详情</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="合同详情" width="100"
                    >
                        <template slot-scope="tableData">
                            <el-button  type="text" size="small" @click="kan(tableData.row,'wz')">详情</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column prop="contStatus" width="100" label="合同状态">
                        <template slot-scope="tableData">
                            <div >{{tableData.row.flag}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="remark" label="备注"></el-table-column>
                    <el-table-column
                            label="操作" width="100"
                    >
                        <template slot-scope="tableData">
                            <div v-if="sysAuthAdmin !== '' && sysAuthAdmin !== 'zcxxlrjgx' && sysAuthAdmin !== 'zcgxsp'">
                                <el-button  type="text" size="small" @click="info(tableData.row)">修改</el-button>
                                <!--<el-button type="text" size="small" @click="del(tableData.row)">删除</el-button>-->
                            </div>
                            <div v-else>
                                <el-button  type="text" size="small" style="color: #999;">修改</el-button>
                                <!--<el-button type="text" size="small" style="color: #999;">删除</el-button>-->
                            </div>
                        </template>

                    </el-table-column>
                    <el-table-column
                            label="历史出租合同" width="150"
                    >
                        <template slot-scope="tableData">
                            <el-button  type="text" size="small" @click="ZCkan(tableData.row.id)">详情</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>
            <el-row style="margin-top: 48px;text-align: right" class="pagination">
                <el-pagination
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="pagesize"
                        layout=" prev, pager, next, sizes,jumper"
                        :total="this.tableData.length">
                </el-pagination>
            </el-row>
        </div>
        <el-dialog
                :visible.sync="dialogVisible"
                width="880px">
            <date-chart @childEvent="parentMethod" :msg="dataChar"></date-chart>
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
                                <el-input style="margin-left: 50px;width: 80%;" v-model="item.dateStr" placeholder="请输入内容" disabled></el-input>
                            </el-col>
                            <el-col :span="10" style="position: relative">
                                <el-input v-model="item.rentAmount" style="width: 70%;" placeholder="请输入内容" disabled></el-input>
                                <div class="sjsc">
                                    <el-upload
                                            class="upload-demo"
                                            action="http://61.153.180.66:9098/file/attachment/upload?type=asset"
                                            :on-success="phone.bind(null, {'index':index,'data':item})"
                                            :on-preview="handlePreview.bind(null, {'index':index,'data':item})"
                                            multiple
                                            :limit="1"
                                            :file-list="item.img"
                                            :class="{hide:showUpload}"
                                            :on-remove="handleRemove.bind(null, {'index':index,'data':item})">
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

        <!--租出合同列表-->
        <el-dialog
                :visible.sync="dialogVisibleZC"
                title="租出合同列表"
                @close="handleCloseZJ"
                width="90%">
            <el-row>
                <el-col >
                        <el-button type="primary" @click="handleClickssZJ">新增</el-button>
                </el-col>
            </el-row>
            <el-row class="tables" style="margin-top: 26px;" >
                <el-table
                        ref="multipleTable"
                        :data="tableData33"
                        :height="heighTable"
                        :key="toggleIndex"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column  type="index" label="序号"></el-table-column>
                    <el-table-column prop="pactCode" width="150" label="租出合同编号"></el-table-column>
                    <el-table-column prop="tenant" label="承租方"></el-table-column>
                    <el-table-column prop="contact" width="100" label="联系方式"></el-table-column>
                    <el-table-column prop="rentAmount" width="100" label="租金（元）"></el-table-column>
                    <el-table-column prop="fee" width="150" label="物业费（元）"></el-table-column>
                    <el-table-column prop="date8" width="200" label="租约日期">
                        <template scope="tableData">
                            <span >{{tableData.row.rentStart}} - {{tableData.row.rentEnd}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="tableData" width="100" label="付款详情">
                        <template scope="tableData">
                            <el-button  type="text" size="small" @click="fkzt(tableData.row)">详情</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="合同详情" width="100"
                    >
                        <template slot-scope="tableData">
                            <el-button  type="text" size="small" @click="kan(tableData.row,'wz')">详情</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column prop="contStatus" width="100" label="合同状态">
                        <template slot-scope="tableData">
                            <div >{{tableData.row.flag}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="remark" label="备注"></el-table-column>
                    <el-table-column
                            label="操作" width="100"
                    >
                        <template slot-scope="tableData">
                            <div v-if="sysAuthAdmin !== '' && sysAuthAdmin !== 'zcxxlrjgx' && sysAuthAdmin !== 'zcgxsp'">
                                <el-button  type="text" size="small" @click="info(tableData.row)">修改</el-button>
                                <!--<el-button type="text" size="small" @click="del(tableData.row)">删除</el-button>-->
                            </div>
                            <div v-else>
                                <el-button  type="text" size="small" style="color: #999;">修改</el-button>
                                <!--<el-button type="text" size="small" style="color: #999;">删除</el-button>-->
                            </div>
                        </template>

                    </el-table-column>
                </el-table>
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
                dialogVisibleZC:false,
                dataChar:'',
                heighTable:300,
                pagesize:10,
                Amount:0,
                currentPage:1,
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
                valuefk:'',
                optionsfk: [
                     {
                        value: '全部',
                        label: '全部'
                    },
                    {
                        value: '即将到期',
                        label: '即将到期'
                    }, {
                        value: '已缴纳',
                        label: '已缴纳'
                    }, {
                        value: '已超期',
                        label: '已超期'
                    }
                ],
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
                tableData33: [],
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
                rentStart:'',
                rentEnd:'',
                val:'全部',
                pactCode:''
            }
        },
        components:{
            DateChart,AssetsInfor,AssetsAdd,AssetsKan,AssetsKans
        },
        methods:{
            handleCloseZJ(){
                this.itemtypes = 'wz'
            },
            ZCkan(id,flag){
                var sysAuthAdmin = this.sysAuthAdmin;
                if(sysAuthAdmin == '' || sysAuthAdmin == 'zcxxlrjgx' || sysAuthAdmin == 'zcgxsp'  || sysAuthAdmin == 'xjcl' || sysAuthAdmin == 'xjyjsp'){
                    this.$message({
                        message: '暂无权限！',
                        type: 'warning'
                    });
                }else{
                    if(flag !== false){
                        this.dialogVisibleZC = true;
                    }else{
                        console.log(flag)
                    }

                    this.ZJid = id;
                    var that = this;
                    var rentStart = rentStart;
                    var rentEnd = rentEnd;
                    this.itemtypes = 'zj'
                    this.toggleIndex = Math.random()
                    var data = {
                        "rentStart":'',
                        "rentEnd":'',
                        "typeItem": 2,
                        pactCode:this.pactCode,
                        "pid": id
                    }
                    this.$axios({
                        url: this.getAjax + '/admin/property/findList',
                        method: "post",
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8',
                            'Token':sessionStorage.getItem('token')
                        },
                        data:data
                    })
                        .then(res => {
                            if(res.data.code == '1001'){
                                var list = res.data.data.list;
                                this.page = [];
                                this.page = res.data.data;
                                var dataList = res.data.data.list;
                                var arr = [];
                                for(var i=0;i<list.length;i++){
                                    for(var j=0;j<list[i].propertyPayTypeList.length;j++){
                                        var datas = list[i].propertyPayTypeList[j];
                                        var time = list[i].propertyPayTypeList[j].dateStr?list[i].propertyPayTypeList[j].dateStr:'2021-01-28';
                                        var img = list[i].propertyPayTypeList[j].attach==''?null:list[i].propertyPayTypeList[j].attach;
                                        var strtime = time.replace("/-/g", "/");//时间转换
                                        var date1=new Date(strtime);
                                        var date2=new Date();
                                        if(date1<date2 && img){
                                            list[i].propertyPayTypeList[j]['jkStatus'] ='已缴纳'
                                        }
                                        else if(date1<date2 && (img==null)){
                                            list[i].propertyPayTypeList[j]['jkStatus'] ='已超期'
                                        }
                                        else{
                                            var date = new Date();
                                            var seperator1 = "-";
                                            var year = date.getFullYear();
                                            var month = date.getMonth() + 1;
                                            var strDate = date.getDate();
                                            if (month >= 1 && month <= 9) {
                                                month = "0" + month;
                                            }
                                            if (strDate >= 0 && strDate <= 9) {
                                                strDate = "0" + strDate;
                                            }
                                            var currentdate = year + seperator1 + month + seperator1 + strDate;
                                            var arr1 = currentdate.split('-');
                                            var arr2 = time.split('-');
                                            arr1[1] = parseInt(arr1[1]);
                                            arr1[2] = parseInt(arr1[2]);
                                            arr2[1] = parseInt(arr2[1]);
                                            arr2[2] = parseInt(arr2[2]);
                                            var flag = true;
                                            var type = '即将到期'
                                            if(arr1[0] == arr2[0]){//同年
                                                if(arr2[1]-arr1[1] > 3){ //月间隔超过3个月
                                                    flag = false;
                                                    list[i].propertyPayTypeList[j]['jkStatus'] ='未到期'
                                                }else if(arr2[1]-arr1[1] == 3){ //月相隔3个月，比较日
                                                    if(arr2[2] > arr1[2]){ //结束日期的日大于开始日期的日
                                                        flag = false;
                                                        list[i].propertyPayTypeList[j]['jkStatus'] ='未到期'
                                                    }else{
                                                        list[i].propertyPayTypeList[j]['jkStatus'] ='即将到期'
                                                    }
                                                }else{
                                                    list[i].propertyPayTypeList[j]['jkStatus'] ='即将到期'
                                                }
                                            }else{ //不同年
                                                if(arr2[0] - arr1[0] > 1){
                                                    list[i].propertyPayTypeList[j]['jkStatus'] ='未到期'
                                                    flag = false;
                                                }else if(arr2[0] - arr1[0] == 1){
                                                    if(arr1[1] < 10){ //开始年的月份小于10时，不需要跨年
                                                        flag = false;
                                                        list[i].propertyPayTypeList[j]['jkStatus'] ='未到期'
                                                    }else if(arr1[1]+3-arr2[1] < 12){ //月相隔大于3个月
                                                        flag = false;
                                                        list[i].propertyPayTypeList[j]['jkStatus'] ='未到期'
                                                    }else if(arr1[1]+3-arr2[1] == 12){ //月相隔3个月，比较日
                                                        if(arr2[2] > arr1[2]){ //结束日期的日大于开始日期的日
                                                            flag = false;
                                                            list[i].propertyPayTypeList[j]['jkStatus'] ='未到期'
                                                        }else{
                                                            list[i].propertyPayTypeList[j]['jkStatus'] ='即将到期'
                                                        }
                                                    }
                                                }
                                            }
                                            // list[i].propertyPayTypeList[j]['jkStatus'] ='未来时间'
                                        }
                                    }
                                }
                                for(var z=0;z<list.length;z++){
                                    list[z]['flag'] = '';
                                    var flag = list[z].flag,
                                        item = list[z].propertyPayTypeList;
                                    for(var y = 0; y < item.length; y++) {
                                        if(item[y].jkStatus === "已超期") {
                                            list[z].flag = '已超期'
                                        } else if(item[y].jkStatus === "已缴纳") {
                                            if(
                                                (list[z].flag.length == 0) &&
                                                (list[z].flag !== "已超期")&&(list[z].flag !== "即将到期" )
                                            ){
                                                list[z].flag = "已缴纳"
                                            }
                                        } else if(item[y].jkStatus === "即将到期") {
                                            if(  (list[z].flag != "已超期") ){
                                                list[z].flag = "即将到期"
                                            }
                                        }
                                    }
                                }
                                console.log(list)
                                if(this.val === '全部'){
                                    this.tableData33 = list
                                }else{
                                    var arr = [];
                                    list.forEach((item, i) => {
                                        if(item.flag === this.val){
                                            arr.push(item)
                                        }
                                    })
                                    this.tableData33 = arr
                                }

                            }else{
                                this.$message({
                                    message: res.data.msg,
                                    type: 'warning'
                                });
                            }
                        })
                }
            },
            dialogVisibleShow(){
                console.log(this.tableData)
                this.dialogVisible = true;
                this.dataChar = this.tableData
            },
            searchHandle(){
                this.pactCode = ''
                this.findList(this.user,this.val,this.rentStart,this.rentEnd,this.pactCode)
            },
            searchs(e){
                this.pactCode = this.input2
                this.findList(this.user,this.val,this.rentStart,this.rentEnd,this.pactCode)
            },
            time(e){
                if(e){
                    this.rentStart=e[0]
                    this.rentEnd=e[1]
                    this.findList(this.user,this.val,this.rentStart,this.rentEnd,this.pactCode)
                }else{
                    this.rentStart=''
                    this.rentEnd=''
                    this.findList(this.user,this.val,this.rentStart,this.rentEnd,this.pactCode)
                }

            },
            fk(val){
                console.log(val)
                this.val = val;
                this.currentPage = 1
                this.toggleIndex=0
                this.findList(this.user,this.val,this.rentStart,this.rentEnd,this.pactCode)
            },
            // 获取导出列表
            findExportTitles(){
                var sysAuthAdmin = this.sysAuthAdmin;
                if(sysAuthAdmin == '' || sysAuthAdmin == 'zcxxlrjgx' || sysAuthAdmin == 'zcgxsp'  || sysAuthAdmin == 'xjcl' || sysAuthAdmin == 'xjyjsp'){
                    this.$message({
                        message: '暂无权限！',
                        type: 'warning'
                    });
                }else{
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
                }

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
                window.open(file.url)
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
                    var id = that.id
                    this.$axios({
                        url: that.getAjax + '/admin/property/findDetails?id='+id,
                        method: "get",
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8',
                            'Token':sessionStorage.getItem('token')
                        },
                        data:{}
                    }).then(res => {
                        if(res.data.code == '2004'){
                            that.$message({
                                message: res.data.msg,
                                type: 'warning'
                            });
                            that.$router.push('/')
                        }else{
                            var params = res.data.data
                            this.Amount = 0;
                            that.books2 = params.propertyPayTypeList
                            for(var i=0;i<that.books2.length;i++){
                                if(this.books2[i].attach){
                                    var obj4 = {}
                                    that.$set(obj4,'name','第'+(i+1)+'笔收据');
                                    that.$set(obj4,'url',that.books2[i].attach);
                                    var arr4 = []
                                    arr4.push(obj4)
                                    that.books2[i]['img'] = arr4
                                    that.Amount += parseFloat(that.books2[i].rentAmount)
                                }
                            }
                            that.findList(that.user,that.val,that.rentStart,that.rentEnd,that.pactCode);
                            that.ZCkan(that.ZJid,false);
                            console.log(that.books2)
                        }
                    })
                })
                // admin/property/updatePayList
            },
            handleRemove(obj,res,file) {
                var index = obj.index
                var that = this;
                this.books2[index].attach = ''
                this.$axios({
                    url: this.getAjax + '/admin/property/updatePayList',
                    method: "post",
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Token':sessionStorage.getItem('token')
                    },
                    data:this.books2
                }).then(res => {
                    var id = that.id
                    this.$axios({
                        url: that.getAjax + '/admin/property/findDetails?id='+id,
                        method: "get",
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8',
                            'Token':sessionStorage.getItem('token')
                        },
                        data:{}
                    }).then(res => {
                        if(res.data.code == '2004'){
                            that.$message({
                                message: res.data.msg,
                                type: 'warning'
                            });
                            that.$router.push('/')
                        }else{
                            var params = res.data.data
                            this.Amount = 0;
                            that.books2 = params.propertyPayTypeList
                            for(var i=0;i<that.books2.length;i++){
                                if(this.books2[i].attach){
                                    var obj4 = {}
                                    that.$set(obj4,'name','第'+(i+1)+'笔收据');
                                    that.$set(obj4,'url',that.books2[i].attach);
                                    var arr4 = []
                                    arr4.push(obj4)
                                    that.books2[i]['img'] = arr4
                                    that.Amount += parseFloat(that.books2[i].rentAmount)
                                }
                            }
                            that.findList(that.user,that.val,that.rentStart,that.rentEnd,that.pactCode);
                            that.ZCkan(that.ZJid,false);
                            console.log(that.books2)
                        }
                    })
                })
            },
            handlePreview(obj,res){
                console.log(obj)
                var url = obj.data.attach;
                window.open(url)
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
                var sysAuthAdmin = this.sysAuthAdmin;
                if(sysAuthAdmin == '' || sysAuthAdmin == 'zcxxlrjgx' || sysAuthAdmin == 'zcgxsp'  || sysAuthAdmin == 'xjcl' || sysAuthAdmin == 'xjyjsp'){
                    this.$message({
                        message: '暂无权限！',
                        type: 'warning'
                    });
                }else{
                    this.skvisible = true;
                    this.id= data.id
                    var that = this;
                    this.$axios({
                        url: this.getAjax + '/admin/property/findDetails?id='+data.id,
                        method: "get",
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8',
                            'Token':sessionStorage.getItem('token')
                        },
                        data:{}
                    })
                        .then(res => {
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
                                    if(this.books2[i].attach){
                                        var obj4 = {}
                                        that.$set(obj4,'name','第'+(i+1)+'笔收据');
                                        that.$set(obj4,'url',that.books2[i].attach);
                                        var arr4 = []
                                        arr4.push(obj4)
                                        that.books2[i]['img'] = arr4
                                        this.Amount += parseFloat(that.books2[i].rentAmount)
                                    }
                                }
                                console.log(that.books2)
                            }
                        })
                }
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
                        this.findList(this.user,this.val,this.rentStart,this.rentEnd,this.assetCode)
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
            newInforAdd(data){
                console.log(this.user)
                this.findList(this.user,this.val,this.rentStart,this.rentEnd,this.pactCode)
            },
            newInforInfo(data){this.findList(this.user,this.val,this.rentStart,this.rentEnd,this.pactCode)},
            // 查询列表
            findList(type,val,rentStart,rentEnd,pactCode){
                var that = this;
                var rentStart = rentStart;
                var rentEnd = rentEnd;
                this.toggleIndex = Math.random()
                var data = {
                    "rentStart":rentStart,
                    "rentEnd":rentEnd,
                    "typeItem": type,
                    pactCode:pactCode
                }
                this.$axios({
                    url: this.getAjax + '/admin/property/findList',
                    method: "post",
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Token':sessionStorage.getItem('token')
                    },
                    data:data
                })
                    .then(res => {
                    if(res.data.code == '1001'){
                    var list = res.data.data.list;
                    this.page = [];
                    this.page = res.data.data;
                    var dataList = res.data.data.list;
                    var arr = [];
                        for(var i=0;i<list.length;i++){
                            for(var j=0;j<list[i].propertyPayTypeList.length;j++){
                                var datas = list[i].propertyPayTypeList[j];
                                var time = list[i].propertyPayTypeList[j].dateStr?list[i].propertyPayTypeList[j].dateStr:'2021-01-28';
                                var img = list[i].propertyPayTypeList[j].attach==''?null:list[i].propertyPayTypeList[j].attach;
                                var strtime = time.replace("/-/g", "/");//时间转换
                                var date1=new Date(strtime);
                                var date2=new Date();
                                if(date1<date2 && img){
                                    list[i].propertyPayTypeList[j]['jkStatus'] ='已缴纳'
                                }
                                else if(date1<date2 && (img==null)){
                                    list[i].propertyPayTypeList[j]['jkStatus'] ='已超期'
                                }
                                else{
                                    var date = new Date();
                                    var seperator1 = "-";
                                    var year = date.getFullYear();
                                    var month = date.getMonth() + 1;
                                    var strDate = date.getDate();
                                    if (month >= 1 && month <= 9) {
                                        month = "0" + month;
                                    }
                                    if (strDate >= 0 && strDate <= 9) {
                                        strDate = "0" + strDate;
                                    }
                                    var currentdate = year + seperator1 + month + seperator1 + strDate;
                                    var arr1 = currentdate.split('-');
                                    var arr2 = time.split('-');
                                    arr1[1] = parseInt(arr1[1]);
                                    arr1[2] = parseInt(arr1[2]);
                                    arr2[1] = parseInt(arr2[1]);
                                    arr2[2] = parseInt(arr2[2]);
                                    var flag = true;
                                    var type = '即将到期'
                                    if(arr1[0] == arr2[0]){//同年
                                        if(arr2[1]-arr1[1] > 3){ //月间隔超过3个月
                                            flag = false;
                                            list[i].propertyPayTypeList[j]['jkStatus'] ='未到期'
                                        }else if(arr2[1]-arr1[1] == 3){ //月相隔3个月，比较日
                                            if(arr2[2] > arr1[2]){ //结束日期的日大于开始日期的日
                                                flag = false;
                                                list[i].propertyPayTypeList[j]['jkStatus'] ='未到期'
                                            }else{
                                                list[i].propertyPayTypeList[j]['jkStatus'] ='即将到期'
                                            }
                                        }else{
                                            list[i].propertyPayTypeList[j]['jkStatus'] ='即将到期'
                                        }
                                    }else{ //不同年
                                        if(arr2[0] - arr1[0] > 1){
                                            list[i].propertyPayTypeList[j]['jkStatus'] ='未到期'
                                            flag = false;
                                        }else if(arr2[0] - arr1[0] == 1){
                                            if(arr1[1] < 10){ //开始年的月份小于10时，不需要跨年
                                                flag = false;
                                                list[i].propertyPayTypeList[j]['jkStatus'] ='未到期'
                                            }else if(arr1[1]+3-arr2[1] < 12){ //月相隔大于3个月
                                                flag = false;
                                                list[i].propertyPayTypeList[j]['jkStatus'] ='未到期'
                                            }else if(arr1[1]+3-arr2[1] == 12){ //月相隔3个月，比较日
                                                if(arr2[2] > arr1[2]){ //结束日期的日大于开始日期的日
                                                    flag = false;
                                                    list[i].propertyPayTypeList[j]['jkStatus'] ='未到期'
                                                }else{
                                                    list[i].propertyPayTypeList[j]['jkStatus'] ='即将到期'
                                                }
                                            }
                                        }
                                    }
                                    // list[i].propertyPayTypeList[j]['jkStatus'] ='未来时间'
                                }
                            }
                        }
                        for(var z=0;z<list.length;z++){
                            list[z]['flag'] = '';
                            var flag = list[z].flag,
                                item = list[z].propertyPayTypeList;
                            for(var y = 0; y < item.length; y++) {
                                if(item[y].jkStatus === "已超期") {
                                    list[z].flag = '已超期'
                                } else if(item[y].jkStatus === "已缴纳") {
                                    if(
                                        (list[z].flag.length == 0) &&
                                        (list[z].flag !== "已超期")&&(list[z].flag !== "即将到期" )
                                    ){
                                        list[z].flag = "已缴纳"
                                    }
                                } else if(item[y].jkStatus === "即将到期") {
                                    if(  (list[z].flag != "已超期") ){
                                        list[z].flag = "即将到期"
                                    }
                                }
                            }
                        }
                        console.log(list)
                        if(val === '全部'){
                            this.tableData = list
                        }else{
                            var arr = [];
                            list.forEach((item, i) => {
                                if(item.flag === val){
                                    arr.push(item)
                                }
                            })
                            this.tableData = arr
                        }

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
                this.pagesize = val
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.currentPage = val;
            },
            typeChange(val){
                console.log(val)
                this.currentPage = 1
                   this.toggleIndex=0
                this.value2 = ''
                this.valuefk = ''
                this.toggleIndex = Math.random()
                this.user = val
                if(val ==  1){
                    this.itemtypes = 'zy'
                }else{
                    this.itemtypes = 'wz'
                }
                this.findList(this.user,'全部','','','');
            },
            handleClickss(){
                var sysAuthAdmin = this.sysAuthAdmin;
                if(sysAuthAdmin == '' || sysAuthAdmin == 'zcxxlrjgx' || sysAuthAdmin == 'zcgxsp'  || sysAuthAdmin == 'xjcl' || sysAuthAdmin == 'xjyjsp'){
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
                if(sysAuthAdmin == '' || sysAuthAdmin == 'zcxxlrjgx' || sysAuthAdmin == 'zcgxsp'  || sysAuthAdmin == 'xjcl' || sysAuthAdmin == 'xjyjsp'){
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
            // 租进合同
            handleClickssZJ(){
                var sysAuthAdmin = this.sysAuthAdmin;
                if(sysAuthAdmin == '' || sysAuthAdmin == 'zcxxlrjgx' || sysAuthAdmin == 'zcgxsp'  || sysAuthAdmin == 'xjcl'){
                    this.$message({
                        message: '暂无权限！',
                        type: 'warning'
                    });
                }else{
                    this.dialogVisibleAdd = true
                    var type = this.user
                    this.$refs.dialogVisibleAddRef.detail(this.ZJid,'zj')
                }

            },
            showdialogVisibleAdd(data){
                if(data === 'false'){
                    this.dialogVisibleAdd = false
                }else{
                    this.dialogVisibleAdd = true
                }
            },

            kan(data,type){
                this.dialogVisibleKanwy = true
                this.$refs.dialogVisibleKanwyRef.detail(data,type)
            },
            showdialogVisibleKan(data){
                if(data === 'false'){
                    this.dialogVisibleKanwy = false
                }else{
                    this.dialogVisibleKanwy = true
                }
            },

            info(data){
                var sysAuthAdmin = this.sysAuthAdmin;
                if(sysAuthAdmin == '' || sysAuthAdmin == 'zcxxlrjgx' || sysAuthAdmin == 'zcgxsp'  || sysAuthAdmin == 'xjcl' || sysAuthAdmin == 'xjyjsp'){
                    this.$message({
                        message: '暂无权限！',
                        type: 'warning'
                    });
                }else{
                    this.dialogVisibleInfor = true;
                    this.$refs.dialogVisibleInforRef.detail(data,this.itemtypes,this.ZJid)
                }

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
            this.findList(this.user,this.val,this.rentStart,this.rentEnd,this.pactCode);
        }
    }
</script>
<style>
    /*.el-input {width: 200px;}*/
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
    .btns2 {position: absolute;top:0;right:0;}
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
    .sjsc>>>.el-icon-close-tip{color: transparent;}
    /*.sjsc>>>.el-upload-list--picture-card .el-upload-list__item{right:-100px;width: 40px;height:40px;}*/
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
