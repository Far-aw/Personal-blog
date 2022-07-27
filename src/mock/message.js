import Mock from "mockjs";
import qs from "querystring";

Mock.mock("/api/message", "post", {
  code: 0,
  msg: "",
  data: {
    id: "@guid",
    nickname: "@cname",
    content: "@cparagraph(1, 10)",
    createDate: Date.now(),
    "avatar|1": [
        "https://ts1.cn.mm.bing.net/th/id/R-C.87ac1bb7ec9b06d096cc50dc18f5c870?rik=ZwkntPIYidKpEg&riu=http%3a%2f%2fimg.crcz.com%2fallimg%2f202002%2f07%2f1581079795640312.jpg&ehk=AMOTc4G6sQq54HYnck6snIlsl7su%2bGr%2fOAo1JiPT9%2fo%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
        "https://ts1.cn.mm.bing.net/th/id/R-C.259d3f3c6fd263ec7470696f3849e304?rik=45yh2511%2b1ILpg&riu=http%3a%2f%2fimg.duoziwang.com%2f2018%2f17%2f05221722804168.jpg&ehk=ChmvZ79MtrypzBOuCgKnObyl7XGBcyq%2f%2b4RbeifMP6M%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
        "https://ts1.cn.mm.bing.net/th/id/R-C.71e3a1346e07fd25db2c995ec328e32b?rik=JV2PFUSH6Wb%2bbw&riu=http%3a%2f%2fimg.duoziwang.com%2f2018%2f17%2f05221722804158.jpg&ehk=r53RS9cGCnBpNDkGZbIqeNrGpDFubDikn9%2fV0pXXQl0%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
        "https://ts1.cn.mm.bing.net/th/id/R-C.879423aa9d7656e0c9c1e8d2c1a94a9d?rik=WVIHqCdqvoMmHQ&riu=http%3a%2f%2fpic.22520.cn%2fup%2f200702%2f1593660424129801-lp.jpg&ehk=x0qNBeY2dJcOIKlb9jJYlVZbxy8TT2sml0x%2ffLJMrgk%3d&risl=&pid=ImgRaw&r=0",
    ],
  },
});

Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function(options) {
  const query = qs.parse(options.url);

  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      total: 66,
      [`rows|${query.limit || 10}`]: [
        {
          id: "@guid",
          nickname: "@cname",
          content: "@cparagraph(1, 10)",
          createDate: Date.now(),
          "avatar|1": [
            "https://ts1.cn.mm.bing.net/th/id/R-C.87ac1bb7ec9b06d096cc50dc18f5c870?rik=ZwkntPIYidKpEg&riu=http%3a%2f%2fimg.crcz.com%2fallimg%2f202002%2f07%2f1581079795640312.jpg&ehk=AMOTc4G6sQq54HYnck6snIlsl7su%2bGr%2fOAo1JiPT9%2fo%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
            "https://ts1.cn.mm.bing.net/th/id/R-C.259d3f3c6fd263ec7470696f3849e304?rik=45yh2511%2b1ILpg&riu=http%3a%2f%2fimg.duoziwang.com%2f2018%2f17%2f05221722804168.jpg&ehk=ChmvZ79MtrypzBOuCgKnObyl7XGBcyq%2f%2b4RbeifMP6M%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
            "https://ts1.cn.mm.bing.net/th/id/R-C.71e3a1346e07fd25db2c995ec328e32b?rik=JV2PFUSH6Wb%2bbw&riu=http%3a%2f%2fimg.duoziwang.com%2f2018%2f17%2f05221722804158.jpg&ehk=r53RS9cGCnBpNDkGZbIqeNrGpDFubDikn9%2fV0pXXQl0%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
            "https://ts1.cn.mm.bing.net/th/id/R-C.879423aa9d7656e0c9c1e8d2c1a94a9d?rik=WVIHqCdqvoMmHQ&riu=http%3a%2f%2fpic.22520.cn%2fup%2f200702%2f1593660424129801-lp.jpg&ehk=x0qNBeY2dJcOIKlb9jJYlVZbxy8TT2sml0x%2ffLJMrgk%3d&risl=&pid=ImgRaw&r=0",
          ],
        },
      ],
    },
  });
});
