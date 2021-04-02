<template>
    <div class="main">
        <el-row  style="margin-bottom: 11px;">
            <el-form class="top" ref="form" :lg="24">
                <el-col  :lg="5">
                    <el-col :lg="8"><div class="topLeft">房屋性质：</div></el-col>
                    <el-col :lg="16">
                        <el-select  v-model="houseNatureval" placeholder="请选择" @change="houseNaturevals">
                            <el-option
                                    v-for="item in houseNature"
                                    :key="item.label"
                                    :label="item.label"
                                    :value="item.label">
                            </el-option>
                        </el-select>
                    </el-col>
                    <!--<el-form-item label="房屋性质：">-->
                        <!--<el-select  v-model="houseNatureval" placeholder="请选择" @change="houseNaturevals">-->
                            <!--<el-option-->
                                    <!--v-for="item in houseNature"-->
                                    <!--:key="item.label"-->
                                    <!--:label="item.label"-->
                                    <!--:value="item.label">-->
                            <!--</el-option>-->
                        <!--</el-select>-->
                    <!--</el-form-item>-->
                </el-col>
                <el-col  :lg="5">
                    <el-col :lg="8"><div class="topLeft">产权用途：</div></el-col>
                    <el-col :lg="16">
                        <el-select  v-model="assetUseval" placeholder="请选择" @change="assetUsevals">
                            <el-option
                                    v-for="item in assetUse"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.label">
                            </el-option>
                        </el-select>
                    </el-col>
                    <!--<el-form-item label="产权用途：">-->
                        <!--<el-select  v-model="assetUseval" placeholder="请选择" @change="assetUsevals">-->
                            <!--<el-option-->
                                    <!--v-for="item in assetUse"-->
                                    <!--:key="item.value"-->
                                    <!--:label="item.label"-->
                                    <!--:value="item.label">-->
                            <!--</el-option>-->
                        <!--</el-select>-->
                    <!--</el-form-item>-->
                </el-col>
                <el-col :lg="5">
                    <el-col :lg="8"><div class="topLeft">土地用途：</div></el-col>
                    <el-col :lg="16">
                        <el-select  v-model="landUseval" placeholder="请选择" @change="landUsevals">
                            <el-option
                                    v-for="item in landUse"
                                    :key="item.label"
                                    :label="item.label"
                                    :value="item.label">
                            </el-option>
                        </el-select>
                    </el-col>
                    <!--<el-form-item label="土地用途：">-->
                        <!--<el-select  v-model="landUseval" placeholder="请选择" @change="landUsevals">-->
                            <!--<el-option-->
                                    <!--v-for="item in landUse"-->
                                    <!--:key="item.label"-->
                                    <!--:label="item.label"-->
                                    <!--:value="item.label">-->
                            <!--</el-option>-->
                        <!--</el-select>-->
                    <!--</el-form-item>-->
                </el-col>
                <el-col :lg="6">
                    <el-col :lg="4" style="opacity: 0;">
                        <div class="topLeft">土：</div>
                    </el-col>
                    <el-col :lg="20">
                        <el-input placeholder="请输入资产编号或房屋坐落" v-model="input2" class="input-with-select">
                            <el-button slot="append" icon="el-icon-search" @click="searchs"></el-button>
                        </el-input>
                    </el-col>
                    <div class="btns">
                        <el-button style="color: #fff;"  @click="historys">历史删除记录</el-button>
                    </div>
                    <!--</el-col>-->
                    <!--<div class="btns">-->
                        <!--<el-button style="color: #fff;" @click="historys">历史删除记录</el-button>-->
                    <!--</div>-->
                </el-col>
            </el-form>
        </el-row>
        <el-row style="margin-bottom: 20px;">
            <el-form class="top" ref="form" :lg="24">
                <el-col :lg="5">
                    <el-col :lg="8"><div class="topLeft">土地性质：</div></el-col>
                    <el-col :lg="16">
                        <el-select  v-model="landNatureval" placeholder="请选择" @change="landNaturevals">
                            <el-option
                                    v-for="item in landNature"
                                    :key="item.label"
                                    :label="item.label"
                                    :value="item.label">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-col>
                <!--<el-col class="sort" :span="4">-->
                    <!--<el-form-item label="土地性质：">-->
                        <!--<el-select  v-model="landNatureval" placeholder="请选择" @change="landNaturevals">-->
                            <!--<el-option-->
                                    <!--v-for="item in landNature"-->
                                    <!--:key="item.label"-->
                                    <!--:label="item.label"-->
                                    <!--:value="item.label">-->
                            <!--</el-option>-->
                        <!--</el-select>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
                <el-col :lg="5">
                    <el-col :lg="8"><div class="topLeft">房屋现状：</div></el-col>
                    <el-col :lg="16">
                        <el-select  v-model="houseNowval" placeholder="请选择" @change="houseNowvals">
                            <el-option
                                    v-for="item in houseNows"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.label">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-col>
                <!--<el-col class="sort" :span="4">-->
                    <!--<el-form-item label="房屋现状：">-->
                        <!--<el-select  v-model="houseNowval" placeholder="请选择" @change="houseNowvals">-->
                            <!--<el-option-->
                                    <!--v-for="item in houseNows"-->
                                    <!--:key="item.value"-->
                                    <!--:label="item.label"-->
                                    <!--:value="item.label">-->
                            <!--</el-option>-->
                        <!--</el-select>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
                <el-col :lg="5">
                    <el-col :lg="8"><div class="topLeft">标签：</div></el-col>
                    <el-col :lg="16">
                        <el-select  v-model="value" placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-col>
                <el-col :lg="8">
                    <div class="btns2">
                        <el-button type="primary" @click="handleClickAdd">新增</el-button>
                        <el-button type="warning" @click="updateBatchs">批量修改</el-button>
                        <el-button type="success" @click="chars">统计</el-button>
                        <el-button type="danger" @click="findExportTitles">导出</el-button>
                    </div>
                    <!--<el-col :lg="6"><el-button type="primary" @click="handleClickAdd">新增</el-button></el-col>-->
                    <!--<el-col :lg="6"><el-button type="warning" @click="updateBatchs">批量修改</el-button></el-col>-->
                    <!--<el-col :lg="6"><el-button type="success" @click="chars">统计</el-button></el-col>-->
                    <!--<el-col :lg="6"><el-button type="danger" @click="findExportTitles">导出</el-button></el-col>-->
                </el-col>
                <!--<el-col class="sort bqSort" :span="4" >-->
                    <!--<el-form-item label="标签：">-->
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
                <!--<el-col :lg="5">-->
                    <!--<div class="btns2">-->
                        <!--<el-button type="primary" @click="handleClickAdd">新增</el-button>-->
                        <!--<el-button type="warning" @click="updateBatchs">批量修改</el-button>-->
                        <!--<el-button type="success" @click="chars">统计</el-button>-->
                        <!--<el-button type="danger" @click="findExportTitles">导出</el-button>-->
                    <!--</div>-->
                <!--</el-col>-->
            </el-form>
        </el-row>
        <el-row class="tables" >
            <el-table
                    ref="multipleTable"
                    :data="tableData"
                    :height="heighTable"
                    tooltip-effect="dark"
                    :fit="true"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column  type="index" label="序号"></el-table-column>
                <el-table-column prop="assetCode" label="资产编号"></el-table-column>
                <el-table-column prop="assetUser" label="产权人"></el-table-column>
                <el-table-column prop="houseAddress" label="房屋坐落"></el-table-column>
                <el-table-column prop="houseNature" label="房屋性质"></el-table-column>
                <el-table-column prop="landUse" label="土地用途"></el-table-column>
                <el-table-column prop="landNature" label="土地性质"></el-table-column>
                <el-table-column prop="realEstate" width="100"  label="不动产证号"></el-table-column>
                <el-table-column prop="houseNow" label="房屋现状"></el-table-column>
                <el-table-column prop="address7"  width="150"  label="历史租凭情况">
                    <template slot-scope="tableData">
                        <el-button @click="historyList(tableData.$index,tableData.row)" type="text" size="small">详情</el-button>
                    </template>
                </el-table-column>
                <el-table-column  label="资产详情">
                    <template slot-scope="tableData">
                        <el-button  @click="detail(tableData.$index,tableData.row,'zc')" type="text" size="small">详情</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        >
                    <template slot-scope="tableData" >
                        <div v-if="sysAuthAdmin !== '' && sysAuthAdmin !== 'xjsb,htgx' && sysAuthAdmin !== 'zcgxsp' && sysAuthAdmin !== 'xjsb,xjyjsp,htgx'">
                            <el-button  @click="dialogUpdates(tableData.$index,tableData.row)" type="text" size="small" style="color: #333;">修改</el-button>
                            <el-button  type="text" size="small" style="color: red;" @click="deletes(tableData.$index,tableData.row)">删除</el-button>
                        </div>
                        <div v-else>
                            <el-button  type="text" size="small" style="color: #999;" >修改</el-button>
                            <el-button  type="text" size="small" style="color: #999;" >删除</el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <el-row style="margin-top: 38px;text-align: right" class="pagination">
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
            <!-- 新增编辑弹框子组件 -->
        <add-or-update :addOrUpdateVisible="addOrUpdateVisible" @changeShow="showAddOrUpdate" ref="addOrUpdateRef"></add-or-update>

        <!--资产详情查看-->
        <assets-kan :msg="detailData"  :AssetsKanVisible="AssetsKanVisible"  @changeShow="showAssetsKan" ref="AssetsKanRef"></assets-kan>
        <!--资产新增-->
        <el-dialog
                class="abow_dialog"
                id="zcxz"
                title="资产新增"
                :visible.sync="NewAdd"
                v-if="NewAdd"
                width="600px">
            <div class="count">
                <el-form ref="form" >
                    <el-row>
                        <el-col :span="24" class="newAdd">
                            <el-form-item label="请导入资产shp 文件：">
                                <el-upload
                                        class="avatar-uploader"
                                        action="http://61.153.180.66:9098/file/attachment/upload?type=asset"
                                        :show-file-list="false"
                                        :on-success="handleAvatarSuccess"
                                        :before-upload="beforeAvatarUpload">
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                                <el-dialog :visible.sync="dialogVisible">
                                    <img width="100%" :src="dialogImageUrl" alt="">
                                </el-dialog>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                                    <div  style="width: 38%;
    font-size: 14px;color: #333;
    line-height: 40px;">请填写台账信息</div>
                            <!--<div  style="margin-bottom: 12px;" v-if="itemcount.length ==0">-->
                                <!--<el-input v-model="newAddinput" placeholder="" style="width: 300px;" ></el-input>-->
                                <!--<el-button type="primary" @click="handleClickss()" style="margin-left: 20px;">填写</el-button>-->
                            <!--</div>-->
                            <!--<div style="margin-bottom: 12px;" v-if="books.length == 0">-->
                                <!--<el-input disabled v-model="input" placeholder="" style="width: 300px;" ></el-input>-->
                                <!--<el-button type="primary" @click="handleClickss" style="margin-left: 20px;">填写</el-button>-->
                                <!--<el-button type="primary" @click="handleClickss" style="margin-left: 20px;">清空</el-button>-->
                            <!--</div>-->
                            <div v-for='(item,index) in books' :id="'myid'+index" v-model="myValue[index]" style="margin-bottom: 12px;">
                                <el-input disabled v-model="item.assetCode" placeholder="" style="width: 300px;" ></el-input>
                                <el-button type="primary" @click="handleClickss(index,item)" style="margin-left: 20px;">填写</el-button>
                                <el-button type="primary" @click="del(index)" style="margin-left: 20px;">删除</el-button>
                            </div>

                        </el-col>
                        <el-col :span="24" style="margin-top: 20px;">
                            <el-button type="primary" @click="newAdds">添加</el-button>
                            <div style="width: 54%;
    font-size: 14px;
    color: rgb(51, 51, 51);
    line-height: 40px;
    float: right;
    margin-right: 143px;
