<template>
    <div v-if="showDialogBox">
      <div
        style="z-index: 999"
        @click="closeDialogBox"
        class="h-screen absolute bottom-0 left-0 bg-black bg-opacity-50 w-full"
      ></div>
      <div
        style="z-index: 999"
        ref="white_box"
        id="myBox"
        :class="{
          'bg-white absolute h-1/2 w-full bottom-0 inset-x-0 ':
            !optionalHeight,
          'bg-white absolute h-3/4 w-full bottom-0 inset-x-0 ':
            optionalHeight,
        }"
      >
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import anime from 'animejs/lib/anime.es.js';
  import { watch } from "vue";
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    props: {
      showDialogBox: Boolean,
      optionalHeight: {
        type: String,
        required: false,
      },
    },
    emits: ["closeDialogBox"],
    setup(props, context) {
      let closeDialogBox = () => {
        anime({
          targets: `#myBox`,
          translateY: [0, white_box.value?.clientHeight],
          easing: "easeInOutQuad",
        }).finished.then(() => {
          context.emit("closeDialogBox", !props.showDialogBox);
        });
      };
  
      let white_box = ref(null as null | HTMLDivElement);
  
      watch(white_box, () => {
        console.log(white_box.value?.clientHeight);
        if (white_box.value) {
          anime({
            targets: `#myBox`,
            translateY: [white_box.value?.clientHeight, 0],
            easing: "easeInOutQuad",
          });
        }
      });
  
      // onUpdated(() => {
      //   anime({
      //     targets: `#myBox`,
      //     translateY: [100, 50],
      //     easing: "easeInOutQuad",
      //   });
      //   console.log(white_box.value);
      // });
  
      return {
        closeDialogBox,
        white_box,
      };
    },
  });
  </script>
  
  <style scoped>
  .white-box {
    z-index: 999;
    position: absolute;
    left: 10%;
    top: 25%;
  }
  </style>
  