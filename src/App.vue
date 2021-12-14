<template>
  <div id = "app">
    <TodoHeader></TodoHeader>
    <TodoInput
    ></TodoInput>
    <TodoList v-bind:propsdata="todoItems"></TodoList>
    <TodoFooter></TodoFooter>

  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data(){
    return{
      todoItems:[]
    }
  },
  methods:{
    // removeOneItem(todoItem, index){
    //   localStorage.removeItem(todoItem.item);//todoItem은 콘솔로 찍으면 객체값으로 들어옴.
    //   this.todoItems.splice(index, 1); 
    // },
    // toggleOneItem(todoItem, index){
    //   //todoItem.complated = !todoItem.complated;
    //   this.todoItems[index].complated = !this.todoItems[index].complated;
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
    // clearAllItems(){
    //     localStorage.clear();
    //     this.todoItems = [];
    // }
  },
    components:{
        'TodoHeader' : TodoHeader,
        'TodoInput' : TodoInput,
        'TodoList' : TodoList,
        'TodoFooter' :TodoFooter
    }
}
</script>

<style>
  body{
    text-align: center;
    background-color: #f6f6f6;
  }
  input{
    border-style: groove;
    width: 200px;
  }
  button{
    border-style: groove;
    margin-left: 10px;
  }
  .shadow{
    box-shadow: 5px 10px 10px rgba(0, 0, 0, .03);
  }
</style>