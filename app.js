var moment = require('moment');

console.log(moment().format("YYYY"));
console.log('星期:' + moment().format('dddd'));
console.log(moment().add(5,"d").format('YYYY/MM/DD'));
console.log(moment().add(-5,"d").format('YYYY/MM/DD'));
console.log("本月月底:" + moment('2020-03-01').add(-1,"d").format('YYYY/MM/DD'));
var startDate = moment('2019-04-01');
console.log("開始日期:" + startDate.format('YYYY/MM/DD'));
var endDate = moment();
console.log("結束日期:" + endDate.format('YYYY/MM/DD'));
var mydateDiff = endDate.diff(startDate,"d");
console.log("日期差異:" + mydateDiff);


// 參考: 
// https://medium.com/@yuan.0708/moment-js-%E8%A8%88%E7%AE%97%E5%85%A9%E5%80%8B%E6%97%A5%E6%9C%9F%E7%9A%84%E5%B9%B4%E6%9C%88%E6%97%A5%E5%B7%AE%E7%95%B0-ac58c1245ecb
// https://ithelp.ithome.com.tw/articles/10208995
