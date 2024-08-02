<template>
  <div class="mx-auto mt-12 md:mt-32">
    <h3 class="text-colorText ml-4 capitalize text-5xl font-bold tracking-wider md:ml-40 border-t-4 border-colorSecondary pt-5 pb-12"> Projects</h3>
    <div>
   <project-one/>
   <project-two/>
   <project-three/>
   <project-four/>
   <project-five/>
    </div>
  </div>
</template>

<script setup>
import ProjectOne from './ProjectOne.vue'
import ProjectTwo from './ProjectTwo.vue'
import ProjectThree from './ProjectThree.vue'
import ProjectFour from './ProjectFour.vue'
import ProjectFive from './ProjectFive.vue'

</script>