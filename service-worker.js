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
    "revision": "7ef4dcb0d3feab0be2f43ad3a156f9ea"
  },
  {
    "url": "assets/css/0.styles.9c83292b.css",
    "revision": "802e1abda85650875243ecb34ca2cf78"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.49d0613e.js",
    "revision": "4405ce27f4db3cbb4622496f0097e36f"
  },
  {
    "url": "assets/js/11.98f659d4.js",
    "revision": "14b5db218741d733a86fd8b6e1c4571a"
  },
  {
    "url": "assets/js/12.2149fc90.js",
    "revision": "cb7f1060bcc14f332ab62506aaebf2fd"
  },
  {
    "url": "assets/js/13.72de792e.js",
    "revision": "1f127ec10caff6092ca6345068033a6f"
  },
  {
    "url": "assets/js/14.10c2f53f.js",
    "revision": "aca2cb82895ccdae4eced6426f3fdb87"
  },
  {
    "url": "assets/js/15.b8ae9f17.js",
    "revision": "ae98c7cb30aae7a612d930381923f020"
  },
  {
    "url": "assets/js/16.fdd7f3e9.js",
    "revision": "063bd18494086c30e62424811c91b5f9"
  },
  {
    "url": "assets/js/17.25d26620.js",
    "revision": "ac95c1da172e86653996a97a1e1c6b9f"
  },
  {
    "url": "assets/js/18.226095dd.js",
    "revision": "c1b44ffb36caa0fdb647e1c31a0cd234"
  },
  {
    "url": "assets/js/19.331fd599.js",
    "revision": "d87401a006448f18c6912d280d6ac2a2"
  },
  {
    "url": "assets/js/20.d3b1cd5f.js",
    "revision": "9f7060071e3b3b76d55a3108318dfab1"
  },
  {
    "url": "assets/js/21.78236972.js",
    "revision": "d264efccaed2a161dc40ede9297218c8"
  },
  {
    "url": "assets/js/22.f2f2d230.js",
    "revision": "262d6956ade5d1d0ef79facefc345d06"
  },
  {
    "url": "assets/js/23.ca2c171c.js",
    "revision": "8c5f450a2e1b7ec2d732c2369c116982"
  },
  {
    "url": "assets/js/24.0ce2fcf3.js",
    "revision": "5dc6feb95d98c11dab5ac48a284b469a"
  },
  {
    "url": "assets/js/25.8aa50d2c.js",
    "revision": "fbdf2c75c1db9f7fd83639e75a3ac2ba"
  },
  {
    "url": "assets/js/26.429fb3d8.js",
    "revision": "a64ea08e571e4ea09db2817619249018"
  },
  {
    "url": "assets/js/27.fbeda744.js",
    "revision": "89ee3392b551e381f6c5db81326c2b7b"
  },
  {
    "url": "assets/js/28.7acc0afe.js",
    "revision": "4c8ef1d13663819ae3c5a42fd1b4bc26"
  },
  {
    "url": "assets/js/29.b176121b.js",
    "revision": "109e9785e91a67eda2366e8574a87b8d"
  },
  {
    "url": "assets/js/30.7acba246.js",
    "revision": "6e2402478159c2a785c329cacb026332"
  },
  {
    "url": "assets/js/31.870f5cb3.js",
    "revision": "57810b50e1c5e38b3ba07322092e61ee"
  },
  {
    "url": "assets/js/32.ddefa60b.js",
    "revision": "5cecdf0e44476e60fffd373eb8948612"
  },
  {
    "url": "assets/js/33.18bfbd24.js",
    "revision": "de9cc441080f4dab738a557be4772e6d"
  },
  {
    "url": "assets/js/34.97631b16.js",
    "revision": "bd8d708d7ea0f7163b31ff1caf296809"
  },
  {
    "url": "assets/js/35.ef91e15e.js",
    "revision": "0214de25474f46083520c624099dfd76"
  },
  {
    "url": "assets/js/36.c1a3d9a9.js",
    "revision": "5c43a17ddc0b02a4a5adcca93c6bd650"
  },
  {
    "url": "assets/js/37.64661e30.js",
    "revision": "99b82afcef773e68a7c788e26f6346ca"
  },
  {
    "url": "assets/js/38.acf8da57.js",
    "revision": "d06101f48ea2f0bc13baad5b7748eb2f"
  },
  {
    "url": "assets/js/39.11162a3c.js",
    "revision": "deb0a0593529c2218b01d306ce6db4be"
  },
  {
    "url": "assets/js/4.3c212f2f.js",
    "revision": "4d1b3e8787fbf56e5f778d70c34ec9fb"
  },
  {
    "url": "assets/js/40.d81914cd.js",
    "revision": "0732fc86055dcd4955ef3e37c534c6b6"
  },
  {
    "url": "assets/js/41.ccbf928e.js",
    "revision": "7004a2e3aa37471668d8fe962ec5dd40"
  },
  {
    "url": "assets/js/42.101c5b22.js",
    "revision": "beaf687c6879125e6c67f11f7ff7ade7"
  },
  {
    "url": "assets/js/43.df451528.js",
    "revision": "d42685683ef0085825e2629443f9ebbd"
  },
  {
    "url": "assets/js/44.5daed183.js",
    "revision": "3e02007fc38b94f2ddb5300719dbb955"
  },
  {
    "url": "assets/js/45.58cb73f0.js",
    "revision": "6839016ef11aa12a50eff5a52d488d7c"
  },
  {
    "url": "assets/js/46.807dfd92.js",
    "revision": "def684766da77685bb1758c535e67f26"
  },
  {
    "url": "assets/js/47.36776f22.js",
    "revision": "3c52470af1a62e8758525d854cad41f6"
  },
  {
    "url": "assets/js/48.88be1c01.js",
    "revision": "5389827e6a6060b4524df9304d69c71a"
  },
  {
    "url": "assets/js/49.2960986b.js",
    "revision": "85f3a97b3346450472834be10a8e4746"
  },
  {
    "url": "assets/js/5.1e6b02f3.js",
    "revision": "4c0f75194903c5045f5da88f2c2e9583"
  },
  {
    "url": "assets/js/50.4f0fa76c.js",
    "revision": "72c40e514f192e5a7096f07852c3acc5"
  },
  {
    "url": "assets/js/51.52f534a4.js",
    "revision": "691d35575d8242aa5dadae49bfdfded8"
  },
  {
    "url": "assets/js/52.7fbbd7d0.js",
    "revision": "37072a867f10778ce90fa2969b92beaf"
  },
  {
    "url": "assets/js/53.a04acc05.js",
    "revision": "ef2d0505556b675156b240036fb646b8"
  },
  {
    "url": "assets/js/54.00232bea.js",
    "revision": "1bd2ca1a0cfad7d42c29aacaf0f14c5c"
  },
  {
    "url": "assets/js/55.98c118ea.js",
    "revision": "cced5dc49dd21947a3007caa5f25cbb5"
  },
  {
    "url": "assets/js/56.dfdd6da9.js",
    "revision": "b2ab87fd2d510a913de7e49028e0f9c4"
  },
  {
    "url": "assets/js/57.e105fbc3.js",
    "revision": "6c3f7818d6f6c3689c422e66ae26f741"
  },
  {
    "url": "assets/js/58.00465123.js",
    "revision": "30c94151cd92c618117d498f2ca28cc1"
  },
  {
    "url": "assets/js/59.3c198ae1.js",
    "revision": "0f615386eab44008c34aa5a5730c23a6"
  },
  {
    "url": "assets/js/6.293d1370.js",
    "revision": "005577721076fdac21737cb08e83e383"
  },
  {
    "url": "assets/js/60.c1f954b5.js",
    "revision": "3df9e98fb60739addf3044beee3cf351"
  },
  {
    "url": "assets/js/7.d4495af0.js",
    "revision": "7d95d1fdd4b2e049e27c64bf5e763f14"
  },
  {
    "url": "assets/js/8.d373518b.js",
    "revision": "5e15d70d44547e67f7006771d9d01a5b"
  },
  {
    "url": "assets/js/9.2ef68944.js",
    "revision": "4f52912b35cdcef77f4713f7124e55af"
  },
  {
    "url": "assets/js/app.cf2b790c.js",
    "revision": "1e1759c8d80711659e24a0a49feb2dca"
  },
  {
    "url": "assets/js/vendors~flowchart.36848b96.js",
    "revision": "3803dc19ea7b901d9814b554be0382b3"
  },
  {
    "url": "assets/js/vendors~notification.5e49bf43.js",
    "revision": "ce9cbcc2523268d269d4c24cb8e53102"
  },
  {
    "url": "cache/cache-framework.html",
    "revision": "1186f86910c35356d13f0004374875ee"
  },
  {
    "url": "cache/cache-interview.html",
    "revision": "9a3d874ed12eb19993ee9b1f8ae4f291"
  },
  {
    "url": "cache/cache-libs.html",
    "revision": "97fc2906d106295ea0a2d163e2fe7361"
  },
  {
    "url": "cache/ehcache.html",
    "revision": "952cec49f2cfd4ae177379d86b4ffc5f"
  },
  {
    "url": "cache/http-cache.html",
    "revision": "17861f559d4369b0b732eb948aa30377"
  },
  {
    "url": "cache/index.html",
    "revision": "b3d52120eec3474bfc8b2b41a6f27377"
  },
  {
    "url": "cache/memcached.html",
    "revision": "26ff8007f4b9600536733360905fba22"
  },
  {
    "url": "framework/index.html",
    "revision": "bf81b00a96710d6b5228cd4623955c94"
  },
  {
    "url": "framework/mybatis.html",
    "revision": "524585051cda9d102f9acceb43675216"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "580faa3bbf24b5a3a6da6a9bc9db427f"
  },
  {
    "url": "lib/bean/dozer.html",
    "revision": "37aace28365959e6d8ff6f4e65b40752"
  },
  {
    "url": "lib/bean/lombok.html",
    "revision": "e9ba7e37f4e381283e62d7c3e1be5557"
  },
  {
    "url": "lib/index.html",
    "revision": "dcb53060f4ca03b90ab881249c5a11c9"
  },
  {
    "url": "lib/javalib-log.html",
    "revision": "8cc24a0c80d1209d42caa44d52d496aa"
  },
  {
    "url": "lib/javalib-util.html",
    "revision": "ae0c8e4cad9b34339b5b8722c748e504"
  },
  {
    "url": "lib/javamail.html",
    "revision": "52f82f32f2b0f67c256a311ea2a7af26"
  },
  {
    "url": "lib/jsoup.html",
    "revision": "a6f9b715f800cacb56aad6897d57f6ec"
  },
  {
    "url": "lib/reflections.html",
    "revision": "a429f0364fca281e7d9f9045725f567b"
  },
  {
    "url": "lib/serialized/index.html",
    "revision": "89dc1cdc65c1beda5fa0dccbaf778049"
  },
  {
    "url": "lib/serialized/javalib-binary.html",
    "revision": "96d89318618b39671231aa1cbe3a85ee"
  },
  {
    "url": "lib/serialized/javalib-json.html",
    "revision": "06252514d0684d720cabd5e4ba2b9d36"
  },
  {
    "url": "lib/template/freemark.html",
    "revision": "bfeadd3734934573c48ed85fb5ba0630"
  },
  {
    "url": "lib/template/index.html",
    "revision": "b310820b230f22dd032f2f905f7385ac"
  },
  {
    "url": "lib/template/thymeleaf.html",
    "revision": "662981345a9153af2de66376ccfef84e"
  },
  {
    "url": "lib/template/velocity.html",
    "revision": "a90808c0036ef8c090dd6e4f9db6780d"
  },
  {
    "url": "lib/thumbnailator.html",
    "revision": "82d6d27f691efae56b55872a65845ded"
  },
  {
    "url": "lib/zxing.html",
    "revision": "ab4d80ffb6b195f43e2a5a3b458a9a07"
  },
  {
    "url": "limiting/hystrix.html",
    "revision": "485dcd9a8f3a6a504f6a5c2235f658e5"
  },
  {
    "url": "mq/activemq.html",
    "revision": "f0ad77947b4b4a1e0b61314c17e09ad9"
  },
  {
    "url": "mq/index.html",
    "revision": "05c83f62772765b24b8e773ed7f7dc13"
  },
  {
    "url": "mq/mq-interview.html",
    "revision": "3fe8f3438a753b74745831d0a46dacb2"
  },
  {
    "url": "mq/rocketmq.html",
    "revision": "cb2599219a0d1fc16e6ede6aefa664f0"
  },
  {
    "url": "security/index.html",
    "revision": "f2bcc95e067de9ec9d58ce39509a0d02"
  },
  {
    "url": "security/shiro.html",
    "revision": "50f1c1ef6fe1e82b13844235954f37ab"
  },
  {
    "url": "security/spring-security.html",
    "revision": "d84b583b6c8512d2ab883eb514662598"
  },
  {
    "url": "server/index.html",
    "revision": "febe3b830c326c98a06f0a7fa4805690"
  },
  {
    "url": "server/jetty.html",
    "revision": "ac207128cbf9b60cf7b285ad8e983e87"
  },
  {
    "url": "server/tomcat-and-jetty.html",
    "revision": "0cd2a7c3035f4bc0d39693a58bcc54a6"
  },
  {
    "url": "server/Tomcat优化.html",
    "revision": "0368112bbdb1fc546e1c102e84fd7de7"
  },
  {
    "url": "server/Tomcat容器.html",
    "revision": "64b48c4b8c8e480a1dcb75f03ee45052"
  },
  {
    "url": "server/Tomcat应用指南.html",
    "revision": "d0420f55fa1f862fdf1f340757f113e7"
  },
  {
    "url": "server/Tomcat连接器.html",
    "revision": "88cc9eecf1a9f2a3d02a7cd8c546fbff"
  },
  {
    "url": "soa/dubbo.html",
    "revision": "b6a38749dada0e350d14437ffba9e28e"
  },
  {
    "url": "soa/index.html",
    "revision": "263a8095d58c2e5c68c7d877ac8d4440"
  },
  {
    "url": "soa/netty.html",
    "revision": "89f4895d82dc35373a35f498e60f12ef"
  },
  {
    "url": "test/index.html",
    "revision": "7f4e20945b4279690e42eb5ca19e99f3"
  },
  {
    "url": "test/jmeter.html",
    "revision": "6e5bced8cb2e2173cdf38da2578d0c79"
  },
  {
    "url": "test/jmh.html",
    "revision": "3945b4001184bf8987a6c9ee3a8d80af"
  },
  {
    "url": "test/junit.html",
    "revision": "0c1464e335b8e92d7dc6e0729c434073"
  },
  {
    "url": "test/mockito.html",
    "revision": "8741f28e474c3b62b0a597c598d6f8ac"
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
