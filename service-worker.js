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
    "revision": "cdab5f0e8f86c5320298f7e80618fb77"
  },
  {
    "url": "about/index.html",
    "revision": "aee61294bb0200e0e7ffd26b11073bf2"
  },
  {
    "url": "assets/css/0.styles.b4c626fe.css",
    "revision": "2b1611d09eda1b4c393ceb8aff8099cb"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/js/1.1fd0a3de.js",
    "revision": "6497384992bcde94b2db0d1e663ebf81"
  },
  {
    "url": "assets/js/10.8af2c603.js",
    "revision": "a3660e78ae8c135f0d80067f5505f437"
  },
  {
    "url": "assets/js/11.b457525a.js",
    "revision": "cf28ce1e2aff598d02c17a07c5cd70d2"
  },
  {
    "url": "assets/js/12.8a2e5ce8.js",
    "revision": "adf961b0787856d728d813a75ab76fc3"
  },
  {
    "url": "assets/js/13.1ecc3f2f.js",
    "revision": "e108988ecce88b86bf77654987decea9"
  },
  {
    "url": "assets/js/14.87f37343.js",
    "revision": "ef3455c7ced4dd55f09ba71091b805b1"
  },
  {
    "url": "assets/js/15.4aea6b44.js",
    "revision": "0c902aacb14aa09c5103853732df56c3"
  },
  {
    "url": "assets/js/16.91963184.js",
    "revision": "35d93e0e0c974cc533ce018836f894c6"
  },
  {
    "url": "assets/js/17.649e8c91.js",
    "revision": "98d6bb12ddd942c158d802cd439a2f24"
  },
  {
    "url": "assets/js/18.45586725.js",
    "revision": "70e0f4ce7f494ec3fdd018f8101c85fc"
  },
  {
    "url": "assets/js/3.aa018402.js",
    "revision": "46c76a8d56a54533d29836a602c9d1ac"
  },
  {
    "url": "assets/js/4.ccd35c30.js",
    "revision": "a71059a1ad9d7d8779575cfea16d1515"
  },
  {
    "url": "assets/js/5.4fcfbf35.js",
    "revision": "595ec65893a0f34a15582ff7f5e19669"
  },
  {
    "url": "assets/js/6.79e95b88.js",
    "revision": "1bc67005af62ac414a285295b0293de0"
  },
  {
    "url": "assets/js/7.8fc47fd5.js",
    "revision": "b7e72d6ec27b913f0453506a51f573ef"
  },
  {
    "url": "assets/js/8.09616e8d.js",
    "revision": "e892e33f47140b5bcb2f07c489cc0918"
  },
  {
    "url": "assets/js/9.c75d7bd4.js",
    "revision": "bace4f604427bd2bd87bd820b524f0b3"
  },
  {
    "url": "assets/js/app.aed96928.js",
    "revision": "4653242ec62b76e7774802267a7a73fb"
  },
  {
    "url": "categories/index.html",
    "revision": "c05532d6a1bc317e9f0058ba1036f6b8"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "4b235dfbeeadc0c4dfbbadd48ccf3514"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "e27cc1b89ab4d7bc4935d7f54b5aaf41"
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
    "url": "img/sijiyuni.jpg",
    "revision": "66cb9d7f2da28fa8eaa95256900ebd22"
  },
  {
    "url": "img/zhoujielun.jpg",
    "revision": "a9b017b01225f10663a331d075b425ae"
  },
  {
    "url": "index.html",
    "revision": "c268fb15d4a82678713d15c45ba1487e"
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
    "url": "note/index.html",
    "revision": "3939dc4eb1d7a88b5c9a075c2af6686c"
  },
  {
    "url": "note/JavaScript/js原型链、闭包.html",
    "revision": "4819b2cc26c8bb5a605f92c79c0c8ba9"
  },
  {
    "url": "note/JavaScript/js数据类型.html",
    "revision": "738148035ae5bdd30bb93611d3d2910c"
  },
  {
    "url": "note/JavaScript/浅谈this指向问题.html",
    "revision": "728aedfaa722417283f00b495a850add"
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
    "url": "tag/index.html",
    "revision": "0a423c87c4b9247b73473cf82dd301b5"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "b9ddbe1962111e4e009382e5d411801a"
  },
  {
    "url": "timeline/index.html",
    "revision": "0eb5c4f7de80692a74a4cc33e17c7880"
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
