<template>
  <div class="h-full w-full flex justify-start items-center flex-col gap-5">
    <div
      class="h-full w-full flex justify-start items-center flex-col gap-5 overflow-auto p-5 pb-10"
    >
      <bubble
        :key="message"
        v-for="message in messages"
        :lives="message"
        :message="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aliquid? Magnam id rerum aperiam odio libero. Non totam maiores deleniti sapiente dolorum quibusdam accusamus natus optio. Id ad repellendus rerum! '"
        :user="{ userName: 'user' + message, points: message }"
      />
    </div>
    <chat-box />
    
  </div>
</template>

<script>
import bubble from './bubble.vue'
import chatBox from './chatBox.vue'

export default {
  data() {
    return {
      messages: [1, 2, 3, 4, 5]
    }
  },
  components: {
    bubble,
    chatBox
  }
}
</script>

<style>
</style>