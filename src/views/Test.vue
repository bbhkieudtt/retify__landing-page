<template>
  <div class="w-dvw h-dvh flex justify-center">
    <div class="container h-dvh flex flex-col py-6 px-container overflow-hidden gap-20">
      <header class="w-full flex items-center justify-between px-5 flex-shrink-0">
        <logo></logo>
        <h3 class="text-sm font-semibold leading-[22px]">
          Coming Soon
        </h3>
      </header>
      <main class="w-full flex-1 flex flex-col overflow-auto">
        <div class="flex flex-1 justify-between">
          <div class="flex sm:pt-20 pt-0 pl-5 flex-col gap-6">
            <h1 class="text-[52px] leading-[64px] font-semibold text-left">
              Supercharge Retail<br> Engagements with<br>
              AI-Driven Messaging
            </h1>
            <p class="text-[15px] leading-[22px] text-left">
              Turn every chat into a sale — Retify empowers retail businesses to connect, convert, and thrive.
            </p>
          </div>
          <img class="flex-shrink-0 main-image" :src="img_main" alt="Retify AI messaging illustration">
        </div>
      </main>
      <footer class="flex text-xs leading-4 font-medium justify-between items-center flex-shrink-0">
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

// *Images
import logo_img from '@/assets/imgs/logox2.png';
import img_main from '@/assets/imgs/imgx2.png';
import logo from '@/components/icon/Logo.vue'

// *Footer links
const list_item = ref([
  'Privacy Policy',
  'Cookie Policy',
  'Terms'
]);
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
  max-width: 1200px;
  margin: 0 auto;
}

.main-image {
  max-width: 416px;
  max-height: 663px;
  width: 100%;
  height: auto;
  object-fit: contain;
}


@media (max-width: 1024px) {
  .container {
    padding-left: 30px;
    padding-right: 30px;
  }
  .main-image {
    max-width: 350px;
    max-height: 558px;
  }
}

@media (max-width: 768px) {
  .container {
    padding-left: 15px;
    padding-right: 15px;
  }
  .main-image {
    max-width: 300px;
    max-height: 478px;
  }
}


@media (max-width: 640px) {
  .flex-1 {
    flex-direction: column;
    align-items: center;
  }
  .main-image {
    margin-top: 20px;
  }
  main {
    overflow-y: auto; 
    -webkit-overflow-scrolling: touch; 
  }
}

::-webkit-scrollbar {
  width: 0px; 
  height: 0px; 
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2); 
  border-radius: 10px;
}

::-webkit-scrollbar-track {
  background: transparent; 
}

</style>