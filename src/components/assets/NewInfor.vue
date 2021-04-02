<template id="type">
    <div class="count kan">
        <el-dialog
                class="abow_dialog"
                title="资产管理 > 资产新增"
                :visible.sync="showDialog"
                @close="handleClose"
                width="1000px">
            <el-row>
                <el-form ref="form"  class="xzAdd">
                    <el-col :lg="24" style="padding-top: 26px;">
                        <el-col :span="12">
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft">* 资产编号：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="assetCode" placeholder="资产编号自动生成" disabled></el-input>
                                </el-col>
                                <!--<el-form-item label=" * 资产编号：">-->
                                    <!--<el-input v-model="assetCode" placeholder="例：LT0001" ></el-input> <span style="color: red;">必须LT开头</span>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft"> * 产权人：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="assetUser" placeholder="请输入内容" :disabled="disabled"></el-input>
                                </el-col>
                                <!--<el-form-item label=" * 产权人：">-->
                                    <!--<el-input v-model="assetUser" placeholder="请输入内容" :disabled="disabled"></el-input>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft minText"> 原使用产权人：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="assetUserOri" placeholder="请输入内容" :disabled="disabled"></el-input>
                                </el-col>
                                <!--<el-form-item label="原使用产权人：">-->
                                <!--<el-input v-model="assetUserOri" placeholder="请输入内容" :disabled="disabled"></el-input>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft"> * 房屋坐落：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="houseAddress" placeholder="请输入内容" :disabled="disabled"></el-input>
                                </el-col>
                                <!--<el-form-item label=" * 房屋坐落：">-->
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
                                <!--<el-form-item label=" * 房屋性质：" >-->
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
                                <!--<el-form-item label=" * 产权用途：" >-->
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
                                <el-col :lg="11"><div class="textLeft">* 土地用途：</div></el-col>
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
                                <!--<el-form-item label=" * 土地用途：" >-->
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
                                <el-col :lg="11"><div class="textLeft">* 土地性质：</div></el-col>
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
                                <!--<el-form-item label=" * 土地性质：" >-->
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
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft">不动产证附件：</div></el-col>
                                <el-col :lg="13">
                                    <el-upload
                                            class="upload-demo"
                                            action="http://61.153.180.66:9098/file/attachment/upload?type=asset"
                                            :on-remove="bdhandleRemove"
                                            :on-success = 'handleSuccess'
                                            multiple
                                            :limit="3"
                                            :file-list="realEstateAttach">
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
                                <!--:file-list="realEstateAttach">-->
                                <!--<el-button size="small" type="primary">点击上传</el-button>-->
                                <!--</el-upload>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft">土地证：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="realLand" placeholder="请输入内容" ></el-input>
                                </el-col>
                                <!--<el-form-item label="土地证：">-->
                                <!--<el-input v-model="realLand" placeholder="请输入内容" ></el-input>-->
                                <!--</el-form-item>-->
                            </el-col>
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
                                            :file-list="realLandAttach">
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
                                <!--:file-list="realLandAttach">-->
                                <!--<el-button size="small" type="primary">点击上传</el-button>-->
                                <!--</el-upload>-->
                                <!--</el-form-item>-->
                            </el-col>
                        </el-col>
                        <el-col :span="12">
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft wd">* 房屋建筑面积 (m²)：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="houseArea" placeholder="请输入内容" type="number" :disabled="disabled"></el-input>
                                </el-col>
                                <!--<el-form-item label=" * 房屋建筑面积（m²）：">-->
                                <!--<el-input v-model="houseArea" placeholder="请输入内容" type="number" :disabled="disabled"></el-input>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft">未登记建筑面积 (m²)：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="noCheckinArea" placeholder="请输入内容" type="number" :disabled="disabled"></el-input>
                                </el-col>
                                <!--<el-form-item label="未登记建筑面积( m² )：">-->
                                <!--<el-input v-model="noCheckinArea" placeholder="请输入内容" type="number" :disabled="disabled"></el-input>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft">合法住宅面积 (m²)：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="legalArea" placeholder="请输入内容" type="number" :disabled="disabled"></el-input>
                                </el-col>
                                <!--<el-form-item label=" 合法住宅面积（m²）：">-->
                                <!--<el-input v-model="legalArea" placeholder="请输入内容" type="number" :disabled="disabled"></el-input>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft">辅助用房面积 (m²)：</div></el-col>
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
                                    <!--<el-input v-model="dealAmount" placeholder="请输入内容" type="number" :disabled="disabled"></el-input>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
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
                                <!--<el-form-item label=" * 房屋现状：" >-->
                                    <!--<el-select  v-model="houseNowVal" placeholder="请选择" :disabled="disabled" @change="houseNowChange">-->
                                        <!--<el-option-->
                                                <!--v-for="item in houseNows"-->
                                                <!--:key="item.value"-->
                                                <!--:label="item.label"-->
                                                <!--:value="item.label">-->
                                        <!--</el-option>-->
                                    <!--</el-select>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft">房屋档案编号：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="houseNo" placeholder="请输入内容" :disabled="disabled"></el-input>
                                </el-col>
                                <!--<el-form-item label="房屋档案编号：">-->
                                    <!--<el-input v-model="houseNo" placeholder="请输入内容" :disabled="disabled"></el-input>-->
                                <!--</el-form-item>-->
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="11"><div class="textLeft">标签：</div></el-col>
                                <el-col :lg="13">
                                    <el-input v-model="label" placeholder="请输入内容" :disabled="disabled"></el-input>
                                </el-col>
                                <!--<el-form-item label="标签：">-->
                                    <!--<el-input v-model="label" placeholder="请输入内容" :disabled="disabled"></el-input>-->
                                <!--</el-form-item>-->
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
                                            :file-list="realHouseAttach">
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
                                <!--:file-list="realHouseAttach">-->
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
                                            :on-preview="handlePictureCardPreview"
                                            :on-success="phone"
                                            :limit="3"
                                            ref="upload"
                                            :file-list="pic"
                                            :class="{hide:showUpload}"
                                            :on-remove="handleRemove">
                                        <!--<i class="el-icon-plus"></i>-->
                                    </el-upload>
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
                        <el-col :span="23" style="text-align: right;margin:40px 0;">
                            <el-button type="primary" round @click="open">保存</el-button>
                            <el-button type="success" round @click="showDialog = false">取消</el-button>
                        </el-col>
                    </el-col>

