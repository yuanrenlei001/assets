<template>
    <div class="main">
        <div class="body_count">
            <div class="login_count">
                <div class="text01">国有资产管理OA系统</div>
                <div class="text02">湖州南浔旅游投资发展集团有限公司</div>
                <div class="login_count_a">
                    <div id="all">
                        <ul id="card">
                            <li class="active">

                                <div class="login_bot_count">
                                    <img src="@/assets/tubiao-07.png" alt="">
                                    <input type="text"  placeholder="请输入用户名" v-model="account">
                                </div>
                                <div class="login_bot_count">
                                    <img src="@/assets/tubiao-06.png" alt="" >
                                    <input type="password"  placeholder="请输入旧密码" v-model="password">
                                </div>
                                <div class="login_bot_count">
                                    <img src="@/assets/tubiao-06.png" alt="" >
                                    <input type="password"  placeholder="请输入新密码" v-model="new_password">
                                </div>
                                <div class="login_bot_count">
                                    <img src="@/assets/tubiao-06.png" alt="" >
                                    <input type="password"  placeholder="确认密码" v-model="new_password2">
                                </div>
                                <button class="login_button" @click="index">确定</button>
                                <button class="login_button" @click="back">取消</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import md5 from 'js-md5'
    export default {
        name: 'login',
        data () {
            return {
                account:'',
                password:'',
                new_password:'',
                new_password2:'',
            }
        },
        created:function () {
            this.$emit('header', false);
        },
        methods:{
            index:function(){
                var account = this.account;
                var new_password = this.new_password;
                var new_password2 = this.new_password2;
                var password = md5(this.password);
                var data = {
                    'userName':account,
                    'pwdOld':password,
                    'pwdNew':new_password
                }
                if(account == ''){
                    this.$message({
                        message: '账号不能为空！',
                        type: 'warning'
                    });
                }else if(this.password == ''){
                    this.$message({
                        message: '密码不能为空！',
                        type: 'warning'
                    });
                }else if(new_password == ''){
                    this.$message({
                        message: '新密码不能为空！',
                        type: 'warning'
                    });
                }else if(new_password !== new_password2){
                    this.$message({
                        message: '两次密码不一致！',
                        type: 'warning'
                    });
                }else{
                    this.$axios({
                        url: this.getAjax + '/admin/sysUserAdmin/updatePwd',
                        method: "post",
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8'
                        },
                        data:data
                    }).then(res => {
                        console.log(res.data.data)
                    var code = res.data.code;
                    var data = res.data.data;
                    if(code == '1001'){
                        this.$message({
                            message: '密码修改成功！',
                            type: 'success'
                        });
                        this.$router.push('/')
                    }else{
                        this.$message({
                            message: res.data.msg,
                            type: 'warning'
                        });
                    }
                })
                }
                // this.$router.push('/maps')

            },
            back(){
                this.$router.push('/')
            }
        },
        mounted(){

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .key {font-size: 14px;float:right;text-decoration: underline;margin-right: 10%;margin-top: 20px;color: #40E4E5;}
    .text01 {font-size: 30px;width: 100%;text-align: center;color: #324163;margin: 16px 0 ;}
    .text02 {font-size: 16px;width: 100%;text-align: center;color: #999;margin-bottom: 16px;}
    .main {
        background: url(../assets/background.jpg) no-repeat;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-size: 100% 100%;
        position: absolute;
    }
    .logo {
        width: 100%;
        text-align: center;
        height: 120px;
    }
    .logo img {
        width: 210px;
        height: 120px;
    }

    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        outline: none;
        box-sizing: border-box
    }
    .body_count {
        width: 340px;
        position: fixed;
        top: 20%;
        left:50%;
        margin-left: -170px;
    }
    .login_count {
        width: 340px;
        height: 480px;
        padding: 10px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 15px #2aa2a3;
        margin-top: 20px
    }
    .login_count_a {
        width: 100%
    }
    #all {
        width: 80%;
        margin: 0 auto 0
    }
    #option li {
        float: left;
        text-align: center;
        width: 50%;
        height: 38px;
        cursor: pointer;
        color: #4f4f4f;
        font-size: 16px;
        border-radius: 20px;
        font-weight: 700
    }
    #option li.active {
        background: linear-gradient(to left, #40E4E5, #28CCD6);
        color: #fff;
        border-radius: 20px
    }
    #card li {
        height: 100%;
        display: none
    }
    #card li.active {
        display: block
    }
    .login_bot_count {
        width: 100%;
        border: 1px solid #34d8de;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        padding: 3px;
        margin-top: 10px
    }
    .login_bot_count > img {
        height: 20px;
        padding-left: 5px
    }
    .login_bot_count > input {
        height: 35px;
        border: 0;
        width: 80%
    }
    .login_bot_count > input::-webkit-input-placeholder {
        color: #dedede
    }
    .login_bot > a, .login_bot > p {
        font-size: 12px;
        color: #898989
    }
    .login_bot > p {
        width: 26%;
        display: inline-flex;
        align-items: center;
        justify-content: space-between
    }
    .login_bot > p > input[type=checkbox] {
        width: 10px;
        height: 10px;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        line-height: 10px;
        position: relative
    }
    .login_bot > p > input[type=checkbox]::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background: #fff;
        width: 100%;
        height: 100%;
        border: 1px solid #dedede
    }
    .login_bot > p > input[type=checkbox]:checked::before {
        content: "\2713";
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        border: 1px solid #dedede;
        color: #898989;
        font-size: 12px;
        font-weight: 700
    }
    .login_button {
        margin-top: 20px;
        width: 100%;
        border: 0;
        height: 35px;
        font-size: 16px;
        color: #fff;
        background: linear-gradient(to left, #40E4E5, #28CCD6)
    }
    .login_account_count > img {
        height: 20px;
        padding-left: 5px
    }
    .login_account_counts > img {
        height: 20px;
        padding-left: 5px
    }
    .login_account_counts > input:nth-of-type(1) {
        height: 35px;
        border: 0;
        width: 50%
    }
    .login_account_count > input::-webkit-input-placeholder {
        color: #dedede
    }
    .login_account_counts > input::-webkit-input-placeholder {
        color: #dedede
    }
    .login_b_title > img {
        height: 22px;
        margin-right: 5px
    }
</style>
