<template>
  <div class="mine">
      <Header title="我的喵喵" />
      <Tabbar />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Tabbar from '@/components/Tabbar'
export default {
  components:{
    Tabbar,
    Header
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

</style>