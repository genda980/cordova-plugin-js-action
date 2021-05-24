var exec = require('cordova/exec');

// url
// actId                页面的唯一标识
// isFull               默认 1 仅android
// bgColor              页面的背景色 默认 #FFFFFF 白色
// statusBarColor       状态栏颜色   仅Android
// statusBarFont        状态栏字体颜色 1 -> 黑色  2 -> 白色  默认黑色
// pluginList           需要的插件数组 []
exports.open = function (arg0, success, error) {
    exec(success, error, 'JsAction', 'open', [arg0]);
};

exports.close = function (arg0, success, error) {
    exec(success, error, 'JsAction', 'close', [arg0]);
};

//  action: 200         获取app的version eg：1.0.0
//  action: 1           页面间传递参数
//  event: ''
//  params: {}
exports.action = function (arg0, success, error) {
    exec(success, error, 'JsAction', 'action', [arg0]);
};

exports.onAction = function (eventId, params) {
    cordova.fireDocumentEvent('JsAction.onAction', {
        eventId: eventId,
        params: params
    });
};

// eventStr -> string
// eventStr -> open         params {appViewList: [main, user_home, message]}        打开页面
// eventStr -> close        params {appViewList: [main, user_home]}                 关闭页面
// eventStr -> background   params {}                                               进到后台
// eventStr -> foreground   params {}                                               回复前台
// eventStr -> appBack      params {}                                               滑动返回
exports.onAppViewEvent = function (eventStr, params) {
    cordova.fireDocumentEvent('JsAction.onAppViewEvent', {
        eventStr: eventStr,
        params: params
    });
};
