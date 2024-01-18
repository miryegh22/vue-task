<template>
  <div class="flex flex-col w-full p-3 gap-1">
    <div class="w-full relative sm:w-1/2 self-end">
      <input
        v-model="dropdown.searchInput"
        type="text"
        class="p-2 mb-2 border border-periwinkle rounded focus:outline-none shadow-md w-full placeholder:text-periwinkle"
        placeholder="Search Robot"
      />
      <SearchSVG class="fill-blue absolute top-3 right-2" />
    </div>
    <div class="border-t-2 border-t-lavender">
      <div
        v-for="item in dropdown.filteredItems(dropdown.dropdownItems)"
        :key="item.id"
        class="cursor-pointer w-full"
        @mouseover="dropdown.hoveredImg(item.imgSrc)"
        @mouseleave="dropdown.leaveImg"
      >
        <div
          class="flex w-full items-center border-transparent border-l-2 relative"
        >
          <div
            @click="dropdown.addSelectedItem(item)"
            class="w-full flex items-center px-[11px] py-[9px] hover:bg-lavender rounded"
            :class="{ 'bg-lavender': dropdown.selected?.includes(item) }"
          >
            <div
              class="text-periwinkle text-base font-semibold flex gap-2 items-center"
            >
              <CheckSVG
                class="fill-periwinkle"
                v-if="dropdown.selected?.includes(item)"
              />{{ item.txt }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CheckSVG from "../assets/icons/check-icon.svg?component";
import SearchSVG from "../assets/icons/search.svg?component";
export default {
  name: "DropDownItems",
  props: ["dropdown"],
  components: {
    CheckSVG,
    SearchSVG,
  },
};
</script>
