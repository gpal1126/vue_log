<template>
    <div id="app">
        <!-- 권장 --> 
        <!-- <todo-header></todo-header>
        <todo-input></todo-input>
        <todo-list></todo-list>
        <todo-footer></todo-footer> -->
        <TodoHeader></TodoHeader>
        <TodoInput></TodoInput>
        <TodoList></TodoList>
        <TodoFooter></TodoFooter>
    </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
    components: {
        //컴포넌트 태그명: 컴포넌트 내용
        'TodoHeader': TodoHeader,
        'TodoInput': TodoInput,
        'TodoList': TodoList,
        'TodoFooter': TodoFooter,
    },
}
</script>

<style>
body { background-color: #F6F6F6; text-align: center; }
input { width: 200px; border-style: groove; }
button { border-style: groove; }
.shadow { box-shadow: 5px 10px 10px rgba(0, 0, 0, 0,03); }
</style>
