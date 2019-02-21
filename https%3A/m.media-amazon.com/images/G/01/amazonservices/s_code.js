var s_account = "amznsrvsglobalprod,amznsrvsglobalprodbotfilter,amznsrvsmainprod,amznsrvsprod";

/* Last Update: 2016-04-06 */

// initialize AppMeasurement
if(typeof getAccount!='undefined'){
var s_account = getAccount(); ///in lead.js}
}
var s=s_gi(s_account)

/******** VISITOR ID SERVICE CONFIG - REQUIRES VisitorAPI.js ********/
//s.visitor = Visitor.getInstance("INSERT-MCORG-ID-HERE")

/************************** CONFIG SECTION **************************/
/* Link Tracking Config */
s.trackDownloadLinks = true
s.trackExternalLinks = true
s.trackInlineStats = true
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"
s.linkInternalFilters="javascript:,amazon.com,amazonservices.com,services.amazon.co.uk,services.amazon.de,services.amazon.fr,services.amazon.it,services.amazon.es,webstore.amazon.co.uk,sellercentral-europe.amazon.com,amazon.ca,sellercentral.amazon."
s.linkLeaveQueryString = false
s.linkTrackVars = "None"
s.linkTrackEvents = "None"
/* Conversion Config */
s.currencyCode="USD"

/* Plugin Config */
s._channelPattern="Amazon Other Sites|AO>Amazon Payments|AP>Amazon Services|AS>Amazon.com|AZ>Banner/Display Ads|BA>CM Created|CM>Direct Mail|DM>External Link|EL>Email|EM>House Ads|HA>Integrator|IN>Internal Referral|IR>ListRental/Purchased|LI>Marketing Public Relations (PR)|MP>Natural Search|NS>Prospected|PR>Affiliate - Referral Partner|RP>Seller Central|SC>Paid Search|SE>Tradeshow|TS>WBA Site|WB>Webinar|WE>Amazon.com|VReg>Amazon.com|AM>WBA Site|WS>Natural Search|Google>External Link|ACLN>WBA Site|MerchantWebstore>Affiliate - Referral Partner|CJReferral>External Link|translate.googleusercontent.com>Natural Search|Yahoo!>Natural Search|Microsoft Bing>External Link|AFConCon>Amazon Other Sites|www.amazonsellercommunity.com>External Link|seakingalpha.com>External Link|business.webnews.it>External Link|webmail.>External Link|storefront>Natural Search|AOL>External Link|SignIn>External Link|email.>External Link|phx.corporate-ir.net>Amazon Services|www.amazonservices.jp>External Link|mail.>External Link|sell.vendio.com>External Link|forums.prospertechnologies.com>External Link|finance.yahoo.com>Natural Search|Ask>External Link|65.55.177.205>External Link|us.mq>External Link|True>External Link|t3n.de>External Link|apps.vendio.com>External Link|my.yahoo.com>External Link|www.";

/* Media Module Config */
s.enableVideoTracking=true;
if(s.enableVideoTracking){
    s.loadModule('Media');
    s.Media.autoTrack=true;
    s.Media.playerName='My Media Player';
    s.Media.trackUsingContextData=true;
    s.Media.contextDataMapping = {
        'a.media.name':'eVar20,prop26',
        'a.media.view':'event45',
        "a.media.complete":"event46"    }
        s.Media.trackVars='events,eVar20,prop26';
        s.Media.trackEvents='event45,event46';  }

        /* uncomment below to use doPlugins */
        s.usePlugins=true
        function s_doPlugins(s) {

            if(!s.events)
                s.events="";
            /* collect external campaign parameter */
            s.channelManager('ld','','','', 's_dl');

            if(s._channel=="Other Natural Referrers"){
                s._channel="External Link";
            }
            if(s._channel=="Unknown Paid Channel"){
                s._channel="Other";
            }
            if(!s.campaign){
                s.campaign=s._campaign;
            }
            if(!s.eVar27){
                s.eVar27=s._channel;
            }
            /* set campaign landing page when s.campaign is detected */
            if(s.campaign && typeof s.campaign != 'undefined'){
                s.eVar37=s.pageName;
                s.eVar21=document.referrer;
            }
            if(!s.eVar30){
                s.eVar30=s.getQueryParam('intid');
            }
            /* collect previous page name */
            if(document.location.href.indexOf('sellercentral.amazon.')==-1){
                s.prop33=s.getPreviousValue(s.pageName,'gpv_page','')
                s.eVar33="D=c33";
            }
//percent page viewed
var ppv=s.getPercentPageViewed(s.pageName);
s.prop39 = ppv[1];
if(!s.prop33||s.prop33=='no value')s.prop39="";

if(s.events.indexOf('scCheckout')!=-1&&s.c_r('gpv_page')){
    s.prop36=s.c_r('gpv_page');
    s.eVar36="D=c36";
}

/* stack setup wizard completion steps */
s.eVar15=s.crossVisitParticipation(s.campaign,'s_ev15','30','5','>','',0);

/* force search term eVar to lower case */
if(s.getQueryParam('qry')){
    s.eVar13=s.getQueryParam('qry');
}
if(s.eVar13) {
    s.eVar13=s.eVar13.toLowerCase();
    s.prop17=s.eVar13;
}
/* force search term prop to lower case */
if(s.prop17) {
    s.prop17=s.prop17.toLowerCase();
}
/* Automate Search Keyword Variables and Events*/
if (s.eVar13)
{
    s.events=s.apl(s.events, 'event8', ',', 2);
    if (s.prop18 && (s.prop18 == '0' || s.prop18 == 'zero'))
    {
        s.prop18='zero';
        s.events=s.apl(s.events, 'event9', ',', 2);
    }
}
/* Do not refire search event if the same search term passed in twice in a row */
var t_search=s.getValOnce(s.eVar13, 's_stv', 0);
if (t_search == '')
{
    var a=s.split(s.events, ',');
    var e='';
    for (var i=0; i < a.length; i++)
    {
        if (a[i] == 'event8' || a[i] == 'event9') continue;
        else e += a[i] ? a[i] + ',' : a[i];
    }
    s.events=e.substring(0, e.length - 1);
}
/* set a blank product string on the search results page */
if(t_search && !s.products){
    s.products=";";
}
if (s.events.indexOf("scCheckout") > -1) {
    s.prop11 = "start";
}
if (s.events.indexOf("purchase") > -1) {
    s.prop11 = "stop";
}
s.prop11 = s.getTimeToComplete(s.prop11, "ttc", 30);

/* Search Center */
/* clickPast */
s.tempSCCT = s.getQueryParam('s_kwcid');
s.tempSCCT = s.getValOnce(s.tempSCCT,'s_tempSCCT',0);
s.clickPast(s.tempSCCT,'event26','event27');

/* manageQueryParam v1.2 */
s.pageURL=s.manageQueryParam('s_kwcid',1,1);

/*set base url*/
s.prop26=document.location.hostname;
s.linkTrackVars=s.apl(s.linkTrackVars, 'prop26', ',', 2);

s.eVar22=document.location.hostname;

if(s.getQueryParam('topic')){
    s.eVar22=document.location.origin+document.location.pathname+"?topic="+s.getQueryParam('topic');
} else {
    s.eVar22=document.location.origin+document.location.pathname;
}

}
s.doPlugins=s_doPlugins

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.trackingServer = "amazonservices.122.2o7.net"
s.trackingServerSecure = "amazonservices.122.2o7.net"

/************************** PLUGINS SECTION *************************/

// copy and paste implementation plug-ins here - See "Implementation Plug-ins" @
// https://marketing.adobe.com/resources/help/en_US/sc/implement/#Implementation_Plugins
// Plug-ins can then be used in the s_doPlugins(s) function above

/*
* Plugin Utility: apl v1.2
*/
s.apl=new Function("l","v","d","u",""
    +"var s=this,m=0;if(!l)l='';if(u){var i,n,a=l.split(d);for(i=0;i<a.le"
    +"ngth;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase("
    +")));}}if(!m)l=l?l+d+v:v;return l");