<div style="display: none;">







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
                            <!--<el-select  v-model="accTypeWater" placeholder="请选择" :disabled="disabled" @change="accTypeWaters">-->
                                <!--<el-option-->
                                        <!--v-for="item in accType"-->
                                        <!--:key="item.value"-->
                                        <!--:label="item.label"-->
                                        <!--:value="item.label">-->
                                <!--</el-option>-->
                            <!--</el-select>-->
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
                            <!--<el-select  v-model="accTypeElec" placeholder="请选择" :disabled="disabled" @change="accTypeElecs">-->
                                <!--<el-option-->
                                        <!--v-for="item in accType"-->
                                        <!--:key="item.value"-->
                                        <!--:label="item.label"-->
                                        <!--:value="item.label">-->
                                <!--</el-option>-->
                            <!--</el-select>-->
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
                            <!--<el-select  v-model="accTypeGas" placeholder="请选择" :disabled="disabled" @change="accTypeGass">-->
                                <!--<el-option-->
                                        <!--v-for="item in accType"-->
                                        <!--:key="item.value"-->
                                        <!--:label="item.label"-->
                                        <!--:value="item.label">-->
                                <!--</el-option>-->
                            <!--</el-select>-->
                        <!--</el-col>-->

                    <!--</el-col>-->
                </el-form>
            </el-row>
        </el-dialog>
        <div v-if="imgShow" @click="imgShowFlase"  style="text-align:center;position: fixed;z-index: 999999;top:0;left:0;background: rgba(0,0,0,.5);width: 100%;height:100%;">
            <img :src="showImgUrl" alt="" style="width: 500px;
    height: 500px;
    position: relative;
    top: 50%;
    margin-top: -250px;">
        </div>
    </div>
</template>

