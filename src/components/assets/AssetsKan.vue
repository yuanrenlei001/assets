<template id="type">
           <div class="count kan">
               <el-dialog
                        class="abow_dialog"
                       title="资产管理 > 资产详情"
                       :visible.sync="showDialog"
                       @close="handleClose"
                       width="1000px">
               <el-row>
                   <el-form ref="form" >
                       <el-col :span="24" class="newKan"  style="padding-top: 26px;">
                           <el-col :span="12">
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.assetCode == 'assetCode'?'color:red':''">产权名：</div></el-col>
                                   <el-col :lg="13"><el-input v-model="tmp&&tmp.assetCode?tmp.assetCode:meansBook.assetCode" placeholder="" :disabled="disabled"></el-input></el-col>
                               </el-col>
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.assetUser == 'assetUser'?'color:red':''">产权人：</div></el-col>
                                   <el-col :lg="13"><el-input v-model="tmp&&tmp.assetUser?tmp.assetUser:meansBook.assetUser" placeholder="" :disabled="disabled"></el-input></el-col>
                               </el-col>
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.assetUserOri == 'assetUserOri'?'color:red':''">原使用产权人：</div></el-col>
                                   <el-col :lg="13"><el-input v-model="tmp&&tmp.assetUserOri?tmp.assetUserOri:meansBook.assetUserOri" placeholder="" :disabled="disabled"></el-input></el-col>
                               </el-col>
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.houseAddress == 'houseAddress'?'color:red':''">房屋坐落：</div></el-col>
                                   <el-col :lg="13"><el-input v-model="tmp&&tmp.houseAddress?tmp.houseAddress:meansBook.houseAddress" placeholder="" :disabled="disabled"></el-input></el-col>
                               </el-col>
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.houseNature == 'houseNature'?'color:red':''">房屋性质：</div></el-col>
                                   <el-col :lg="13"><el-input v-model="tmp&&tmp.houseNature?tmp.houseNature:meansBook.houseNature" placeholder="" :disabled="disabled"></el-input></el-col>
                               </el-col>
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.houseStructure == 'houseStructure'?'color:red':''">房屋结构：</div></el-col>
                                   <el-col :lg="13"><el-input v-model="tmp&&tmp.houseStructure?tmp.houseStructure:meansBook.houseStructure" placeholder="" :disabled="disabled"></el-input></el-col>
                               </el-col>
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.assetUse == 'assetUse'?'color:red':''">产权用途：</div></el-col>
                                   <el-col :lg="13">
                                       <el-input v-model="tmp&&tmp.assetUse?tmp.assetUse:meansBook.assetUse" placeholder="" :disabled="disabled"></el-input>
                                   </el-col>
                               </el-col>
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.landArea == 'landArea'?'color:red':''">土地面积 (m²)：</div></el-col>
                                   <el-col :lg="13"><el-input v-model="tmp&&tmp.landArea?tmp.landArea:meansBook.landArea" placeholder="" :disabled="disabled"></el-input></el-col>
                               </el-col>
                               <el-col  :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.landUse == 'landUse'?'color:red':''">土地用途：</div></el-col>
                                   <el-col :lg="13"><el-input v-model="tmp&&tmp.landUse?tmp.landUse:meansBook.landUse" placeholder="" :disabled="disabled"></el-input></el-col>
                               </el-col>
                               <el-col  :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.landNature == 'landNature'?'color:red':''">土地性质：</div></el-col>
                                   <el-col :lg="13"><el-input v-model="tmp&&tmp.landNature?tmp.landNature:meansBook.landNature" placeholder="" :disabled="disabled"></el-input></el-col>
                               </el-col>
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.realEstate == 'realEstate'?'color:red':''">不动产证：</div></el-col>
                                   <el-col :lg="13">
                                       <el-input v-model="tmp&&tmp.realEstate?tmp.realEstate:meansBook.realEstate" placeholder="" :disabled="disabled"></el-input>
                                   </el-col>
                               </el-col>
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.realEstateAttach == 'realEstateAttach'?'color:red':''">不动产证附件：</div></el-col>
                                   <el-col :lg="13">
                                       <div v-for="item in bdPic" class="newKan_img">
                                           <img src="@/assets/pdf.png" alt="" v-if="item.hz==='.pdf'" @click="file(item.url)">
                                           <el-image
                                                   v-else
                                                   style="width: 100px; height: 120px"
                                                   :src="item.url"
                                                   :preview-src-list="[item.url]">
                                           </el-image>
                                       </div>
                                   </el-col>
                               </el-col>
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.realLand == 'realLand'?'color:red':''">土地证：</div></el-col>
                                   <el-col :lg="13">
                                       <el-input v-model="tmp&&tmp.realLand?tmp.realLand:meansBook.realLand" placeholder=""  :disabled="disabled"></el-input>
                                   </el-col>
                               </el-col>
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.realLandAttach == 'realLandAttach'?'color:red':''">土地证附件：</div></el-col>
                                   <el-col :lg="13">
                                       <div v-for="item in tdPic" class="newKan_img">
                                           <img src="@/assets/pdf.png" alt="" v-if="item.hz==='.pdf'" @click="file(item.url)">
                                           <el-image
                                                   v-else
                                                   style="width: 100px; height: 120px"
                                                   :src="item.url"
                                                   :preview-src-list="[item.url]">
                                           </el-image>
                                       </div>
                                   </el-col>
                               </el-col>
                           </el-col>
                           <el-col :span="12">
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.houseArea == 'houseArea'?'color:red':''">房屋建筑面积 (m²)：</div></el-col>
                                   <el-col :lg="13"><el-input v-model="tmp&&tmp.houseArea?tmp.houseArea:meansBook.houseArea" placeholder="" :disabled="disabled"></el-input></el-col>
                               </el-col>
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.noCheckinArea == 'noCheckinArea'?'color:red':''">未登记建筑面积 (m²)：</div></el-col>
                                   <el-col :lg="13">
                                       <el-input  placeholder="" :disabled="disabled" v-model="tmp&&tmp.noCheckinArea?tmp.noCheckinArea:meansBook.noCheckinArea"></el-input>
                                   </el-col>
                               </el-col>
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.legalArea == 'legalArea'?'color:red':''">合法住宅面积 (m²)：</div></el-col>
                                   <el-col :lg="13">
                                       <el-input v-model="tmp&&tmp.legalArea?tmp.legalArea:meansBook.legalArea" placeholder="" :disabled="disabled"></el-input>
                                   </el-col>
                               </el-col>
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.assHouseArea == 'assHouseArea'?'color:red':''">辅助用房面积 (m²)：</div></el-col>
                                   <el-col :lg="13">
                                       <el-input v-model="tmp&&tmp.assHouseArea?tmp.assHouseArea:meansBook.assHouseArea" placeholder="" :disabled="disabled"></el-input>
                                   </el-col>
                               </el-col>
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.dealAmount == 'dealAmount'?'color:red':''">协议金额：</div></el-col>
                                   <el-col :lg="13">
                                       <el-input v-if="(tmp&&tmp.dealAmount?tmp.dealAmount:meansBook.dealAmount) == null"  placeholder="" :disabled="disabled" value=""></el-input>
                                       <el-input v-else v-model="tmp&&tmp.dealAmount?tmp.dealAmount:meansBook.dealAmount +' m²'" placeholder="" :disabled="disabled"></el-input>
                                   </el-col>
                               </el-col>
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft"  :style="showObj.houseNow == 'houseNow'?'color:red':''">房屋现状：</div></el-col>
                                   <el-col :lg="13">
                                       <el-input v-model="tmp&&tmp.houseNow?tmp.houseNow:meansBook.houseNow" placeholder="" :disabled="disabled"></el-input>
                                   </el-col>
                               </el-col>
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.houseNo == 'houseNo'?'color:red':''">房屋档案编号：</div></el-col>
                                   <el-col :lg="13">
                                       <el-input v-model="tmp&&tmp.houseNo?tmp.houseNo:meansBook.houseNo" placeholder="" :disabled="disabled"></el-input>
                                   </el-col>
                               </el-col>
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.label == 'label'?'color:red':''">标签：</div></el-col>
                                   <el-col :lg="13">
                                       <el-input v-model="tmp&&tmp.label?tmp.label:meansBook.label" placeholder="" :disabled="disabled"></el-input>
                                   </el-col>
                               </el-col>
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.remark == 'remark'?'color:red':''">备注：</div></el-col>
                                   <el-col :lg="13">
                                       <el-input v-model="tmp&&tmp.remark?tmp.remark:meansBook.remark" placeholder="" :disabled="disabled"></el-input>
                                   </el-col>
                               </el-col>

                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.realHouse == 'realHouse'?'color:red':''">房产证：</div></el-col>
                                   <el-col :lg="13">
                                       <el-input v-model="tmp&&tmp.realHouse?tmp.realHouse:meansBook.realHouse" placeholder="" :disabled="disabled"></el-input>

                                   </el-col>
                               </el-col>
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.realHouseAttach == 'realHouseAttach'?'color:red':''">房产证附件：</div></el-col>
                                   <el-col :lg="13">
                                       <div v-for="item in fcPic"  class="newKan_img">
                                           <img src="@/assets/pdf.png" alt="" v-if="item.hz==='.pdf'" @click="file(item.url)">
                                           <el-image
                                                   v-else
                                                   style="width: 100px; height: 120px"
                                                   :src="item.url"
                                                   :preview-src-list="[item.url]">
                                           </el-image>
                                       </div>

                                   </el-col>
                               </el-col>
                               <el-col :lg="22">
                                   <el-col :lg="11"><div class="textLeft" :style="showObj.pic == 'pic'?'color:red':''">照片：</div></el-col>
                                   <el-col :lg="13">
                                       <el-image
                                               v-for="item in imgpicc"
                                               v-if="imgpicc.length>0"
                                               style="width: 100px; height: 100px;margin-right: 10px;"
                                               :src="item.url"
                                               :preview-src-list="[item.url]">
                                       </el-image>
                                   </el-col>
                               </el-col>
                           </el-col>
                           <el-col :span="24">
                               <el-col :lg="5"><div class="textLeft" :style="showObj.accNameWater == 'accNameWater'?'color:red':''">水&nbsp;&nbsp;&nbsp;&nbsp;户名：</div></el-col>
                               <el-col :lg="4"><el-input v-model="tmp&&tmp.accNameWater?tmp.accNameWater:meansBook.accNameWater" placeholder="" :disabled="disabled"></el-input></el-col>
                               <el-col :lg="3"><div class="textLeft" :style="showObj.accNoWater == 'accNoWater'?'color:red':''" style="text-align: center;margin-right: 0;">户号：</div></el-col>
                               <el-col :lg="4"><el-input v-model="tmp&&tmp.accNoWater?tmp.accNoWater:meansBook.accNoWater" placeholder="" :disabled="disabled"></el-input></el-col>
                               <el-col :lg="3"><div class="textLeft" :style="showObj.accTypeWater == 'accTypeWater'?'color:red':''" style="text-align: center;margin-right: 0;">缴款方式：</div></el-col>
                               <el-col :lg="4">
                                   <el-input v-model="tmp&&tmp.accTypeWater?tmp.accTypeWater:meansBook.accTypeWater" placeholder="" :disabled="disabled"></el-input>
                               </el-col>
                           </el-col>
                           <el-col style="margin-top: 26px;" :span="24">
                               <el-col :lg="5"><div class="textLeft" :style="showObj.accNameElec == 'accNameElec'?'color:red':''">电&nbsp;&nbsp;&nbsp;&nbsp;户名：</div></el-col>
                               <el-col :lg="4"><el-input v-model="tmp&&tmp.accNameElec?tmp.accNameElec:meansBook.accNameElec" placeholder="" :disabled="disabled"></el-input></el-col>
                               <el-col :lg="3"><div class="textLeft" :style="showObj.accNoElec == 'accNoElec'?'color:red':''" style="text-align: center;margin-right: 0;">户号：</div></el-col>
                               <el-col :lg="4"><el-input v-model="tmp&&tmp.accNoElec?tmp.accNoElec:meansBook.accNoElec" placeholder="" :disabled="disabled"></el-input></el-col>
                               <el-col :lg="3"><div class="textLeft"  :style="showObj.accTypeElec == 'accTypeElec'?'color:red':''" style="text-align: center;margin-right: 0;">缴款方式：</div></el-col>
                               <el-col :lg="4">
                                   <el-input v-model="tmp&&tmp.accTypeElec?tmp.accTypeElec:meansBook.accTypeElec" placeholder="" :disabled="disabled"></el-input>
                               </el-col>
                           </el-col>
                           <el-col style="margin-top: 26px;" :span="24">
                               <el-col :lg="5"><div class="textLeft" :style="showObj.accNameGas == 'accNameGas'?'color:red':''">燃气&nbsp;&nbsp;&nbsp;&nbsp;户名：</div></el-col>
                               <el-col :lg="4"><el-input v-model="tmp&&tmp.accNameGas?tmp.accNameGas:meansBook.accNameGas" placeholder="" :disabled="disabled"></el-input></el-col>
                               <el-col :lg="3"><div class="textLeft" :style="showObj.accNoGas == 'accNoGas'?'color:red':''" style="text-align: center;margin-right: 0;">户号：</div></el-col>
                               <el-col :lg="4"><el-input v-model="tmp&&tmp.accNoGas?tmp.accNoGas:meansBook.accNoGas" placeholder="" :disabled="disabled"></el-input></el-col>
                               <el-col :lg="3"><div class="textLeft" :style="showObj.accTypeGas == 'accTypeGas'?'color:red':''" style="text-align: center;margin-right: 0;">缴款方式：</div></el-col>
                               <el-col :lg="4">
                                   <el-input v-model="tmp&&tmp.accTypeGas?tmp.accTypeGas:meansBook.accTypeGas" placeholder="" :disabled="disabled"></el-input>
                               </el-col>
                           </el-col>
                           <el-col :span="24">
                               <div  class="map" id="mapid" ref="mapsss"></div>
                           </el-col>
