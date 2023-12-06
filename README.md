# web-global-im-uikit-quickdemo
quickdemo 只是做了基础 IM 通信能力和 UI 界面，以便用户了解大致流程，更多详细介绍请参考[官方文档](TODO: 添加地址)各章节详细说明

用户可以在开发者后台获取 appkey 和 token 后，配置到 src/config.ts 中。获取详情请参考：(TODO: 添加地址)

## 工程目录结构说明

```
.
.
├── README.md                  // README 文档
├── dist                       // Demo 测试工程打包输出目录
├── package.json               // 包声明
├── src                        // 源码目录
│   ├── config.ts              // 配置文件
│   ├── hooks.ts               // 钩子函数
│   ├── main.ts                
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 脚本说明

* `npm run dev` - 启动调试服务
* `npm run build` - 打包 Demo 工程，输出至 dist 目录
