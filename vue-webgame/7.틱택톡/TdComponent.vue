<template>
    <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
    export default {
        props: {
            cellData: String,   //O, X, 빈칸
            rowIndex: Number,
            cellIndex: Number,
        },
        methods: {
            onClickTd() {
                if( this.cellData ) return;     //이미 누른 칸은 클릭 못함

                const rootData = this.$root.$data;
                //배열에 turn 값 넣기
                //rootData.tableData[this.rowIndex][this.cellIndex] = rootData.turn;
                //화면에 그려지면서 배열에 turn 값 넣기
                this.$set( rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn );

                let win = false;
                //row 모두 같으면
                if( rootData.tableData[this.rowIndex][0] === rootData.turn && rootData.tableData[this.rowIndex][1] === rootData.turn && rootData.tableData[this.rowIndex][2] === rootData.turn ) {
                    win = true;
                }
                //cell 모두 같으면
                if (rootData.tableData[0][this.cellIndex] === rootData.turn && rootData.tableData[1][this.cellIndex] === rootData.turn && rootData.tableData[2][this.cellIndex] === rootData.turn) {
                    win = true;
                }
                //우하향 대각선
                if (rootData.tableData[0][0] === rootData.turn && rootData.tableData[1][1] === rootData.turn && rootData.tableData[2][2] === rootData.turn) {
                    win = true;
                }
                //우상향 대각선
                if (rootData.tableData[0][2] === rootData.turn && rootData.tableData[1][1] === rootData.turn && rootData.tableData[2][0] === rootData.turn) {
                    win = true;
                }

                if(win) {   //이긴 경우 : 3줄 달성
                    rootData.winner = rootData.turn;    //승자 기록
                    //데이터 초기화
                    rootData.turn = 'O';
                    rootData.tableData = [
                            ['', '', ''],
                            ['', '', ''],
                            ['', '', ''],
                        ];
                }else {     //무승부
                    let all = true;     //모든칸이 다 차있는지 체크하는 변수 선언(무승부 체크)
                    rootData.tableData.forEach((row) => {   //무승부 체크
                        row.forEach((cell) => {
                            if( !cell ){    //모든 칸이 다 차있으면 무승부
                                all = false;
                            }
                        });
                    });

                    if(all){    //무승부
                        rootData.winner = '';   //승자는 없다
                        //데이터 초기화
                        rootData.turn = 'O';
                        rootData.tableData = [
                                ['', '', ''],
                                ['', '', ''],
                                ['', '', ''],
                            ];
                    }else { //게임 진행 중(다음 턴 표시)
                        //자식 컴포넌트에서 부모 컴포넌트의 데이터 조작 가능
                        rootData.turn = rootData.turn === 'O' ? 'X' : 'O';  
                    }
                }

            },
        }
    };
</script>