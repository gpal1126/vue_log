<template>
    <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
    import EventBus from './EventBus';

    export default {
        props: {
            cellData: String,   //O, X, 빈칸
            rowIndex: Number,
            cellIndex: Number,
        },
        methods: {
            onClickTd() {
                if( this.cellData ) return;     //이미 누른 칸은 클릭 못함

                EventBus.$emit('clickTd', this.rowIndex, this.cellIndex);
            },
        }
    };
</script>