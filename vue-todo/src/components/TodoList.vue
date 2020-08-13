<template>
    <div>
        <transition-group name="list" tag="ul">
        <!-- <ul> -->
            <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
                <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
                    v-on:click="toggleComplete(todoItem, index)"></i>
                <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
                <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        <!-- </ul> -->
        </transition-group>
    </div>
</template>

<script scoped>
import { mapGetters } from 'vuex';

export default {
    //props: ['propsdata'],
    methods: {
        removeTodo(todoItem, index) {
            console.log(todoItem, index);
            //this.$emit('이벤트 이름', 인자1, 인자2...);   //이벤트 버스
            //this.$emit('removeTodoItem', todoItem, index);
            const obj = {
                /* todoItem: todoItem, 
                index: index, */
                todoItem,
                index
            };
            this.$store.commit('removeOneItem', obj);
        },
        toggleComplete(todoItem, index) {
            console.log(todoItem, index);
            //this.$emit('이벤트 이름', 인자1, 인자2...);
            this.$store.commit('toggleOneItem', {todoItem, index});
        },
    },
    computed: {
        /* todoItems() {
            return this.$store.getters.storedTodoItems;
        } */
        ...mapGetters(['storedTodoItems']),
    },
}
</script>

<style scoped>
ul { margin-top: 0; padding-left: 0; list-style-type: none; text-align: left; }
li { height: 50px; min-height: 50px; margin: 0.5rem 0; padding: 0 0.9rem; display: flex; background: white; border-radius: 5px; line-height: 50px; }
.removeBtn { margin-left: auto; color: #de4343; cursor: pointer; }
.checkBtn { margin-right: 5px; line-height: 45px; color: #62acde; cursor:pointer; }
.checkBtnCompleted { color: #b3adad; }
.textCompleted { text-decoration: line-through; color: #b3adad; }

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}


</style>