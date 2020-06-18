export default {
  template: `
<header class="nav-bar">
  <div class="mr-auto">
    <slot name="start" />
  </div>
  <div>
    <slot name="end" />
  </div>
</header>
`
};
