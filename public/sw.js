if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const _=e=>a(e,o),r={module:{uri:o},exports:c,require:_};i[o]=Promise.all(n.map((e=>r[e]||_(e)))).then((e=>(s(...e),c)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/GothamBold.ttf",revision:"db33e70bc9dee9fa9ae9737ad83d77ba"},{url:"/_next/static/PailLG3CLTxNZBjcZ26q0/_buildManifest.js",revision:"c62036fbfe4c5648a75063163b9aead6"},{url:"/_next/static/PailLG3CLTxNZBjcZ26q0/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/134-5f669b99d9a0c21a.js",revision:"5f669b99d9a0c21a"},{url:"/_next/static/chunks/610-a470af218da45d34.js",revision:"a470af218da45d34"},{url:"/_next/static/chunks/874-939b413aca5cdc1a.js",revision:"939b413aca5cdc1a"},{url:"/_next/static/chunks/930-b3685984976c035e.js",revision:"b3685984976c035e"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-bb383f086155e314.js",revision:"bb383f086155e314"},{url:"/_next/static/chunks/pages/_app-a2a4b9e27a2806c8.js",revision:"a2a4b9e27a2806c8"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/_layout-824a8d06f52f553a.js",revision:"824a8d06f52f553a"},{url:"/_next/static/chunks/pages/days-6e3b544db41c04f8.js",revision:"6e3b544db41c04f8"},{url:"/_next/static/chunks/pages/edit-6417b84fd3035b74.js",revision:"6417b84fd3035b74"},{url:"/_next/static/chunks/pages/index-a0cc5c86de2b4542.js",revision:"a0cc5c86de2b4542"},{url:"/_next/static/chunks/pages/login-9ac181b5e433fb69.js",revision:"9ac181b5e433fb69"},{url:"/_next/static/chunks/pages/profile-f345c67c8e5b92ea.js",revision:"f345c67c8e5b92ea"},{url:"/_next/static/chunks/pages/recovery_account-f8dde7dd63b91102.js",revision:"f8dde7dd63b91102"},{url:"/_next/static/chunks/pages/register-3ba519e74328601e.js",revision:"3ba519e74328601e"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-fd1bc4a65a80e5c8.js",revision:"fd1bc4a65a80e5c8"},{url:"/avatar.png",revision:"29aa847eabf14e68135990aa78cb968e"},{url:"/dark-logo.png",revision:"844307b7f3fc7388bdbfba38eaa7c688"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/favicon.png",revision:"ba20b27c40620fdd2fb980f40b87d168"},{url:"/icon.png",revision:"5e02ad537551110879ebc4e72d7534db"},{url:"/images/icons/10.2__iPad_landscape.png",revision:"8d7d2193aad9fb9583f6b3c788f5e23f"},{url:"/images/icons/10.2__iPad_portrait.png",revision:"2f6ca4bba846f76bdbb03ec0029e954b"},{url:"/images/icons/10.5__iPad_Air_landscape.png",revision:"2fa78c668587aece741b450083c5eb7b"},{url:"/images/icons/10.5__iPad_Air_portrait.png",revision:"1b081eb47d9f9903d81bbd10ffffabcf"},{url:"/images/icons/10.9__iPad_Air_landscape.png",revision:"47d1b2b27e245288b194202da9df5eb7"},{url:"/images/icons/10.9__iPad_Air_portrait.png",revision:"f6675577f662752d7f4a2e1a23d7ac37"},{url:"/images/icons/11__iPad_Pro__10.5__iPad_Pro_landscape.png",revision:"1837d60a887ba2921d821c1ff71ad571"},{url:"/images/icons/11__iPad_Pro__10.5__iPad_Pro_portrait.png",revision:"298cac15f135e04326b8098f46222977"},{url:"/images/icons/12.9__iPad_Pro_landscape.png",revision:"1d0e18918ff278d7d802b6bf90739fac"},{url:"/images/icons/12.9__iPad_Pro_portrait.png",revision:"32912f622e4282e6fbf5dc46b1c49d85"},{url:"/images/icons/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",revision:"5439130763b3b8fbfe67afcdc4a55f60"},{url:"/images/icons/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",revision:"9c28e31773276fe8f6788c0ffbd6f893"},{url:"/images/icons/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",revision:"1fd8165f657bb6f9f85e401147619abf"},{url:"/images/icons/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",revision:"f82e7dfaf4cbba370e0b2dc787c37d4e"},{url:"/images/icons/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",revision:"967021b3e236762ca91168be5bdf5f28"},{url:"/images/icons/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",revision:"0cfa3cb2b1c1eea59b473d07870a0491"},{url:"/images/icons/iPhone_11__iPhone_XR_landscape.png",revision:"77d10f019b2b41e868b127cf94309d2f"},{url:"/images/icons/iPhone_11__iPhone_XR_portrait.png",revision:"63a8936e88f3404435210c4efaa97941"},{url:"/images/icons/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",revision:"de723bd2190346308359a813c3d6d357"},{url:"/images/icons/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",revision:"fc515dced592508a6a5adcf3eb7e71c8"},{url:"/images/icons/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",revision:"7952b3029730ceb686440199d56e195d"},{url:"/images/icons/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",revision:"f8883e3ff2db99b3cddb4588e1d013bf"},{url:"/images/icons/iPhone_14_Pro_Max_landscape.png",revision:"3cdf1881634ff5a83470383901a21c83"},{url:"/images/icons/iPhone_14_Pro_Max_portrait.png",revision:"3a05d74d43f7be02cbd9973f54421d68"},{url:"/images/icons/iPhone_14_Pro_landscape.png",revision:"e224719bfe2f5a982de7400ec3c00b56"},{url:"/images/icons/iPhone_14_Pro_portrait.png",revision:"f3295c9244339a1c5add6f8663611de1"},{url:"/images/icons/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",revision:"6e9a2b08cf9ff813c8be097afc1fe269"},{url:"/images/icons/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",revision:"f28f9413e03d06d7a80f2d03e135ae70"},{url:"/images/icons/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",revision:"3c8e0f346ae0b533990a889a82a7535c"},{url:"/images/icons/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",revision:"a851f2fc448b3420ee5dba2bd06d84b2"},{url:"/images/icons/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",revision:"d9b2ed6c58916be67aaa4deda8b82dfb"},{url:"/images/icons/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",revision:"f498ee6cce8b1abb29ee97d4b4dce15f"},{url:"/images/icons/icon-192x192.png",revision:"00511971adc9184c263cda76c881d4a6"},{url:"/images/icons/icon-256x256.png",revision:"a6ddbe68afa17a47830f4be212c40281"},{url:"/images/icons/icon-384x384.png",revision:"db87726bd7f9be3e29dde7abc76979dc"},{url:"/images/icons/icon-512x512.png",revision:"c0e6e90a21915cb59018f7d699fde3db"},{url:"/images/icons/icon.png",revision:"b3ebd843d547218d91d9fbe1c26e64a0"},{url:"/images/ui/NUTRIR logo-01.png",revision:"f78187a55372304e58240f5b5bfaf8f8"},{url:"/images/ui/NUTRIR logo-02.png",revision:"c071e29f85e7cfd0daa86a381f30e86b"},{url:"/images/ui/NUTRIR logo-03.png",revision:"1fd7ac56b7713ca3a5a2f83657051b5f"},{url:"/images/ui/NUTRIR logo-transparente-01.png",revision:"8e0623c2e1ab04ba6a134aa31eaa8f87"},{url:"/images/ui/NUTRIR logo-transparente-02.png",revision:"dccaaa398695a14233055d07a3fd5754"},{url:"/images/ui/dash/01.png",revision:"3ff5991e14951303351e34ffd379f8bc"},{url:"/images/ui/dash/01sin fondo.png",revision:"039ecca66076984d61d22252dc27c3ff"},{url:"/images/ui/dash/02.png",revision:"8732ffb142e24822050be222ceaf0b45"},{url:"/images/ui/dash/02sin fondo.png",revision:"da9684f6cb6a4547ceb4a041da4967f6"},{url:"/images/ui/dash/03.png",revision:"d1b2bf8138043fa4a1d490f8609145f3"},{url:"/images/ui/dash/03sin fondo.png",revision:"160c61e80e576ed00ee65934f2db3081"},{url:"/images/ui/logo-icon.png",revision:"76b28153461d8f470c7a8b12805837f6"},{url:"/images/ui/logo_manos.png",revision:"7d923b0af9d28744ca55df7eb99c3153"},{url:"/images/ui/nutrir-app.png",revision:"51a7801a3f37a10bf82742bd00eac658"},{url:"/images/ui/nutrir-logo-app.png",revision:"7948f0f2c38741efe5d83034448f6b36"},{url:"/light-logo.png",revision:"68ad1d33d207de3f93634b9856aaa7c9"},{url:"/logo-nutrir.png",revision:"70814f502d9d473e0d0685e81fec62da"},{url:"/manifest.json",revision:"bb897d5ee44d1a24145a00630b0d05f1"},{url:"/organica.png",revision:"6d00b24d318793a0fad966da9da218ac"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:n})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
