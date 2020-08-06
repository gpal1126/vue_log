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
  
### Nested Router 
- 특정 URL 에서 1개의 컴포넌트에 여러 개의 하위 컴포넌트를 갖는 것  
- 라우터로 화면 이동시 여러개의 컴포넌트를 동시에 렌더링  
- 컴포넌트의 구조 : Parent - Child -> 자식을 포함한 컴포넌트 렌더링  
  
### Named Views
- 특정 URL 에서 여러 개의 컴포넌트를 쪼개진 뷰 단위로 렌더링 하는 것  
- 라우터로 특정 URL로 이동시, 해당하는 여러개의 컴포너트를 동시에 렌더링  
- 각 컴포넌트에 해당하는 name 속성과 router-view 지정  
```
<div id="root">
    <router-view name="nestedHeader"></router-view>
    <router-view></router-view>
</div>

{
    path: '/home',
    //Named Router
    components: {
        nestedHeader: AppHeader,
        default: Body,
    }
}
```
  
### Vue Templates
- 화면의 요소들, 함수, 데이터 속성을 Templates에 포함  
- DOM의 요소와 vue 인스턴스를 매핑할 수 있는 HTML Templates 사용  
- Virtual DOM을 사용하여 Template 렌더링  
- DOM 조작 최소화 -> 성능 부하 최소화  
- render function 직접 구현 가능  
  
### Attributes
- HTML Attributes를 vue의 변수와 연결할 때 v-bind 사용  

### JS Expressions
- {{}} 안에 javascript 표현식도 가능  
```
<div>{{ number+1 }}</div>   <!-- 지향 -->
<div>{{ message.split('').reverse('').join('') }}</div>     <!-- 권장 안함 -->
<div>{{ if( chk ) return  }}</div>  <!-- 오류 -->
```

### Directives 
- v- 접두사를 붙인 attributes, javascript 표현식  
- : 을 붙여 인자를 받음  
```
<p v-if="seen">Now you see me</p>
<!-- : 뒤에 선언한 href 인자를 받아 url 값과 매핑 -->
<a v-bind:href="url"></a>
<!-- click 이벤트를 받아 vue로 넘김 -->
<a v-on:click="doSomething">
```

### Filters 
- 텍스트의 형식을 편하게 바꿀 수 있도록 필터링  
- | 을 이용하여 여러개의 필터를 적용 가능  
```
<!-- message에 표시될 문자에 capitalize 필터 적용 -->
{{ message | capitalize }}

new Vue({
    filters: {
        capitalize: function(val) { //첫 글자를 대문자로 변경
            if( !val ) return ''
            val = val.toString();
            return val.charAt(0).toUpperCase() + val.slice(1);
        }
    },
});
```

### Data Binding
- DOM 기반 HTML Template에 vue 데이터 바인딩 방법  
    - Interpolation(값 대입)  
    - Binding Expression(값 연결)  
    - Directives(디렉티브 사용)  
  
### Interpolation - 값 대입
- Mustache '{{}}' 사용  
```
<span>Message: {{ msg }}</span>
<span v-once>This will never change: {{ msg }}</span>
<div id="item-{{ id }}"></div>
```
  
### Binding Expression - 값 연결
- {{}} 를 이용하여 데이터 바인딩  
```
<div>{{ number+1 }}</div>   <!-- 지향 -->
<div>{{ message.split('').reverse('').join('') }}</div>     <!-- 권장 안함 -->
<div>{{ if( chk ) return  }}</div>  <!-- 오류 -->
```
- vue에 내장된 Filter를 {{}} 안에 사용  
```
{{ message | capitalize }}
{{ message | capitalize | upcapitalize }}   //여러개 필터 가능
```
  
### Directives 
- v- 접두사를 붙인 attributes, javascript 표현식  
- : 을 붙여 인자를 받음  
```
<!-- login의 결과에 따라 p가 존재 or 미존재 -->
<p v-if="login">Hello</p>
<!-- click={{doSomething}} 와 같은 역할 -->
<a v-on:click="doSomething">
<a @click="doSomething">
```
  
### class Binding
- class Binding 방법  
    - 1) class="{{ className }}"  
    - 2) v-bind:class  
- class 속성과 v-bind:class 속성 동시 사용 가능  
```
<div class="static" v-bind:class="{ 'class-a': isA, 'class-b': isB }"></div>
<scirpt>
    data: {
        isA : true,
        isB : false,
    }
</script>
// 결과 값
<div class="static class-a"></div>
``` 

- Array 구문도 사용 가능  
```
<div v-bind:class="[classA, classB]">
<script>
    data: {
        classA: 'class-a',
        classB: 'class-b'
    }
</script>
```
  
### Vue 싱글파일 컴포넌트  
- .vue 파일에서 html, js, css 관리  
  
### vue-loader 
- 브라우저가 .vue 파일을 렌더할 수 있는 파일들로 변환  

### Vue Development Workflow
- vue cli로 webpack 설정이 되어있는 프로젝트 생성  
```
npm i -g vue-cli
vue init webpack-simple
npm i
npm run dev
```
  
  
### 데이터 관리 
- v-bind : HTML Attributes를 Vue의 변수와 연결할 때 사용  
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
  
  
