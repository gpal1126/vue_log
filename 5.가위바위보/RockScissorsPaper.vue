<template>
    <div>
        <div id="computer" :style="computedStyleObject"></div>
        <div>
            <button @click="onClickButton('바위')">바위</button>
            <button @click="onClickButton('가위')">가위</button>
            <button @click="onClickButton('보')">보</button>
        </div>
        <div>{{result}}</div>
        <div>현재 {{score}}점</div>

    </div>
</template>

<script>

    //가위바위보 이미지 위치 값
    const rspCoords = {
        바위: '0',
        가위: '-142px',
        보: '-284px',
    };

    //점수표
    const scores = {
        가위: 1,
        바위: 0,
        보: -1,
    };

    const computerChoice = (imgCoord) => {
        console.log('imgCoord:::'+imgCoord);
        return Object.entries(rspCoords).find(function(v){
            return v[1] === imgCoord;
        })[0];
    };

    let interval = null;

    export default {
        data() {
            return {
                imgCoord: rspCoords.바위,
                result: '',
                score: 0,
            };
        },
        computed: {
            computedStyleObject() {
                return {
                    background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`,
                };
            }
        },
        methods: {
            changeHand() {
                interval = setInterval(() => {
                    if( this.imgCoord === rspCoords.바위 ){
                        this.imgCoord = rspCoords.가위;
                    }else if( this.imgCoord === rspCoords.가위 ){
                        this.imgCoord = rspCoords.보;
                    }else if( this.imgCoord === rspCoords.보 ){
                        this.imgCoord = rspCoords.바위;
                    }
                }, 100);
            },
            onClickButton(choice) { //가위바위보 버튼을 누르면
                clearInterval(interval);    //컴퓨터와 내가 선택한 것과 비교를 위해 잠시 멈춤
                const myScore = scores[choice];
                const cpuScore = scores[computerChoice(this.imgCoord)];
                //console.log('myScore:::'+myScore);
                //console.log('cpuScore:::'+cpuScore);
                const diff = myScore - cpuScore;
                if( diff === 0 ){
                    this.result = '비겼습니다.';
                }else if( [-1, 2].includes(diff) ){
                    this.result = '이겼습니다!';
                    this.score += 1;
                }else {
                    this.result = '졌습니다 :(';
                    this.score -= 1;
                }

                //1초 뒤에 가위바위보 랜덤 다시 시작
                setTimeout( () => {
                    this.changeHand();
                }, 1000);
            }
        },
        beforeCreate() {
            console.log('beforeCreate');
        },
        created() {
            console.log('created');
        },
        beforeMount() {
            console.log('beforeMount');
        },
        mounted() {
            console.log('mounted');
            this.changeHand();  
        },
        beforeUpdate() {
            console.log('beforeUpdate');
        },
        updated() {
            console.log('updated');
        },
        beforeDestroy() {
            console.log('beforeDestroy');
            clearInterval(interval);
        },
        destroyed() {
            console.log('destroyed');
        },
    };
</script>

<style scoped>
    #computer {
        width: 142px;
        height: 200px;
        background-position: 0 0;
    }
</style>