<template>
  <div class="flex flex-col h-screen items-center justify-center gap-6 p-12">
    <div>
      <img src="@/assets/images/GirlOnTreePic.png" alt="" />
    </div>
    <div class="text-3xl font-semibold text-left w-full">login</div>
    <div class="flex flex-col w-full gap-2">
      <div class="border flex items-center p-1 justify-center">
        <span class="material-icons-outlined text-primary">email</span>
        <input
          type="text"
          class="w-full p-2 focus:outline-none"
          placeholder="Enter email here"
        />
      </div>
      <div class="border flex items-center p-1 justify-center">
        <span class="material-icons-outlined text-primary">lock</span>
        <input type="text" class="w-full p-2 focus:outline-none" placeholder="Password here" />
      </div>
      <div class="text-right text-xs text-info">forgot password?</div>
      <button class="btn-secondary p-2 text-white font-semibold">Submit</button>
      <div class="text-center text-sm">Do not have an account? <span class="text-info">
        <router-link to="/auth/sign-up"> Register</router-link>
        </span></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {},
});
</script>
