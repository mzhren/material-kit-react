const google = {
    "id": "google",
    "name": "谷歌",
    "action": "https://www.google.com/search",
    "placeholder": "谷歌搜索",
    "query": "q"
};

const baidu = {
    "id": "baidu",
    "name": "百度",
    "action": "https://www.baidu.com/s",
    "placeholder": "百度一下",
    "query": "wd"
}

const bing = {
    "id": "bing",
    "name": "必应",
    "action": "https://cn.bing.com/search",
    "placeholder": "必应中国",
    "query": "q"
}

const jd = {
    "id": "jd",
    "name": "京东",
    "action": "https://search.jd.com/Search",
    "placeholder": "京东",
    "query": "keyword"
}

const taobao = {
    "id": "taobao",
    "name": "淘宝",
    "action": "https://s.taobao.com/search",
    "placeholder": "淘宝",
    "query": "q"
}

const github = {
    "id": "github",
    "name": "github",
    "action": "https://github.com/search",
    "placeholder": "github",
    "query": "q"
}

const so360 = {
    "id": "so360",
    "name": "360",
    "action": "https://www.so.com/s",
    "placeholder": "360搜索",
    "query": "q"
}

const sm = {
    "id": "sm",
    "name": "神马",
    "action": "https://yz.m.sm.cn/s",
    "placeholder": "神马搜索",
    "query": "q"
}


const sogou = {
    "id": "sogou",
    "name": "搜狗",
    "action": "https://www.sogou.com/web",
    "placeholder": "搜狗搜索",
    "query": "query"
}

const yandex_img = {
    "action":"https://yandex.com/images/search",
    "id": "yandex_img",
    "name": "yandex",
    "placeholder": "yandex图片搜索",
    "query": "text"
}

const cn_bing_img = {
    "action":"https://www.bing.com/images/search",
    "id": "cn_bing_img",
    "name": "必应图片",
    "placeholder": "必应图片搜索",
    "query": "q"
}


const stackoverflow = {
    "action":"https://stackoverflow.com/search",
    "id": "stackoverflow",
    "name": "stackoverflow",
    "placeholder": "stackoverflow",
    "query": "q"
}

const weixin = {
    "action":"https://weixin.sogou.com/weixin?type=2",
    "id": "weixin",
    "name": "微信文章",
    "placeholder": "微信文章",
    "query": "query",
    "query2":{
        "name":"type",
        "value":2
    }
}


const wxgzh = {
    "action":"https://weixin.sogou.com/weixin",
    "id": "wxgzh",
    "name": "微信公众号",
    "placeholder": "微信公众号",
    "query": "query",
    "query2":{
        "name":"type",
        "value":1
    }
}


const zhihu = {
    "action":"https://www.zhihu.com/search",
    "id": "zhihu",
    "name": "知乎",
    "placeholder": "知乎",
    "query": "q"
}

const juejin = {
    "action":"https://juejin.im/search",
    "id": "juejin",
    "name": "掘金",
    "placeholder": "掘金",
    "query": "query"
}


const segmentfault = {
    "action":"https://segmentfault.com/search",
    "id": "segmentfault",
    "name": "segmentfault",
    "placeholder": "segmentfault",
    "query": "q"
}

const csdn = {
    "action":"https://so.csdn.net/so/search/s.do",
    "id": "csdn",
    "name": "csdn",
    "placeholder": "床上等你",
    "query": "q"
}

const jianshu = {
    "action":"https://www.jianshu.com/search",
    "id": "jianshu",
    "name": "简书",
    "placeholder": "简书",
    "query": "q"
}


const douban = {
    "action":"https://www.douban.com/search",
    "id": "douban",
    "name": "豆瓣",
    "placeholder": "豆瓣",
    "query": "q"
}


const xiachufang = {
    "action":"http://www.xiachufang.com/search/",
    "id": "xiachufang",
    "name": "下厨房",
    "placeholder": "下厨房",
    "query": "keyword"
}

const gitee = {
    "action":"https://search.gitee.com/",
    "id": "gitee",
    "name": "gitee",
    "placeholder": "gitee",
    "query": "q"
}

const youtube = {
    "action":"https://www.youtube.com/results",
    "id":"youtube",
    "name":"油管",
    "placeholder":"youtube",
    "query":"search_query"
}

const bilibili = {
    "action":"https://search.bilibili.com/all",
    "id":"bilibili",
    "name":"B站",
    "placeholder":"bilibili",
    "query":"keyword"
}

const zlib = {
    "action":"https://book4you.org/s/",
    "id":"zlib",
    "name":"Z-Library",
    "placeholder":"Z-Library——the world's largest ebook library",
    "query":"q"
}

const vqq = {
    "action":"https://v.qq.com/x/search/",
    "id":"vqq",
    "name":"腾讯视频",
    "placeholder":"腾讯视频",
    "query":"q"
}


const iqiyi = {
    "action":"https://www.iq.com/search",
    "id":"iqiyi",
    "name":"爱奇异",
    "placeholder":"爱奇异",
    "query":"query"
}

const searchOptions = [
    {
        name: "常用",
        type: "most",
        default: 'google',
        items: [google, baidu, github, bing, zlib,jd, taobao]
    },
    {
        name: "搜索",
        type: 'serach',
        default: 'baidu',
        items: [google, bing, baidu,so360,sogou,sm]
    },

    {
        name: "社区",
        type: 'sns',
        default: 'stackoverflow',
        items: [stackoverflow,segmentfault,juejin,weixin,wxgzh,jianshu,zhihu,csdn,douban]
    },

    {
        name: "代码仓库",
        type: 'repo',
        default: 'github',
        items: [github,gitee]
    },
    {
        name: "视频",
        type: 'video',
        default: 'youtube',
        items: [youtube,bilibili,vqq,iqiyi]
    },
    {
        name:"图片",
        type:'pic',
        default:'yandex_img',
        items:[yandex_img,cn_bing_img]
    },
    {
        name:"生活",
        type:'daily',
        default:'jd',
        items:[jd,taobao,xiachufang]
    }
];

export default searchOptions;
