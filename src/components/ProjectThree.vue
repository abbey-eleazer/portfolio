
<script setup>
</script>

<template>
     <div class=" flex flex-col lg:flex-row items-center lg:gap-24 mx-auto mt-12 pb-10 w-[100%]  md:mt-32 md:pb-24 ">
    
      <div class=" w-[100%] pb-10 px-5 lg:px-0 rotate-6">
    <img class="rounded-md" src="../../images/gams-and-lams.png" alt="img">
      </div>

      <!-- Text  -->
        <div class="h-full w-full px-4 border-2 border-l-0 border-r-0 py-5 md:px-4 border-colorTertiary">

          <h4 class="text-colorText font-bold text-xl md:text-3xl border-b border-colorTertiary pb-5">Gams & Lams Painting & Decorating</h4>
          <p class="text-colorText text-sm p-2 md:text-xl md:pt-5 md:pb-5 border-b border-colorTertiary mb-5">
            A website that helps you simplify your bulky url's into simple and short url.
          </p>
          <a href="https://gams-and-lams-painting-and-decorating.netlify.app" class="hover:text-colorSecondary text-colorText text-sm md:text-xl">https://gams-and-lams-painting-and-decorating.netlify.app</a>
          <p class="pt-4 md:pb-5 pb-2 mt-5 border-t border-colorTertiary  text-colorText text-sm md:text-xl">
            Built with: Vue 3, Tailwind Css
          </p>
        </div>
        <slot></slot>
      </div>
    
</template>



