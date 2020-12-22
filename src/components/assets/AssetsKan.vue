<template id="type">
           <div class="count kan">
               <el-dialog
                       title="资产详情"
                       :visible.sync="showDialog"
                       @close="handleClose"
                       width="700px">
               <el-row>
                   <el-form ref="form" v-if="tmp">
                       <el-col :span="24">
                           <el-form-item label="产权名：">
                               <el-input v-model="tmp.assetCode" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="产权人：">
                               <el-input v-model="tmp.assetUser" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="房屋坐落：">
                               <el-input v-model="tmp.houseAddress" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="原使用产权人：">
                               <el-input v-model="tmp.assetUserOri" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col  :span="24">
                           <el-form-item label="房屋性质：" >
                               <el-select  v-model="tmp.houseNature" placeholder="请选择" :disabled="disabled">
                                   <el-option
                                           v-for="item in options"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                   </el-option>
                               </el-select>
                           </el-form-item>
                       </el-col>
                       <el-col  :span="24">
                           <el-form-item label="房屋结构：" >
                               <el-select  v-model="tmp.houseStructure" placeholder="请选择" :disabled="disabled">
                                   <el-option
                                           v-for="item in options"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                   </el-option>
                               </el-select>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="未登记建筑面积：">
                               <el-input v-model="tmp.noCheckinArea" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="房屋建筑面积：">
                               <el-input v-model="tmp.houseArea" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col  :span="24">
                           <el-form-item label="产权用途：" >
                               <el-select  v-model="tmp.assetUse" placeholder="请选择" :disabled="disabled">
                                   <el-option
                                           v-for="item in options"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                   </el-option>
                               </el-select>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="土地面积：">
                               <el-input v-model="tmp.landArea" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col  :span="24">
                           <el-form-item label="土地用途：" >
                               <el-select  v-model="tmp.landUse" placeholder="请选择" :disabled="disabled">
                                   <el-option
                                           v-for="item in options"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                   </el-option>
                               </el-select>
                           </el-form-item>
                       </el-col>
                       <el-col  :span="24">
                           <el-form-item label="土地性质：" >
                               <el-select  v-model="tmp.landNature" placeholder="请选择" :disabled="disabled">
                                   <el-option
                                           v-for="item in options"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                   </el-option>
                               </el-select>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="不动产证：">
                               <el-input v-model="tmp.realEstate" placeholder="请输入内容" style="width: 200px;" :disabled="disabled"></el-input>
                                   <img class="meansBookImg"  :src="meansBook.realEstateAttach" alt="">
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="房产证：">
                               <el-input v-model="tmp.realHouse" placeholder="请输入内容" style="width: 200px;" :disabled="disabled"></el-input>
                               <img class="meansBookImg"  :src="meansBook.realHouseAttach" alt="">
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="土地证：">
                               <el-input v-model="tmp.realLand" placeholder="请输入内容" style="width: 200px;" :disabled="disabled"></el-input>
                               <img class="meansBookImg"  :src="meansBook.realLandAttach" alt="">
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="协议金额：">
                               <el-input v-model="tmp.dealAmount" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col  :span="24">
                           <el-form-item label="房屋现状：" >
                               <el-select  v-model="tmp.houseNow" placeholder="请选择" :disabled="disabled">
                                   <el-option
                                           v-for="item in options"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                   </el-option>
                               </el-select>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="房屋档案编号：">
                               <el-input v-model="tmp.houseNo" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col  :span="24">
                           <el-form-item label="未登记建筑：" >
                               <el-select  v-model="tmp.noCheckin" placeholder="请选择" :disabled="disabled">
                                   <el-option
                                           v-for="item in options"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                   </el-option>
                               </el-select>
                           </el-form-item>
                       </el-col>
                       <!--<el-col :span="24">-->
                           <!--<el-form-item label="标签：">-->
                               <!--<el-input v-model="meansBook.label" placeholder="请输入内容" :disabled="disabled"></el-input>-->
                           <!--</el-form-item>-->
                       <!--</el-col>-->
                       <el-col :span="24">
                           <el-form-item label="备注：">
                               <el-input v-model="tmp.remark" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24" class="phone">
                           <el-form-item label="照片：">
                               <img :src="tmp.pic" alt="" style="width: 100px; height: 100px">
                           </el-form-item>
                       </el-col>
                       <el-col class="table" :span="24" style="text-align: center;margin-top: 20px;">
                           <el-col :span="9">
                               水&nbsp;&nbsp;&nbsp;&nbsp;户名：
                               <el-input v-model="tmp.accNameWater" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-col>
                           <el-col :span="7">
                               户号
                               <el-input v-model="tmp.accNoWater" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-col>
                           <el-col :span="8">
                               缴款方式
                               <el-input v-model="tmp.accTypeWater" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-col>

                       </el-col>
                       <el-col class="table" :span="24" style="text-align: center;margin-top: 20px;">
                           <el-col :span="9">
                               电&nbsp;&nbsp;&nbsp;&nbsp;户名：
                               <el-input v-model="tmp.accNameElec" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-col>
                           <el-col :span="7">
                               户号
                               <el-input v-model="tmp.accNoElec" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-col>
                           <el-col :span="8">
                               缴款方式
                               <el-input v-model="tmp.accTypeElec" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-col>

                       </el-col>
                       <el-col class="table" :span="24" style="text-align: center;margin-top: 20px;">
                           <el-col :span="9">
                               燃气&nbsp;&nbsp;户名：
                               <el-input v-model="tmp.accNameGas" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-col>
                           <el-col :span="7">
                               户号
                               <el-input v-model="tmp.accNoGas" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-col>
                           <el-col :span="8">
                               缴款方式
                               <el-input v-model="tmp.accTypeGas" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-col>
                           <el-col :span="24" style="position: relative;margin: 0;">
                               <div class="map"></div>
                           </el-col>
                           <div v-if="typesss == 'sp'"  >
                               <div style="font-size: 30px;margin: 20px 0;">审批流程：</div>
                                   <el-col :span="24">
                                       <el-form-item label="审批：">
                                           <div class="sp">
                                               <div>
                                                   <div>发起人：</div>
                                                   <div v-for="item in approvalFindList.openRole[0].users"><img :src="item.avatar" alt=""><p>{{item.name}}</p></div>
                                               </div>
                                               <div>
                                                   <div>审批人：</div>
                                                   <div v-for="item in approvalFindList.checkRole[0].users"><img :src="item.avatar" alt=""><p>{{item.name}}</p></div>
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
                                                   <div v-for="item in approvalFindList.noticeRole[0].users"><img :src="item.avatar" alt=""><p>{{item.name}}</p></div>
                                               </div>
                                           </div>
                                       </el-form-item>

                                   </el-col>
                           </div>
                       </el-col>
                   </el-form>
                   <el-form ref="form" v-else>
                       <el-col :span="24">
                           <el-form-item label="产权名：">
                               <el-input v-model="meansBook.assetCode" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="产权人：">
                               <el-input v-model="meansBook.assetUser" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="房屋坐落：">
                               <el-input v-model="meansBook.houseAddress" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="原使用产权人：">
                               <el-input v-model="meansBook.assetUserOri" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col  :span="24">
                           <el-form-item label="房屋性质：" >
                               <el-select  v-model="meansBook.houseNature" placeholder="请选择" :disabled="disabled">
                                   <el-option
                                           v-for="item in options"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                   </el-option>
                               </el-select>
                           </el-form-item>
                       </el-col>
                       <el-col  :span="24">
                           <el-form-item label="房屋结构：" >
                               <el-select  v-model="meansBook.houseStructure" placeholder="请选择" :disabled="disabled">
                                   <el-option
                                           v-for="item in options"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                   </el-option>
                               </el-select>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="未登记建筑面积：">
                               <el-input v-model="meansBook.noCheckinArea" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="房屋建筑面积：">
                               <el-input v-model="meansBook.landArea" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col  :span="24">
                           <el-form-item label="产权用途：" >
                               <el-select  v-model="meansBook.assetUse" placeholder="请选择" :disabled="disabled">
                                   <el-option
                                           v-for="item in options"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                   </el-option>
                               </el-select>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="土地面积：">
                               <el-input v-model="meansBook.landArea" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col  :span="24">
                           <el-form-item label="土地用途：" >
                               <el-select  v-model="meansBook.landUse" placeholder="请选择" :disabled="disabled">
                                   <el-option
                                           v-for="item in options"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                   </el-option>
                               </el-select>
                           </el-form-item>
                       </el-col>
                       <el-col  :span="24">
                           <el-form-item label="土地性质：" >
                               <el-select  v-model="meansBook.landNature" placeholder="请选择" :disabled="disabled">
                                   <el-option
                                           v-for="item in options"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                   </el-option>
                               </el-select>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="不动产证：">
                               <el-input v-model="meansBook.realEstate" placeholder="请输入内容" style="width: 200px;" :disabled="disabled"></el-input>
                               <img class="meansBookImg"  :src="meansBook.realEstateAttach" alt="">
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="房产证：">
                               <el-input v-model="meansBook.realHouse" placeholder="请输入内容" style="width: 200px;" :disabled="disabled"></el-input>
                               <img class="meansBookImg"  :src="meansBook.realHouseAttach" alt="">
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="土地证：">
                               <el-input v-model="meansBook.realLand" placeholder="请输入内容" style="width: 200px;" :disabled="disabled"></el-input>
                               <img class="meansBookImg"  :src="meansBook.realLandAttach" alt="">
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="协议金额：">
                               <el-input v-model="meansBook.dealAmount" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col  :span="24">
                           <el-form-item label="房屋现状：" >
                               <el-select  v-model="meansBook.houseNow" placeholder="请选择" :disabled="disabled">
                                   <el-option
                                           v-for="item in options"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                   </el-option>
                               </el-select>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24">
                           <el-form-item label="房屋档案编号：">
                               <el-input v-model="meansBook.houseNo" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col  :span="24">
                           <el-form-item label="未登记建筑：" >
                               <el-select  v-model="meansBook.noCheckin" placeholder="请选择" :disabled="disabled">
                                   <el-option
                                           v-for="item in options"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                   </el-option>
                               </el-select>
                           </el-form-item>
                       </el-col>
                       <!--<el-col :span="24">-->
                       <!--<el-form-item label="标签：">-->
                       <!--<el-input v-model="meansBook.label" placeholder="请输入内容" :disabled="disabled"></el-input>-->
                       <!--</el-form-item>-->
                       <!--</el-col>-->
                       <el-col :span="24">
                           <el-form-item label="备注：">
                               <el-input v-model="meansBook.remark" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-form-item>
                       </el-col>
                       <el-col :span="24" class="phone">
                           <el-form-item label="照片：">
                               <img :src="meansBook.pic" alt="" style="width: 100px; height: 100px">
                           </el-form-item>
                       </el-col>
                       <el-col class="table" :span="24" style="text-align: center;margin-top: 20px;">
                           <el-col :span="9">
                               水&nbsp;&nbsp;&nbsp;&nbsp;户名：
                               <el-input v-model="meansBook.accNameWater" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-col>
                           <el-col :span="7">
                               户号
                               <el-input v-model="meansBook.accNoWater" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-col>
                           <el-col :span="8">
                               缴款方式
                               <el-input v-model="meansBook.accTypeWater" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-col>

                       </el-col>
                       <el-col class="table" :span="24" style="text-align: center;margin-top: 20px;">
                           <el-col :span="9">
                               电&nbsp;&nbsp;&nbsp;&nbsp;户名：
                               <el-input v-model="meansBook.accNameElec" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-col>
                           <el-col :span="7">
                               户号
                               <el-input v-model="meansBook.accNoElec" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-col>
                           <el-col :span="8">
                               缴款方式
                               <el-input v-model="meansBook.accTypeElec" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-col>

                       </el-col>
                       <el-col class="table" :span="24" style="text-align: center;margin-top: 20px;">
                           <el-col :span="9">
                               燃气&nbsp;&nbsp;户名：
                               <el-input v-model="meansBook.accNameGas" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-col>
                           <el-col :span="7">
                               户号
                               <el-input v-model="meansBook.accNoGas" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-col>
                           <el-col :span="8">
                               缴款方式
                               <el-input v-model="meansBook.accTypeGas" placeholder="请输入内容" :disabled="disabled"></el-input>
                           </el-col>
                           <el-col :span="24" style="position: relative;margin: 0;">
                               <div class="map"></div>
                           </el-col>
                           <div v-if="typesss == 'sp'"  >
                               <div style="font-size: 30px;margin: 20px 0;">审批流程：</div>
                               <el-col :span="24">
                                   <el-form-item label="审批：">
                                       <div class="sp">
                                           <div>
                                               <div>发起人：</div>
                                               <div v-for="item in approvalFindList.openRole[0].users"><img :src="item.avatar" alt=""><p>{{item.name}}</p></div>
                                           </div>
                                           <div>
                                               <div>审批人：</div>
                                               <div v-for="item in approvalFindList.checkRole[0].users"><img :src="item.avatar" alt=""><p>{{item.name}}</p></div>
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
                                               <div v-for="item in approvalFindList.noticeRole[0].users"><img :src="item.avatar" alt=""><p>{{item.name}}</p></div>
                                           </div>
                                       </div>
                                   </el-form-item>

                               </el-col>
                           </div>
                       </el-col>
                   </el-form>
               </el-row>
               </el-dialog>
           </div>
