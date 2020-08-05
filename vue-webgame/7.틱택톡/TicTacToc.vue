<template>
    <div>
        <div>{{turn}}님의 턴입니다.</div>
        <table-component v-bind:table-data="tableData" />
        <div v-if="winner">{{winner}}의 승리!</div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import TableComponent from './TableComponent';

    export default {
        components: {
            'table-component': TableComponent,
        },
        data() {
            return {
                tableData: [
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', ''],
                ],
                turn: 'O',
                winner: '',
            };
        },
        computed: {

        },
        methods: {
            onChangeData() {
                //this.tableData[1][0] = 'X'; 작동하지 않음
                //Vue.set(this.tableData[1], 0, 'X');
                //this.$set(this.tableData[1], 0, 'X');   //Vue.set과 동일
            },
        },
        mounted() {
            console.log('mounted');
        },
        beforeDestroy() {
            console.log('beforeDestroy');
        },
    };
</script>

<style>
    table {
        border-collapse: collapse;
    }
    td {
        width: 40px;
        height: 40px;
        border: 1px solid black;
        text-align: center;
    }
</style>