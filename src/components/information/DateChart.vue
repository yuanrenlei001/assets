<template>
    <div class="count">
        <el-row>
            <el-form ref="form" >
                <el-col class="sort" :span="5">
                    <div class="sum">
                        <div class="sumLeft"><el-button type="primary" icon="el-icon-s-finance" circle style="font-size: 30px;"></el-button></div>
                        <div class="sumRight">
                            <p>总资产（宗）</p>
                            <p>1234</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6" class="sort"  >
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
                <el-col class="sort" :span="6">
                    <el-form-item label="房屋类型：">
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
                <el-col class="sort" :span="6">
                    <el-form-item label="产权用途：">
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
                <el-col :span="6" class="sort">
                    <el-form-item label="土地用途：">
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
                <el-col class="sort" :span="6">
                    <el-form-item label="土地性质：">
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
                <el-col class="sort" :span="6">
                    <el-form-item label="房屋现状：">
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
            <el-col class="col" :span="7" >
                <div class="charts" id="myChart" :style="{width: width, height: height}"></div>
            </el-col>
            <el-col class="col" :span="7">
                <div class="charts" id="myChart2" :style="{width: width, height: height}"></div>
            </el-col>
            <el-col class="col" :span="8">
                <div class="charts" id="myChart3" :style="{width: width, height: height}"></div>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="col" :span="7">
                <div class="charts" id="myChart4" :style="{width: width, height: height}"></div>
            </el-col>
            <el-col class="col" :span="7">
                <div class="charts" id="myChart5" :style="{width: width, height: height}"></div>
            </el-col>
            <el-col class="col" :span="8">
                <div class="charts" id="myChart6" :style="{width: width, height: height}"></div>
            </el-col>
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
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'));
            let color = ['#FF8700', '#ffc300', '#00e473', '#009DFF'];
            let chartData = [{
                name: "规划",
                value: 153,
                unit: '元'
            },
                {
                    name: "租用",
                    value: 242,
                    unit: '元'
                },
                {
                    name: "其他",
                    value: 110,
                    unit: '元'
                }
            ];
            let arrName = [];
            let arrValue = [];
            let sum = 0;
            let pieSeries = [],
                lineYAxis = [];

// 数据处理
            chartData.forEach((v, i) => {
                arrName.push(v.name);
                arrValue.push(v.value);
                sum = sum + v.value;
            })

// 图表option整理
            chartData.forEach((v, i) => {
                pieSeries.push({
                    name: '学历',
                    type: 'pie',
                    clockWise: true,
                    hoverAnimation: false,
                    radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
                    center: ["30%", "50%"],
                    label: {
                        show: false
                    },
                    data: [{
                        value: v.value,
                        name: v.name
                    }, {
                        value: sum - v.value,
                        name: '',
                        itemStyle: {
                            color: "rgba(0,0,0,0)"
                        }
                    }]
                });

            })
            // 绘制图表
            myChart.setOption({
                title: {
                    text: '土地性质',
                    top:20,
                    textStyle: {
                        fontSize: 14,
                        color:'#999',
                    }
                },
                color: color,
                grid: {
                    top: '15%',
                    bottom: '54%',
                    left: "30%",
                    containLabel: false
                },
                legend: {
                    icon: "circle",
                    orient: 'horizontal',
                    // x: 'left',
                    data:['规划','租用','其他'],
                    left: 10,
                    bottom: 0,
                    align: 'right',
                    textStyle: {
                        color: "#333"
                    },
                    itemGap: 20
                },
                yAxis: [{
                    type: 'category',
                    inverse: true,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {

                        interval: 0,
                        inside: true,
                        textStyle: {
                            color: "#333",
                            fontSize: 14,
                            rich: {
                                line: {
                                    width: 170,
                                    height: 10,
                                    // backgroundColor: {image: dashedPic}
                                },
                                name: {
                                    color: '#666',
                                    fontSize: 14,
                                },
                                bd: {
                                    color: '#ccc',
                                    padding: [0, 5],
                                    fontSize: 14,
                                },
                                percent:{
                                    color: '#333',
                                    fontSize: 14,
                                },
                                value: {
                                    color: '#333',
                                    fontSize: 16,
                                    fontWeight: 500,
                                    padding: [0, 0, 0, 20]
                                },
                                unit: {
                                    fontSize: 14
                                }
                            }
                        },
                        show: true
                    },
                    data: lineYAxis
                }],
                xAxis: [{
                    show: false
                }],
                series: pieSeries
            });
        },
        // 产权人
        drawLine2(){
            // 基于准备好的dom，初始化echarts实例
            let myChart2 = this.$echarts.init(document.getElementById('myChart2'));
            myChart2.setOption({
                color: ['#3398DB'],
                title:{
                    text:'产权人',
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
        drawLine4(){
            // 基于准备好的dom，初始化echarts实例
            let myChart4 = this.$echarts.init(document.getElementById('myChart4'));
            myChart4.setOption({
                title: {
                    text:'产权用途',
                    subtext: '78%',
                    top:20,
                    textStyle: {
                        fontSize: 14,
                        color:'#999',
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                color:['#9efcbd','#33a4fb'],
                radar: [

                    {
                        indicator: [
                            {text: '餐饮', max: 100},
                            {text: '住宅', max: 100},
                            {text: '商铺', max: 100},
                            {text: '服务', max: 100},
                            {text: '住宿', max: 100}
                        ],
                        radius: 80,
                        center: ['50%', '60%'],
                    }

                ],
                series: [

                    {
                        type: 'radar',
                        radarIndex: 0,
                        areaStyle: {},
                        data: [
                            {
                                value: [85, 90, 90, 95, 95],
                                name: '某主食手机',

                            },
                            {
                                value: [95, 80, 95, 90, 93],
                                name: '某水果手机'
                            }
                        ]
                    },

                ]
            });
        },
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
        drawLine6(){
            // 基于准备好的dom，初始化echarts实例
            let myChart6 = this.$echarts.init(document.getElementById('myChart6'));
            myChart6.setOption({
                color: ['#61a5e8','#7ecf51','#eecb5f','#9570e5'],
                title:{
                    text:'房屋类型',
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
                        data: [10, 52, 200, 334]
                    }
                ]
            });
        },
    },
    mounted(){
      this.drawLine();
      this.drawLine2();
      this.drawLine3();
      this.drawLine4();
      this.drawLine5();
      this.drawLine6();
            this.$emit('childEvent', { name: 'zhangsan', age:  10 })
    },
    created:function () {
    }
}
</script>
<style scoped>
    .count>>>.charts {position: relative;left:50%;margin-left: -150px;}
    .count>>>.col {margin: 0 25px 25px 0;background: #fff;}
    .sum {height:100px;background: #fff;width: 90%;}
    .sumLeft {float:left;line-height: 115px;margin-left: 48px;}
    .sumRight {margin-left: 130px;padding-top: 20px;}
    .sumRight p:first-child {font-size: 16px;color: #666;}
    .sumRight p:last-child {font-size: 30px;color: #333;margin-top: 10px;}
</style>
