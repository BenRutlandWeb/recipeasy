if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let b={};const f=e=>s(e,r),n={module:{uri:r},exports:b,require:f};a[r]=Promise.all(i.map((e=>n[e]||f(e)))).then((e=>(c(...e),b)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/bacon-and-pea-risotto.463b38f2.js",revision:"8b1fb9ea956daf159362aff8ff729b00"},{url:"assets/belgian-waffles.52e2496a.js",revision:"0dce9a21bd3683141202cd5a902df842"},{url:"assets/blueberry-muffins.0e8d0805.js",revision:"f6b1b2a0188c9472e5e7bc5d08b8fd28"},{url:"assets/burger-bowls.7e82f063.js",revision:"5089ab864f261692e18744516c1e6b27"},{url:"assets/chicken-and-chorizo-jambalaya.8fd99fbb.js",revision:"a361434fca868adb7368ed141c1d1f98"},{url:"assets/chicken-curry.8317ae3d.js",revision:"ec10a5f9c589c733d6d47414fe5a1010"},{url:"assets/chicken-piccata.62e3fbad.js",revision:"d5864a39bf7e60648327da32f61c3c43"},{url:"assets/chicken-with-sage-and-prosciutto.1329f439.js",revision:"a15e7ef2fbf31c4f5b43ff0a17dbb6aa"},{url:"assets/chilli-con-carne.305e28ff.js",revision:"1b8ac3e5916b24f4a601c48e49b539a5"},{url:"assets/chorizo-and-mozzarella-gnocci-bake.fe7446e8.js",revision:"d8a6814742f6014d2493571fe24bd5db"},{url:"assets/creamy-salmon-pasta.078c30bd.js",revision:"f403f592e1b036ec97ed21c879b12b95"},{url:"assets/crispy-salmon-tacos.9392dbbd.js",revision:"8179f1224811dfbea0c79872e7f2b567"},{url:"assets/fish-mappas.981abf04.js",revision:"3505888689f218391bb5771f21e73ae9"},{url:"assets/frozen-raspberry-delight.00f25795.js",revision:"57135400c7295c5bd578be1c85c76b5e"},{url:"assets/garlic-butter-mussels-with-spaghetti.ff5441b1.js",revision:"e78b05ccc7518db044ba4063e1e29730"},{url:"assets/harissa-crumbed-cod-with-lentils.166c148c.js",revision:"fc64a529fc85c4e8a083bde8c980615f"},{url:"assets/healthy-beef-chow-mein.7e0c5b96.js",revision:"d1d1e162e4be93258068b0addd9a91da"},{url:"assets/honey-and-mustard-chicken.faca4caf.js",revision:"76fd5dccc33b9beddb9d02158360def3"},{url:"assets/index.098e927b.js",revision:"b29932a8cf7a6e0da94d7e4054b3cbcc"},{url:"assets/index.8ac2c0b8.css",revision:"1511852f9c82464720ea5bcaaa5b6bc3"},{url:"assets/italian-meatballs-with-mozarella.a2c22809.js",revision:"089c615766a7aff847f6c885c3eb0c2d"},{url:"assets/lemony-courgette-linguine.7e65c5c2.js",revision:"65f62e2a5bd4805446196541e8008402"},{url:"assets/mascarpone-and-lime-torte.b069b089.js",revision:"8a98390386b69570d6c06a4e5763fffa"},{url:"assets/one-pot-hunters-chicken-rice.725f6c7d.js",revision:"8a1454e5d99a8bdeff869c62430d45c9"},{url:"assets/orange-and-apricot-loaf.6d29a115.js",revision:"5fb07634435f6e5aaa7140571a6c25b2"},{url:"assets/pancakes.73425eb6.js",revision:"f14079b2f8075bdef35d58271e17baa2"},{url:"assets/peppers-with-fennel.0bcfb0c5.js",revision:"8157e748dd6164098372eb9e40b78f60"},{url:"assets/plum-crumble.8cecb9e7.js",revision:"5fae145aaaa91d51e937e8772f0e0c71"},{url:"assets/pork-with-lemon-and-pine-nuts.50612e19.js",revision:"3b829e114aac6dbf2025fca73789b25d"},{url:"assets/pork-with-tomatoes-and-red-wine.5d9cecda.js",revision:"8df1ae9267f2b0a593c6268c6f3707ca"},{url:"assets/prawn-pasta-with-rocket.4d0e2e86.js",revision:"6ce24f8996689216ae4599f1ce68e145"},{url:"assets/RecipeLayout.7f1a5866.js",revision:"ffa188fe5b0e157641ed6b617d865518"},{url:"assets/roast-chorizo-chicken.47a418bd.js",revision:"70bbbe9ecdb0d729c7b0f5d02f102320"},{url:"assets/sausage-stuffed-peppers.07f589d6.js",revision:"d5ddd9776f36875a81cf8ebbbbad378e"},{url:"assets/search.6005d7ef.js",revision:"b9418dac553839668474629e1bca44e6"},{url:"assets/smoky-chorizo-salmon.0ae63b12.js",revision:"348c37255ffe67cb4145b73361f889ff"},{url:"assets/spanish-chicken-traybake.302ec7e2.js",revision:"18e4c8795895b8360988fc2ab8075b3a"},{url:"assets/spicy-honey-salmon.9077b3ea.js",revision:"4146adc0d75605e5b92c052689cac30d"},{url:"assets/spinach-and-chickpeas.cf325498.js",revision:"ed20a07de9d8c501ae07865f3bf7204e"},{url:"assets/tarragon-chicken.cbc3698a.js",revision:"24f797b307bd3b4fcc5204a738daa73b"},{url:"assets/thyme-roasted-chicken.ee12c571.js",revision:"48ec77a43738543a31a852dfd3375091"},{url:"assets/toasties.0858ddf6.js",revision:"3e15b7fa9466a44cdf1fc918290097c5"},{url:"assets/toasties.5cf9c283.css",revision:"9aed9db4b7ef35273aea976178ff11da"},{url:"assets/torte-caprese.5fd987e7.js",revision:"0ea4b370dc15660beaae49732d80a309"},{url:"index.html",revision:"b5e98998c029d9120f268e1c5fe5408c"},{url:"bacon-and-pea-risotto.jpg",revision:"68e1860e615af21cdfb3d348c2f715f0"},{url:"belgian-waffles.jpg",revision:"7e74c6a9c161aa769a6c9a13fbd1684a"},{url:"blueberry-muffins.jpg",revision:"457c0a5a59ff8c23a06f2e2c2e25a803"},{url:"burger-bowls.jpg",revision:"604b9860eed40357d570de22230a0392"},{url:"chicken-and-chorizo-jambalaya.jpg",revision:"916ac0b47d9c2853f9d8b0401b2299e6"},{url:"chicken-curry.jpg",revision:"1459a53fcad931ca4ac01f60163505a3"},{url:"chicken-piccata.jpg",revision:"0f9b37473cf4963bb4dea0e8b8a8003a"},{url:"chicken-with-sage-and-prosciutto.jpg",revision:"c7b3b9179e702f71188f109fa5efde85"},{url:"chilli-con-carne.jpg",revision:"3c32dcab0d1a49fb6bcc544374448ae3"},{url:"chorizo-and-mozzarella-gnocchi-bake.jpg",revision:"8e364015aff90f327f11d58890e25ed9"},{url:"creamy-salmon-pasta.jpg",revision:"8115cc3eb65b711fb81c78471bafb94b"},{url:"crispy-salmon-tacos.jpg",revision:"60bbd522ad3583bb37cb7cb6d2bd5040"},{url:"favicon-512.png",revision:"ab30828388268bddb53408c89f8a02fd"},{url:"fish-mappas.jpg",revision:"8b7cfaa683117a3fed1896c53b66f130"},{url:"frozen-raspberry-delight.jpg",revision:"0ea2d9fa1592a7517841144eab78bce8"},{url:"garlic-butter-mussels-with-spaghetti.jpg",revision:"f9a3db97d4e6fe44a65308a057eed732"},{url:"harissa-crumbed-cod-and-lentils.jpg",revision:"1437618209d55cc8db6317479a946492"},{url:"healthy-beef-chow-mein.jpg",revision:"9bf7c6351381536719e41798b5dc5c92"},{url:"honey-and-mustard-chicken.jpg",revision:"4d4a2b93429cd3af2506b389b3de4f8f"},{url:"italian-meatballs-with-mozarella.jpg",revision:"f62348a54413b6d670841f88881af330"},{url:"lemony-courgette-linguine.jpg",revision:"eca0d15a9f1bd2ff3d8578f6ebc6f8ed"},{url:"mascarpone-and-lime-torte.jpg",revision:"5599b5f94269cad1950a2595e3004e4f"},{url:"one-pot-hunters-chicken-rice.jpg",revision:"0a18b26d1cabc12b0201b56c87fde316"},{url:"orange-and-apricot-loaf.jpg",revision:"56d00d0db49cfc28dfebef2b9dd126c0"},{url:"pancakes.jpg",revision:"b8d23586327d0bf10ca5d395640b38f6"},{url:"peppers-with-fennel.jpg",revision:"ba6fabb7cd4a667710f4d1642e280d62"},{url:"plum-crumble.jpg",revision:"644d9bb726804d4a8e1489393a2c7845"},{url:"pork-with-lemon-and-pine-nuts.jpg",revision:"e15f86b822aa12469c8758772e548f29"},{url:"pork-with-tomatoes-and-red-wine.jpg",revision:"f7e0613c321c07a46c3684c149a91cb9"},{url:"prawn-pasta-with-rocket.jpg",revision:"90034969f1c9f4a6e1b27c1ccbead595"},{url:"recipeasy-favicon.svg",revision:"5a880b18e5903addedace64f4a1d6f83"},{url:"recipeasy-maskable.svg",revision:"baa374c45b07b3ecf926c63577f34ba9"},{url:"roast-chorizo-chicken.jpg",revision:"653dde1905923a311fac02678d42b8ab"},{url:"sausage-stuffed-peppers.jpg",revision:"cf85014eb099811eccbf08018da1f13a"},{url:"smoky-chorizo-salmon.jpg",revision:"15573e9f7be50e7290b76be72e422016"},{url:"spanish-chicken-traybake.jpg",revision:"6ba4eb444f40f23414b9d68ab9ba96a7"},{url:"spicy-honey-salmon.jpg",revision:"dd06b576f6b1f055266307f049e2d815"},{url:"spinach-and-chickpeas.jpg",revision:"340622c393c3c4fa60bd23d86ca16198"},{url:"tarragon-chicken.jpg",revision:"f66b838999716cf451f624018df1f419"},{url:"thyme-roasted-chicken.jpg",revision:"44d31ff77823bc59f7ab2c69fbba29b9"},{url:"torte-caprese.jpg",revision:"210f748b46b76371ad73edb56992c825"},{url:"manifest.webmanifest",revision:"162c6b5b57079f53976e96dbe323bc32"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
