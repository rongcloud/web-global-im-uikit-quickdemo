import * as RongIMLib from '@rongcloud/imlib-next';
import { RCKitInstaller } from '@rongcloud/global-im-uikit';
import { imLibConfig, uikitCongig, token } from './config'

// 初始化 IMLib
RongIMLib.init(imLibConfig);

// 初始化 global-im-uikit
const kitApp = RongIMLib.installPlugin(RCKitInstaller, uikitCongig)

// 之后可以针对 kitApp 进行业务所需的配置，如注册自定义消息，定义功能开关等，此处不展开演示


// 完成各种配置之后，调用 ready 方法通知 SDK 结束配置并开始向浏览器中注入自定义标签
if(kitApp) {
  kitApp.ready();
} 

// 开始进行 IM 连接之前，需要对 IMLib 连接相关的事件添加监听，以便于在连接状态发生变化时给出相应的应对。
RongIMLib.addEventListener(RongIMLib.Events.CONNECTED, () => {
  console.log('连接成功');
});
RongIMLib.addEventListener(RongIMLib.Events.DISCONNECT, (code) => {
  console.log('连接已断开，错误码：', code);
});
RongIMLib.addEventListener(RongIMLib.Events.SUSPEND, (code) => {
  console.log('连接中断，等待自动重连恢复，错误码：', code);
});
RongIMLib.addEventListener(RongIMLib.Events.CONNECTING, () => {
  console.log('连接中');
});

RongIMLib.connect(token).then((res) => {
  const { code, data } = res;
  if (code === RongIMLib.ErrorCode.SUCCESS) {
    // IM 连接成功后，可以向 DOM 中添加 UI 标签，以展示聊天界面
    console.log('连接成功，用户 ID: ', data!.userId);

    // 向页面添加组件展示聊天界面
    const app = document.getElementById('app');
    const appElement = document.createElement('rc-imkit-app-provider');
    // 定义组件宽高
    appElement.style.width = '100%';
    appElement.style.height = '100%';

    app!.appendChild(appElement);
  } else {
    console.log('连接失败，错误码: ', code);
  }
});
