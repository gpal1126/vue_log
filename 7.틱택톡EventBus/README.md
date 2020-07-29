# 7.틱택톡EventBus

#### package.json 생성
$ npm init  
  
#### vue 설치
$ npm i vue  
  
#### webpack webpack-cli dev용 설치
$ npm i webpack webpack-cli -D  
  
#### webpack.config.js 생성 후 노드 모듈 객체로 선언하여 각각 설정
- webpack은 노드 환경이기 때문에 require를 사용하여 선언  
- mode : (개발: development, 배포: production)  
- devtool : (개발: eval, 배포: hidden-source-map)  
- resolve :  
    - extensions: 확장자 생략 가능하도록 설정  
- entry : 핵심 js인 main.js를 읽음  
- module rules에 vue,css 파일을 로드와 컴파일 할 수 있도록 선언(js로 자동 변환)  
    - vue-loader dev용 설치 : $ npm i vue-loader -D  
    - vue-template-compiler dev용 설치 : $ npm i vue-template-compiler -D  
    - vue-style-loader dev용 설치(css관련) : $ npm i vue-style-loader -D  
    - css-loader dev용 설치(css관련) : $ npm i css-loader -D  
- plugins : 모듈을 한번 더 가공  
    - vueLoaderPlugin 선언  
- output : /dist/app.js 을 자동 생성하여 출력  
  
#### 프로젝트의 핵심인 main.js 생성
- vue 환경이기 때문에 import 사용하여 선언  
- vue 파일을 import하여 해당 vue를 생성 후 설정  
  
#### package.json에서 scripts 수정
- "build": "webpack" 로 변경한 후 npm run build로 서버 스타트  
- "build": "webpack --watch"  -  코드 변경시 웹팩 자동 빌드 해줌  

#### webpack-dev-server 이용
$ npm i webpack-dev-server -D  
- 코드 변경시 새로고침 없이 웹팩 자동 빌드  
- webpack --watch 보다 업그레이드 
- package.json에서 scripts에 추가  
    - "dev": "webpack-dev-server --hot"  
- webpack.config.json output에 추가  
    - publicPath: '/dist',  

#### v-bind로 style 태그 제어
- v-bind 생략 가능  
ex) v-bind:class="state"  ===  :class="state"  
- <style scoped></style> : scoped를 붙이면 해당 컴포넌트에서만 css가 유효  
  
#### computed
- 데이터를 가공하게 되면 computed를 이용  
- 성능 최적화  
- 하나의 값을 리턴  

#### v-show  
- v-show가 true면 display: block false면 display: none  
- v-if와 비교해서 사용, v-if를 더 많이 사용한다.

#### template 태그
- 태그를 생략하고 싶을 때 사용
- template 태그 바로 아래에 template은 사용할 수 없다.
  
  
### vue-devtools  
- vue 관리하도록 크롬 브라우저 확장 프로그램  
- vue로 개발시 유용하게 관리  

### vue 라이프사이클
1. beforeCreate
2. created : 데이터들이 준비됨  
3. beforeMount
4. mounted : 화면에 보여줌  
5. beforeUpdate
6. updated : 데이터가 변경됨  
7. beforeDestroy : 메모리 누수를 방지하기 위해 clear 하기
8. destroyed : 컴포넌트 사라짐  
  

### components 
- 중복된 데이터를 공통으로 만듬
- props를 이용하여 컴포넌트 개별화
  
### props
- 부모 컴포넌트가 자식 컴포넌트에게 값을 물려주어 사용하는 것  
- props로 받은 값은 변경할 수 없고 사용만 한다.  
- props 값을 변경하는 방법 : 데이터를 변경하는 부모의 메서드를 자식에게 props로 전달  
  
### watch
- 데이터를 감시  
- 특정 동작을 수행  
- 최후의 수단으로 권장하지 않는다.  
- 배열이나 객체와 같은 참조 값은 watch 하기 어렵다.  
- 원시 값에 watch를 주로 사용  
  
### 자식 컴포넌트에서 상위 컴포넌트 데이터 접근
- this.$root.$data : 최상위 컴포넌트 데이터 접근  
- this.$parent.$data : 부모 컴포넌트 데이터 접근  
- this.$parent.$parent.$data : 조부모 컴포넌트 데이터 접근 / 연달아 버블링 가능    
- 자식 컴포넌트에서 부모/최상위 컴포넌트의 데이터 조작 가능  
  
### 배열에 값 넣기
- arr[0][0] = 'O';
  
### 화면에 그려지면서 배열에 값 넣기
ex1 )  
this.$set( arr[0], 0, 'O');  //arr[row], cell, value  
  
ex2 )  
import Vue from 'vue';  
Vue.set( arr[0], 0, 'O' );  //arr[row], cell, value  

### EventBus
- 이벤트를 중앙에서 통제 관리  
  
- EventBus.js 생성  
```  
import Vue from 'vue';  
export default new Vue(); 
```  
  
- 최상위 컴포넌트 created() 메서드에서 EventBus.$on을 사용하여 자식 컴포넌트 이벤트 제어  
```
import EventBus from './EventBus';
...생략
methods: {
    onClickTd(rowIndex, cellIndex) {    
        //생략...
    }
},
created() {
    EventBus.$on('clickTd', this.onClickTd);
},
```
  
- 자식 컴포넌트에서 최상위 컴포넌트인 on과 연결되는 emit으로 이벤트 제어  
```
import EventBus from './EventBus';
...생략
methods: {
    onClickTd() {
        ... 생략...
        EventBus.$emit('clickTd', this.rowIndex, this.cellIndex);
    },
},
```
    