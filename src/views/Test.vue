<template>
    <div class="w-dvw h-dvh flex justify-center">
      <div class="container h-dvh flex flex-col py-6 px-container overflow-hidden gap-20">
        <header class="w-full flex items-center justify-between px-5">
          <img :src="logo_img" alt="Retify logo">
          <h3 class="text-sm font-semibold leading-[22px]">
            Coming Soon
          </h3>
        </header>
        <main class="w-full h-full flex flex-col overflow-hidden">
          <div class="flex flex-1 justify-between">
            <div class="flex pt-20 pl-5 flex-col gap-6">
              <h1 class="text-[52px] leading-[64px] font-semibold text-left">
                Supercharge Retail<br> Engagements with<br>
                AI-Driven Messaging
              </h1>
              <p class="text-[15px] leading-[22px] text-left">
                Turn every chat into a sale — Retify empowers retail businesses to connect, convert, and thrive.
              </p>
            </div>
            <img class="flex-shrink-0" :src="img_main" alt="Retify AI messaging illustration">
          </div>
        </main>
        <footer class="flex text-[12px] leading-[12px] font-medium justify-between items-center flex-shrink-0">
          <p>© Retify 2025</p>
          <div class="flex gap-3">
            <a v-for="item in list_item" :key="item" href="#" class="hover:underline">{{ item }}</a>
          </div>
        </footer>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // Images
  import logo_img from '@/assets/imgs/logo_img.png';
  import img_main from '@/assets/imgs/img_main.png';
  
  // Footer links
  const list_item = ref([
    'Privacy Policy',
    'Cookie Policy',
    'Terms'
  ]);
  </script>
  
  <style scoped lang="scss">
  .container {
    width: 80%;
    padding-left: 150px;
    padding-right: 150px;
  }
  </style>