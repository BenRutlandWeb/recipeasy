import rtlMirror from "../mixins/rtlMirror.js";

export default {
  mixins: [rtlMirror],
  props: {
    fluid: {
      type: Boolean
    },
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  template: `
<img :class="[{'rtl-mirror':rtlMirror,'img-fluid':fluid}]" :src="src" :alt="alt"  />
`
};
