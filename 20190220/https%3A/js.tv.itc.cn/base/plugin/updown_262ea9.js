/* sohutv 2018-11-05 09:58:28 */
!function(o,a){kao.n("plugin",function(){var o=function(){function o(o){this._upcount=0,this._dncount=0,this._vid=o.vid,this._pid=o.pid||"0",this._cid=o.cid,this._tvid=o.tvid,this._updownStatus=""}return o.prototype={constructor:o,apiUrl:"//score.my.tv.sohu.com",init:function(i){var u=this,o=this._vid,t=(this._pid,this._cid),s=this._tvid,d=sohuHD.passport.getPassport()||"",n=sohuHD.user.uid||"",p="up"==sohuHD.cookie("ud"+o)?"up":"",c="down"==sohuHD.cookie("ud"+o)?"down":"",h=u.apiUrl+"/digg/v3/get.do?vid="+o+"&type="+t+"&passport="+d+"&userId="+n+"&callback=?";s&&(h=h+"&tvid="+s),a.getJSON(h,function(o){o=o.data[0];try{u._upcount=o.upCount,u._dncount=o.downCount,1==o.isUp||"up"==p?u._updownStatus="up":1!=o.isDown&&"down"!=c||(u._updownStatus="down"),i(u._upcount,u._dncount,u._updownStatus)}catch(t){}})},up:function(i){var u=this,s=this._vid,o=this._pid,t=this._cid,d=this._tvid,n=sohuHD.passport.getPassport()||"",p=sohuHD.user.uid||"",c=parseInt(sohuHD.cookie("updownNum"))||0,h={vid:s,type:t,pid:o,isUp:1,passport:n,userId:p},r=u.apiUrl+"/digg/v3/up.do";d&&(h.tvid=d),a.post(r,h,function(o){var t="ud"+s;u._upcount=o.data[0].upCount,sohuHD.cookie(t,"up",{expires:15}),n||(c+=1,sohuHD.cookie("updownNum",c)),i(u._upcount)})},down:function(i){var u=this,s=this._vid,o=this._pid,t=this._cid,d=this._tvid,n=sohuHD.passport.getPassport()||"",p=sohuHD.user.uid||"",c=parseInt(sohuHD.cookie("updownNum"))||0,h={vid:s,type:t,pid:o,isDown:1,passport:n,userId:p},r=u.apiUrl+"/digg/v3/up.do";d&&(h.tvid=d),a.post(r,h,function(o){var t="ud"+s;sohuHD.cookie(t,"down",{expires:15}),u._dncount=o.data[0].downCount,n||(c+=1,sohuHD.cookie("updownNum",c)),i(u._dncount)})}},o}();this.UpDown=o})}(window,jQuery);