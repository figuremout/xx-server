# 偕行 服务器+数据库

## 源码
- [GitHub库](https://github.com/githubzjm/xx-server)

## API接口文档（RPC风格）
- [接口文档](./apidoc/index.html)
- 聊天消息实时推送方式 1. 轮询 2. 推送

## 在线测试API
- [测试界面](./testAPI.html)

## 实现的功能
1. 登录
2. 注册
3. 更新用户信息
4. 获取用户信息
5. 关注/取消关注用户（同时提醒被关注用户）
6. 获取聊天记录列表（显示聊天对象 最新的一条消息 未读消息数）
7. 和任意用户打开对话框并获取之前的所有聊天内容（归零未读消息）
8. 和其他用户发送消息
9. 获取是否有新提醒
10. 获取所有提醒（关注 点赞 评论）
11. 发送杂谈贴
12. 给杂谈贴点赞/取消点赞（同时提醒被点赞用户）
13. 在杂谈帖中发评论（同时提醒被评论用户）
14. ~~给杂谈贴的评论点赞/取消点赞（同时提醒被点赞用户）~~
15. 获取杂谈贴列表
16. 获取杂谈贴内容（包括评论）
17. 

## 数据库设计
### users
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
|chaters|String[]|[]|URD|聊天对象ID列表|
|hasNewNotice|String[]|[]|UR|是否有新消息|

### chats
> 聊天记录信息

|键|类型|默认值|API CURD|备注|
|--|--|--|--|--|
|_id|String|-|-|数据库自动生成的唯一索引|
|newMsgCount0|Number|0|UR|聊天方0新消息数目|
|newMsgCount1|Number|0|UR|聊天方1新消息数目|
|owners|String[]|[]|R|聊天双方 [sender_id, receiver_id]|
|msgs|[{}]|[]|UR|聊天双方 发送的信息 按时间顺序 [{owner: , msg: }]|

### notices
> 提醒消息信息

|键|类型|默认值|API CURD|备注|
|--|--|--|--|--|
|_id|String|-|-|数据库自动生成的唯一索引|
|ownerID|String|-|R|用户ID|
|postID|String|""|R|相关帖子ID|
|userID|String|-|R|是哪个用户ID|
|where|String|""|R|在哪个板块 ["表白墙", "杂谈区", "预约区", "疏导区"]|
|action|String|-|R|做了什么 ["赞", "回复", "关注"]|

### talks
> 杂谈区帖子

|键|类型|默认值|API CURD|备注|
|--|--|--|--|--|
|_id|String|-|-|数据库自动生成的唯一索引|
|ownerID|String|-|R|用户ID|
|createAt|Date|Date.now|R|帖子发布日期|
|content|String|""|R|帖子内容|
|replies|[{ownerID: String, content: String, createAt: Date}]|[]|R|回复列表|
|supporters|String[]|[]|UR|点赞ID列表|

### confessions
> 表白墙

|键|类型|默认值|API CURD|备注|
|--|--|--|--|--|
|_id|String|-|-|数据库自动生成的唯一索引|
|school|String|-|R|学校|
|createAt|Date|Date.now|R|发布时间|
|content|String|-|R|内容|
|supporters|String[]|[]|UR|点赞ID列表|

### appointments
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


### ~~疏导区~~

## Nodejs和Python脚本交互方案
服务器每隔1tick自动错峰运行：
(1) 读取数据库将算法的参数写入users.csv
(2) 运行python脚本读取users.csv将运行结果写入recommend.csv
(3) 读取recommend.csv写入数据库的表中

|Tick|0|1|2|3|4|5|6|7|8|9|
|----|-|-|-|-|-|-|-|-|-|-|
|(2) |1|1|0|0|1|0|0|1|0|0|
|(3) |1|0|1|0|0|1|0|0|1|0|
|(1) |1|0|0|1|0|0|1|0|0|1|
|总  |(123)|(2)|(3)|(1)|(2)|(3)|(1)|(2)|(3)|(1)|

- 1: 运行态 0: 闲置态

- 好处：
  1. 响应用户拉取推荐列表的请求就直接读数据库结果返回，延时和其他普通请求没有区别
  2. node是异步io，(1)(3)步的文件读写不会影响服务器线程，只需要考虑读写数据库的时延
  3. 充分利用服务器性能
  4. python脚本运行在系统的新进程内，算法复杂度不影响服务器

- 坏处：
  1. 服务器启动时要运行三部分代码，好在启动时数据量应该并不太大，不需要计算太久
  2. 用户获取的推荐结果是2~4 tick之前的参数计算得的结果，时效性较差

- 所以1tick可以考虑=10~30min左右，免得推荐结果太过时

- [数据库表导出为csv](https://www.cnblogs.com/qingtianyu2015/p/5968400.html)
- [csv存入数据库1](https://blog.csdn.net/cunjie3951/article/details/106919327)
- [csv存入数据库2](https://blog.csdn.net/luanshaofeng/article/details/51889922)


