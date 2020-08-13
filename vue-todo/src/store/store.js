import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);  //Vuex 플러그인 사용

const storage = {
    fetch() {
        const arr = [];
        if( localStorage.length > 0 ){
            for(let i=0; i<localStorage.length; i++){
                if( localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    //console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    //console.log(localStorage.key(i));
                }
            }
        }
        return arr;
    },
}

export const store = new Vuex.Store({
    //
    state: {
        headerText: 'TODO it!',
        todoItems: storage.fetch(),
    },
    getters: {
        storedTodoItems(state) {
            return state.todoItems;
        }
    },
    mutations: {
        addOneItem(state, todoItem){
            console.log('todoItem');
            const obj = { completed: false, item: todoItem };
            //저장하는 로직
            localStorage.setItem(todoItem, JSON.stringify(obj));    //로컬스토리지에 데이터 넣기
            state.todoItems.push(obj);   //데이터 배열에 넣기
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);  //localstorage todo item 삭제
            state.todoItems.splice(payload.index, 1);    //array todo item 삭제
        },
        toggleOneItem(state, payload) {
            //토글 값 변경
            //todoItem.completed = !todoItem.completed;
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            //로컬 스토리지의 데이터를 갱신
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItems(state) {
            localStorage.clear();   //localstorage todo all 삭제
            state.todoItems = [];    //array todo all 삭제
        },
    }
});