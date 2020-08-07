<template>
    <ul>
        <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
            <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
                v-on:click="toggleComplete(todoItem, index)"></i>
            <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
            <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                <i class="fas fa-trash-alt"></i>
            </span>
        </li>
    </ul>

</template>

<script scoped>
export default {
    data() {
        return {
            todoItems: [],
        };
    },
    methods: {
        removeTodo(todoItem, index) {
            console.log(todoItem, index);
            localStorage.removeItem(todoItem);  //localstorage todo item 삭제
            this.todoItems.splice(index, 1);    //array todo item 삭제
        },
        toggleComplete(todoItem, index) {
            console.log(todoItem, index);
            console.log(todoItem);
            todoItem.completed = !todoItem.completed;
            //로컬 스토리지의 데이터를 갱신
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
            console.log(todoItem);
        },
    },
    created() {
        console.log('created');
        if( localStorage.length > 0 ){
            for(let i=0; i<localStorage.length; i++){
                if( localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    //console.log(localStorage.key(i));
                }
            }
        }
    },
}
</script>

<style scoped>
ul { margin-top: 0; padding-left: 0; list-style-type: none; text-align: left; }
li { height: 50px; min-height: 50px; margin: 0.5rem 0; padding: 0 0.9rem; display: flex; background: white; border-radius: 5px; line-height: 50px; }
.removeBtn { margin-left: auto; color: #de4343; cursor: pointer; }
.checkBtn { margin-right: 5px; line-height: 45px; color: #62acde; }
.checkBtnCompleted { color: #b3adad; }
.textCompleted { text-decoration: line-through; color: #b3adad; }
</style>