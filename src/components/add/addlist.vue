<template>
  <div>
    <span>评论人：</span><input type="text" v-model="name">
    <span>评论内容：</span><input type="text" v-model="cont">
    <input type="button" value="添加评论" v-on:click="postComment">
  </div>
</template>

<script>
export default {
  name: 'Addlist',
  data () {
    return {
      name:"",
      cont:""
    }
  },
  methods:{
    postComment(){
      // 分析：发表评论的业务逻辑
      // 1、评论的数据存到 localStorage    localStorage.setItem('name','')
      // 2、先组织处一个最近的评论数据对象
      // 3、把得到的评论数据对象，保存到localstorage中
      // 3.1 localStorage 中只能存放字符串数据，要先调用JSON.stringify 转字符串
      // 3.2 在保存最新的评论数据之前，要先从localStorage 获取到之前的评论数据（string），转换为
      //     一个 数组对象，然后，把最新的评论，push 到这个数组
      // 3.3 如果获取到的 localStorage 中的评论字符串，为空不存在，则可以返回一个'[]',
      //     让 JSON.parse 去替换
      // 3.4 把最新的评论列表数组，再次调用 JSON.stringify 转为 数组字符串，然后调用 localStorage.setItem(),存储

      var comment = { id:Date.now(),name:this.name,cont:this.cont}
      
      var list = JSON.parse(localStorage.getItem('cmts') || '[]');

      list.push(comment);
      
      localStorage.setItem('cmts',JSON.stringify(list));

      this.name = this.cont = '';
      
      this.$emit("func")

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
