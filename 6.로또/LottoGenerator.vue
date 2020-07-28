<template>
    <div>
        <div>당첨 숫자</div>
        <div id="결과창">
            <lotto-ball v-for="ball in winBalls" :key="ball" v-bind:number="ball"></lotto-ball>
        </div>
        <div>보너스</div>
        <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
        <button v-if="redo" @click="onClickRedo">한번 더!</button>
    </div>
</template>

<script>
    import LottoBall from './LottoBall';

    function getWinNumbers() {
        const candidate = Array(45).fill().map( (v, i) => i + 1 );
        //console.log(candidate);
        const shuffle = [];
        while( candidate.length > 0 ){
            shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
        }
        //console.log(shuffle);
        const bonusNumber = shuffle[shuffle.length - 1];
        //console.log(bonusNumber);
        const winNumbers = shuffle.slice(0, 6).sort((a, b) => a - b);
        return [...winNumbers, bonusNumber];
    }

    const timeouts = [];
    export default {
        components: {
            'lotto-ball': LottoBall,
        },
        data() {
            return {
                winNumbers: getWinNumbers(),
                winBalls: [],
                bonus: null,
                redo: false,
            };
        },
        computed: {

        },
        methods: {
            onClickRedo() {
                this.winNumbers = getWinNumbers();
                this.winBalls = [];
                this.bonus = null;
                this.redo = false;
                this.showBalls();
            },
            showBalls() {
                for(let i=0; i<this.winNumbers.length -1; i++){
                    timeouts[i] = setTimeout(() => {
                        this.winBalls.push(this.winNumbers[i]);
                    }, (i + 1) * 1000);
                }
                timeouts[6] = setTimeout(() => {
                    this.bonus = this.winNumbers[6];
                    this.redo = true;
                }, 7000);
            },
        },
        mounted() {
            console.log('mounted');
            this.showBalls();
        },
        beforeDestroy() {
            console.log('beforeDestroy');
            timeouts.forEach((t) => clearTimeout(t) );  //배열 timeout 클리어
        },
        watch: {
            winBalls(value, oldValue) {
                if(value.length === 0){
                    this.showBalls();
                }
            }
        },
    };
</script>

<style scoped>

</style>