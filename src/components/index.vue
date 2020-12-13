<template>
    <div class="main">
        <v-header :active.sync="active"></v-header>
        <router-view/>
    </div>
</template>

<script>
    import VHeader from '@/components/header'
export default {
  name: 'login',
  data () {
    return {
        active:'maps',
    }
  },
    components:{
      VHeader
    },
    watch:{
      active(val){
          this.$router.push({
              path:val
          });
          console.log(val)
      }

    },
    methods:{
    },
    created:function () {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
