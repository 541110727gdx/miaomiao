<template>
  <div class="main">
      <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name:'',
  components:{},
  props:{
      title:{
          type:String,
          default:'喵喵电影'
      }
  },
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
    .main{
        width: 100%;
        height: 50px;
        
        h1{
            text-align: center;
        }
    }
</style>