# web-global-im-uikit-quickdemo
quickdemo 只是做了基础 IM 通信能力和 UI 界面，以便用户了解大致流程，更多详细介绍请参考[官方文档](https://doc.rongcloud.cn/imuikit/Web/1.X/quick_integration)各章节详细说明

运行 demo 需要在 src/config.ts 文件中配置 **appkey** 和 **token**, 在体验和调试阶段, 您可以从开发者后台「北极星」开发者工具箱 IM Server API 调试 页面获取 用户身份令牌（Token）
详情请参考[文档](https://doc.rongcloud.cn/imuikit/Web/1.X/quick_integration#%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E7%94%A8%E6%88%B7Token)

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
