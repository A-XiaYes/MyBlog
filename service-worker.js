/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f215f2894494502e8652cb2b470e4c15"
  },
  {
    "url": "about/index.html",
    "revision": "59d74abf8bf0e1487af57a110ad977ab"
  },
  {
    "url": "assets/css/0.styles.20da6f85.css",
    "revision": "e9fe919f6f6c23a4df8416df764f2706"
  },
  {
    "url": "assets/img/1.98c2e7de.gif",
    "revision": "98c2e7de16ef3cf6bf154d36b17ad51d"
  },
  {
    "url": "assets/img/2.15482bb4.png",
    "revision": "15482bb498252ac9d05269e0aec6957d"
  },
  {
    "url": "assets/img/3.4c0ccc19.gif",
    "revision": "4c0ccc190041c40941d1ee8470576139"
  },
  {
    "url": "assets/img/4.54de9089.gif",
    "revision": "54de908907ed7cf82a759abef772c9e1"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.1565bb2c.js",
    "revision": "2eb01e43f1ccfd0d3227865751137dd2"
  },
  {
    "url": "assets/js/10.549aaa3b.js",
    "revision": "959633a19d35de18e229eecf7303dbcd"
  },
  {
    "url": "assets/js/11.77621121.js",
    "revision": "b3f3a257b62765dd224e2e6714f004d4"
  },
  {
    "url": "assets/js/12.2f2f03e3.js",
    "revision": "d59a3c1df8fe81af191d96c3d6ca334e"
  },
  {
    "url": "assets/js/13.e97f04c0.js",
    "revision": "c52299685c9d1a4709e6e05465f593d0"
  },
  {
    "url": "assets/js/14.470df16b.js",
    "revision": "b92041eabf65c7bcfb54e70e8e1cf9c5"
  },
  {
    "url": "assets/js/15.c5f58cdc.js",
    "revision": "8fa2fa26e9370fb746be3cb9f30e4400"
  },
  {
    "url": "assets/js/16.e53aee00.js",
    "revision": "5e2f41f069a3de9d9cc736cab2379186"
  },
  {
    "url": "assets/js/17.44ef6cef.js",
    "revision": "b6aa2148c02afa018208e8b1608f85c7"
  },
  {
    "url": "assets/js/18.9277f95a.js",
    "revision": "c28de1a6bae29766fa4ed6ef1dca0db6"
  },
  {
    "url": "assets/js/19.a376bd7c.js",
    "revision": "cfa7a0d4c102e8fa7bf1913b2a50aed1"
  },
  {
    "url": "assets/js/20.41cb6ecc.js",
    "revision": "055959358497b5f8e3b723b37ade4597"
  },
  {
    "url": "assets/js/3.a789637c.js",
    "revision": "4816e6c8f984c2693294b95c8802c03f"
  },
  {
    "url": "assets/js/4.79d8d562.js",
    "revision": "b3e6d16292fcbb4d1d36840e3badaee0"
  },
  {
    "url": "assets/js/5.d016e3fb.js",
    "revision": "f2e5be311dbaa9521a2084343df4471b"
  },
  {
    "url": "assets/js/6.a1bbfa5f.js",
    "revision": "69b8b3be7035cc48baad7f9a8f905c65"
  },
  {
    "url": "assets/js/7.72eb866f.js",
    "revision": "db4455fa9cd716c454dfb50df82e11ff"
  },
  {
    "url": "assets/js/8.e1e70668.js",
    "revision": "9e42fc1c864ad9bbb41f986d1da5b2af"
  },
  {
    "url": "assets/js/9.0969bc8b.js",
    "revision": "cfc23ff5c04bdfac9a0a6b3728aeabb2"
  },
  {
    "url": "assets/js/app.9a69a6ac.js",
    "revision": "293cb006f319e2497cc1cfb350715843"
  },
  {
    "url": "categories/index.html",
    "revision": "a8fc46a927fba9773fca6ecf16d2e806"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f7343887333c66011fb0f113e6d39fe8"
  },
  {
    "url": "categories/学习笔记/index.html",
    "revision": "aaea01d0aef60fe4c41bf4efdb27faf9"
  },
  {
    "url": "css/style.css",
    "revision": "2b89142b63d18d90b64d88d815c2c77c"
  },
  {
    "url": "head2.png",
    "revision": "fee2a218b075e5e09f4bd9d9e8450e1a"
  },
  {
    "url": "icons/cat128.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/cat16.png",
    "revision": "1aec0693ff6e320c0adedf185806b1ab"
  },
  {
    "url": "icons/cat48.png",
    "revision": "231db9fe2dd479a3aac7da8194bb9fd5"
  },
  {
    "url": "icons/LatteAndCat.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/LatteAndCat.svg",
    "revision": "ec9380aaccc3ef15b7150505a7c5f524"
  },
  {
    "url": "img/Attention.jpg",
    "revision": "9e09b50116237db4a9791015eb5e68f9"
  },
  {
    "url": "img/avatar.jpg",
    "revision": "b3e551cf1490253fc8c7b684ebb3d018"
  },
  {
    "url": "img/bg.svg",
    "revision": "a2d1cf1ad2becdd79823541dae101fcd"
  },
  {
    "url": "img/bg2.jpg",
    "revision": "1ef4c8b88d635ed5d21a0719fa18772f"
  },
  {
    "url": "img/logo.jpg",
    "revision": "b94234b248e7335af1cc0272f8ffa0f3"
  },
  {
    "url": "img/markImg/1.gif",
    "revision": "98c2e7de16ef3cf6bf154d36b17ad51d"
  },
  {
    "url": "img/markImg/2.png",
    "revision": "15482bb498252ac9d05269e0aec6957d"
  },
  {
    "url": "img/markImg/3.gif",
    "revision": "4c0ccc190041c40941d1ee8470576139"
  },
  {
    "url": "img/markImg/4.gif",
    "revision": "54de908907ed7cf82a759abef772c9e1"
  },
  {
    "url": "img/sijiyuni.jpg",
    "revision": "66cb9d7f2da28fa8eaa95256900ebd22"
  },
  {
    "url": "img/zhoujielun.jpg",
    "revision": "a9b017b01225f10663a331d075b425ae"
  },
  {
    "url": "index.html",
    "revision": "ca5c9dc002e174e608fd142ae344197f"
  },
  {
    "url": "js/index.js",
    "revision": "f5d63d77ef30bd1e7a892440f4b4ea1b"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "82918146f303c6c3e218a1b4f08b1200"
  },
  {
    "url": "note/Css/Css3动画属性.html",
    "revision": "a3299a3cf5a814ba5f5d8c6f57fb017c"
  },
  {
    "url": "note/Html5/Html5语义化标签.html",
    "revision": "210efb3027171db20469d665e775c82c"
  },
  {
    "url": "note/index.html",
    "revision": "bf8cf1aad12e9fe75b79d998b97971ac"
  },
  {
    "url": "note/JavaScript/浅谈this指向问题.html",
    "revision": "bd6af0f3cba25e24f94fae6e94c140b2"
  },
  {
    "url": "note/Vue/Vue中传参的多种方式.html",
    "revision": "13764a42e701270d1128dfc2f09f0114"
  },
  {
    "url": "pg4.png",
    "revision": "0bda5fbe6a6d5730fc73c584451934cd"
  },
  {
    "url": "star.png",
    "revision": "3b4fe0acecf58f9f63cae713320a5f9e"
  },
  {
    "url": "tag/Css/index.html",
    "revision": "64e215c18e3ed4e0d0e5540974d81313"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "c3e47c4d648a877d7a074948f0da88e1"
  },
  {
    "url": "tag/index.html",
    "revision": "66cc3e131cdc4eff33b2c9b4d3e0c405"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "fe3ed0e2120b43cf7dfdaa4c44617cdd"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "cefac492d2d425017703610a45dce2dd"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "683078d17695f33b301a93526166c6b4"
  },
  {
    "url": "timeline/index.html",
    "revision": "6c55c68ef731db31c5b808d236489903"
  },
  {
    "url": "views/前端/Vue-cli3中单元测试环境的搭建.html",
    "revision": "8384d17aeabe7928adcd6fe03b674804"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
