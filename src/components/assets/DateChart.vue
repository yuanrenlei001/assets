<template>
    <div class="count">
        <el-row>
            <el-form ref="form" >
                <el-col class="sort" :span="5">
                    <div class="sum">
                        <div class="sumLeft"><el-button type="primary" icon="el-icon-s-finance" circle style="font-size: 30px;"></el-button></div>
                        <div class="sumRight">
                            <p>总资产（宗）</p>
                            <p>{{total}}</p>
                        </div>
                    </div>
                </el-col>
                <el-col class="sort newSort" :span="6">
                    <el-form-item label="房屋性质：">
                        <el-select  v-model="houseNatureval" placeholder="请选择">
                            <el-option
                                    v-for="item in houseNature"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.label">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col class="sort newSort" :span="6">
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
                <el-col class="sort newSort" :span="6">
                    <el-form-item label="土地用途：">
                        <el-select  v-model="landNatureval" placeholder="请选择">
                            <el-option
                                    v-for="item in landNature"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="6" class="sort newSort">
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
                <el-col class="sort newSort" :span="6">
                    <el-form-item label="房屋现状：">
                        <el-select  v-model="houseNowval" placeholder="请选择">
                            <el-option
                                    v-for="item in houseNows"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.label">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col class="sort newSort" :span="6">
                    <el-form-item label="标签：">
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
            <!--<el-col class="col" :span="7">-->
                <!--<div class="charts" id="myChart2" :style="{width: width, height: height}"></div>-->
            <!--</el-col>-->
            <el-col class="col" :span="7">
                <div class="charts" id="myChart3" :style="{width: width, height: height}"></div>
            </el-col>
            <el-col class="col" :span="8">
                <div class="charts" id="myChart7" :style="{width: width, height: height}"></div>
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
        houseNature:[
            {'label':'办公'},{'label':'参主'},{'label':'仓储'},{'label':'工业厂房'},{'label':'公房'},
            {'label':'集体'},{'label':'其他'},{'label':'全民'},{'label':'商业'},{'label':'私房'},
            {'label':'未登记认定'},{'label':'住宅'},{'label':'住宅/仓储'},{'label':'住宅/工业厂房'}
        ],
        houseNatureval:'',
        landNature:[
            {'label':'仓储出让'},{'label':'仓储划拨'},{'label':'工业出让'},{'label':'工业划拨'},{'label':'商业出让'},
            {'label':'商业划拨'},{'label':'住宅出让'},{'label':'住宅划拨'},{'label':'综合划拨'},
        ],
        landNatureval:'',
        houseNows:[
            {'label':'1.73'},{'label':'2.12'},{'label':'2.16'},{'label':'2.28'},{'label':'2.63'},
            {'label':'2.64'},{'label':'2.73'},{'label':'2.75'},{'label':'2.85'},{'label':'2.86'},
            {'label':'2.97'},{'label':'2.98'},{'label':'3'},{'label':'3.01'},{'label':'3.17'},
            {'label':'3.41'},{'label':'3.48'},{'label':'3.69'},{'label':'3.7'},{'label':'3.72'},
            {'label':'3.73'},{'label':'3.8'},{'label':'3.9'},{'label':'4.14'},{'label':'4.2'},
            {'label':'4.26'},{'label':'4.49'},{'label':'4.62'},{'label':'4.66'},{'label':'4.72'},
            {'label':'4.73'},{'label':'4.77'},{'label':'5.08'},{'label':'5.13'},{'label':'5.15'},
            {'label':'5.24'},{'label':'5.29'},{'label':'5.31'},{'label':'5.38'},{'label':'5.42'},
            {'label':'5.51'},{'label':'5.54'},{'label':'5.6'},{'label':'5.69'},{'label':'5.71'},
            {'label':'5.77'},{'label':'5.81'},{'label':'5.82'},{'label':'5.86'},{'label':'5.94'},
            {'label':'5.95'},{'label':'6'},{'label':'6.01'},{'label':'6.05'},{'label':'6.06'},
            {'label':'6.08'},{'label':'6.12'},{'label':'6.14'},{'label':'6.16'},{'label':'6.17'},
            {'label':'6.24'},{'label':'6.25'},{'label':'6.36'},{'label':'6.47'},{'label':'6.5'},
            {'label':'6.55'},{'label':'6.58'},{'label':'6.63'},{'label':'6.64'},{'label':'6.72'},
            {'label':'6.77'},{'label':'6.78'},{'label':'6.79'},{'label':'6.89'},{'label':'6.91'},
            {'label':'7.02'},{'label':'7.05'},{'label':'7.13'},{'label':'7.22'},{'label':'7.32'},
            {'label':'7.46'},{'label':'7.51'},{'label':'7.52'},{'label':'7.53'},{'label':'7.54'},
            {'label':'7.68'},{'label':'7.8'},{'label':'7.9'},{'label':'7.99'},{'label':'8.09'},
            {'label':'8.16'},{'label':'8.41'},{'label':'8.51'},{'label':'8.52'},{'label':'8.57'},
            {'label':'8.6'},{'label':'8.8'},{'label':'9.23'},{'label':'9.37'},{'label':'9.45'},
            {'label':'9.6'},{'label':'9.73'},{'label':'9.82'},{'label':'9.91'},{'label':'10.03'},
            {'label':'10.36'},{'label':'10.43'},{'label':'10.56'},{'label':'10.64'},{'label':'10.67'},
            {'label':'10.79'},{'label':'10.84'},{'label':'10.92'},{'label':'10.94'},{'label':'11.08'},
            {'label':'11.17'},{'label':'11.2'},{'label':'11.25'},{'label':'11.34'},{'label':'11.42'},
            {'label':'11.48'},{'label':'11.72'},{'label':'11.76'},{'label':'11.86'},{'label':'11.96'},
            {'label':'12.54'},{'label':'12.95'},{'label':'12.97'},{'label':'12.99'},{'label':'13.12'},
            {'label':'13.2'},{'label':'13.37'},{'label':'13.69'},{'label':'13.87'},{'label':'13.89'},
            {'label':'14.12'},{'label':'14.26'},{'label':'14.38'},{'label':'14.59'},{'label':'14.82'},
            {'label':'14.91'},{'label':'14.92'},{'label':'15.07'},{'label':'15.17'},{'label':'15.48'},
            {'label':'15.51'},{'label':'15.86'},{'label':'16.11'},{'label':'16.33'},{'label':'16.59'},
            {'label':'16.63'},{'label':'16.93'},{'label':'17.42'},{'label':'19.16'},{'label':'19.49'},
            {'label':'21.12'},{'label':'21.32'},{'label':'21.67'},{'label':'22.26'},{'label':'22.34'},
            {'label':'22.4'},{'label':'22.68'},{'label':'23.02'},{'label':'23.47'},{'label':'23.6'},
            {'label':'23.66'},{'label':'23.8'},{'label':'23.99'},{'label':'24.56'},{'label':'25.52'},
            {'label':'25.72'},{'label':'25.8'},{'label':'25.9'},{'label':'26.53'},{'label':'26.76'},
            {'label':'30.84'},{'label':'31.59'},{'label':'31.96'},{'label':'56.02'},{'label':'0'},
            {'label':'爱咖啡、猫的天空之城'},{'label':'百间楼河东47号名宿项目'},{'label':'篱梳坊、葫芦、手工瓷画、麻手工'},{'label':'厕所'},{'label':'拆除重建（厕所）'},
            {'label':'拆迁过渡用房'},{'label':'出借'},{'label':'出租'},{'label':'丹丹手工茶饼'},{'label':'德茂弄酒店建造中'},
            {'label':'都市聚落酒店及水晶晶文创园'},{'label':'二楼雅婷精舍、一楼云锦丝绸仓库'},{'label':'房屋已重建'},{'label':'西风服店'},{'label':'干洗店、千浔一人煲、足浴、香山桥古镇饭店'},
            {'label':'工艺制品、休闲茶舍'},{'label':'红鼎酒店'},{'label':'借用工程'},{'label':'金宅修缮'},{'label':'囧囧奶茶、古朴奶茶'},
            {'label':'空置'},{'label':'空置（小莲庄酒店）'},{'label':'空置（原杭州建筑工程有限公司）'},{'label':'库房、店铺 部分和东大街81号对调'},{'label':'老干部活动中心'},
            {'label':'旅游协会'},{'label':'绿松石书吧'},{'label':'猫小院'},{'label':'煤失弄精品酒店建造中'},{'label':'木锤酥'},
            {'label':'南浔难寻'},{'label':'三户占用'},{'label':'桑果酒'},{'label':'社区用房'},{'label':'诗域浔味'},
            {'label':'糖艺坊'},{'label':'特产商行'},{'label':'天堂伞、民族服、诸老大粽子'},{'label':'天下湖品'},{'label':'天元尚品'},
            {'label':'未找到'},{'label':'文房四宝'},{'label':'吴越丝绸'},{'label':'现环卫所办公大楼'},{'label':'现丝行隶停车场'},
            {'label':'现为贻德广场（已拆除）'},{'label':'现象门街主入口（已拆除）'},{'label':'祥和糕点店'},{'label':'项目拆除'},{'label':'消防警务室'},
            {'label':'小小饭店厨房'},{'label':'浔蹄'},{'label':'一户占用'},{'label':'怡德广场'},{'label':'宜兴紫砂'},
            {'label':'已拆除'},{'label':'逸香轩'},{'label':'营销公司使用'},{'label':'颖园饭店'},{'label':'永为笔庄'},
            {'label':'员工宿舍'},{'label':'原小莲庄宾馆'},{'label':'云栖灡亭会议室'},{'label':'运河酒店及运河名宿建造中'},{'label':'闸口仓库'},
            {'label':'占用'},{'label':'真味斋'},{'label':'众里寻他'},{'label':'自用'},{'label':'空白'},
        ],
        houseNowval:'',
        input2:'',
        options: [],
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
        listss:'',
        total:'',
        echarts3_option:{
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
          tooltip: {
              trigger: 'item',
                  formatter: '{a} <br/>{b} : {c} ({d}%)'
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
                  ]
              }
          ]
      },
        myChart3:'',
        myChart4:'',
        echarts4_option:{
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
      },
        echarts5_option:{
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
                    name: '土地用途参数',
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
        },
        myChart5:'',
    }
  },
    watch: {
        //观察option的变化
        echarts3_option: {
            handler(newVal, oldVal) {
                console.log(this.myChart3)
                if (this.myChart3) {
                    if (newVal) {
                        this.myChart3.setOption(newVal);
                    } else {
                        this.myChart3.setOption(oldVal);
                    }
                } else {
                    this.init3();
                }
            },
            deep: true //对象内部属性的监听，关键。
        },
        echarts4_option: {
            handler(newVal, oldVal) {
                if (this.myChart4) {
                    if (newVal) {
                        this.myChart4.setOption(newVal);
                    } else {
                        this.myChart4.setOption(oldVal);
                    }
                } else {
                    this.init4();
                }
            },
            deep: true //对象内部属性的监听，关键。
        },
        echarts5_option: {
            handler(newVal, oldVal) {
                if (this.myChart5) {
                    if (newVal) {
                        this.myChart5.setOption(newVal);
                    } else {
                        this.myChart5.setOption(oldVal);
                    }
                } else {
                    this.init5();
                }
            },
            deep: true //对象内部属性的监听，关键。
        },
    },
    methods:{
        init3(){
            this.$axios({
                url: this.getAjax + '/admin/meansAdmin/count',
                method: "get",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Token':sessionStorage.getItem('token')
                },
                data:{}
            }).then(res => {
                var datas = res.data.data.houseNow
                var arr = []
                for(var i=0;i<datas.length;i++){
                    var obj = {};
                    obj['name'] = Object.keys(datas[i]).toString()
                    obj['value'] = Object.values(datas[i]).toString()
                    arr.push(obj)
                }
                this.echarts3_option.series[0].data=arr;
            })
        },
        init4(){
            this.$axios({
                url: this.getAjax + '/admin/meansAdmin/count',
                method: "get",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Token':sessionStorage.getItem('token')
                },
                data:{}
            }).then(res => {
                var datas = res.data.data.landUse
                var arr = []
                for(var i=0;i<datas.length;i++){
                    var obj = {};
                    obj['name'] = Object.keys(datas[i]).toString()
                    obj['value'] = Object.values(datas[i]).toString()
                    arr.push(obj)
                }
                console.log(arr)
                this.echarts4_option.series[0].data=arr;
            })
        },
        init5(){
            this.$axios({
                url: this.getAjax + '/admin/meansAdmin/count',
                method: "get",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Token':sessionStorage.getItem('token')
                },
                data:{}
            }).then(res => {
                var datas = res.data.data.landNature
                var arr = []
                var address=[]
                for(var i=0;i<datas.length;i++){
                    var obj = {};
                    obj['name'] = Object.keys(datas[i]).toString()
                    obj['name'] = Object.keys(datas[i]).toString()
                    obj['value'] = Object.values(datas[i]).toString()
                    arr.push(obj)
                    address.push(Object.keys(datas[i]).toString())
                }
                console.log(arr)
                this.echarts5_option.series[0].data=arr;
                this.echarts5_option.legend.data=address;
            })
        },
        chart(){
            this.findExportTitle = true
            this.$axios({
                url: this.getAjax + '/admin/meansAdmin/count',
                method: "get",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Token':sessionStorage.getItem('token')
                },
                data:{}
            }).then(res => {
                this.list = res.data.data
                console.log(this.list)
            })
        },
      // 土地性质
        drawLine(){
            var that = this;
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'));
            let color = ['#FF8700', '#ffc300', '#00e473', '#009DFF'];
            this.$axios({
                url: this.getAjax + '/admin/meansAdmin/count',
                method: "get",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Token':sessionStorage.getItem('token')
                },
                data:{}
            }).then(res => {
                var datas = res.data.data.houseNature
                var arr = []
                for(var i=0;i<datas.length;i++){
                    var obj = {};
                    obj['name'] = Object.keys(datas[i]).toString()
                    obj['value'] = Object.values(datas[i]).toString()
                    arr.push(obj)
                }
            })
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
            this.myChart3 = this.$echarts.init(document.getElementById('myChart3'));
           this.myChart3.setOption(this.echarts3_option,true)
        },
        // 房屋现状
        drawLine7(){
            // 基于准备好的dom，初始化echarts实例
            let myChart7 = this.$echarts.init(document.getElementById('myChart7'));
            myChart7.setOption({
                title:{
                    text:'办证情况',
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
                    data: ['已办证', '未办证'],
                    bottom:0,
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                series: [
                    {
                        name: '',
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
                            {value: 100, name: '已办证'},
                            {value: 335, name: '未办证'},
                        ]
                    }
                ]
            });
        },
        // 产权用途
        drawLine4(){
            // 基于准备好的dom，初始化echarts实例
            this.myChart4 = this.$echarts.init(document.getElementById('myChart4'));
            this.myChart4.setOption(this.echarts4_option,true)
        },
        // 土地用途
        drawLine5(){
            // 基于准备好的dom，初始化echarts实例
            // let myChart5 = this.$echarts.init(document.getElementById('myChart5'));
            this.myChart5 = this.$echarts.init(document.getElementById('myChart5'));
            this.myChart5.setOption(this.echarts5_option,true)
        },
        // 产权人
        drawLine6(){
            // 基于准备好的dom，初始化echarts实例
            let myChart6 = this.$echarts.init(document.getElementById('myChart6'));
            myChart6.setOption({
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
                // legend: {
                //     left: 'center',
                //     top: 'bottom',
                //     data: ['公房', '私房', '未登记建筑', '参主房']
                // },
                color: ['#61a5e8','#7ecf51','#eecb5f','#9570e5'],
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
                    {name: '公房', data: [20],type:'bar'},
                    {name: '私房', data: [30],type:'bar'},
                    {name: '未登记建筑', data: [40],type:'bar'},
                    {name: '参主房', data: [50],type:'bar'}
                ]
            });
        },
    },
    mounted(){
      this.total = sessionStorage.getItem('total')
        // this.chart();
      this.drawLine();
      this.init3();
      this.init4();
      this.init5();
      // this.drawLine2();
      this.drawLine3();
      this.drawLine4();
      this.drawLine5();
      this.drawLine6();
      this.drawLine7();
            this.$emit('childEvent', { name: 'zhangsan', age:  10 })
    },
    created:function () {
    }
}
</script>
<style scoped>
    .count>>>.charts {position: relative;left:50%;margin-left: -150px;}
    .count>>>.col {margin: 0 25px 25px 0;background: #fff;}
    .count .newSort>>>.el-input {width: 200px;}
    .count .newSort>>>.el-form-item__label {width: 40%;}
    .sum {height:100px;background: #fff;width: 90%;}
    .sumLeft {float:left;line-height: 115px;margin-left: 48px;}
    .sumRight {margin-left: 130px;padding-top: 20px;}
    .sumRight p:first-child {font-size: 16px;color: #666;}
    .sumRight p:last-child {font-size: 30px;color: #333;margin-top: 10px;}
</style>
