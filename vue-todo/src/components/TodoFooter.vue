<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
    </div>
</template>

<script>
export default {
    methods: {
        clearTodo() {
            localStorage.clear();
        },
    }
}
</script>

<style scoped>
    .clearAllContainer { width: 8.5rem; height: 50px; margin:0 auto; background-color: white; border-radius: 5px; line-height: 50px; }
    .clearAllBtn { display:block; color: #e20303; cursor: pointer; }
</style>