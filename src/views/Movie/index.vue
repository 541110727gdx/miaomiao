<template>
  <div class="wrapper">
      <Header title='喵喵电影' />
      <div class="movie_nav">
        <router-link to="/movie/city">城市</router-link>>
        <router-link to="/movie/nowPlaying">正在热映</router-link>>
        <router-link to="/movie/commingSoon">即将上映</router-link>>
        <router-link to="/movie/search">搜索</router-link>>
      </div>
      <keep-alive>
        <router-view />
      </keep-alive>
      <Tabbar />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Tabbar from '@/components/Tabbar'
export default {
  components:{
    Header,
    Tabbar
  },
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
  p{
    display: inline-block;
    width: 25%;
    text-align: center;
  }
</style>