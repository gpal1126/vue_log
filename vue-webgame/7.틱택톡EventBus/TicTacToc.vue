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
    import EventBus from './EventBus';

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
            onClickTd(rowIndex, cellIndex) {
                console.log(rowIndex, cellIndex);

                //배열에 turn 값 넣기
                //this.tableData[rowIndex][cellIndex] = this.turn;
                //화면에 그려지면서 배열에 turn 값 넣기
                this.$set( this.tableData[rowIndex], cellIndex, this.turn );

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
                    this.winner = this.turn;    //승자 기록
                    //데이터 초기화
                    this.turn = 'O';
                    this.tableData = [
                            ['', '', ''],
                            ['', '', ''],
                            ['', '', ''],
                        ];
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
                        this.winner = '';   //승자는 없다
                        //데이터 초기화
                        this.turn = 'O';
                        this.tableData = [
                                ['', '', ''],
                                ['', '', ''],
                                ['', '', ''],
                            ];
                    }else { //게임 진행 중(다음 턴 표시)
                        //자식 컴포넌트에서 부모 컴포넌트의 데이터 조작 가능
                        this.turn = this.turn === 'O' ? 'X' : 'O';  
                    }
                }
            }
        },
        created() {
            EventBus.$on('clickTd', this.onClickTd);
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