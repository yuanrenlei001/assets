<template id="type">
    <div class="count kan" id="xg">
        <el-dialog
                class="abow_dialog"
                title="资产管理 > 资产修改"
                :visible.sync="showDialog"
                @close="handleClose"
                width="1000px">
            <el-row>
                <el-form ref="form" class="newKan wyKan">
                    <el-col :lg="24" class="xzAdds" style="padding-top: 26px;">
                        <el-col :span="12">
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft">* 资产编号：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="assetCode" placeholder="例：LT0001" ></el-input>
                                </el-col>
                                <!--<el-form-item label="资产编号：">-->
                                    <!--<el-input v-model="assetCode" placeholder="请输入内容"></el-input> <span style="color: red;">必须LT开头</span>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft">* 产权人：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="assetUser" placeholder="请输入内容" :disabled="disabled"></el-input>
                                </el-col>
                                <!--<el-form-item label="产权人：">-->
                                    <!--<el-input v-model="assetUser" placeholder="请输入内容" :disabled="disabled"></el-input>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft">原使用产权人：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="assetUserOri" placeholder="请输入内容" :disabled="disabled"></el-input>
                                </el-col>
                                <!--<el-form-item label="原使用产权人：">-->
                                <!--<el-input v-model="assetUserOri" placeholder="请输入内容" :disabled="disabled"></el-input>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft">* 房屋坐落：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="houseAddress" placeholder="请输入内容" :disabled="disabled"></el-input>
                                </el-col>
                                <!--<el-form-item label="房屋坐落：">-->
                                <!--<el-input v-model="houseAddress" placeholder="请输入内容" :disabled="disabled"></el-input>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col  :lg="22">
                                <el-col :lg="11"><div class="textLeft">* 房屋性质：</div></el-col>
                                <el-col :lg="13">
                                    <el-select  v-model="houseNatureVal" placeholder="请选择" :disabled="disabled" @change="houseNatureChange">
                                        <el-option
                                                v-for="item in houseNature"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.label">
                                        </el-option>
                                    </el-select>
                                </el-col>
                                <!--<el-form-item label="房屋类型：" >-->
                                <!--<el-select  v-model="houseNatureVal" placeholder="请选择" :disabled="disabled" @change="houseNatureChange">-->
                                <!--<el-option-->
                                <!--v-for="item in houseNature"-->
                                <!--:key="item.value"-->
                                <!--:label="item.label"-->
                                <!--:value="item.label">-->
                                <!--</el-option>-->
                                <!--</el-select>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col  :lg="22">
                                <el-col :lg="11"><div class="textLeft">* 房屋结构：</div></el-col>
                                <el-col :lg="13">
                                    <el-select  v-model="houseStructureVal" placeholder="请选择" :disabled="disabled" @change="houseStructureChange">
                                        <el-option
                                                v-for="item in houseStructure"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.label">
                                        </el-option>
                                    </el-select>
                                </el-col>
                                <!--<el-form-item label=" * 房屋结构：" >-->
                                <!--<el-select  v-model="houseStructureVal" placeholder="请选择" :disabled="disabled" @change="houseStructureChange">-->
                                <!--<el-option-->
                                <!--v-for="item in houseStructure"-->
                                <!--:key="item.value"-->
                                <!--:label="item.label"-->
                                <!--:value="item.label">-->
                                <!--</el-option>-->
                                <!--</el-select>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col  :lg="22">
                                <el-col :lg="11"><div class="textLeft">* 产权用途：</div></el-col>
                                <el-col :lg="13">
                                    <el-select  v-model="assetUseVal" placeholder="请选择" :disabled="disabled" @change="assetUseChange">
                                        <el-option
                                                v-for="item in assetUse"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.label">
                                        </el-option>
                                    </el-select>
                                </el-col>
                                <!--<el-form-item label="用途（产权用途）：" >-->
                                <!--<el-select  v-model="assetUseVal" placeholder="请选择" :disabled="disabled" @change="assetUseChange">-->
                                <!--<el-option-->
                                <!--v-for="item in assetUse"-->
                                <!--:key="item.value"-->
                                <!--:label="item.label"-->
                                <!--:value="item.label">-->
                                <!--</el-option>-->
                                <!--</el-select>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft">土地面积 (m²)：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="landArea" placeholder="请输入内容" type="number" :disabled="disabled"></el-input>
                                </el-col>
                                <!--<el-form-item label=" * 土地面积/m²：">-->
                                <!--<el-input v-model="landArea" placeholder="请输入内容" type="number" :disabled="disabled"></el-input>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col  :lg="22">
                                <el-col :lg="11"><div class="textLeft">土地用途²：</div></el-col>
                                <el-col :lg="13">
                                    <el-select  v-model="landUseVal" placeholder="请选择" :disabled="disabled" @change="landUseChange">
                                        <el-option
                                                v-for="item in landUse"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.label">
                                        </el-option>
                                    </el-select>
                                </el-col>
                                <!--<el-form-item label="土地用途：" >-->
                                <!--<el-select  v-model="landUseVal" placeholder="请选择" :disabled="disabled" @change="landUseChange">-->
                                <!--<el-option-->
                                <!--v-for="item in landUse"-->
                                <!--:key="item.value"-->
                                <!--:label="item.label"-->
                                <!--:value="item.label">-->
                                <!--</el-option>-->
                                <!--</el-select>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col  :lg="22">
                                <el-col :lg="11"><div class="textLeft">土地性质：</div></el-col>
                                <el-col :lg="13">
                                    <el-select  v-model="landNatureVal" placeholder="请选择" :disabled="disabled" @change="landNatureChange">
                                        <el-option
                                                v-for="item in landNature"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.label">
                                        </el-option>
                                    </el-select>
                                </el-col>
                                <!--<el-form-item label="土地性质：" >-->
                                <!--<el-select  v-model="landNatureVal" placeholder="请选择" :disabled="disabled" @change="landNatureChange">-->
                                <!--<el-option-->
                                <!--v-for="item in landNature"-->
                                <!--:key="item.value"-->
                                <!--:label="item.label"-->
                                <!--:value="item.label">-->
                                <!--</el-option>-->
                                <!--</el-select>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft">不动产证：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="realEstate" placeholder="请输入内容"></el-input>
                                </el-col>
                                <!--<el-form-item label="不动产证：">-->
                                <!--<el-input v-model="realEstate" placeholder="请输入内容"></el-input>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft minText">不动产证附件：</div></el-col>
                                <el-col :lg="13">
                                    <el-upload
                                            class="upload-demo"
                                            action="http://61.153.180.66:9098/file/attachment/upload?type=asset"
                                            :on-remove="bdhandleRemove"
                                            :on-success = 'handleSuccess'
                                            multiple
                                            :limit="3"
                                            :file-list="bdPic">
                                        <el-button size="small" type="primary">点击上传</el-button>
                                    </el-upload>
                                </el-col>
                                <!--<el-form-item label="不动产证附件：">-->
                                <!--<el-upload-->
                                <!--class="upload-demo"-->
                                <!--action="http://61.153.180.66:9098/file/attachment/upload?type=asset"-->
                                <!--:on-remove="bdhandleRemove"-->
                                <!--:on-success = 'handleSuccess'-->
                                <!--multiple-->
                                <!--:limit="3"-->
                                <!--:file-list="bdPic">-->
                                <!--<el-button size="small" type="primary">点击上传</el-button>-->
                                <!--</el-upload>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft">土地证：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="realLand" placeholder="请输入内容"></el-input>
                                </el-col>
                                <!--<el-form-item label="土地证：">-->
                                <!--<el-input v-model="realLand" placeholder="请输入内容" ></el-input>-->
                                <!--</el-form-item>-->
                            </el-col >
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft">土地证附件：</div></el-col>
                                <el-col :lg="13">
                                    <el-upload
                                            class="upload-demo"
                                            action="http://61.153.180.66:9098/file/attachment/upload?type=asset"
                                            :on-remove="realLandAttachRemove"
                                            :on-success = 'realLandAttachSuccess'
                                            multiple
                                            :limit="3"
                                            :file-list="tdPic">
                                        <el-button size="small" type="primary">点击上传</el-button>
                                    </el-upload>
                                </el-col>
                                <!--<el-form-item label="土地证附件：">-->
                                <!--<el-upload-->
                                <!--class="upload-demo"-->
                                <!--action="http://61.153.180.66:9098/file/attachment/upload?type=asset"-->
                                <!--:on-remove="realLandAttachRemove"-->
                                <!--:on-success = 'realLandAttachSuccess'-->
                                <!--multiple-->
                                <!--:limit="3"-->
                                <!--:file-list="tdPic">-->
                                <!--<el-button size="small" type="primary">点击上传</el-button>-->
                                <!--</el-upload>-->
                                <!--</el-form-item>-->
                            </el-col>
                        </el-col>
                        <el-col :span="12">
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft ">* 房屋建筑面积 (m²)：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="houseArea" placeholder="请输入内容" type="number" :disabled="disabled"></el-input>
                                </el-col>
                                <!--<el-form-item label="房屋建筑面积：">-->
                                <!--<el-input v-model="houseArea" placeholder="请输入内容" :disabled="disabled"></el-input>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft ">* 未登记建筑面积 (m²)：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="noCheckinArea" placeholder="请输入内容" type="number" :disabled="disabled"></el-input>
                                </el-col>
                                <!--<el-form-item label="未登记建筑面积：">-->
                                <!--<el-input v-model="noCheckinArea" placeholder="请输入内容" :disabled="disabled"></el-input>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft ">合法住宅面积 (m²)：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="legalArea" placeholder="请输入内容" type="number" :disabled="disabled"></el-input>
                                </el-col>
                                <!--<el-form-item label=" 合法住宅面积（m²）：">-->
                                <!--<el-input v-model="legalArea" placeholder="请输入内容" type="number" :disabled="disabled"></el-input>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft ">辅助用房面积 (m²)：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="assHouseArea" placeholder="请输入内容" type="number" :disabled="disabled"></el-input>
                                </el-col>
                                <!--<el-form-item label=" 辅助用房面积（m²）：">-->
                                <!--<el-input v-model="assHouseArea" placeholder="请输入内容" type="number" :disabled="disabled"></el-input>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft">协议金额：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="dealAmount" placeholder="请输入内容" type="number" :disabled="disabled"></el-input>
                                </el-col>
                                <!--<el-form-item label="协议金额：">-->
                                    <!--<el-input v-model="dealAmount" placeholder="请输入内容" :disabled="disabled"></el-input>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col  :lg="22">
                                <el-col :lg="11"><div class="textLeft">* 房屋现状：</div></el-col>
                                <el-col :lg="13">
                                    <el-select  v-model="houseNowVal" placeholder="请选择" :disabled="disabled" @change="houseNowChange">
                                        <el-option
                                                v-for="item in houseNows"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.label">
                                        </el-option>
                                    </el-select>
                                </el-col>
                                <!--<el-form-item label="房屋现状：" >-->
                                    <!--<el-select  v-model="houseNowVal" placeholder="请选择" :disabled="disabled" @change="houseNowChange">-->
                                        <!--<el-option-->
                                                <!--v-for="item in houseNow"-->
                                                <!--:key="item.value"-->
                                                <!--:label="item.label"-->
                                                <!--:value="item.label">-->
                                        <!--</el-option>-->
                                    <!--</el-select>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft ">房屋档案编号：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="houseNo" placeholder="请输入内容" :disabled="disabled"></el-input>
                                </el-col>
                            </el-col>
                            <el-col :lg="22">
                            <el-col :lg="11"><div class="textLeft">标签：</div></el-col>
                            <el-col :lg="13">
                                <el-input v-model="label" placeholder="请输入内容" :disabled="disabled"></el-input>
                            </el-col>
                        </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft">备注：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="remark" placeholder="请输入内容" :disabled="disabled"></el-input>
                                </el-col>
                                <!--<el-form-item label="备注：">-->
                                <!--<el-input v-model="remark" placeholder="请输入内容" :disabled="disabled"></el-input>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11" style="opacity: 0;"><div class="textLeft">房产证：</div></el-col>
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft">房产证：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="realHouse" placeholder="请输入内容"></el-input>
                                </el-col>
                                <!--<el-form-item label="房产证：">-->
                                <!--<el-input v-model="realHouse" placeholder="请输入内容"></el-input>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft">房产证附件：</div></el-col>
                                <el-col :lg="13">
                                    <el-upload
                                            class="upload-demo"
                                            action="http://61.153.180.66:9098/file/attachment/upload?type=asset"
                                            :on-remove="realHouseAttachRemove"
                                            :on-success = 'realHouseAttachSuccess'
                                            :limit="3"
                                            :file-list="fcPic">
                                        <el-button size="small" type="primary">点击上传</el-button>
                                    </el-upload>
                                </el-col>
                                <!--<el-form-item label="房产证附件：">-->
                                <!--<el-upload-->
                                <!--class="upload-demo"-->
                                <!--action="http://61.153.180.66:9098/file/attachment/upload?type=asset"-->
                                <!--:on-remove="realHouseAttachRemove"-->
                                <!--:on-success = 'realHouseAttachSuccess'-->
                                <!--:limit="3"-->
                                <!--:file-list="fcPic">-->
                                <!--<el-button size="small" type="primary">点击上传</el-button>-->
                                <!--</el-upload>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22" class="phone">
                                <el-col :lg="11"><div class="textLeft">照片：</div></el-col>
                                <el-col :lg="13">
                                    <el-upload
                                            action="http://61.153.180.66:9098/file/attachment/upload?type=asset"
                                            list-type="picture-card"
                                            :on-success="phone"
                                            :limit="3"
                                            :file-list="handlePic"
                                            :on-remove="handleRemove">
                                        <i class="el-icon-plus"></i>
                                    </el-upload>
                                    <el-dialog :visible.sync="dialogVisible">
                                        <img width="100%" :src="dialogImageUrl" alt="">
                                    </el-dialog>
                                </el-col>
                                <!--<el-form-item label="照片：">-->
                                <!--<el-upload-->
                                <!--action="http://61.153.180.66:9098/file/attachment/upload?type=asset"-->
                                <!--list-type="picture-card"-->
                                <!--:on-preview="handlePictureCardPreview"-->
                                <!--:on-success="phone"-->
                                <!--:limit="3"-->
                                <!--ref="upload"-->
                                <!--:file-list="pic"-->
                                <!--:class="{hide:showUpload}"-->
                                <!--:on-remove="handleRemove">-->
                                <!--&lt;!&ndash;<i class="el-icon-plus"></i>&ndash;&gt;-->
                                <!--</el-upload>-->
                                <!--</el-form-item>-->
                            </el-col>
                        </el-col>
                        <el-col :span="24">
                            <el-col :lg="5"><div class="textLeft">水&nbsp;&nbsp;&nbsp;&nbsp;户名：</div></el-col>
                            <el-col :lg="4"><el-input v-model="accNameWater" placeholder="请输入内容"></el-input></el-col>
                            <el-col :lg="3"><div class="textLeft" style="text-align: center;margin-right: 0;">户号：</div></el-col>
                            <el-col :lg="4"><el-input v-model="accNoWater" placeholder="请输入内容"></el-input></el-col>
                            <el-col :lg="3"><div class="textLeft" style="text-align: center;margin-right: 0;">缴款方式：</div></el-col>
                            <el-col :lg="4">
                                <el-select  v-model="accTypeWater" placeholder="请选择" :disabled="disabled" @change="accTypeWaters">
                                    <el-option
                                            v-for="item in accType"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.label">
                                    </el-option>
                                </el-select>
                            </el-col>
                        </el-col>
                        <el-col style="margin-top: 26px;" :span="24">
                            <el-col :lg="5"><div class="textLeft">电&nbsp;&nbsp;&nbsp;&nbsp;户名：</div></el-col>
                            <el-col :lg="4"> <el-input v-model="accNameElec" placeholder="请输入内容"></el-input></el-col>
                            <el-col :lg="3"><div class="textLeft" style="text-align: center;margin-right: 0;">户号：</div></el-col>
                            <el-col :lg="4"><el-input v-model="accNoElec" placeholder="请输入内容"></el-input></el-col>
                            <el-col :lg="3"><div class="textLeft" style="text-align: center;margin-right: 0;">缴款方式：</div></el-col>
                            <el-col :lg="4">
                                <el-select  v-model="accTypeElec" placeholder="请选择" :disabled="disabled" @change="accTypeElecs">
                                    <el-option
                                            v-for="item in accType"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.label">
                                    </el-option>
                                </el-select>
                            </el-col>
                        </el-col>
                        <el-col style="margin-top: 26px;" :span="24">
                            <el-col :lg="5"><div class="textLeft">燃气&nbsp;&nbsp;&nbsp;&nbsp;户名：</div></el-col>
                            <el-col :lg="4"> <el-input v-model="accNameGas" placeholder="请输入内容"></el-input></el-col>
                            <el-col :lg="3"><div class="textLeft" style="text-align: center;margin-right: 0;">户号：</div></el-col>
                            <el-col :lg="4"><el-input v-model="accNoGas" placeholder="请输入内容"></el-input></el-col>
                            <el-col :lg="3"><div class="textLeft" style="text-align: center;margin-right: 0;">缴款方式：</div></el-col>
                            <el-col :lg="4">
                                <el-select  v-model="accTypeGas" placeholder="请选择" :disabled="disabled" @change="accTypeGass">
                                    <el-option
                                            v-for="item in accType"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.label">
                                    </el-option>
                                </el-select>
                            </el-col>
                        </el-col>
                        <el-col :span="23" style="text-align: right;margin: 40px 0;">
                            <el-button type="primary" round @click="open">保存</el-button>
                            <el-button type="success" round @click="showDialog = false">取消</el-button>
                        </el-col>
                    </el-col>
