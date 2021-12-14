<template>
  <div>
    <ul>
      <li v-for="(todoItem , index) in propsdata" v-bind:key="todoItem.item" class="shadow">
        <i class="far fa-check-square checkBtn" v-bind:class="{checkBtnCompleted:todoItem.complated}" v-on:click="toggleComplate(todoItem, index)"></i>
        <span v-bind:class="{textCompleted:todoItem.complated}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="far fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['propsdata'],
  methods:{
    removeTodo:function(todoItem, index){
      console.log(todoItem, index)
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1); 
    },
    toggleComplate:function(todoItem,index){
      console.log(todoItem,index)
      todoItem.complated = !todoItem.complated
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    }
  },
}
</script>

<style scoped>
ul{
  /* 점 없애기 */
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li{
  display: flex;
  min-height: 50px;
  height: 50px;
  margin: 0.25rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
  align-items: center;
}
.checkBtn{
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted{
  color: #b3adad;
}
.textCompleted{
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn{
  margin-left: auto;
  color: #de4343;
}
</style>