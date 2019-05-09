# moment.js 使用方式
###### tags: `JavaScript` `React`
>[Moment.js 2.24.0](https://momentjs.com/)
>[moment.js - 關於時間的一切](https://ithelp.ithome.com.tw/articles/10208995)
>[Moment.js：時間處理、驗證、格式化的好幫手](https://noob.tw/moment-js/)
>[Moment.js 計算兩個日期的年月日差異](https://medium.com/@yuan.0708/moment-js-%E8%A8%88%E7%AE%97%E5%85%A9%E5%80%8B%E6%97%A5%E6%9C%9F%E7%9A%84%E5%B9%B4%E6%9C%88%E6%97%A5%E5%B7%AE%E7%95%B0-ac58c1245ecb)
---
* 引用cdn
```javascript=
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.1/moment.min.js"></script>
```
* npm安裝
```javascript=
npm install moment --save 
```
一、函式
```javascript=
moment().format();
```
* 秀出年月日
```javascript=
console.log(moment().format("YYYY/MM/DD"));  // 2019/05/09
```
* 秀出時間
```javascript=
console.log(moment().format("HH:mm:ss"));  // 22:04:04
```
二、日期加減
* 日期相加
```javascript=
console.log(moment().add(5,"d").format('YYYY/MM/DD')); // 今日日期加5天
```
* 日期相減
```javascript=
console.log(moment().add(-5,"d").format('YYYY/MM/DD')); // 今日日期減5天
```
三、查詢月底日期
* 指定下個月的1號減1
```javascript=
console.log("本月月底:" + moment('2020-03-01').add(-1,"d").format('YYYY/MM/DD')); // 2020/02/29
```
四、日期天數查詢
* 指定開始日期跟結束日期並使用diff計算
```javascript=
var startDate = moment('2019-04-01');
console.log("開始日期:" + startDate.format('YYYY/MM/DD'));
var endDate = moment();
console.log("結束日期:" + endDate.format('YYYY/MM/DD'));
var mydateDiff = endDate.diff(startDate,"d");
console.log("日期差異:" + mydateDiff);
// 相差38天
```
>[gitHub](https://github.com/capeta0507/momentJS.git)
