# vue_log

### Vue의 특징  
- PWA(Progressive Web Apps) 기반 SPA(Single Page App)  
- MVVM 패턴 : View(DOM) - ViewModel(Vue) - Model(Object)  
- Component, Router, Resource, Templates 등 구성  
- 데이터 바인딩과 화면 단위를 컴포넌트 형태로 제공  
- 컴포넌트 간의 기본 통신은 1 Way Data Flow(부모->자식) : React와 유사  
- Virtual DOM을 이용한 렌더링 방식 : React와 유사  
- 2 Way Data bindings을 제공 : Angular와 유사  
- Angular, React보다 빠르고 가벼움  
- 러닝커브가 낮고, 쉽가 접근 가능  
  
### Vue 인스턴스
- new Vue({}) : Vue 생성자로 인스턴스 생성, 옵션(data, props, computed, methods)으로 제어하여 화면 단위 생성  
- Vue.extend({}) : Vue 객체를 확장하여 재사용 가능, but 권장 안함  
ex)  
var MyComponent = Vue.extend({ ... 생략 });  
var myComponentInstance = new MyComponent();  

### vue 라이프사이클  
- Vue 객체가 생성될 때 수행  
- 라이프사이클로 수행하기 때문에 Controller를 갖고 있지 않는다.  
1. beforeCreate  
2. created : 데이터들이 준비됨  
3. beforeMount  
4. mounted : 화면에 보여줌  
5. beforeUpdate  
6. updated : 데이터가 변경됨  
7. beforeDestroy : 메모리 누수를 방지하기 위해 clear 하기  
8. destroyed : 컴포넌트 사라짐  
  

### 컴포넌트 관리
- 뷰의 단위를 쪼개어 재사용 가능  
- 데이터의 중복을 최소화  
- 유지보수가 쉽다  
- props를 이용한 컴포넌트 개별화  

### 전역 컴포넌트
ex)  
```
Vue.component('wordRelay', { 속성... })  
```
  
### 지역 컴포넌트
ex) new Vue({ components: { 태그명 : 컴포넌트의 내용 }})   
```
let cmp = {
    data: function() {
        return {};
        template: '',
    }
}
new Vue({ components: { 'word-relay': cmp }})  
```
  
### props
- 부모 자식 컴포넌트 간의 데이터 통신  
- 부모에서 자식으로 값을 전달  

### Child(같은 레벨)의 컴포넌트 간의 데이터 통신
- Child1 <=> Parent => Child2  
- Event Bus 이용  
  
### Event Bus  
- 컴포넌트 간의 데이터 통신  
ex)   
```
이벤트 발생 : $emit
import { eventBus } from './EventBus'; 
eventBus.$emit('refresh', 10);

이벤트 수신 : $on
import { eventBus } from './EventBus';
created() {
    eventBus.$on('refresh', function(data){
        console.log(data);  //10
    });
}
```

### Vue Routers 
- vue를 이용한 SPA를 제작할 때 사용하는 라우팅 라이브러리  
- npm i vue-router  
- 기본 구조 : RootUrl'/#/'{Router name}  
ex) example.com/#/user  
- '#' 태그 제외하여 기본 URL 방식으로 요청  
```
const router = new VueRouter({
    routes,
    mode: 'history' //history 모드를 추가
});
```

### Nested 라우터 
- 라우터로 화면 이동시 여러개의 컴포넌트를 동시에 렌더링  
- 컴포넌트의 구조 : Parent - Child -> 자식을 포함한 컴포넌트 렌더링  
  
  
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
  
  
