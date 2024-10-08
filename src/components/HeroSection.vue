<template>
  <header>

    <!-- SOCIAL LINKS -->

    <div class="absolute flex gap-4 pt-8 lg:pt-32 z-10 mt-[30rem] md:mt-0">
      <a href="https://github.com/abbey-eleazer"><i class="pi pi-github text-lg md:text-3xl text-colorSecondary cursor-pointer"></i></a>
      <a href="mailto:abbeyeleazer@gmail.com"><i class="pi pi-envelope text-lg md:text-3xl  text-colorSecondary cursor-pointer"></i></a>
      <a href="https://x.com/@Abbey_Eleazer"><i class="pi pi-twitter text-lg md:text-3xl  text-colorSecondary cursor-pointer"></i></a>
    </div>

    <!-- container  -->

    <div class="absolute hidden w-[80%] lg:block border-t-4 border-colorSecondary lg:translate-y-24"></div>

    <div class=" flex flex-col-reverse lg:flex-row items-center justify-between">

      <!-- TEXT  -->
      <div class="mt-20 lg:mt-24 text-colorText font-serif">
        <div class="">
          <h2 class="text-2xl md:text-4xl font-bold font-sans mb-3 capitalize">Frontend web developer</h2>
          <h1 class="text-5xl mb-6 md:text-7xl 2xl:text-9xl font-black font-sans text-colorTertiary md:mb-12">Eleazer Abbey</h1>
        </div>
          <div class="text-sm pr-4 md:w-[40rem] md:text-lg font-sans">
            <p>I'm a Frontend web developer based in Accra, Ghana. I like to replicate designs into clean, beautiful, functional and responsive User Interfaces. I have experience building websites and web applications using HTML, CSS, SCSS, and JavaScript.</p>
          </div>
          <div class="absolute mt-5 md:mt-10 font-sans">
            <button class="bg-colorSecondary px-5 py-2.5 rounded font-bold capitalize text-colorPrimary"><a href="mailto:abbeyeleazer@gmail.com">Get In Touch</a></button>
          </div>
      </div>

      <!-- Image -->

      <div class="">
      <div class="">
        <div class="relative z-5 w-[20rem] xl:w-[31rem] h-[30rem] lg:h-[33.8rem] xl:h-[45rem] flex justify-end">
          <div class="w-[80%] bg-colorSecondary border-t-0 border-4 border-colorText">
          </div>
        </div>
        <div class="absolute flex justify-end top-[7.3rem] lg:top-[11rem] xl:w-[31rem]">
        <img class="w-[20rem] xl:w-[30rem] z-10 pr-1 " src="../../images/eleazer.png" alt="">
      </div>
      </div>
      </div>
    </div>

  
  </header>
</template>

<script setup>

</script>