var posts=["2023/10/15/建站/基于Github的Hexo博客/","2020/07/31/网络安全/PHP反序列化漏洞解析/","2020/06/09/网络安全/开放式重定向漏洞解析/","2020/06/29/网络安全/PHP跨站脚本漏洞解析/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};