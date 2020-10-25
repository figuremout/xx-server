define({ "api": [
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
            "description": "<p>Notice</p>"
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
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
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
            "field": "username",
            "description": "<p>用户名</p>"
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
            "optional": false,
            "field": "gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "school",
            "description": "<p>学校</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>签名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>标签JSON</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
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
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "Failed",
            "description": "<p>&quot;用户名已存在，更新失败&quot;</p>"
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
            "field": "LoginSuccess",
            "description": "<p>_id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "LoginFailed",
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
            "optional": false,
            "field": "gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
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
            "field": "RegisterSuccess",
            "description": "<p>Register&quot;注册成功&quot;</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "RegisterFailed",
            "description": "<p>&quot;用户已存在，注册失败&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controller/userCtrl.js",
    "groupTitle": "User"
  }
] });
