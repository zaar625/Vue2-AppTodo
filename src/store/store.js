import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    //fetch:function(){}
    fetch(){
        const arr = [];
        if(localStorage.length > 0){
            for(let i = 0; i < localStorage.length; i ++){
                if(localStorage.key(i) !== "loglevel:webpack-dev-server"){
                    // localStorage.getItem(localStorage.key(i));
                    // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))))
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    // this.todoItems.push(localStorage.key(i))
                }
            }
        }
        return arr;
    },

}

export const store = new Vuex.Store({
    state:{
        todoItems:storage.fetch()
    }
});