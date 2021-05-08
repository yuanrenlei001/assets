<template id="type">
    <div class="count counts kan">
        <el-dialog
                class="abow_dialog"
                title="信息管理 > 物业巡检"
                :visible.sync="showDialog"
                @close="handleClose"
                width="1000px">
        <el-row>
            <el-form ref="form" class="wyxjHight">
                <el-col :span="24" style="padding-top: 26px;">
                    <el-col :span="12">
                        <el-col :lg="22">
                            <el-col :lg="11"><div class="textLeft">资产编号：</div></el-col>
                            <el-col :lg="13" style="position: relative;">
                                <el-input style="width: 55%;" v-model="datas.meansBook.assetCode" placeholder="请输入内容" disabled="disabled"></el-input>
                                <el-button style="position: absolute;top:0;right:0;" type="primary" @click="zcdetail(datas.meansBookId)">资产详情</el-button>
                            </el-col>
                            <!--<el-form-item label="资产编号：">-->
                                <!--<el-input v-model="datas.meansBook.assetCode" placeholder="请输入内容" disabled="disabled"></el-input>-->
                                <!--<el-button type="primary" @click="zcdetail(datas.meansBookId)">资产详情</el-button>-->
                            <!--</el-form-item>-->
                        </el-col>
                        <el-col :lg="22">
                            <el-col :lg="11"><div class="textLeft">资产坐落：</div></el-col>
                            <el-col :lg="13">
                                <el-input v-model="datas.meansBook.houseAddress" placeholder="请输入内容" disabled="disabled"></el-input>
                            </el-col>
                            <!--<el-form-item label="资产坐落：">-->
                                <!--<el-input v-model="datas.meansBook.houseAddress" placeholder="请输入内容" disabled="disabled"></el-input>-->
                            <!--</el-form-item>-->
                        </el-col>
                        <el-col :lg="22">
                            <el-col :lg="11"><div class="textLeft">问题类型：</div></el-col>
                            <el-col :lg="13">
                                <el-input v-model="datas.question" placeholder="请输入内容" disabled="disabled"></el-input>
                            </el-col>
                            <!--<el-form-item label="问题类型：">-->
                                <!--<el-input v-model="datas.question" placeholder="请输入内容" disabled="disabled"></el-input>-->
                            <!--</el-form-item>-->
                        </el-col>
                        <el-col :lg="22" class="textears">
                            <el-col :lg="11"><div class="textLeft">问题描述：</div></el-col>
                            <el-col :lg="13">
                                <el-input type="textarea" disabled="disabled" v-model="datas.content" ></el-input>
                            </el-col>
                            <!--<el-form-item label="问题描述：">-->
                                <!--<el-input type="textarea" disabled="disabled" v-model="datas.content" style="width: 30%;"></el-input>-->
                            <!--</el-form-item>-->
                        </el-col>
                    </el-col>
                    <el-col :span="12">
                        <el-col :lg="22">
                            <el-col :lg="11"><div class="textLeft">现场照片：</div></el-col>
                            <el-col :lg="13">
                                <el-image
                                        style="width: 100px; height: 100px;margin-right: 10px;"
                                        v-for="items in url"
                                        :src="items"
                                        disabled="disabled"
                                        :preview-src-list="srcList">
                                </el-image>
                            </el-col>
                            <!--<el-form-item label="现场照片：（点击查看大图）">-->
                                <!--<el-image-->
                                        <!--style="width: 100px; height: 100px"-->
                                        <!--:src="url"-->
                                        <!--disabled="disabled"-->
                                        <!--:preview-src-list="srcList">-->
                                <!--</el-image>-->
                            <!--</el-form-item>-->
                        </el-col>
                        <el-col :lg="22">
                            <el-col :lg="11"><div class="textLeft">巡检人/单位：</div></el-col>
                            <el-col :lg="13">
                                <el-input v-model="datas.sysUser.name" placeholder="请输入内容" disabled="disabled"></el-input>
                            </el-col>
                            <!--<el-form-item label="巡检人/单位：">-->
                                <!--<el-input v-model="datas.sysUser.name" placeholder="请输入内容" disabled="disabled"></el-input>-->
                            <!--</el-form-item>-->
                        </el-col>
                        <el-col :lg="22">
                            <el-col :lg="11"><div class="textLeft minText">巡检人联系电话：</div></el-col>
                            <el-col :lg="13">
                                <el-input v-model="datas.sysUser.mobile" placeholder="请输入内容" disabled="disabled"></el-input>
                            </el-col>
                            <!--<el-form-item label="巡检人联系电话：">-->
                                <!--<el-input v-model="datas.sysUser.mobile" placeholder="请输入内容" disabled="disabled"></el-input>-->
                            <!--</el-form-item>-->
                        </el-col>
                        <el-col :lg="22">
                            <el-col :lg="11"><div class="textLeft">巡检人时间：</div></el-col>
                            <el-col :lg="13" style="line-height: 40px;font-size: 24px;">
                                {{datas.createTime | dateFormat}}
                            </el-col>
                            <!--<el-form-item label="巡检人时间：">-->
                                <!--{{datas.sysUser.createTime | dateFormat}}-->
                                <!--&lt;!&ndash;<el-input v-model="" placeholder="请输入内容" disabled="disabled"></el-input>&ndash;&gt;-->
                            <!--</el-form-item>-->
                        </el-col>
                        <el-col :lg="22" v-if="datas.status == 2">
                            <el-col :lg="11"><div class="textLeft">驳回理由：</div></el-col>
                            <el-col :lg="13" style="line-height: 40px;font-size: 24px;">
                                {{datas.remark}}
                            </el-col>
                        </el-col>
                    </el-col>
                    <el-col :span="24" v-if="userType =='xjcl'">
                        <el-col :span="24">
                            <el-col :lg="22">
                                <el-col :lg="8"><div class="textLeft">处理过程：</div></el-col>
                                <el-col :lg="13"><div class="textLeft" style="text-align: left;">处理结果描述</div></el-col>
                            </el-col>
                            <el-col :lg="22">
                                    <el-col :lg="8"><div class="textLeft" style="opacity: 0;">问题描述：</div></el-col>
                                    <el-col :lg="13" class="textears2">
                                        <el-input type="textarea" v-model="tick"  style="height:150px;"></el-input>
                                    </el-col>
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="8"><div class="textLeft" style="opacity: 0;">问题类型：</div></el-col>
                                <el-col :lg="13"><div class="textLeft" style="text-align: left;">照片</div></el-col>
                            </el-col>
                            <el-col :lg="24">
                                <el-col :lg="8"><div class="textLeft" style="opacity: 0;">问题描述：</div></el-col>
                                <el-col :lg="16">
                                    <el-upload
                                            action="http://61.153.180.66:9098/file/attachment/upload?type=asset"
                                            list-type="picture-card"
                                            :on-preview="handlePictureCardPreview"
                                            :on-success="phone"
                                            :limit="3"
                                            :on-remove="handleRemove">
                                        <!--<i class="el-icon-plus"></i>-->
                                    </el-upload>
                                </el-col>
                            </el-col>
                        </el-col>
                        <el-col :span="24">
                            <el-col :lg="22">
                                <el-col :lg="8"><div class="textLeft">处理结果：</div></el-col>
                                <el-col :lg="13"><div class="textLeft" style="text-align: left;">处理结果描述</div></el-col>
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="8"><div class="textLeft" style="opacity: 0;">问题描述：</div></el-col>
                                <el-col :lg="13" class="textears2">
                                    <el-input type="textarea" v-model="resu" style="height:150px;" ></el-input>
                                </el-col>
                            </el-col>
                            <el-col :lg="22">
                                <el-col :lg="8"><div class="textLeft" style="opacity: 0;">问题类型：</div></el-col>
                                <el-col :lg="13"><div class="textLeft" style="text-align: left;">照片</div></el-col>
                            </el-col>
                            <el-col :lg="24">
                                <el-col :lg="8"><div class="textLeft" style="opacity: 0;">问题描述：</div></el-col>
                                <el-col :lg="16">
                                    <el-upload
                                            action="http://61.153.180.66:9098/file/attachment/upload?type=asset"
                                            list-type="picture-card"
                                            :on-preview="handlePictureCardPreview2"
                                            :on-success="phone2"
                                            :limit="3"
                                            :on-remove="handleRemove2">
                                        <!--<i class="el-icon-plus"></i>-->
                                    </el-upload>
                                </el-col>
                            </el-col>
                        </el-col>
                    </el-col>
                    <el-col :span="24" style="position: relative;margin: 30px 0;"><div class="map" id="mapid" ref="mapsss"></div></el-col>
                </el-col>
                <el-col :span="23" style="text-align: right;margin: 40px 0;" v-if="datas.status == 0">
                    <el-button type="primary" round @click="open('success',datas.id)">通过</el-button>
                    <el-button type="success" round @click="open('cancel',datas.id)">驳回</el-button>
                </el-col>
                <el-col :span="23" style="text-align: center;margin: 40px 0;" v-if="userType =='xjcl'">
                    <el-button type="primary" round @click="CLbtn(datas.id)">提交处理</el-button>
                </el-col>
            </el-form>
        </el-row>
        </el-dialog>
        <!--资产详情查看-->
        <assets-kans  :AssetsKanVisible="AssetsKanVisible"  @changeShow="showAssetsKan" ref="AssetsKanRef"></assets-kans>
    </div>
