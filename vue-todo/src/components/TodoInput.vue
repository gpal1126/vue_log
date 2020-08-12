<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo"/>
        <span class="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>
        <!-- app -->
        <!-- use the modal component, pass in the prop -->
        <modal v-if="showModal" @close="showModal = false">
            <!--
            you can use custom content here to overwrite
            default content
            -->
            <h3 slot="header">
                경고!
                <i class="closeModalBtn fas fa-times" @click="showModal=false"></i>
            </h3>
            <div slot="body">내용을 먼저 입력해주세요!</div>
            <h3 slot="footer">Todo it!</h3>
        </modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
    data() {
        return {
            newTodoItem: "",
            showModal: false,
        };
    },
    methods: {
        addTodo() {
            console.log('add Todo');
            console.log(this.newTodoItem);
            if( this.newTodoItem !== '' ){
                //this.$emit('이벤트 이름', 인자1, 인자2...);
                //this.$emit('addTodoItem', this.newTodoItem);
                const text = this.newTodoItem.trim();
                this.$store.commit('addOneItem', text);
                this.clearInput();  //input 클리어
            } else {
                //alert('type sth');
                this.showModal = !this.showModal;
            }
        },
        clearInput() {  
            this.newTodoItem = '';
        },
    },
    components: {
        Modal,
    },
}
</script>

<style>
input:focus { outline: none; }
.inputBox { height: 50px; background: white; border-radius: 5px; line-height: 50px; }
.inputBox input { width: 85%; height: 50px; padding-left: 16px; border-style: none; font-size: 0.9rem; }
.addContainer { width: 3rem; display: block; border-radius: 0 5px 5px 0; background: linear-gradient(to right, #6478FB, #8763FB); float: right; cursor: pointer; }
.addBtn { vertical-align: middle; color: white; }
.closeModalBtn { color: #42b983; float: right; cursor: pointer; }
</style>