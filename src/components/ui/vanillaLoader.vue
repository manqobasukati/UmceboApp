<template>
  <div class="loader w-6 h-6"></div>
</template>

<style scoped>
.loader {
  /* position: absolute;
    top: 50%;
    left: 15%; */
  border: 2px solid #f3f3f3; /* Light grey */
  border-top: 2px solid #39393a; /* Blue */
  border-radius: 50%;
  /* width: 80px;
    height: 80px; */
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
