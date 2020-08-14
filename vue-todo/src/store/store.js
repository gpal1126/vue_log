import Vue from 'vue';
import Vuex from 'vuex';

//import * as getters from './getters';
//import * as mutations from './mutations';

import todoApp from './modules/todoApp';

Vue.use(Vuex);  //Vuex 플러그인 사용

/* const storage = {
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
} */

export const store = new Vuex.Store({
    //
    modules: {
        todoApp,        //todoApp: todoApp,
    },
    /* state: {
        headerText: 'TODO it!',
        todoItems: storage.fetch(),
    },
    getters,    //getters: getters,
    mutations,  //mutations: mutations */
});