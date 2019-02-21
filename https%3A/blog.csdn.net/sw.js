/*
*
*  Push Notifications codelab
*  Copyright 2015 Google Inc. All rights reserved.
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      https://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License
*
*/

/* eslint-env browser, serviceworker, es6 */

'use strict';
/*服务工作线程*/
// 已经发送数据给应用服务器 此时监听服务器返回数据的情况
var linkUrl = ''
var username = ''
// 点击推来的消息的某一条的监听
self.addEventListener('notificationclick', function(event) {
  // console.log('[Service Worker] Notification click Received.');
  // console.log('[Service Worker]点击其中一条推来的消息完成 关闭点过的通知 打开详情地址');
  event.notification.close();
// 打开详情地址
  //console.log('linkurl===',linkUrl)
  if(event && event.notification && event.notification.data){
    linkUrl = event.notification.data
  } else {
    linkUrl = 'https://www.csdn.net/'
  }
  // console.log('event notification====',event.notification)
  // console.log('action====sw',linkUrl)
  fetch('https://statistic.csdn.net/notification?notify=open&username='+username, {mode: 'cors'})
  //_hmt.push(['_trackEvent', 'open', '消息', '', '打开推送弹框'])
    // 点击后创建image标签
  event.waitUntil(
      clients.openWindow(linkUrl)
  );
  // event.waitUntil确保浏览器不会在显示新窗口前终止服务工作线程
});
