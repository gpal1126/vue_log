<template>
    <div>
        <div>{{turn}}님의 턴입니다.</div>
        <table-component>
            <!-- tr태그가 TableComponent에서 slot에 들어감 -->
            <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
                <td @click="onClickTd(rowIndex, cellIndex)" v-for="(cellData, cellIndex) in rowData" :key="cellIndex">{{cellData}}</td>
            </tr>
        </table-component>
        <div v-if="winner">{{winner}}의 승리!</div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import store, { CLICK_CELL, SET_WINNER, RESET_GAME, CHANGE_TURN, NO_WINNER } from './store';
    import TableComponent from './TableComponent';

    export default {
        store,          //store 연결
        components: {
            'table-component': TableComponent,
        },
        data() {
            return {
                data: 1,
            };
        },
        computed: {
            ...mapState(['winner', 'turn', 'tableData']),
            /* 
            winner(){
                return this.$store.state.winner;
            },
            turn() {
                return this.$store.state.turn;
            }, */
        },
        methods: {
            onClickTd(rowIndex, cellIndex) {
                if( this.cellData ) return;     //이미 누른 칸은 클릭 못함

                //화면에 그려지면서 배열에 turn 값 넣기
                this.$store.commit(CLICK_CELL, { row: rowIndex, cell: cellIndex });

                let win = false;
                //row 모두 같으면
                if( this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn && this.tableData[rowIndex][2] === this.turn ) {
                    win = true;
                }
                //cell 모두 같으면
                if (this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn && this.tableData[2][cellIndex] === this.turn) {
                    win = true;
                }
                //우하향 대각선
                if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
                    win = true;
                }
                //우상향 대각선
                if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
                    win = true;
                }

                if(win) {   //이긴 경우 : 3줄 달성
                    this.$store.commit(SET_WINNER, this.turn);    //승자 기록
                    //데이터 초기화
                    this.$store.commit(RESET_GAME);

                }else {     //무승부
                    let all = true;     //모든칸이 다 차있는지 체크하는 변수 선언(무승부 체크)
                    this.tableData.forEach((row) => {   //무승부 체크
                        row.forEach((cell) => {
                            if( !cell ){    //모든 칸이 다 차있으면 무승부
                                all = false;
                            }
                        });
                    });

                    if(all){    //무승부
                        this.$store.commit(NO_WINNER);   //승자는 없다
                        //데이터 초기화
                        this.$store.commit(RESET_GAME);
                    }else { //게임 진행 중(다음 턴 표시)
                        //자식 컴포넌트에서 부모 컴포넌트의 데이터 조작 가능
                        this.$store.commit(CHANGE_TURN);
                    }
                }
            },
        },
        created() {
            console.log('created');
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