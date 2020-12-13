<template id="type">
    <div class="count">
        <el-row>
            <el-form ref="form" >
                <el-col :span="24">
                    <el-form-item label="请导入资产shp 文件：">
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
                <el-col :span="24">
                    <el-form-item label="请填写台账信息：">
                        <el-input v-model="input" placeholder=" " ></el-input>
                        <el-button type="primary" @click="handleClick">填写</el-button>
                    </el-form-item>

                </el-col>
            </el-form>
        </el-row>
        <el-dialog
                :title="title"
                :visible.sync="dialogVisibleAdd"

                width="60%">
            <new-infor :type="type" ></new-infor>
        </el-dialog>
    </div>
</template>

<script>
    import NewInfor from '@/components/assets/NewInfor'
    export default {
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
        dialogVisibleAdd: false,
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
            NewInfor
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
        handleClickAdd(){
            this.dialogVisibleAdd = true
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
