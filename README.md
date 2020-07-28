# vue-webgame

### 데이터 관리 
- html의 v-if, v-else, v-model, v-on, ref, v-for, v-bind, v-show 속성을 이용  
- 변하는 값은 Vue 객체에서 data 속성으로 나타낸다.  

### methods를 이용한 이벤트 처리 
- v-on:click, v-on:submit  
- Vue 객체에서 data 속성에 변화를 줄 수 있다.  

### computed를 이용한 변경된 데이터 관리
- 데이터를 가공하게 되면 computed를 이용  
- 성능 최적화  
- 하나의 값을 리턴  
  
  
### 컴포넌트 관리
- 데이터의 중복을 최소화  
- 유지보수가 쉽다  
- props를 이용한 컴포넌트 개별화  
  
  
### 웹팩
- 다수의 스크립트를 하나로 모아 관리해준다!  

### webpack.config 설정
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
  

### vue-devtools  
- vue 개발시 유용하게 관리  
  

### Case 표현법
#### PascalCase
- 단어의 첫글자를 대문자로 표현  
#### camelCase  : js에서는 카멜 케이스로 자동 변환
- 첫 단어의 첫글자는 소문자 나머지 단어의 첫글자를 대문자로 표현  
#### kebab-case : html 속성은 케밥 케이스로 사용
- 단어사이에 하이픈(-)을 붙여 표현  
  

### vue 라이프사이클  
1. beforeCreate
2. created : 데이터들이 준비됨  
3. beforeMount
4. mounted : 화면에 보여줌  
5. beforeUpdate
6. updated : 데이터가 변경됨  
7. beforeDestroy : 메모리 누수를 방지하기 위해 clear 하기
8. destroyed : 컴포넌트 사라짐  