<script>
    export default {
  name: 'login',
        props:{
            dialogVisibleAdd:{
                type: Boolean,
                default: false
            }
        },
  data () {
    return {
        showImgUrl:'',
        imgShow:false,
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
        accNameWater:'',//水：户名
        accNoWater:'',//水：户号
        accTypeWater:'',//水：缴款方式
        accNameElec:'',//电：户名qa waz
        accNoElec:'',//电：户号
        accTypeElec:'',//电：缴款方式
        accNameGas:'',//燃气：户名
        accNoGas:'',//燃气：户号
        accTypeGas:'',//燃气：缴款方式
        legalArea:'',//燃气：缴款方式
        assHouseArea:'',//燃气：缴款方式
        realEstateAttach:[],//不动产证文件
        realHouseAttach:[],//房产证文件
        realLandAttach:[],//土地证文件
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
        realEstateAttachUrl:'',
        realHouseAttachUrl:'',
        realLandAttachUrl:'',
        picUrl:'',
        numIndex:'',
        label:'',
        bdPic:[],
        fcPic:[],
        tdPic:[],
    }
  },
        components:{
        },
    watch:{
        dialogVisibleAdd(oldVal,newVal){
            this.showDialog = this.dialogVisibleAdd
        },
    },
    methods:{
        accTypeWaters(val){this.accTypeWater = val;},
        accTypeElecs(val){this.accTypeElec = val;},
        accTypeGass(val){this.accTypeGas = val;},
        detail(index,item){
            // this.$nextTick(()=>{
            //     var _h = window.screen.height;
            //     console.log(_h)
            //     var demo = document.getElementsByClassName('xzAdd');
            //     if(_h == '768'){
            //         demo[0].style.height = _h*0.3 +'px'
            //     }else if(_h == '900'){
            //         demo[0].style.height = _h*0.45 +'px'
            //     }else{
            //         demo[0].style.height = _h*0.6 +'px'
            //     }
            // })
            console.log(item)
            var that =this;
            this.numIndex = index;
            that.realEstateAttach = [];
            that.realHouseAttach = [];
            that.realLandAttach = [];
            that.pic = [];
            if(item.realEstateAttach){
                console.log('***')
                var imgbd = item.realEstateAttach.split(',')
                for(var j =0;j<imgbd.length;j++){
                    var obj4 = {}
                    obj4['name']= imgbd[j].split('#_#')[0]
                    obj4['url']= imgbd[j].split('#_#')[1]
                    that.realEstateAttach.push(obj4);
                }
            }else{
                console.log('**2*')
                that.realEstateAttach = []
            }
            if(item.realHouseAttach){
                var imgfc = item.realHouseAttach.split(',')
                for(var z =0;z<imgfc.length;z++){
                    var obj4 = {}
                    obj4['name']= imgfc[z].split('#_#')[0]
                    obj4['url']= imgfc[z].split('#_#')[1]
                    that.realHouseAttach.push(obj4);
                }
            }else{
                that.realHouseAttach = [];
            }
            if(item.realLandAttach){
                var imgtd = item.realLandAttach.split(',');
                for(var x =0;x<imgtd.length;x++){
                    var obj4 = {}
                    obj4['name']= imgtd[x].split('#_#')[0]
                    obj4['url']= imgtd[x].split('#_#')[1]
                    that.realLandAttach.push(obj4);
                }
            }else{
                that.realLandAttach = []
            }
            if(item.pic){
                var imgtd = item.pic.split(',')
                for(var k =0;k<imgtd.length;k++){
                    var obj4 = {}
                    obj4['name']= imgtd[k].split('#_#')[0]
                    obj4['url']= imgtd[k].split('#_#')[1]
                    that.pic.push(obj4);
                }
            }else{
                that.pic = []
            }



            this.assetCode = item.assetCode,
            this.assetUser = item.assetUser,
            this.houseAddress = item.houseAddress,
            this.assetUserOri = item.assetUserOri,
            this.houseNatureVal = item.houseNature,
            this.noCheckinArea = item.noCheckinArea,
            this.houseStructureVal = item.houseStructure,
            this.houseArea = item.houseArea,
            this.assetUseVal = item.assetUse,
            this.landArea = item.landArea,
            this.landUseVal = item.landUse,
            this.landNatureVal = item.landNature,
            this.noCheckinVal = item.noCheckin,
            this.realEstate = item.realEstate,
            this.realHouse = item.realHouse,
            this.realLand = item.realLand,
            this.dealAmount = item.dealAmount,
            this.houseNowVal = item.houseNow,
            this.houseNo = item.houseNo,
            this.label = item.label,
            this.remark = item.remark,
            this.accNameWater = item.accNameWater,
            this.accNoWater = item.accNoWater,
            this.accTypeWater = item.accTypeWater,
            this.accNameElec = item.accNameElec,
            this.accNoElec = item.accNoElec,
            this.accTypeElec = item.accTypeElec,
            this.accNameGas = item.accNameGas,
            this.accNoGas = item.accNoGas,
            this.accTypeGas = item.accTypeGas,
            this.legalArea =item.legalArea,
            this.assHouseArea =item.assHouseArea
        },
        imgShowFlase(){
            this.imgShow = false;
            console.log(123)
        },
        open() {
            var that =this;
            if(that.realEstateAttach.length>0){
                var fileList = that.realEstateAttach;
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
                        obj['url'] = fileList[i].name
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
                this.realEstateAttachUrl = imgs.toString()
            }else{
                that.realEstateAttach = []
            }
            if(that.realHouseAttach.length>0){
                var fileList = that.realHouseAttach;
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
                        obj['url'] = fileList[i].name
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
                this.realHouseAttachUrl = imgs.toString()
            }else{
                that.realHouseAttach = [];
            }
            if(that.realLandAttach.length>0){
                var fileList = that.realLandAttach;
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
                        obj['url'] = fileList[i].name
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
                this.realLandAttachUrl = imgs.toString()
            }else{
                that.realLandAttach = []
            }
            if(that.pic.length>0){
                var fileList = that.pic;
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
                        obj['url'] = fileList[i].name
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
            }else{
                that.pic = []
            }
            var data = {
                'id':null,
                'assetUser':this.assetUser,
                'assetUserOri':this.assetUserOri,
                'houseNature':this.houseNatureVal,
                'houseAddress':this.houseAddress,
                'noCheckinArea':this.noCheckinArea,
                'houseStructure':this.houseStructureVal,
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
                'label':this.label,
                'remark':this.remark,
                'pic':this.picUrl,
                'accNameWater':this.accNameWater,
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
            }
            console.log(data)


            if(data.assetUser == '' || data.assetUser == undefined){
                this.$message({
                    message: '产权人不能为空',
                    type: 'warning'
                });
                return;
            }
            if(data.houseAddress == '' || data.houseAddress == undefined){
                this.$message({
                    message: '房屋坐落不能为空',
                    type: 'warning'
                });
                return;
            }
            if(data.houseNature == '' || data.houseNature == undefined){
                this.$message({
                    message: '房屋性质不能为空',
                    type: 'warning'
                });
                return;
            }
            if(data.houseStructure == '' || data.houseStructure == undefined){
                this.$message({
                    message: '房屋结构不能为空',
                    type: 'warning'
                });
                return;
            }

            if(data.houseArea == '' || data.houseArea == undefined){
                this.$message({
                    message: '房屋建筑面积不能为空',
                    type: 'warning'
                });
                return;
            }
            if(data.assetUse == '' || data.assetUse == undefined){
                this.$message({
                    message: '产权用途不能为空',
                    type: 'warning'
                });
                return;
            }
            if(data.landUse == '' || data.landUse == undefined){
                this.$message({
                    message: '土地用途为空',
                    type: 'warning'
                });
                return;
            }
            if(data.landNature == '' || data.landNature == undefined){
                this.$message({
                    message: '土地性质为空',
                    type: 'warning'
                });
                return;
            }
            if(data.houseNow == '' ||  data.houseNow == undefined){
                this.$message({
                    message: '房屋现状为空',
                    type: 'warning'
                });
                return;
            }
                this.$alert('已保存！', '提示', {
                    callback: action => {
                    this.$emit('changeShow','false')
                this.$emit('child-event',data,this.numIndex)
                        this.assetCode = '';
                        this.assetUser = '';
                        this.houseAddress = '';
                        this.assetUserOri = '';
                        this.houseNatureVal = '';
                        this.noCheckinArea = '';
                        this.houseStructureVal= '';
                        this.houseArea= '';
                        this.assetUseVal= '';
                        this.landArea= '';
                        this.landUseVal= '';
                        this.landNatureVal= '';
                        this.noCheckinVal= '';
                        this.realEstate= '';
                        this.realEstateAttachUrl= '';
                        this.realHouseAttachUrl= '';
                        this.realHouse= '';
                        this.realLandAttachUrl= '';
                        this.realLand= '';
                        this.dealAmount= '';
                        this.houseNowVal= '';
                        this.houseNo= '';
                        this.label= '';
                        this.remark= '';
                        this.picUrl= '';
                        this.accNameWater= '';
                        this.accNoWater= '';
                        this.accTypeWater= '';
                        this.accNameElec= '';
                        this.accNoElec= '';
                        this.accTypeElec= '';
                        this.accNameGas= '';
                        this.accNoGas = '';
                        this.accTypeGas = '';
                        this.legalArea = '';
                        this.assHouseArea = '';
                        this.fileList = [];
                        this.realEstateAttach=[],
                            this.realHouseAttach=[],
                            this.realLandAttach=[]
                        // this.$refs.upload.clearFiles()
            }
            });
        },
        upload(){
            return 'http://61.153.180.66:9098/file/attachment/upload?type=asset'
        },
        houseNatureChange(val){console.log(val)},
        assetUseChange(val){this.assetUseVal = val;},
        houseStructureChange(val){this.houseStructureVal = val;},
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
                if(fileList[i].response){
                    obj['url'] = fileList[i].response.data[0]
                    obj['name'] = fileList[i].name
                    img['name'] =  fileList[i].name+'#_#'+fileList[i].response.data[0]
                }else{
                    obj['url'] = fileList[i].name
                    obj['name'] = fileList[i].name
                    img['name'] =  fileList[i].name+'#_#'+fileList[i].url
                }

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
            console.log(fileList)
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
                    obj['url'] = fileList[i].name
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
                if(fileList[i].response){
                    obj['url'] = fileList[i].response.data[0]
                    obj['name'] = fileList[i].name
                    img['name'] =  fileList[i].name+'#_#'+fileList[i].response.data[0]
                }else{
                    obj['url'] = fileList[i].name
                    obj['name'] = fileList[i].name
                    img['name'] =  fileList[i].name+'#_#'+fileList[i].url
                }

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
                if(fileList[i].response){
                    obj['url'] = fileList[i].response.data[0]
                    obj['name'] = fileList[i].name
                    img['name'] =  fileList[i].name+'#_#'+fileList[i].response.data[0]
                }else{
                    obj['url'] = fileList[i].response.data[0]
                    obj['name'] = fileList[i].name
                    img['name'] =  fileList[i].name+'#_#'+fileList[i].url
                }
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
                if(fileList[i].response){
                    obj['url'] = fileList[i].response.data[0]
                    obj['name'] = fileList[i].name
                    img['name'] =  fileList[i].name+'#_#'+fileList[i].response.data[0]
                }else{
                    obj['url'] = fileList[i].response.data[0]
                    obj['name'] = fileList[i].name
                    img['name'] =  fileList[i].name+'#_#'+fileList[i].url
                }

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
                if(fileList[i].response){
                    obj['url'] = fileList[i].response.data[0]
                    obj['name'] = fileList[i].name
                    img['name'] =  fileList[i].name+'#_#'+fileList[i].response.data[0]
                }else{
                    obj['url'] = fileList[i].response.data[0]
                    obj['name'] = fileList[i].name
                    img['name'] =  fileList[i].name+'#_#'+fileList[i].url
                }
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
        handleRemove(file, fileList) {
            if(fileList.length < 4){
                this.showUpload = false
            }
        },
        phone(res, file, fileList) {
            if(fileList.length >= 3){
                this.showUpload = true
            }
            console.log(fileList)
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
            this.imgShow = true;
            this.showImgUrl = file.url;
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
<style>
</style>
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
    .aaaaa>>>.el-dialog {z-index: 99999;}
    .count>>>.el-upload--picture-card {width: 40px;height:40px;position: absolute;top:0;right:220px;}
    .count>>>.el-upload--picture-card i {width: 40px;height:40px;position: absolute;top:6px;left:0;}
    .count .phone>>>.el-upload--picture-card {width: 100px;height:100px;position: relative;right: inherit;}
    .count .phone>>>.el-upload--picture-card i {width: 140px;height:140px;position: relative;}
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