/*
* Plugin: getTimeToComplete 0.4 - return the time from start to stop
*/
s.getTimeToComplete=new Function("v","cn","e",""
    +"var s=this,d=new Date,x=d,k;if(!s.ttcr){e=e?e:0;if(v=='start'||v=='"
    +"stop')s.ttcr=1;x.setTime(x.getTime()+e*86400000);if(v=='start'){s.c"
    +"_w(cn,d.getTime(),e?x:0);return '';}if(v=='stop'){k=s.c_r(cn);if(!s"
    +".c_w(cn,'',d)||!k)return '';v=(d.getTime()-k)/1000;var td=86400,th="
    +"3600,tm=60,r=5,u,un;if(v>td){u=td;un='days';}else if(v>th){u=th;un="
    +"'hours';}else if(v>tm){r=2;u=tm;un='minutes';}else{r=.2;u=1;un='sec"
    +"onds';}v=v*r/u;return (Math.round(v)/r)+' '+un;}}return '';");
/*
*  getQueryParam v2.5 - H-code and AppMeasurement Compatible
*/
s.getQueryParam=function(p,d,u,h){var s=this,v="",i,j,t;d=d?d:"";u=u?u:s.pageURL?s.pageURL:s.wd?s.wd.location:window.location;while(p){i=p.indexOf(",");i=i<0?p.length:i;t=s.p_gpv(p.substring(0,i),u+"",h);if(t)t=t.indexOf("#")>-1?t.substring(0,t.indexOf("#")):t;if(t)v+=v?d+t:t;p=p.substring(i==p.length?i:i+1)}return v};
s.p_gpv=function(k,u,h){var s=this,v="",q,j=h==1?"#":"?",i=u.indexOf(j);if(k&&i>-1){q=u.substring(i+1);v=s.pt(q,"&","p_gvf",k)}return v};
s.p_gvf=function(t,k){if(t){var s=this,i=t.indexOf("="),p=i<0?t:t.substring(0,i),v=i<0?true:t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s.epa?s.epa(v):s.unescape(v)}return""};
/*
*  pt - utility function
*/
s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:""}return""};
/*
* Plugin: getPercentPageViewed v1.72
*/
s.getPercentPageViewed=new Function("n",""
    +"var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load"
    +"','unload','scroll','resize','zoom','keyup','mouseup','touchend','o"
    +"rientationchange','pan'];W.s_Obj=s;s_PPVid=(n=='-'?s.pageName:n)||s"
    +".pageName||location.href;if(!W.s_PPVevent){s.s_PPVg=function(n,r){v"
    +"ar k='s_ppv',p=k+'l',c=s.c_r(n||r?k:p)||'',a=c.indexOf(',')>-1?c.sp"
    +"lit(',',10):[''],l=a.length,i;a[0]=unescape(a[0]||'');r=r||(n&&n!=a"
    +"[0])||0;a.length=10;if(typeof a[0]!='string')a[0]='';for(i=1;i<9;i+"
    +"+)a[i]=!r&&i<l?parseInt(a[i])||0:0;if(l<10||typeof a[9]!='string')a"
    +"[9]='';if(r){s.c_w(p,c);s.c_w(k,'?')}return a};W.s_PPVevent=functio"
    +"n(e){var W=window,D=document,B=D.body,E=D.documentElement,S=window."
    +"screen||0,Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='cl"
    +"ientWidth',Hc='clientHeight',C=100,M=Math,J='object',N='number',P='"
    +",',s=W.s_Obj||W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('"
    +"on'))e=e.substring(2);s_PPVi=W.s_PPVi||0;if(W.s_PPVt&&!e){clearTime"
    +"out(s_PPVt);s_PPVt=0;if(s_PPVi<2)s_PPVi++}if(typeof s==J){var h=M.m"
    +"ax(B[Hs]||E[Hs],B[Ho]||E[Ho],B[Hc]||E[Hc]),X=W.innerWidth||E[Wc]||B"
    +"[Wc]||0,Y=W.innerHeight||E[Hc]||B[Hc]||0,x=S?S.width:0,y=S?S.height"
    +":0,r=M.round(C*(W.devicePixelRatio||1))/C,b=(D.pageYOffset||E[Ts]||"
    +"B[Ts]||0)+Y,p=h>0&&b>0?M.round(C*b/h):0,O=W.orientation,o=!isNaN(O)"
    +"?M.abs(o)%180:Y>X?0:90,L=e=='load'||s_PPVi<1,a=s.s_PPVg(s_PPVid,L),"
    +"t,V=function(i,v,f,n){i=parseInt(typeof a==J&&a.length>i?a[i]:'0')|"
    +"|0;v=typeof v!=N?i:v;v=f||v>i?v:i;return n?v:v>C?C:v<0?0:v};if(new "
    +"RegExp('(iPod|iPad|iPhone)').exec((window.navigator&&navigator.user"
    +"Agent)||'')&&o){t=x;x=y;y=t}o=o?'L':'P';a[9]=L||!a[9]?o:a[9].substr"
    +"ing(0,1);if(a[9]!='L'&&a[9]!='P')a[9]=o;s.c_w('s_ppv',escape(W.s_PP"
    +"Vid)+P+V(1,p,L)+P+(L||!V(2)?p:V(2))+P+V(3,b,L,1)+P+X+P+Y+P+x+P+y+P+"
    +"r+P+a[9]+(a[9]==o?'':o))}if(!W.s_PPVt&&e!='unload')W.s_PPVt=setTime"
    +"out(W.s_PPVevent,333)};for(var f=W.s_PPVevent,i=0;i<E.length;i++)if"
    +"(EL)EL(E[i],f,false);else if(AE)AE('on'+E[i],f);f()};var a=s.s_PPVg"
    +"();return !n||n=='-'?a[1]:a");
/*
* Plugin: getPreviousValue_v1.0 - return previous value of designated
*   variable (requires split utility)
*/
s.getPreviousValue=new Function("v","c","el",""
    +"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
    +"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
    +"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
    +":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
    +"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/*
*  Plug-in: crossVisitParticipation v1.7 - stacks values from
*  specified variable in cookie and returns value
*/

s.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv",""
    +"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var"
    +" ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l"
    +"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
    +"f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape("
    +"v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()"
    +";if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=ar"
    +"ry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry"
    +"[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+"
    +"5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.len"
    +"gth-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date("
    +").getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new"
    +" Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td."
    +"getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0"
    +"]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',"
    +"front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{deli"
    +"m:dl});if(ce)s.c_w(cn,'');return r;");

