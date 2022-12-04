<template>
  <div class="flex flex-col h-screen items-center justify-center gap-6 p-12">
    <div>
      <img src="@/assets/images/GirlOnTreePic.png" alt="" />
    </div>
    <div class="text-3xl font-semibold text-left w-full">login</div>
    <div
      v-if="error"
      class="text-sm font-semibold text-left w-full text-red-400"
    >
      {{ error }}
    </div>
    <div class="flex flex-col w-full gap-2">
      <div class="border flex items-center p-1 justify-center">
        <span class="material-icons-outlined text-primary">email</span>
        <input
          type="text"
          name="email"
          v-model="user_details.email"
          class="w-full p-2 focus:outline-none"
          placeholder="Enter email here"
        />
      </div>
      <div class="border flex items-center p-1 justify-center">
        <span class="material-icons-outlined text-primary">lock</span>
        <input
          type="password"
          name="passowrd"
          v-model="user_details.password"
          class="w-full p-2 focus:outline-none"
          placeholder="Password here"
        />
      </div>
      <div class="text-right text-xs text-info">forgot password?</div>
      <button
        @click="SignIn"
        class="btn-secondary p-2 text-white font-semibold flex justify-center"
      >
        <span v-if="!loader">Submit</span>
        <vanilla-loader v-if="loader" />
      </button>
      <div class="text-center text-sm">
        Do not have an account?
        <span class="text-info">
          <router-link to="/auth/sign-up"> Register</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VanillaLoader from '@/components/ui/vanillaLoader.vue';
import { profileSignIn } from '@/supabase/auth';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: { VanillaLoader },
  setup() {
    const router = useRouter();
    const user_details = ref({ email: '', password: '' });
    const loader = ref(false);
    const error = ref('');

    const SignIn = () => {
      loader.value = !loader.value;
      profileSignIn({
        email: user_details.value.email,
        password: user_details.value.password,
      })
        .then((val) => {
          loader.value = !loader.value;
          router.push('/Home');
        })
        .catch((e) => {
          loader.value = !loader.value;
          error.value = e;
        });
    };

    return {
      SignIn,
      user_details,
      loader,
      error,
    };
  },
});
</script>
