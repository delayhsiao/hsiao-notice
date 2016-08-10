# Hsiao-Notice
Hsiao-Notice是一个轻量级的jQuery提示框插件，作用范围比较小，基本上我也不指望你们能够奋起而用之，反正也是我自己用的比较多，所以这个README就随便瞎写写了。
目前Hsiao-Notice支持的参数有：

    type : 类型，包含三种，success/error/info
    message : 消息内容
    timeout : 维持时间，默认为1000秒，哦不，1000毫秒
    context : 页面元素，默认为body，算是挖个坑，以后会支持在任何指定的地方显示
    callback : 回调函数，如果不会用就关闭浏览器吧

基础用法如下：
```
$.notice({
    type:'success',
    message:'show me the notice'
});
```
