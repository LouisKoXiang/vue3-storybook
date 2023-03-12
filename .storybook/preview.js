// parameters 是用於定義 Storybook 功能和不同 Addons 行為的參數，
// 因此不同的 Addons 會有不同的 parameters。
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // 切換背景顏色的 backgrounds addons
  // **********
  // parameters 和 decorators 都一樣，除了可以在 preview.js 中作全局的設定，也能在元件和 Story 層級中作設定。
  // ********** 實作方法 button.storis.js
  // backgrounds: {
  //   values: [
	//   { name: 'red', value: '#f00' },
  //     { name: 'green', value: '#0f0' },
  //     { name: 'blue', value: '#00f' }
  //   ]
  // },
}
// decorators 是一種在維持原有 Story 不變的情況下，
// 額外包一層自定義的 DOM 容器 (container) 、引入上下文環境 (context) 
// 或添加假資料的方法，許多 Addons 便是透過 decorators 來做到強大又便利的功能。
// **********
// parameters 和 decorators 都一樣，除了可以在 preview.js 中作全局的設定，也能在元件和 Story 層級中作設定。
// ********** 實作方法 button.storis.js
// export const decorators = [(story) => ({
//   components: { story },
//   template: '<div style="margin: 3em;"><story /></div>'
// })]




// globalTypes
// Toolbars 中除了有我們安裝的 addons 工具以外，我們也可以自己創建一個工具，由於工具不屬於特定的 Story，因此他們不會透過 args 的方式與 Story 互動，而是會透過 "globals" 屬性以及全局的 decorators 來實現。
// 那我們現在就來示範一個可以將元件切換成 dark mode 的自製工具，首先在 preview.js 中透過 globalTypes 來添加自己的工具項目。

export const globalTypes = {
  darkMode: {
    name: 'Dark Mode',
    defaultValue: 'default',
    toolbar: {
      items: ['default', 'dark'],
      showName: true,
    }
  }
}

export const decorators = [(story, context) => {
  const darkModeColor = {
    default: 'auto',
    dark: '#333333'
  }
  return {
    component: { story },
    template: `<story style="background-color: ${darkModeColor[context.globals.darkMode]}"/>`
  }
}]

