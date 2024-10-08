<template>
     <div class="flex items-center justify-evenly mx-auto mt-12 pb-10 w-[100%] md:w-[80%] md:mt-32 md:pb-24 flex-col">
    
      <div class=" w-[80%] rounded-md pb-10 md:w-[40%] md:rounded-xl object-contain overflow-hidden transform rotate-6">
    <img src="../../images/Installa.png" alt="img">
      </div>
        <div class="h-full w-full px-4 md:w-[30%] border-2 border-l-0 border-r-0 py-5 md:px-4 border-colorTertiary">
          <h4 class="text-colorText font-bold text-xl md:text-3xl border-b border-colorTertiary pb-5">Installa</h4>
          <p class="text-colorText text-sm p-2 md:text-xl md:pt-5 md:pb-5 border-b border-colorTertiary mb-5">
           Installa is an advertising conpany, which runs digital and online marketing strategies to help businesses grow.
          </p>
          <a href="https://installa-marketing.netlify.app/" class="hover:text-colorSecondary text-colorText text-sm md:text-xl">https://installa-marketing.netlify.app/</a>
          <p class="pt-4 md:pb-5 pb-2 mt-5 border-t border-colorTertiary  text-colorText text-sm md:text-xl">
            Built with: Vue 3, Tailwind Css
          </p>
        </div>
        <slot></slot>
      </div>
</template>

