export default {
  template: `
<div class="content">

  <h1>404: Page not found</h1>
  <p>The page you were looking for can't be found.</p>
  <router-link :to="{ name: 'Home' }">Home</router-link>

</div>
`,
};
