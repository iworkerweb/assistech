
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

# 测试框架 

## jest 通用测试框架

[jest官网](https://jestjs.io/)

## react测试框架

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

[jest-dom](https://github.com/testing-library/jest-dom)

# 目前开发的痛点

+ create-react-app 入口文件不适合管理组件库
+ 缺少行为追踪和属性调试功能

# 组件完美开发工具应有的特点

+ 分开展示各个组件不同属性下的状态
+ 能追踪组件的行为并且具有属性调试功能
+ 可以为组件自动生成文档和属性列表

## [storybook](https://storybook.js.org/)

1. 安装 npx -p @storybook/cli sb init


# 自动生成文档

1. react-docgen
2. react-docgen-typescript-loader

+ 什么样的`注释`会被解析出文档，符合`JSDoc`


# 模块化

> UMD AMD common.js 等

+ 本组件库采用es6 module

# 生成css文件

# 本地测试

+ 需要测试的组件库文件根目录下  assistech
```
npm link

```

+ 测试的文件根目录  assistechtest

```
npm link assistech

```

