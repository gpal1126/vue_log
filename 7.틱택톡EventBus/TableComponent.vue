<template>
    <table>
        <tr-component v-for="(rowData, index) in tableData" :key="index" :row-data="rowData" :row-index="index"></tr-component>
    </table>
</template>

<script>
    import TrComponent from './TrComponent';
    export default {
        components: {
            'tr-component': TrComponent,
        },
        props: {
            tableData: Array,
        },
    }
</script>

<style scoped>

</style>