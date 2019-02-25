# douban

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

- 豆瓣接口说明:
  豆瓣电影接口文档失效(打不开)
  但是请求可以发送
  支持 jsonp 请求
  请求图片 会报错 403
  解释:(和代码无关, 是豆瓣接口的问题,如果是自己的接口, 不会出现这个问题,忽略)
  解决: 'https://images.weserv.nl?url='+item.images.small.substr(7)
- 电影详情接口
  https://api.douban.com/v2/movie/subject/${id}
- 电影列表接口
- 正在热映
  http://api.douban.com/v2/movie/in_theaters
- 即将上映
  http://api.douban.com/v2/movie/coming_soon
- 排名 250
  http://api.douban.com/v2/movie/top250
