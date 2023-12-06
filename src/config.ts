import { LogL, IInitOption } from '@rongcloud/imlib-next';
import { IRCKitInitOpts } from '@rongcloud/global-im-uikit'
import { hooks } from './hooks';

// 更多关于 imlib 初始化配置请参考文档：https://doc.rongcloud.cn/apidoc/im-web/latest/modules.html#IInitOption
export const imLibConfig: IInitOption = {
  appkey: '<YOUR-APPKEY>',
  logOutputLevel: LogL.WARN,
}

// 更多关于 uikit 初始化配置请参考文档：http://localhost:8080/imuikit/Web/1.X/init
export const uikitCongig: IRCKitInitOpts = {
  hooks,
  logLevel: LogL.WARN,
  language: 'en_US',
}

export const token = '<YOUR-TOKEN>';