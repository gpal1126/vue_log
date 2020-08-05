# 3.숫자야구

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
- module rules에 vue 파일을 로드와 컴파일 할 수 있도록 선언  
    - vue-loader dev용 설치 : $ npm i vue-loader -D  
    - vue-template-compiler dev용 설치 : $ npm i vue-template-compiler -D  
- plugins : 모듈을 한번 더 가공  
    - vueLoaderPlugin 선언  
- output : /dist/app.js 을 자동 생성하여 출력  
  
#### 프로젝트의 핵심인 main.js 생성
- vue 환경이기 때문에 import 사용하여 선언  
- vue 파일을 import하여 해당 vue를 생성 후 설정

#### package.json에서 scripts 수정
- "build": "webpack" 로 변경한 후 npm run build로 서버 스타트  
