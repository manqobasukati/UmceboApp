<template>
  <div class="flex flex-col h-screen items-center justify-center gap-6 p-12">
    <div>
      <img src="@/assets/images/GirlOnTreePic.png" alt="" />
    </div>
    <div class="text-3xl font-semibold text-left w-full">Sign Up/
      <span class="text-lg text-gray-400">{{activeSlide}}</span>
    </div>
    <swiper
      @slideChange="onSlideChange"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="flex flex-col w-full gap-2">
          <div class="border flex items-center p-1 justify-center">
            <span class="material-icons-outlined text-primary">person</span>
            <input
              type="text"
              class="w-full p-2 focus:outline-none"
              placeholder="Enter Firstname"
            />
          </div>
          <div class="border flex items-center p-1 justify-center">
            <span class="material-icons-outlined text-primary">lock</span>
            <input
              type="text"
              class="w-full p-2 focus:outline-none"
              placeholder="Enter LastName"
            />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex flex-col w-full gap-2">
          <div class="border flex items-center p-1 justify-center">
            <span class="material-icons-outlined text-primary">email</span>
            <input
              type="text"
              class="w-full p-2 focus:outline-none"
              placeholder="Enter Email"
            />
          </div>
          <div class="border flex items-center p-1 justify-center">
            <span class="material-icons-outlined text-primary">phone</span>
            <input
              type="text"
              class="w-full p-2 focus:outline-none"
              placeholder="Enter PhoneNumber"
            />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
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
            <input
              type="text"
              class="w-full p-2 focus:outline-none"
              placeholder="Password here"
            />
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div>Already have any account? <router-link to="/auth/sign-in" class="text-info"> Login</router-link></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import type { Ref } from 'vue';

import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import type { SwiperEvents, SwiperOptions } from 'swiper/types';

export default defineComponent({
  setup() {
    const activeSlide  = ref("Personal");
    const slides: Ref<{ [name: number]: string }> = ref({
      0: 'Personal',
      1: 'Contact',
      2: 'Passwords',
    });
    const onSlideChange = (slide: any) => {
      activeSlide.value = slides.value[slide.realIndex as number];
    };
    return {
      modules: [Pagination],
      onSlideChange,
      activeSlide
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
});
</script>

<style scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 35%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
