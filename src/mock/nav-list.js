export default {
  getStatisticalData: () => {
    return {
      code: 20000,
      data: {
        nav: [
          {
            name: '视频教程',
            children: [
              {
                name: '新手入门',
                children: [],
                id: 1,
                parent_id: 2
              }
            ],
            id: 2
          },
          {
            name: '问题中心',
            children: [],
            id: 1
          },
          {
            name: '角色管理',
            id: 5,
            children: [
              {
                name: '客服',
                children: [],
                id: 2,
                parent_id: 5
              },
              {
                name: '财务',
                id: 6,
                parent_id: 5,
                children: [
                  {
                    name: '大成互联',
                    children: [],
                    id: 3,
                    parent_id: 6
                  },
                  {
                    name: '软通宝',
                    children: [],
                    id: 4,
                    parent_id: 6
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
