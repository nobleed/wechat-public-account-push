/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。

 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxdb39038169b852e5',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'e20715a27f27b7a045be88a51dcb13ee',

  PROVINCE: '河北省',
  CITY: '沧州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '吕静',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oGDHb6P65Q65J0NqzY2MqQpbuZVQ，oGDHb6KBawnVlvGQTUXqYcwx8Loc',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'cn0tfGybQjoTTZAW6qZ4x4Sfewo6F_y9LDATDGUppoo',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-16',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '吕静', year: '2001', date: '05-26',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '吕静', year: '2001', date: '07-16',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '12-08',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-12-17' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '737dUgDCa1UdxBBxmCIv3IutFNOf8dkzhVSuhEyBDWA',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oGDHb6P65Q65J0NqzY2MqQpbuZVQ',
    }
  ],

}

module.exports = USER_CONFIG

