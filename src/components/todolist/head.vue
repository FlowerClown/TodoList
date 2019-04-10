<template>
    <div class="head">
        <div class="headBox">
            <h3>TodoList</h3>
            <input type="button" value="添加待办" @click="addTodo">
            <input type="text" v-model="todotxt" @keyup.enter="addTodo">
        </div>
    </div>
</template>

<script>
import VueEvent from '@/assets/vueEvent.js'
export default {
    name:'TodoList',
    data(){
        return {
            todotxt:''
        }
    },
    methods:{
        addTodo(){
            if(this.todotxt.trim()!=''){
                var todoObj = { cont:this.todotxt, time:new Date().toString() ,isChecked:false}
                var todolist = JSON.parse(localStorage.getItem('todolist') || '[]');
                
                todolist.push(todoObj); 
                console.log(todolist)
                localStorage.setItem('todolist',JSON.stringify(todolist))

                this.todotxt = '';

                VueEvent.$emit('todolist-add',todolist);
            }
        }
    }
}
</script>

<style scoped>
    .head{
        width:100%;
        height:50px;
        background:rgba(47,47,47,0.98);
    }
    .headBox{
        width:600px;
        margin:0 auto;
    } 
    .headBox h3{
        float: left;
        width: 100px;
        line-height: 50px;
        color: #DDD;
        font-size: 24px;
        cursor: pointer;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    }
    .headBox input{
        float: right;
        margin-top: 12px;
        border-radius: 5px;
        box-shadow: 0 1px 0 rgba(255,255,255,0.24), 0 1px 4px rgba(0,0,0,0.45) inset;
        border: none;
    }
    .headBox input[type=text]{
        width: 60%;
        height: 24px;
        text-indent: 10px;
    }
    .headBox input[type=button]{
        float:right;
        height:24px;
        line-height:24px;
        margin: 12px 0 0 10px;
        background:#fff; 
        padding:0 10px;
        outline: none;   
    }
</style>

