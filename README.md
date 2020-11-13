# 安装使用

> npm install assistech --save

+ 注意问题
git版本 >= 2.13.0, node版本 >= 10.0, react >= 16.8.0 , react-dom >= 16.8.0

# 相关依赖介绍

1. react[官网](https://reactjs.org/)

   本组件库所有组件均采用hooks编写

2. storybook[官网](https://storybook.js.org/)
   
   storybook顾名思义"故事书",每个组件都有对应的"故事"来说明怎么使用

3. @testing-library/react[官网](https://testing-library.com/)

   react组件的测试框架

4. jest[官网](https://jestjs.io/docs/en/getting-started)
   
   通用测试框架

5. typescript[官网](https://www.typescriptlang.org/)

   本组件库采用ts编写

6. saas[官网](https://sass-lang.com/)

本组件库采用ts编写

# 组件库开发流程


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

# Npm的主要功能

+ 下载别人编写的第三方包到本地使用
+ 下载并安装别人编写的命令行程序到本地使用
+ 将自己编写的包或者命令行程序上传到npm服务器

> 登录npm

1. npm whoami
2. npm config ls 要保证 metrics-registry = "https://registry.npmjs.org/"
3. npm adduser

# 发布到npm

1. 语义化版本号
2. 精简package.json文件依赖
3. peerDependencies

# 添加发布和commit前检测

# CI-持续集成

+ 频繁的将代码集成到主干 (master)
+ 快速发生错误
+ 防止分支大幅偏离主干

# CD-持续部署、持续交付

+ 频繁的将软件的新版本，交付给质量团队或者用户
+ 代码通过评审以后，自动部署到生产环境


# 其他问题

1. git 需升级，不然husky没办法使用
2. compact folders设置，单个文件夹不折叠
3. husky失效，更新node和git，然后npm rebuild

