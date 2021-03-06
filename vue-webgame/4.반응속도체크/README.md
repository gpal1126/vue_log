# 4.반응속도체크

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
  
  
#### 이전 버전 스펙 
npm i vue@2.6.10  
npm i webpack@4.35.2 webpack-cli@3.3.5 -D  
npm i vue-loader@15.7.0 -D  
npm i vue-template-compiler@2.6.10 -D  
npm i vue-style-loader@4.1.2 -D  
npm i css-loader@3.0.0 -D  
npm i webpack-dev-server@3.7.2 -D  


#### v-bind로 style 태그 제어
- v-bind 생략 가능  
ex) v-bind:class="state"  ===  :class="state"  
- <style scoped></style> : scoped를 붙이면 해당 컴포넌트에서만 css가 유효  
  
#### computed
- 데이터를 가공하게 되면 computed를 이용  
- 성능 최적화  

#### v-show  
- v-show가 true면 display: block false면 display: none  
- v-if와 비교해서 사용, v-if를 더 많이 사용한다.

#### template 태그
- 태그를 생략하고 싶을 때 사용
- template 태그 바로 아래에 template은 사용할 수 없다.