import { defineStore, acceptHMRUpdate } from "pinia";
interface DropdownState {
  dropdownItems: DropdownItem[];
  dropdownOpen: boolean;
  selected: DropdownItem[];
  searchInput: string;
  img: string;
}
interface DropdownItem {
  id: number;
  txt: string;
  imgSrc: string;
}
export const useDropDownStore = defineStore({
  id: "dropdown",
  state: (): DropdownState => ({
    //initial state
    dropdownItems: [
      { id: 1, txt: "C-3PO", imgSrc: "/images/c-3po.png" },
      { id: 2, txt: "R2-D2", imgSrc: "/images/r2-d2.png" },
      { id: 3, txt: "RoboCop", imgSrc: "/images/robo-cop.png" },
      { id: 4, txt: "Optimus Prime", imgSrc: "/images/optimus.png" },
      { id: 5, txt: "Wall-E", imgSrc: "/images/wall-e.png" },
    ],
    dropdownOpen: false,
    selected: [], //dropdown  items which is selected
    searchInput: "",
    img: "/images/robots.png",
  }),
  actions: {
    //function that opens or closes the dropdown
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    //function that adds a new dropdown item to the selected array
    addSelectedItem(item: DropdownItem) {
      if (!this.selected.some((selectedItem) => selectedItem.id === item.id)) {
        this.selected.push(item);
      } else {
        this.selected = this.selected.filter((it) => it.id !== item.id);
      }
    },
    //function removes an item from the selected array.
    removeSelectedItem(event: MouseEvent, item: DropdownItem) {
      this.selected = this.selected.filter((it) => it.id !== item.id);
      event.stopPropagation();
    },
    //function that filters dropdown items based on the input value
    filteredItems(data: DropdownItem[]) {
      return data.filter((item) =>
        item.txt.toLowerCase().includes(this.searchInput.toLowerCase())
      );
    },
    //Set an image to display when hovering over any item in the dropdown
    hoveredImg(img: string) {
      this.img = img;
      console.log(img);
    },
    //Remove an image
    leaveImg() {
      this.img = "/images/robots.png";
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDropDownStore, import.meta.hot));
}
