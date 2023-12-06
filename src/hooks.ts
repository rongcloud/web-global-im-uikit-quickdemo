import { 
  IRCKitServiceHooks, 
  IRCKitUserProfile, 
  IRCKitGroupProfile, 
  IRCKitGroupMemberProfile, 
  IRCKitSystemProfile,
} from '@rongcloud/global-im-uikit';

import { Random as R } from "mockjs";

// 为便于开发者理解钩子函数的入参和返回值，此处使用 TypeScript 进行示例
export const hooks: IRCKitServiceHooks = {
  // 定义人员信息获取方法
  async reqUserProfiles(userIds: string[]): Promise<IRCKitUserProfile[]> {
    // userIds 为用户 ID 列表，业务层需要根据 userIds 提供对应的用户信息
    return userIds.map((userId) => ({
      userId,
      name: R.cname(), // 用户名称，请传递有效值，否则会影响用户信息展示
      portraitUri: R.image('60x60'), // 用户头像，请传递有效值，当头像获取失败或未提供，SDK 将使用默认头像
    }));
  },

  // 定义群组信息获取方法
  async reqGroupProfiles(groupIds: string[]): Promise<IRCKitGroupProfile[]> {
    // groupIds 为群组 ID 列表，业务层需要根据 groupIds 提供对应的群组信息
    return groupIds.map((groupId) => ({
      groupId,
      name: `群组 ${groupId}`, // 群组名称，请传递有效值，否则会影响群组信息展示
      memberCount: 0, // 群成员数量，请传递有效值，否则会影响群组信息展示
      portraitUri: R.image('60x60'), // 群组头像，请传递有效值，当头像获取失败或未提供，SDK 将使用默认头像
    }));
  },

  // 定义群组成员信息获取方法
  async reqGroupMembers(groupId: string): Promise<IRCKitGroupMemberProfile[]> {
    // groupId 为群组 ID，业务层需要根据 groupId 提供对应的群组成员信息
    return [
      // 需要业务层提供群组的真实成员信息，其中 nickname 为可选数据
      // nickname 为空时，SDK 将通过 reqUserProfiles 获取的用户信息中的 name 字段作为群组成员的昵称
      // 从性能考虑，建议业务层提供群组成员的真实昵称，以避免 SDK 内部多次调用 reqUserProfiles 方法
      { userId: 'user-01', nickname: '' },
      { userId: 'user-02' }
    ]
  },

  // 定义系统会话信息获取方法
  async reqSystemProfiles(systemIds: string[]): Promise<IRCKitSystemProfile[]> {
    // systemIds 为系统会话 ID 列表，业务层需要根据 systemIds 提供对应的系统会话信息
    return systemIds.map((systemId) => ({
      systemId,
      name: R.cname(), // 系统会话名称，请传递有效值，否则会影响系统会话信息展示
      portraitUri: R.image('60x60'), // 系统会话头像，请传递有效值，当头像获取失败或未提供，SDK 将使用默认头像
    }));
  },
}