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
    },
    getters:{
        storedTodoItems(state){
            return state.todoItems
        }
    },
    mutations:{
        addOneItem(state, todoItem){
            const obj = {complated: false, item:todoItem}
                console.log(todoItem);
              //저장하는 로직
                localStorage.setItem(todoItem, JSON.stringify(obj));
                state.todoItems.push(obj)
        },
        removeOneItem(state,payload){
            console.log(payload.item)
            localStorage.removeItem(payload.todoItem.item);//todoItem은 콘솔로 찍으면 객체값으로 들어옴.
            state.todoItems.splice(payload.todoItem.index, 1);
        },
        toggleOneItem(state, payload){
            console.log(state, payload)
            // payload.todoItem.complated = !payload.todoItem.complated;
            state.todoItems[payload.index].complated = !state.todoItems[payload.index].complated;
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItems(state){
            localStorage.clear();
            state.todoItems = [];
        }
    }
});