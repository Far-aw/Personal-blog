import Mock from "mockjs";

Mock.mock("/api/setting","get", {
    code:0,
    msg:"",
    data: {
        avatar: "https://file.petpet.com.cn/aphoto/202106/21/1e6f3511-ac47-4cf2-b325-390b04f073e1.jpg",
        siteTitle: "我的个人空间",
        github: "https://github.com/Far-aw",
        qq: "3209863015",
        qqQrCode:
          "https://file.petpet.com.cn/aphoto/202106/21/1e6f3511-ac47-4cf2-b325-390b04f073e1.jpg",
        weixin: "dsw3209863015",
        weixinQrCode:
          "https://pic1.zhimg.com/v2-f5aa8cab9fbdd007da5999b4ce2ce439_1440w.jpg?source=172ae18b",
        mail: "3209863015@qq.com",
        icp: "made in china",
        githubName: "Far-aw",
        favicon: "https://tse2-mm.cn.bing.net/th/id/OIP-C.SUEVtw5Le84sAKQqKi3T6gHaFj?pid=ImgDet&rs=1",
      },
})