<div style="display: none;">

    <el-col :span="22">
        <el-col :lg="22">
            <el-col :lg="8"><div class="textLeft"> 水&nbsp;&nbsp;&nbsp;&nbsp;户名：</div></el-col>
            <el-col :lg="6"><el-input v-model="tmp&&tmp.accNameWater?tmp.accNameWater:meansBook.accNameWater" placeholder="" :disabled="disabled"></el-input></el-col>
            <el-col :lg="4"><div class="textLeft"> 户号：</div></el-col>
            <el-col :lg="6"><el-input v-model="tmp&&tmp.accNoWater?tmp.accNoWater:meansBook.accNoWater" placeholder="" :disabled="disabled"></el-input></el-col>
            <el-col style="margin-top: 26px;" :lg="8"><div class="textLeft"> 水&nbsp;&nbsp;&nbsp;&nbsp;缴款方式：</div></el-col>
            <el-col style="margin-top: 26px;" :lg="16"><el-input v-model="tmp&&tmp.accTypeWater?tmp.accTypeWater:meansBook.accTypeWater" placeholder="" :disabled="disabled"></el-input></el-col>
        </el-col>
        <el-col :lg="22">
            <el-col :lg="8"><div class="textLeft"> 电&nbsp;&nbsp;&nbsp;&nbsp;户名：</div></el-col>
            <el-col :lg="6"><el-input v-model="tmp&&tmp.accNameElec?tmp.accNameElec:meansBook.accNameElec" placeholder="" :disabled="disabled"></el-input></el-col>
            <el-col :lg="4"><div class="textLeft"> 户号：</div></el-col>
            <el-col :lg="6"><el-input v-model="tmp&&tmp.accNoElec?tmp.accNoElec:meansBook.accNoElec" placeholder="" :disabled="disabled"></el-input></el-col>
            <el-col style="margin-top: 26px;" :lg="8"><div class="textLeft"> 电&nbsp;&nbsp;&nbsp;&nbsp;缴款方式：</div></el-col>
            <el-col style="margin-top: 26px;" :lg="16"><el-input v-model="tmp&&tmp.accTypeElec?tmp.accTypeElec:meansBook.accTypeElec" placeholder="" :disabled="disabled"></el-input></el-col>
        </el-col>
        <el-col :lg="22">
            <el-col :lg="8"><div class="textLeft"> 燃气&nbsp;&nbsp;&nbsp;&nbsp;户名：</div></el-col>
            <el-col :lg="6"><el-input v-model="tmp&&tmp.accNameGas?tmp.accNameGas:meansBook.accNameGas" placeholder="" :disabled="disabled"></el-input></el-col>
            <el-col :lg="4"><div class="textLeft"> 户号：</div></el-col>
            <el-col :lg="6"><el-input v-model="tmp&&tmp.accNoGas?tmp.accNoGas:meansBook.accNoGas" placeholder="" :disabled="disabled"></el-input></el-col>
            <el-col style="margin-top: 26px;" :lg="8"><div class="textLeft"> 燃气&nbsp;&nbsp;&nbsp;&nbsp;缴款方式：</div></el-col>
            <el-col style="margin-top: 26px;" :lg="16"><el-input v-model="tmp&&tmp.accTypeGas?tmp.accTypeGas:meansBook.accTypeGas" placeholder="" :disabled="disabled"></el-input></el-col>
        </el-col>
    </el-col>

