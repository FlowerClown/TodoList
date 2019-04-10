<template>
    <div class="lists">
        <h2>正在进行</h2>
        <!-- <a href="javascript:;" @click="checkedAll">全选</a> -->
        <!-- <a href="javascript:;" @click="deleteAll">全部已完成</a> -->
        <ul>
            <li v-for="(list,i) in lists" :key="list.time">
                <input type="checkbox" :checked="list.isChecked" @click="checkedTodo(i)">
                <p>{{list.cont}}</p>
                <a @click.prevent="deleteItem(i)">-</a>
            </li>
        </ul>
    </div>
</template>
<script>
import VueEvent from '@/assets/vueEvent.js'
export default {
    name:'TodoList',
    data(){
        return {
            isChecked:false,
            allnum:0,
            lists:[
                {cont:'测试',time:'2019/4/1',isChecked:false},
                {cont:'测试',time:'2019/4/2',isChecked:false}
            ]
        }
    },
    methods:{
        checkedAll(){
            for(var i=0;i<this.lists.length;i++){
                this.lists[i].isChecked = !this.lists[i].isChecked;
            }
        },
        deleteAll(){

        },
        checkedTodo(index){
            
            this.addItem(index);
            
            this.deleteItem(index);
            
        },
        addItem(index){
            var completed = JSON.parse(localStorage.getItem('completed') || '[]');
            
            this.lists[index].isChecked = !this.lists[index].isChecked;
            completed.push(this.lists[index]); 
            localStorage.setItem('completed',JSON.stringify(completed)) 

            VueEvent.$emit('todolist-delete',completed);
        },
        deleteItem(index){
            this.lists.splice(index,1);
            localStorage.setItem('todolist',JSON.stringify(this.lists))

        }
    },
    created(){
        // localStorage.setItem('todolist','')
        // localStorage.setItem('completed','')
        var todolist = JSON.parse(localStorage.getItem('todolist') || '[]');
        this.lists = todolist;

        VueEvent.$on('todolist-add',(data)=>{
            this.lists = data;
        })
    }
}
</script>

<style scoped>
    span{
        position: absolute;
        top: 10px;
        right: 5px;
        display: inline-block;
        padding: 0 5px;
        height: 20px;
        border-radius: 20px;
        background: #E6E6FA;
        line-height: 22px;
        text-align: center;
        color: #666;
        font-size: 14px;
    }
    a{
        color: #333;
    }
    .lists{
        width: 600px;
        margin:0 auto;
    }
    .lists h2{
        display: block;
        font-size: 1.5em;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
        position: relative;
    }
    .lists ul{
        display: block;
        /* padding-top:20px; */
    } 
    .lists ul li{
        height: 32px;
        line-height: 32px;
        background: #fff;
        position: relative;
        margin-bottom: 10px;
        padding: 0 45px;
        border-radius: 3px;
        border-left: 5px solid #629A9C;
        box-shadow: 0 1px 2px rgba(0,0,0,0.07);
    }
    .lists ul li input{
        position: absolute;
        top: 5px;
        left: 10px;
        width: 22px;
        height: 22px;
        cursor: pointer;
    }
    .lists ul li p{
        margin: 0;
    } 
    .lists ul li a{
        position: absolute;
        top: 4px;
        right: 5px;
        display: inline-block;
        width: 14px;
        height: 12px;
        border-radius: 14px;
        border: 6px double #FFF;
        background: #CCC;
        line-height: 14px;
        text-align: center;
        color: #FFF;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
    }
</style>

