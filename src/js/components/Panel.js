/**
 * @todo
 * - Make panel__header a button
 */

export default {
  props: {
    label: {
      type: String,
      required: true
    },
    open: {
      type: Boolean
    }
  },
  data() {
    return {
      opened: this.open
    };
  },
  computed: {
    icon() {
      return this.opened ? "keyboard_arrow_up" : "keyboard_arrow_down";
    }
  },
  methods: {
    toggleBody() {
      this.opened = !this.opened;
    }
  },
  template: `
<div class="panel">
  <button type="button" :aria-expanded="opened" class="panel__header flex justify-between align-center button-reset" @click="toggleBody">
    <h2 class="h6">{{ label }}</h2>
    <Icon>{{ icon }}</Icon>
  </button>
  <div class="panel__body" v-if="opened">
    <slot />
  </div>
</div>
`
};
