<template>
  <div>
    {{ num }}
    <button @click="add">add</button>
    <hr />
    <div>
      {{ position }}
      &nbsp;&nbsp;
      <input type="text" v-model="todoItem" @keyup.enter="addTodo">
      &nbsp;&nbsp;
      <button @click="addTodo">addTodo</button>
      &nbsp;&nbsp;
      <span>todo-len: {{ todoLength }}</span>
    </div>
    <ul class="todo-list">
      <li class="todo-item" v-for="(item, index) in todoList" :key="index" @click="toggle(item)" :class="{'completed': item.completed}">
        {{ item.title }}
        <span v-if="item.completed">完成</span>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { ref, toRefs, computed, reactive, watchEffect, onMounted } from 'vue'
import useAddTodo from './addTodo'
import useMouseover from '../../Hooks/useMouseover'

export default {
  setup(props, ctx) {
    const num = ref(0)
    const add = () => {
      num.value++
    }

    const data = reactive({
      todoList: [],
      todoItem: '',
      todoLength: computed(() => {
        return data.todoList.filter(item => !item.completed).length
      })
    })

    const watch = watchEffect(() => {
      ctx.emit('update', data.todoLength)
    })

    // const addTodo = () => {
    //   if (!data.todoItem) return
    //   data.todoList.push({ title: data.todoItem, completed: false })
    //   data.todoItem = ''
    // }
    const { addTodo } = useAddTodo(data)
    const { position } = useMouseover()

    const toggle = item => {
      item.completed = !item.completed
    }
    return { num, add, ...toRefs(data), position, addTodo, toggle }
  }
}
</script>

<style>
.todo-item {
  font-size: 18px;
  line-height: 2;
  font-weight: bold;
}
.todo-item.completed {
  text-decoration: line-through;
  font-style: italic;
}
</style>
