<template>
  <div class="con">
      <ul>
        <router-link tag='li' to="/movie">电影</router-link>
        <router-link tag='li' to="/cinema">影院</router-link>
        <router-link tag='li' to="/mine">我的</router-link>
      </ul>
  </div>
</template>

<script>
export default {
  name:'',
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.con{
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0;
  left: 0;
}
  ul{
    width: 100%;
    height: 40px;
  }
  li{
    width: 33.333333%;
    float: left;
    text-align: center;
  }
  .router-link-active{
    color: red;
  }
</style>