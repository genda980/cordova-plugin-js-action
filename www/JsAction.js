var exec = require('cordova/exec');

exports.open = function (arg0, success, error) {
    exec(success, error, 'JsAction', 'open', [arg0]);
};

exports.close = function (arg0, success, error) {
    exec(success, error, 'JsAction', 'close', [arg0]);
};

exports.action = function (arg0, success, error) {
    exec(success, error, 'JsAction', 'action', [arg0]);
};

exports.onAction = function (eventId, params) {
    cordova.fireDocumentEvent('JsAction.onAction', {
        eventId: eventId,
        params: params
    });
};

exports.onEventDocument = function (eventId, params) {
    cordova.fireDocumentEvent('JsAction.onEventDocument', {
        eventId: eventId,
        params: params
    });
};