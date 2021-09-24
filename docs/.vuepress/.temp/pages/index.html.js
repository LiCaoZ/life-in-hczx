export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "https://z3.ax1x.com/2021/09/24/4rErOP.png",
    "actions": [
      {
        "text": "开始阅读",
        "link": "/guide/",
        "type": "primary"
      }
    ],
    "footer": "以 CC-BY-NC-SA-4.0 授权 | 合川中学逐浪记者团 & 合川区无道科技工作室"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
