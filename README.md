# astro.bmqy.net

北门清燕的博客 - Astro版，魔改自：[astro-gyoza](https://github.com/lxchapu/astro-gyoza)

## 魔改说明

- [x] 顶部`logo`去除圆角样式
- [x] `hero`模块增加`enable`配置，默认`false`
- [x] 导航菜单显示`分类`、`标签`
- [x] 指定分类增加转载提示，配置在`config.json`中`copyrightCategory`字段
- [x] `分页url`以`/`结尾，以适配原`hexo`时使用的`url`
- [x] 支持`http://xxx.com/[id].html`的`url`地址，参考[官方文档](https://docs.astro.build/zh-cn/reference/configuration-reference/#%E6%9E%84%E5%BB%BA%E9%80%89%E9%A1%B9)
- [x] 调整`spec`、`archive`文件，使其适配原`hexo`时使用的`/`结尾`url`
- [x] `rss.xml`改为`feed.xml`，以适配原`hexo`时使用的`url`。另：同步修改文章`url`为`/[id].html`形式
- [x] `date`、`lastMod`的类型改为`string`，方法实现参考[官方文档](https://docs.astro.build/zh-cn/guides/content-collections/#%E7%94%A8-zod-%E5%AE%9A%E4%B9%89%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B)
- [x] 移除提交友情链接内容
- [x] 增加`支付宝收款码`，配置在`config.json`中
- [x] `分享到`增加支持`微博`、`QQ空间`
- [x] `分享此内容`修改为`扫码阅读`
- [x] `返回顶部`模块增加`社交账号`显示，支持：`QQ、GitHub、Telegram、Twitter、Email`，配置取自`config.json`中`hero.socials`字段
- [x] `文章授权`右侧签名图片替换，手写体`svg`图片可使用网站[ Calligrapher.ai ](https://www.calligrapher.ai/)在线制作
- [x] 文章底部增加`其它发布渠道`模块，配置在`config.json`中`followMe`字段
- [x] 集成 [elog](https://github.com/LetTTGACO/elog) ，以使用`notion`管理文章
- [x] 支持`restful api`，支持以下接口访问，仅支持`get`请求，`全字段`返回。`swiper`需要的文章在`config.json`中`restful.swipers`字段配置，更多需求参考[官方文档](https://docs.astro.build/zh-cn/guides/endpoints/)：
  ```
  /api/posts/[page].json
  /api/search.json
  /api/swiper.json
  /api/articles/[slug].json
  ```
- [x] 支持各类站长平台网站所有权的`txt`文件验证，配置在`config.json`中`webMasterTxt`字段
- [x] `GitHub actions`应用 [Tencent COS Action](https://github.com/marketplace/actions/tencent-cos-action) 部署到腾讯`COS`，并使用脚本刷新`cdn`缓存
- [x] 代码自动换行
- [x] 头部`head`标签中增加广告位通用代码，支持`百度联盟广告`
- [x] 文章底部`article`标签中最后面增加广告位代码，支持`百度联盟广告`
- [x] `footer`模块按[Innei](https://innei.in/)进行调整，支持备案号显示，配置在`config.json`中`site.icp`字段
- [x] 调整`Markdown`中`code`、`url`样式
- [x] 改动有点多、有点杂乱，不能一一记录

## 感谢

- [lxchapu](https://github.com/lxchapu/astro-gyoza)
- [Astro](https://astro.build/)

<!--START_SECTION:bmqy-->

## 博客目录(2024-07-07 08:09:21更新)

[windows服务器安装mysql踩坑指北](https://www.bmqy.net/2672.html)

[为哪吒面板增加视频背景](https://www.bmqy.net/2671.html)

[继续折腾astro](https://www.bmqy.net/2670.html)

[serv00部署FreshRSS](https://www.bmqy.net/2667.html)

[【原创】油猴脚本：哪吒VPS橱窗后台脚本](https://www.bmqy.net/2666.html)

[哪吒面板终极进化之VPS橱窗](https://www.bmqy.net/2665.html)

[哪吒面板default主题小鸡底部增加购买同款按钮](https://www.bmqy.net/2664.html)

[Typecho二开魔改简单指北](https://www.bmqy.net/2663.html)

[【原创】油猴脚本：论坛快捷回帖](https://www.bmqy.net/2662.html)

[简单米表：Typecho-Simple-Mibiao](https://www.bmqy.net/2661.html)

[Windows 11 23H2更新遇到下载错误解决方法](https://www.bmqy.net/2660.html)

[Microsoft 365 E5开发者订阅管理员双重认证丢失解决方法](https://www.bmqy.net/2659.html)

[Virtualbox安装Ubuntu不完全指北](https://www.bmqy.net/2658.html)

[一剑开天门](https://www.bmqy.net/2657.html)

[将chrome谷歌浏览器轻松打造成rss阅读器](https://www.bmqy.net/2656.html)

[地震云](https://www.bmqy.net/2655.html)

[罗刹海市](https://www.bmqy.net/2654.html)

[关于笑果我觉得还是罗翔老师说的好](https://www.bmqy.net/2653.html)

[推荐正在玩的游戏：SimpleMMO，附游戏助手SMMOHelper](https://www.bmqy.net/2652.html)

[集成Elog使用notion数据库](https://www.bmqy.net/2651.html)

[【原创】ios捷径：法定工作日打卡提醒](https://www.bmqy.net/2318.html)

[测试AI](https://www.bmqy.net/2650.html)

[再次折腾hexo](https://www.bmqy.net/2649.html)

[docker部署freshrss](https://www.bmqy.net/2648.html)

[apifox自动导入apidoc接口数据](https://www.bmqy.net/2645.html)

[node项目部署到ftp](https://www.bmqy.net/2640.html)

[vite项目使用tinymce插件axupimgs实现多图片上传](https://www.bmqy.net/2642.html)

[tomcat服务器上utf8编码的文件乱码解决方法](https://www.bmqy.net/2639.html)

[快捷指令：图床](https://www.bmqy.net/2637.html)

[七牛上传视频获取视频封面和缩略图](https://www.bmqy.net/2444.html)

[注销网站得慎重](https://www.bmqy.net/2364.html)

[【原创】ios捷径：捷径库](https://www.bmqy.net/2342.html)

[【原创】ios捷径：自动壁纸](https://www.bmqy.net/2312.html)

[【原创】ios捷径：倒班闹钟](https://www.bmqy.net/2287.html)

[idea找回执行git pull操作后，被覆盖的本地未提交的代码](https://www.bmqy.net/2274.html)

[altserver跳坑指北](https://www.bmqy.net/2254.html)

[吐一吐三丰云免费服务器](https://www.bmqy.net/2246.html)

[Microsoft Store中的应用软件如何备份数据](https://www.bmqy.net/2237.html)

[卖盘](https://www.bmqy.net/2194.html)

[利用frp实现微软远程桌面管理内网电脑之不完全指北](https://www.bmqy.net/2174.html)

[apicloud用tortoisesvn管理代码，实现按不同分支编译打包app](https://www.bmqy.net/2144.html)

[vscode插件提示：command 'extension.updateSettings' not found解决方法](https://www.bmqy.net/2139.html)

[apicloud使用alipayplus支付宝支付模块注意事项](https://www.bmqy.net/2130.html)

[【原创】越狱插件安装注意事项](https://www.bmqy.net/2088.html)

[api.closeFrameGroup的一些注意事项](https://www.bmqy.net/2081.html)

[【原创】ios捷径：我的心愿单](https://www.bmqy.net/1992.html)

[【原创】ios捷径：一键获取urlscheme](https://www.bmqy.net/1933.html)

[【原创】ios捷径：一键签到](https://www.bmqy.net/1874.html)

[【原创】ios捷径：qq群一键签到](https://www.bmqy.net/1844.html)

[【原创】ios捷径：百度搜索风云榜2.1.0](https://www.bmqy.net/1831.html)

[【原创】ios捷径：一键天气预报](https://www.bmqy.net/1816.html)

[【原创】ios捷径：微博热搜榜2.0强势更新](https://www.bmqy.net/1798.html)

[ios捷径：bmqy捷径库](https://www.bmqy.net/1777.html)

[自定义IntelliJ IDEA配置和插件的存放目录，以方便同步idea配置](https://www.bmqy.net/1773.html)

[wordpress平台next主题](https://www.bmqy.net/1754.html)

[vscode本地调试asp](https://www.bmqy.net/1711.html)

[ajaxFileUpload上传成功也执行error方法](https://www.bmqy.net/1707.html)

[更换回wordpress。。。](https://www.bmqy.net/1703.html)

[一键收取熊猫守护者威力值](https://www.bmqy.net/1450.html)

[vscode软件窗口标题栏显示文件完整路径](https://www.bmqy.net/1451.html)

[微信小程序“支付签名验证失败”问题的解决参考](https://www.bmqy.net/1452.html)

[“idea已连接上ftp但看不到文件”的解决办法](https://www.bmqy.net/1453.html)

[js格式化时间显示](https://www.bmqy.net/1454.html)

[js实现中文转换成拼音](https://www.bmqy.net/1455.html)

[h5移动端ios输入法软键盘导致fixed布局bug的解决方案](https://www.bmqy.net/1456.html)

[生命不息，折腾不止之“hexo”](https://www.bmqy.net/1457.html)

[echarts中tooltips自定义数据结构与样式](https://www.bmqy.net/1458.html)

[淘米辅助工具](https://www.bmqy.net/1459.html)

[聚名网辅助工具](https://www.bmqy.net/1460.html)

[仿站制作6](https://www.bmqy.net/1461.html)

[wordpress新添加页面显示评论](https://www.bmqy.net/1462.html)

[华为mate8（b584）root过程简要记录](https://www.bmqy.net/1463.html)

[asp解析json的方法](https://www.bmqy.net/1464.html)

[为子主题增加主题选项功能](https://www.bmqy.net/1465.html)

[自制chrome扩展：百度云分享链接一键登录](https://www.bmqy.net/1466.html)

[清燕的云集小店](https://www.bmqy.net/1467.html)

[Google play下载app状态栏进度显示异常的应对方法](https://www.bmqy.net/1468.html)

[吐槽百度翻译之离线翻译包](https://www.bmqy.net/1469.html)

[现在只有人民才是真正的为人民](https://www.bmqy.net/1470.html)

[吐槽腾讯大王卡](https://www.bmqy.net/1471.html)

[wordpress添加twentysixteen子主题](https://www.bmqy.net/1472.html)

[idea配置less自动编译](https://www.bmqy.net/1473.html)

[使用chrome浏览器调试移动端web页面](https://www.bmqy.net/1474.html)

[idea编译less并使用autoprefixer](https://www.bmqy.net/1475.html)

[sublime自动编译less2css插件，保存时提示系统找不到指定文件](https://www.bmqy.net/1476.html)

[吐一吐中信的升白金](https://www.bmqy.net/1477.html)

[Android手机下输入框获取焦点时, 输入法挡住输入框bug的解决方法](https://www.bmqy.net/1478.html)

[wordpress头像不显示解决方法](https://www.bmqy.net/1480.html)

[用子主题functions.php添加自定义功能后访问网站报错解决方法](https://www.bmqy.net/1479.html)

[ueditor百度编辑器添加自定义模板并设为默认](https://www.bmqy.net/1481.html)

[仿站制作5](https://www.bmqy.net/1482.html)

[读老树画画随感](https://www.bmqy.net/1483.html)

[VMware-workstation 12 安装 Mac OS X 10.10](https://www.bmqy.net/1484.html)

[做梦想](https://www.bmqy.net/1485.html)

[再咏咳](https://www.bmqy.net/1486.html)

[webstorm10配置less编译环境](https://www.bmqy.net/1487.html)

[数钱数到不愿醒，睡觉睡到腿抽筋儿](https://www.bmqy.net/1488.html)

[百度siteApp创建移动站后，提示“开发者模式出错”的解决方法](https://www.bmqy.net/1489.html)

[简单的jquery滑动门代码](https://www.bmqy.net/1490.html)

[瞎子和近视的区别](https://www.bmqy.net/1491.html)

[设为首页、添加收藏的javascript代码](https://www.bmqy.net/1492.html)

[一个坏人好事做的再多，也抵不上一件坏事毁的彻底](https://www.bmqy.net/1493.html)

[ie8使背景图片全屏显示的方法及问题](https://www.bmqy.net/1494.html)

[解决wordpress添加主题时列表中缩略图不显示的问题](https://www.bmqy.net/1495.html)

[wordpress在指定分类下的文章内容后显示自定义推广信息](https://www.bmqy.net/1496.html)

[仿站作品1](https://www.bmqy.net/1500.html)

[仿站制作2](https://www.bmqy.net/1499.html)

[仿站制作3](https://www.bmqy.net/1498.html)

[仿站制作4](https://www.bmqy.net/1497.html)

[dedecms使用ajax调用指定栏目文章列表](https://www.bmqy.net/1501.html)

[生活就是做一点坏事，之后就再多做好事](https://www.bmqy.net/1502.html)

[百度谷歌一键切换（bmqy修复版）](https://www.bmqy.net/1503.html)

[小米2、2S合并分区](https://www.bmqy.net/1504.html)

[wordpress重新安装出现“wordpress database error，can’t find file”错误](https://www.bmqy.net/1505.html)

[dedecms面包屑导航链接样式修改](https://www.bmqy.net/1506.html)

[使用“Standalone Sitemap Generator”工具生成sitemap.xml和sitemap.html网站地图](https://www.bmqy.net/1507.html)

[windows不能在本地计算机启动apache服务的解决方法](https://www.bmqy.net/1508.html)

[图片放入到indesign中后变亮、颜色都变浅的解决办法](https://www.bmqy.net/1509.html)

[为了解决小米手机内部存储空间不足问题，对手机进行重新分区](https://www.bmqy.net/1510.html)

[2015上天班第一天](https://www.bmqy.net/1511.html)

[京城2015年的第一场雪](https://www.bmqy.net/1512.html)

[诺不轻信人不负我，言不轻诺我不负人](https://www.bmqy.net/1513.html)

[wordpress使用twentyfifteen模板做子主题所遇问题的解决及记录](https://www.bmqy.net/1514.html)

[做梦也似大电影](https://www.bmqy.net/1515.html)

[dedecms增加新留言邮件提醒和后台留言管理模块](https://www.bmqy.net/1517.html)

[dedecms重新安装后，文件中链接地址多出“include”路径的解决方法](https://www.bmqy.net/1516.html)

[AspCms在子菜单栏目后面显示产品数量或新闻数量的解决办法](https://www.bmqy.net/1518.html)

[dedecms调用指定单一子栏目文章列表无内容的问题](https://www.bmqy.net/1519.html)

[如今这年头，宅在家里、不凑热闹也是一种自保地方式。](https://www.bmqy.net/1520.html)

[Active Server Pages 错误 ‘ASP 0107’解决办法](https://www.bmqy.net/1521.html)

[js获取鼠标当前所在页面位置](https://www.bmqy.net/1522.html)

[万网空间服务器上传网站后出现HTTP500.19错误](https://www.bmqy.net/1523.html)

[ueditor编辑器创建超链接时添加class样式](https://www.bmqy.net/1524.html)

[dedecms清空所有文章且以后新建文章id从1开始](https://www.bmqy.net/1525.html)

[dedecms更换html编辑器为ueditor](https://www.bmqy.net/1526.html)

[dedecms列表页调用文章内容](https://www.bmqy.net/1527.html)

[心无所倚](https://www.bmqy.net/1528.html)

[“上盈其志，下务其功。悠悠黄河，吾其济乎！”](https://www.bmqy.net/1529.html)

[myeclipse新拷贝到电脑后错误弹窗，无法打开的解决方法](https://www.bmqy.net/1530.html)

[其实我不是强迫症](https://www.bmqy.net/1532.html)

[到哪都有wifi的人](https://www.bmqy.net/1531.html)

[miui开启节省流量功能后数据流量不能使用的问题](https://www.bmqy.net/1533.html)

[治世之能臣，乱世之废柴](https://www.bmqy.net/1534.html)

[来四张凑数](https://www.bmqy.net/1535.html)

[感觉不错的水天一色](https://www.bmqy.net/1536.html)

[修身、立业、齐家、治国、平天下](https://www.bmqy.net/1537.html)

[人闯红灯不可怕，车闯红灯也不可怕](https://www.bmqy.net/1538.html)

[蓝蓝的天上白云飘](https://www.bmqy.net/1539.html)

[差一点儿就拍中了闪电](https://www.bmqy.net/1540.html)

[扬帆起航](https://www.bmqy.net/1541.html)

[这算一景儿三拍么](https://www.bmqy.net/1542.html)

[吐一吐360的开机优化](https://www.bmqy.net/1543.html)

[八月第二波蓝天白云来袭](https://www.bmqy.net/1545.html)

[白云依旧](https://www.bmqy.net/1544.html)

[八月第一张](https://www.bmqy.net/1546.html)

[早晨的雨，起早的景儿](https://www.bmqy.net/1547.html)

[雷鸣雨早](https://www.bmqy.net/1548.html)

[仰望天空](https://www.bmqy.net/1549.html)

[就止一张](https://www.bmqy.net/1550.html)

[早早地一轮红日](https://www.bmqy.net/1551.html)

[为了有所为而有所拍](https://www.bmqy.net/1552.html)

[又一波儿天空来袭](https://www.bmqy.net/1553.html)

[燕美清照之天上的海](https://www.bmqy.net/1555.html)

[警不能以警，察不能以察](https://www.bmqy.net/1554.html)

[面对着巴西被7：1，我只想大笑三声“哇哈哈哈！让你们再赌球！”](https://www.bmqy.net/1556.html)

[php-5.5.14+Apache-2.4.9+xDebug安装配置](https://www.bmqy.net/1558.html)

[再平和自然地表现,也掩盖不了内心地焦急](https://www.bmqy.net/1557.html)

[安卓手机低电量时自动关机](https://www.bmqy.net/1559.html)

[“Brackets-宋体”扩展](https://www.bmqy.net/1560.html)

[新版百度首页设置“新窗口打开搜索页”](https://www.bmqy.net/1561.html)

[blue memories quietly yesterday](https://www.bmqy.net/1562.html)

[什么是偶像，因为他像偶。](https://www.bmqy.net/1563.html)

[北门清燕](https://www.bmqy.net/1565.html)

[流浪哥](https://www.bmqy.net/1564.html)

[第一个浏览器扩展“取消关注主持人”发布成功](https://www.bmqy.net/1566.html)

[2014.6.7拍摄](https://www.bmqy.net/1567.html)

[原地](https://www.bmqy.net/1568.html)

<!--END_SECTION:bmqy-->

## 联系我

[@chanel](https://t.me/tcbmqy)  
[@group](https://t.me/tgbmqy)
