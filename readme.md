#### 鉴于项目驱动于 pnpm 的 workspace 功能，您需要以下安装步骤

1. 在项目外文件夹安装 pnpm ，当前项目禁掉 npm

```
npm install -g pnpm
```

2. -w root workspace 安装依赖

```
pnpm install -w
```

#### 如果 node 版本太低，推荐升级至 14+

这里也提供了低版本不便于升级的解决方案：所有命令前加

```
npx -p node@14
```

#### 过渡 pnpm 工具

| npm 命令         | pnpm 等效                 |
| ---------------- | ------------------------- |
| npm install      | pnpm install              |
| npm i <pkg>      | pnpm add <pkg>            |
| npm run <cmd>    | pnpm <cmd>/pnpm run <cmd> |
| npm install -dev | pnpm install -D           |

#### 另外列举两个常用命令~

##### 只操作某一个包:

```
 pnpm <cmd> --filter pkgName // eg:@webb/utils
```

##### 本地测试某一个包:

先在当前目录 build

```
 pnpm build --filter pkgName
```

在目标工作空间运行命令链接,只需要运行一次

```
pnpm link dir  // dir 可以是D:\*..*\webb\packages\utils
```

更用法直达 [pnpm 官网](https://pnpm.io/cli/add)

#### 搭建进程

###### (~-11.28)

- [x] pnpm 替换 lerna+yarn
- [x] 支持 TS
- [x] 支持 ES6+新特性
- [x] CMJ + ESM 包
- [ ] UMD 包(验证中)
- [x] 支持单元测试(暂用 js, 不做测试函数的类型校验)
- [ ] 写更多的方法 + 测试用例 (1/5)

###### ✨11.29-12.05

- [ ] 写更多的方法 + 测试用例 (1/5)
- [ ] 整理发布步骤
