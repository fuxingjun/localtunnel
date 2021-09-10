<!--
 * @LastEditTime: 2021-09-10 11:08:56
 * @Description: readme
-->

# 开发用的内网穿透

## 使用
```bash

# 克隆项目
git clone https://github.com/fuxingjun/localtunnel.git

# 进入项目目录
cd localtunnel

# 全局安装pm2
yarn add pm2 -g

# 安装依赖
yarn install

# 自行修改index.js, 配置项请查看 https://github.com/localtunnel/localtunnel

# 启动服务
yarn start

```

## 其他命令
```bash

# watch模式启动服务
yarn dev

# 停止服务
yarn stop

# 重启服务
yarn restart

```
