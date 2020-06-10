<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="msg"/>
    <Test @update="updateLen" />
  </div>
</template>

<script>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test
  },
  setup() {
    const msg = ref('Welcome to Your Vue.js App')
    const updateLen = len => {
      if (len > 0) msg.value = len
      else msg.value = 'Welcome to Your Vue.js App'
    }
    return {
      msg,
      updateLen
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
