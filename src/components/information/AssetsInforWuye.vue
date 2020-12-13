<template id="type">
    <div class="count">
        <el-dialog
                title="资产查看"
                :visible.sync="showDialog"
                @close="handleClose"
                width="60%">
        <el-row>
            巡检问题详情
            <el-form ref="form">
                <el-col :span="24">
                    <el-form-item label="资产编号：">
                        <el-input v-model="input" placeholder="请输入内容" disabled="disabled"></el-input>
                        <el-button type="primary">资产详情</el-button>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="资产坐落：">
                        <el-input v-model="input" placeholder="请输入内容" disabled="disabled"></el-input>
                        <el-button type="primary">资产详情</el-button>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="问题类型：">
                        <el-input v-model="input" placeholder="请输入内容" disabled="disabled"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="问题描述：">
                        <el-input type="textarea" disabled="disabled" v-model="input" style="width: 30%;"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="现场照片：（点击查看大图）">
                        <el-image
                                style="width: 100px; height: 100px"
                                :src="url"
                                disabled="disabled"
                                :preview-src-list="srcList">
                        </el-image>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="巡检人/单位：">
                        <el-input v-model="input" placeholder="请输入内容" disabled="disabled"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="巡检人联系电话：">
                        <el-input v-model="input" placeholder="请输入内容" disabled="disabled"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="巡检人时间：">
                        <el-input v-model="input" placeholder="请输入内容" disabled="disabled"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24" style="position: relative;margin: 0;">
                    <div class="map"></div>
                </el-col>
                <el-col :span="24" style="text-align: right;margin-top: 20px;">
                    <el-button type="primary" round @click="open">通过</el-button>
                    <el-button type="success" round @click="showDialog = false">驳回</el-button>
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
            dialogKan:{
                type: Boolean,
                default: false
            }
        },
  data () {
    return {
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
        dialogKan(oldVal,newVal){
            this.showDialog = this.dialogKan
        },
    },
    methods:{
        open() {
            this.$alert('审批已通过', '提示', {
                callback: action => {
                    console.log(this.$emit('changeShow'))
                    this.$emit('changeShow','false')
                }
            });
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

    }
}
</script>
<style scoped>
    .map {
        height: 250px;
        width:800px;
        position: relative;
        left:50%;
        margin-left: -400px;
        background: aliceblue;
        margin-top: 30px;
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
