# 偕行 服务端

## 源码
- [GitHub](https://github.com/githubzjm/xx-server)

## API接口文档（RPC风格）
- [接口文档](http://www.zjmpage.site:8001/apidoc/index.html)
- 聊天消息实时推送方式 1. 轮询 2. 推送

## 在线测试API
- [测试界面](http://www.zjmpage.site:8001/testAPI.html)

## 数据库设计
### users
> 用户信息

|键|类型|默认值|备注|
|--|--|--|--|
|_id|String|-|数据库自动生成的唯一索引|
|phone|String|必填|电话号码|
|username|String|_id|用户名|
|pwd|String|必填|密码|
|birthDay|String|必填|出生日期|
|gender|String|必填|性别 'm'/'f'|
|school|String|必填|学校|
|isSchoolVerified|Boolean|false|学校是否认证|
|signature|String|""|个性签名|
|tags|String[]|[]|个性标签|
|portrait|String|""|头像图片地址|
|followings|String[]|[]|正在关注 用户ID列表|
|followers|String[]|[]|关注者 用户ID列表|
|chaters|String[]|[]|聊天对象ID列表|
|hasNewNotice|Boolean|false|是否有新消息|

### chats
> 聊天记录信息

|键|类型|默认值|备注|
|--|--|--|--|
|_id|String|-|数据库自动生成的唯一索引|
|newMsgCount0|Number|0|聊天方0新消息数目|
|newMsgCount1|Number|0|聊天方1新消息数目|
|owners|String[]|[]|聊天双方 [sender_id, receiver_id]|
|msgs|JSONArray|[]|聊天双方发送的信息 按时间顺序 [{owner: "", msg: ""},...]|

### notices
> 提醒消息信息

|键|类型|默认值|备注|
|--|--|--|--|
|_id|String|-|数据库自动生成的唯一索引|
|ownerID|String|-|提醒拥有者ID|
|postID|String|""|相关帖子ID|
|userID|String|-|相关用户ID|
|where|String|""|在哪个板块 "表白墙"/"杂谈区"/"预约区"/"疏导区"|
|action|String|-|做了什么 "赞"/"回复"/"关注"/"参加"|

### talks
> 杂谈区帖子

|键|类型|默认值|备注|
|--|--|--|--|
|_id|String|-|数据库自动生成的唯一索引|
|ownerID|String|-|用户ID|
|createAt|Date|Date.now|帖子发布日期|
|title|String|""|帖子标题|
|content|String|""|帖子内容|
|replies|JSONArray|[]|回复列表 [{ownerID: String, content: String, createAt: Date}, ...]|
|supporters|String[]|[]|点赞ID列表|

### confessions
> 表白墙

|键|类型|默认值|备注|
|--|--|--|--|
|_id|String|-|数据库自动生成的唯一索引|
|ownerID|String|-|用户ID|
|ownerSchool|String|-|学校|
|createAt|Date|Date.now|发布时间|
|title|String|""|标题|
|content|String|""|内容|
|supporters|String[]|[]|点赞ID列表|

### appointments
> 活动预约

|键|类型|默认值|备注|
|--|--|--|--|
|_id|String|-|数据库自动生成的唯一索引|
|ownerID|String|-|用户ID|
|title|String|""|标题|
|content|String|""|内容|
|startDate|String|-|起始日期 月/日/年|
|endDate|String|-|结束日期 月/日/年|
|location|String|-|地点|
|currentParticipants|String[]|[]|当前参加者ID|
|maxParticipantsNum|Number|0|最大参加人数|