/*
* channelManager v2.82 - Tracking External Traffic
*/
s.channelManager=new Function("a","b","c","d","e","f","g",""
    +"var s=this,h=new Date,i=0,j,k,l,m,n,o,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E"
    +",F,G,H,I,J,K,L,M,N,O,P,Q,R,S;h.setTime(h.getTime()+1800000);if(e){i"
    +"=1;if(s.c_r(e))i=0;if(!s.c_w(e,1,h))s.c_w(e,1,0);if(!s.c_r(e))i=0;i"
    +"f(f&&s.c_r('s_tbm'+f))i=0;}j=s.referrer?s.referrer:document.referre"
    +"r;j=j.toLowerCase();if(!j)k=1;else {l=j.indexOf('?')>-1?j.indexOf('"
    +"?'):j.length;m=j.substring(0,l);n=s.split(j,'/');n=s.split(n[2],'?'"
    +");o=n[0].toLowerCase();p=s.linkInternalFilters.toLowerCase();p=s.sp"
    +"lit(p,',');for(q=0;q<p.length;q++){r=o.indexOf(p[q])==-1?'':j;if(r)"
    +"break;}}if(!r&&!k){t=j;u=v=o;w='Other Natural Referrers';x=s.seList"
    +"+'>'+s._extraSearchEngines;if(d==1){m=s.repl(m,'oogle','%');m=s.rep"
    +"l(m,'ahoo','^');j=s.repl(j,'as_q','*');}y=s.split(x,'>');for(z=0;z<"
    +"y.length;z++){A=y[z];A=s.split(A,'|');B=s.split(A[0],',');for(C=0;C"
    +"<B.length;C++){D=m.indexOf(B[C]);if(D>-1){if(A[2])E=v=A[2];else E=o"
    +";if(d==1){E=s.repl(E,'#',' - ');j=s.repl(j,'*','as_q');E=s.repl(E,'"
    +"^','ahoo');E=s.repl(E,'%','oogle');}F=s.split(A[1],',');for(G=0;G<F"
    +".length;G++){if(j.indexOf(F[G]+'=')>-1||j.indexOf('https://www.goog"
    +"le.')==0)H=1;I=s.getQueryParam(F[G],'',j).toLowerCase();if(H||I)bre"
    +"ak;}}if(H||I)break;}if(H||I)break;}}if(!r||g!='1'){r=s.getQueryPara"
    +"m(a,b);if(r){v=r;if(E)w='Paid Search';else w='Unknown Paid Channel'"
    +";}if(!r&&E&&H){v=E;w='Natural Search';}}if(k==1&&!r&&i==1)t=u=v=w='"
    +"Typed/Bookmarked';J=s._channelDomain;if(J&&o){K=s.split(J,'>');for("
    +"L=0;L<K.length;L++){M=s.split(K[L],'|');N=s.split(M[1],',');O=N.len"
    +"gth;for(P=0;P<O;P++){Q=N[P].toLowerCase();R=o.indexOf(Q);if(R>-1){w"
    +"=M[0];break;}}if(R>-1)break;}}J=s._channelParameter;if(J){K=s.split"
    +"(J,'>');for(L=0;L<K.length;L++){M=s.split(K[L],'|');N=s.split(M[1],"
    +"',');O=N.length;for(P=0;P<O;P++){R=s.getQueryParam(N[P]);if(R){w=M["
    +"0];break;}}if(R)break;}}J=s._channelPattern;if(J){K=s.split(J,'>');"
    +"for(L=0;L<K.length;L++){M=s.split(K[L],'|');N=s.split(M[1],',');O=N"
    +".length;for(P=0;P<O;P++){Q=N[P].toLowerCase();R=r.toLowerCase();S=R"
    +".indexOf(Q);if(S==0){w=M[0];break;}}if(S==0)break;}}S=w?r+u+w+I:'';"
    +"c=c?c:'c_m';if(c!='0')S=s.getValOnce(S,c,0);if(S){s._campaignID=r?r"
    +":'n/a';s._referrer=t?t:'n/a';s._referringDomain=u?u:'n/a';s._campai"
    +"gn=v?v:'n/a';s._channel=w?w:'n/a';s._partner=E?E:'n/a';s._keywords="
    +"H?I?I:'Keyword Unavailable':'n/a';if(f&&w!='Typed/Bookmarked'){h.se"
    +"tTime(h.getTime()+f*86400000);s.c_w('s_tbm'+f,1,h);}}");

/* Top 130 Search Engines - Grouped */
s.seList="google.,googlesyndication.com|q,as_q|Google>yahoo.com,yahoo"
+".co.jp|p,va|Yahoo!>bing.com|q|Bing>altavista.co,altavista.de|q,r|Al"
+"taVista>.aol.,suche.aolsvc.de|q,query|AOL>ask.jp,ask.co|q,ask|Ask>w"
+"ww.baidu.com|wd|Baidu>daum.net,search.daum.net|q|Daum>icqit.com|q|i"
+"cq>myway.com|searchfor|MyWay.com>naver.com,search.naver.com|query|N"
+"aver>netscape.com|query,search|Netscape Search>reference.com|q|Refe"
+"rence.com>seznam|w|Seznam.cz>abcsok.no|q|Startsiden>tiscali.it,www."
+"tiscali.co.uk|key,query|Tiscali>virgilio.it|qs|Virgilio>yandex|text"
+"|Yandex.ru>search.cnn.com|query|CNN Web Search>search.earthlink.net"
+"|q|Earthlink Search>search.comcast.net|q|Comcast Search>search.rr.c"
+"om|qs|RoadRunner Search>optimum.net|q|Optimum Search";

/*
* manageQueryParam 3.0(?) - AppMeasurement compatible only
*/
s.manageQueryParam=function(p,w,e,u){var s=this,x,y,i,qs,qp,qv,f,b;u=u?u:s.pageURL?s.pageURL:""+window.location;u=u=="f"&&parent?""+parent.location:u+"";x=u.indexOf("?");qs=x>-1?u.substring(x,u.length):"";u=x>-1?u.substring(0,x):u;x=qs.indexOf("?"+p+"=");if(x>-1){y=qs.indexOf("&");f="";if(y>-1){qp=qs.substring(x+1,y);b=qs.substring(y+1,qs.length)}else{qp=qs.substring(1,qs.length);b=""}}else{x=qs.indexOf("&"+p+"=");if(x>-1){f=qs.substring(1,x);b=qs.substring(x+1,qs.length);y=b.indexOf("&");if(y>-1){qp=
    b.substring(0,y);b=b.substring(y,b.length)}else{qp=b;b=""}}}if(e&&qp){y=qp.indexOf("=");qv=y>-1?qp.substring(y+1,qp.length):"";var eui=0;while(qv.indexOf("%25")>-1){qv=s.unescape(qv);eui++;if(eui==10)break}qv=s.replace(qv,"+"," ");qv=s.escape(qv);qv=s.replace(qv,"%25","%");qv=s.replace(qv,"%7C","|");qv=s.replace(qv,"%7c","|");qp=qp.substring(0,y+1)+qv}if(w&&qp)if(f)qs="?"+qp+"&"+f+b;else if(b)qs="?"+qp+"&"+b;else qs="?"+qp;else if(f)qs="?"+f+"&"+qp+b;else if(b)qs="?"+qp+"&"+b;else if(qp)qs="?"+qp;
    return u+qs};

/*
* Plugin: clickPast - version 1.0
*/
s.clickPast=new Function("scp","ct_ev","cp_ev","cpc",""
    +"var s=this,scp,ct_ev,cp_ev,cpc,ev,tct;if(s.p_fo(ct_ev)==1){if(!cpc)"
    +"{cpc='s_cpc';}ev=s.events?s.events+',':'';if(scp){s.events=ev+ct_ev"
    +";s.c_w(cpc,1,0);}else{if(s.c_r(cpc)>=1){s.events=ev+cp_ev;s.c_w(cpc"
    +",0,0);}}}");
s.p_fo=new Function("n",""
    +"var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]="
    +"new Object;return 1;}else {return 0;}");

/*
* Plugin: getValOnce_v1.0
*/
s.getValOnce=new Function("v","c","e",""
    +"var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c"
    +");if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return"
    +" v==k?'':v");

