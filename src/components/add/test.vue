<template>
  <div>
    <router-link to="/test/addlist">aaa</router-link>
    <h3 id="myh3" ref="myh3">这是一个评论组件</h3>
    <Addlist @func="loadComments"/>
    <ul>
      <li v-for="msg in msglist" :key="msg.id">
        <span>{{msg.name}}</span>
        <span>{{msg.cont}}</span>
      </li>
    </ul>
    <router-view @func="loadComments"></router-view>
  </div>
</template>

<script>
import Addlist from './addlist.vue'
export default {
  name: 'test',
  data () {
    return {
      msglist:[
        {id:1,name:"江小白",cont:"劝君更尽一杯酒,喝"},
        {id:2,name:"李白",cont:"西出阳关无故人"}
      ]
    }
  },
  components:{
    Addlist
  },
  methods:{
    loadComments(){
      var list = JSON.parse(localStorage.getItem('cmts') || '[]');
      this.msglist = list; 
    }
  },
  created(){
    this.loadComments();
  },
  mounted(){
    // alert(this.$refs.myh3.innerText)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
}
a {
  color: #42b983;
}
</style>
