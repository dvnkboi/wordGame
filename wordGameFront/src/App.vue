<template>
  <div class="flex p-10 h-screen w-screen justify-center items-center gap-5">
    <div class="w-2/12 bg-gray-50 shadow-2xl rounded-3xl h-full"></div>
    <div class="w-7/12 bg-gray-50 shadow-2xl rounded-3xl h-full">
      <Game />
    </div>
    <div class="w-3/12 bg-gray-50 shadow-2xl rounded-3xl h-full">
      <Chat />
    </div>
  </div>
</template>

<script>
import Chat from './components/chat.vue'
import Game from './components/game.vue'

export default {
  components: {
    Chat,
    Game
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>  