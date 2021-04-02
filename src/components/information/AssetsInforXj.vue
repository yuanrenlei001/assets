<template id="type">
    <div class="count counts kan">
        <el-dialog
                class="abow_dialog"
                title="信息管理 > 物业巡检打卡"
                :visible.sync="showDialog"
                @close="handleClose"
                width="80%">
        <el-row>
            <el-form ref="form" class="wyxjHight" style="position: relative;">
                <el-col :soan="24" style="padding-top: 26px;">
                    <div  class="map" id="mapid" ref="mapsss"></div>
                </el-col>
                <div class="fixed">
                    <div style="width:435px;height:100%;">
                        <el-row>
                            <el-date-picker
                                    style="width: 100%;"
                                    v-model="value1"
                                    type="daterange"
                                    align="right"
                                    value-format="yyyy-MM-dd"
                                    unlink-panels
                                    range-separator="至"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                            >
                            </el-date-picker>
                        </el-row>
                        <el-row class="tables" style="height:100%;" >
                            <el-table
                                    ref="multipleTable"
                                    :data="tableData2"
                                    tooltip-effect="dark"
                                    style="width: 100%;height:100%;overflow-y: scroll;text-align: center;"
                            >
                                <el-table-column  type="index" label="序号"></el-table-column>
                                <el-table-column width="200" prop="houseAddress" label="房屋坐落"></el-table-column>
                                <el-table-column prop="date2" label="打卡次数"></el-table-column>
                                <el-table-column
                                        fixed="right"
                                        label="操作"
                                >
                                    <template slot-scope="tableData" >
                                            <el-button  type="text" size="small" @click="showBtn">查看</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-row>
                    </div>
                </div>
            </el-form>
        </el-row>
        </el-dialog>
        <!--资产详情查看-->
        <assets-kans  :AssetsKanVisible="AssetsKanVisible"  @changeShow="showAssetsKan" ref="AssetsKanRef"></assets-kans>
        <el-dialog
                class="abow_dialogDK"
                title="打卡详情"
                :visible.sync="showDialogDK"
                @close="handleClose"
                width="600px">
            <el-row>
                <el-form ref="form" class="wyxjHight" style="position: relative;">
                            <el-row class="dk">
                                   <el-table
                                           ref="multipleTable"
                                           :data="tableData3"
                                           tooltip-effect="dark"
                                           border
                                   >
                                       <el-table-column  prop="user" label="巡检人"></el-table-column>
                                       <el-table-column prop="time" label="巡检时间"></el-table-column>

                                   </el-table>
                            </el-row>
                </el-form>
            </el-row>
        </el-dialog>
    </div>
</template>

