<template>
  <div class="w-full">
    <div
      class="flex border-2 border-periwinkle bg-white rounded p-3 mb-[18px] cursor-pointer justify-between items-center"
      @click="dropdown.toggleDropdown"
      @mouseover="dropdown.leaveImg"
    >
      <div>
        <div v-if="!dropdown.selected.length">
          <span class="text-periwinkle text-base font-semibold"
            >Add up to {{ dropdown.dropdownItems.length }} robots</span
          >
        </div>
        <div v-else class="flex flex-auto flex-wrap gap-2">
          <DropDownSelected :dropdown="dropdown" />
        </div>
      </div>
      <div>
        <span class="pointer-events-none"
          ><component
            :is="dropdown.dropdownOpen ? 'CloseSVG' : 'ArrowSVG'"
            class="w-4 h-4 [&>path]:fill-periwinkle"
            :class="{
              'pt-1': !dropdown.dropdownOpen,
            }"
        /></span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import CloseSVG from "../assets/icons/close.svg?component";
import ArrowSVG from "../assets/icons/arrow.svg?component";
import DropDownSelected from "../components/DropDownSelected.vue";
export default {
  name: "DropDownContainer",
  props: ["dropdown"],
  components: {
    CloseSVG,
    ArrowSVG,
    DropDownSelected,
  },
};
</script>
