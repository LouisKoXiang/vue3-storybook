module.exports = {
  "core": {
    "builder": "webpack5"
  },
  // stories - 檔案路徑字串符(globs)的設定集合，可以指出專案要使用的story files放置的位置。
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  // addons - 設定要使用的addons清單
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-postcss',
  ],
  "framework": "@storybook/vue3"
}