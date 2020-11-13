
# 项目搭建过程
> 项目的目的是创建一个基于react和typescript的公用组件库

1. 利用 [create-react-app](https://create-react-app.dev/docs/getting-started) 初始化一个react项目，并指定模板为typescript
   ```
   npx create-react-app my-app --template typescript
   ```
  
2. 项目构建依赖(devDependencies)

 > 以下安装的依赖都是 create-react-app 不默认包含的依赖，具体的参照项目的package.json文件中的记录
  
  + [storybook](https://www.learnstorybook.com/)

    > 用于组件开发、测试和文档编写,在项目中引入Storybook可以帮助我们设计出通用性更强的组件，并轻松实现像Element、AntDesign那样的结构化组件文档
    
    + 快捷安装storybook
    
      `npx sb init`
    
    + storybook的基本配置
    
      1.  默认配置文件都在 `.storybook` 文件夹下
    
      2.  主要配置文件 `.storybook/main.ts`  
    
         + stories: 一个用来指定你的 `story files` 的数组
    
           ```js
           [
               "../src/**/*.stories.mdx", //	可以使用Markdown的格式书写
               "../src/**/*.stories.@(js|jsx|ts|tsx)"
           ]
           ```
    
         + addons: 用来指定你使用的addons
    
           ```js
           [
               "@storybook/addon-links",
               "@storybook/addon-essentials",
               "@storybook/preset-create-react-app"
           ]
           ```
    
         + webpackFinal: 自定义 `webpack` 配置 [链接](https://storybook.js.org/docs/react/configure/webpack)
    
         + babel: 自定义 `babel` 配置  [链接](https://storybook.js.org/docs/react/configure/babel)
    
         + typescript: 自定义 `typescript` 配置 [链接](https://storybook.js.org/docs/react/configure/typescript)
    
           ```js
           {
               check: false,	
               checkOptions: {},
               reactDocgen: 'react-docgen-typescript',
               reactDocgenTypescriptOptions: {
                 shouldExtractLiteralValuesFromEnum: true,
                 propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
               },
           }
           ```


​           
​    
      3.  渲染前置配置文件 `.storybook/preview.ts`
    
         + 导入 `css` 文件
    
           ```js
           //  导入组件样式
           import '../src/styles/index.scss'
           ```
    
         + 其余全局设置请看 [官网](https://storybook.js.org/docs/react/configure/overview)
    
    + 项目中相关 `storybook` 命令
    
      + 本地运行
    
        `npm run storybook` 用户本地调试
    
      + 构建文档静态文件
    
        `npm run build-storybook` 生成文档的静态文件

+ [husky](https://github.com/typicode/husky/tree/master) `Node >= 10 and Git >= 2.13.0`

  > 设置git钩子函数，提交前等检测，配置在package.json中添加

  ```
  "husky": {
      "hooks": {
      	//	在提交前检测，检测不通过不允许提交
        "pre-commit": "npm run test:nowatch && npm run lint"
      }
  }
  ```

+ [rimraf](https://github.com/isaacs/rimraf#readme)

  > 跨平台删除文件

  ```
  rimraf ./dist
  ```

+ [cross-env](https://github.com/kentcdodds/cross-env#readme) `Version 7 of cross-env only supports Node.js 10 and higher` 

  > 设置环境变量

  ```js
  "test:nowatch": "cross-env CI=true react-scripts test"
  ```

+ babel-loader @babel/core [babel官网](https://babeljs.io/) 

  > 用来解析js高级语法

+ [react-is](https://github.com/facebook/react/tree/master/packages/react-is)

  > 用来测试值是否是一个React element type

  ```js
  import React from "react";
  import * as ReactIs from "react-is";
  
  class ClassComponent extends React.Component {
    render() {
      return React.createElement("div");
    }
  }
  
  const FunctionComponent = () => React.createElement("div");
  
  const ForwardRefComponent = React.forwardRef((props, ref) =>
    React.createElement(Component, { forwardedRef: ref, ...props })
  );
  
  const Context = React.createContext(false);
  
  ReactIs.isValidElementType("div"); // true
  ReactIs.isValidElementType(ClassComponent); // true
  ReactIs.isValidElementType(FunctionComponent); // true
  ReactIs.isValidElementType(ForwardRefComponent); // true
  ReactIs.isValidElementType(Context.Provider); // true
  ReactIs.isValidElementType(Context.Consumer); // true
  ReactIs.isValidElementType(React.createFactory("div")); // true
  ```

+ [node-sass](https://github.com/sass/node-sass)

  > 用来编译 `.scss` 文件

  ```js
  "build-css": "node-sass ./src/styles/index.scss ./dist/index.css"
  ```

  

   + 其余的一些依赖对应的type类型包自行查看package.json文件，[type包搜索](https://github.com/DefinitelyTyped/DefinitelyTyped)

3. 项目运行时依赖(dependencies)
> 项目运行时依赖肯定包含react和react-dom，因为考虑到使用该项目的其他项目可能会有自己的react版本，所以此处在package.json文件中指定peerDependencies字段，用来提醒使用该项目的其他项目预先安装react>=16.8.0

+ [classnames](https://github.com/JedWatson/classnames)

  > 使用

  ```js
  classNames('foo', 'bar'); // => 'foo bar'
  classNames('foo', { bar: true }); // => 'foo bar'
  classNames({ 'foo-bar': true }); // => 'foo-bar'
  classNames({ 'foo-bar': false }); // => ''
  classNames({ foo: true }, { bar: true }); // => 'foo bar'
  classNames({ foo: true, bar: true }); // => 'foo bar'
  ```

  

4. 项目其他配置

+ vscode编辑器配置文件

  > 这里只指定一些常用的，如果有其他需要自行添加

  ```json
  {
    // 重新设定tabsize
    "editor.tabSize": 2,
    //失去焦点后自动保存
    "files.autoSave": "onFocusChange",
    //	显示行号
    "editor.lineNumbers": "on",
    //	自动调整 import 语句相关顺序，能够让你的 import 语句按照字母顺序进行排列
    "source.organizeImports": true,
    //	git自动拉取
    "git.autofetch": true,
    //	字体大小设置
    "editor.fontSize": 14,
  }
  ```

+ [package.json配置](https://docs.npmjs.com/cli/v6/configuring-npm/package-json)

  + 必要字段说明

    + 官方字段看官网

    1. files

    2. main

    3. peerDependencies

    4. dependencies

    5. devDependencies

    6. scripts

       + clean

         > 清除构建目录

       + build

         > 项目打包构建

       + build-ts

         > 构建ts、tsx文件

       + build-css

         > 构建scss文件

       + lint

         > 运行测试

       + test:nowatch

         > The test command will force Jest to run in CI-mode, and tests will only run once instead of launching the watcher

       + storybook

         >运行项目对应的文档，本地测试

       + build-storybook

         > 生成文档静态文件

       + [prepublishOnly](https://docs.npmjs.com/cli/v6/using-npm/scripts#prepare-and-prepublish)

         > npm包发布前的钩子函数

       ```json
       "scripts": {
           "start": "react-scripts start", 
           "clean": "rimraf ./dist",	
           "build": "npm run clean && npm run build-ts && npm run build-css",
           "lint": "eslint --ext js,ts,tsx src --max-warnings 5",
           "test": "react-scripts test",
           "test:nowatch": "cross-env CI=true react-scripts test",
           "eject": "react-scripts eject",
           "build-ts": "tsc -p tsconfig.build.json",
           "build-css": "node-sass ./src/styles/index.scss ./dist/index.css",
           "storybook": "start-storybook -p 6006 -s public",
           "build-storybook": "build-storybook -s public",
           "prepublishOnly": "npm run test:nowatch && npm run lint && npm run build"
         }
       ```

       

    + 非官方字段

    1. [types](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)
    2. module
    3. [husky](https://github.com/typicode/husky/tree/master)

  ```json
  {
    "name": "assistech",
    "version": "0.1.2",
    "private": false,
    "description": "协赞公司组件库",
    "author": {
      "name": "iworkerweb",
      "email": "865116277@qq.com",
      "url": "https://github.com/iworkerweb/assistech"
    },
    "license": "MIT",
    "keywords": [
      "component",
      "协赞",
      "react"
    ],
    "homepage": "https://github.com/iworkerweb/assistech",
    "repository": {
      "type": "git",
      "url": "https://github.com/iworkerweb/assistech"
    },
    "files": [
      "dist"
    ],
    "main": "dist/index.js",
    "module": "dist/index.js",
    "types": "dist/index.d.ts",
    "peerDependencies": {
      "react": ">=16.8.0",
      "react-dom": ">=16.8.0"
    },
    "husky": {
      "hooks": {
        "pre-commit": "npm run test:nowatch && npm run lint"
      }
    },
    "eslintConfig": {
      "extends": "react-app"
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    }
  }
  ```
