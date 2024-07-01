<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import Aarc from '@aarc-dev/auth-widget-vuejs';

const aarcAuthStore = Aarc.Store.useAarcAuthStore();
const showModal = aarcAuthStore.openModal;
const closeModal = aarcAuthStore.closeModal;

const config: Config = {
  aarcApiKey: 'b776f4d7-5df5-4e8c-a128-058bbe3eaace',
  appearance: {
    logoUrl:
      'https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo-thumbnail.png',
    textColor: '#FFF',
    themeColor: '#2d2d2d',
  },
  env: 'prod',
  chainId: 11155111,
  callbacks: {
    onSuccess: function (data?: any): void {},
    onError: function (data?: any): void {},
    onClose: function (): void {},
    onOpen: function (): void {},
  },
  authMethods: ['email', 'sms', 'wallet'],
  socialAuth: ['google', 'discord'],
};

aarcAuthStore.setConfig(config);
</script>

<template>
  <div>
    <div class="aarc-wrapper">
      {{
        aarcAuthStore.isConnected
          ? 'You are successfully connected!'
          : 'Fund Kit Demo with Vue.js'
      }}
    </div>
    <button @click="showModal">Open Modal</button>
  </div>
  <AarcAuthProvider
    :config="config"
    :open="aarcAuthStore.isModalOpen"
    :on-close="closeModal"
  />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
