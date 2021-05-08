<template>
    <div id="htmls">
        <iframe src="http://jdmap.zjnydsj.com:8081/jdmap/dw.html" frameborder="0" id="iframe_id" width="100%" height="900px" scrolling="no" style="display: none"></iframe>
        <div id="map" style="width: 100%;height:89vh;"></div>
        <div class="tools">
            <img v-if="isDrawLine"  src="@/assets/tool_line_p.png" title="测距"  @click="clearMeasureDistance"/>
            <img  v-else src="@/assets/tool_line_p.png" title="测距"  @click="measureDistance"/>
            <img v-if="isDrawPolygon" src="@/assets/tool_area_p.png" @click="clearMeasureArea" />
            <img  v-else src="@/assets/tool_area_p.png" title="测面"  @click="measureArea" />
            <img src="@/assets/tool_re.png" title="复位" @click="reset" />
            <img src="@/assets/sacle_add.png" title="放大" @click="scale(0)" />
            <img src="@/assets/sacle_reduce.png" title="缩小" @click="scale(1)" />
            <!--<img src="@/assets/sacle_reduce.png" title="缩小" @click="dingw" />-->
        </div>
        <div class="button" v-if="!show" @click="up"><img src="@/assets/iconshang.png" alt="" class="shang"></div>
        <div class="sort" v-show="show">
            <div class="xialaDiv"><img src="@/assets/iconxiala.png" alt="" class="xiala" @click="up"></div>
            <el-row :span="24" v-show="eacharsShow">
                <el-col  :lg="6"  class="eachars" >
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
            <el-row :span="24" v-show="!eacharsShow">
                <el-col  :lg="6"  class="eachars">
                    <div class="eachars_title">办证情况统计图</div>
                    <div class="eachars_sort">
                        <div  id="myChart7" :style="{width: '300px', height: height}"></div>
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
                    </el-menu>
                </el-col>
            </el-row>
        </div>
        <div class="search">
            <el-input placeholder="请输入资产编号或房屋坐落" v-model="input23" class="input-with-select" style="width: 400px;">
                <el-button slot="append" icon="el-icon-search" @click="searchs"></el-button>
            </el-input>
        </div>
        <div class="addressFixed" v-drag>
            <div class="addressFixed_title">资产详情</div>
            <div>资产编号:{{tmp&&tmp.assetCode?tmp.assetCode:meansBook.assetCode}}</div>
            <div>产权人：{{tmp&&tmp.assetUser?tmp.assetUser:meansBook.assetUser}}</div>
            <div>房屋坐落：{{tmp&&tmp.houseAddress?tmp.houseAddress:meansBook.houseAddress}}</div>
            <div>原使用产权人：{{tmp&&tmp.assetUserOri?tmp.assetUserOri:meansBook.assetUserOri}}</div>
            <div class="addressFixed_sort"><span>土地性质：{{tmp&&tmp.landNature?tmp.landNature:meansBook.landNature}}</span><span>不动产证：{{tmp&&tmp.realEstate?tmp.realEstate:meansBook.realEstate}}</span><span class="addressFixed_sort01" v-if="bdPic.length>0" @click="file(bdPic[0].url)">附件：不动产证.PDF</span></div>
            <div class="addressFixed_sort"><span>产权证号：</span><span>房产证：{{tmp&&tmp.realHouse?tmp.realHouse:meansBook.realHouse}}</span><span class="addressFixed_sort01" v-if="fcPic.length>0" @click="file(fcPic[0].url)">附件：房产证.PDF</span></div>
            <div class="addressFixed_sort"><span>房屋现状：{{tmp&&tmp.houseNow?tmp.houseNow:meansBook.houseNow}}</span><span>土地证：{{tmp&&tmp.realLand?tmp.realLand:meansBook.realLand}}</span><span class="addressFixed_sort01" v-if="tdPic.length>0" @click="file(tdPic[0].url)">附件：土地证.PDF</span></div>
            <!--<div class="addressFixed_sort"><span>房屋现状：</span><span>标签：文保单位</span></div>-->
            <div>房屋结构：{{tmp&&tmp.houseStructure?tmp.houseStructure:meansBook.houseStructure}}</div>
            <div>房屋建筑面积：{{tmp&&tmp.landArea?tmp.landArea:meansBook.landArea}}m²</div>
            <!--<div>产权证号：214945</div>-->
            <div>土地面积：{{tmp&&tmp.landArea?tmp.landArea:meansBook.landArea}}m²</div>
            <div>土地用途：{{tmp&&tmp.landUse?tmp.landUse:meansBook.landUse}}</div>
            <div>未登记建筑面积：{{tmp&&tmp.noCheckinArea?tmp.noCheckinArea:meansBook.noCheckinArea}}m²</div>
            <div>协议金额：{{tmp&&tmp.dealAmount?tmp.dealAmount:meansBook.dealAmount}}</div>
            <div>房产档案编号：{{tmp&&tmp.houseNo?tmp.houseNo:meansBook.houseNo}}</div>
            <div>备注：{{tmp&&tmp.remark?tmp.remark:meansBook.remark}}</div>
            <div>历史租赁情况：</div>
            <div>物业信息：</div>
            <div class="addressFixed_sort"><span style="width: 15%;">水</span><span>户名： {{tmp&&tmp.accNameWater?tmp.accNameWater:meansBook.accNameWater}} 户号：{{tmp&&tmp.accNoWater?tmp.accNoWater:meansBook.accNoWater}}</span><span>缴款方式：{{tmp&&tmp.accTypeWater?tmp.accTypeWater:meansBook.accTypeWater}}</span></div>
            <div class="addressFixed_sort"><span style="width: 15%;">电</span><span>户号：{{tmp&&tmp.accNameElec?tmp.accNameElec:meansBook.accNameElec}} 户号：{{tmp&&tmp.accNoElec?tmp.accNoElec:meansBook.accNoElec}}</span><span>缴款方式：{{tmp&&tmp.accTypeElec?tmp.accTypeElec:meansBook.accTypeElec}}</span></div>
            <div class="addressFixed_sort"><span style="width: 15%;">燃气</span><span>户号：{{tmp&&tmp.accNameGas?tmp.accNameGas:meansBook.accNameGas}} 户号：{{tmp&&tmp.accNoGas?tmp.accNoGas:meansBook.accNoGas}}</span><span>缴款方式：{{tmp&&tmp.accTypeGas?tmp.accTypeGas:meansBook.accTypeGas}}</span></div>
            <div class="phones">
                <div>照片：</div>
                <el-image
                        v-for="item in imgpicc"
                        v-if="imgpicc.length>0"
                        style="width: 100px; height: 100px"
                        :src="item.url"
                        :preview-src-list="[item.url]">
                </el-image>
                <!--<img  @click="alerts()" src="@/assets/beijing1.png" alt="">-->
                <!--<img  @click="alerts()" src="@/assets/beijing1.png" alt="">-->
                <!--<img  @click="alerts()" src="@/assets/beijing1.png" alt="">-->
                <!--<img @click="alerts()"  src="@/assets/beijing1.png" alt="">-->
            </div>
        </div>
        <!--资产详情查看-->
        <assets-kan :msg="detailData"  :AssetsKanVisible="AssetsKanVisible"  @changeShow="showAssetsKan" ref="AssetsKanRef"></assets-kan>
        <!--<div id="mapDiv" style="width: 100%;height:89vh;"></div>-->
    </div>
