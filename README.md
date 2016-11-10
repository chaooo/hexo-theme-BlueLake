# BlueLake

A simple theme for [Hexo](https://hexo.io/) with great performance on different devices .

- [Preview](http://chaoo.oschina.io/)

[![BlueLake template preview](http://obzf7z93c.bkt.clouddn.com/themeBlueLake.png "BlueLake template preview")](http://chaoo.oschina.io/)

## Installation

### Install theme and renderers:

```shell
$ git clone https://github.com/chaooo/hexo-theme-BlueLake.git themes/BlueLake
$ npm install hexo-renderer-jade --save
$ npm install hexo-renderer-stylus --save
```
If you want to compress css,you can configure this plugin in `hexo/_config.yml`
``` yml
stylus:
  compress: true
```

### Enable

Modify `theme` setting in `_config.yml` to `BlueLake`.

### Update

``` bash
cd themes/BlueLake
git pull
```

## Configuration

``` yml
# Theme version
version: 1.0.0

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
  - search
  - category
  - tag
  - recent_posts
  - recent_comments
  - links

# Static files
js: js
css: css

# Friend link
links:
  - title: site-name1
    url: http://www.example1.com/
  - title: site-name2
    url: http://www.example2.com/
  - title: site-name3
    url: http://www.example3.com/

# Miscellaneous
duoshuo: ## Your duoshuo_shortname, e.g. username
disqus: ## Your disqus_shortname, e.g. username
local_search: true ## Use a javascript-based local search engine, true/false.
google_search: ## Use Google search, true/false.
baidu_search: ## Use Baidu search, true/false.
swiftype: ## Your swiftype_key, e.g. m7b11ZrsT8Me7gzApciT
tinysou: ## Your tinysou_key, e.g. 4ac092ad8d749fdc6293
google_analytics: ## Your Google Analytics tracking id, e.g. UA-42425684-2
baidu_analytics: ## Your Baidu Analytics tracking id, e.g. 8006843039519956000
show_category_count: true ## If you want to show the count of categories in the sidebar widget please set the value to true.
shareto: true ## If you want to use the share button please set the value to true.
busuanzi: true ## If you want to use Busuanzi page views please set the value to true.
widgets_on_small_screens: true ## Set to true to enable widgets on small screens.

# About page 
about:
  photo_url: ## Your photo e.g. http://obzf7z93c.bkt.clouddn.com/themeauthor.jpg
  email: ## Your email e.g.  zhenggchaoo@gmail.com
  weibo_url: ## weibo photo e.g.  http://weibo.com/zhengchaooo
  weibo_name: ## Your weibo's name e.g.  秋过冬漫长
  github_url: ## Your github'url e.g.  https://github.com/chaooo
  github_name: ## Your github'name e.g.  chaooo
```

- **version** - For automatic refresh of static files on CDN.
- **menu** - Navigation menu,just follow the format of existied items. Don't forget to create corresponding folders inlcuding `index.md` in `source` folder to ensure the pages will correctly display. `iconfont` icon fonts have been integrated, and you can choose other icons which you like [here](http://www.iconfont.cn/plus/) and use them according to the instruction.
- **widgets** - Widgets displaying in sidebar.
- **Static files** - Static files directory, for convenience of CDN usage.
- **links** - Edit your blogroll here.
- **Miscellaneous**
- duoshuo - [Duoshuo](http://duoshuo.com) shortname.
- disqus - [Disqus](https://disqus.com) shortname.
- google_search - Default search engine.
- baidu_search - Search engine for users in China.
- swiftype - [Swiftype Search](https://swiftype.com) key.
- tinysou - [Tiny Search](http://tinysou.com) key.
- self_search - Use a javascript-based local search engine.
- google_analytics - [Google Analytics](https://www.google.com/analytics/) tracking ID.
- baIDu_analytics - [Baidu Analytics](http://tongji.baidu.com) tracking ID.
- show_category_count - Show the count of categories in the sidebar widget.
- shareto - Enable share button.
- busuanzi - Enable [Busuanzi](http://busuanzi.ibruce.info) page views.
- widgets_on_small_screens - Show the widgets at the bottom of small screens.


## Features

#### Logo
You can set a **favicon.ico** for your website, please put it into  `source` folder of hexo directory, recommended size: 32px*32px.

You can add a website logo for apple devices, please put an image named **apple-touch-icon.png** into `source` folder of hexo directory, recommended size: 114px*114px.

#### Abstract
You can control the abstract of a post shown at index, by either filling a `description:` item in `front-matter` of the `post.md`, or just inserting a `<!--more-->` before your hidden content.

#### Page
Create folders inlcuding `index.md` in `source` folder to add pages, and add a `layout: page` in `front-matter` of `index.md`. 

#### Table of Contents
TOC in a post can be enabled by adding a `toc: true` item in `front-matter`.

#### Comments
Comment feature of each post and page can be enabled (default) and disabled by adding a `comments: true` or a `comments: false` in `front-matter`. This could be useful when you want comment feature for a guestbook page, but don't want comment feature for a about page.

#### About Page 
If you want to add about page,just run:
``` shell
$ hexo new page 'about'
```
And set the `about` option in `themes/_config.yml`
```YAML
# About page 
about:
  photo_url: ## Your photo e.g. http://obzf7z93c.bkt.clouddn.com/themeauthor.jpg
  email: ## Your email 
  weibo_url: ## weibo photo 
  weibo_name: ## Your weibo's name 
  github_url: ## Your github'url 
  github_name: ## Your github'name 
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
$ npm install hexo-generator-json-content --save
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

#### Math Equation
Add
```YAML
mathjax: true
```
in Hexo's `_config.yml`.

In the post which you would like to use math equation, add `mathjax: true` in the `front-matter`. For example:

```YAML
title: Test Math
date: 2016-04-05 14:16:00
categories: math
mathjax: true
---
```
The default math delimiters are `$$...$$` and `\\[...\\]` for displayed mathematics,
and `$...$` and `\\(...\\)` for in-line mathematics.

However, if your post contains dollar signs (`$`), and they appear often in non-mathematical parts, in other words, you want to use `$` as dollar sign not inline math delimiter, please add

```YAML
mathjax2: true
```
in Hexo's `_config.yml` instead of `mathjax: true`. Correspondingly, add `mathjax2: true` to the `front-matter` of the post in which
you would like to use math equation.

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