/*
* Utility Function: split v1.5 - split a string (JS 1.0 compatible)
*/
s.split=new Function("l","d",""
    +"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
    +"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
* Plugin Utility: Replace v1.0
*/
s.repl=new Function("x","o","n",""
    +"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
    +"substring(i+o.length);i=x.indexOf(o,i+l)}return x");


/*
* s.join: 1.0 - Utility Function
*
*/

s.join = new Function("v","p",""
    +"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
    +":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
    +";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
    +"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

/*
* Cookie Combining Utility v1.0 (Minified)
*/
if(!s.__ccucr){var c_rspers=function(){var s=this,cv=s.c_rr("s_pers"),date=(new Date).getTime(),expd=null,cvarr=[],vcv="";if(!cv)return vcv;cvarr=cv.split(";");for(var i=0,l=cvarr.length;i<l;i++){expd=cvarr[i].match(/\|([0-9]+)$/);if(expd&&parseInt(expd[1])>=date)vcv+=cvarr[i]+";"}return vcv};var c_r=function(k){var s=this,d=new Date,v=s.c_rr(k),c=s.c_rspers(),i,m,e;if(v)return v;k=s.escape?s.escape(k):encodeURIComponent(k);i=c.indexOf(" "+k+"=");c=i<0?s.c_rr("s_sess"):c;i=c.indexOf(" "+k+"=");m=
i<0?i:c.indexOf("|",i);e=i<0?i:c.indexOf(";",i);m=m>0?m:e;v=i<0?"":s.unescape?s.unescape(c.substring(i+2+k.length,m<0?c.length:m)):decodeURIComponent(c.substring(i+2+k.length,m<0?c.length:m));return v};s.c_rr=s.c_r;s.__ccucr=true;s.c_rspers=c_rspers;s.c_r=s.cookieRead=c_r}
if(!s.__ccucw){var c_w=function(k,v,e){var s=this,d=new Date,ht=0,pn="s_pers",sn="s_sess",pc=0,sc=0,pv,sv,c,i,t,f;d.setTime(d.getTime()-6E4);if(s.c_rr(k))s.c_wr(k,"",d);k=s.escape?s.escape(k):encodeURIComponent(k);pv=s.c_rspers();i=pv.indexOf(" "+k+"=");if(i>-1){pv=pv.substring(0,i)+pv.substring(pv.indexOf(";",i)+1);pc=1}sv=s.c_rr(sn);i=sv.indexOf(" "+k+"=");if(i>-1){sv=sv.substring(0,i)+sv.substring(sv.indexOf(";",i)+1);sc=1}d=new Date;if(e){if(e==1)e=new Date,f=e.getYear(),e.setYear(f+5+(f<1900?
    1900:0));if(e.getTime()>d.getTime()){pv+=" "+k+"="+(s.escape?s.escape(v):encodeURIComponent(v))+"|"+e.getTime()+";";pc=1}}else{sv+=" "+k+"="+(s.escape?s.escape(v):encodeURIComponent(v))+";";sc=1}sv=sv.replace(/%00/g,"");pv=pv.replace(/%00/g,"");if(sc)s.c_wr(sn,sv,0);if(pc){t=pv;while(t&&t.indexOf(";")!=-1){var t1=parseInt(t.substring(t.indexOf("|")+1,t.indexOf(";")));t=t.substring(t.indexOf(";")+1);ht=ht<t1?t1:ht}d.setTime(ht);s.c_wr(pn,pv,d)}return v==s.c_r(s.unescape?s.unescape(k):decodeURIComponent(k))};
s.c_wr=s.c_w;s.__ccucw=true;s.c_w=s.cookieWrite=c_w};



/****************************** MODULES *****************************/

// copy and paste implementation modules (Media, Integrate) here
// AppMeasurement_Module_Media.js - Media Module, included in AppMeasurement zip

function AppMeasurement_Module_Media(q){var b=this;b.s=q;q=window;q.s_c_in||(q.s_c_il=[],q.s_c_in=0);b._il=q.s_c_il;b._in=q.s_c_in;b._il[b._in]=b;q.s_c_in++;b._c="s_m";b.list=[];b.open=function(d,c,e,k){var f={},a=new Date,l="",g;c||(c=-1);if(d&&e){b.list||(b.list={});b.list[d]&&b.close(d);k&&k.id&&(l=k.id);if(l)for(g in b.list)!Object.prototype[g]&&b.list[g]&&b.list[g].R==l&&b.close(b.list[g].name);f.name=d;f.length=c;f.offset=0;f.e=0;f.playerName=b.playerName?b.playerName:e;f.R=l;f.C=0;f.a=0;f.timestamp=
Math.floor(a.getTime()/1E3);f.k=0;f.u=f.timestamp;f.c=-1;f.n="";f.g=-1;f.D=0;f.I={};f.G=0;f.m=0;f.f="";f.B=0;f.L=0;f.A=0;f.F=0;f.l=!1;f.v="";f.J="";f.K=0;f.r=!1;f.H="";f.complete=0;f.Q=0;f.p=0;f.q=0;b.list[d]=f}};b.openAd=function(d,c,e,k,f,a,l,g){var h={};b.open(d,c,e,g);if(h=b.list[d])h.l=!0,h.v=k,h.J=f,h.K=a,h.H=l};b.M=function(d){var c=b.list[d];b.list[d]=0;c&&c.monitor&&clearTimeout(c.monitor.interval)};b.close=function(d){b.i(d,0,-1)};b.play=function(d,c,e,k){var f=b.i(d,1,c,e,k);f&&!f.monitor&&
    (f.monitor={},f.monitor.update=function(){1==f.k&&b.i(f.name,3,-1);f.monitor.interval=setTimeout(f.monitor.update,1E3)},f.monitor.update())};b.click=function(d,c){b.i(d,7,c)};b.complete=function(d,c){b.i(d,5,c)};b.stop=function(d,c){b.i(d,2,c)};b.track=function(d){b.i(d,4,-1)};b.P=function(d,c){var e="a.media.",k=d.linkTrackVars,f=d.linkTrackEvents,a="m_i",l,g=d.contextData,h;c.l&&(e+="ad.",c.v&&(g["a.media.name"]=c.v,g[e+"pod"]=c.J,g[e+"podPosition"]=c.K),c.G||(g[e+"CPM"]=c.H));c.r&&(g[e+"clicked"]=
        !0,c.r=!1);g["a.contentType"]="video"+(c.l?"Ad":"");g["a.media.channel"]=b.channel;g[e+"name"]=c.name;g[e+"playerName"]=c.playerName;0<c.length&&(g[e+"length"]=c.length);g[e+"timePlayed"]=Math.floor(c.a);0<Math.floor(c.a)&&(g[e+"timePlayed"]=Math.floor(c.a));c.G||(g[e+"view"]=!0,a="m_s",b.Heartbeat&&b.Heartbeat.enabled&&(a=c.l?b.__primetime?"mspa_s":"msa_s":b.__primetime?"msp_s":"ms_s"),c.G=1);c.f&&(g[e+"segmentNum"]=c.m,g[e+"segment"]=c.f,0<c.B&&(g[e+"segmentLength"]=c.B),c.A&&0<c.a&&(g[e+"segmentView"]=
            !0));!c.Q&&c.complete&&(g[e+"complete"]=!0,c.S=1);0<c.p&&(g[e+"milestone"]=c.p);0<c.q&&(g[e+"offsetMilestone"]=c.q);if(k)for(h in g)Object.prototype[h]||(k+=",contextData."+h);l=g["a.contentType"];d.pe=a;d.pev3=l;var q,s;if(b.contextDataMapping)for(h in d.events2||(d.events2=""),k&&(k+=",events"),b.contextDataMapping)if(!Object.prototype[h]){a=h.length>e.length&&h.substring(0,e.length)==e?h.substring(e.length):"";l=b.contextDataMapping[h];if("string"==typeof l)for(q=l.split(","),s=0;s<q.length;s++)l=
        q[s],"a.contentType"==h?(k&&(k+=","+l),d[l]=g[h]):"view"==a||"segmentView"==a||"clicked"==a||"complete"==a||"timePlayed"==a||"CPM"==a?(f&&(f+=","+l),"timePlayed"==a||"CPM"==a?g[h]&&(d.events2+=(d.events2?",":"")+l+"="+g[h]):g[h]&&(d.events2+=(d.events2?",":"")+l)):"segment"==a&&g[h+"Num"]?(k&&(k+=","+l),d[l]=g[h+"Num"]+":"+g[h]):(k&&(k+=","+l),d[l]=g[h]);else if("milestones"==a||"offsetMilestones"==a)h=h.substring(0,h.length-1),g[h]&&b.contextDataMapping[h+"s"][g[h]]&&(f&&(f+=","+b.contextDataMapping[h+
            "s"][g[h]]),d.events2+=(d.events2?",":"")+b.contextDataMapping[h+"s"][g[h]]);g[h]&&(g[h]=0);"segment"==a&&g[h+"Num"]&&(g[h+"Num"]=0)}d.linkTrackVars=k;d.linkTrackEvents=f};b.i=function(d,c,e,k,f){var a={},l=(new Date).getTime()/1E3,g,h,q=b.trackVars,s=b.trackEvents,t=b.trackSeconds,u=b.trackMilestones,v=b.trackOffsetMilestones,w=b.segmentByMilestones,x=b.segmentByOffsetMilestones,p,n,r=1,m={},y;b.channel||(b.channel=b.s.w.location.hostname);if(a=d&&b.list&&b.list[d]?b.list[d]:0)if(a.l&&(t=b.adTrackSeconds,
            u=b.adTrackMilestones,v=b.adTrackOffsetMilestones,w=b.adSegmentByMilestones,x=b.adSegmentByOffsetMilestones),0>e&&(e=1==a.k&&0<a.u?l-a.u+a.c:a.c),0<a.length&&(e=e<a.length?e:a.length),0>e&&(e=0),a.offset=e,0<a.length&&(a.e=a.offset/a.length*100,a.e=100<a.e?100:a.e),0>a.c&&(a.c=e),y=a.D,m.name=d,m.ad=a.l,m.length=a.length,m.openTime=new Date,m.openTime.setTime(1E3*a.timestamp),m.offset=a.offset,m.percent=a.e,m.playerName=a.playerName,m.mediaEvent=0>a.g?"OPEN":1==c?"PLAY":2==c?"STOP":3==c?"MONITOR":
            4==c?"TRACK":5==c?"COMPLETE":7==c?"CLICK":"CLOSE",2<c||c!=a.k&&(2!=c||1==a.k)){f||(k=a.m,f=a.f);if(c){1==c&&(a.c=e);if((3>=c||5<=c)&&0<=a.g&&(r=!1,q=s="None",a.g!=e)){h=a.g;h>e&&(h=a.c,h>e&&(h=e));p=u?u.split(","):0;if(0<a.length&&p&&e>=h)for(n=0;n<p.length;n++)(g=p[n]?parseFloat(""+p[n]):0)&&h/a.length*100<g&&a.e>=g&&(r=!0,n=p.length,m.mediaEvent="MILESTONE",a.p=m.milestone=g);if((p=v?v.split(","):0)&&e>=h)for(n=0;n<p.length;n++)(g=p[n]?parseFloat(""+p[n]):0)&&h<g&&e>=g&&(r=!0,n=p.length,m.mediaEvent=
            "OFFSET_MILESTONE",a.q=m.offsetMilestone=g)}if(a.L||!f){if(w&&u&&0<a.length){if(p=u.split(","))for(p.push("100"),n=h=0;n<p.length;n++)if(g=p[n]?parseFloat(""+p[n]):0)a.e<g&&(k=n+1,f="M:"+h+"-"+g,n=p.length),h=g}else if(x&&v&&(p=v.split(",")))for(p.push(""+(0<a.length?a.length:"E")),n=h=0;n<p.length;n++)if((g=p[n]?parseFloat(""+p[n]):0)||"E"==p[n]){if(e<g||"E"==p[n])k=n+1,f="O:"+h+"-"+g,n=p.length;h=g}f&&(a.L=!0)}(f||a.f)&&f!=a.f&&(a.F=!0,a.f||(a.m=k,a.f=f),0<=a.g&&(r=!0));(2<=c||100<=a.e)&&a.c<e&&
            (a.C+=e-a.c,a.a+=e-a.c);if(2>=c||3==c&&!a.k)a.n+=(1==c||3==c?"S":"E")+Math.floor(e),a.k=3==c?1:c;!r&&0<=a.g&&3>=c&&(t=t?t:0)&&a.a>=t&&(r=!0,m.mediaEvent="SECONDS");a.u=l;a.c=e}if(!c||3>=c&&100<=a.e)2!=a.k&&(a.n+="E"+Math.floor(e)),c=0,q=s="None",m.mediaEvent="CLOSE";7==c&&(r=m.clicked=a.r=!0);if(5==c||b.completeByCloseOffset&&(!c||100<=a.e)&&0<a.length&&e>=a.length-b.completeCloseOffsetThreshold)r=m.complete=a.complete=!0;l=m.mediaEvent;"MILESTONE"==l?l+="_"+m.milestone:"OFFSET_MILESTONE"==l&&(l+=
                "_"+m.offsetMilestone);a.I[l]?m.eventFirstTime=!1:(m.eventFirstTime=!0,a.I[l]=1);m.event=m.mediaEvent;m.timePlayed=a.C;m.segmentNum=a.m;m.segment=a.f;m.segmentLength=a.B;b.monitor&&4!=c&&b.monitor(b.s,m);b.Heartbeat&&b.Heartbeat.enabled&&0<=a.g&&(r=!1);0==c&&b.M(d);r&&a.D==y&&(d={contextData:{}},d.linkTrackVars=q,d.linkTrackEvents=s,d.linkTrackVars||(d.linkTrackVars=""),d.linkTrackEvents||(d.linkTrackEvents=""),b.P(d,a),d.linkTrackVars||(d["!linkTrackVars"]=1),d.linkTrackEvents||(d["!linkTrackEvents"]=
                    1),b.s.track(d),a.F?(a.m=k,a.f=f,a.A=!0,a.F=!1):0<a.a&&(a.A=!1),a.n="",a.p=a.q=0,a.a-=Math.floor(a.a),a.g=e,a.D++)}return a};b.O=function(d,c,e,k,f){var a=0;if(d&&(!b.autoTrackMediaLengthRequired||c&&0<c)){if(b.list&&b.list[d])a=1;else if(1==e||3==e)b.open(d,c,"HTML5 Video",f),a=1;a&&b.i(d,e,k,-1,0)}};b.attach=function(d){var c,e,k;d&&d.tagName&&"VIDEO"==d.tagName.toUpperCase()&&(b.o||(b.o=function(c,a,d){var e,h;b.autoTrack&&(e=c.currentSrc,(h=c.duration)||(h=-1),0>d&&(d=c.currentTime),b.O(e,h,a,
                        d,c))}),c=function(){b.o(d,1,-1)},e=function(){b.o(d,1,-1)},b.j(d,"play",c),b.j(d,"pause",e),b.j(d,"seeking",e),b.j(d,"seeked",c),b.j(d,"ended",function(){b.o(d,0,-1)}),b.j(d,"timeupdate",c),k=function(){d.paused||d.ended||d.seeking||b.o(d,3,-1);setTimeout(k,1E3)},k())};b.j=function(b,c,e){b.attachEvent?b.attachEvent("on"+c,e):b.addEventListener&&b.addEventListener(c,e,!1)};void 0==b.completeByCloseOffset&&(b.completeByCloseOffset=1);void 0==b.completeCloseOffsetThreshold&&(b.completeCloseOffsetThreshold=
                    1);b.Heartbeat={};b.N=function(){var d,c;if(b.autoTrack&&(d=b.s.d.getElementsByTagName("VIDEO")))for(c=0;c<d.length;c++)b.attach(d[c])};b.j(q,"load",b.N)}

// AppMeasurement_Module_Integrate.js - Integrate Module, included in AppMeasurement zip


/*
============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 1.5.4
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.omniture.com
*/
function AppMeasurement(){var a=this;a.version="1.5.4";var k=window;k.s_c_in||(k.s_c_il=[],k.s_c_in=0);a._il=k.s_c_il;a._in=k.s_c_in;a._il[a._in]=a;k.s_c_in++;a._c="s_c";var q=k.AppMeasurement && k.AppMeasurement.Db;q||(q=null);var r=k,n,t;try{for(n=r.parent,t=r.location;n&&n.location&&t&&""+n.location!=""+t&&r.location&&""+n.location!=""+r.location&&n.location.host==t.host;)r=n,n=r.parent}catch(u){}a.sb=function(a){try{console.log(a)}catch(b){}};a.Ba=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
    0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.kb=function(){var c=k.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.cookieDomain&&
        !/^[0-9.]+$/.test(c)&&(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.cookieDomain=0<d?c.substring(d):c}return a.cookieDomain};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.kb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=
    e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?(d=new Date,d.setTime(d.getTime()+1E3*g)):1==d&&(d=new Date,g=d.getYear(),d.setYear(g+5+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=c+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toGMTString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.G=[];a.da=function(c,b,d){if(a.va)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,m=["webkitvisibilitychange","visibilitychange"];
    g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.ea)for(a.ea=1,d=0;d<m.length;d++)a.d.addEventListener(m[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.ea=0,a.delayReady())});f=1;e=0}else d||a.l("_d")&&(f=1);f&&(a.G.push({m:c,a:b,t:e}),a.ea||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.l("_d")?b=1:a.pa();0<a.G.length;){d=a.G.shift();if(b&&!d.t&&d.t>c){a.G.unshift(d);setTimeout(a.delayReady,
        parseInt(a.maxDelay/2));break}a.va=1;a[d.m].apply(a,d.a);a.va=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.da("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,m="";e=f="";if(a.lightProfileID)d=a.K,(m=a.lightTrackVars)&&(m=","+m+","+a.ia.join(",")+",");else{d=a.c;if(a.pe||a.linkType)m=a.linkTrackVars,
        f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(m=a[e].Cb,f=a[e].Bb));m&&(m=","+m+","+a.A.join(",")+",");f&&m&&(m+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!m||0<=m.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.B=function(c,b,d,f,e){var g="",m,p,k,w,n=0;"contextData"==c&&(c="c");if(b){for(m in b)if(!(Object.prototype[m]||e&&m.substring(0,e.length)!=e)&&b[m]&&(!d||0<=d.indexOf(","+(f?f+".":"")+m+","))){k=!1;if(n)for(p=
            0;p<n.length;p++)m.substring(0,n[p].length)==n[p]&&(k=!0);if(!k&&(""==g&&(g+="&"+c+"."),p=b[m],e&&(m=m.substring(e.length)),0<m.length))if(k=m.indexOf("."),0<k)p=m.substring(0,k),k=(e?e:"")+p+".",n||(n=[]),n.push(k),g+=a.B(p,b,d,f,k);else if("boolean"==typeof p&&(p=p?"true":"false"),p){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(k=m.substring(0,4),w=m.substring(4),m){case "transactionID":m="xact";break;case "channel":m="ch";break;case "campaign":m="v0";break;default:a.Ba(w)&&("prop"==
            k?m="c"+w:"eVar"==k?m="v"+w:"list"==k?m="l"+w:"hier"==k&&(m="h"+w,p=p.substring(0,255)))}g+="&"+a.escape(m)+"="+a.escape(p)}}""!=g&&(g+="&."+c)}return g};a.mb=function(){var c="",b,d,f,e,g,m,p,k,n="",r="",s=e="";if(a.lightProfileID)b=a.K,(n=a.lightTrackVars)&&(n=","+n+","+a.ia.join(",")+",");else{b=a.c;if(a.pe||a.linkType)n=a.linkTrackVars,r=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(n=a[e].Cb,r=a[e].Bb));n&&(n=","+n+","+a.A.join(",")+",");r&&(r=","+r+",",
            n&&(n+=",events,"));a.events2&&(s+=(""!=s?",":"")+a.events2)}if(a.visitor&&1.5<=parseFloat(a.visitor.version)&&a.visitor.getCustomerIDs){e=q;if(g=a.visitor.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState));e&&(c+=a.B("cid",e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.B("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);m=e.substring(4);!g&&
                "events"==e&&s&&(g=s,s="");if(g&&(!n||0<=n.indexOf(","+e+","))){switch(e){case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,
                    255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e=
                "cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":s&&(g+=(""!=g?",":"")+s);if(r)for(m=
                    g.split(","),g="",f=0;f<m.length;f++)p=m[f],k=p.indexOf("="),0<=k&&(p=p.substring(0,k)),k=p.indexOf(":"),0<=k&&(p=p.substring(0,k)),0<=r.indexOf(","+p+",")&&(g+=(g?",":"")+m[f]);break;case "events2":g="";break;case "contextData":c+=a.B("c",a[e],n,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e=
                "mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.B("mts",a[e],n,e));g="";break;default:a.Ba(m)&&("prop"==f?e="c"+m:"eVar"==f?e="v"+m:"list"==f?e="l"+m:"hier"==f&&(e="h"+m,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}return c};a.u=function(a){var b=a.tagName;if("undefined"!=""+a.Gb||"undefined"!=""+a.wb&&"HTML"!=(""+a.wb).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||
                    "BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.xa=function(a){var b=a.href?a.href:"",d,f,e;d=b.indexOf(":");f=b.indexOf("?");e=b.indexOf("/");b&&(0>d||0<=f&&d>f||0<=e&&d>e)&&(f=a.protocol&&1<a.protocol.length?a.protocol:l.protocol?l.protocol:"",d=l.pathname.lastIndexOf("/"),b=(f?f+"//":"")+(a.host?a.host:l.host?l.host:"")+("/"!=h.substring(0,1)?l.pathname.substring(0,0>d?0:d)+"/":"")+b);return b};a.H=function(c){var b=a.u(c),d,f,e="",g=0;return b&&
                (d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):c.src&&"IMAGE"==b&&(e=c.src):e=a.xa(c),e)?{id:e.substring(0,100),type:g}:0};a.Eb=function(c){for(var b=a.u(c),d=a.H(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.u(c),d=a.H(c);
                d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.vb=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,m;a.ja=1;d||(a.ja=0,d=a.clickObject);if(d){c=a.u(d);for(b=a.H(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.u(d),b=a.H(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var p=d.onclick?""+d.onclick:"";if(0<=p.indexOf(".tl(")||0<=p.indexOf(".trackLink("))d=0}}else a.ja=1;!e&&d&&(e=a.xa(d));e&&
                !a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var n=0,r=0,q;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(p=e.toLowerCase(),g=p.indexOf("?"),m=p.indexOf("#"),0<=g?0<=m&&m<g&&(g=m):g=m,0<=g&&(p=p.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),m=0;m<g.length;m++)(q=g[m])&&p.substring(p.length-(q.length+1))=="."+q&&(f="d");if(a.trackExternalLinks&&!f&&(p=e.toLowerCase(),a.Aa(p)&&(a.linkInternalFilters||(a.linkInternalFilters=k.location.hostname),
                    g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),n=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(m=0;m<g.length;m++)q=g[m],0<=p.indexOf(q)&&(r=1);r?n&&(f="e"):n||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),k.s_objectID&&(b.id=k.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+
                "&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.nb=function(){var c=a.ja,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats){var b={},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):0,m,p,k,e=0;if(g)for(m=0;m<g.length;m++)p=g[m].split("="),f=a.unescape(p[0]).split(","),p=a.unescape(p[1]),b[p]=
                    f;f=a.account.split(",");if(c||a.e){c&&!a.e&&(e=1);for(p in b)if(!Object.prototype[p])for(m=0;m<f.length;m++)for(e&&(k=b[p].join(","),k==a.account&&(a.e+=("&"!=p.charAt(0)?"&":"")+p,b[p]=[],d=1)),g=0;g<b[p].length;g++)k=b[p][g],k==f[m]&&(e&&(a.e+="&u="+a.escape(k)+("&"!=p.charAt(0)?"&":"")+p+"&u=0"),b[p].splice(g,1),d=1);c||(d=1);if(d){e="";m=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),m=1);for(p in b)!Object.prototype[p]&&0<m&&0<b[p].length&&(e+=(e?"&":"")+a.escape(b[p].join(","))+"="+
                        a.escape(p),m--);a.cookieWrite("s_sq",e)}}}return c};a.ob=function(){if(!a.Ab){var c=new Date,b=r.location,d,f,e=f=d="",g="",m="",k="1.2",n=a.cookieWrite("s_cc","true",0)?"Y":"N",q="",s="";if(c.setUTCDate&&(k="1.3",(0).toPrecision&&(k="1.5",c=[],c.forEach))){k="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(k="1.7",c.reduce&&(k="1.8",k.trim&&(k="1.8.1",Date.parse&&(k="1.8.2",Object.create&&(k="1.8.5")))))}catch(t){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?
                    screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;m=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),q=a.b.Fb(b)?"Y":"N"}catch(u){}try{a.b.addBehavior("#default#clientCaps"),s=a.b.connectionType}catch(x){}a.resolution=d;a.colorDepth=f;a.javascriptVersion=k;a.javaEnabled=e;a.cookiesEnabled=n;a.browserWidth=g;a.browserHeight=m;a.connectionType=s;a.homepage=q;a.Ab=1}};a.L={};a.loadModule=function(c,
                        b){var d=a.L[c];if(!d){d=k["AppMeasurement_Module_"+c]?new k["AppMeasurement_Module_"+c](a):{};a.L[c]=a[c]=d;d.Qa=function(){return d.Ua};d.Va=function(b){if(d.Ua=b)a[c+"_onLoad"]=b,a.da(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.Qa,set:d.Va}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=b,a.da(c+"_onLoad",[a,d],1)||b(a,d))};a.l=function(c){var b,d;for(b in a.L)if(!Object.prototype[b]&&(d=a.L[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&
                            d[c]()))return 1;return 0};a.qb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>v)return 0}return 1};a.M=function(c,b){var d,f,e,g,m,k;for(d=0;2>d;d++)for(f=0<d?a.qa:a.c,e=0;e<f.length;e++)if(g=f[e],(m=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(k in a[g])m[k]||
                        (m[k]=a[g][k]);a[g]=m}};a.Ja=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.qa:a.c,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.ib=function(a){var b,d,f,e,g,m=0,k,n="",q="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(k=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?m=",q,ie,start,search_key,word,kw,cd,":
                            0<=e.indexOf("yahoo.co")&&(m=",p,ei,"),m&&k)))){if((a=k.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=m.indexOf(","+e.substring(0,d)+",")?n+=(n?"&":"")+e:q+=(q?"&":"")+e;n&&q?k=n+"&"+q:q=""}d=253-(k.length-q.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+k}return a};a.Pa=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],
                            function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.Z=!1;a.D=!1;a.Xa=function(){a.D=!0;a.i()};a.X=!1;a.Q=!1;a.Ta=function(c){a.marketingCloudVisitorID=c;a.Q=!0;a.i()};a.aa=!1;a.R=!1;a.Ya=function(c){a.visitorOptedOut=c;a.R=!0;a.i()};a.U=!1;a.N=!1;a.La=function(c){a.analyticsVisitorID=c;a.N=!0;a.i()};a.W=!1;a.P=!1;a.Na=function(c){a.audienceManagerLocationHint=c;a.P=!0;a.i()};a.V=!1;a.O=!1;a.Ma=function(c){a.audienceManagerBlob=c;a.O=!0;a.i()};
                            a.Oa=function(c){a.maxDelay||(a.maxDelay=250);return a.l("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.Y=!1;a.C=!1;a.pa=function(){a.C=!0;a.i()};a.isReadyToTrack=function(){var c=!0,b=a.visitor;a.Z||a.D||(a.Pa(a.Xa)?a.D=!0:a.Z=!0);if(a.Z&&!a.D)return!1;b&&b.isAllowed()&&(a.X||a.marketingCloudVisitorID||!b.getMarketingCloudVisitorID||(a.X=!0,a.marketingCloudVisitorID=b.getMarketingCloudVisitorID([a,a.Ta]),a.marketingCloudVisitorID&&(a.Q=!0)),a.aa||a.visitorOptedOut||!b.isOptedOut||(a.aa=
                                !0,a.visitorOptedOut=b.isOptedOut([a,a.Ya]),a.visitorOptedOut!=q&&(a.R=!0)),a.U||a.analyticsVisitorID||!b.getAnalyticsVisitorID||(a.U=!0,a.analyticsVisitorID=b.getAnalyticsVisitorID([a,a.La]),a.analyticsVisitorID&&(a.N=!0)),a.W||a.audienceManagerLocationHint||!b.getAudienceManagerLocationHint||(a.W=!0,a.audienceManagerLocationHint=b.getAudienceManagerLocationHint([a,a.Na]),a.audienceManagerLocationHint&&(a.P=!0)),a.V||a.audienceManagerBlob||!b.getAudienceManagerBlob||(a.V=!0,a.audienceManagerBlob=
                                b.getAudienceManagerBlob([a,a.Ma]),a.audienceManagerBlob&&(a.O=!0)),a.X&&!a.Q&&!a.marketingCloudVisitorID||a.U&&!a.N&&!a.analyticsVisitorID||a.W&&!a.P&&!a.audienceManagerLocationHint||a.V&&!a.O&&!a.audienceManagerBlob||a.aa&&!a.R)&&(c=!1);a.Y||a.C||(a.Oa(a.pa)?a.C=!0:a.Y=!0);a.Y&&!a.C&&(c=!1);return c};a.k=q;a.o=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};f.bb=c;f.ab=b;f.Za=d;a.k==q&&(a.k=[]);a.k.push(f);0==a.o&&(a.o=setInterval(a.i,100))};a.i=function(){var c;if(a.isReadyToTrack()&&(a.Wa(),
                                    a.k!=q))for(;0<a.k.length;)c=a.k.shift(),c.ab.apply(c.bb,c.Za)};a.Wa=function(){a.o&&(clearInterval(a.o),a.o=0)};a.Ra=function(c){var b,d,f=q,e=q;if(!a.isReadyToTrack()){b=[];if(c!=q)for(d in f={},c)f[d]=c[d];e={};a.Ja(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,a.track,b);return!0}return!1};a.lb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*
                                e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+" "+f.getDay()+" "+f.getTimezoneOffset());a.visitor&&(a.visitor.jb&&(a.authState=a.visitor.jb()),!a.supplementalDataID&&a.visitor.getSupplementalDataID&&
                                (a.supplementalDataID=a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)));a.l("_s");a.Ra(c)||(b&&a.M(b),c&&(d={},a.Ja(d,0),a.M(c)),a.qb()&&!a.visitorOptedOut&&(a.analyticsVisitorID||a.marketingCloudVisitorID||(a.fid=a.lb()),a.vb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(f.getTime()/1E3)),f=k.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Ka||(a.referrer=r.document.referrer),
                                    a.Ka=1,a.referrer=a.ib(a.referrer),a.l("_g")),a.nb()&&!a.abort&&(a.ob(),g+=a.mb(),a.ub(e,g),a.l("_t"),a.referrer=""))),c&&a.M(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=k.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=0};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.j=c,a.q=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=
                                    d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.c.length;c++)if(b=a.c[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.ub=function(c,b){var d,f=a.trackingServer;d="";var e=a.dc,g="sc.",k=a.visitorNamespace;f?a.trackingServerSecure&&a.ssl&&
                                    (f=a.trackingServerSecure):(k||(k=a.account,f=k.indexOf(","),0<=f&&(k=k.substring(0,f)),k=k.replace(/[^A-Za-z0-9]/g,"")),d||(d="2o7.net"),e=e?(""+e).toLowerCase():"d1","2o7.net"==d&&("d1"==e?e="112":"d2"==e&&(e="122"),g=""),f=k+"."+e+"."+g+d);d=a.ssl?"https://":"http://";e=a.AudienceManagement&&a.AudienceManagement.isReady();d+=f+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(e?"10":"1")+"/JS-"+a.version+(a.zb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")+"/"+c+"?AQB=1&ndh=1&pf=1&"+(e?"callback=s_c_il["+
                                        a._in+"].AudienceManagement.passData&":"")+b+"&AQE=1";a.gb(d);a.fa()};a.gb=function(c){a.g||a.pb();a.g.push(c);a.ha=a.r();a.Ha()};a.pb=function(){a.g=a.rb();a.g||(a.g=[])};a.rb=function(){var c,b;if(a.ma()){try{(b=k.localStorage.getItem(a.ka()))&&(c=k.JSON.parse(b))}catch(d){}return c}};a.ma=function(){var c=!0;a.trackOffline&&a.offlineFilename&&k.localStorage&&k.JSON||(c=!1);return c};a.ya=function(){var c=0;a.g&&(c=a.g.length);a.v&&c++;return c};a.fa=function(){if(!a.v)if(a.za=q,a.la)a.ha>a.J&&
                                        a.Fa(a.g),a.oa(500);else{var c=a.$a();if(0<c)a.oa(c);else if(c=a.wa())a.v=1,a.tb(c),a.xb(c)}};a.oa=function(c){a.za||(c||(c=0),a.za=setTimeout(a.fa,c))};a.$a=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.r()-a.Ea;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.wa=function(){if(0<a.g.length)return a.g.shift()};a.tb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.sb(b)}};
                                        a.Sa=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.T=!1;var s;try{s=JSON.parse('{"x":"y"}')}catch(x){s=null}s&&"y"==s.x?(a.T=!0,a.S=function(a){return JSON.parse(a)}):k.$&&k.$.parseJSON?(a.S=function(a){return k.$.parseJSON(a)},a.T=!0):a.S=function(){return null};a.xb=function(c){var b,d,f;a.Sa()&&2047<c.length&&("undefined"!=typeof XMLHttpRequest&&(b=new XMLHttpRequest,"withCredentials"in b?d=1:b=0),b||"undefined"==typeof XDomainRequest||(b=new XDomainRequest,d=2),b&&a.AudienceManagement&&
                                            a.AudienceManagement.isReady()&&(a.T?b.ra=!0:b=0));!b&&a.Ia&&(c=c.substring(0,2047));!b&&a.d.createElement&&a.AudienceManagement&&a.AudienceManagement.isReady()&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="");b.ua=function(){try{a.na&&(clearTimeout(a.na),a.na=0),b.timeout&&(clearTimeout(b.timeout),b.timeout=0)}catch(c){}};b.onload=b.yb=function(){b.ua();
                                            a.fb();a.ba();a.v=0;a.fa();if(b.ra){b.ra=!1;try{var c=a.S(b.responseText);a.AudienceManagement.passData(c)}catch(d){}}};b.onabort=b.onerror=b.hb=function(){b.ua();(a.trackOffline||a.la)&&a.v&&a.g.unshift(a.eb);a.v=0;a.ha>a.J&&a.Fa(a.g);a.ba();a.oa(500)};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.yb():b.hb())};a.Ea=a.r();if(1==d||2==d){var e=c.indexOf("?");f=c.substring(0,e);e=c.substring(e+1);e=e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");1==d?(b.open("POST",f,!0),b.send(e)):
                                            2==d&&(b.open("POST",f),b.send(e))}else if(b.src=c,3==d){if(a.Ca)try{f.removeChild(a.Ca)}catch(g){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Ca=a.cb}b.abort&&(a.na=setTimeout(b.abort,5E3));a.eb=c;a.cb=k["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.F||a.q)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.ca=setTimeout(a.ba,a.forcedLinkTrackingTimeout)};a.fb=function(){if(a.ma()&&!(a.Da>a.J))try{k.localStorage.removeItem(a.ka()),a.Da=a.r()}catch(c){}};
                                            a.Fa=function(c){if(a.ma()){a.Ha();try{k.localStorage.setItem(a.ka(),k.JSON.stringify(c)),a.J=a.r()}catch(b){}}};a.Ha=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.g.length>a.offlineLimit;)a.wa()}};a.forceOffline=function(){a.la=!0};a.forceOnline=function(){a.la=!1};a.ka=function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.r=function(){return(new Date).getTime()};a.Aa=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&
                                            0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.zb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.M(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&
                                                (f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d){var f;b||(b=a.pageURL?a.pageURL:k.location);d||(d="&");return c&&b&&(b=""+b,f=b.indexOf("?"),0<=f&&(b=d+b.substring(f+1)+d,f=b.indexOf(d+c+"="),0<=f&&(b=b.substring(f+d.length+c.length+1),f=b.indexOf(d),0<=f&&(b=b.substring(0,f)),0<b.length)))?a.unescape(b):""}};a.A=
                                            "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");a.c=a.A.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));
                                            a.ia="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.K=a.ia.slice(0);a.qa="account allAccounts debugTracking visitor trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData AudienceManagement".split(" ");
                                            for(n=0;250>=n;n++)76>n&&(a.c.push("prop"+n),a.K.push("prop"+n)),a.c.push("eVar"+n),a.K.push("eVar"+n),6>n&&a.c.push("hier"+n),4>n&&a.c.push("list"+n);n="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest".split(" ");a.c=a.c.concat(n);a.A=a.A.concat(n);a.ssl=0<=k.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=0;a.offlineFilename=
                                                "AppMeasurement.offline";a.Ea=0;a.ha=0;a.J=0;a.Da=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=k;a.d=k.document;try{if(a.Ia=!1,navigator){var y=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=y.indexOf("MSIE ")||0<=y.indexOf("Trident/")&&0<=y.indexOf("Windows NT 6"))a.Ia=!0}}catch(z){}a.ba=function(){a.ca&&(k.clearTimeout(a.ca),a.ca=q);a.j&&a.F&&a.j.dispatchEvent(a.F);a.q&&("function"==typeof a.q?a.q():a.j&&a.j.href&&(a.d.location=
                                                    a.j.href));a.j=a.F=a.q=0};a.Ga=function(){a.b=a.d.body;a.b?(a.p=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.ta)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.p,!1);else{a.b.removeEventListener("click",a.p,!0);a.ta=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.I&&a.I==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=
                                                    0;else{var m=a.I=a.clickObject;a.ga&&(clearTimeout(a.ga),a.ga=0);a.ga=setTimeout(function(){a.I==m&&(a.I=0)},1E4);f=a.ya();a.track();if(f<a.ya()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Aa(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||k.name&&d==k.name))){try{b=a.d.createEvent("MouseEvents")}catch(n){b=new k.MouseEvent}if(b){try{b.initMouseEvent("click",
                                                        c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(q){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.j=c.target,a.F=b)}}}}}catch(r){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.p):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&
                                                            k.MouseEvent)&&(a.ta=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.p,!0)),a.b.addEventListener("click",a.p,!1))):setTimeout(a.Ga,30)};a.Ga()}
                                                    function s_gi(a){var k,q=window.s_c_il,r,n,t=a.split(","),u,s,x=0;if(q)for(r=0;!x&&r<q.length;){k=q[r];if("s_c"==k._c&&(k.account||k.oun))if(k.account&&k.account==a)x=1;else for(n=k.account?k.account:k.oun,n=k.allAccounts?k.allAccounts:n.split(","),u=0;u<t.length;u++)for(s=0;s<n.length;s++)t[u]==n[s]&&(x=1);r++}x||(k=new AppMeasurement);k.setAccount?k.setAccount(a):k.sa&&k.sa(a);return k}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
                                                    function s_pgicq(){var a=window,k=a.s_giq,q,r,n;if(k)for(q=0;q<k.length;q++)r=k[q],n=s_gi(r.oun),n.setAccount(r.un),n.setTagContainer(r.tagContainerName);a.s_giq=0}s_pgicq();