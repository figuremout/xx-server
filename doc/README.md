# 偕行——大学健康交友平台
# API接口文档
- [给前端开放的数据接口](./apidoc)

# 在线测试API
- [测试界面](./testAPI.html)

# 数据库设计
## users
> 用户信息

|键|类型|默认值|API CURD|备注|
|--|--|--|--|--|
|_id|String|-|-|数据库自动生成的唯一索引|
|phone|String|必填|R|电话号码|
|username|String|""|UR|用户名|
|pwd|String|必填|U|密码|
|birthDay|String|必填|UR|出生日期|
|gender|String|必填|UR|性别 [m, f]|
|school|String|必填|UR|学校|
|isSchoolVerified|Boolean|false|UR|学校是否认证|
|signature|String|""|UR|个性签名|
|tags|String[]|[]|UR|个性标签|
|portrait|String|""|UR|头像图片地址
|以上为用户基本信息字段|--|--|--|--|
|followings|String[]|[]|URD|正在关注 用户ID列表|
|followers|String[]|[]|UR|关注者 用户ID列表|
|chats|String[]|[]|URD|聊天记录 聊天记录ID列表|
|hasNewNotice|String[]|[]|UR|是否有新消息|
|trends|String[]|[]|R|我的动态 各区帖子ID列表|
|appointments|String[]|[]|R|参加的活动 参加活动列表|

## chats
> 聊天记录信息

|键|类型|默认值|API CURD|备注|
|--|--|--|--|--|
|_id|String|-|-|数据库自动生成的唯一索引|
|newMsgCount0|Number|0|UR|聊天方0新消息数目|
|newMsgCount1|Number|0|UR|聊天方1新消息数目|
|owners|String[]|[]|R|聊天双方 用户ID|
|msgs|[{}]|[]|UR|聊天双方 发送的信息 按时间顺序 每个json用_id代表发言方|

## notices
> 提醒消息信息

|键|类型|默认值|API CURD|备注|
|--|--|--|--|--|
|_id|String|-|-|数据库自动生成的唯一索引|
|ownerID|String|-|R|用户ID|
|postID|String|""|R|相关帖子ID|
|userID|String|-|R|是哪个用户ID|
|where|String|""|R|在哪个板块 ["表白墙", "杂谈区", "预约区", "疏导区"]|
|action|String|-|R|做了什么 ["赞", "回复", "关注"]|

## talks
> 杂谈区帖子

|键|类型|默认值|API CURD|备注|
|--|--|--|--|--|
|_id|String|-|-|数据库自动生成的唯一索引|
|ownerID|String|-|R|用户ID|
|date|String|-|R|帖子发布日期|
|content|String|""|R|帖子内容|
|replies|[{}]|[{date: String, content: String, supporters: []}]|R|回复列表|
|supporters|String[]|[]|UR|点赞ID列表|

## confessions
> 表白墙

|键|类型|默认值|API CURD|备注|
|--|--|--|--|--|
|_id|String|-|-|数据库自动生成的唯一索引|
|school|String|-|R|学校|
|date|String|-|R|发布时间|
|content|String|-|R|内容|
|supporters|String[]|[]|UR|点赞ID列表|

## appointments
> 活动预约

|键|类型|默认值|API CURD|备注|
|--|--|--|--|--|
|_id|String|-|-|数据库自动生成的唯一索引|
|ownerID|String|-|R|用户ID|
|title|String|-|R|标题|
|startDate|String|-|R|起始日期|
|endDate|String|-|R|结束日期|
|location|String|-|R|地点|
|currentParticipants|Int|-|R|当前参加人数|
|maxParticipants|Int|-|R|最大参加人数|


## ~~疏导区~~