</template>

<script>
    import AssetsKans from '@/components/assets/AssetsKan'
    export default {
  name: 'login',
        props:{
            dialogKan:{
                type: Boolean,
                default: false
            }
        },
  data () {
    return {
        tick:'',
        resu:'',
        tickAttach:'',
        resuAttach:'',
        userType:sessionStorage.getItem('authStr'),
        map:null,
        _marker:null,
        AssetsKanVisible:false,
        showDialog:false,
        input:'',
        input2:'',
        disabled:true,
        disableds:true,
        dialogImageUrl: '',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ],
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
        zoom: 10, // 地图的初始化级别，及放大比例
        multipleSelection: [],
        types:'',
        datas:[{meansBook:{'assetCode':''}}],
        fileList: [{
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
            name: 'food2.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }],
    }
  },
        components:{
            AssetsKans
        },
    watch:{
        dialogKan(oldVal,newVal){
            this.showDialog = this.dialogKan
        },
    },
    methods:{
        CLbtn(id){
            let data = {
                id:id,
                tick:this.tick,
                tickAttach:this.tickAttach,
                resu:this.resu,
                resuAttach:this.resuAttach
            }
            this.$axios({
                url: this.getAjax + '/admin/meansBookReportAdmin/resu',
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
                    this.$alert('处理已上传', '提示', {
                        callback: action => {
                            this.$parent.wysplist(1)
                            this.$emit('changeShow','false')
                        }
                    });
                }
            })
            console.log(data)
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
            console.log(imgs)
            this.tickAttach = imgs.toString()
        },
        handleRemove(file, fileList) {
            if(fileList.length < 4){
                this.showUpload = false
            }
        },
        handlePictureCardPreview2(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        phone2(res, file, fileList) {
            if(fileList.length >= 3){
                this.showUpload = true
            }
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
            console.log(imgs)
            this.resuAttach = imgs.toString()
        },
        handleRemove2(file, fileList) {
            if(fileList.length < 4){
                this.showUpload = false
            }
        },
        zcdetail(id){
            this.AssetsKanVisible = true
            let param = id
            this.$refs.AssetsKanRef.detail(param)
        },
        showAssetsKan(data){
            if(data === 'false'){
                this.AssetsKanVisible = false
            }else{
                this.AssetsKanVisible = true
            }
        },
      detail(data){
          console.log(data)
          this.datas = data;
          var that =this;
          this.$nextTick(()=>{
              that.map = L.map(that.$refs['mapsss'], {
                  center: [30.88246, 120.427756],
                  zoom: 14,
                  maxZoom: 18,
                  minZoom: 14,
                  maxBounds:14,
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
                  layer:"nanxun_jbjbMaps", //影像名称
                  // layer:"oldtown:nxshdt", //手绘名称
                  tilematrixSet: "EPSG:4326", //GeoServer使用的网格名称
                  width: 20,
                  transparent:true,
                  height: 20,
                  format: 'image/png',
                  matrixIds: matrixIds,
              })
              this.map.addLayer(ign);
              setTimeout(function () {
                  that.map.invalidateSize(true);
              }, 10);
          })
          this.$nextTick(()=>{
              var _h = window.screen.height;
              console.log(_h)
              var demo = document.getElementsByClassName('wyxjHight');
              if(_h == '768'){
                  demo[0].style.height = _h*0.3 +'px'
              }else if(_h == '900'){
                  demo[0].style.height = _h*0.45 +'px'
              }else{
                  demo[0].style.height = _h*0.6 +'px'
              }
          })
          this.url = data.attach.split(',')
          this.srcList = data.attach.split(',')

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
                                this.$emit('changeShow','false')
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
                            callback: action => {
                                this.$emit('changeShow','false')
                                this.wysplist(1)
                            }

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
        handleClose(){
            // 子组件调用父组件方法，并传递参数
            this.$emit('changeShow','false')
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
    .map {
        height: 250px;
        width:80%;
        position: relative;
        left:10%;
        background: aliceblue;
    }
    .textears>>>.el-textarea__inner {height:200px;}
    .textears2>>>.el-textarea__inner {height:150px;}
    .count>>>.charts {position: relative;left:50%;margin-left: -150px;}
    .count>>>.col {margin: 0 25px 25px 0;background: #fff;}
    .counts>>>.el-form-item__label {width: 30%;font-size: 14px;line-height: 32px;}
    .count>>>.el-form-item {margin-bottom: 5px;}
    .files>>>.el-upload-list {width: 30%;margin-left: 33%;}
    .coordinate>>>.el-form-item__label {width: 25%;}
    .sum {height:100px;background: #fff;width: 90%;}
    .sumLeft {float:left;line-height: 115px;margin-left: 48px;}
    .sumRight {margin-left: 130px;padding-top: 20px;}
    .sumRight p:first-child {font-size: 16px;color: #666;}
    .sumRight p:last-child {font-size: 30px;color: #333;margin-top: 10px;}

</style>
