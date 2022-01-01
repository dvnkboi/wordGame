<template>
  <div
    :key="key"
    class="flex justify-start items-center flex-col w-full bg-gray-100 rounded-2xl shadow-xl relative overflow-hidden"
  >
    <div
      v-if="lives != null"
      class="absolute top-0 right-0 px-4 py-2 text-xs"
    >lives left {{ lives }}</div>

    <!-- ? this is top portion: user info -->
    <div
      class="flex justify-start items-center w-full gap-2 bg-gray-100 shadow-lg shadow-gray-200 rounded-2xl px-5 py-2"
    >
      <div
        class="flex justify-center items-center rounded-full bg-slate-50 h-12 w-12 overflow-hidden"
      >
        <img
          src="https://thecatapi.com/api/images/get?format=src&type=jpg"
          alt="cat"
          srcset
          class="w-full h-full object-cover"
        />
      </div>
      <div class="flex justify-start items-start flex-col">
        <div
          class="flex justify-start items-start text-lg capitalize font-semibold"
        >{{ user.userName }}</div>
        <div class="flex justify-start items-start text-base font-normal -mt-2">{{ user.points }}</div>
      </div>
    </div>
    <!-- ? this is bottom portion: msg text -->
    <div class="flex justify-start items-center w-full text-lg font-medium px-5 py-2">{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: 0,
    }
  },
  props: {
    lives: {
      type: Number,
      default: null,
    },
    user: {
      type: Object,
      default: {
        userName: 'user',
        points: 0,
      },
    },
    message: {
      type: String,
      default: '',
    },
  },
  mounded() {
    this.$nextTick(() => {
      this.key = Math.random();
    });
  }
}
</script>

<style>
</style>