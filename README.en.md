# BlueLake

[English](README.en.md) | [简体中文](README.md)

A simple theme for [Hexo](https://hexo.io/) with great performance on different devices .

- [Preview](http://chaoo.oschina.io/)

[![BlueLake template preview](http://obzf7z93c.bkt.clouddn.com/themeBlueLake.png "BlueLake template preview")](http://chaoo.oschina.io/)

## Installation

### Install theme and renderers:

```shell
$ git clone https://github.com/chaooo/hexo-theme-BlueLake.git themes/BlueLake
$ npm install hexo-renderer-jade@0.3.0 --save
$ npm install hexo-renderer-stylus --save
```

### Enable

Modify `theme` setting in `_config.yml` to `BlueLake`.
```  bash
theme: BlueLake
```
If you want to compress css,you can configure this plugin in `hexo/_config.yml`
``` yml
stylus:
  compress: true
```

### Update

``` bash
cd themes/BlueLake
git pull
```

## Configuration

`themes/BlueLake/_config.yml`

``` yml
##########################
## Site Config Settings ##
##########################

# Theme version
version: 2.0.1

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

# Sidebar
widgets:
  - recent_posts
  - category
  - tag
  - archive
  #- weibo
  - links

# Toc
toc:
  enable: true
  number: false

# Static files
js: js
css: css

# Extensions
Plugins:
  hexo-generator-feed
  hexo-generator-sitemap
  hexo-generator-baidu-sitemap

#Feed Atom
feed:
  type: atom
  path: atom.xml
  limit: 20

#sitemap
sitemap:
  path: sitemap.xml
baidusitemap:
  path: baidusitemap.xml

#Local search
local_search: true ## Use a javascript-based local search engine, true/false.

#Cmments
comment:
  duoshuo: #chaooo ## duoshuo_shortname
  disqus: ## disqus_shortname
  livere: ## 来必力(data-uid)
  uyan: ## 友言(uid)
  cloudTie: ## 网易云跟帖(productKey)
  changyan: ## 畅言需在下方配置两个参数，此处不填。
    appid: ## 畅言(appid)
    appkey: ##畅言(appkey)

#Share
baidu_share: true ## 百度分享
JiaThis_share: ##true ##JiaThis分享
duoshuo_share: #true ##true 多说分享必须和多说评论一起使用。

# Analytics
google_analytics: ## Your Google Analytics tracking id, e.g. UA-42025684-2
baidu_analytics: ## Your Baidu Analytics tracking id, e.g. 1006843030519956000

# Miscellaneous
show_category_count: true ## If you want to show the count of categories in the sidebar widget please set the value to true.
widgets_on_small_screens: true ## Set to true to enable widgets on small screens.
busuanzi: true ## If you want to use Busuanzi page views please set the value to true.

# About page
about:
  photo_url: ## Your photo e.g. http://obzf7z93c.bkt.clouddn.com/themeauthor.jpg
  items:
  - label: email
    url: ## Your email with mailto: e.g.  mailto:zhenggchaoo@gmail.com
    title: ## Your email e.g.  zhenggchaoo@gmail.com
  - label: github
    url: ## Your github'url e.g.  https://github.com/chaooo
    title: ## Your github'name e.g.  chaooo
  - label: weibo
    url: ## Your weibo's url e.g.  http://weibo.com/zhengchaooo
    title: ## Your weibo's name e.g.  秋过冬漫长
  - label: twitter
    url:
    title:
  - label: facebook
    url:
    title:

# Friend link
links:
  - title: site-name1
    url: http://www.example1.com/
  - title: site-name2
    url: http://www.example2.com/
  - title: site-name3
    url: http://www.example3.com/
```

- **version** - For automatic refresh of static files on CDN.
- **menu** - Navigation menu,just follow the format of existied items.
- **widgets** - Widgets displaying in sidebar.
- **Static files** - Static files directory, for convenience of CDN usage.
- **Local search**
- local_search - a javascript-based local search engine, true/false.
- swiftype - [Swiftype Search](https://swiftype.com) key.
- tinysou - [Tiny Search](http://tinysou.com) key.
- **Cmments**
- duoshuo - [Duoshuo](http://duoshuo.com) shortname(Use for comments and sharing).
- disqus - [Disqus](https://disqus.com) shortname.
- **About page** - About page set.
- **links** - Edit your blogroll here.
- **Miscellaneous**
- show_category_count - Show the count of categories in the sidebar widget.
- widgets_on_small_screens - Show the widgets at the bottom of small screens.
- busuanzi - Enable [Busuanzi](http://busuanzi.ibruce.info) page views.
- google_analytics - [Google Analytics](https://www.google.com/analytics/) tracking ID.
- baidu_analytics - [Baidu Analytics](http://tongji.baidu.com) tracking ID.


## Features

#### Logo
You can set a **favicon.ico** for your website, please put it into  `source` folder of hexo directory, recommended size: 32px*32px.

You can add a website logo for apple devices, please put an image named **apple-touch-icon.png** into `source` folder of hexo directory, recommended size: 114px*114px.

#### Keywords
please set the `keywords` option in `hexo/_config.yml` of hexo directory like this:
# Site
```
title: Hexo
subtitle:
description:
keywords: keywords1, keywords2, keywords3, ...
```

#### Abstract
You can control the abstract of a post shown at index, by either filling a `description:` item in `front-matter` of the `post.md`, or just inserting a `<!--more-->` before your hidden content.

#### Page
Create folders inlcuding `index.md` in `source` folder to add pages, and add a `layout: page` in `front-matter` of `index.md`.

#### About Page
If you want to add about page, just create a page:
``` shell
$ hexo new page 'about'
```
And add `is_about: true` to front-matter:
```
title: about
date: 2017-04-30 00:00:00
is_about: true
---
Page content ...
```
And set the `about` option in `themes/_config.yml`
```YAML
# About page
about:
  photo_url: ## Your photo e.g. http://obzf7z93c.bkt.clouddn.com/themeauthor.jpg
  items:
  - label: email
    icon: fa-email
    url: ## Your email with mailto: e.g.  mailto:zhenggchaoo@gmail.com
    title: ## Your email e.g.  zhenggchaoo@gmail.com
  - label: github
    icon: fa-github
    url: ## Your github'url e.g.  https://github.com/chaooo
    title: ## Your github'name e.g.  chaooo
  - label: weibo
    icon: fa-weibo
    url: ## Your weibo's url e.g.  http://weibo.com/zhengchaooo
    title: ## Your weibo's name e.g.  秋过冬漫长
  - label: twitter
    icon: fa-twitter
    url:
    title:
  - label: facebook
    icon: fa-facebook
    url:
    title:
```
[Preview the about page demo](http://chaoo.oschina.io/about/)

#### Syntax Highlighting
Highlighted code showcase is supported, please set the `highlight` option in `hexo/_config.yml` of hexo directory like this:

```YAML
highlight:
  enable: true
  auto_detect: true
  line_number: true
  tab_replace:
```

#### Site Search
If you want to use local site search,you must install the plug-in [hexo-generator-json-content](https://github.com/alexbruno/hexo-generator-json-content) for create the JSON search file, and then add config to `hexo/_config.yml`
```shell
$ npm install hexo-generator-json-content@2.2.0 --save
```
And then,you must configure this plugin in `hexo/_config.yml`
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

#### Languages
Seven languages are available for this theme currently: Simplified Chinese (zh-CN), Traditional Chinese (zh-TW), English (en), French (fr-FR), German (de-DE), Korean (ko) and Spanish (es-ES). Contributions of translating to other languages will be highly appreciated.

## Solutions
- Check whether your Terminal's current directory is in hexo's root directory which contains `source/`, `themes/`, etc.

- If you have any trouble in using this theme, please feel free to open an [issue](https://github.com/chaooo/hexo-theme-BlueLake/issues).

## Browser Support
![Imgur](http://i.imgur.com/iO9L5ty.png)

## License
[MIT License](LICENSE)

## Contributing
All kinds of contributions (enhancements, new features, documentation & code improvements, issues & bugs reporting) are welcome.

Looking forward to your pull request.