<script>
    import  icon01 from '../../assets/bj.png'
    import AssetsKans from '@/components/assets/AssetsKan'
    export default {
  name: 'login',
        props:{
            dialogXj:{
                type: Boolean,
                default: false
            }
        },
  data () {
    return {
        showDialogDK:false,
        value1: [],
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
        tableData2: [
            // {date1: '1',date2:'1',date3:'沈振国',date4:'2020-05-16 14:28',date5:'浙江南浔旅游集团',date6:'类型1',date7:'',date8:'寸池潭7号'},
            // {date1: '2',date2:'3',date3:'沈振国',date4:'2020-05-16 14:28',date5:'浙江南浔旅游集团',date6:'类型2',date7:'',date8:'下塘东街7弄3号'},
            // {date1: '3',date2:'2',date3:'沈振国',date4:'2020-05-16 14:28',date5:'浙江南浔旅游集团',date6:'类型3',date7:'',date8:'爱勤弄11号'},
            // {date1: '4',date2:'8',date3:'沈振国',date4:'2020-05-16 14:28',date5:'浙江南浔旅游集团',date6:'类型4',date7:'',date8:'爱勤弄13号'},
            // {date1: '5',date2:'0',date3:'沈振国',date4:'2020-05-16 14:28',date5:'浙江南浔旅游集团',date6:'类型1',date7:'',date8:'爱勤弄15号'},
            // {date1: '6',date2:'0',date3:'沈振国',date4:'2020-05-16 14:28',date5:'浙江南浔旅游集团',date6:'类型1',date7:'',date8:'爱勤弄17号'},
            // {date1: '7',date2:'2',date3:'沈振国',date4:'2020-05-16 14:28',date5:'浙江南浔旅游集团',date6:'类型1',date7:'',date8:'爱勤弄18号'},
            // {date1: '8',date2:'5',date3:'沈振国',date4:'2020-05-16 14:28',date5:'浙江南浔旅游集团',date6:'类型1',date7:'',date8:'爱勤弄22号'},
            // {date1: '9',date2:'4',date3:'沈振国',date4:'2020-05-16 14:28',date5:'浙江南浔旅游集团',date6:'类型1',date7:'',date8:'爱勤弄12号'},
            // {date1: '10',date2:'1',date3:'沈振国',date4:'2020-05-16 14:28',date5:'浙江南浔旅游集团',date6:'类型1',date7:'',date8:'爱勤弄8号'},
        ],
        tableData3:[
            {user:'陈魏',time:'2021-3-4 14：34：11'},
            {user:'陈魏',time:'2021-3-5 14：34：11'},
            {user:'陈魏',time:'2021-3-6 14：34：11'},
            {user:'陈魏',time:'2021-3-11 14：34：11'},
            {user:'陈魏',time:'2021-3-15 14：34：11'},
            {user:'陈魏',time:'2021-3-17 14：34：11'},
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
        datas:[{meansBook:{'assetCode':0}}],
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
        dialogXj(oldVal,newVal){
            this.showDialog = this.dialogXj
        },
    },
    methods:{
        showBtn(){
            this.showDialogDK = !this.showDialogDK
        },
        clickTable(e,str){
            console.log(e)
            this.AssetsKanVisible = true;
            let param = e.id
            this.$refs.AssetsKanRef.detail(param,str)
        },
        list(type){
            var that = this;
            var type = type;
            this.$axios({
                url:  'https://nanxun.zjtoprs.com/api/com/comPlace/getAll?type='+type,
                method: "get",
                dataType: "json",
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data:{}
            })
                .then(res => {
                    if(this._marker){
                        this.map.removeLayer(this._marker);
                    }
                    var tabStr = "";
                    var my_spots = [];
                    //点击地图上图标
                    var list = res.data.data
                    // this.show=false
                    var strartIcon = L.icon({
                        // https://nanxun.zjtoprs.com/minio/old-town/com/place/defaultStore.jpg
                        iconUrl:icon01,
                        iconSize: [25, 30],
                    });
                    var arr = [];
                    for(var j=0;j<list.length;j++){
                        //获取经纬度
                        var lng = list[j].longitude;
                        var lat = list[j].latitude;
                        var layers = L.marker([lat,lng ],{icon:strartIcon,data:j+1,}).addTo(this.map)
                            .bindPopup('<div id="'+ list[j].id+'" style="color: red;text-align: center;">资产坐落'+(j+1)+'</div>',{closeButton:false})
                            .openPopup()
                            .on("click", this.markerOnClick)
                        arr.push(layers)
                    }
                    console.log(arr)
                    this._marker = L.layerGroup(arr);
                    this.map.addLayer(this._marker);
                    this.map.setView([30.87258082, 120.4259491],16);
                })
        },
        markerOnClick(e){
            this.listZc(e.target.options.data);
        },
        listZc(e){
            var that = this;
            this.$axios({
                url: this.getAjax + '/admin/meansAdmin/findList',
                method: "post",
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Token':sessionStorage.getItem('token')
                },
                data:{
                        "pageNum": e,
                        "pageSize": 10,
                        "assetUser": "",
                        "houseNature": '',
                        "assetUse": "",
                        "landUse": "",
                        "landNature":'',
                        "houseNow": '',
                        "label": "",
                        "search": ""
                }
            }).then(res => {
                if(res.data.code == '2004'){
                    this.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                    this.$router.push('/')
                }else{
                    var list = res.data.data.list;
                    for(var i=0;i<list.length;i++){
                        list[i]['date2'] = i
                    }
                    this.tableData2 = list;
                    console.log(this.tableData2)
                }
            })
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
          var that =this;
          this.$nextTick(()=>{
              this.list('景点');
              this.map = L.map(this.$refs['mapsss'], {
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
              var ign = new L.TileLayer.WMTS("http://zjtoprs.f3322.net:18080/geoserver/gwc/service/wmts", {
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
        this.listZc(2);
    }
}
</script>
<style scoped>
    .map {
        height: 78vh;
        width:100%;
        position: relative;
        background: aliceblue;
    }
    .textears>>>.el-textarea__inner {height:200px;}
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
    .fixed {width: 435px;position: absolute;top:55px;right:24px;z-index: 9999;height:70vh;text-align: center;background: rgba(0,0,0,.2);}
    .fixed th {
        padding: 0;
        background: #eee;
        font-size: 16px;
        font-weight: bold;
        color: #333;
        text-align: center;
    }
    .fixed >>>.el-table th, .el-table tr {cursor: pointer;}
    .fixed >>>.el-table .cell  {text-align: center;}
    .dk >>>.el-table .cell  {text-align: center;}
    .kan .abow_dialogDK {height:300px;
        top: 50%;
        margin-top: -150px;}
</style>
