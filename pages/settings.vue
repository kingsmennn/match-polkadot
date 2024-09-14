<script setup lang="ts">
import { useUserStore } from '@/pinia/user';
import { AccountType } from '@/types';

definePageMeta({
  middleware: ['seller'],
  requiresAuth: true,
})
const userStore = useUserStore()
// this is used to eject users with accountType === BUYER from this page
// use-case is when SELLER account was initially here then switched to BUYER account
watch([() => userStore.accountType, () => userStore.accountId], ([accountType, accountId]) => {
  if(!accountType || !accountId) return
  if(accountType === AccountType.SELLER) return
  navigateTo('/')
})

const enableRequestByProximity = ref(false)
const updatingProximityPreference = ref(false)

// this is used to enable/disable location preference
watch(enableRequestByProximity, async (val)=>{
  updatingProximityPreference.value = true
  console.log({updatingProximityPreference: val})
  try {
    await userStore.toggleEnableLocation(val)
  } catch (error) {
    console.log(error)
  } finally {
    updatingProximityPreference.value = false
  }
})
</script>

<template>
  <div class="tw-max-w-7xl tw-mx-auto">
    <div class="tw-p-6 sm:tw-p-10">
      <h1 class="tw-text-5xl tw-font-bold tw-mt-4">
        Settings
      </h1>

      <div class="tw-mt-10 tw-py-10 tw-flex tw-flex-col tw-gap-4 tw-border-t">

        <div
          class="tw-flex tw-justify-between md:tw-items-center tw-p-2 tw-px-4
          tw-rounded-2xl tw-bg-gray-50 tw-text-2xl">
          <span class="flex-1 tw-font-bold">
            Show only requests near me
          </span>
          <span class="max-md:tw-self-start">
            <v-switch
              v-model="enableRequestByProximity"
              :loading="updatingProximityPreference && 'white'"
              hide-details="auto"
              inset
            ></v-switch>
          </span>
        </div>

      </div>
    </div>
  </div>
</template>