<div style="display: none">






</div>

                    <!--<el-col class="table" :span="24" style="text-align: center;margin-top: 20px;">-->
                        <!--<el-col :span="9">-->
                            <!--水&nbsp;&nbsp;&nbsp;&nbsp;户名：-->
                            <!--<el-input v-model="accNameWater" placeholder="请输入内容"></el-input>-->
                        <!--</el-col>-->
                        <!--<el-col :span="7">-->
                            <!--户号-->
                            <!--<el-input v-model="accNoWater" placeholder="请输入内容"></el-input>-->
                        <!--</el-col>-->
                        <!--<el-col :span="8">-->
                            <!--缴款方式-->
                            <!--<el-input v-model="accTypeWater" placeholder="请输入内容"></el-input>-->
                        <!--</el-col>-->

                    <!--</el-col>-->
                    <!--<el-col class="table" :span="24" style="text-align: center;margin-top: 20px;">-->
                        <!--<el-col :span="9">-->
                            <!--电&nbsp;&nbsp;&nbsp;&nbsp;户名：-->
                            <!--<el-input v-model="accNameElec" placeholder="请输入内容"></el-input>-->
                        <!--</el-col>-->
                        <!--<el-col :span="7">-->
                            <!--户号-->
                            <!--<el-input v-model="accNoElec" placeholder="请输入内容"></el-input>-->
                        <!--</el-col>-->
                        <!--<el-col :span="8">-->
                            <!--缴款方式-->
                            <!--<el-input v-model="accTypeElec" placeholder="请输入内容"></el-input>-->
                        <!--</el-col>-->

                    <!--</el-col>-->
                    <!--<el-col class="table" :span="24" style="text-align: center;margin-top: 20px;">-->
                        <!--<el-col :span="9">-->
                            <!--燃气&nbsp;&nbsp;户名：-->
                            <!--<el-input v-model="accNameGas" placeholder="请输入内容"></el-input>-->
                        <!--</el-col>-->
                        <!--<el-col :span="7">-->
                            <!--户号-->
                            <!--<el-input v-model="accNoGas" placeholder="请输入内容"></el-input>-->
                        <!--</el-col>-->
                        <!--<el-col :span="8">-->
                            <!--缴款方式-->
                            <!--<el-input v-model="accTypeGas" placeholder="请输入内容"></el-input>-->
                        <!--</el-col>-->

                    <!--</el-col>-->
                </el-form>
            </el-row>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'login',
        props:{
            dialogUpdate:{
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                label:'',
                showUpload:false,
                showDialog:false,
                input:'',
                input2:'',
                disabled:false,
                disableds:false,
                dialogImageUrl: '',
                dialogVisible: false,
                houseNature:[
                    {'label':'办公'},{'label':'参主'},{'label':'仓储'},{'label':'工业厂房'},{'label':'公房'},
                    {'label':'集体'},{'label':'其他'},{'label':'全民'},{'label':'商业'},{'label':'私房'},
                    {'label':'未登记认定'},{'label':'住宅'},{'label':'住宅/仓储'},{'label':'住宅/工业厂房'}
                ],
                houseNatureVal:'',
                assetUse:[
                    {'label':'公共设施'},{'label':'商业'},{'label':'住宅'}
                ],
                assetUseval:'',
                accType:[{value:'代缴',label:'代缴'}, {value:'自缴',label:'自缴'},],
                assetUseVal:'',
                landUse:[
                    {'label':'仓储用途'},{'label':'城镇住宅用地'},{'label':'城镇住宅用地/住宅'},{'label':'公共设施用地'},{'label':'批发零售用地/商业'}
                ],
                landUseVal:'',
                landNature:[
                    {'label':'仓储出让'},{'label':'仓储划拨'},{'label':'工业出让'},{'label':'工业划拨'},{'label':'商业出让'},
                    {'label':'商业划拨'},{'label':'住宅出让'},{'label':'住宅划拨'},{'label':'综合划拨'},
                ],
                landNatureVal:'',
                noCheckin:[{value:'1',label:'未登记建筑1'}, {value:'2',label:'未登记建筑2'},],
                noCheckinVal:'',
                houseNow:[
                    {'label':'全部'}, {'label':'出借'},{'label':'出租'},{'label':'借用'},{'label':'空置'},{'label':'其他'},{'label':'修缮'},{'label':'已拆除'},{'label':'自用'},
                ],
                houseNows:[
                    {'label':'出借'},{'label':'出租'},{'label':'借用'},{'label':'空置'},{'label':'其他'},{'label':'修缮'},{'label':'已拆除'},{'label':'自用'},
                ],
                houseNowVal:'',
                houseStructure:[
                    {'label':'混合'},{'label':'砖混'},{'label':'砖木'},{'label':'砖木、砖混'}
                ],
                houseStructureVal:'',
                id:'',
                assetCode:'',//资产编号
                assetUser:'',//产权人
                houseAddress:'',//房屋坐落
                assetUserOri:'',//原使用产权人
                noCheckinArea:'',//未登记建筑面积
                realEstate:'',//不动产证
                houseArea:'',//房屋建筑面积
                landArea:'',//土地面积
                realHouse:'',//房产证
                realLand:'',//土地证
                dealAmount:'',//协议金额
                houseNo:'',//房屋档案编号
                remark:'',//备注
                pic:[],//照片
                legalArea:'',
                assHouseArea:'',
                accNameWater:'',//水：户名
                accNoWater:'',//水：户号
                accTypeWater:'',//水：缴款方式
                accNameElec:'',//电：户名qa waz
                accNoElec:'',//电：户号
                accTypeElec:'',//电：缴款方式
                accNameGas:'',//燃气：户名
                accNoGas:'',//燃气：户号
                accTypeGas:'',//燃气：缴款方式
                realEstateAttach:[],//不动产证文件
                realHouseAttach:[],//房产证文件
                realLandAttach:[],//土地证文件
                handlePic:[],//土地证文件
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
                map: "", // 对象
                zoom: 10, // 地图的初始化级别，及放大比例
                multipleSelection: [],
                types:'',
                fileList: [],
                Wid:'',
                meansBook:'',
                shp:'',
                realEstateAttachUrl:'',
                realHouseAttachUrl:'',
                realLandAttachUrl:'',
                picUrl:'',
                bdPic:[],
                fcPic:[],
                tdPic:[],
            }
        },
        components:{
        },
        watch:{
            dialogUpdate(oldVal,newVal){
                this.showDialog = this.dialogUpdate
            },
        },
        methods:{
            houseStructureChange(val){this.houseStructureVal = val;},
            accTypeWaters(val){this.accTypeWater = val;},
            accTypeElecs(val){this.accTypeElec = val;},
            accTypeGass(val){this.accTypeGas = val;},
            detail(index){
                this.numIndex = index
            },
            imgShowFlase(){
                this.imgShow = false;
                console.log(123)
            },
            open() {
                var that =this;
                var data = {
                    'id':this.Wid,
                    'shp':this.shp,
                    'books':[{
                        'id':this.id,
                        'assetCode':this.assetCode,
                        'assetUser':this.assetUser,
                        'houseAddress':this.houseAddress,
                        'assetUserOri':this.assetUserOri,
                        'houseNature':this.houseNatureVal,
                        'houseStructure':this.houseStructureVal,
                        'noCheckinArea':this.noCheckinArea,
                        'houseArea':this.houseArea,
                        'assetUse':this.assetUseVal,
                        'landArea':this.landArea,
                        'landUse':this.landUseVal,
                        'landNature':this.landNatureVal,
                        'noCheckin':this.noCheckinVal,
                        'realEstate':this.realEstate,
                        'realEstateAttach':this.realEstateAttachUrl,
                        'realHouseAttach':this.realHouseAttachUrl,
                        'realHouse':this.realHouse,
                        'realLandAttach':this.realLandAttachUrl,
                        'realLand':this.realLand,
                        'dealAmount':this.dealAmount,
                        'houseNow':this.houseNowVal,
                        'houseNo':this.houseNo,
                        'remark':this.remark,
                        'pic':this.picUrl,
                        'accNameWater':this.accNameWater,//水：户名
                        'accNoWater':this.accNoWater,
                        'accTypeWater':this.accTypeWater,
                        'accNameElec':this.accNameElec,
                        'accNoElec':this.accNoElec,
                        'accTypeElec':this.accTypeElec,
                        'accNameGas':this.accNameGas,
                        'accNoGas':this.accNoGas,
                        'accTypeGas':this.accTypeGas,
                        'legalArea':this.legalArea,
                        'assHouseArea':this.assHouseArea,
                        'label':this.label,
                    }]
                }
                console.log(data)
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
                        this.$alert('修改已提交，等待管理员审核', '提示', {
                            callback: action => {
                                this.$emit('changeShow','false')
                            }
                        });
                    }else{
                        this.$message({
                            message: res.data.msg,
                            type: 'warning'
                        });
                        this.$emit('changeShow','false')
                    }
                })
            },
            detail(param){
                var id = param;
                var that = this;
                this.$axios({
                    url: this.getAjax + '/admin/meansAdmin/findDetails?id='+id,
                    method: "get",
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Token':sessionStorage.getItem('token')
                    },
                    data:{}
                }).then(res => {
                    if(res.data.code = '1001'){
                        this.Wid = res.data.data.id;
                        this.shp = res.data.data.shp;
                    var meansBook = res.data.data.meansBook;
                    that.id = meansBook.id;
                    that.assetCode = meansBook.assetCode;
                    that.assetUser = meansBook.assetUser;
                    that.houseAddress = meansBook.houseAddress;
                    that.assetUserOri = meansBook.assetUserOri;
                    that.houseNatureVal = meansBook.houseNature;
                    that.noCheckinArea = meansBook.noCheckinArea;
                    that.houseArea = meansBook.houseArea;
                    that.assetUseVal = meansBook.assetUse;
                    that.landArea = meansBook.landArea;
                    that.landUseVal = meansBook.landUse;
                    that.landNatureVal = meansBook.landNature;
                    that.noCheckinVal = meansBook.noCheckin;
                    that.realEstate = meansBook.realEstate;
                    that.realHouse = meansBook.realHouse;
                    that.realLand = meansBook.realLand;
                    that.dealAmount = meansBook.dealAmount;
                    that.houseNowVal = meansBook.houseNow;
                    that.houseNo = meansBook.houseNo;
                    that.remark = meansBook.remark;
                    that.accNameWater = meansBook.accNameWater;
                    that.accNoWater = meansBook.accNoWater;
                    that.accTypeWater = meansBook.accTypeWater;
                    that.accNameElec = meansBook.accNameElec;
                    that.accNoElec = meansBook.accNoElec;
                    that.accTypeElec = meansBook.accTypeElec;
                    that.accNameGas = meansBook.accNameGas;
                    that.accNoGas = meansBook.accNoGas;
                    that.accTypeGas = meansBook.accTypeGas;
                        that.label = meansBook.label;
                        that.legalArea =meansBook.legalArea;
                        that.assHouseArea =meansBook.assHouseArea;
                        that.houseStructureVal =meansBook.houseStructure;
                        that.picUrl = meansBook.pic
                        var file= []
                        that.bdPic =[]
                        that.tdPic = []
                        that.handlePic = []
                        that.fcPic =[]
                        if(meansBook.realEstateAttach && meansBook.realEstateAttach!==''){
                            var imgbd = meansBook.realEstateAttach.split(',');
                            if(imgbd){
                                for(var j =0;j<imgbd.length;j++){
                                    var obj4 = {}
                                    obj4['name']= imgbd[j].split('#_#')[0]
                                    obj4['url']= imgbd[j].split('#_#')[1]
                                    that.bdPic.push(obj4);
                                }
                            }
                        }
                        if(meansBook.realHouseAttach && meansBook.realHouseAttach!==''){
                            var imgfc = meansBook.realHouseAttach.split(',');
                            if(imgfc){
                                for(var z =0;z<imgfc.length;z++){
                                    var obj4 = {}
                                    obj4['name']= imgfc[z].split('#_#')[0]
                                    obj4['url']= imgfc[z].split('#_#')[1]
                                    that.fcPic.push(obj4);
                                }
                            }
                        }
                        if(meansBook.realLandAttach && meansBook.realLandAttach!==''){
                            var imgtd = meansBook.realLandAttach.split(',');
                            if(imgtd){
                                for(var x =0;x<imgtd.length;x++){
                                    var obj4 = {}
                                    obj4['name']= imgtd[x].split('#_#')[0]
                                    obj4['url']= imgtd[x].split('#_#')[1]
                                    that.tdPic.push(obj4);
                                }
                            }
                        }
                        if(meansBook.pic && meansBook.pic!==''){
                            var imgpic = meansBook.pic.split(',');
                            for(var p =0;p<imgpic.length;p++){
                                var obj4 = {}
                                obj4['name']= imgpic[p].split('#_#')[0]
                                obj4['url']= imgpic[p].split('#_#')[1]
                                that.handlePic.push(obj4);
                            }
                        }






                }else{
                    this.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                }
            })
            },
            upload(){
                return 'http://61.153.180.66:9098/file/attachment/upload?type=asset'
            },
            houseNatureChange(val){console.log(val)},
            assetUseChange(val){this.assetUseVal = val;},
            landUseChange(val){this.landUseVal = val;},
            landNatureChange(val){this.landNatureVal = val;},
            noCheckinChange(val){this.noCheckinVal = val;},
            houseNowChange(val){this.houseNowVal = val;},
            // 不动产证
            bdhandleRemove(file, fileList) {
                var arr = []
                var arrs = []
                for(var i=0;i<fileList.length;i++){
                    var obj = {};
                    var img = {};
                    obj['url'] = fileList[i].response.data[0]
                    obj['name'] = fileList[i].name
                    img['name'] =  fileList[i].name+'#_#'+fileList[i].response.data[0]
                    arr.push(obj)
                    arrs.push(img)
                }
                var imgs= []
                console.log(arrs)
                for(var j=0;j<arrs.length;j++){
                    imgs.push(arrs[j].name)
                }
                this.realEstateAttachUrl = imgs.toString()
            },
            handleSuccess(res,file,fileList){
                var arr = []
                var arrs = []
                for(var i=0;i<fileList.length;i++){
                    var obj = {};
                    var img = {};
                    obj['url'] = fileList[i].response.data[0]
                    obj['name'] = fileList[i].name
                    img['name'] =  fileList[i].name+'#_#'+fileList[i].response.data[0]
                    arr.push(obj)
                    arrs.push(img)
                }
                var imgs= []
                for(var j=0;j<arrs.length;j++){
                    imgs.push(arrs[j].name)
                }
                this.realEstateAttachUrl = imgs.toString()
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {

            },
            // 房产证
            realHouseAttachRemove(file, fileList) {
                var arr = []
                var arrs = []
                for(var i=0;i<fileList.length;i++){
                    var obj = {};
                    var img = {};
                    obj['url'] = fileList[i].response.data[0]
                    obj['name'] = fileList[i].name
                    img['name'] =  fileList[i].name+'#_#'+fileList[i].response.data[0]
                    arr.push(obj)
                    arrs.push(img)
                }
                var imgs= []
                console.log(arrs)
                for(var j=0;j<arrs.length;j++){
                    imgs.push(arrs[j].name)
                }
                this.realHouseAttachUrl = imgs.toString()
            },
            realHouseAttachPreview(file) {
                console.log(file);
            },
            realHouseAttachExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            realHouseAttachSuccess(res,file,fileList){
                var arr = []
                var arrs = []
                for(var i=0;i<fileList.length;i++){
                    var obj = {};
                    var img = {};
                    obj['url'] = fileList[i].response.data[0]
                    obj['name'] = fileList[i].name
                    img['name'] =  fileList[i].name+'#_#'+fileList[i].response.data[0]
                    arr.push(obj)
                    arrs.push(img)
                }
                var imgs= []
                console.log(arrs)
                for(var j=0;j<arrs.length;j++){
                    imgs.push(arrs[j].name)
                }
                this.realHouseAttachUrl = imgs.toString()
                // this.realHouseAttach.push({'url':res.data[0],'name':file.name})
                // this.realHouseAttachUrl = this.realHouseAttach[0].url
            },
            // 土地证
            realLandAttachRemove(file, fileList) {
                var arr = []
                var arrs = []
                for(var i=0;i<fileList.length;i++){
                    var obj = {};
                    var img = {};
                    obj['url'] = fileList[i].response.data[0]
                    obj['name'] = fileList[i].name
                    img['name'] =  fileList[i].name+'#_#'+fileList[i].response.data[0]
                    arr.push(obj)
                    arrs.push(img)
                }
                var imgs= []
                console.log(arrs)
                for(var j=0;j<arrs.length;j++){
                    imgs.push(arrs[j].name)
                }
                this.realLandAttachUrl = imgs.toString()
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
            realLandAttachSuccess(res,file,fileList){
                var arr = []
                var arrs = []
                for(var i=0;i<fileList.length;i++){
                    var obj = {};
                    var img = {};
                    obj['url'] = fileList[i].response.data[0]
                    obj['name'] = fileList[i].name
                    img['name'] =  fileList[i].name+'#_#'+fileList[i].response.data[0]
                    arr.push(obj)
                    arrs.push(img)
                }
                var imgs= []
                console.log(arrs)
                for(var j=0;j<arrs.length;j++){
                    imgs.push(arrs[j].name)
                }
                this.realLandAttachUrl = imgs.toString()
                // this.realLandAttach.push({'url':res.data[0],'name':file.name})
                // this.realLandAttachUrl = this.realLandAttach[0].url
            },
            // 照片
            handleRemove(res,file, fileList) {
                if(fileList.length < 4){
                    this.showUpload = false
                }
            },
            phone(res, file, fileList) {
                if(fileList.length >= 3){
                    this.showUpload = true
                }
                var arr = []
                var arrs = []
                for(var i=0;i<fileList.length;i++){
                    var obj = {};
                    var img = {};
                    if(fileList[i].response){
                        obj['url'] = fileList[i].response.data[0]
                        obj['name'] = fileList[i].name
                        img['name'] =  fileList[i].name+'#_#'+fileList[i].response.data[0]
                    }else{
                        obj['url'] = fileList[i].url
                        obj['name'] = fileList[i].name
                        img['name'] =  fileList[i].name+'#_#'+fileList[i].url
                    }
                    arr.push(obj)
                    arrs.push(img)
                }
                var imgs= []
                for(var j=0;j<arrs.length;j++){
                    imgs.push(arrs[j].name)
                }
                this.picUrl = imgs.toString()
            },
            handleClose(){
                // 子组件调用父组件方法，并传递参数
                this.$emit('changeShow','false')
            },
            handlePictureCardPreview(file) {
                console.log(file)
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleDownload(file) {
                console.log(file);
            },
            handleChange(file, fileList) {
                this.fileList = fileList.slice(-3);
            },
            onLoad() {
            },

        },
        mounted(){
            this.$emit('childEvent', { name: 'zhangsan', age:  10 });
        },
        created:function () {
        }
    }
</script>
<style scoped>
    #mapDiv {
        height: 150px;
        width:500px;
        position: relative;
        left:50%;
        margin-left: -250px;
    }
    .count>>>.charts {position: relative;left:50%;margin-left: -150px;}
    .count>>>.col {margin: 0 25px 25px 0;background: #fff;}
    .count>>>.el-form-item__label {width: 25%;font-size: 14px;line-height: 40px;}
    .count>>>.el-form-item {margin-bottom: 5px;}
    /*.count>>>.el-input {width: 400px;}*/
    .count>>>.el-upload--picture-card {width: 40px;height:40px;position: absolute;top:0;right:220px;}
    .count>>>.el-upload--picture-card i {width: 40px;height:40px;position: absolute;top:40px;left:50%;margin-left: -20px;}
    .count .phone>>>.el-upload--picture-card {width: 100px;height:100px;position: relative;right: inherit;}
    .count .table>>>.el-input {width: 150px;}
    .filess>>>.el-upload-list{
        position: absolute;
        top: 0;
        left: 90px;
    }
    .count>>>.upload-demo {
        width: 200px;
        margin-left: 86px;
        position: relative;
        z-index: 999;}
    .addss>>>.upload-demo {
        width: 200px;
        margin-left: 250px;
        position: relative;
        right:85px;
        z-index: 999;}
    /*.count>>>.upload-demo {    width: 200px;*/
        /*position: absolute;*/
        /*top: 0;*/
        /*right: 85px;*/
        /*z-index: 9999;}*/
    /*.count>>>.el-upload-list{position: absolute;left:90px;top:0;}*/
    .count>>>.el-upload-list__item-name{width: 140px;}

    .files>>>.el-upload-list {width: 30%;margin-left: 33%;}
    .coordinate>>>.el-form-item__label {width: 25%;}
    .sum {height:100px;background: #fff;width: 90%;}
    .sumLeft {float:left;line-height: 115px;margin-left: 48px;}
    .sumRight {margin-left: 130px;padding-top: 20px;}
    .sumRight p:first-child {font-size: 16px;color: #666;}
    .sumRight p:last-child {font-size: 30px;color: #333;margin-top: 10px;}
    .phone >>> .hide .el-upload--picture-card {
        display: none;
    }
</style>
