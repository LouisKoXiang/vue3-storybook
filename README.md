# vue3-storybook
Just Try Try


```bash
# 如果在全局、元件和 Story 層級同時都有設定的 paramters 和 decorators "story > 元件 > 全局"
story > 元件 > 全局
```

globalTypes
Toolbars 中除了有我們安裝的 addons 工具以外，我們也可以自己創建一個工具，由於工具不屬於特定的 Story，因此他們不會透過 args 的方式與 Story 互動，而是會透過 "globals" 屬性以及全局的 decorators 來實現。

那我們現在就來示範一個可以將元件切換成 dark mode 的自製工具，首先在 preview.js 中透過 globalTypes 來添加自己的工具項目
```
// .storybook/preview.js

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
```