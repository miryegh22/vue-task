<template>
  <div
    class="bg-coverImg bg-no-repeat min-h-screen bg-cover flex items-center justify-end font-inter h-screen py-10 lg:py-5 px-4 gap-10 lg:gap-2 flex-col-reverse lg:justify-center lg:flex-row"
    @click="handleOutsideClick"
  >
    <div
      class="w-full md:max-w-[640px] flex flex-col items-center h-64 mx-auto"
      ref="dropdownContainer"
    >
      <DropDown />
    </div>
    <RobotsImage />
  </div>
</template>

<script lang="ts">
import DropDown from "./components/DropDown.vue";
import RobotsImage from "./components/ImageRobotContainer.vue";
import { useDropDownStore } from "./stores/dropdown";

export default {
  name: "App",
  components: {
    DropDown,
    RobotsImage,
  },
  setup() {
    const dropdown = useDropDownStore();
    return {
      dropdown,
    };
  },
  methods: {
    handleOutsideClick(event: MouseEvent) {
      if (this.dropdown.dropdownOpen) {
        if (this.$refs.dropdownContainer instanceof HTMLElement) {
          const isInsideDropdown = this.$refs.dropdownContainer.contains(
            event.target as Node | null
          );

          const isDropdownTrigger = (event.target as Element)?.closest(
            ".cursor-pointer"
          );

          if (!isInsideDropdown && !isDropdownTrigger) {
            this.dropdown.dropdownOpen = false;
          }
        }
      }
    },
  },
};
</script>