</div>
                       </el-col>
                   </el-form>
                   <el-col :span="23" style="text-align: right;margin-top: 40px;margin-bottom: 40px;">
                       <el-button type="primary" round @click="closes">确定</el-button>
                       <el-button type="success" round @click="closes">取消</el-button>
                   </el-col>
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
            AssetsKanVisible:{
                type: Boolean,
                default: false,
            },
            mes:{type:String}
        },
  data () {
    return {
        showObj:'',
        map:null,
        _marker:null,
        showImgUrl:'',
        imgShow:false,
        meansBook:{'assetCode':123},
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
        tmp:null,
        bdPic:[],
        fcPic:[],
        tdPic:[],
        imgpicc:[],
        mapList:'',
        polygon:'',
        ign:''
    }
  },
        components:{
        },
        created(){
        },
    watch:{
        // 监听 addOrUpdateVisible 改变
        AssetsKanVisible(oldVal,newVal){
            this.showDialog = this.AssetsKanVisible
        },
    },
    methods:{
        closes(){
            this.$emit('changeShow','false')
      },
        file(url){
            window.open(url)
        },
      imgShows(url){
          this.imgShow = true;
          this.showImgUrl = url;
      },
        imgShowFlase(){
            this.imgShow = false;
            console.log(123)
        },
        list(type){
            console.log(type)
            const geoServerUrl = 'http://61.153.180.66:9087/geoserver';
            const geoParams= {
                service: 'WFS',
                version: '1.1.0',
                request: 'GetFeature',
                typeName: 'oldtown:zch_shape',
                outputFormat: 'application/json',
                srsName: 'EPSG:4326',
            };

            const url = this.getAjaxMap + L.Util.getParamString(geoParams, geoServerUrl);
            // console.log(L.Util.getParamString(geoParams, geoServerUrl))
            var that = this;
            var type = type;
            this.$axios({
                url:   '/mapServePath/geoserver/ows'+L.Util.getParamString(geoParams, geoServerUrl),
                method: "get",
                dataType: "json",
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data:{}
            }).then(res => {
                var tabStr = "";
                var my_spots = [];
                //点击地图上图标
                let arr = res.data.features;
                var  data = ''
                for(let i=0;i<arr.length;i++){
                    let code = arr[i].properties.code.split(',');
                    console.log(code)
                    if(code.indexOf(type) == 0){
                        data = arr[i]
                    }
                }
                if(data !== ''){
                    // that.polygon.clearLayers();
                    that.polygon = L.geoJSON(data,{color:'red'}).addTo(that.map).on("click", that.markerOnClicks);
                }else{
                    // that.polygon.clearLayers();
                }
            })
        },
        detail(param,str){
            // T2610,LT2630"
            var id = param;
            var that = this;
            this.$nextTick(()=>{
                this.map = L.map(this.$refs['mapsss'], {
                    center: [30.878191, 120.426207],
                    zoom: 12,
                    maxZoom: 18,
                    minZoom: 12,
                    zoomControl:false,
                    attributionControl: false,
                    crs: L.CRS.EPSG4326
                });
                var matrixIds = [];
                for (var i = 0; i < 22; ++i) {
                    matrixIds[i] = {
                        identifier: "" + i,
                        topLeftCorner: new L.LatLng(90, -180)
                    };
                }
                console.log(new L.TileLayer)
                //
                // 图层名称：nanxun:nanxun_handdrawing
                // url：http://192.168.0.90:8080/geoserver/gwc/service/wmts
                var ign = new L.TileLayer.WMTS("http://61.153.180.66:9087/geoserver/gwc/service/wmts", {
                    layer:'nanxun_jbjbMaps', //影像名称
                    // layer:"oldtown:nxshdt", //手绘名称
                    tilematrixSet: "EPSG:4326", //GeoServer使用的网格名称
                    width: 20,
                    transparent:true,
                    height: 20,
                    format: 'image/png',
                    matrixIds: matrixIds,
                })
                this.ign = ign
                this.map.addLayer(ign).on("click", this.fixedsss);
                setTimeout(function () {
                    that.map.invalidateSize(true);
                }, 10);
            })
            this.typesss = str
            console.log(str)
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
                this.$axios({
                    url: this.getAjax + '/admin/meansAdmin/findDetails?id='+id,
                    method: "get",
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Token':sessionStorage.getItem('token')
                    },
                    data:{}
                })
                    .then(res => {
                        if(res.data.code = '1001'){
                            this.meansBook = res.data.data.meansBook;
                            this.list(res.data.data.meansBook.assetCode)
                            this.tmp = res.data.data.tmp
                            that.showObj = ''
                            that.bdPic = []
                            that.fcPic = []
                            that.tdPic = []
                            that.imgpicc = []
                            var file= []
                            if(res.data.data.tmp){
                                if(res.data.data.tmp.realEstateAttach && res.data.data.tmp.realEstateAttach!==''){
                                    var imgbd = res.data.data.tmp.realEstateAttach.split(',')
                                    for(var j =0;j<imgbd.length;j++){
                                        var obj4 = {}
                                        obj4['name']= imgbd[j].split('#_#')[0]
                                        obj4['url']= imgbd[j].split('#_#')[1]
                                        obj4['hz']= imgbd[j].split('#_#')[1].substring(imgbd[j].split('#_#')[1].lastIndexOf("."))
                                        that.bdPic.push(obj4);
                                    }
                                }
                                if(res.data.data.tmp.realHouseAttach && res.data.data.tmp.realHouseAttach !==''){
                                    var imgfc = res.data.data.tmp.realHouseAttach.split(',');
                                    for(var z =0;z<imgfc.length;z++){
                                        var obj4 = {}
                                        obj4['name']= imgfc[z].split('#_#')[0]
                                        obj4['url']= imgfc[z].split('#_#')[1]
                                        obj4['hz']= imgfc[z].split('#_#')[1].substring(imgfc[z].split('#_#')[1].lastIndexOf("."))
                                        that.fcPic.push(obj4);
                                        console.log(that.fcPic)
                                    }
                                }
                                if(res.data.data.tmp.realLandAttach && res.data.data.tmp.realLandAttach!==''){
                                    var imgtd = res.data.data.tmp.realLandAttach.split(',');
                                    for(var x =0;x<imgtd.length;x++){
                                        var obj4 = {}
                                        obj4['name']= imgtd[x].split('#_#')[0]
                                        obj4['url']= imgtd[x].split('#_#')[1]
                                        obj4['hz']= imgtd[x].split('#_#')[1].substring(imgtd[x].split('#_#')[1].lastIndexOf("."))
                                        that.tdPic.push(obj4);
                                    }
                                }
                                if(res.data.data.tmp.pic && res.data.data.tmp.pic !==''){
                                    var imgpicc = res.data.data.tmp.pic.split(',');
                                    if(imgpicc == ''){
                                        that.imgpicc =[]
                                    }else{
                                        for(var k =0;k<imgpicc.length;k++){
                                            var obj4 = {}
                                            obj4['url']= imgpicc[k].split('#_#')[1]
                                            obj4['hz']= imgpicc[k].split('#_#')[1].substring(imgpicc[k].split('#_#')[1].lastIndexOf("."))
                                            that.imgpicc.push(obj4);
                                        }
                                    }
                                }
                            }
                            else{
                                if(res.data.data.meansBook.realEstateAttach && res.data.data.meansBook.realEstateAttach!==''){
                                    var imgbd = res.data.data.meansBook.realEstateAttach.split(',')
                                    for(var j =0;j<imgbd.length;j++){
                                        var obj4 = {}
                                        obj4['name']= imgbd[j].split('#_#')[0]
                                        obj4['url']= imgbd[j].split('#_#')[1]
                                        obj4['hz']= imgbd[j].split('#_#')[1].substring(imgbd[j].split('#_#')[1].lastIndexOf("."))
                                        that.bdPic.push(obj4);
                                    }
                                }
                                if(res.data.data.meansBook.realHouseAttach && res.data.data.meansBook.realHouseAttach !==''){
                                    var imgfc = res.data.data.meansBook.realHouseAttach.split(',');
                                    for(var z =0;z<imgfc.length;z++){
                                        var obj4 = {}
                                        obj4['name']= imgfc[z].split('#_#')[0]
                                        obj4['url']= imgfc[z].split('#_#')[1]
                                        obj4['hz']= imgfc[z].split('#_#')[1].substring(imgfc[z].split('#_#')[1].lastIndexOf("."))
                                        that.fcPic.push(obj4);
                                        console.log(that.fcPic)
                                    }
                                }
                                if(res.data.data.meansBook.realLandAttach && res.data.data.meansBook.realLandAttach!==''){
                                    var imgtd = res.data.data.meansBook.realLandAttach.split(',');
                                    for(var x =0;x<imgtd.length;x++){
                                        var obj4 = {}
                                        obj4['name']= imgtd[x].split('#_#')[0]
                                        obj4['url']= imgtd[x].split('#_#')[1]
                                        obj4['hz']= imgtd[x].split('#_#')[1].substring(imgtd[x].split('#_#')[1].lastIndexOf("."))
                                        that.tdPic.push(obj4);
                                    }
                                }
                                if(res.data.data.meansBook.pic && res.data.data.meansBook.pic !==''){
                                    var imgpicc = res.data.data.meansBook.pic.split(',');
                                    if(imgpicc == ''){
                                        that.imgpicc =[]
                                    }else{
                                        for(var k =0;k<imgpicc.length;k++){
                                            var obj4 = {}
                                            obj4['url']= imgpicc[k].split('#_#')[1]
                                            obj4['hz']= imgpicc[k].split('#_#')[1].substring(imgpicc[k].split('#_#')[1].lastIndexOf("."))
                                            that.imgpicc.push(obj4);
                                        }
                                    }
                                }
                            }






                            let obj1 = res.data.data.meansBook;
                            let obj2 = res.data.data.tmp;
                            let obj1arr = []
                            let obj2arr = []
                            for(k in obj1){let obj = {};obj['name'] = k;obj['value'] =obj1[k]; obj1arr.push(obj)}
                            for(k in obj2){let obj = {};obj['name'] = k;obj['value'] =obj2[k]; obj2arr.push(obj)}
                            let Ids = obj1arr.map(item => item.value);
                            let arr = new Array();
                            obj2arr.forEach((item, index) => {
                                if (!Ids.includes(item.value)) {
                                    arr.push(item);
                                }
                            });
                            if(arr.length>0){
                                let objSum = {}
                                for(let i=0;i<arr.length;i++){
                                    objSum[arr[i].name] = arr[i].name
                                }
                                this.showObj = objSum
                                console.log(objSum)
                            }
                        }else{
                            this.$message({
                                message: res.data.msg,
                                type: 'warning'
                            });
                        }
                    })
            }
            else{
                this.$axios({
                    url: this.getAjax + '/admin/meansAdmin/findDetails?id='+id,
                    method: "get",
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Token':sessionStorage.getItem('token')
                    },
                    data:{}
                })
                    .then(res => {
                        if(res.data.code = '1001'){
                            this.meansBook = res.data.data.meansBook;
                            this.list(res.data.data.meansBook.assetCode)
                            // this.tmp = res.data.data.tmp
                            that.showObj = ''
                            that.bdPic = []
                            that.fcPic = []
                            that.tdPic = []
                            that.imgpicc = []
                            var file= []
                            // if(res.data.data.tmp){
                            //     if(res.data.data.tmp.realEstateAttach && res.data.data.tmp.realEstateAttach!==''){
                            //         var imgbd = res.data.data.tmp.realEstateAttach.split(',')
                            //         for(var j =0;j<imgbd.length;j++){
                            //             var obj4 = {}
                            //             obj4['name']= imgbd[j].split('#_#')[0]
                            //             obj4['url']= imgbd[j].split('#_#')[1]
                            //             obj4['hz']= imgbd[j].split('#_#')[1].substring(imgbd[j].split('#_#')[1].lastIndexOf("."))
                            //             that.bdPic.push(obj4);
                            //         }
                            //     }
                            //     if(res.data.data.tmp.realHouseAttach && res.data.data.tmp.realHouseAttach !==''){
                            //         var imgfc = res.data.data.tmp.realHouseAttach.split(',');
                            //         for(var z =0;z<imgfc.length;z++){
                            //             var obj4 = {}
                            //             obj4['name']= imgfc[z].split('#_#')[0]
                            //             obj4['url']= imgfc[z].split('#_#')[1]
                            //             obj4['hz']= imgfc[z].split('#_#')[1].substring(imgfc[z].split('#_#')[1].lastIndexOf("."))
                            //             that.fcPic.push(obj4);
                            //             console.log(that.fcPic)
                            //         }
                            //     }
                            //     if(res.data.data.tmp.realLandAttach && res.data.data.tmp.realLandAttach!==''){
                            //         var imgtd = res.data.data.tmp.realLandAttach.split(',');
                            //         for(var x =0;x<imgtd.length;x++){
                            //             var obj4 = {}
                            //             obj4['name']= imgtd[x].split('#_#')[0]
                            //             obj4['url']= imgtd[x].split('#_#')[1]
                            //             obj4['hz']= imgtd[x].split('#_#')[1].substring(imgtd[x].split('#_#')[1].lastIndexOf("."))
                            //             that.tdPic.push(obj4);
                            //         }
                            //     }
                            //     if(res.data.data.tmp.pic && res.data.data.tmp.pic !==''){
                            //         var imgpicc = res.data.data.tmp.pic.split(',');
                            //         if(imgpicc == ''){
                            //             that.imgpicc =[]
                            //         }else{
                            //             for(var k =0;k<imgpicc.length;k++){
                            //                 var obj4 = {}
                            //                 obj4['url']= imgpicc[k].split('#_#')[1]
                            //                 obj4['hz']= imgpicc[k].split('#_#')[1].substring(imgpicc[k].split('#_#')[1].lastIndexOf("."))
                            //                 that.imgpicc.push(obj4);
                            //             }
                            //         }
                            //     }
                            // }
                            // else{
                                if(res.data.data.meansBook.realEstateAttach && res.data.data.meansBook.realEstateAttach!==''){
                                    var imgbd = res.data.data.meansBook.realEstateAttach.split(',')
                                    for(var j =0;j<imgbd.length;j++){
                                        var obj4 = {}
                                        obj4['name']= imgbd[j].split('#_#')[0]
                                        obj4['url']= imgbd[j].split('#_#')[1]
                                        obj4['hz']= imgbd[j].split('#_#')[1].substring(imgbd[j].split('#_#')[1].lastIndexOf("."))
                                        that.bdPic.push(obj4);
                                    }
                                }
                                if(res.data.data.meansBook.realHouseAttach && res.data.data.meansBook.realHouseAttach !==''){
                                    var imgfc = res.data.data.meansBook.realHouseAttach.split(',');
                                    for(var z =0;z<imgfc.length;z++){
                                        var obj4 = {}
                                        obj4['name']= imgfc[z].split('#_#')[0]
                                        obj4['url']= imgfc[z].split('#_#')[1]
                                        obj4['hz']= imgfc[z].split('#_#')[1].substring(imgfc[z].split('#_#')[1].lastIndexOf("."))
                                        that.fcPic.push(obj4);
                                        console.log(that.fcPic)
                                    }
                                }
                                if(res.data.data.meansBook.realLandAttach && res.data.data.meansBook.realLandAttach!==''){
                                    var imgtd = res.data.data.meansBook.realLandAttach.split(',');
                                    for(var x =0;x<imgtd.length;x++){
                                        var obj4 = {}
                                        obj4['name']= imgtd[x].split('#_#')[0]
                                        obj4['url']= imgtd[x].split('#_#')[1]
                                        obj4['hz']= imgtd[x].split('#_#')[1].substring(imgtd[x].split('#_#')[1].lastIndexOf("."))
                                        that.tdPic.push(obj4);
                                    }
                                }
                                if(res.data.data.meansBook.pic && res.data.data.meansBook.pic !==''){
                                    var imgpicc = res.data.data.meansBook.pic.split(',');
                                    if(imgpicc == ''){
                                        that.imgpicc =[]
                                    }else{
                                        for(var k =0;k<imgpicc.length;k++){
                                            var obj4 = {}
                                            obj4['url']= imgpicc[k].split('#_#')[1]
                                            obj4['hz']= imgpicc[k].split('#_#')[1].substring(imgpicc[k].split('#_#')[1].lastIndexOf("."))
                                            that.imgpicc.push(obj4);
                                        }
                                    }
                                }
                            // }






                            // let obj1 = res.data.data.meansBook;
                            // let obj2 = res.data.data.tmp;
                            // let obj1arr = []
                            // let obj2arr = []
                            // for(k in obj1){let obj = {};obj['name'] = k;obj['value'] =obj1[k]; obj1arr.push(obj)}
                            // for(k in obj2){let obj = {};obj['name'] = k;obj['value'] =obj2[k]; obj2arr.push(obj)}
                            // let Ids = obj1arr.map(item => item.value);
                            // let arr = new Array();
                            // obj2arr.forEach((item, index) => {
                            //     if (!Ids.includes(item.value)) {
                            //         arr.push(item);
                            //     }
                            // });
                            // if(arr.length>0){
                            //     let objSum = {}
                            //     for(let i=0;i<arr.length;i++){
                            //         objSum[arr[i].name] = arr[i].name
                            //     }
                            //     this.showObj = objSum
                            //     console.log(objSum)
                            // }
                        }else{
                            this.$message({
                                message: res.data.msg,
                                type: 'warning'
                            });
                        }
                    })
            }

        },
        // open() {
        //     this.$alert('修改已提交，等待管理员审核', '提示', {
        //         callback: action => {
        //             this.$emit('changeShow','false')
        //         }
        //     });
        // },
        handleClose(){
            this.map.setView([30.878191, 120.426207],14)
            // 子组件调用组件方法，并传递参数
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
        width:80%;
        position: relative;
        background: aliceblue;
        margin: 26px auto;
    }
    .kan
    .count>>>.charts {position: relative;left:50%;margin-left: -150px;}
    .count>>>.col {margin: 0 25px 25px 0;background: #fff;}
    .count>>>.el-form-item__label {width: 30%;font-size: 14px;line-height: 40px;}
    .count>>>.el-form-item {margin-bottom: 5px;}
    .count>>>.el-input {width:100%;}
    .count>>>.el-upload--picture-card {width: 40px;height:40px;position: absolute;top:0;right:220px;}
    .count>>>.el-upload--picture-card i {width: 40px;height:40px;position: absolute;top:6px;left:0;}
    .count .phone>>>.el-upload--picture-card {width: 140px;height:140px;position: relative;right: inherit;}
    .count .phone>>>.el-upload--picture-card i {width: 140px;height:140px;position: relative;}
    .kan>>>.el-input.is-disabled .el-input__inner {color: #333;}
    .files>>>.el-upload-list {width: 30%;margin-left: 33%;}
    .coordinate>>>.el-form-item__label {width: 25%;}
    .sum {height:100px;background: #fff;width: 90%;}
    .sumLeft {float:left;line-height: 115px;margin-left: 48px;}
    .sumRight {margin-left: 130px;padding-top: 20px;}
    .sumRight p:first-child {font-size: 16px;color: #666;}
    .sumRight p:last-child {font-size: 30px;color: #333;margin-top: 10px;}
    .count .table>>>.el-input {width: 100%;}
    .sp {width: 100%;position: relative;}
    .sp div {display: inline-block;text-align: center;position: relative;z-index: 2;font-size: 12px;margin-right: 5px;}
    .sp img {width: 40px;height:40px;background-color: #fff;}
    .sp p {width: 100%;text-align: center;line-height: normal;margin-top: -10px;font-size: 12px;color: #333;}
    .sp .hr {display: block;height:1px;width: 60%;z-index: 1;position: absolute;top:22px;left:110px;border-bottom: 3px dotted #333;}
    .sp .add {position: absolute;top:0;left:50%;font-size: 40px;color: #333;font-weight: bold;}
</style>
