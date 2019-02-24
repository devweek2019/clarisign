// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("/Users/ykmmui/Desktop/code/hackathon/clarisign/node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-pages-index-js": () => import("/Users/ykmmui/Desktop/code/hackathon/clarisign/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-main-js": () => import("/Users/ykmmui/Desktop/code/hackathon/clarisign/src/pages/main.js" /* webpackChunkName: "component---src-pages-main-js" */),
  "component---src-pages-new-page-js": () => import("/Users/ykmmui/Desktop/code/hackathon/clarisign/src/pages/newPage.js" /* webpackChunkName: "component---src-pages-new-page-js" */),
  "component---src-pages-signature-js": () => import("/Users/ykmmui/Desktop/code/hackathon/clarisign/src/pages/signature.js" /* webpackChunkName: "component---src-pages-signature-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/ykmmui/Desktop/code/hackathon/clarisign/.cache/data.json")

