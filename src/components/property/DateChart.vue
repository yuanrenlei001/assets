<template>
    <div class="count">
        <el-row>
            <el-form ref="form" >
                <el-col class="sort" :span="10">
                    <div class="sum">
                        <div class="sumLeft"><el-button type="primary" icon="el-icon-s-finance" circle style="font-size: 30px;"></el-button></div>
                        <div class="sumRight">
                            <p>可收租金</p>
                            <p>{{sum}} 万元</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="13" class="sort"  >
                    <el-form-item label="日期：" style="margin-left: 23px;">
                        <el-date-picker
                                v-model="value2"
                                type="daterange"
                                align="right"
                                value-format="yyyy-MM-dd"
                                unlink-panels
                                range-separator="至"
                                @change="time"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                        >
                        </el-date-picker>
                    </el-form-item>
                </el-col>
            </el-form>
        </el-row>
        <el-row >
            <el-col class="col" :span="24" >
                <div class="charts" id="myChart5" :style="{width: width, height: height}" ref="main"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'login',
    props:['msg'],
  data () {
    return {
        value2:'',
        input2:'',
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
        value1: '',
        tableData: [
            {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-08',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }
        ],
        multipleSelection: [],
        width:'400px',
        height:'350px',
        dataList:'',
        sum:0,
        page:''
    }
  },
    methods:{
        detail(data){
            var that = this;
            let sum = 0;
            let arr = [];
            for(let i=0;i<data.length;i++){
                sum += data[i].rentAmount;
                for(let j=0;j<data[i].propertyPayTypeList.length;j++){
                    let obj = {};
                    obj['jkStatus'] = data[i].propertyPayTypeList[j].jkStatus
                    obj['rentAmount'] = data[i].propertyPayTypeList[j].rentAmount
                    arr.push(obj)
                }
            }
            console.log(arr)
            this.sum = sum;
            let yjn = 0;
            let ycq = 0;
            let jjdq = 0;
            let wdq = 0;
            for(let x = 0;x<arr.length;x++){
                if(arr[x].jkStatus === '已缴纳'){yjn+=arr[x].rentAmount}
                if(arr[x].jkStatus === '已超期'){ycq+=arr[x].rentAmount}
                if(arr[x].jkStatus === '即将到期'){jjdq+=arr[x].rentAmount}
                if(arr[x].jkStatus === '未到期'){wdq+=arr[x].rentAmount}
            }
            var data = [
                {value:yjn,name:'已缴纳'},
                {value:ycq,name:'已超期'},
                {value:jjdq,name:'即将到期'},
                {value:wdq,name:'未到期'},
            ]
            console.log(data)
            this.$nextTick(()=>{
                that.drawLine5(data)
            })

        },
        time(e){
            if(e){
                console.log(e)
                let rentStart=e[0]
                let rentEnd=e[1]
                this.findList(rentStart,rentEnd)
            }else{
                this.findList('','')
            }

        },
        // 查询列表
        findList(rentStart,rentEnd){
            var that = this;
            var rentStart = rentStart;
            var rentEnd = rentEnd;
            this.toggleIndex = Math.random()
            var data = {
                "rentStart":rentStart,
                "rentEnd":rentEnd,
                "typeItem": 1,
                'pactCode':''
            }
            this.$axios({
                url: this.getAjax + '/admin/property/findList',
                method: "post",
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Token':sessionStorage.getItem('token')
                },
                data:data
            }).then(res => {
                if(res.data.code == '1001'){
                    var list = res.data.data.list;
                    this.page = [];
                    this.page = res.data.data;
                    var dataList = res.data.data.list;
                    var arr = [];
                    for(var i=0;i<list.length;i++){
                        for(var j=0;j<list[i].propertyPayTypeList.length;j++){
                            var datas = list[i].propertyPayTypeList[j];
                            var time = list[i].propertyPayTypeList[j].dateStr?list[i].propertyPayTypeList[j].dateStr:'2021-01-28';
                            var img = list[i].propertyPayTypeList[j].attach==''?null:list[i].propertyPayTypeList[j].attach;
                            var strtime = time.replace("/-/g", "/");//时间转换
                            var date1=new Date(strtime);
                            var date2=new Date();
                            if(date1<date2 && img){
                                list[i].propertyPayTypeList[j]['jkStatus'] ='已缴纳'
                            }
                            else if(date1<date2 && (img==null)){
                                list[i].propertyPayTypeList[j]['jkStatus'] ='已超期'
                            }
                            else{
                                var date = new Date();
                                var seperator1 = "-";
                                var year = date.getFullYear();
                                var month = date.getMonth() + 1;
                                var strDate = date.getDate();
                                if (month >= 1 && month <= 9) {
                                    month = "0" + month;
                                }
                                if (strDate >= 0 && strDate <= 9) {
                                    strDate = "0" + strDate;
                                }
                                var currentdate = year + seperator1 + month + seperator1 + strDate;
                                var arr1 = currentdate.split('-');
                                var arr2 = time.split('-');
                                arr1[1] = parseInt(arr1[1]);
                                arr1[2] = parseInt(arr1[2]);
                                arr2[1] = parseInt(arr2[1]);
                                arr2[2] = parseInt(arr2[2]);
                                var flag = true;
                                var type = '即将到期'
                                if(arr1[0] == arr2[0]){//同年
                                    if(arr2[1]-arr1[1] > 3){ //月间隔超过3个月
                                        flag = false;
                                        list[i].propertyPayTypeList[j]['jkStatus'] ='未到期'
                                    }else if(arr2[1]-arr1[1] == 3){ //月相隔3个月，比较日
                                        if(arr2[2] > arr1[2]){ //结束日期的日大于开始日期的日
                                            flag = false;
                                            list[i].propertyPayTypeList[j]['jkStatus'] ='未到期'
                                        }else{
                                            list[i].propertyPayTypeList[j]['jkStatus'] ='即将到期'
                                        }
                                    }else{
                                        list[i].propertyPayTypeList[j]['jkStatus'] ='即将到期'
                                    }
                                }else{ //不同年
                                    if(arr2[0] - arr1[0] > 1){
                                        list[i].propertyPayTypeList[j]['jkStatus'] ='未到期'
                                        flag = false;
                                    }else if(arr2[0] - arr1[0] == 1){
                                        if(arr1[1] < 10){ //开始年的月份小于10时，不需要跨年
                                            flag = false;
                                            list[i].propertyPayTypeList[j]['jkStatus'] ='未到期'
                                        }else if(arr1[1]+3-arr2[1] < 12){ //月相隔大于3个月
                                            flag = false;
                                            list[i].propertyPayTypeList[j]['jkStatus'] ='未到期'
                                        }else if(arr1[1]+3-arr2[1] == 12){ //月相隔3个月，比较日
                                            if(arr2[2] > arr1[2]){ //结束日期的日大于开始日期的日
                                                flag = false;
                                                list[i].propertyPayTypeList[j]['jkStatus'] ='未到期'
                                            }else{
                                                list[i].propertyPayTypeList[j]['jkStatus'] ='即将到期'
                                            }
                                        }
                                    }
                                }
                                // list[i].propertyPayTypeList[j]['jkStatus'] ='未来时间'
                            }
                        }
                    }
                    for(var z=0;z<list.length;z++){
                        list[z]['flag'] = '';
                        var flag = list[z].flag,
                            item = list[z].propertyPayTypeList;
                        for(var y = 0; y < item.length; y++) {
                            if(item[y].jkStatus === "已超期") {
                                list[z].flag = '已超期'
                            } else if(item[y].jkStatus === "已缴纳") {
                                if(
                                    (list[z].flag.length == 0) &&
                                    (list[z].flag !== "已超期")&&(list[z].flag !== "即将到期" )
                                ){
                                    list[z].flag = "已缴纳"
                                }
                            } else if(item[y].jkStatus === "即将到期") {
                                if(  (list[z].flag != "已超期") ){
                                    list[z].flag = "即将到期"
                                }
                            }
                        }
                    }
                    console.log(list)
                    that.detail(list)
                    // if(val === '全部'){
                    //     this.tableData = list
                    // }else{
                    //     var arr = [];
                    //     list.forEach((item, i) => {
                    //         if(item.flag === val){
                    //             arr.push(item)
                    //         }
                    //     })
                    //     this.tableData = arr
                    // }

                }else{
                    this.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                }
            })
        },
        drawLine5(data){
            // 基于准备好的dom，初始化echarts实例
            let myChart5 =  this.$echarts.init(this.$refs.main);
            let option = {
                title: {
                    text:'资产租金',
                    top:0,
                    textStyle: {
                        fontSize: 14,
                        color:'#999',
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    left: 'center',
                    bottom: '0',
                    data: ['即将到期', '已缴纳', '已超期','未到期']
                },
                color:['#61a5e8','#7ecf51','#eecb5f','#becb5f'],
                series: [
                    {
                        name: '',
                        type: 'pie',
                        radius: [0, 100],
                        center: ['50%', '50%'],
                        label: {
                            show: false
                        },
                        emphasis: {
                            label: {
                                show: true
                            }
                        },
                        data: data
                    }
                ]
            }
            myChart5.setOption(option);
        },
    },
    mounted(){
      // this.drawLine2();
      // this.drawLine5();
            this.$emit('childEvent', { name: 'zhangsan', age:  10 })
    },
    created:function () {
      this.detail(this.$props.msg)
    }
}
</script>
<style scoped>
    .count>>>.charts {position: relative;left:50%;margin-left: -150px;}
    .count>>>.col {margin: 0 25px 25px 0;background: #fff;}
    .times>>>.el-date-editor.el-input, .el-date-editor.el-input__inner {width: 400px;}
    .sum {height:100px;background: #fff;width: 90%;}
    .sumLeft {float:left;line-height: 115px;margin-left: 20px;}
    .sumRight {margin-left: 97px;padding-top: 20px;}
    .sumRight p:first-child {font-size: 16px;color: #666;}
    .sumRight p:last-child {font-size: 30px;color: #333;margin-top: 10px;}
</style>
