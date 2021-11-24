##### 鉴于项目驱动于 pnpm 的 workspace 功能，您需要以下安装步骤

1. 在项目外文件夹安装 pnpm ，当前项目禁掉 npm

```
npm install -g pnpm
```

2. -w root workspace 安装依赖

```
pnpm install -w
```

##### 如果 node 版本太低，推荐升级至 14+

这里也提供了低版本不便于升级的解决方案：所有命令前加

```
npx -p node@14
```

##### 过渡 pnpm 工具

| npm 命令         | pnpm 等效                 |
| ---------------- | ------------------------- |
| npm install      | pnpm install              |
| npm i <pkg>      | pnpm add <pkg>            |
| npm run <cmd>    | pnpm <cmd>/pnpm run <cmd> |
| npm install -dev | pnpm install -D           |

##### 搭建进度

###### (~-11.28)

- [x] pnpm 替换 lerna+yarn
- [x] 支持 TS
- [x] 支持 ES6+新特性
- [x] CMJ + ESM 包
- [ ] UMD 包(验证中)
- [x] 支持单元测试(暂用 js, 不做测试函数的类型校验)
- [ ] 写更多的方法 + 测试用例 (1/5)
