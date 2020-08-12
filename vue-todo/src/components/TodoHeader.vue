<template>
    <header>
        <!-- <h1>TODO it!</h1> -->
        <h1>{{ this.$store.state.headerText }}</h1>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 { margin: 2.5rem 0 1.5rem; font-weight: 900; color: #2F3B52; }
</style>