">若存在多条台账数据，请点击添加按钮</div>


                        </el-col>
                    </el-row>
                </el-form>
            </div>
            <div style="font-size: 24px;color: #333;margin: 20px 0;">审批流程：</div>
            <el-form ref="form" >
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="审批：">
                            <div class="sp">
                                <div>
                                    <div>发起人：</div>
                                    <div v-for="item in approvalFindList.openRole">
                                        <div v-for="items in item.users">
                                            <img :src="items.avatar" alt=""><p>{{items.name}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>审批人：</div>
                                    <div v-for="item in approvalFindList.checkRole">
                                        <div v-for="items in item.users">
                                            <img :src="items.avatar" alt=""><p>{{items.name}}</p>
                                        </div>
                                    </div>
                                </div>
                                <!--<div  v-for="item in approvalFindList.openRole"><img src="@/assets/logo.png" alt=""><p>{{item.name}}</p></div>-->
                                <!--<div v-for="item in approvalFindList.checkRole"><img src="@/assets/logo.png" alt=""><p>{{item.name}}</p></div>-->
                                <!--<span class="hr"></span>-->
                            </div>
                        </el-form-item>

                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="抄送：">
                            <div class="sp">
                                <div>
                                    <div>抄送人：</div>
                                    <div v-for="item in approvalFindList.noticeRole">
                                        <div v-for="items in item.users">
                                            <img :src="items.avatar" alt=""><p>{{items.name}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-form-item>

                    </el-col>
                    <el-col :span="24" style="text-align: right;margin-top: 20px;">
                        <el-button type="primary" round @click="success">提交</el-button>
                        <el-button type="success" round @click="cancel">取消</el-button>
                    </el-col>
                </el-row>
            </el-form>
        </el-dialog>
        <new-infor :dialogVisibleAdd="dialogVisibleAdd" @child-event="newInforAdd"  @changeShow="showdialogVisibleAdd" ref="dialogVisibleAddRef"></new-infor>

        <!--资产修改-->
        <assets-infor :dialogUpdate="dialogUpdate" @child-event="newInforUpdate"  @changeShow="showdialogUpdate" ref="dialogUpdateRef"></assets-infor>
        <!--历史删除-->
        <history :historyDel="historyDel"   @changeShow="historyDelUpdate" ref="historyDelRef"></history>

        <!--资产删除-->

        <el-dialog
                title="资产删除"
                :visible.sync="dialogdetail"
                v-if="dialogdetail"
                width="500px">
            <div class="countDel">
                <el-row>
                    <el-form ref="form" >
                        <div>请选择删除原因</div>
                    <el-col :span="24">
                        <el-radio-group v-model="radio">
                            <el-radio style="display: block;margin: 30px 0;" :label="1">误操作</el-radio>
                            <el-radio style="display: block;margin: 30px 0;" :label="2">资产拆除</el-radio>
                            <el-radio style="display: block;margin: 30px 0;" :label="3">其他</el-radio>
                        </el-radio-group>
                        <el-form-item label="　">
                        <el-input type="textarea" v-model="delinput" style="width: 80%;"></el-input>
                        </el-form-item>
                    </el-col>
                        <el-col  :span="24">
                            <el-form-item label="">
                                <div class="sp">
                                    <div>
                                        <div>发起人：</div>
                                        <div v-for="item in approvalFindList.openRole">
                                            <div v-for="items in item.users">
                                                <img :src="items.avatar" alt=""><p>{{items.name}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>审批人：</div>
                                        <div v-for="item in approvalFindList.checkRole">
                                            <div v-for="items in item.users">
                                                <img :src="items.avatar" alt=""><p>{{items.name}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-form-item>

                        </el-col>
                        <el-col  :span="24">
                            <el-form-item label="">
                                <div class="sp">
                                    <div>
                                        <div>抄送人：</div>
                                        <div v-for="item in approvalFindList.noticeRole">
                                            <div v-for="items in item.users">
                                                <img :src="items.avatar" alt=""><p>{{items.name}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-form-item>

                        </el-col>
                        <el-col :span="24" style="text-align: right;margin-top: 20px;">
                            <el-button type="primary" round @click="open">提交</el-button>
                            <el-button type="success" round @click="dialogdetail = false">取消</el-button>
                        </el-col>
                    </el-form>
                </el-row>
            </div>
        </el-dialog>

        <!--批量修改-->
        <el-dialog
                title="批量修改"
                :visible.sync="updateBatch"
                v-if="updateBatch"
                class="counts plcounts"
                width="700px">
            <div>
                <el-row>
                    <el-form rel="form">
                        <el-col :span="24">
                            <el-form-item label="产权人：">
                                <el-input v-model="assetUser" placeholder="请输入内容"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" class="filess">
                            <el-form-item label="不动产证：">
                                <el-input v-model="realEstate" placeholder="请输入内容" style="width: 200px;"></el-input>
                                <el-upload
                                        class="upload-demo"
                                        action="http://61.153.180.66:9098/file/attachment/upload?type=asset"
                                        :on-preview="handlePreview"
                                        :on-remove="handleRemove"
                                        :before-remove="beforeRemove"
                                        :on-success = 'handleSuccess'
                                        multiple
                                        :limit="3"
                                        :on-exceed="handleExceed"
                                        :file-list="realEstateAttach">
                                    <el-button size="small" type="primary">点击上传</el-button>
                                </el-upload>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" class="filess">
                            <el-form-item label="房产证：">
                                <el-input v-model="realHouse" placeholder="请输入内容" style="width: 200px;"></el-input>
                                <el-upload
                                        class="upload-demo"
                                        action="http://61.153.180.66:9098/file/attachment/upload?type=asset"
                                        :on-remove="realHouseAttachRemove"
                                        :on-success = 'realHouseAttachSuccess'
                                        :limit="3"
                                        :file-list="realHouseAttach">
                                    <el-button size="small" type="primary">点击上传</el-button>
                                </el-upload>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" class="filess">
                            <el-form-item label="土地证：">
                                <el-input v-model="realLand" placeholder="请输入内容" style="width: 200px;"></el-input>
                                <el-upload
                                        class="upload-demo"
                                        action="http://61.153.180.66:9098/file/attachment/upload?type=asset"
                                        :on-preview="realLandAttachPreview"
                                        :on-remove="realLandAttachRemove"
                                        :before-remove="realLandAttachRemove"
                                        :on-success = 'realLandAttachSuccess'
                                        multiple
                                        :limit="3"
                                        :on-exceed="realLandAttachExceed"
                                        :file-list="realLandAttach">
                                    <el-button size="small" type="primary">点击上传</el-button>
                                </el-upload>
                            </el-form-item>
                        </el-col>
                        <el-col  :span="24">
                            <el-form-item label="房屋现状：" >
                                <el-select  v-model="houseNowVal" placeholder="请选择"  @change="houseNowChange">
                                    <el-option
                                            v-for="item in houseNow"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.label">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-form>
                </el-row>
            </div>
            <div style="font-size: 24px;color: #333;margin: 20px 0;">审批流程：</div>
            <el-form ref="form" >
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="审批：">
                            <div class="sp">
                                <div >
                                    <div>发起人：</div>
                                    <div v-for="item in approvalFindList.openRole">
                                        <div v-for="items in item.users">
                                            <img :src="items.avatar" alt=""><p>{{items.name}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>审批人：</div>
                                    <div v-for="item in approvalFindList.checkRole">
                                        <div v-for="items in item.users">
                                            <img :src="items.avatar" alt=""><p>{{items.name}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-form-item>

                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="抄送：">
                            <div class="sp">
                                <div>抄送人：</div>
                                <div v-for="item in approvalFindList.noticeRole">
                                    <div v-for="items in item.users">
                                        <img :src="items.avatar" alt=""><p>{{items.name}}</p>
                                    </div>
                                </div>
                            </div>
                        </el-form-item>

                    </el-col>
                    <el-col :span="24" style="text-align: right;margin-top: 20px;">
                        <el-button type="primary" round @click="PLsuccess">提交</el-button>
                        <el-button type="success" round @click="PLcancel">取消</el-button>
                    </el-col>
                </el-row>
            </el-form>
        </el-dialog>

        <!--数据可视化弹窗-->
        <el-dialog
                class="abow_dialog"
                id="tj"
                title="资产管理 > 图形统计"
                @close="handleClose"
                :visible.sync="dialogVisible"
                v-if="dialogVisible"
                width="1000px">
            <date-chart @childEvent="parentMethod" ref="charsRef"></date-chart>
        </el-dialog>

        <!--历史租聘合同-->
        <el-dialog
                :visible.sync="hisytor"
                v-if="hisytor"
                title="历史租聘详情"
                width="80%">
            <el-row>
                <el-form rel="form">
                    <el-col :span="24">
                        <el-table
                                ref="multipleTable"
                                :data="hisytortableData"
                                tooltip-effect="dark"
                                style="width: 100%"
                                @selection-change="handleSelectionChange">
                            <el-table-column prop="assetCode" label="合同编号"></el-table-column>
                            <el-table-column prop="tenant" label="承租方"></el-table-column>
                            <el-table-column prop="formats" label="租金"></el-table-column>
                            <el-table-column prop="houseNature" label="租约日期">
                                <template slot-scope="hisytortableData">
                                    {{hisytortableData.row.rentStart}} - {{hisytortableData.row.rentEnd}}
                                </template>
                            </el-table-column>
                            <el-table-column prop="hisytortableData" label="合同详情">
                                <template slot-scope="hisytortableData">
                                    <el-button @click="historyHt(hisytortableData.row)" type="text" size="small">详情</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="houseNature" label="合同状态">
                                <template slot-scope="hisytortableData">
                                    <div v-if="hisytortableData.row.status == 1">正常</div>
                                    <div v-if="hisytortableData.row.status == 2">即将到期</div>
                                    <div v-if="hisytortableData.row.status == 3">已缴纳</div>
                                    <div v-if="hisytortableData.row.status == 4">已超期</div>
                                </template>
                            </el-table-column>
                            <el-table-column prop="remark" label="备注"></el-table-column>
                        </el-table>
                    </el-col>
                </el-form>
            </el-row>
        </el-dialog>


        <!--物业合同详情-->
        <assets-kanwy :dialogVisibleKanwy="dialogVisibleKanwy"  @changeShow="showdialogVisibleKan" ref="dialogVisibleKanwyRef"></assets-kanwy>

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
    import DateChart from '@/components/assets/DateChart'
    import AssetsInfor from '@/components/assets/AssetsInfor'
    import NewInfor from '@/components/assets/NewInfor'
    import NewAdd from '@/components/assets/NewAdd'
    import AssetsKan from '@/components/assets/AssetsKan'
    import AddOrUpdate from '@/components/assets/AddOrUpdate'
    import history from '@/components/assets/history'
    import AssetsKanwy from '@/components/property/AssetsKan'
export default {
  name: 'login',
  data () {
    return {
        heighTable:'300',
        houseNature:[
            {'label':'全部'},{'label':'办公'},{'label':'参主'},{'label':'仓储'},{'label':'工业厂房'},{'label':'公房'},
            {'label':'集体'},{'label':'其他'},{'label':'全民'},{'label':'商业'},{'label':'私房'},
            {'label':'未登记认定'},{'label':'住宅'},{'label':'住宅/仓储'},{'label':'住宅/工业厂房'}
            ],
        houseNatureval:'',
        landNature:[
            {'label':'全部'},{'label':'仓储出让'},{'label':'仓储划拨'},{'label':'工业出让'},{'label':'工业划拨'},{'label':'商业出让'},
            {'label':'商业划拨'},{'label':'住宅出让'},{'label':'住宅划拨'},{'label':'综合划拨'},
        ],
        landNatureval:'',
        houseNows:[
            {'label':'全部'}, {'label':'出借'},{'label':'出租'},{'label':'借用'},{'label':'空置'},{'label':'其他'},{'label':'修缮'},{'label':'已拆除'},{'label':'自用'},
        ],
        houseNowval:'',
        assetUse:[
            {'label':'全部'},{'label':'公共设施'},{'label':'商业'},{'label':'住宅'}
        ],
        assetUseval:'',
        landUse:[
            {'label':'全部'},{'label':'仓储用途'},{'label':'城镇住宅用地'},{'label':'城镇住宅用地/住宅'},{'label':'公共设施用地'},{'label':'批发零售用地/商业'}
        ],
        landUseval:'',
        sysAuthAdmin:sessionStorage.getItem('authStr'),
        checkAll: false,
        checkedCities: [],
        cities: [{'title':'上海','key':'shanghai'},{'title':'上海1','key':'shanghai1'},{'title':'上海2','key':'shanghai2'},],
        isIndeterminate: false,
        findExportTitle:false,
        hisytor:false,
        pageSizesList: [10, 15, 20, 30, 50],
        newAddinput:'',
        itemcount:[{'books':'','id':''}],
        myValue:[],
        imageUrl: '',
        detailData:'333333',
        detailId:'123',
        currentPage4: 1,
        radio:1,
        addOrUpdateVisible: false,
        AssetsKanVisible: false,
        dialogUpdate: false,
        dialogdetail: false,
        historyDel: false,
        input2:'',
        active: 0,
        active2:0,
        input:'',
        options: [

        ],
        value: '',
        tableData: [],
        multipleSelection: [],
        parentMessage: '我是来自父组件的消息',
        dialogVisible: false,
        dialogVisibleAdd: false,
        dialogVisibleNewAdd:false,
        detailKan:false,
        NewAdd:false,
        title:'333',
        type:'',
        dialogImageUrl: '',
        pageNum:1,
        pageSize:10,
        total:1,
        pageType:false,
        token:'',
        approvalFindList:[{openRole:{'user':''}},{checkRole:{'user':''}},{noticeRole:{'user':''}}],
        zcAdd:'',
        books:[{'id':''}],
        delId:'',
        delinput:'',
        updateBatch:false,
        assetUser:'',//产权人
        houseNow:[{value:'1',label:'房屋现状1'}, {value:'2',label:'房屋现状2'},],
        houseNowVal:'',
        realEstateAttach:[],//不动产证文件
        realHouseAttach:[],//房产证文件
        realLandAttach:[],//土地证文件
        realEstate:'',//不动产证
        realHouse:'',//房产证
        realLand:'',//土地证
        hisytortableData:[],
        dialogVisibleKanwy:false,
        formDatas:'',
        search:{
                "pageNum": 1,
              "pageSize": 10,
              "assetUser": "",
              "houseNature": '',
              "assetUse": "",
              "landUse": "",
              "landNature":'',
              "houseNow": '',
              "label": "",
              "search": ""
      },
        realEstateAttachUrl:'',
        realHouseAttachUrl:'',
        realLandAttachUrl:'',
    }
  },
    components:{
        DateChart,AssetsInfor,NewInfor,NewAdd,AssetsKan,AddOrUpdate,history,AssetsKanwy
    },
    methods:{
        labelHead(h,{column,index}){
            let l = column.label.length
            let f = 16 //每个字大小，其实是每个字的比例值，大概会比字体大小差不多大一点，
            column.minWidth = f*l //字大小乘个数即长度 ,注意不要加px像素，这里minWidth只是一个比例值，不是真正的长度
            //然后将列标题放在一个div块中，注意块的宽度一定要100%，否则表格显示不完全
            return h('div',{class:'table-head',style:{width:'100%'}},[column.label])

        },
        del(e){

            var arr = this.books.splice(e, 1);

            console.log(arr);
        },
      chars(){
          this.dialogVisible =true;
          sessionStorage.setItem('total',this.total)
      },
        searchs(val){
            this.search['search'] = this.input2
            this.list(this.search)
        },
        houseNaturevals(val){
            this.houseNatureval = val;
            if(val == '全部'){
                this.search['houseNature'] = ''
            }else{
                this.search['houseNature'] = val
            }

            this.list(this.search)
        },
        landNaturevals(val){
            this.landNatureval = val;
            if(val == '全部'){
                this.search['landNature'] = ''
            }else{
                this.search['landNature'] = val
            }
            this.list(this.search)
            },
        houseNowvals(val){
            this.houseNowval = val;
            if(val == '全部'){
                this.search['houseNow'] = ''
            }else{
                this.search['houseNow'] = val
            }
            this.list(this.search)
        },
        assetUsevals(val){
            this.assetUseval = val;
            if(val == '全部'){
                this.search['assetUse'] = ''
            }else{
                this.search['assetUse'] = val
            }

            this.list(this.search)
        },
        landUsevals(val){
            this.landUseval = val;
            if(val == '全部'){
                this.search['landUse'] = ''
            }else{
                this.search['landUse'] = val
            }

            this.list(this.search)
        },

      // 获取导出列表
        findExportTitles(){
            var sysAuthAdmin = this.sysAuthAdmin;
            if(sysAuthAdmin == '' || sysAuthAdmin == 'zcgxsp' || sysAuthAdmin == 'xjsb,xjyjsp,htgx' || sysAuthAdmin == 'xjsb,htgx' ){
                this.$message({
                    message: '暂无权限！',
                    type: 'warning'
                });
            }else{
                this.findExportTitle = true
                this.$axios({
                    url: this.getAjax + '/admin/meansAdmin/findExportTitle',
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
            var list = this.multipleSelection;
            var listArr = []
            for(var j=0;j<list.length;j++){
                listArr.push(list[j].id)
            }
            console.log(list)
            var data = str
            var that = this;
            var formData = new FormData();
            console.log(JSON.stringify(listArr))
            formData.append('exportTitle',JSON.stringify(arr))
            formData.append('ids',JSON.stringify(listArr))
            formData.append('houseNature',this.houseNatureval=='全部'?'':this.houseNatureval)
            formData.append('assetUse',this.assetUseval=='全部'?'':this.assetUseval)
            formData.append('landUse',this.landUseval=='全部'?'':this.landUseval)
            formData.append('landNature',this.landNatureval=='全部'?'':this.landNatureval)
            formData.append('houseNow',this.houseNowval=='全部'?'':this.houseNowval)
            this.formDatas = formData
            for (var value of formData.values()) {
                console.log(value);
            }
        },
        daochu(){
            var url =this.getAjax + '/admin/meansAdmin/export';
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
                this.download(res.data);
                this.findExportTitle = false;
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
        historyHt(data){
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
      // 历史租聘列表
        historyList(index,data){
            this.hisytor= true;
            var id = data.assetCode;
            this.$axios({
                url: this.getAjax + '/admin/property/findListByAssetCode?assetCode='+id,
                method: "get",
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Token':sessionStorage.getItem('token')
                },
                data:{}
            }).then(res => {
                if(res.data.code == '1001'){
                    this.hisytortableData = res.data.data
            }else{
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                });
            }
        })
        },
      // 历史删除弹窗
        historys(){
            this.historyDel = true;
        },
      // 批量修改确定
        PLsuccess(){
            var arr = this.multipleSelection;
            var that = this;
            var ids = [];
            console.log(arr)
            for(var i=0;i<arr.length;i++){
                ids.push(arr[i].id)
            }
            var data = {
                'assetUser':this.assetUser,
                'realHouse':this.realHouse,
                'realHouseAttach':this.realHouseAttachUrl,
                'realLand':this.realLand,
                'realLandAttach':this.realLandAttachUrl,
                'realEstate':this.realEstate,
                'realEstateAttach':this.realEstateAttachUrl,
                'houseNow':this.houseNowVal,
                'ids':ids
            }
            console.log(data)
            this.$axios({
                url: this.getAjax + '/admin/meansAdmin/updateBatch',
                method: "post",
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Token':sessionStorage.getItem('token')
                },
                data:data
            }).then(res => {
                if(res.data.code == '1001'){
                this.$message.success('批量修改成功！');
                this.updateBatch = false;
                    this.list(this.search);
            }else{
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                });
            }
        })
        },
        // 批量修改取消
        PLcancel(){
            this.updateBatch = false;
        },
      // 查询详情列表
        list(search){
            var that = this;
            var data =search
            this.$axios({
                url: this.getAjax + '/admin/meansAdmin/findList',
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
                that.tableData = list;
                that.total = res.data.data.total
                console.log(that.total)
                if(that.total<=1){
                    that.pageType = false
                }
            }
        })
        },
        // 查询审批列表
        findList(){
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
                    var arr = ''
                    for(var i=0;i<list.length;i++){
                        if(list[i].alias == 'zichangengxin'){
                            arr = list[i]
                        }
                    }
                    that.approvalFindList = arr
                    console.log(arr)
            }else{
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                });
            }
        })
        },
        newInforAdd(data,index){
            var _arr = this.books;
            console.log(index)
            // if(_arr.length == 0){
            //     _arr.push(data)
            // }else{
            //     var len = _arr.length-1
                _arr[index] = data
            // }
            console.log(_arr)

        },
        newAdds(){
            var obj = {};
            obj['id'] = ''
            this.books.push(obj);
        },
        newInforUpdate(data){
            this.findList();
        },
        // 批量修改
        updateBatchs(){
            var sysAuthAdmin = this.sysAuthAdmin
            if(sysAuthAdmin == '' || sysAuthAdmin == 'zcgxsp' || sysAuthAdmin == 'xjsb,xjyjsp,htgx' || sysAuthAdmin == 'xjsb,htgx'){
                this.$message({
                    message: '暂无权限！',
                    type: 'warning'
                });
            }else{
                this.findList();
                if(this.multipleSelection.length == 0){
                    this.$message.error('请选择需要批量修改的数据');
                }else{
                    this.updateBatch = true;
                }
            }


        },
        houseNowChange(val){this.houseNowVal = val;},
        upload(){
            return 'http://61.153.180.66:9098/file/attachment/upload?type=asset'
        },
        // 不动产证
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handleSuccess(res,file){
            console.log(res)
            this.realEstateAttach.push({'url':res.data[0],'name':file.name})
            this.realEstateAttachUrl = this.realEstateAttach[0].url
            console.log(this.realEstateAttach)
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        // 房产证
        realHouseAttachRemove(file, fileList) {
            console.log(file, fileList);
        },
        realHouseAttachPreview(file) {
            console.log(file);
        },
        realHouseAttachExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        realHouseAttachRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        realHouseAttachSuccess(res,file){
            this.realHouseAttach.push({'url':res.data[0],'name':file.name})
            this.realHouseAttachUrl = this.realHouseAttach[0].url
        },
        // 土地证
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
            this.realLandAttachUrl = this.realLandAttach[0].url
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return  isLt2M;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pageSize = val
            this.search['pageSize'] = val
            this.list(this.search)
        },
        handleCurrentChange(val) {
            this.pageNum = val
            this.search['pageNum'] = val
            this.list(this.search)
        },
        open() {
            var data = {
                'id':this.delId,
                'delReason':this.radio==1?'误操作':this.radio==2?'资产拆除':'其他',
                'delRemark':this.delinput
            }
            var that =this;
            this.$axios({
                url: this.getAjax + '/admin/meansAdmin/delMeans',
                method: "post",
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Token':sessionStorage.getItem('token')
                },
                data:data
            }).then(res => {
                if(res.data.code == '1001'){
                that.$alert('已提交，审批通过后可删除', '提示', {
                    callback: action => {
                        that.dialogdetail = false;
                        that.list();
                    }
                });
            }else{
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                });
            }
        })
            console.log(data)
        },
        deletes(index,data){
            this.findList();
            this.delId = data.id
            if(data.checkDel == 0 ){
                this.dialogdetail = true;
            }else if(data.checkDel == 1 ){
                this.$message.error('审批中');
            }

        },
        show(){
            this.addOrUpdateVisible = true
        },
        // 资产详情查看
        detail(index,data,str){
            this.AssetsKanVisible = true
            let param = data.id
            this.$refs.AssetsKanRef.detail(param,str)
        },
        // 资产修改
        dialogUpdates(index,data){
            this.dialogUpdate = true
            let param = data.id
            this.$refs.dialogUpdateRef.detail(param)
        },
        showAssetsKan(data){
            if(data === 'false'){
                this.AssetsKanVisible = false
            }else{
                this.AssetsKanVisible = true
            }
        },
        // 资产新增
        handleClickss(index,item){
            this.dialogVisibleAdd = true
            this.$refs.dialogVisibleAddRef.detail(index,item)
        },
        showdialogVisibleAdd(data){
            if(data === 'false'){
                this.dialogVisibleAdd = false
            }else{
                this.dialogVisibleAdd = true
            }
        },
        showdialogUpdate(data){
            if(data === 'false'){
                this.dialogUpdate = false
            }else{
                this.dialogUpdate = true
            }
        },
        showAddOrUpdate(data){
            console.log(data)
            if(data === 'false'){
                this.addOrUpdateVisible = false
            }else{
                this.addOrUpdateVisible = true
            }
        },
        historyDelUpdate(data){
            console.log(data)
            if(data === 'false'){
                this.historyDel = false
            }else{
                this.historyDel = true
            }
        },
        success(){
            var data = {
                'id':null,
                'shp':'http://39.100.95.204:2005/ATTACHMENT/asset/20201209/1607482200412846648.png',
                'books':this.books
            }
            var that = this;
            var falg = true;
            console.log(data)
            for(var i=0;i<this.books.length;i++){
                if(this.books[i].id == ''){
                    falg = false
                }
            }

            if(data.books.length>0 && falg){
                this.$confirm('确认提交本次资产新增？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$alert('已提交，等待管理员审核', '提示', {
                        callback: action => {
                            this.NewAdd = false;
                        }
                    });
                    this.$axios({
                        url: this.getAjax + '/admin/meansAdmin/saveOrUpdate',
                        method: "post",
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8',
                            'Token':sessionStorage.getItem('token')
                        },
                        data:data
                    }).then(res => {
                        if(res.data.code == '1001'){
                            that.books = [{'id':''}];
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
            }
            else{
                this.$message({
                    message: '请填写台账信息！',
                    type: 'warning'
                });
            }



        },
        cancel(){
            this.NewAdd = false;
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
        // 表格选中事件
        handleSelectionChange(val) {
            this.multipleSelection = val;

            console.log(this.multipleSelection)
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
        // handleClick(type){
        //     this.addOrUpdateVisible = true
        //         this.dialogVisibleAdd = true
        //
        // },
        handleClickKan(){
            this.detailKan = true
        },
        handleClickAdd(){
            var sysAuthAdmin = this.sysAuthAdmin;
            if(sysAuthAdmin == '' || sysAuthAdmin == 'zcgxsp' || sysAuthAdmin == 'xjsb,xjyjsp,htgx' || sysAuthAdmin == 'xjsb,htgx' ){
                this.$message({
                    message: '暂无权限！',
                    type: 'warning'
                });
            }else{
                this.NewAdd = true;
                this.findList();
            }


        },
        handleClicks(){
            this.dialogVisibleNewAdd = true

        },
    },
    created:function () {
        this.$nextTick(()=>{

            var _h = window.screen.height;
            console.log(_h)
            // var demo = document.getElementsByClassName('newDetail');
            if(_h == '768'){
                this.heighTable = _h*0.3
            }else if(_h == '900'){
                this.heighTable = _h*0.45
            }
            else{
                this.heighTable = _h*0.5
            }

        })
    },
    mounted(){
        var that = this;
      console.log(this.search)
        this.list(this.search);
        this.books = [{'id':''}]
        // this.findList();
    }
}
</script>
<style>
    /*.el-input {width: 200px;}*/
    /*.el-form-item__label {font-size: 16px;color: #333;}*/
    .el-dialog {background-color: #f2f2f2;}
    .el-step.is-horizontal .el-step__line {top:20px;}
    .aaaaa {z-index: 99999!important;}
</style>
<style scoped>
    .filess>>>.el-upload-list{
        position: absolute;
        top: 0;
        left: 90px;
    }
    .counts>>>.el-form-item__label {width: 30%;font-size: 14px;line-height: 40px;}
    .count>>>.el-form-item {margin-bottom: 5px;}
    /*.count>>>.el-input {width: 400px;}*/
    .count>>>.el-upload--picture-card {width: 40px;height:40px;position: absolute;top:0;right:220px;}
    .count>>>.el-upload--picture-card i {width: 40px;height:40px;position: absolute;top:6px;left:0;}
    .count .phone>>>.el-upload--picture-card {width: 140px;height:140px;position: relative;right: inherit;}
    .count .phone>>>.el-upload--picture-card i {width: 140px;height:140px;position: relative;}
    .count .table>>>.el-input {width: 150px;}
    .filess>>>.el-upload-list{
        position: absolute;
        top: 0;
        left: 90px;
    }
    .count>>>.upload-demo {    width: 200px;
        position: absolute;
        top: 0;
        right: 85px;
        z-index: 9999;}
    .counts>>>.upload-demo {    width: 200px;
        position: absolute;
        top: 0;
        right: 50px;
        z-index: 9999;}
    /*.count>>>.el-upload-list{position: absolute;left:90px;top:0;}*/
    .count>>>.el-upload-list__item-name{width: 140px;}
    .newAdd>>>.el-upload--picture-card {width: 40px;height:40px;position: relative;}
    .newAdd>>>.el-upload--picture-card i {position: absolute;top:5px;left:5px;}
    .newAdd>>>.el-upload{width: 40px;height:40px;position: relative;border: 1px solid #999;}
    .newAdd>>>.el-upload img{width: 40px;height:40px;position: relative;}
    .count>>>.col {margin: 0 25px 25px 0;background: #fff;}
    .count>>>.el-form-item__label {width: 30%;font-size: 14px;line-height: 40px;}
    .newAdd>>>.el-form-item__label {text-align: left;width: 35%;}
    .count>>>.el-form-item {margin-bottom: 5px;}
    .files>>>.el-upload-list {width: 30%;margin-left: 33%;}
    .coordinate>>>.el-form-item__label {width: 25%;}
    .main {padding: 20px 43px;}
    /*.sort {margin-right: 28px;}*/
    .btns>>>.el-button{background-color:rgba(122, 149, 250, 0.74);width: 58px;height:58px;padding: 0;text-align: center;line-height: 58px;
        font-size: 18px;
    }
    .btns>>>.el-menu--horizontal>.el-menu-item {color: #fff;}
    .rightS {position: relative;}
    .rightS>>>.el-input {width: 250px;}
    .main>>>.el-input--mini .el-input__inner {height:48px;line-height: 48px;}
    .main>>>.el-pagination__editor.el-input .el-input__inner {height:48px;line-height: 48px;}
    .btns {position: absolute;top:0;right:0;}
    .btns2 {position: absolute;top:0;right:0;}
    .tables>>>th{padding: 0;height:80px;background: #eee;font-size: 16px;color: #333;text-align: center;}
    .tables>>>.el-table {border: 1px dotted #eee;}
    .tables>>>.el-table__row td{padding: 0;height:50px;text-align: center;color: #333;}
    .pagination>>>.el-pagination.is-background .btn-next, .pagination>>>.el-pagination.is-background .btn-prev, .pagination>>>.el-pagination.is-background .el-pager li{width: 48px;height:48px;text-align: center;line-height: 48px;font-size: 18px;}
    .pagination>>>.el-pagination.is-background .el-pager li:not(.disabled).active {background-color:rgba(75,116,255,.62)}
    .sp {width: 100%;position: relative;}
    .sp div {display: inline-block;text-align: center;position: relative;z-index: 2;font-size: 12px;margin-right: 5px;}
    .sp img {width: 40px;height:40px;background-color: #fff;border-radius: 50%;}
    .sp p {width: 100%;text-align: center;line-height: normal;margin-top: -10px;font-size: 12px;color: #333;}
    .sp .hr {display: block;height:1px;width: 60%;z-index: 1;position: absolute;top:22px;left:110px;border-bottom: 3px dotted #333;}
    .sp .add {position: absolute;top:0;left:50%;font-size: 40px;color: #333;font-weight: bold;}
    .countDel>>>.el-form-item__label {width: 0;font-size: 14px;line-height: 40px;}
    .countDel .sspps>>>.el-form-item__label {width: 20%;}
    .countDel .sspps .sp div {width: 110px;}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
