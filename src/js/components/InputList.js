export default {
  props: {
    items: {
      type: Array,
    },
  },
  methods: {
    add() {
      this.items.push({});
    },
    remove(item) {
      this.items.splice(this.items.indexOf(item), 1);
    },
    moveUp(item) {
      let current = this.items.indexOf(item);
      if (current > 0) {
        this.items.splice(current - 1, 0, this.items.splice(current, 1)[0]);
      }
    },
    moveDown(item) {
      let current = this.items.indexOf(item);
      this.items.splice(current + 1, 0, this.items.splice(current, 1)[0]);
    },
  },
  template: `
<div class="input-list">
<div v-for="item of items" class="item">
<div>
<button type="button" @click="moveUp(item)" class="btn move">
  <span class="material-icons">arrow_drop_up</span>
</button>
<button type="button" @click="moveDown(item)" class="btn move">
  <span class="material-icons">arrow_drop_down</span>
</button>
</div>
<slot :item="item" @click="remove" />
<button type="button" @click="remove(item)" class="btn">
  <span class="material-icons">close</span>
</button>
</div>
<div class="item add">
  <button type="button" @click="add()" class="btn">
    <span class="material-icons">add</span>
  </button>
</div>
</div>
`,
};