</template>

<script>
    // import L from "leaflet";
    import  icon01 from '../../assets/bj.png'
    import AssetsKan from '@/components/assets/AssetsKan'
export default {
  name: 'maps',
  data () {
    return {
        eacharsShow:true,
        isDrawLine:false,
        isDrawPolygon:false,
        showObj:'',
        meansBook:'',
        tmp:null,
        bdPic:[],
        fcPic:[],
        tdPic:[],
        imgpicc:[],
        flag:true,
        mapArr:[],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        ],
        detailData:'',
        show:true,
        input2:'',
        input23:'',
        ass:false,
        map:null,
        _marker:null,
        width:'100%',
        height:'160px',
        AssetsKanVisible: false,
        mapSort:'oldtown:nxshdt',
        geoServerUrl: "/geoServer/geoserver/ows",
        geoParams: {
            service: 'WFS',
            version: '1.1.0',
            request: 'GetFeature',
            typeName: 'oldtown:trf_security_car',
            outputFormat: 'application/json',
            srsName: 'EPSG:4326',
        },
        mapList:'',
        polygon:'',
        houseNature:[
            {'label':'办公'},{'label':'参主'},{'label':'仓储'},{'label':'工业厂房'},{'label':'公房'},
            {'label':'集体'},{'label':'其他'},{'label':'全民'},{'label':'商业'},{'label':'私房'},
            {'label':'未登记认定'},{'label':'住宅'},{'label':'住宅/仓储'},{'label':'住宅/工业厂房'}
        ],
        landNature:[
            {'label':'仓储出让'},{'label':'仓储划拨'},{'label':'工业出让'},{'label':'工业划拨'},{'label':'商业出让'},
            {'label':'商业划拨'},{'label':'住宅出让'},{'label':'住宅划拨'},{'label':'综合划拨'},
        ],
        houseNow:[
            {'label':'出借'},{'label':'出租'},{'label':'借用'},{'label':'空置'},{'label':'其他'},{'label':'修缮'},{'label':'已拆除'},{'label':'自用'},
        ],
        countList:[],
        data2:'',
        data3:'',
        arrList:'',
        mapArrzheng:[]
    }
  },
    directives:{
        drag(el,bindings){
            el.onmousedown = function(e){
                var disx = e.pageX - el.offsetLeft;
                var disy = e.pageY - el.offsetTop;
                document.onmousemove = function (e){
                    el.style.left = e.pageX - disx+'px';
                    el.style.top = e.pageY - disy+'px';
                }
                document.onmouseup = function(){
                    document.onmousemove = document.onmouseup = null;
                }
            }
        }
    },
    created(){
        this.list('景点');
        let _this=this;
        window.gourl=_this.gourl;
        window.addEventListener('message',function(e) {
            if(e.data!=undefined && e.data.type!=undefined){
                if(e.data.type='map'){
                    var jwd=e.data.data.split(",");
                    console.log(jwd)
                    var lng=Number(30.87415142);
                    var lat=Number(120.42538596);
                }
            }
        },false)
    },
    components:{
        AssetsKan
        // adapt,
        // tilelayer
        // ,ChineseTmsProviders,
        // leaflet
    },
    methods:{
        dingw(){
            var lng=Number(30.87415142);
            var lat=Number(120.42538596);
            // 右上
            let latRight = lat+(0.000078/2);
            let lngRight = lat+(0.000099/2);
            let latLeft = lat+(0.000078/2);
            let lngLeft = lat+(0.000099/2);

            this.$axios({
                url: '/mapsDw/mapServePath/geoserver/oldtown/ows?service=WFS&version=1.2.0&request=GetFeature&typeName=oldtown:zch_shape_point&maxFeatures=50&outputFormat=application%2Fjson&filter='+'<Filter xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml"><Intersects><PropertyName>the_geom</PropertyName><gml:Envelope srsName="EPSG:4326"><gml:lowerCorner>'+latLeft+lngLeft+'</gml:lowerCorner><gml:upperCorner>'+latRight+lngRight+'</gml:upperCorner></gml:Envelope></Intersects></Filter>',
                method: "get",
                dataType: "json",
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data:{}
            }).then(res => {

            })
            // var iframe = document.getElementById('iframe_id');
            // var iframe_cw = iframe.contentWindow;
            // iframe_cw.postMessage('定位', "*"); //通信 * 可以指定域名
        },
         fun1(val){
        return new Promise((resolve, reject) => {
            let arr = [];
            val.forEach((v, i) => {
                let _data = v.properties.code.split(',');
                for(let i=0;i<_data.length;i++){
                    // propertiesCode.push(_data[i]);
                    // this.count(_data[i])
                    arr.push(_data[i])
                }
            })
            this.data2 = arr
        });
    },
    fun2(){
        return new Promise((resolve, reject) => {
            var data = this.data2;
            let arr = []
            let len = data.length;
            for(let i=0;i<data.length;i++){
                if(len>=i){
                    this.data3 = arr
                }else{
                    this.$axios({
                        url: this.getAjax + '/admin/meansAdmin/count?assetCode='+data[i],
                        method: "get",
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8',
                            'Token':sessionStorage.getItem('token')
                        },
                        data:{}
                    }).then(res => {
                        let obj= {}
                        let data = res.data.data;
                        // houseNature,landNature,houseNows
                        obj['houseNature'] = data.houseNature;
                        obj['landNature'] = data.landNature;
                        obj['houseNow'] = data.houseNow;
                        obj['realEstate'] = data.realEstate;
                        arr.push(obj)
                        // that.countList.push(Object.assign({}, that.countList, obj))
                        // this.$forceUpdate()
                    })
                }

            }
        });
    },
    fun3(data){
        return new Promise((resolve, reject) => {
            console.log(JSON.stringify(data));
        });
    },
    run(){
        Promise.all([
            this.fun1('set'),
            this.fun2(),
            this.fun3()
        ]).then(res => {
            /* 你的逻辑代码 */
            console.log("run");
        })
    },
        count(val){
            var that = this;
            var arr = [];
            var data = {
                codes: val
            }
                    this.$axios({
                        url: this.getAjax + '/admin/meansAdmin/count',
                        method: "post",
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8',
                            'Token':sessionStorage.getItem('token')
                        },
                        data:data
                    }).then(res => {
                        var color = ['#9681db','#e56e34','#80c857','#fadd41','#08c1f4']
                        // itemStyle:{color:'#08c1f4'}
                        // 房屋性质统计
                        let dataassetUse = res.data.data.assetUse
                        let arrassetUse = []
                        for(let i=0;i<dataassetUse.length;i++){
                            let obj = {};
                            if(Object.keys(dataassetUse[i]).toString()!==''){
                                obj['name'] = Object.keys(dataassetUse[i]).toString()
                                obj['value'] = Object.values(dataassetUse[i]).toString()
                                obj['itemStyle'] = {color:color[i]}
                                arrassetUse.push(obj)
                            }
                        }
                        // 办证情况
                        let datarealEstate= res.data.data.realEstate
                        let num = 0;
                        let num2 = 0;
                        for(var i=0;i<datarealEstate.length;i++){
                            var obj = {};
                            if(Object.keys(datarealEstate[i]) == ''){
                                obj['name'] = '未办证'
                                obj['value'] = Object.values(datarealEstate[i]).toString()
                                num2 = Object.values(datarealEstate[i]).toString()
                            }else{
                                num = num + parseFloat(Object.values(datarealEstate[i]).toString())
                            }
                        }
                        var arrrealEstate = [
                            {'name':'未办证','value':num2},
                            {'name':'已办证','value':num}
                        ]
                        var arrrealEstate7 = [
                            {'name':'未办证','value':num2},
                            {'name':'已办证','value':num}
                        ]
                        // 土地性质
                        let datalandNature = res.data.data.landNature
                        let arralandNature = []
                        for(let i=0;i<datalandNature.length;i++){
                            let obj = {};
                            if(Object.keys(datalandNature[i]).toString()!==''){
                                obj['name'] = Object.keys(datalandNature[i]).toString()
                                obj['value'] = Object.values(datalandNature[i]).toString()
                                obj['itemStyle'] = {color:color[i]}
                                arralandNature.push(obj)
                            }
                        }
                        // 现状统计
                        let datahouseNow = res.data.data.houseNow
                        let arrhouseNow = []
                        for(let i=0;i<datahouseNow.length;i++){
                            let obj = {};
                            if(Object.keys(datahouseNow[i]).toString() !==''){
                                obj['name'] = Object.keys(datahouseNow[i]).toString()
                                obj['value'] = Object.values(datahouseNow[i]).toString()
                                obj['itemStyle'] = {color:color[i]}
                                arrhouseNow.push(obj)
                            }

                        }
                        that.drawLine1(arrassetUse);
                        that.drawLine2(arrrealEstate);
                        that.drawLine3(arralandNature);
                        that.drawLine4(arrhouseNow)
                        that.drawLine7(arrrealEstate7)
                    })

        },
        list(type){
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
            })
                .then(res => {
                    var tabStr = "";
                    var my_spots = [];
                    //点击地图上图标
                    this.mapList = res.data.features;
                    let data = res.data.features;
                    let arr = [];
                    data.forEach((v, i) => {
                        let _data = v.properties.code.split(',');
                        for(let i=0;i<_data.length;i++){
                            // propertiesCode.push(_data[i]);
                            // this.count(_data[i])
                            arr.push(_data[i])
                        }
                    })
                    this.arrList = arr
                    let arrListarr = arr;
                    for(let i=0;i<arrListarr.length;i++){
                        this.listSearchzheng(arrListarr[i])
                    }
                    this.count(arr);
                    that.polygon = L.geoJSON(res.data,{color:'red'}).addTo(this.map).on("click", this.markerOnClicks);
//测量图层
                    this.drawGroupPolyline = L.featureGroup().addTo(this.map);
                    this.drawGroupPolygon = L.featureGroup().addTo(this.map);
                    //画图创建事件
                    this.map.on(L.Draw.Event.CREATED, event => {
                        const {
                            layer,
                            layerType
                        } = event;
                        if (layerType === "polygon") {
                            let latlng = layer.getLatLngs()[0];
                            let area = this.formatArea(latlng);
                            this.addMeasureMarker(area, [latlng[latlng.length - 1].lat, latlng[latlng.length - 1].lng], this.map); //把画图之后计算的结果添加到地图上

                            console.log(this.drawGroupPolygon)
                            this.drawGroupPolygon.addLayer(layer);
                        } else if (layerType === "polyline") {
                            let latlng = layer.getLatLngs();
                            let distance = this.formatLength(latlng);
                            this.addMeasureMarker(distance, [latlng[latlng.length - 1].lat, latlng[latlng.length - 1].lng], this.map);
                            this.drawGroupPolyline.addLayer(layer);
                        }
                        // drawGroup,groupLayer,把画图的图层添加到图层组方便管理
                        // this.drawGroup.addLayer(layer);

                    });
                    // 结束绘制监听
                    this.map.on(L.Draw.Event.DRAWSTOP, function() {
                        console.log('结束绘制')

                    });



                    //添加画图的提示信息
                    L.drawLocal.draw.handlers.polyline = {
                        tooltip: {
                            start: "点击地图开始画线",
                            cont: "继续选择",
                            end: "双击完成绘制"
                        }
                    };
                    L.drawLocal.draw.handlers.polygon = {
                        tooltip: {
                            start: "点击地图开始绘制多边形",
                            cont: "继续选择",
                            end: "点击第一个顶点完成绘制"
                        }
                    };
                })
        },
        clearMeasureArea() {
            // 面
            this.isDrawPolygon = false;
            this.polygon.disable();
            let obj = document.getElementsByClassName('my-div-icon');
            for(let i=0;i<obj.length;i++){
                obj[i].innerHTML = ''
            }
            this.drawGroupPolygon.clearLayers()
        },
        addMeasureMarker(text, latlng, groupLayer) {
            var myIcon = L.divIcon({
                html: text,
                className: 'my-div-icon',
                iconSize: [80, 26]
            });
            L.marker(latlng, {
                icon: myIcon
            }).addTo(groupLayer);

        },

        formatArea(polygon) {
            //L.GeometryUtil.geodesicArea(),返回number类型的数据，单位是平方米，这里做了一下转化
            var seeArea = L.GeometryUtil.geodesicArea(polygon);
            let area = (seeArea.toFixed(0)/10) + "㎡";
            if (seeArea > 10e5) {
                let area = ((seeArea / 10e5).toFixed(2)/10) + "k㎡";
            }
            console.log(area)
            return area;
        },

        formatLength(line) {
            let dis = 0;
            for (let i = 0; i < line.length - 1; i++) {
                let start = line[i];
                let end = line[i + 1];
                dis += L.latLng([start.lat, start.lng]).distanceTo([end.lat, end.lng]); //计算两个点之间的距离，并累加
            }
            //结果得到的也是number类型，单位是 米
            if (dis < 1000) {
                return dis.toFixed(2) + "m";
            }
            return (dis / 10e2).toFixed(2) + "km";
        },
        clearMeasureDistance() {
            // 距离
            this.isDrawLine = false;
            this.polyline.disable();
            let obj = document.getElementsByClassName('my-div-icon');
            for(let i=0;i<obj.length;i++){
                obj[i].innerHTML = ''
            }
            this.drawGroupPolyline.clearLayers()
        },
        measureDistance() {
            // 距离
            this.isDrawLine = true;
            this.drawPolyline();
        },
        drawPolyline() {
            // 距离
            let map = this.map;
            this.polyline = new L.Draw.Polyline(map, {
                shapeOptions: {
                    weight: 1,
                    color: "#ff0000",
                    opacity: 0.8
                }
            });
            this.polyline.enable();
        },
        measureArea() {
            // 面
            this.isDrawPolygon = true;
            this.drawPolygon();
        },
        drawPolygon() {
            // 面
            let map = this.map;
            this.polygon = new L.Draw.Polygon(map, {
                shapeOptions: {
                    weight: 1,
                    color: "#ff0000",
                    opacity: 0.8,
                    fillColor: "#ff0000"
                }
            });
            this.polygon.enable();
        },
        reset() {
            this.map.setView([30.878191, 120.426207], 14);
        },
        scale(sate) {
            console.log("zoom: " + this.map.getZoom())
            var zoom = this.map.getZoom();
            if (sate == 1) {
                zoom--;
                this.map.setZoom(zoom)
            } else {
                zoom++;
                this.map.setZoom(zoom)
            }

        },
        file(url){
            window.open(url)
        },
        alerts(){
            console.log(123)
        },
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
        searchs(str){
            var that = this;
                let val = that.input23;
                if(val == ''){
                    that.list()
                }else{
                    let arr = that.mapList;
                    var  data = '';
                    let arr2 = []
                    for(let i=0;i<arr.length;i++){
                        let code = arr[i].properties.code.split(',');
                        for(let j=0;j<code.length;j++){
                            let obj = {};
                            obj['data'] = arr[i]
                            obj['code'] = code[j]
                            arr2.push(obj)
                            // arr2.push(code[j])
                            // if(arr2.indexOf(val) == 0){
                            //     data = arr2[j]
                            // }
                        }

                    }
                    for(let k=0;k<arr2.length;k++){
                        if(arr2[k].code.indexOf(val) == 0){
                            data = arr2[k].data
                        }
                    }
                    if(data !== ''){
                        // that.polygon.clearLayers();
                        that.polygon = L.geoJSON(data,{color:'red'}).addTo(that.map).on("click", that.markerOnClicks);
                        console.log(data)
                        this.map.setView([data.properties.latitude, data.properties.longitude], 18);
                        this.markerOnClicksss(data)
                        // this.map.panTo([30.878191, 120.426207], {
                        //     animate: true
                        // }) //地图平移，默认就是true，
                        let arr2=[val]
                        that.count(arr2)
                    }else{
                        this.$message({
                            message: '无相关资产数据！',
                            type: 'error'
                        });
                        that.list()
                    }

                }

            // var that = this;
            // var type = type;
            // this.$axios({
            //     url:  this.getAjaxShp + 'zch/zchShape/getById?id=18',
            //     method: "get",
            //     dataType: "json",
            //     headers: {
            //         'content-type': 'application/x-www-form-urlencoded'
            //     },
            //     data:{}
            // }).then(res => {
            //
            // })
        },
        markerOnClicksss(e){
            console.log(e)
            var that =this;
            that.mapArr = [];
            var popup = L.popup();
            var data = e.properties.code
            let _data = data.split(',');
            for(let i=0;i<_data.length;i++){
                that.listSearch(_data[i]);
            }
            let divStr = '';
            let d = {
                lat: e.properties.latitude,
                lng: e.properties.longitude
            }
            setTimeout(function(){
                for(let j=0;j<that.mapArr.length;j++){
                    divStr +='<div class="zcList" style="width: 100%;text-align: center;margin-bottom: 2px;" onclick="gourl('+that.mapArr[j].id+')">' +
                        '<div style="border: 1px solid #999;display: table-cell;cursor: pointer;vertical-align:middle;height:30px;width: 148px;text-align:center;">'+that.mapArr[j].assetCode+'</div>' +
                        '<div style="border: 1px solid #999;display: table-cell;cursor: pointer;vertical-align:middle;height:30px;width: 148px;text-align:center;">'+that.mapArr[j].houseAddress+'</div>'
                }
                var str = '<div class="divs" style="width: 300px;background: #fff; display: table;">' +
                    '<div class="top" style="width: 100%;height:40px;text-align: center;line-height: 40px;border-bottom: 1px solid #eee;">' +
                    '<div style="float:left;width:50%;line-height: 40px;">资产编号</div>' +
                    '<div style="float:left;width:50%;line-height: 40px;">资产坐落</div></div>' +divStr+
                    '</div></div>'
                popup.setLatLng(d).setContent(str).openOn(that.map);
            },1000)
        },
        handleSelect(key, keyPath) {
            if(key ==1){
                // this.eacharsShow = true;
                this.count(this.arrList);
            }else{
                // this.eacharsShow = false
                let arr = []
                for(let i=0;i<this.mapArrzheng.length;i++){
                    if(this.mapArrzheng[i].realEstate !== '' || this.mapArrzheng[i].realHouse !== '' || this.mapArrzheng[i].realLand !==''){
                        arr.push(this.mapArrzheng[i].assetCode)
                    }
                }
                this.count(arr);
            }
        },
        listSearchzheng(search){
            var that = this;
            var data ={
                assetUse: "",
                assetUser: "",
                houseNature: "",
                houseNow: "",
                label: "",
                landNature: "",
                landUse: "",
                pageNum: 1,
                pageSize: 10,
                search: search
            }
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
                    let arr = [];
                    let list = res.data.data.list[0];
                    that.mapArrzheng.push(list)

                }
            })
        },
        drawLine1(arr){
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
                        data:arr
                    }
                ]
            });
        },
        drawLine2(arr){
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
                        data:arr
                    }
                ]
            });
        },
        drawLine3(arr){
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
                        data: arr,
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
        drawLine4(arr){
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
                        data: arr
                    }
                ]
            });
        },
        drawLine7(arr){
            // 基于准备好的dom，初始化echarts实例
            let myChart7 = this.$echarts.init(document.getElementById('myChart7'));
            myChart7.setOption({
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
                        data:arr
                    }
                ]
            });
        },
        up(){
          this.show=!this.show;
      },
        function2(data){
            var propertiesCode = [];
            data.forEach((v, i) => {
                let _data = v.properties.code.split(',');
                for(let i=0;i<_data.length;i++){
                    // propertiesCode.push(_data[i]);
                    this.count(_data[i])
                }
            })
            return Promise.resolve(this.countList)
        },
        function3(){
            return Promise.resolve(console.log('****************'))
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
        markerOnClick(e){
            console.log(123)
        },
        listSearch(search){
            var that = this;
            var data ={
                assetUse: "",
                assetUser: "",
                houseNature: "",
                houseNow: "",
                label: "",
                landNature: "",
                landUse: "",
                pageNum: 1,
                pageSize: 10,
                search: search
            }
            this.$axios({
                url: this.getAjax + '/admin/meansAdmin/findList',
                method: "post",
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Token':sessionStorage.getItem('token')
                },
                data:data
            }).then(res => {
                console.log(res)
                if(res.data.code == '2004'){
                    this.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                    this.$router.push('/')
                }else{
                    let arr = [];
                    let list = res.data.data.list[0];
                    that.mapArr.push(list)
                    // var list = res.data.data.list;
                    // that.tableData = list;
                    // that.total = res.data.data.total
                    // console.log(that.total)
                    // if(that.total<=1){
                    //     that.pageType = false
                    // }
                }
            })
        },
        markerOnClicks(e){
            var that =this;
            that.mapArr = [];
            var popup = L.popup();
            var data = e.sourceTarget.feature.properties.code;
            let _data = data.split(',');
            for(let i=0;i<_data.length;i++){
                that.listSearch(_data[i]);
            }
            let divStr = '';
            setTimeout(function(){
                for(let j=0;j<that.mapArr.length;j++){
                    divStr +='<div class="zcList" style="width: 100%;text-align: center;margin-bottom: 2px;" onclick="gourl('+that.mapArr[j].id+')">' +
                        '<div style="border: 1px solid #999;display: table-cell;cursor: pointer;vertical-align:middle;height:30px;width: 148px;text-align:center;">'+that.mapArr[j].assetCode+'</div>' +
                        '<div style="border: 1px solid #999;display: table-cell;cursor: pointer;vertical-align:middle;height:30px;width: 148px;text-align:center;">'+that.mapArr[j].houseAddress+'</div>'
                }
                var str = '<div class="divs" style="width: 300px;background: #fff; display: table;">' +
                    '<div class="top" style="width: 100%;height:40px;text-align: center;line-height: 40px;border-bottom: 1px solid #eee;">' +
                    '<div style="float:left;width:50%;line-height: 40px;">资产编号</div>' +
                    '<div style="float:left;width:50%;line-height: 40px;">资产坐落</div></div>' +divStr+
                    '</div></div>'
                popup.setLatLng(e.latlng).setContent(str).openOn(that.map);
            },1000)
        },
        fixedsss(){
            var demo = document.getElementsByClassName('addressFixed');
            demo[0].style.display = 'none'
        },
        gourl:function(val){
            var that =this;
            if(this.flag){
                that.$axios({
                    url: this.getAjax + '/admin/meansAdmin/findDetails?id='+val,
                    method: "get",
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Token':sessionStorage.getItem('token')
                    },
                    data:{}
                }).then(res => {
                    if(res.data.code = '1001'){
                        let param =res.data.data.meansBook.id
                        this.AssetsKanVisible = true
                        this.$refs.AssetsKanRef.detail(param)
                        // this.meansBook = res.data.data.meansBook;
                        // this.tmp = res.data.data.tmp
                        // console.log(this.meansBook)
                        // that.showObj = ''
                        // that.bdPic = []
                        // that.fcPic = []
                        // that.tdPic = []
                        // that.imgpicc = []
                        // var file= []
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
                        //     if(res.data.data.meansBook.realEstateAttach && res.data.data.meansBook.realEstateAttach!==''){
                        //         var imgbd = res.data.data.meansBook.realEstateAttach.split(',')
                        //         for(var j =0;j<imgbd.length;j++){
                        //             var obj4 = {}
                        //             obj4['name']= imgbd[j].split('#_#')[0]
                        //             obj4['url']= imgbd[j].split('#_#')[1]
                        //             obj4['hz']= imgbd[j].split('#_#')[1].substring(imgbd[j].split('#_#')[1].lastIndexOf("."))
                        //             that.bdPic.push(obj4);
                        //         }
                        //     }
                        //     if(res.data.data.meansBook.realHouseAttach && res.data.data.meansBook.realHouseAttach !==''){
                        //         var imgfc = res.data.data.meansBook.realHouseAttach.split(',');
                        //         for(var z =0;z<imgfc.length;z++){
                        //             var obj4 = {}
                        //             obj4['name']= imgfc[z].split('#_#')[0]
                        //             obj4['url']= imgfc[z].split('#_#')[1]
                        //             obj4['hz']= imgfc[z].split('#_#')[1].substring(imgfc[z].split('#_#')[1].lastIndexOf("."))
                        //             that.fcPic.push(obj4);
                        //             console.log(that.fcPic)
                        //         }
                        //     }
                        //     if(res.data.data.meansBook.realLandAttach && res.data.data.meansBook.realLandAttach!==''){
                        //         var imgtd = res.data.data.meansBook.realLandAttach.split(',');
                        //         for(var x =0;x<imgtd.length;x++){
                        //             var obj4 = {}
                        //             obj4['name']= imgtd[x].split('#_#')[0]
                        //             obj4['url']= imgtd[x].split('#_#')[1]
                        //             obj4['hz']= imgtd[x].split('#_#')[1].substring(imgtd[x].split('#_#')[1].lastIndexOf("."))
                        //             that.tdPic.push(obj4);
                        //         }
                        //     }
                        //     if(res.data.data.meansBook.pic && res.data.data.meansBook.pic !==''){
                        //         var imgpicc = res.data.data.meansBook.pic.split(',');
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
                        //      var demo = document.getElementsByClassName('addressFixed');
                        //     demo[0].style.display = 'block'

                    }else{
                        this.$message({
                            message: res.data.msg,
                            type: 'warning'
                        });
                    }
                })
            }
            that.flag =false;
            setTimeout(function(){
                that.flag =true;
            },500)
        },
    },
    mounted(){
      // this.getNews();
        var that = this;
        this.map = L.map('map', {
            center: [30.878191, 120.426207],
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
        this.map.addLayer(ign).on("click", this.fixedsss);
        setTimeout(function () {
            that.map.invalidateSize(true);
        }, 10);
        var o=document.getElementById("eachars_sort");
        this.width = o
    }
}
    // window.gourl = function (val,e) {
    //     e.stopPropagation()
    //     console.log(val)
    //     // var demo = document.getElementsByClassName('addressFixed');
    //     // demo[0].style.display = 'block'
    // };
</script>
<style>
    .my-div-icon {
        font-size:16px;
        color:#fff;
    }
</style>
<style scoped>
    .tools {
        position: fixed;
        bottom: 10%;
        right: 5%;
        z-index: 999;
    }
    .tools img {
        width:46px;height:46px;
        margin: 0 3px;cursor: pointer;
        padding: 5px;
        border-radius: 50%;
    }
    .drag{
        width: 100px;
        height: 100px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        background-color: red;
    }
    .addressFixed::-webkit-scrollbar {display:none}
    .eachars {height:100%;font-size: 14px;color: #fff;padding: 0 30px;}
    .eachars .eachars_title {line-height: 53px;}
    .eachars_sort {width: 100%;background: rgba(40,206,254,.12);height:160px;}
    .red {color: red;}
    .sort {position: fixed;bottom:0;left:0;z-index: 999;width:100%;height:242px;background: rgba(0,0,0,.6);}

    .sort .xialaDiv {
        width: 60px;
        height: 60px;
        position: absolute;
        top: -30px;
        left: 50%;
        margin-left: -30px;
        cursor: pointer;
        z-index: 999;
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
        z-index: 999;
        cursor: pointer;
    }
    .button img {width: 30px;height:30px;vertical-align: middle;}
    .menu {position: fixed;top:20%;left:53px;z-index: 999;width:100px;height:150px;}
    .menu>>>.el-menu {border-radius: 10px;overflow: hidden;margin-left: 1px;}
    .menu>>>.el-menu-item.is-active {background: #409EFF;color: #fff;}
    .menu>>>.el-menu-item {padding: 0;height:35px;font-size: 16px;text-align: center;line-height: 35px;color: #333;}
    .search {position: fixed;top:15%;right:53px;z-index: 999;}
    .search>>>.el-input-group__append, .el-input-group__prepend {background-color: #5c76d7;border: 1px solid #5c76d7;color: #fff;}
    .search>>> i {color: #fff;}
    .divs {position: fixed;top:25%;left:0;z-index: 999;width: 300px;background: #fff; display: table;}
    .top {width: 100%;height:80px;text-align: center;line-height: 80px;}
    .zcList{width: 100%;text-align: center;margin-bottom: 2px;}
    .top div {float:left;width:50%;line-height: 80px;}
    .zcList:hover {background: #eee;}
    .zcList div {border: 1px solid #999;display: table-cell;cursor: pointer;vertical-align:middle;width: 48%;text-align:center;}
    .title {width: 100%;text-align: center;line-height: 50px;}
</style>