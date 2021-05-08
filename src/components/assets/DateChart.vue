<template>
    <div class="count kan">
        <el-row>
            <el-form ref="form"  style="padding-top: 26px;">
                <el-col :lg="24">
                    <el-col  :lg="5">
                        <div class="sum">
                            <div class="sumLeft"><el-button type="primary" icon="el-icon-s-finance" circle style="font-size: 30px;"></el-button></div>
                            <div class="sumRight">
                                <p>总资产（宗）</p>
                                <p>{{total}}</p>
                            </div>
                        </div>
                    </el-col>
                    <!--<div>-->
                                <!--<el-col  :lg="6">-->
                                    <!--<el-col :lg="11"><div class="textLeft wdminText">房屋性质：</div></el-col>-->
                                    <!--<el-col :lg="13">-->
                                        <!--<el-select  v-model="houseNatureval" placeholder="请选择">-->
                                            <!--<el-option-->
                                                    <!--v-for="item in houseNature"-->
                                                    <!--:key="item.value"-->
                                                    <!--:label="item.label"-->
                                                    <!--:value="item.label">-->
                                            <!--</el-option>-->
                                        <!--</el-select>-->
                                    <!--</el-col>-->
                                    <!--&lt;!&ndash;<el-form-item label="房屋性质：">&ndash;&gt;-->
                                    <!--&lt;!&ndash;<el-select  v-model="houseNatureval" placeholder="请选择">&ndash;&gt;-->
                                    <!--&lt;!&ndash;<el-option&ndash;&gt;-->
                                    <!--&lt;!&ndash;v-for="item in houseNature"&ndash;&gt;-->
                                    <!--&lt;!&ndash;:key="item.value"&ndash;&gt;-->
                                    <!--&lt;!&ndash;:label="item.label"&ndash;&gt;-->
                                    <!--&lt;!&ndash;:value="item.label">&ndash;&gt;-->
                                    <!--&lt;!&ndash;</el-option>&ndash;&gt;-->
                                    <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
                                    <!--&lt;!&ndash;</el-form-item>&ndash;&gt;-->
                                <!--</el-col>-->
                                <!--<el-col :lg="6">-->
                                    <!--<el-col :lg="11"><div class="textLeft wdminText">产权用途：</div></el-col>-->
                                    <!--<el-col :lg="13">-->
                                        <!--<el-select  v-model="assetUseval" placeholder="请选择" @change = 'aaa'>-->
                                            <!--<el-option-->
                                                    <!--v-for="item in assetUse"-->
                                                    <!--:key="item.value"-->
                                                    <!--:label="item.label"-->
                                                    <!--:value="item.label">-->
                                            <!--</el-option>-->
                                        <!--</el-select>-->
                                    <!--</el-col>-->
                                    <!--&lt;!&ndash;<el-form-item label="产权用途：">&ndash;&gt;-->
                                    <!--&lt;!&ndash;<el-select  v-model="assetUseval" placeholder="请选择" @change = 'aaa'>&ndash;&gt;-->
                                    <!--&lt;!&ndash;<el-option&ndash;&gt;-->
                                    <!--&lt;!&ndash;v-for="item in assetUse"&ndash;&gt;-->
                                    <!--&lt;!&ndash;:key="item.value"&ndash;&gt;-->
                                    <!--&lt;!&ndash;:label="item.label"&ndash;&gt;-->
                                    <!--&lt;!&ndash;:value="item.label">&ndash;&gt;-->
                                    <!--&lt;!&ndash;</el-option>&ndash;&gt;-->
                                    <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
                                    <!--&lt;!&ndash;</el-form-item>&ndash;&gt;-->
                                <!--</el-col>-->
                                <!--<el-col :lg="6">-->
                                    <!--<el-col :lg="11"><div class="textLeft wdminText">土地用途：</div></el-col>-->
                                    <!--<el-col :lg="13">-->
                                        <!--<el-select  v-model="landUseval" placeholder="请选择">-->
                                            <!--<el-option-->
                                                    <!--v-for="item in landUse"-->
                                                    <!--:key="item.value"-->
                                                    <!--:label="item.label"-->
                                                    <!--:value="item.label">-->
                                            <!--</el-option>-->
                                        <!--</el-select>-->
                                    <!--</el-col>-->
                                    <!--&lt;!&ndash;<el-form-item label="土地用途：">&ndash;&gt;-->
                                    <!--&lt;!&ndash;<el-select  v-model="landUseval" placeholder="请选择">&ndash;&gt;-->
                                    <!--&lt;!&ndash;<el-option&ndash;&gt;-->
                                    <!--&lt;!&ndash;v-for="item in landUse"&ndash;&gt;-->
                                    <!--&lt;!&ndash;:key="item.value"&ndash;&gt;-->
                                    <!--&lt;!&ndash;:label="item.label"&ndash;&gt;-->
                                    <!--&lt;!&ndash;:value="item.label">&ndash;&gt;-->
                                    <!--&lt;!&ndash;</el-option>&ndash;&gt;-->
                                    <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
                                    <!--&lt;!&ndash;</el-form-item>&ndash;&gt;-->
                                <!--</el-col>-->
                    <!--</div>-->
                        <!--<div style="padding-top: 26px;margin-top: 26px;">-->
                            <!--<el-col :lg="6">-->
                                <!--<el-col :lg="11"><div class="textLeft wdminText">土地性质：</div></el-col>-->
                                <!--<el-col :lg="13">-->
                                    <!--<el-select  v-model="landNatureval" placeholder="请选择">-->
                                        <!--<el-option-->
                                                <!--v-for="item in landNature"-->
                                                <!--:key="item.value"-->
                                                <!--:label="item.label"-->
                                                <!--:value="item.label">-->
                                        <!--</el-option>-->
                                    <!--</el-select>-->
                                <!--</el-col>-->
                                <!--&lt;!&ndash;<el-form-item label="土地性质：">&ndash;&gt;-->
                                <!--&lt;!&ndash;<el-select  v-model="landNatureval" placeholder="请选择">&ndash;&gt;-->
                                <!--&lt;!&ndash;<el-option&ndash;&gt;-->
                                <!--&lt;!&ndash;v-for="item in landNature"&ndash;&gt;-->
                                <!--&lt;!&ndash;:key="item.value"&ndash;&gt;-->
                                <!--&lt;!&ndash;:label="item.label"&ndash;&gt;-->
                                <!--&lt;!&ndash;:value="item.label">&ndash;&gt;-->
                                <!--&lt;!&ndash;</el-option>&ndash;&gt;-->
                                <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
                                <!--&lt;!&ndash;</el-form-item>&ndash;&gt;-->
                            <!--</el-col>-->
                            <!--<el-col :lg="6">-->
                                <!--<el-col :lg="11"><div class="textLeft wdminText">房屋现状：</div></el-col>-->
                                <!--<el-col :lg="13">-->
                                    <!--<el-select  v-model="houseNowval" placeholder="请选择">-->
                                        <!--<el-option-->
                                                <!--v-for="item in houseNows"-->
                                                <!--:key="item.value"-->
                                                <!--:label="item.label"-->
                                                <!--:value="item.label">-->
                                        <!--</el-option>-->
                                    <!--</el-select>-->
                                <!--</el-col>-->
                                <!--&lt;!&ndash;<el-form-item label="房屋现状：">&ndash;&gt;-->
                                <!--&lt;!&ndash;<el-select  v-model="houseNowval" placeholder="请选择">&ndash;&gt;-->
                                <!--&lt;!&ndash;<el-option&ndash;&gt;-->
                                <!--&lt;!&ndash;v-for="item in houseNows"&ndash;&gt;-->
                                <!--&lt;!&ndash;:key="item.value"&ndash;&gt;-->
                                <!--&lt;!&ndash;:label="item.label"&ndash;&gt;-->
                                <!--&lt;!&ndash;:value="item.label">&ndash;&gt;-->
                                <!--&lt;!&ndash;</el-option>&ndash;&gt;-->
                                <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
                                <!--&lt;!&ndash;</el-form-item>&ndash;&gt;-->
                            <!--</el-col>-->
                            <!--<el-col :lg="6">-->
                                <!--<el-col :lg="11"><div class="textLeft wdminText">标签：</div></el-col>-->
                                <!--<el-col :lg="13">-->
                                    <!--<el-select  v-model="value" placeholder="请选择">-->
                                        <!--<el-option-->
                                                <!--v-for="item in options"-->
                                                <!--:key="item.value"-->
                                                <!--:label="item.label"-->
                                                <!--:value="item.label">-->
                                        <!--</el-option>-->
                                    <!--</el-select>-->
                                <!--</el-col>-->
                                <!--&lt;!&ndash;<el-form-item label="标签：">&ndash;&gt;-->
                                <!--&lt;!&ndash;<el-select  v-model="value" placeholder="请选择">&ndash;&gt;-->
                                <!--&lt;!&ndash;<el-option&ndash;&gt;-->
                                <!--&lt;!&ndash;v-for="item in options"&ndash;&gt;-->
                                <!--&lt;!&ndash;:key="item.value"&ndash;&gt;-->
                                <!--&lt;!&ndash;:label="item.label"&ndash;&gt;-->
                                <!--&lt;!&ndash;:value="item.label">&ndash;&gt;-->
                                <!--&lt;!&ndash;</el-option>&ndash;&gt;-->
                                <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
                                <!--&lt;!&ndash;</el-form-item>&ndash;&gt;-->
                            <!--</el-col>-->
                        <!--</div>-->
                </el-col>
            </el-form>
        </el-row>
        <div class="echarsAdd" style="padding: 0 15px;">
            <el-row>
                <el-col class="col" :lg="12" >
                    <div style="margin: 20px;background: #e9e9eb;">
                        <div class="charts" id="myChart" :style="{width: width, height: height}"></div>
                    </div>
                </el-col>
                <!--<el-col class="col" :span="7">-->
                <!--<div class="charts" id="myChart2" :style="{width: width, height: height}"></div>-->
                <!--</el-col>-->
                <el-col class="col" :lg="12">
                    <div style="margin: 20px;background: #e9e9eb;">
                        <div class="charts" id="myChart3" :style="{width: width, height: height}"></div>
                    </div>
                </el-col>
                <!--<el-col class="col" :lg="8">-->
                    <!--<div class="charts" id="myChart7" :style="{width: width, height: height}"></div>-->
                <!--</el-col>-->
            </el-row>
            <el-row>
                <el-col class="col" :lg="12">
                    <div style="margin: 20px;background: #e9e9eb;">
                        <div class="charts" id="myChart7" :style="{width: width, height: height}"></div>
                    </div>
                </el-col>
                <el-col class="col" :lg="12">
                    <div style="margin: 20px;background: #e9e9eb;">
                        <div class="charts" id="myChart4" :style="{width: width, height: height}"></div>
                    </div>
                </el-col>
                <!--<el-col class="col" :lg="8">-->
                <!--<div class="charts" id="myChart7" :style="{width: width, height: height}"></div>-->
                <!--</el-col>-->
            </el-row>
            <el-row>
                <el-col class="col" :lg="12">
                    <div style="margin: 20px;background: #e9e9eb;">
                        <div class="charts" id="myChart5" :style="{width: width, height: height}"></div>
                    </div>
                </el-col>
                <el-col class="col" :lg="12">
                    <div style="margin: 20px;background: #e9e9eb;">
                        <div class="charts" id="myChart6" :style="{width: width, height: height}"></div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
        houseNature:[
            {'label':'全部'},{'label':'办公'},{'label':'参主'},{'label':'仓储'},{'label':'工业厂房'},{'label':'公房'},
            {'label':'集体'},{'label':'其他'},{'label':'全民'},{'label':'商业'},{'label':'私房'},
            {'label':'未登记认定'},{'label':'住宅'},{'label':'住宅/仓储'},{'label':'住宅/工业厂房'}
        ],
        houseNatureval:'',
        assetUse:[
            {'label':'全部'},{'label':'公共设施'},{'label':'商业'},{'label':'住宅'}
        ],
        assetUseval:'',
        landNature:[
            {'label':'全部'}, {'label':'仓储出让'},{'label':'仓储划拨'},{'label':'工业出让'},{'label':'工业划拨'},{'label':'商业出让'},
            {'label':'商业划拨'},{'label':'住宅出让'},{'label':'住宅划拨'},{'label':'综合划拨'},
        ],
        landNatureval:'',
        landUse:[
            {'label':'全部'},{'label':'仓储用途'},{'label':'城镇住宅用地'},{'label':'城镇住宅用地/住宅'},{'label':'公共设施用地'},{'label':'批发零售用地/商业'}
        ],
        landUseval:'',
        houseNows:[
            {'label':'全部'}, {'label':'出借'},{'label':'出租'},{'label':'借用'},{'label':'空置'},{'label':'其他'},{'label':'修缮'},{'label':'已拆除'},{'label':'自用'},
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
        // width:(document.body.clientWidth/4)+'px',
        width:'100%',
        height:'280px',
        listss:'',
        total:'',
        arrName:'',
        echarts3_option:{
          title:{
              text:'房屋现状',
                  top:20,
                  textStyle: {
                  fontSize: 14,
                      color:'#999',
              }
          },
            legend: {
                icon: "circle",
                orient: 'vertical',
                right: '0',
                data:[],
                bottom: '0',
                textStyle: {
                    color: "#333"
                },
            },

            // legend: {
            //     orient: 'vertical',
            //     left: '50%',
            //     data: ['占用', '闲置'],
            //     bottom: 0,
            //     textStyle: {
            //         color: "#333"
            //     },
            //     itemGap: 20
            // },
          tooltip: {
              trigger: 'item',
                  formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          series: [
              {
                  name: '访问来源',
                  type: 'pie',
                  left:'0',
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
                      {text: '餐饮'},
                      {text: '住宅'},
                      {text: '商铺'},
                      {text: '服务'},
                      {text: '住宿'}
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
                left:0,
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
                type: 'scroll',
                icon: "circle",
                orient: 'vertical',
                right: '0',
                top: 'bottom',
                data: []
            },
            series: [
                {
                    name: '土地用途参数',
                    type: 'pie',
                    left:'-100',
                    radius: '50%',
                    center: ['50%', '50%'],
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
        echarts_option:{
            title:{
                text:'土地性质',
                top:20,
                textStyle: {
                    fontSize: 14,
                    color:'#999',
                }
            },
            legend: {
                type: 'scroll',
                icon: "circle",
                orient: 'vertical',
                right: '0',
                data:[],
                bottom: '0',
                textStyle: {
                    color: "#333"
                },
            },

            // legend: {
            //     orient: 'vertical',
            //     left: '50%',
            //     data: ['占用', '闲置'],
            //     bottom: 0,
            //     textStyle: {
            //         color: "#333"
            //     },
            //     itemGap: 20
            // },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    left:'-30',
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
        echarts7_option:{
            title:{
                text:'办证情况',
                top:20,
                textStyle: {
                    fontSize: 14,
                    color:'#999',
                }
            },
            color:['#999','#33a4fb'],
            legend: {
                orient: 'vertical',
                icon: "circle",
                right: '0',
                bottom:'0',
                data: ['已办证', '未办证'],
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
        },
        echarts6_option:{
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
            legend: {
                type: 'scroll',
                icon: "circle",
                orient: 'vertical',
                right: '0',
                top: '15%',
                data: []
            },
            grid: {
                left: '10%',
                right:'30%'
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
                {name: '参主', data: [20],type:'bar'},
            ]
        },
    }
  },
    watch: {
        //观察option的变化
        echarts_option: {
            handler(newVal, oldVal) {
                console.log(this.myChart)
                if (this.myChart) {
                    if (newVal) {
                        this.myChart.setOption(newVal);
                    } else {
                        this.myChart.setOption(oldVal);
                    }
                } else {
                    this.init();
                }
            },
            deep: true //对象内部属性的监听，关键。
        },
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
        echarts7_option: {
            handler(newVal, oldVal) {
                if (this.myChart7) {
                    if (newVal) {
                        this.myChart7.setOption(newVal);
                    } else {
                        this.myChart7.setOption(oldVal);
                    }
                } else {
                    this.init7();
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
        echarts6_option: {
            handler(newVal, oldVal) {
                if (this.myChart6) {
                    if (newVal) {
                        this.myChart6.setOption(newVal);
                    } else {
                        this.myChart6.setOption(oldVal);
                    }
                } else {
                    this.init6();
                }
            },
            deep: true //对象内部属性的监听，关键。
        },
    },
    methods:{
        aaa(val){console.log(val)},
        init(){
            var that =this;
            this.$axios({
                url: this.getAjax + '/admin/meansAdmin/count',
                method: "post",
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Token':sessionStorage.getItem('token')
                },
                data:{codes: []}
            }).then(res => {
                var datas = res.data.data.landNature;
                var arr = []
                for(var i=0;i<datas.length;i++){
                    var obj = {};
                    if(Object.keys(datas[i]).toString() !== ''){
                        obj['name'] = Object.keys(datas[i]).toString()
                        obj['value'] = Object.values(datas[i]).toString()
                        arr.push(obj)
                    }

                }
                this.echarts_option.series[0].data=arr;
                this.echarts_option.legend.data=arr.name;
//                 var arr = []
//                 for(var i=0;i<datas.length;i++){
//                     var obj = {};
//                     obj['name'] = Object.keys(datas[i]).toString()
//                     obj['value'] = Object.values(datas[i]).toString()
//                     arr.push(obj)
//                 }
//                 var chartData = arr;
//                 let arrName = [];
//                 let arrValue = [];
//                 let sum = 0;
//                 let pieSeries = [],
//                     lineYAxis = [];
//
// // 数据处理
//                 chartData.forEach((v, i) => {
//                     arrName.push(v.name);
//                     arrValue.push(v.value);
//                     sum = sum + parseInt(v.value);
//                 })
//                 this.arrName = arrName
// // 图表option整理
//                 chartData.forEach((v, i) => {
//                     console.log(sum)
//                     pieSeries.push({
//                         name: v.name,
//                         type: 'pie',
//                         clockWise: true,
//                         hoverAnimation: false,
//                         radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
//                         center: ["30%", "50%"],
//                         label: {
//                             show: false
//                         },
//                         data: [
//                             {
//                             value: parseInt(v.value),
//                             name: v.name
//                         }, {
//                             value: sum-parseInt(v.value),
//                             name: '',
//                             itemStyle: {
//                                 color: "rgba(0,0,0,0)"
//                             }
//                         }
//                         ]
//                     });
//
//                 })
//                 console.log(pieSeries)
//                 this.echarts_option.legend.data=arrName;
//                 this.echarts_option.yAxis[0].data=lineYAxis;
//                 this.echarts_option.series=pieSeries;
            })
        },
        init3(){
            this.$axios({
                url: this.getAjax + '/admin/meansAdmin/count',
                method: "post",
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Token':sessionStorage.getItem('token')
                },
                data:{codes: []}
            }).then(res => {
                var datas = res.data.data.houseNow
                var arr = []
                for(var i=0;i<datas.length;i++){
                    var obj = {};
                    if(Object.keys(datas[i]).toString() == ''){
                        obj['name'] = '空白'
                        obj['value'] = Object.values(datas[i]).toString()
                        arr.push('空白')
                    }else{
                        obj['name'] = Object.keys(datas[i]).toString()
                        obj['value'] = Object.values(datas[i]).toString()
                        arr.push(obj)
                    }


                }
                this.echarts3_option.series[0].data=arr;
                this.echarts3_option.legend.data=arr.name;
            })
        },
        init4(){
            this.$axios({
                url: this.getAjax + '/admin/meansAdmin/count',
                method: "post",
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Token':sessionStorage.getItem('token')
                },
                data:{codes: []}
            }).then(res => {
                var datas = res.data.data.landUse
                var arr = []
                var text = []
                for(var i=0;i<datas.length;i++){
                    var obj = {};
                    var objs = {};
                    if(Object.keys(datas[i]).toString() == ''){
                        // obj['name'] = '空白'
                        objs['text'] = '空白'
                        objs['max'] = '3000'
                        // obj['value'] = Object.values(datas[i]).toString()
                    }else{
                        // obj['name'] = Object.keys(datas[i]).toString()
                        objs['text'] = Object.keys(datas[i]).toString()
                        objs['max'] = '3000'
                        // obj['value'] = Object.values(datas[i]).toString()
                    }

                    arr.push(Object.values(datas[i]).toString())
                    text.push(objs)
                }
                var app = [
                    {
                        'value':arr,
                        'name':'产权用途',
                    }
                ]
                this.echarts4_option.radar[0].indicator=text;
                this.echarts4_option.series[0].data=app;
            })
        },
        init5(){
            this.$axios({
                url: this.getAjax + '/admin/meansAdmin/count',
                method: "post",
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Token':sessionStorage.getItem('token')
                },
                data:{codes: []}
            }).then(res => {
                var datas = res.data.data.landUse
                var arr = []
                var address=[]
                for(var i=0;i<datas.length;i++){
                    var obj = {};
                    if(Object.keys(datas[i]).toString() == ''){
                        // obj['name'] = '空白'
                        // obj['value'] = Object.values(datas[i]).toString()
                        // address.push('空白')
                    }else{
                        obj['value'] =  Object.values(datas[i]).toString()
                        obj['name'] = Object.keys(datas[i]).toString()
                        address.push(Object.keys(datas[i]).toString())
                    }
                    arr.push(obj)
                }
                console.log(arr)
                console.log(address)
                this.echarts5_option.legend.data=address;
                this.echarts5_option.series[0].data=arr;
            })
        },
        chart(){
            this.findExportTitle = true
            this.$axios({
                url: this.getAjax + '/admin/meansAdmin/count',
                method: "post",
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Token':sessionStorage.getItem('token')
                },
                data:{codes: []}
            }).then(res => {
                this.list = res.data.data
                console.log(this.list)
            })
        },
        init7(){
            this.$axios({
                url: this.getAjax + '/admin/meansAdmin/count',
                method: "post",
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Token':sessionStorage.getItem('token')
                },
                data:{codes: []}
            }).then(res => {
                var datas = res.data.data.realEstate
                let num = 0;
                for(var i=0;i<datas.length;i++){
                    var obj = {};
                    if(Object.keys(datas[i]) == ''){
                        obj['name'] = '未办证'
                        obj['value'] = Object.values(datas[i]).toString()
                    }else{
                         num = num + parseFloat(Object.values(datas[i]).toString())
                    }
                }
                var arr = [
                    {'name':'未办证','value':this.total - num},
                    {'name':'已办证','value':num}
                ]
                this.echarts7_option.series[0].data=arr;
            })
        },
        init6(){
            this.$axios({
                url: this.getAjax + '/admin/meansAdmin/count',
                method: "post",
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Token':sessionStorage.getItem('token')
                },
                data:{codes: []}
            }).then(res => {
                var datas = res.data.data.houseNature
                var arr = []
                var arrs = []
                for(var i=0;i<datas.length;i++){
                    var obj = {};
                    var objs = {};
                    if(Object.keys(datas[i]) == ''){
                        obj['name'] = '空白'
                        obj['data'] = [Object.values(datas[i]).toString()]
                        obj['type'] = 'bar'
                        arrs.push('空白')
                    }else{
                        obj['name'] = Object.keys(datas[i]).toString()
                        obj['data'] = [Object.values(datas[i]).toString()]
                        obj['type'] = 'bar'
                        arrs.push(Object.keys(datas[i]).toString())
                    }
                    arr.push(obj)
                }
                console.log(arrs)
                // var arr = [
                //     {'name':'未办证','value':this.total - num},
                //     {'name':'已办证','value':num}
                // ]
                this.echarts6_option.legend.data=arrs;
                this.echarts6_option.series=arr;
            })
        },
      // 土地性质
        drawLine(){
            this.myChart = this.$echarts.init(document.getElementById('myChart'));
            this.myChart.setOption(this.echarts_option,true)
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
            this.myChart7 = this.$echarts.init(document.getElementById('myChart7'));
            this.myChart7.setOption(this.echarts7_option,true)
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
            this.myChart6 = this.$echarts.init(document.getElementById('myChart6'));
            this.myChart6.setOption(this.echarts6_option,true)
        },
    },
    mounted(){
      this.total = sessionStorage.getItem('total')
        // this.chart();
      // this.drawLine();
      this.init();
      this.init3();
      this.init7();
      this.init4();
      this.init5();
      this.init6();
      this.drawLine();
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
    /*.count>>>.charts {position: relative;left:50%;margin-left: -150px;}*/
    .count>>>.col {margin:0 0 20px 0;}
    .count .newSort>>>.el-input {width: 200px;}
    .count .newSort>>>.el-form-item__label {width: 40%;}
    .sum {height:100px;background: #fff;width: 90%;}
    .sumLeft {float:left;line-height: 115px;margin-left: 15px;}
    .sumRight {margin-left: 80px;padding-top: 20px;text-align: center;}
    .sumRight p:first-child {font-size: 16px;color: #666;}
    .sumRight p:last-child {font-size: 30px;color: #333;margin-top: 10px;}
</style>
