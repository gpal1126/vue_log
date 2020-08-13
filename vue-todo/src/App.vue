<template>
    <div id="app">
        <!-- 권장 --> 
        <todo-header></todo-header>
        <!-- <todo-input v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드명"></todo-input> -->
        <!-- <todo-input v-on:addTodoItem="addOneItem"></todo-input> --> <!-- 기존 vue 방식 -->
        <todo-input></todo-input> <!-- vuex 방식 -->
        <!-- <todo-list v-bind:내려보낼 프롭스 속성 이름="현재 위치의 컴포넌트 데이터 속성"></todo-list> -->
        <!-- <todo-list v-bind:propsdata="todoItems" 
            v-on:removeTodoItem="removeOneItem" 
            v-on:toggleTodoItem="toggleOneItem"></todo-list> -->
        <todo-list></todo-list>
        <!-- <todo-footer v-on:clearAll="clearAllItems"></todo-footer> -->
        <todo-footer></todo-footer>

        <!-- <TodoHeader></TodoHeader> -->
        <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드명"></TodoInput> -->
        <!-- <TodoInput v-on:addTodoItem="addOneItem"></TodoInput> -->
        <!-- <TodoList v-bind:내려보낼 프롭스 속성 이름="현재 위치의 컴포넌트 데이터 속성"></TodoList> -->
        <!-- <TodoList v-bind:propsdata="todoItems" 
            v-on:removeTodoItem="removeOneItem" 
            v-on:toggleTodoItem="toggleOneItem"></TodoList> -->
        <!-- <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter> -->
    </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
    data() {
        return {
            //todoItems: [],
        }
    },
    methods: {  //mutations
        /* addOneItem(todoItem) {   //기존 vue 방식
            console.log(todoItem);
            const obj = { completed: false, item: todoItem };
            //저장하는 로직
            localStorage.setItem(todoItem, JSON.stringify(obj));    //로컬스토리지에 데이터 넣기
            this.todoItems.push(obj);   //데이터 배열에 넣기
        }, */
        /* removeOneItem(todoItem, index) {
            localStorage.removeItem(todoItem.item);  //localstorage todo item 삭제
            this.todoItems.splice(index, 1);    //array todo item 삭제
        }, */
        /* toggleOneItem(todoItem, index) {
            //토글 값 변경
            //todoItem.completed = !todoItem.completed;
            this.todoItems[index].completed = !this.todoItems[index].completed;
            //로컬 스토리지의 데이터를 갱신
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        }, */
        /* clearAllItems() {
            localStorage.clear();   //localstorage todo all 삭제
            this.todoItems = [];    //array todo all 삭제
        }, */
    },
    components: {
        //컴포넌트 태그명: 컴포넌트 내용
        TodoHeader,
        TodoInput,
        TodoList,
        TodoFooter,
    },
    created() {
        console.log('created');
        /* 
        if( localStorage.length > 0 ){
            for(let i=0; i<localStorage.length; i++){
                if( localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    //console.log(localStorage.key(i));
                }
            }
        } */
    },
}
</script>

<style>
body { background-color: #F6F6F6; text-align: center; }
input { width: 200px; border-style: groove; }
button { border-style: groove; }
.shadow { box-shadow: 5px 10px 10px rgba(0, 0, 0, 0,03); }
</style>
