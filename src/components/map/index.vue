<template>
    <div id="htmls">
        <div id="map" style="width: 100%;height:89vh;"></div>
        <div class="button" v-if="!show" @click="up"><img src="@/assets/iconshang.png" alt="" class="shang"></div>
        <div class="sort" v-show="show">
            <div class="xialaDiv"><img src="@/assets/iconxiala.png" alt="" class="xiala" @click="up"></div>
            <el-row :span="24">
                <el-col  :lg="6"  class="eachars">
                    <div class="eachars_title">房屋性质统计图</div>
                    <div class="eachars_sort" id="eachars_sort">
                        <div  id="myChart1" :style="{width: width, height: height}"></div>
                    </div>
                </el-col>
                <el-col  :lg="6"  class="eachars">
                    <div class="eachars_title">办证情况统计图</div>
                    <div class="eachars_sort">
                        <div  id="myChart2" :style="{width: width, height: height}"></div>
                    </div>
                </el-col>
                <el-col  :lg="6"  class="eachars">
                    <div class="eachars_title">土地性质分类统计图</div>
                    <div class="eachars_sort">
                        <div  id="myChart3" :style="{width: width, height: height}"></div>
                    </div>
                </el-col>
                <el-col :lg="6"  class="eachars">
                    <div class="eachars_title">现状统计图</div>
                    <div class="eachars_sort">
                        <div  id="myChart4" :style="{width: width, height: height}"></div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="menu">
            <el-row class="tac">
                <el-col :span="24">
                    <el-menu
                            default-active="1"
                            class="el-menu-vertical-demo"
                            @select="handleSelect"
                            >
                        <el-menu-item index="1" style="padding-left: 0;">
                            <span slot="title">全部资产</span>
                        </el-menu-item>
                        <el-menu-item index="2" style="padding-left: 0;">
                            <span slot="title">办证情况</span>
                        </el-menu-item>
                        <el-menu-item index="3" style="padding-left: 0;">
                            <span slot="title">现状分析</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
        <div class="search">
            <el-input placeholder="请输入资产编号或房屋坐落" v-model="input2" class="input-with-select" style="width: 400px;">
                <el-button slot="append" icon="el-icon-search" @click="searchs"></el-button>
            </el-input>
        </div>
        <div class="addressFixed">
            <div class="addressFixed_title">资产详情</div>
            <div>资产编号</div>
            <div>产权人：中国工商银行股份有限公司湖州南浔支行</div>
            <div>房屋坐落：南浔镇宝善路21号</div>
            <div>原来使用产权人：中国工商银行股份有限公司湖州南浔支行</div>
            <div class="addressFixed_sort"><span>土地性质：商业划拨</span><span>不动产证：214945</span><span class="addressFixed_sort01">附件：不动产证.PDF</span></div>
            <div class="addressFixed_sort"><span>产权证号：214945</span><span>房产证：214945</span><span class="addressFixed_sort01">附件：房产证.PDF</span></div>
            <div class="addressFixed_sort"><span>房屋现状：空置</span><span>土地证：214945</span><span class="addressFixed_sort01">附件：土地证.PDF</span></div>
            <div class="addressFixed_sort"><span>房屋现状：</span><span>标签：文保单位</span></div>
            <div>房屋结构：混合</div>
            <div>房屋建筑面积：353.16m2</div>
            <div>产权证号：214945</div>
            <div>土地面积：159.15m2</div>
            <div>土地用途：</div>
            <div>未登记建筑：</div>
            <div>协议金额：</div>
            <div>房产档案编号：</div>
            <div>备注：双证已注销</div>
            <div>历史租赁情况：</div>
            <div>物业信息：</div>
            <div class="addressFixed_sort"><span style="width: 15%;">水</span><span>户号 34235243 户号2323</span><span>缴款方式：代缴</span></div>
            <div class="addressFixed_sort"><span style="width: 15%;">电</span><span>户号 34235243 户号2323</span><span>缴款方式：代缴</span></div>
            <div class="addressFixed_sort"><span style="width: 15%;">燃气</span><span>户号 34235243 户号2323</span><span>缴款方式：代缴</span></div>
            <div class="phones">
                <div>照片：</div>
                <img src="@/assets/beijing1.png" alt="">
                <img src="@/assets/beijing1.png" alt="">
                <img src="@/assets/beijing1.png" alt="">
                <img src="@/assets/beijing1.png" alt="">
            </div>
        </div>
        <!--资产详情查看-->
        <assets-kan :msg="detailData"  :AssetsKanVisible="AssetsKanVisible"  @changeShow="showAssetsKan" ref="AssetsKanRef"></assets-kan>
        <!--<div id="mapDiv" style="width: 100%;height:89vh;"></div>-->
    </div>
