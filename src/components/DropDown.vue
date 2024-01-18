<template>
  <div class="flex flex-col items-center relative w-full">
    <DropDownContainer :dropdown="dropdown" />
    <div
      v-if="dropdown.dropdownOpen"
      class="absolute shadow top-[100%] bg-white z-40 w-full left-0 rounded max-h-select overflow-y-auto border-2 border-periwinkle dropdownitem max-h-[40vh] sm:max-h-max"
    >
      <DropDownItems :dropdown="dropdown" />
    </div>
  </div>
</template>
<script lang="ts">
import DropDownItems from "./DropDownItems.vue";
import DropDownContainer from "./DropDownContainer.vue";
import { useDropDownStore } from "../stores/dropdown";
export default {
  name: "DropDown",
  props: ["dropdown"],
  components: { DropDownItems, DropDownContainer },
  setup() {
    const dropdown = useDropDownStore();
    return {
      dropdown,
    };
  },
};
</script>
