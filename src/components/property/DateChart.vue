<template>
    <div class="count">
        <el-row>
            <el-form ref="form" >
                <el-col class="sort" :span="10">
                    <div class="sum">
                        <div class="sumLeft"><el-button type="primary" icon="el-icon-s-finance" circle style="font-size: 30px;"></el-button></div>
                        <div class="sumRight">
                            <p>可收租金（万元）</p>
                            <p>200</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="13" class="sort"  >
                    <el-form-item label="日期：" style="margin-left: 23px;">
                        <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="13" class="sort"  >
                    <el-form-item label="产权人：" style="margin-left: 23px;">
                        <el-select  v-model="value" placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-form>
        </el-row>
        <el-row >
            <el-col class="col" :span="11" >
                <div class="charts" id="myChart5" :style="{width: width, height: height}"></div>
            </el-col>
            <el-col class="col" :span="11">
                <div class="charts" id="myChart2" :style="{width: width, height: height}"></div>
            </el-col>
            <!--<el-col class="col" :span="8">-->
                <!--<div class="charts" id="myChart3" :style="{width: width, height: height}"></div>-->
            <!--</el-col>-->
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
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
        width:'300px',
        height:'300px',
    }
  },
    methods:{
      // 土地性质
        // 产权人
        drawLine2(){
            // 基于准备好的dom，初始化echarts实例
            let myChart2 = this.$echarts.init(document.getElementById('myChart2'));
            myChart2.setOption({
                color: ['#3398DB'],
                title:{
                    text:'资产租金统计',
                    top:20,
                    textStyle: {
                        fontSize: 14,
                        color:'#999',
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        barWidth: '60%',
                        data: [10, 52, 200, 334, 390, 330, 220]
                    }
                ]
            });
        },
        // 房屋现状
        drawLine3(){
            // 基于准备好的dom，初始化echarts实例
            let myChart3 = this.$echarts.init(document.getElementById('myChart3'));
            myChart3.setOption({
                title:{
                    text:'房屋现状',
                    subtext: '78%',
                    top:20,
                    textStyle: {
                        fontSize: 14,
                        color:'#999',
                    }
                },
                color:['#999','#33a4fb'],
                legend: {
                    left: '50%',
                    data: ['占用', '闲置'],
                    bottom:0,
                },

                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['50%', '70%'],
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
                            {value: 100, name: '占用'},
                            {value: 335, name: '闲置'},
                        ]
                    }
                ]
            });
        },
        // 产权用途
        // 土地用途
        drawLine5(){
            // 基于准备好的dom，初始化echarts实例
            let myChart5 = this.$echarts.init(document.getElementById('myChart5'));
            myChart5.setOption({
                title: {
                    text:'土地用途',
                    top:20,
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
                    top: 'bottom',
                    data: ['住宅', '商铺', '服务', '酒店', '餐饮']
                },
                color:['#61a5e8','#7ecf51','#eecb5f','#c55a4c','#c78151'],
                series: [
                    {
                        name: '半径模式',
                        type: 'pie',
                        radius: [20, 110],
                        center: ['50%', '50%'],
                        roseType: 'radius',
                        label: {
                            show: false
                        },
                        emphasis: {
                            label: {
                                show: true
                            }
                        },
                        data: [
                            {value: 30, name: '住宅'},
                            {value: 20, name: '商铺'},
                            {value: 15, name: '服务'},
                            {value: 10, name: '酒店'},
                            {value: 5, name: '餐饮'},
                        ]
                    }
                ]
            });
        },
        // 产权人
    },
    mounted(){
      this.drawLine2();
      this.drawLine5();
            this.$emit('childEvent', { name: 'zhangsan', age:  10 })
    },
    created:function () {
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
