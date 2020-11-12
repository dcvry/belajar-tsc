"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var URL = "https://jsonplaceholder.typicode.com/posts/1";
axios_1["default"].get(URL).then(function (doc) {
    var datas = doc.data;
    var id = datas.id;
    var title = datas.title;
    var body = datas.body;
    logTodo(id, title, body);
});
var logTodo = function (id, title, body) {
    console.log(" \nid: " + id + ", \nTitle: " + title + ", \nFinished: " + body);
};
