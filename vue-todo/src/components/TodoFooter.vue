<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations({
            clearTodo: 'clearAllItems',
        }),
        /* clearTodo() {
            //이벤트 발생
            //this.$emit('clearAll');
            this.$store.commit('clearAllItems');
            //localStorage.clear();
        }, */
    }
}
</script>

<style scoped>
    .clearAllContainer { width: 8.5rem; height: 50px; margin:0 auto; background-color: white; border-radius: 5px; line-height: 50px; }
    .clearAllBtn { display:block; color: #e20303; cursor: pointer; }
</style>