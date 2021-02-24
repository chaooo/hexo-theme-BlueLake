# BlueLake

一个简洁轻量化的响应式[Hexo](https://hexo.io/)博客主题。

- 点击预览[【深色主题】](https://chaooo.github.io/)、[【浅色主题】](https://chaoo.oschina.io/)

[![BlueLake template preview](http://cdn.chaooo.top/hexo/BlueLake.jpg)](https://chaooo.github.io/)

## 安装

### 安装主题和渲染:

```shell
$ git clone https://github.com/chaooo/hexo-theme-BlueLake.git themes/BlueLake
```
### 启用

在Hexo配置文件（`hexo/_config.yml`）中把主题设置修改为`BlueLake`。
```  bash
theme: BlueLake
```

### 更新

``` bash
cd themes/BlueLake
git pull
```

## 主题配置
打开`themes/BlueLake/_config.yml`进行配置。

``` yaml
# Theme version
version: 3.0.0

# Theme tone
dark: true # true/false
favicon: /favicon.png
banner: "images/banner.jpg"
banner-dark: "images/banner-dark.jpg"

# Header
menu:
  - page: home
    directory: .
    icon: fa-home
  - page: archive
    directory: archives/
    icon: fa-archive
  - page: about
    directory: about/
    icon: fa-user
  - page: rss
    directory: atom.xml
    icon: fa-rss

# RSS & Sitemap plugins
Plugins:
  hexo-generator-feed
  hexo-generator-sitemap

# Sitemap
sitemap:
  path: sitemap.xml

# Content
excerpt_link: Read More
fancybox: true
copyright:
  enable: true # display article copyright information, true/false.
  content: "转载请注明出处."

# Date_formats
date_formats:
  post: "YYYY年MM月DD日"

# Sidebar
sidebar: right  # right/left/bottom
widgets:
  - recent_posts
  - tagcloud
  - category
  - archive
  - tag
  - links

# Widget behavior
archive_type: 'yearly'   # defalut 'monthly'
archive_format: 'YYYY年MM月'
show_count: true
recent_posts_limits: 5

# Toc
toc:
  enable: true
  list_number: false

# Article share
share:
  local_share: true
  baidu_share: false

# Miscellaneous
busuanzi: true ## If you want to use Busuanzi page views please set the value to true.
baidu_analytics:
google_analytics:
gauges_analytics:

# MathJax support
mathjax:
  enable: false  # true/false.
  cdn: //cdn.bootcss.com/mathjax/2.7.1/latest.js?config=TeX-AMS-MML_HTMLorMML

# Reward
reward:
  enable: false  # true/false 是否开启 打赏功能
  wechat: '/css/images/wechat-pay.jpg'
  alipay: '/css/images/alipay-pay.jpg'
  buttonTxt: '打赏'
  title: "“感谢你的支持，我会继续努力！”"
  content: "扫码打赏，感谢支持"

# About page
about:
  photo_url: 'http://cdn.chaooo.top/blog/themeauthor.jpg' ## Your photo e.g. http://cdn.chaooo.top/blog/themeauthor.jpg
  items:
  - label: email
    url: 'mailto:zhenggchaoo@gmail.com'  ## Your email with mailto: e.g.  mailto:zhenggchaoo@gmail.com
    title: 'zhenggchaoo@gmail.com' ## Your email e.g.  zhenggchaoo@gmail.com
  - label: github
    url: 'https://github.com/chaooo' ## Your github'url e.g.  https://github.com/chaooo
    title: 'chaooo' ## Your github'name e.g.  chaooo
  - label: weibo
    url: 'http://weibo.com/zhengchaooo' ## Your weibo's url e.g.  http://weibo.com/zhengchaooo
    title: '秋过冬漫长' ## Your weibo's name e.g.  秋过冬漫长

# Gitalk comment
gitalk:
  enable: false
  owner: ## Your GitHub ID, e.g. username
  repo: ## The repository to store your comments, make sure you're the repo's owner, e.g. gitalk.github.io
  client_id: ## GitHub client ID, e.g. 75752dafe7907a897619
  client_secret: ## GitHub client secret, e.g. ec2fb9054972c891289640354993b662f4cccc50
  admin: ## Github repo owner and collaborators, only these guys can initialize github issues.
  language: 'zh-CN' ## Language
  pagerDirection: last # Comment sorting direction, available values are last and first.

# Valine comment. https://valine.js.org
valine:
  enable: true # if you want use valine,please set this value is true
  appId: vLPzzKBu42xSePsXQ9SMFMnu-gzGzoHsz # leancloud application app id
  appKey: SXT5mro1fOk42Qd9iF4lqApa # leancloud application app key
  notify: false # valine mail notify (true/false) https://github.com/xCss/Valine/wiki
  verify: false # valine verify code (true/false)
  pageSize: 10 # comment list page size
  avatar: mm # gravatar style https://valine.js.org/#/avatar
  lang: zh-cn # i18n: zh-cn/en
  placeholder: Just go go # valine comment input placeholder(like: Please leave your footprints )
  guest_info: nick,mail,link #valine comment header info

# Changyan comment. 畅言
changyan:
  enable: false
  appid: ## changyan appid
  appkey: ## changyan appkey

# Other comments
comment:
  disqus: ## disqus_shortname
  livere: ## 来必力(data-uid)
  uyan: ## 友言(uid)
  cloudTie: ## 网易云跟帖(productKey)

# Friend Links widget. Empty links will hide widget.
links:
  - title: site-name1
    url: http://www.example1.com/
  - title: site-name2
    url: http://www.example2.com/
  - title: site-name3
    url: http://www.example3.com/
```

- `version` - 用于自动刷新CDN上的静态文件。
- `dark` - 深色/浅色 切换。
- `favicon` - 浏览器标签页图标
- `banner/banner-dark`：背景图
- `menu` - 导航菜单。
- `Plugins` - 需要安装的（网站地图）插件
- `sitemap` - 网站地图文件路径
- `excerpt_link` - 阅读更多按钮文本
- `fancybox` - 图片查看器
- `copyright` - 文章版权信息
- `date_formats` - 日期格式
- `sidebar` - 侧边栏位置
- `widgets` - 侧边栏中的窗口小部件。
- `archive_type` - 侧边栏归档显示方式(yearly/monthly)
- `archive_format` - 侧边栏归档显示日期格式
- `show_count` - 侧边栏是否显示计数
- `recent_posts_limits` - 侧边栏最新文章显示条数
- `Toc` - 文章目录
- `share` - 分享
- `reward` - 打赏功能.
- `about` - 关于我页面配置
- `gitalk` - Gitalk评论配置
- `valine` - Valine评论配置
- `changyan` - 畅言评论配置
- `comment`- 其他评论配置
- `links` - 友情链接


## 站点配置

### 设置阅读全文
您可以在文章的 front-matter 中添加 description，并提供文章摘录，或在文章中使用‘‘`<!--more-->`’’手动进行截断（Hexo推荐的方式）。

### 自定义page页面
在`source`文件夹中创建文件夹`index.md`来添加页面，并在`index.md`的`front-matter'中添加`layout：page`。

### About页面
此主题默认page页面是关于我页面的布局，生成一个关于我页面：
``` shell
$ hexo new page 'about'
```
配置照片地址、邮箱、微博链接、微博名、GitHub链接、Github名：
```YAML
# About page
about:
  photo_url: 'http://cdn.chaooo.top/blog/themeauthor.jpg' ## Your photo e.g. http://cdn.chaooo.top/blog/themeauthor.jpg
  items:
  - label: email
    url: 'mailto:zhenggchaoo@gmail.com'  ## Your email with mailto: e.g.  mailto:zhenggchaoo@gmail.com
    title: 'zhenggchaoo@gmail.com' ## Your email e.g.  zhenggchaoo@gmail.com
  - label: github
    url: 'https://github.com/chaooo' ## Your github'url e.g.  https://github.com/chaooo
    title: 'chaooo' ## Your github'name e.g.  chaooo
  - label: weibo
    url: 'http://weibo.com/zhengchaooo' ## Your weibo's url e.g.  http://weibo.com/zhengchaooo
    title: '秋过冬漫长' ## Your weibo's name e.g.  秋过冬漫长
```

### 本地搜索
如果要使用本地站点搜索，您必须安装插件[hexo-generator-json-content](https://github.com/alexbruno/hexo-generator-json-content)来创建JSON搜索文件 ，然后将配置添加到`hexo/_config.yml`：
```shell
$ npm install hexo-generator-json-content --save
```
然后在`hexo/_config.yml(站点根配置，非主题配置)`添加配置：
```YAML
jsonContent:
  meta: false
  pages: false
  posts:
    title: true
    date: true
    path: true
    text: true
    raw: false
    content: false
    slug: false
    updated: false
    comments: false
    link: false
    permalink: false
    excerpt: false
    categories: false
    tags: true
```

### 语言
该主题目前有七种语言：简体中文（zh-CN），繁体中文（zh-TW），英语（en），法语（fr-FR），德语（de-DE），韩语 （ko）,西班牙语（es-ES）,欢迎修改主题并翻译成其他语言。


## 更多配置
更多详细配置请移步：
- [https://chaoo.oschina.io/2016/12/29/BlueLake博客主题的详细配置.html](https://chaoo.oschina.io/2016/12/29/BlueLake博客主题的详细配置.html)
- 或[https://chaooo.github.io/article/20161229.html](https://chaooo.github.io/article/20161229.html)


## Solutions
- 检查您当前的hexo的根目录，是否包含`source /`，`themes /`等。
- 如果你在使用这个主题有任何问题，请随时打开一个[issue](https://github.com/chaooo/hexo-theme-BlueLake/issues)，或者给我发邮件[zhenggchaoo@gmail.com](zhenggchaoo@gmail.com)。

## 浏览器支持
![Imgur](http://i.imgur.com/iO9L5ty.png)

## License
[MIT License](LICENSE)

## 贡献
欢迎各种形式的贡献（增强功能，添加新功能，撰写文档，改进代码，提交问题和检查BUG...）。

期待您的pull request。
