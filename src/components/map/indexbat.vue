<template>
    <div id="htmls">
        <div id="map" style="width: 100%;height:89vh;"></div>
    </div>
</template>

<script>
    import  icon01 from '../../assets/bj.png'
export default {
  name: 'maps',
  data () {
    return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        ],
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

    },
    components:{
    },
    methods:{},
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
        z-index: 9999;
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