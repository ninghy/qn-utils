介于项目驱动于 pnpm 的 workspace 功能，您需要以下安装步骤

1. 在项目外文件夹安装 pnpm ，当前项目禁掉 npm

```
npm install -g pnpm
```

2. -w 所有 workspace 安装依赖

```
pnpm install -w
```

##### node 版本太低，请升级至 14+，依赖

```
npx -p node@14
```

##### 无痕拥抱新工具

| npm 命令         | pnpm 等效                 |
| ---------------- | ------------------------- |
| npm install      | pnpm install              |
| npm i <pkg>      | pnpm add <pkg>            |
| npm run <cmd>    | pnpm <cmd>/pnpm run <cmd> |
| npm install -dev | pnpm install -D           |
