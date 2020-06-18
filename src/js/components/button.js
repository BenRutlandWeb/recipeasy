export default {
  props: {
    to: {
      type: [Object, String, Location]
    },
    variant: {
      type: String,
      default: null
    },
    external: {
      type: Boolean
    }
  },
  computed: {
    tag() {
      return this.to ? "router-link" : "button";
    },
    classNames() {
      return {
        button: true,
        "button--primary": this.variant === "primary",
        "button--secondary": this.variant === "secondary",
        "button--outline": this.variant === "outline",
        "button--ghost": this.variant === "ghost"
      };
    },
    target() {
      return this.external ? "_blank" : null;
    },
    rel() {
      return this.external ? "external noopener noreferer" : null;
    }
  },
  template: `
<component :is="tag" :to="to" :class="classNames" :target="target" :rel="rel" v-bind="$attrs" v-on="$listeners">
  <slot name="start" />
  <span class="button__label" v-if="$slots.default">
    <slot />
  </span>
  <slot name="end" />
</component>
`
};
