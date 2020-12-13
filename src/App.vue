<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    import  Header from './components/header'
export default {
  name: 'App',
    data(){
        return {
            header_show:true,
        }
    },
    components: {
        'app-header':Header,
    },
    methods:{
        //是否显示头部
        header:function (bool) {
            this.header_show = bool;
        },
    }
}
</script>

<style>
    body {margin: 0;padding: 0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1, h2 {
    font-weight: normal;
}
    a {
        text-decoration: none;
    }
    a:active {background: transparent;}
    p {margin: 0;padding: 0;}
    ul,li{ padding:0;margin:0;list-style:none}
</style>
