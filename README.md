
# 文件结构


```js
assistech
    README.md
    node_modules/
    package.json
    tsconfig.json
    src/  
      components/
        Button/
          button.tsx
          button.test.tsx
          style.scss(组件单独的样式)
        ...
        styles/
          _variables.scss(各种变量以及可配置设置)
          _mixins.scss(全局mixins)
          _functions.scss(全局functions)
      ...
      index.tsx
```
  

# 样式解决方案
  1. inline css
  2. css in js
  3. Sass/Less
  4. 本组件库采用Saas样式方案[saas官网](https://sass-lang.com/)

  
# 创建组件库的色彩体系

  + 系统色板 - 基础色板 + 中性色板
  + 产品色板 - 品牌色 + 功能色板 (需要产品确认：比方 成功时的颜色、失败时的颜色等)

  + 我们组件库的色彩体系
    ```
    #0d6efd
    #6c757d
    #52c41a
    #fadb14
    #dc3545
    #17a2b8
    ```
# 字体系统

# 表单

# 按钮

# 边框和阴影

# 可配置开关

# 小知识

`_`开头的scss文件不能被编译成单独的css文件，导入时可以省略`_`