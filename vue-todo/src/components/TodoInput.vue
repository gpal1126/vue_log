<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem"/>
        <span class="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTodoItem: ""
        };
    },
    methods: {
        addTodo() {
            console.log('add Todo');
            console.log(this.newTodoItem);
            if( this.newTodoItem !== '' ){
                let obj = { completed: false, item: this.newTodoItem };
                //저장하는 로직
                localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
                this.clearInput();  //input 클리어
            }
        },
        clearInput() {  
            this.newTodoItem = '';
        }
    },
}
</script>

<style>
input:focus { outline: none; }
.inputBox { height: 50px; background: white; border-radius: 5px; line-height: 50px; }
.inputBox input { border-style: none; font-size: 0.9rem; }
.addContainer { width: 3rem; display: block; border-radius: 0 5px 5px 0; background: linear-gradient(to right, #6478FB, #8763FB); float: right; }
.addBtn { vertical-align: middle; color: white; }
</style>