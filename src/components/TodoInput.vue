<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="far fa-plus-square addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <!--
    you can use custom content here to overwrite
    default content
  -->
      <h3 slot="header">경고!
        <i class="fas fa-times closeModalBtn" @click="showModal = false" ></i>
      </h3>
      <p slot="body">할 일을 입력해주세요.!</p>
      
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
  data:function(){
  return{
    newTodoItem: '',
    showModal:false
  }
  },
  methods:{
    addTodo:function(){
      if(this.newTodoItem !==''){
        //this.$emit('addTodoItem',this.newTodoItem)
        const text = this.newTodoItem.trim();
        this.$store.commit('addOneItem',text);
        this.clearInput();
      }else{
        this.showModal = !this.showModal;
      }
    },
    clearInput:function(){
      this.newTodoItem='';

    }

  },
  components:{
    Modal: Modal
  }
}
</script>

<style scoped>
input:focus{
  outline: none;
}
.inputBox{
  background:white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn{
  color: white;
  vertical-align: middle;
}
.closeModalBtn{
  color:#42b983;
}
</style>