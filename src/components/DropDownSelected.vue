<template>
  <div
    v-for="item in dropdown.selected"
    :key="dropdown.selected.id"
    class="flex justify-center items-center font-semibold px-3 rounded-xl bg-lavender gap-1 py-[6px]"
    @mouseover="dropdown.hoveredImg(item.imgSrc)"
    @mouseleave="dropdown.leaveImg"
    @click="dropdown.removeSelectedItem($event, item)"
  >
    <span class="text-sm text-periwinkle font-semibold">{{ item.txt }}</span>
    <div class="flex flex-auto flex-row-reverse">
      <button class="cursor-pointer">
        <CloseSVG class="w-4 h-4 stroke-periwinkle fill-periwinkle" />
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import CloseSVG from "../assets/icons/close.svg?component";

export default {
  name: "DropDownSelected",
  props: ["dropdown"],
  components: { CloseSVG },
};
</script>
