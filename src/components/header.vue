<template>
    <div>
        <div class="header-nav">
            <el-row>
                <el-col :span="4" class='logo-container'>
                    <!-- <img src="./../assets/logo.png" alt="" class="logo"> -->
                    <!-- 折叠按钮 -->
                    <div class="title">国有资产管理系统</div>
                </el-col>
                <el-col :span="13" class="tabSort">
                    <el-menu :default-active="active" class="el-menu-demo" mode="horizontal" @select="handleSelect"

                    >
                        <el-menu-item index="maps">
                            <img src="@/assets/icon_map2.png" alt="" v-if="name == 'maps'">
                            <img src="@/assets/icon_map.png" alt=""  v-else>
                            <p>一张图</p></el-menu-item>
                        <el-menu-item index="assets">
                            <img src="@/assets/icon_assets2.png" alt="" v-if="name == 'assets'">
                            <img src="@/assets/icon_assets.png" alt="" v-else>
                            <p>资产管理</p></el-menu-item>
                        <el-menu-item index="property">
                            <img src="@/assets/icon_wuye2.png" alt="" v-if="name == 'property'">
                            <img src="@/assets/icon_wuye.png" alt="" v-else>
                            <p>物业管理</p></el-menu-item>
                        <el-menu-item index="information">
                            <img src="@/assets/icon_infor2.png" alt="" v-if="name == 'information'">
                            <img src="@/assets/icon_infor.png" alt="" v-else>
                            <p>信息管理</p></el-menu-item>
                    </el-menu>
                </el-col>
                <el-col :span="4" class="user">
                    <div class="btn-fullscreen icon-font">

                    </div>
                    <div class="userinfo">
                        <div class="btn-fullscreen icon-font" @click="newss">
                            <el-tooltip class="item" effect="dark" content="消息" placement="bottom">
                                <i class="el-icon-bell"></i>
                            </el-tooltip>
                        </div>
                        <!-- 全屏显示 -->
                        <img class="avatar" :src="headerData.avatar">
                        <div class="welcome">
                            <p class="name comename">欢迎</p>
                            <p class="name avatarname">{{headerData.name}}</p>
                        </div>
                        <span class='username'>
						<el-dropdown trigger="click" @command='handleCommand'>
							<span class="el-dropdown-link">
								<i class="el-icon-caret-bottom el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item v-if="headerData.authStr == ''" command='setDialogInfo'>权限管理</el-dropdown-item>
								<el-dropdown-item command='logout'>退出</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</span>
                    </div>
                </el-col>
            </el-row>
        </div>
        <el-col :span="2" v-if="tabs" class="sort" style="position: fixed;height:100%;z-index: 9999;border-top: 1px solid #eee;">
            <el-menu
                    :default-active="active"
                    @select="handleSelect2"
                    class="el-menu-vertical-demo"
                    background-color="#5C77D8"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item index="approval">
                    <i class="el-icon-menu"></i>
                    <span slot="title">审批流程管理</span>
                </el-menu-item>
                <el-menu-item index="purview">
                    <i class="el-icon-menu"></i>
                    <span slot="title">用户管理</span>
                </el-menu-item>
                <el-menu-item index="user">
                    <i class="el-icon-menu"></i>
                    <span slot="title">角色管理</span>
                </el-menu-item>
                <el-menu-item index="authority">
                    <i class="el-icon-document"></i>
                    <span slot="title">权限管理</span>
                </el-menu-item>
                <el-menu-item index="log">
                    <i class="el-icon-setting"></i>
                    <span slot="title">日志管理</span>
                </el-menu-item>
            </el-menu>
        </el-col>
        <div class="news" v-if="news">
            <div class="main" style="
    padding: 20px 43px;">
                <el-row class="tables" >
                    <el-table
                            ref="multipleTable"
                            :data="tableData"
                            tooltip-effect="dark"
                            :key="toggleIndex"
                            style="width: 100%"
                    >
                        <el-table-column  type="index" label="序号" width="100"></el-table-column>
                        <el-table-column  label="消息类型">
                            <template slot-scope="tableData">
                                <div v-if="tableData.row.msgType == 'zcsp'">资产审批</div>
                                <div v-if="tableData.row.msgType == 'ht'">合同提示</div>
                                <div v-if="tableData.row.msgType == 'xjsp'">巡检审批</div>
                                <div v-if="tableData.row.msgType == 'xjfk'">巡检反馈</div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="data1" label="时间">
                            <template slot-scope="tableData">
                                {{tableData.row.createTime | dateFormat}}
                            </template>
                        </el-table-column>
                        <el-table-column
                                fixed="right"
                                label="操作"
                        >
                            <template slot-scope="tableData">
                                <div>
                                    <el-button  type="text" size="small"  @click="gourl(tableData.row)">查看</el-button>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-row>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  name: 'headers',
    props:{
      active:{
          type:String,
          required: true
      }
    },
    data() {
        return {
            headerData:JSON.parse(sessionStorage.getItem('userImg')),
            collapse: false, //菜单栏是否闭合
            fullscreen: false,
            showlrc:true,
            name:'maps',
            tabs:'',
            news:false,
            tableData: [],
        }
    },
    components:{
    },
    computed: {
    },
    methods: {
        gourl(data){
            // assets
            // property
            console.log(data)
            this.$emit('update:active','information')
            this.name = 'information';
            this.tabs = false;
            this.new = false;
            this.news = false;
        },
        list(){
            var that = this;
            this.toggleIndex = Math.random()
            this.$axios({
                url: this.getAjax + '/admin/messageAdmin/findMessage',
                method: "get",
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Token':sessionStorage.getItem('token')
                },
                data:{}
            }).then(res => {
                if(res.data.code == '2004'){
                    this.$message({
                        message: res.data.msg,
                        type: 'warning'
                    });
                    this.$router.push('/')
                }else{
                    this.tableData = res.data.data
                }
            })
        },
        handleCommand(command){
            if(command == 'setDialogInfo'){
                this.setDialogInfo();
            }else{
                this.logout();
            }

        },
        newss(){
            console.log(1)
            this.news = true;
            this.$emit('update:active','news')
            this.name = 'news';
            this.tabs = false;
            this.new = false;
            // this.$router.push('/news')
            // this.tabs = false;
            // this.new = true;
            // this.name = '';
            // this.$emit('update:active','news')
        },
        handleSelect(key,keyPath,title) {
            console.log(key)
            this.$emit('update:active',key)
            this.name = key;
            this.tabs = false;
            this.new = false;
            this.news = false;
        },
        handleSelect2(key,keyPath,title) {
            this.$emit('update:active',key)
            this.name = key;
            this.tabs = true;
            this.new = false;
            this.news = false;
        },
        showInfoList() {
            // console.log('下来菜单')
            this.$router.push('/Infoshow')
        },
        logout() {
            this.$axios({
                url: this.getAjax + '/admin/sysUserAdmin/logout',
                method: "get",
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                data:{}
            }).then(res => {
                console.log(res.data.data)
            var code = res.data.code;
            var data = res.data.data;
                this.$message({
                    message: '退出成功！',
                    type: 'success'
                });
            this.$router.push('/')
        })
        },
        toggleTab: function(tab) {
            this.currentTab = tab; // tab 为当前触发标签页的组件名
        },
        setDialogInfo(){
            this.tabs = true;
            this.$emit('update:active','approval')
            this.name = 'approval';
            this.new = false;
            this.news = false;

        }

    },
    mounted() {
      this.list();
    },
}
</script>
<style scoped>
    .tables>>>th{padding: 0;height:80px;background: #eee;font-size: 16px;font-weight: normal;color: #333;text-align: center;}
    .tables>>>.el-table {border: 1px dotted #eee;}
    .tables>>>.el-table__row td{padding: 0;height:50px;text-align: center;color: #333;}
    .tabSort>>>.el-menu--horizontal>.el-menu-item {
        line-height: 40px;height:20px;font-size: 20px;
    }
    .tabSort>>>.el-menu--horizontal>.el-menu-item:hover {
        background-color: #fff;
    }
    .tabSort>>>.el-menu-item.is-active {
        background-color: #fff;
        color: #5C77D8;
    }

    .sort>>>.el-menu {height: 100%;}
    .header-nav {
        width: 100%;
        height: 100px;
        background: #5C77D8;
        color: #fff;
        border-bottom: 1px solid #5C77D8;
        overflow: hidden;
        /*padding: 5px 0;*/
        /*line-height: 122px;*/
    }
    .collapse-btn {
        width: 50px;
        margin-left: 20px;
        display: inline-block;
    }
    .icon-btn {
        font-size: 36px;
        vertical-align: middle;
        cursor: pointer;
    }
    .logo-container {
        height:100px;
        min-width: 500px;
        padding: 0 5px;
    }
    .title {
        width: 438px;
        height: 70px;
        background: rgba(17, 22, 65, 0.26);
        border-radius: 35px;
        border: 1px solid #6C89B3;
        margin-left: 48px;
        position: relative;
        top:50%;
        margin-top: -35px;
        color: #fff;
        font-size: 36px;
        text-align: center;
        line-height: 70px;
    }
    .tabSort {height:100px;text-align: center;}
    .tabSort img {width: 34px;height:31px;}
    .user {
        /* line-height: 60px; */
        height:100px;
        line-height: 100px;
        text-align: right;
        float: right;
        /* padding-right: 10px; */
    }
    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: middle;
        display: inline-block;
    }
    .welcome {
        display: inline-block;
        width: auto;
        vertical-align: middle;
        padding: 0 5px;
    }
    .name {
        line-height: 20px;
        text-align: center;
        font-size: 14px;
    }
    .comename {
        font-size: 12px;
    }
    .avatarname {
        color: #409eff;
        font-weight: bolder;
    }
    .username {
        cursor: pointer;
        margin-right: 5px;
    }
    .el-dropdown {
        color: #fff;
    }
    .btn-fullscreen {
        display: inline-block;
        font-size: 24px;
        vertical-align: middle;
        margin-right: 20px;
        transform: rotate(45deg);
        cursor: pointer;
    }
    .icon-font {
        transform: none;

    }
    a {
        text-decoration: none;
        color: #fff;
    }
    .icon-font i {
        font-size: 20px;
    }
    .userinfo {
        display: inline-block;
    }
    .tabSort {}
    .tabSort>>>.el-menu {background-color: transparent;}
    .tabSort>>>.el-menu--horizontal>.el-menu-item {height:100px;padding: 16px 0 0 0;width: 176px;}
    .tabSort>>>.el-menu--horizontal>.el-menu-item:hover{background-color: transparent;}
    .tabSort>>>.el-menu.el-menu--horizontal {border-bottom: none;}
    .tabSort>>>.el-menu-item {color: #fff;font-size: 22px;margin: 0 5px;}
    .tabSort>>>.el-menu-item:hover {color: #5C77D8;}
    .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {background-color: #fff;}
    .el-menu--horizontal>.el-menu-item:hover:nth-child(1) img {content:url('../assets/icon_map2.png');}
    .el-menu--horizontal>.el-menu-item:hover:nth-child(2) img {content:url('../assets/icon_assets2.png');}
    .el-menu--horizontal>.el-menu-item:hover:nth-child(3) img {content:url('../assets/icon_wuye2.png');}
    .el-menu--horizontal>.el-menu-item:hover:nth-child(4) img {content:url('../assets/icon_infor2.png');}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
