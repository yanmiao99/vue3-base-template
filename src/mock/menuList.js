
const list = [
  {
    "parentId": [
      null
    ],
    "id": "600d4075e218daaf4ec77e52",
    "menuType": 1,
    "menuName": "数据管理",
    "menuCode": "",
    "path": "/data",
    "icon": "DataLine",
    "order": "0",
    "component": "",
    "menuState": 1,
    "children": [
      {
        "parentId": [
          "600d4075e218daaf4ec77e52"
        ],
        "id": "600d525e602f452aaeeffcd9",
        "menuType": 1,
        "menuName": "数据看板",
        "menuCode": "",
        "path": "/data/Exhibition",
        "icon": "",
        "order": "1",
        "component": "/data/Exhibition",
        "menuState": 1,
        "children": [

        ],
        "action": [

        ]
      },
      {
        "parentId": [
          "600d4075e218daaf4ec77e52"
        ],
        "id": "600d525e602f452aaeeffc10",
        "menuType": 1,
        "menuName": "用户数据",
        "menuCode": "",
        "path": "/data/UserData",
        "icon": "",
        "order": "1",
        "component": "/data/UserData",
        "menuState": 1,
        "children": [
          {
            "parentId": [
              "600d4075e218daaf4ec77e52",
              "600d525e602f452aaeeffcd9"
            ],
            "id": "6030ca8f93f0e159c8390f0c",
            "menuType": "2",
            "menuState": "1",
            "menuName": "新增",
            "menuCode": "data-create"
          },
          {
            "parentId": [
              "600d4075e218daaf4ec77e52",
              "600d525e602f452aaeeffcd9"
            ],
            "id": "603226d9257d15a8c54cf9f8",
            "menuType": "2",
            "menuState": "1",
            "menuName": "删除",
            "menuCode": "data-delete"
          },
          {
            "parentId": [
              "600d4075e218daaf4ec77e52",
              "600d525e602f452aaeeffcd9"
            ],
            "id": "603253e0a821c6bb59084541",
            "menuType": "2",
            "menuState": "1",
            "menuName": "查看",
            "menuCode": "data-query",
          }
        ],
        "action": [
          {
            "parentId": [
              "600d4075e218daaf4ec77e52",
              "600d525e602f452aaeeffcd9"
            ],
            "id": "6030ca8f93f0e159c8390f0c",
            "menuType": "2",
            "menuState": "1",
            "menuName": "新增",
            "menuCode": "data-create"
          },
          {
            "parentId": [
              "600d4075e218daaf4ec77e52",
              "600d525e602f452aaeeffcd9"
            ],
            "id": "603226d9257d15a8c54cf9f8",
            "menuType": "2",
            "menuState": "1",
            "menuName": "删除",
            "menuCode": "data-delete"
          },
          {
            "parentId": [
              "600d4075e218daaf4ec77e52",
              "600d525e602f452aaeeffcd9"
            ],
            "id": "603253e0a821c6bb59084541",
            "menuType": "2",
            "menuState": "1",
            "menuName": "查看",
            "menuCode": "data-query",
          }
        ]
      }
    ]
  },
  {
    "parentId": [
      null
    ],
    "id": "600d4075e218daaf4ec77e53",
    "menuType": 1,
    "menuName": "菜单管理",
    "menuCode": "",
    "path": "/Menu",
    "icon": "Menu",
    "order": "0",
    "component": "",
    "menuState": 1,
    "children": [
    ]
  }
]


export default list
