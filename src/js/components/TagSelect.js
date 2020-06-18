export default {
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      current: ""
    };
  },
  methods: {
    updateModel() {
      this.$emit("input", this.value);
    },
    backspace() {
      if (!this.current) {
        this.value.splice(-1, 1);

        this.updateModel();
      }
    },
    deleteTag(i) {
      this.value.splice(i, 1);
      this.updateModel();
    },
    newTag() {
      if (this.current) {
        this.value.push(this.current);
        this.updateModel();
        this.current = "";
      }
    },
    click() {
      this.$refs.input.focus();
    }
  },
  template: `
<div class="select" @click="click">
  <span v-for="(tag,i) in value" class="select__tag">
    {{ tag }}
    <button type="button" @click="deleteTag(i)" @keydown.backspace="deleteTag(i)" class="select__tag-button material-icons">close</button>
  </span>
  <input @keyup.enter="newTag" @keydown.backspace="backspace" v-model="current" ref="input" class="select__input" />
</div>
`
};
