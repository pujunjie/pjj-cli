# 说明文档

## `pjj`: 一个帮助你快速搭建 React 项目的 CLI

如何安装？

```shell
npm install pjj-create -g
```

创建项目

```shell
pjj create your_project_name
```

自动拉取项目模板、安装项目依赖,选择路由类型

### 创建 React 组件：

```shell
pjj addcpn YourComponentName # 例如pjj add NavBar，默认会存放到src/components/web/components文件夹中
pjj addcpn YourComponentName -d  src/components/NavBar # 也可以指定存放的具体文件夹
```

### 创建 React 页面：

```shell
pjj addpage YourPageName # 例如pjj add Home，默认会存放到src/components/web/pages文件夹中
pjj addpage YourPageName -d  src/components/NavBar # 也可以指定存放的具体文件夹
```
