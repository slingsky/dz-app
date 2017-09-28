var Koa = require('koa');
var Router = require('koa-router');
var app = new Koa();
var router = new Router();

// 首页-广告（超值特惠）
var homeAdData = require('./home/ad.js')
router
    .get('/api/homead', function*(next) {
        this.body = homeAdData;
    })

// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function*(next) {
    // 参数
    const params = this.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('当前城市：' + paramsCity)
    console.log('当前页数：' + paramsPage)

    this.body = homeListData
});

// 搜索 —— 搜索结果列表 - 四个参数
var searchListData = require('./search/list.js')
router.get('/api/searchlist/:type/:city/:page/:keyword', function*(next) {
    // 参数
    const params = this.params
    const paramsCity = params.city
    const paramsPage = params.page
    const paramsType = params.type
    const paramsKeyword = params.keyword

    console.log('当前城市：' + paramsCity)
    console.log('当前页数：' + paramsPage)
    console.log('当前属性：' + paramsType)
    console.log('当前参数：' + paramsKeyword)

    this.body = searchListData
});

// 搜索 —— 搜索结果列表 - 三个参数
var searchListData = require('./search/list.js')
router.get('/api/searchlist/:type/:city/:page', function*(next) {
    // 参数
    const params = this.params
    const paramsCity = params.city
    const paramsPage = params.page
    const paramsType = params.type

    console.log('当前城市：' + paramsCity)
    console.log('当前页数：' + paramsPage)
    console.log('当前属性：' + paramsType)

    this.body = searchListData
});

// 详情页 - 商户信息
var detailInfoData = require('./detail/info.js');
router.get('/api/detail/info/:id', function*(next) {
    // 参数
    const params = this.params
    const id = params.id

    console.log('商户id:' + id)

    this.body = detailInfoData
});

// 详情页 - 商户点评
var detailCommentData = require('./detail/comment.js');
router.get('/api/detail/comment/:id/:page', function*(next) {
    // 参数
    const params = this.params
    const id = params.id
    const page = params.page

    console.log('商户id:' + id)
    console.log('商户点评页数:' + page)
    
    this.body = detailCommentData
});

// 用户中心 - 订单列表
var orderListData = require('./orderList/orderList.js');
router.get('/api/orderlist/:username', function*(next) {
    // 参数
    const params = this.params
    const username = params.username
    console.log('用户名：' + username)

    this.body = orderListData
});

// 用户中心 - 用户点评
router.post('/api/submitComment', function*(next) {
    console.log('提交评论')

    // 获取参数
    this.body = {
        errno: 0,
        msg: 'ok'
    }
});


//开始服务并生成路由
app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000)