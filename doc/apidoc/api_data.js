define({ "api": [
  {
    "type": "post",
    "url": "/addAppointment",
    "title": "创建活动预约",
    "name": "addAppointment",
    "group": "Appointment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ownerID",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>起始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>终止时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>地点</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "maxParticipantsNum",
            "description": "<p>最大参与人数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>&quot;活动添加成功&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/appointmentCtrl.js",
    "groupTitle": "Appointment"
  },
  {
    "type": "post",
    "url": "/attendAppointment",
    "title": "参加活动",
    "name": "attendAppointment",
    "group": "Appointment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appointmentID",
            "description": "<p>活动ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userID",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>&quot;成功参加&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/appointmentCtrl.js",
    "groupTitle": "Appointment"
  },
  {
    "type": "get",
    "url": "/getAppointment",
    "title": "获取活动",
    "name": "getAppointment",
    "group": "Appointment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appointmentID",
            "description": "<p>活动ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>null</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/appointmentCtrl.js",
    "groupTitle": "Appointment"
  },
  {
    "type": "get",
    "url": "/getRecommendAppointments",
    "title": "获取推荐活动列表",
    "name": "getRecommendAppointments",
    "group": "Appointment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userID",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>-content</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/appointmentCtrl.js",
    "groupTitle": "Appointment"
  },
  {
    "type": "post",
    "url": "/addMsg",
    "title": "发送消息",
    "name": "addMsg",
    "group": "Chat",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sender_id",
            "description": "<p>发送方ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiver_id",
            "description": "<p>接收方ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>&quot;消息发送成功&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/chatCtrl.js",
    "groupTitle": "Chat"
  },
  {
    "type": "get",
    "url": "/getChats",
    "title": "获取聊天列表",
    "name": "getChats",
    "group": "Chat",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>聊天内容只返回最后一句</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/chatCtrl.js",
    "groupTitle": "Chat"
  },
  {
    "type": "get",
    "url": "/openChat",
    "title": "打开聊天框（初始化/获取聊天记录）",
    "name": "openChat",
    "group": "Chat",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sender_id",
            "description": "<p>发送方ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiver_id",
            "description": "<p>接收方ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>null</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/chatCtrl.js",
    "groupTitle": "Chat"
  },
  {
    "type": "post",
    "url": "/addConfession",
    "title": "创建表白",
    "name": "addConfession",
    "group": "Confession",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ownerID",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>&quot;创建表白成功&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/confessionCtrl.js",
    "groupTitle": "Confession"
  },
  {
    "type": "get",
    "url": "/getRecommendConfessions",
    "title": "获取推荐表白列表",
    "name": "getRecommendConfessions",
    "group": "Confession",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userID",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>-ownerID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/confessionCtrl.js",
    "groupTitle": "Confession"
  },
  {
    "type": "post",
    "url": "/supportConfession",
    "title": "点赞/取消点赞表白",
    "name": "supportConfession",
    "group": "Confession",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confessionID",
            "description": "<p>表白帖ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "supporterID",
            "description": "<p>点赞者ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>&quot;点赞成功&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/confessionCtrl.js",
    "groupTitle": "Confession"
  },
  {
    "type": "get",
    "url": "/getNotices",
    "title": "获取消息列表",
    "name": "getNotices",
    "group": "Notice",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>null</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/noticeCtrl.js",
    "groupTitle": "Notice"
  },
  {
    "type": "post",
    "url": "/addReply",
    "title": "评论杂谈贴",
    "name": "addReply",
    "group": "Talk",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "talkID",
            "description": "<p>杂谈贴ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ownerID",
            "description": "<p>评论者ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>&quot;评论添加成功&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/talkCtrl.js",
    "groupTitle": "Talk"
  },
  {
    "type": "post",
    "url": "/addTalk",
    "title": "创建杂谈贴",
    "name": "addTalk",
    "group": "Talk",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ownerID",
            "description": "<p>拥有者ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>杂谈贴标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>杂谈贴内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>&quot;创建杂谈贴成功&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/talkCtrl.js",
    "groupTitle": "Talk"
  },
  {
    "type": "get",
    "url": "/getRecommendTalks",
    "title": "获取推荐杂谈贴列表",
    "name": "getRecommendTalks",
    "group": "Talk",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>-content</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/talkCtrl.js",
    "groupTitle": "Talk"
  },
  {
    "type": "get",
    "url": "/getTalk",
    "title": "获取杂谈贴内容",
    "name": "getTalk",
    "group": "Talk",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "talkID",
            "description": "<p>杂谈贴ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>null</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/talkCtrl.js",
    "groupTitle": "Talk"
  },
  {
    "type": "post",
    "url": "/supportTalk",
    "title": "点赞/取消点赞杂谈贴",
    "name": "supportTalk",
    "group": "Talk",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "talkID",
            "description": "<p>杂谈贴ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "supporterID",
            "description": "<p>点赞者ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>&quot;点赞成功&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/talkCtrl.js",
    "groupTitle": "Talk"
  },
  {
    "type": "post",
    "url": "/followUser",
    "title": "关注/取消关注",
    "name": "followUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "follower",
            "description": "<p>粉丝用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "following",
            "description": "<p>被关注用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>&quot;关注成功&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Failed",
            "description": "<p>&quot;取消关注成功&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/userCtrl.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/getFollowers",
    "title": "获取粉丝信息列表",
    "name": "getFollowers",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>_id portrait username signature</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/userCtrl.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/getFollowings",
    "title": "获取关注的人信息列表",
    "name": "getFollowings",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>_id portrait username signature</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/userCtrl.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/getOwnedAppointments",
    "title": "获取拥有的活动预约",
    "name": "getOwnedAppointments",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ownerID",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>title createAt currentParticipants maxParticipantsNum</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/userCtrl.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/getOwnedTalksAndConfessions",
    "title": "获取拥有的杂谈贴和表白",
    "name": "getOwnedTalksAndConfessions",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ownerID",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>表白帖：ownerSchool createAt title 杂谈贴：createAt title</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/userCtrl.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/getRecommendUsers",
    "title": "获取推荐用户列表",
    "name": "getRecommendUsers",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>username gender birthDay school signature portrait</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/userCtrl.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/getUser",
    "title": "获取用户信息",
    "name": "getUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>需要的字段投影</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>projection</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/userCtrl.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/searchUsers",
    "title": "搜索用户",
    "name": "searchUsers",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>username gender school _id portrait</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/userCtrl.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/updateUser",
    "title": "更新用户信息",
    "name": "updateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用户电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "pwd",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "birthDay",
            "description": "<p>生日</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "school",
            "description": "<p>学校</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "signature",
            "description": "<p>签名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tags",
            "description": "<p>标签JSON</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "portrait",
            "description": "<p>头像地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>&quot;更新用户信息成功&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Failed",
            "description": "<p>&quot;false&quot; 用户名已存在</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/userCtrl.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/userLogin",
    "title": "用户登录",
    "name": "userLogin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>电话号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>_id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Failed",
            "description": "<p>&quot;登录失败&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/userCtrl.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/userRegister",
    "title": "用户注册",
    "name": "userRegister",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>电话号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pwd",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "birthDay",
            "description": "<p>生日</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"m\"",
              "\"f\""
            ],
            "optional": false,
            "field": "gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"省,市,校名\""
            ],
            "optional": false,
            "field": "school",
            "description": "<p>学校</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>&quot;注册成功&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Failed",
            "description": "<p>&quot;false&quot; 用户已存在</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/userCtrl.js",
    "groupTitle": "User"
  }
] });
