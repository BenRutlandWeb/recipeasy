if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let d={};const f=e=>a(e,c),b={module:{uri:c},exports:d,require:f};s[c]=Promise.all(i.map((e=>b[e]||f(e)))).then((e=>(r(...e),d)))}}define(["./workbox-6cd28afd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/blueberry-muffins.935d8cb3.js",revision:"57bd1cfa1ebf9eb00591f58dc3fd2756"},{url:"assets/burger-bowls.2acba327.js",revision:"41206c40b557c9512e9386c2c090c59a"},{url:"assets/chicken-with-sage-and-prosciutto.726d237c.js",revision:"f12d53184d58d5b1bdad9fb91d03b97c"},{url:"assets/chilli-con-carne.72b72114.js",revision:"1b95621cd520613c90e0437c6d7c4875"},{url:"assets/crispy-salmon-tacos.c7e246f6.js",revision:"0f5aecc892a617b8a1591245e320b66a"},{url:"assets/fish-mappas.0b4fc6fe.js",revision:"99e8c1a374bb4c6e2a08cbc4cd8fe898"},{url:"assets/garlic-butter-mussels-with-spaghetti.08290808.js",revision:"a8c928f333f627106770b923ccbca1d9"},{url:"assets/harissa-crumbed-cod-with-lentils.49d32b4e.js",revision:"9977d09aed0ba4fdf402105a1e83b548"},{url:"assets/honey-and-mustard-chicken.d9da3c00.js",revision:"f29013ea21edf2872c330ed4f3615614"},{url:"assets/index.30b99ef1.css",revision:"7343671e769d42f9230f6c3f4cb78fb8"},{url:"assets/index.783d7fb7.js",revision:"48f5d7f5b3226dfd04da337e5fad71e1"},{url:"assets/italian-meatballs-with-mozarella.117d789d.js",revision:"fb165dd0532e0d6b6d06875dba480d62"},{url:"assets/lemony-courgette-linguine.a4617c35.js",revision:"55a73d6efefaa20d1905a92a91a88911"},{url:"assets/mascarpone-and-lime-torte.f3495fad.js",revision:"b6e80f6c209ee4db194f72e797b6342f"},{url:"assets/orange-and-apricot-loaf.94bf39eb.js",revision:"7fc85b8bdc41de4f6bdb473d8d8884ae"},{url:"assets/pancakes.fd921f72.js",revision:"209785bf9dcb6042d5c69a778212e09d"},{url:"assets/peppers-with-fennel.9f942a93.js",revision:"5d6ef3c6b95041cf9e01132bc5109cdd"},{url:"assets/plum-crumble.e96d5d03.js",revision:"ddc1e29c6f5b17201d3b0fb52458aaa8"},{url:"assets/pork-with-tomatoes-and-red-wine.ecbf3e51.js",revision:"01e33673dfca9c2393f889aba45753ef"},{url:"assets/prawn-pasta-with-rocket.7aa780d2.js",revision:"50f0ef493a758b37c31d1f04d7e463d4"},{url:"assets/RecipeLayout.e3cb668e.js",revision:"b2cf54ab41ddde231d5413906100f4ea"},{url:"assets/roast-chorizo-chicken.815c5c70.js",revision:"b9f4fcd46d12ffaf165639ff73c653f3"},{url:"assets/search.52b14744.js",revision:"1d0f9d01775c15d5124ffd82e259a620"},{url:"assets/smoky-chorizo-salmon.0a71e247.js",revision:"92ef9bae506cf44f99d80078e64fcb17"},{url:"assets/spanish-chicken-traybake.29753756.js",revision:"f6f111933abf1bba4aed9077bc0e74e4"},{url:"assets/tarragon-chicken.01bc39cf.js",revision:"f6655c63555e0760adf04c5275e4c480"},{url:"assets/thyme-roasted-chicken.aaf82781.js",revision:"f9dfc8b9c913878a87385b4acd481019"},{url:"assets/torte-caprese.bda94c28.js",revision:"fa4595193f96aa4541cdd4737810e5be"},{url:"assets/vendor.4c1bcd87.js",revision:"303bf68dbb0cf99ced00dc7153c44f14"},{url:"index.html",revision:"4abd36b3d2cff613347c123ddd74f1a1"},{url:"blueberry-muffins.jpg",revision:"457c0a5a59ff8c23a06f2e2c2e25a803"},{url:"burger-bowls.jpg",revision:"604b9860eed40357d570de22230a0392"},{url:"chicken-with-sage-and-prosciutto.jpg",revision:"c7b3b9179e702f71188f109fa5efde85"},{url:"chilli-con-carne.jpg",revision:"3c32dcab0d1a49fb6bcc544374448ae3"},{url:"crispy-salmon-tacos.jpg",revision:"60bbd522ad3583bb37cb7cb6d2bd5040"},{url:"favicon-512.png",revision:"ab30828388268bddb53408c89f8a02fd"},{url:"fish-mappas.jpg",revision:"8b7cfaa683117a3fed1896c53b66f130"},{url:"garlic-butter-mussels-with-spaghetti.jpg",revision:"f9a3db97d4e6fe44a65308a057eed732"},{url:"harissa-crumbed-cod-and-lentils.jpg",revision:"1437618209d55cc8db6317479a946492"},{url:"honey-and-mustard-chicken.jpg",revision:"4d4a2b93429cd3af2506b389b3de4f8f"},{url:"italian-meatballs-with-mozarella.jpg",revision:"f62348a54413b6d670841f88881af330"},{url:"lemony-courgette-linguine.jpg",revision:"eca0d15a9f1bd2ff3d8578f6ebc6f8ed"},{url:"mascarpone-and-lime-torte.jpg",revision:"5599b5f94269cad1950a2595e3004e4f"},{url:"orange-and-apricot-loaf.jpg",revision:"56d00d0db49cfc28dfebef2b9dd126c0"},{url:"pancakes.jpg",revision:"b8d23586327d0bf10ca5d395640b38f6"},{url:"peppers-with-fennel.jpg",revision:"ba6fabb7cd4a667710f4d1642e280d62"},{url:"plum-crumble.jpg",revision:"644d9bb726804d4a8e1489393a2c7845"},{url:"pork-with-tomatoes-and-red-wine.jpg",revision:"f7e0613c321c07a46c3684c149a91cb9"},{url:"prawn-pasta-with-rocket.jpg",revision:"90034969f1c9f4a6e1b27c1ccbead595"},{url:"recipeasy-favicon.svg",revision:"5a880b18e5903addedace64f4a1d6f83"},{url:"recipeasy-maskable.svg",revision:"baa374c45b07b3ecf926c63577f34ba9"},{url:"roast-chorizo-chicken.jpg",revision:"653dde1905923a311fac02678d42b8ab"},{url:"smoky-chorizo-salmon.jpg",revision:"15573e9f7be50e7290b76be72e422016"},{url:"spanish-chicken-traybake.jpg",revision:"6ba4eb444f40f23414b9d68ab9ba96a7"},{url:"tarragon-chicken.jpg",revision:"f66b838999716cf451f624018df1f419"},{url:"thyme-roasted-chicken.jpg",revision:"44d31ff77823bc59f7ab2c69fbba29b9"},{url:"torte-caprese.jpg",revision:"210f748b46b76371ad73edb56992c825"},{url:"manifest.webmanifest",revision:"162c6b5b57079f53976e96dbe323bc32"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
