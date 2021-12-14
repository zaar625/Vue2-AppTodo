<template>
  <div>
    <transition-group name="list" tag="ul">
        <li v-for="(todoItem , index) in this.$store.state.todoItems" v-bind:key="todoItem.item" class="shadow">
          <i class="far fa-check-square checkBtn" v-bind:class="{checkBtnCompleted:todoItem.complated}" v-on:click="toggleComplate(todoItem, index)"></i>
          <span v-bind:class="{textCompleted:todoItem.complated}">{{ todoItem.item }}</span>
          <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
            <i class="far fa-trash-alt"></i>
          </span>
        </li>
    </transition-group> 
  </div>
</template>

<script>
export default {
  methods:{
    removeTodo(todoItem, index){
      // const obj ={
      //   todoItem,//todoItem : todoItem
      //   index
      // } ▽
      this.$store.commit('removeOneItem',{todoItem, index});
      // this.$emit('removeItem', todoItem, index)
      console.log(todoItem, index)
    },
    toggleComplate(todoItem,index){
      this.$store.commit('toggleOneItem',todoItem, index);
      console.log(todoItem,index)
      //this.$emit('toggleItem', todoItem, index);
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
/*리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active{
  transition: all 1s;
}
.list-enter, .list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
</style>