</template>

<script>
    export default {
  name: 'login',
        props:{
            AssetsKanVisible:{
                type: Boolean,
                default: false,
            },
            mes:{type:String}
        },
  data () {
    return {
        meansBook:'',
        showDialog:false,
        input:'',
        input01:'00125',
        input02:'中国工商银行股份有限公司湖州南浔支行',
        input03:'南浔镇宝善路21号',
        input04:'中国工商银行股份有限公司湖州南浔支行',
        input05:'353.16 m²',
        input06:'159.15 m²',
        input07:'文保单位',
        input08:'双证已注销',
        input001:'南浔旅游风景区',
        input002:'0123456789',
        input003:'代缴',
        input2:'',
        value1:'混合',
        value2:'商业划拨',
        value3:'空闲',
        disabled:true,
        disableds:true,
        dialogImageUrl: '',
        dialogVisible: false,
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
        approvalFindList:'',
        typesss:'',
        map: "", // 对象
        zoom: 10, // 地图的初始化级别，及放大比例
        multipleSelection: [],
        types:'',
        fileList: [{
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
            name: 'food2.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }],
        tmp:null
    }
  },
        components:{
        },
    watch:{
        // 监听 addOrUpdateVisible 改变
        AssetsKanVisible(oldVal,newVal){
            this.showDialog = this.AssetsKanVisible
        },
    },
    methods:{
        detail(param,str){
            var id = param;
            console.log(str)
            this.typesss = str
            if(str == 'sp'){
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
                }else{
                    this.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                }
            })
            }
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
                    this.meansBook = res.data.data.meansBook;
                    this.tmp = res.data.data.tmp
                    console.log(this.meansBook)
            }else{
                this.$message({
                    message: res.data.msg,
                    type: 'warning'
                });
            }
        })
        },
        // open() {
        //     this.$alert('修改已提交，等待管理员审核', '提示', {
        //         callback: action => {
        //             this.$emit('changeShow','false')
        //         }
        //     });
        // },
        handleClose(){
            // 子组件调用父组件方法，并传递参数
            this.$emit('changeShow','false')
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
    .meansBookImg {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 0;
        right: 220px;
    }
    .map {
        height: 250px;
        width:600px;
        position: relative;
        left:50%;
        margin-left: -300px;
        background: aliceblue;
        margin-top: 30px;
    }
    .count>>>.charts {position: relative;left:50%;margin-left: -150px;}
    .count>>>.col {margin: 0 25px 25px 0;background: #fff;}
    .count>>>.el-form-item__label {width: 30%;font-size: 14px;line-height: 40px;}
    .count>>>.el-form-item {margin-bottom: 5px;}
    .count>>>.el-input {width: 400px;}
    .count>>>.el-upload--picture-card {width: 40px;height:40px;position: absolute;top:0;right:220px;}
    .count>>>.el-upload--picture-card i {width: 40px;height:40px;position: absolute;top:6px;left:0;}
    .count .phone>>>.el-upload--picture-card {width: 140px;height:140px;position: relative;right: inherit;}
    .count .phone>>>.el-upload--picture-card i {width: 140px;height:140px;position: relative;}
    .kan>>>.el-input.is-disabled .el-input__inner {color: #606266;}
    .files>>>.el-upload-list {width: 30%;margin-left: 33%;}
    .coordinate>>>.el-form-item__label {width: 25%;}
    .sum {height:100px;background: #fff;width: 90%;}
    .sumLeft {float:left;line-height: 115px;margin-left: 48px;}
    .sumRight {margin-left: 130px;padding-top: 20px;}
    .sumRight p:first-child {font-size: 16px;color: #666;}
    .sumRight p:last-child {font-size: 30px;color: #333;margin-top: 10px;}
    .count .table>>>.el-input {width: 150px;}
    .sp {width: 100%;position: relative;}
    .sp div {display: inline-block;text-align: center;position: relative;z-index: 2;font-size: 12px;margin-right: 5px;}
    .sp img {width: 40px;height:40px;background-color: #fff;}
    .sp p {width: 100%;text-align: center;line-height: normal;margin-top: -10px;font-size: 12px;color: #333;}
    .sp .hr {display: block;height:1px;width: 60%;z-index: 1;position: absolute;top:22px;left:110px;border-bottom: 3px dotted #333;}
    .sp .add {position: absolute;top:0;left:50%;font-size: 40px;color: #333;font-weight: bold;}
</style>
