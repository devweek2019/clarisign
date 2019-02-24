const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/ykmmui/Desktop/code/hackathon/clarisign/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ykmmui/Desktop/code/hackathon/clarisign/src/pages/index.js"))),
  "component---src-pages-main-js": hot(preferDefault(require("/Users/ykmmui/Desktop/code/hackathon/clarisign/src/pages/main.js"))),
  "component---src-pages-new-page-js": hot(preferDefault(require("/Users/ykmmui/Desktop/code/hackathon/clarisign/src/pages/newPage.js"))),
  "component---src-pages-signature-js": hot(preferDefault(require("/Users/ykmmui/Desktop/code/hackathon/clarisign/src/pages/signature.js")))
}

