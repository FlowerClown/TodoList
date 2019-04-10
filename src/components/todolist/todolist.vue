<template>
    <div class="todolist">
        <Header/>
        <Lists/>
        <Completed />
    </div>
</template>
<script>
import Header from './head.vue'
import Lists from './lists.vue'
import Completed from './completed.vue'
export default {
    name:'TodoList',
    data(){
        return {
            list:[],
            msg:'好'
        }
    },
    components:{
        Header,
        Lists,
        Completed
    },
    methods:{
        ceshi(){
            console.log('v-on:click.native')
        }
    }
}
</script>

<style>
    *{
        margin:0;
        padding:0;
    }
    body{
        margin: 0;
        padding: 0;
        font-size: 16px;
        background: #CDCDCD;
    }
    ul,ol,li{
        list-style-type: none;
    }
</style>

