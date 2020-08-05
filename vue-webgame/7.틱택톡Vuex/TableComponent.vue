<template>
    <table>
        <!-- <tr-component v-for="(rowData, index) in tableData" :key="index" :row-index="index"></tr-component> -->
        <slot />
    </table>
</template>

<script>
    import TrComponent from './TrComponent';
    export default {
        components: {
           // 'tr-component': TrComponent,
        },
        computed: {
            /* tableData() {
                return this.$store.state.tableData;
            }, */
            /* turnMessage() {
                return this.$store.getters.turnMessage;
            }, */
        },
    }
</script>

<style scoped>

</style>