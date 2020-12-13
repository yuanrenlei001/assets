<template id="type">
    <div class="count">
        <el-row>
            <el-form ref="form" >
                <el-col :span="24">
                    <el-form-item label="产权2名：">
                        <el-input v-model="input" placeholder="请输入内容" :disabled="disabled"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="产权人：">
                        <el-input v-model="input" placeholder="请输入内容" :disabled="disabled"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="房屋坐落：">
                        <el-input v-model="input" placeholder="请输入内容" :disabled="disabled"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="原使用产权人：">
                        <el-input v-model="input" placeholder="请输入内容" :disabled="disabled"></el-input>
                    </el-form-item>
                </el-col>
                <el-col  :span="24">
                    <el-form-item label="房屋类型：" >
                        <el-select  v-model="value" placeholder="请选择" :disabled="disabled">
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
                        <el-select  v-model="value" placeholder="请选择" :disabled="disabled">
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
                    <el-form-item label="面积（房屋建筑面积/m²）：">
                        <el-input v-model="input" placeholder="请输入内容" :disabled="disabled"></el-input>
                    </el-form-item>
                </el-col>
                <el-col  :span="24">
                    <el-form-item label="用途（产权用途）：" >
                        <el-select  v-model="value" placeholder="请选择" :disabled="disabled">
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
                    <el-form-item label="产权证号（不动产权证）：">
                        <el-input v-model="input" placeholder="请输入内容" :disabled="disabled"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="土地面积/m²：">
                        <el-input v-model="input" placeholder="请输入内容" :disabled="disabled"></el-input>
                    </el-form-item>
                </el-col>
                <el-col  :span="24">
                    <el-form-item label="土地用途：" >
                        <el-select  v-model="value" placeholder="请选择" :disabled="disabled">
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
                        <el-select  v-model="value" placeholder="请选择" :disabled="disabled">
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
                    <el-form-item label="未登记建筑：" >
                        <el-select  v-model="value" placeholder="请选择" :disabled="disabled">
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
                    <el-form-item label="协议金额：">
                        <el-input v-model="input" placeholder="请输入内容" :disabled="disabled"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="附件：">
                        <el-upload
                                action="#"
                                list-type="picture-card"
                                :auto-upload="false">
                            <i slot="default" class="el-icon-plus"></i>
                            <div slot="file" slot-scope="{file}">
                                <img
                                        class="el-upload-list__item-thumbnail"
                                        :src="file.url" alt=""
                                >
                                <span class="el-upload-list__item-actions">
        <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
                v-if="!disableds"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
                v-if="!disableds"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
                            </div>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </el-form-item>
                </el-col>
                <el-col  :span="24">
                    <el-form-item label="房屋现状：" >
                        <el-select  v-model="value" placeholder="请选择" :disabled="disabled">
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
                        <el-input v-model="input" placeholder="请输入内容" :disabled="disabled"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="备注：">
                        <el-input v-model="input" placeholder="请输入内容" :disabled="disabled"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24" class="files">
                    <el-form-item label="历史租赁情况：">
                        <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-change="handleChange"
                                :file-list="fileList">
                            <el-button size="small" type="primary">点击上传</el-button>
                        </el-upload>
                    </el-form-item>
                </el-col>
                <el-col :span="24" class="coordinate">
                    <el-form-item label="坐标：" >
                        X：
                        <el-input v-model="input" placeholder="请输入内容" :disabled="disabled"></el-input>
                        Y：
                        <el-input v-model="input" placeholder="请输入内容" :disabled="disabled"></el-input>
                    </el-form-item>
                    <div id="mapDiv" class="mapDiv"></div>
                </el-col>
                <el-col :span="24" style="text-align: right;margin-top: 20px;">
                    <el-button type="primary" round>提交</el-button>
                    <el-button type="success" round>取消</el-button>
                </el-col>
            </el-form>
        </el-row>
    </div>
</template>

<script>
    import T from 'tMap'; // 天地图引入
    import mapMixin from '@/components/mapMixin'; // 公共方法
    export default {
        mixins: [mapMixin],
  name: 'login',
    props:{
        type:String
    },
  data () {
    return {
        input:'',
        input2:'',
        disabled:false,
        disableds:false,
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
        }]
    }
  },
        components:{
        },
    watch:{
        type(type){
            console.log(type)
            this.types = type
            if(type == 'add'){
                this.disabled = false;
                this.input = '';
                this.value = '';
            }else if(type == 'edit'){
                this.disabled = false;
                this.input = '111';
                this.value = '222';
            }else{
                this.disabled = true;
                this.input = '1333311';
                this.value = '222';
            }
        },
        deep:true
    },
    methods:{
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
            let that = this;
            that.map = new T.Map("mapDiv");
            that.map.centerAndZoom(new T.LngLat(116.30034, 40.07689), that.zoom); // 设置显示地图的中心点和级别
            // 添加地图类型控件
            that.addCtrl();

            // 普通标注
            let site = [
                { lng: 116.30034, lat: 39.98054 },
                { lng: 116.41238, lat: 40.07689 },
                { lng: 116.34143, lat: 40.03403 },
            ];
            that.markerPoint(site);
        },

    },
    mounted(){
        this.$emit('childEvent', { name: 'zhangsan', age:  10 });
        let that = this;
        // 挂载完成后渲染地图
        this.$nextTick(function() {
            that.onLoad();
        });
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
    .count>>>.el-form-item__label {width: 42%;font-size: 14px;line-height: 32px;}
    .count>>>.el-form-item {margin-bottom: 5px;}
    .files>>>.el-upload-list {width: 30%;margin-left: 33%;}
    .coordinate>>>.el-form-item__label {width: 25%;}
    .sum {height:100px;background: #fff;width: 90%;}
    .sumLeft {float:left;line-height: 115px;margin-left: 48px;}
    .sumRight {margin-left: 130px;padding-top: 20px;}
    .sumRight p:first-child {font-size: 16px;color: #666;}
    .sumRight p:last-child {font-size: 30px;color: #333;margin-top: 10px;}

</style>
