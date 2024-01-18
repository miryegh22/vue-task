<template>
  <div class="max-h-[35vh] lg:max-h-[70vh] h-full w-full lg:w-[40%]">
    <img :src="getDynamicImage()" alt="" class="h-full object-contain w-full" />
  </div>
</template>

<script lang="ts">
import { useDropDownStore } from "../stores/dropdown";

export default {
  name: "RobotsImage",
  setup() {
    const dropdown = useDropDownStore();

    // Method to get the dynamic image source
    const getDynamicImage = () => {
      return dropdown.img;
    };

    return {
      dropdown,
      getDynamicImage,
    };
  },
};
</script>