</template>

<script>
    import  icon01 from '../../assets/bj.png'
    import AssetsKan from '@/components/assets/AssetsKan'
export default {
  name: 'maps',
  data () {
    return {
        detailData:'',
        show:true,
        input2:'',
        ass:false,
        map:null,
        _marker:null,
        width:'100%',
        height:'160px',
        AssetsKanVisible: false,
        mapSort:'oldtown:nxshdt'
    }
  },
    created(){
        this.list('景点');

    },
    components:{
        AssetsKan
        // adapt,
        // tilelayer
        // ,ChineseTmsProviders,
        // leaflet
    },
    methods:{
        showAssetsKan(data){
            if(data === 'false'){
                this.AssetsKanVisible = false
            }else{
                this.AssetsKanVisible = true
            }
        },
        detail(index,data,str){
            console.log(1)
            // this.AssetsKanVisible = true
            // let param = data.id
            // this.$refs.AssetsKanRef.detail(param,str)
        },
        searchs(){
            if(this._marker){
                this.map.removeLayer(this._marker);
            }
            var tabStr = "";
            var my_spots = [];
            //点击地图上图标
            this.show=false
            var strartIcon = L.icon({
                // https://nanxun.zjtoprs.com/minio/old-town/com/place/defaultStore.jpg
                iconUrl:icon01,
                iconSize: [25, 30],
            });
            var arr = [];
                //获取经纬度
                var lng ='120.42706355';
                var lat = '30.87354164';
                var layers = L.marker([lat,lng ],{icon:strartIcon,}).addTo(this.map)
                    .bindPopup('<div  style="color: red;text-align: center;">张石铭旧宅</div>',{closeButton:false})
                    .openPopup()
                    .on("click", this.markerOnClick)
            this._marker = L.layerGroup(layers);
            this.map.addLayer(this._marker);
        },
        handleSelect(key, keyPath) {
            if(key == 1){
                this.list('景点');
            }else if (key == 2) {this.list('度假酒店')}
            else{this.list('停车场')}
            console.log(key, keyPath);
        },
        drawLine1(){
            // 基于准备好的dom，初始化echarts实例
            let myChart1 = this.$echarts.init(document.getElementById('myChart1'));
            myChart1.setOption({
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    right: '30',
                    top:'20',
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [
                    {
                        name: '房屋性质',
                        type: 'pie',
                        top:'0',
                        left:'-50',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '22',
                                color:'#fff'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 1048, name: '商铺',itemStyle:{color:'#9681db'}},
                            {value: 735, name: '住宅',itemStyle:{color:'#e56e34'}},
                            {value: 580, name: '餐饮',itemStyle:{color:'#80c857'}},
                            {value: 484, name: '酒店',itemStyle:{color:'#fadd41'}},
                            {value: 300, name: '服务',itemStyle:{color:'#08c1f4'}}
                        ]
                    }
                ]
            });
        },
        drawLine2(){
            // 基于准备好的dom，初始化echarts实例
            let myChart2 = this.$echarts.init(document.getElementById('myChart2'));
            myChart2.setOption({
                color:['#82d651','#cdcdcd'],
                legend: {
                    orient: 'vertical',
                    top: '30%',
                    right: '20',
                    textStyle: {
                        color: '#fff'
                    }
                },

                series: [
                    {
                        name: '办证情况',
                        type: 'pie',
                        radius: '50%',
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 100, name: '已办证'},
                            {value: 335, name: '未办证'},
                        ]
                    }
                ]
            });
        },
        drawLine3(){
            // 基于准备好的dom，初始化echarts实例
            let myChart3 = this.$echarts.init(document.getElementById('myChart3'));
            myChart3.setOption({
                color: ['#61a5e8','#7ecf51','#eecb5f','#9570e5'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    top:"10%",
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        data: ['仓库出让', '住宅制造', '工业划拨', '商业划拨'],
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                    },

                ],
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        barWidth: '20px',
                        data: [334, 52, 200, 250],
                        itemStyle: {
                            normal: {
                                color:'#fcf87f',
                                barBorderRadius: [30,30,0,0]
                            },
                        },
                    }
                ]
            });
        },
        drawLine4(){
            // 基于准备好的dom，初始化echarts实例
            let myChart4 = this.$echarts.init(document.getElementById('myChart4'));
            myChart4.setOption({
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    top: '40',
                    right: '20',
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [
                    {
                        name: '现状分析',
                        type: 'pie',
                        left:'-50',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '22',
                                color:'#fff'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 1048, name: '空置',itemStyle:{color:'#f29605'}},
                            {value: 1048, name: '拆除',itemStyle:{color:'#fce961'}},
                            {value: 580, name: '出租',itemStyle:{color:'#80c857'}},
                        ]
                    }
                ]
            });
        },
        up(){
          this.show=!this.show;
      },
        getNews:function(){
            this.$axios({
                url: this.getAjax+'/news/list',
                method: "post",
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                data:{}
            }).then(res => {
                console.log(res.data.data)
                if(res.data.data.total >0){
                    this.news = res.data.data.list[0]
                }

            })
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
            }).then(res => {
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
                    var layers = L.marker([lat,lng ],{icon:strartIcon,data:list[j],}).addTo(this.map)
                        .bindPopup('<div id="'+ list[j].id+'" style="color: red;text-align: center;">'+
                            list[j].name+'</div>',{closeButton:false})
                        .openPopup()
                        .on("click", this.markerOnClick)
                    arr.push(layers)
                }
                this._marker = L.layerGroup(arr);
                this.map.addLayer(this._marker);
                var latlngs = [[30.87258082, 120.4259491],[30.87206133, 120.42330042],[30.87354164, 120.42706355]];
                var polygon = L.polygon(latlngs, {color: 'red'}).addTo(this.map).on("click", this.markerOnClicks);
                this.map.fitBounds(polygon.getBounds());
                this.map.setView([30.87258082, 120.4259491],16);
            })
        },
        markerOnClick(e){
            console.log(123)
        },
        markerOnClicks(e){
            console.log(123)
            var popup = L.popup();
            var data = e.target.options.data;
            var str = '<div class="divs" style="width: 300px;background: #fff; display: table;">' +
                '<div class="top" style="width: 100%;height:40px;text-align: center;line-height: 40px;border-bottom: 1px solid #eee;">' +
                '<div style="float:left;width:50%;line-height: 40px;">资产编号</div>' +
                '<div style="float:left;width:50%;line-height: 40px;">资产坐落</div></div>' +
                '<div class="zcList" style="width: 100%;text-align: center;margin-bottom: 2px;" onclick="gourl()">' +
                '<div style="border: 1px solid #999;display: table-cell;cursor: pointer;vertical-align:middle;height:30px;width: 48%;text-align:center;">LT00001</div>' +
                '<div style="border: 1px solid #999;display: table-cell;cursor: pointer;vertical-align:middle;height:30px;width: 48%;text-align:center;">南浔镇南西街香山桥188号</div>' +
                '</div></div>'
            popup.setLatLng(e.latlng).setContent(str).openOn(this.map);
        },
        fixedsss(){
            var demo = document.getElementsByClassName('addressFixed');
            demo[0].style.display = 'none'
        },
    },
    mounted(){
      // this.maps();
      // this.getNews();
        var that = this;
        this.map = L.map('map', {
            center: [30.88246, 120.427756],
            zoom: 16,
            maxZoom: 18,
            minZoom: 14,
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
        var ign = new L.TileLayer.WMTS("http://zjtoprs.f3322.net:18080/geoserver/gwc/service/wmts", {
            layer:'nanxun_jbjbMaps', //影像名称
            // layer:"oldtown:nxshdt", //手绘名称
            tilematrixSet: "EPSG:4326", //GeoServer使用的网格名称
            width: 20,
            transparent:true,
            height: 20,
            format: 'image/png',
            matrixIds: matrixIds,
        })
        this.map.addLayer(ign).on("click", this.fixedsss);
        setTimeout(function () {
            that.map.invalidateSize(true);
        }, 10);
        var o=document.getElementById("eachars_sort");
        this.width = o
        this.$nextTick(()=>{
            this.drawLine1();
            this.drawLine2();
            this.drawLine3();
            this.drawLine4();
        })
    }
}
    window.gourl = function (e) {
        console.log(e)
        // var popup = L.popup();
        // var str =
        console.log(this)
        var demo = document.getElementsByClassName('addressFixed');
        demo[0].style.display = 'block'
    };
</script>
<style scoped>
    .eachars {height:100%;font-size: 14px;color: #fff;padding: 0 30px;}
    .eachars .eachars_title {line-height: 53px;}
    .eachars_sort {width: 100%;background: rgba(40,206,254,.12);height:160px;}
    .red {color: red;}
    .sort {position: fixed;bottom:0;left:0;z-index: 99999;width:100%;height:242px;background: rgba(0,0,0,.6);}

    .sort .xialaDiv {
        width: 60px;
        height: 60px;
        position: absolute;
        top: -30px;
        left: 50%;
        margin-left: -30px;
        cursor: pointer;
        z-index: 99999;
        background: rgba(0, 0, 0, .3);
        border-radius: 50%;
        text-align: center;
        line-height: 60px;
    }
    .xialaDiv img {width: 30px;height:30px;vertical-align: middle;}
    .button {
        width: 60px;
        text-align: center;
        line-height: 60px;
        height: 60px;
        border-radius: 50%;
        background: #5476DF;
        position: fixed;
        bottom: 5%;
        left: 50%;
        margin-left: -30px;
        z-index: 9999;
        cursor: pointer;
    }
    .button img {width: 30px;height:30px;vertical-align: middle;}
    .menu {position: fixed;top:20%;left:53px;z-index: 99999;width:100px;height:150px;}
    .menu>>>.el-menu {border-radius: 10px;overflow: hidden;margin-left: 1px;}
    .menu>>>.el-menu-item.is-active {background: #409EFF;color: #fff;}
    .menu>>>.el-menu-item {padding: 0;height:35px;font-size: 16px;text-align: center;line-height: 35px;color: #333;}
    .search {position: fixed;top:15%;right:53px;z-index: 99999;}
    .search>>>.el-input-group__append, .el-input-group__prepend {background-color: #5c76d7;border: 1px solid #5c76d7;color: #fff;}
    .search>>> i {color: #fff;}
    .divs {position: fixed;top:25%;left:0;z-index: 99999;width: 300px;background: #fff; display: table;}
    .top {width: 100%;height:80px;text-align: center;line-height: 80px;}
    .zcList{width: 100%;text-align: center;margin-bottom: 2px;}
    .top div {float:left;width:50%;line-height: 80px;}
    .zcList:hover {background: #eee;}
    .zcList div {border: 1px solid #999;display: table-cell;cursor: pointer;vertical-align:middle;width: 48%;text-align:center;}
    .title {width: 100%;text-align: center;line-height: 50px;}
</style>