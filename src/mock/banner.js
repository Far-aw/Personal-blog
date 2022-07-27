import Mock from "mockjs"

Mock.mock("/api/banner","get",{
    code:0,
    msg:"",
    data:
    [
      {
        id: "1",
        midImg: "http://mdrs.yuanjin.tech/img/20201031141350.jpg",
        bigImg: "https://pic3.zhimg.com/v2-8257f76a8f367844005db61dbecd496b_r.jpg?source=1940ef5c",
        title: "易大师",
        description: " 不要害怕未知的事物",
      },
      {
        id: "2",
        midImg: "http://mdrs.yuanjin.tech/img/20201031205551.jpg",
        bigImg: "https://tse1-mm.cn.bing.net/th/id/R-C.4e42611f7c720169dec5f477095ea5b6?rik=REFLRYV8g5upuw&riu=http%3a%2f%2f121.40.114.220%2fwp-content%2fuploads%2f2016%2f10%2fxiaotuzi.jpg&ehk=T1nDzy1%2bJfosSnoyGgFdXUdpz2w3%2bdV2%2f6F5U2Y8Mag%3d&risl=&pid=ImgRaw&r=0",
        title: "迅捷斥候",
        description: " 我一路种下了蘑菇、只为让你知道回家的路",
      },
      {
        id: "3",
        midImg: "http://mdrs.yuanjin.tech/img/20201031204403.jpg",
        bigImg: "https://img.zcool.cn/community/01bc575d39062ca80120695c4b71e6.jpg@1280w_1l_2o_100sh.jpg",
        title: "死亡颂唱者",
        description: "一曲终了，繁花散尽，伊人已逝，只余一声空叹",
      },
    ]
    
})