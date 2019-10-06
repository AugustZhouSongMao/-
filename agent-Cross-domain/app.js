const express = require('express');
const path = require('path');
const request = require('request');
var c = require('child_process');
var proxy = require('http-proxy-middleware');

// 配置静态文件服务中间件
// server地址
const app = express();

// 代理地址


// let serverUrl='https://www.xbet.asia';  //#Xbet正式服务器
 //let serverUrl='https://test99.xbet777.com';   //#Xbet 测试服务器1
// let serverUrl='https://test99v2.xbet777.com';  //#Xbet 测试服务器2
//let serverUrl='http://mobile99.xbet777.com';  //#Xbet 测试服务器3
// let serverUrl='http://192.168.12.86:8081';  //#Xbet 测试服务器4
//let serverUrl='https://www.eu99999.com';  //eu代理 测试
//let serverUrl='http://mobile99.eu987.com'; //eu test            
//# proxy_pass http://devtest-blb-mobile.neweb.me; #boleba cstest
//let serverUrl = 'http://test99.bbet8.com'; //xindeli cstest
//let serverUrl = 'https://mobile99.eu987.com'; //易游开发站
//let serverUrl = 'http://mobile99.eu987.com'; //易游测试站   
//let serverUrl = 'https://www.eu8.co'; //易游正式站
//let serverUrl = 'https://test99.xbet777.com'; //易游正式站
//let serverUrl = 'http://mobile99.bbet8.net'; //新得利测试站
//let serverUrl = 'http://192.168.10.140:8001'; //新得利开发站
//let serverUrl = 'http://deli28.net'; //新得利            
//let serverUrl = 'http://192.168.12.69:8080';//宝运莱
//let serverUrl = 'https://www.bao2525.com';//宝运莱
//let serverUrl = 'https://mobile99.hm7777.com';//宝运莱
//let serverUrl = 'http://dev-bbetasiahtml5.neweb.me';//金世豪
//let serverUrl='https://mobile99.bbetasia.net'; // 金世豪代理
//let serverUrl = 'http://mobile99.bbetasia.net';//金世豪测试站
//let serverUrl = 'http://jin234.com';//金世豪正式站
//let serverUrl = 'http://dev-jinshenghtml5.neweb.me';//嘉博开发站
//let serverUrl = 'http://mobile99.jsjs168.net';//嘉博测试站
// let serverUrl = 'http://jiab88.com';//嘉博
// let serverUrl = 'http://admin.cxcpw.vip';//嘉博


// 本地文件地址C:\Users\hank\Desktop\nodeServe-jsh\assets
  //app.use(express.static( 'C:/Users/hank/Desktop/jinshihaoSVN/jinshihao')); //金世豪
  // app.use(express.static('./assets/')); //金世豪
//   app.use(express.static('C:/Users/hank/Desktop/dx')); //金世豪
  //app.use(express.static( 'C:/Users/hank/Desktop/Down')); //金世豪
 // app.use(express.static( 'C:/Users/hank/Desktop/jinshihaoGIT/Bbetasia-Front-H5/dist')); //金世豪
   //app.use(express.static( 'C:/Users/hank/Desktop/euMobile')); //eu本地地址
  //app.use(express.static( 'C:/Users/hank/Desktop/Git/xbet_mobile/dev')); //xbet本地地址
// app.use(express.static(path.join(__dirname, './')));
// app.use('/', function(req, res) {
//   let url = serverUrl + req.url;
//   req.pipe(request(url)).pipe(res);
// });
// app.listen(8888, function () {
//   console.log('server is running at port 8888');
//   c.exec('start http://localhost:8888');
// });
let serverUrl = 'http://testmobile.pai66.net';
app.use(express.static(path.join(__dirname, './assets')));
app.use('/', proxy({ target: serverUrl, changeOrigin: true }));
app.listen(8889);//端口号