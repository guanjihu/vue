<template>
    <div class="demo">
<van-swipe :autoplay="3000" indicator-color="red">
  <van-swipe-item  v-for="item in shuju" :key='item.id'>
 <p>{{item.ctime}}</p>
  </van-swipe-item>
</van-swipe>
<van-grid :column-num="3" >
  <van-grid-item
     to="/home/grid"
    v-for="value in 6"
    :key="value"
    icon="photo-o"
    text="文字"
    
  />
</van-grid>
 </div>
</template>
<script>
import { constants } from 'crypto';
import {Toast} from 'vant'
export default {
    name:'demo',
    data(){
        return {
            shuju:[]
        }
    },
    created(){
this.getresou()
    },
    methods:{
        
      getresou(){
     this.$http.get("http://www.liulongbin.top:3005/api/getprodlist").then(result=>{
       
      if(result.body.status===0){
          this.shuju=result.body.message
      }else{
        Toast('加载失败')
      }
     })
      }
    }
    
}
</script>
<style scoped>
.van-swipe{
    width: 100%;
    height: 200px;
    overflow-x: hidden;
}
.van-swipe-item:nth-child(1){
    
    background: yellow;
}
.van-swipe-item:nth-child(2){
    background: green;
}
.van-swipe-item:nth-child(3){
    background: orange;
}
.van-swipe-item:nth-child(4){
    background:pink;
}
</style>