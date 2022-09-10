<template>
  <div class="w-screen h-screen">
    <div class="h-1/4 w-full bg-primary p-10">
      <div class="flex flex-col h-full bg-white justify-between p-2">
        <icon-detail-horizontal
          v-for="(user, key) in currentUserDetails"
          :key="key"
          :icon="iconsMapper[key]"
          :detail="user"
        />
      </div>
    </div>
    <div class="h-3/4 w-full p-4">
      <div class="grid grid-cols-3 justify-center">
        <icon-detail-vertical
          v-for="(service, key) in currentUserServices"
          :key="key"
          :detail="service"
          :icon="iconsMapper[service]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import IconDetailHorizontal from '@/components/ui/IconDetailHorizontal..vue';
import { useCurrentUserDetails } from '@/composables/CurrentUserDetails';
import { useCurrentUserServices } from '@/composables/CurrentUserServices';

import { defineComponent } from 'vue';

import { iconsMapper } from '@/helpers/icons';
import type { User } from '@/models/User.model';
import IconDetailVertical from '@/components/ui/IconDetailVertical.vue';

export default defineComponent({
  components: { IconDetailHorizontal, IconDetailVertical },
  setup() {
    const currentUserDetails: Partial<User> = useCurrentUserDetails();
    const currentUserServices = useCurrentUserServices();

    return {
      currentUserDetails,
      iconsMapper,
      currentUserServices,
    };
  },
});
</script>

function useCurrentUserServices() { throw new Error('Function not
implemented.'); }
