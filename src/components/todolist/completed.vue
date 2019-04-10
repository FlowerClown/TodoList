<template>
    <div class="lists">
        <h2>已经完成</h2>
        <ul>
            <li v-for="(list,i) in completed" :key="list.time">
                <input type="checkbox" :checked="list.isChecked" @click="deleteTodo(i)">
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
            completed:[ 
                {cont:'测试',time:'2019/4/1',isChecked:true},
                {cont:'测试',time:'2019/4/2',isChecked:true}
            ],
            allnum:0
        }
    },
    methods:{
        deleteTodo(index){
            var todolist = JSON.parse(localStorage.getItem('todolist') || '[]');
            this.completed[index].isChecked = !this.completed[index].isChecked;
            todolist.push(this.completed[index]);
            localStorage.setItem('todolist',JSON.stringify(todolist))

            this.deleteItem(index);
            
            VueEvent.$emit('todolist-add',todolist);
        },
        deleteItem(index){
            this.completed.splice(index,1);
            localStorage.setItem('completed',JSON.stringify(this.completed))
        }
    },
    created(){
        var completedlist = JSON.parse(localStorage.getItem('completed') || '[]');
        this.completed = completedlist;

        VueEvent.$on('todolist-delete',(data)=>{
            this.completed = data;
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

