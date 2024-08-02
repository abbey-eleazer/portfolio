

<template>
  <div class="flex items-center justify-evenly mx-auto mt-12 pb-10 w-[100%] md:w-[80%] md:mt-32 md:pb-24 flex-col">
 
   <div class=" w-[80%] rounded-md pb-10 md:w-[40%] md:rounded-xl object-contain overflow-hidden transform rotate-6">
 <img src="../../images/gams-and-lams.png" alt="">
   </div>
     <div class="h-full w-full px-4 md:w-[30%] border-2 border-l-0 border-r-0 py-5 md:px-4 border-colorTertiary">
       <h4 class="text-colorText font-bold text-xl md:text-3xl border-b border-colorTertiary pb-5">Gams & Lams Painting & Decorating</h4>
       <p class="text-colorText text-sm p-2 md:text-xl md:pt-5 md:pb-5 border-b border-colorTertiary mb-5">
        A website that helps you simplify your bulky url's into simple and short url.
       </p>
       <a href="https://gams-and-lams-painting-and-decorating.netlify.app" class="hover:text-colorSecondary text-colorText text-sm md:text-xl">https://gams-and-lams-painting-and-decorating.netlify.app</a>
       <p class="pt-4 md:pb-5 pb-2 mt-5 border-t border-colorTertiary  text-colorText text-sm md:text-xl">
         Built with: Tailwind Css
       </p>
     </div>
     <slot></slot>
   </div>
</template>


