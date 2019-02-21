//<!--
// \include\user_behavioral_tracking\PulsarUBT.js 

var tracking=tracking||(function(){return{};})();tracking.pulsarjs=(tracking.pulsarjs&&QUnit===undefined)||(function(){var getPlsUBTBrowser2=function(ua){if(ua==undefined||ua==null){ua=navigator.userAgent;}
var b=ua?ua.toLowerCase().replace(/-/g,''):'';var bs=['chrome','firefox','safari','msie','opera'];var browser={name:null,isMobile:false};for(var i=0;i<bs.length;i+=1){if(b.indexOf(bs[i])!==-1){browser.name=bs[i];break;}}
if(browser.name!=null){browser.isMobile=(b.match(/iPhone|iPad|iPod/i)!=null);}
return browser;};var getUnloadEvent=function(browser){var eventName='unload';if(browser.name=='chrome'){eventName='beforeunload';}else if(browser.name=='safari'&&browser.isMobile&&'onpagehide'in window){eventName='pagehide';}else if(browser.name=='safari'&&!browser.isMobile){eventName='beforeunload';}else{eventName='unload';}
return eventName;};return{getPlsUBTBrowser2:getPlsUBTBrowser2,getUnloadEvent:getUnloadEvent};})();function BigInteger(n,s){if(!(this instanceof BigInteger)){if(n instanceof BigInteger){return n;}
else if(typeof n==="undefined"){return BigInteger.ZERO;}
return BigInteger.parse(n);}
while(n.length&&!n[n.length-1]){--n.length;}
this._d=n;this._s=n.length?(s||1):0;}
BigInteger.radixRegex=[/^$/,/^$/,/^[01]*$/,/^[012]*$/,/^[0-3]*$/,/^[0-4]*$/,/^[0-5]*$/,/^[0-6]*$/,/^[0-7]*$/,/^[0-8]*$/,/^[0-9]*$/,/^[0-9aA]*$/,/^[0-9abAB]*$/,/^[0-9abcABC]*$/,/^[0-9a-dA-D]*$/,/^[0-9a-eA-E]*$/,/^[0-9a-fA-F]*$/,/^[0-9a-gA-G]*$/,/^[0-9a-hA-H]*$/,/^[0-9a-iA-I]*$/,/^[0-9a-jA-J]*$/,/^[0-9a-kA-K]*$/,/^[0-9a-lA-L]*$/,/^[0-9a-mA-M]*$/,/^[0-9a-nA-N]*$/,/^[0-9a-oA-O]*$/,/^[0-9a-pA-P]*$/,/^[0-9a-qA-Q]*$/,/^[0-9a-rA-R]*$/,/^[0-9a-sA-S]*$/,/^[0-9a-tA-T]*$/,/^[0-9a-uA-U]*$/,/^[0-9a-vA-V]*$/,/^[0-9a-wA-W]*$/,/^[0-9a-xA-X]*$/,/^[0-9a-yA-Y]*$/,/^[0-9a-zA-Z]*$/];BigInteger.ZERO=new BigInteger([],0);BigInteger.ONE=new BigInteger([1],1);BigInteger.small=[BigInteger.ZERO,BigInteger.ONE,new BigInteger([2],1),new BigInteger([3],1),new BigInteger([4],1),new BigInteger([5],1),new BigInteger([6],1),new BigInteger([7],1),new BigInteger([8],1),new BigInteger([9],1),new BigInteger([0,1],1),new BigInteger([1,1],1),new BigInteger([2,1],1),new BigInteger([3,1],1),new BigInteger([4,1],1),new BigInteger([5,1],1),new BigInteger([6,1],1),new BigInteger([7,1],1),new BigInteger([8,1],1),new BigInteger([9,1],1),new BigInteger([0,2],1),new BigInteger([1,2],1),new BigInteger([2,2],1),new BigInteger([3,2],1),new BigInteger([4,2],1),new BigInteger([5,2],1),new BigInteger([6,2],1),new BigInteger([7,2],1),new BigInteger([8,2],1),new BigInteger([9,2],1),new BigInteger([0,3],1),new BigInteger([1,3],1),new BigInteger([2,3],1),new BigInteger([3,3],1),new BigInteger([4,3],1),new BigInteger([5,3],1),new BigInteger([6,3],1)];BigInteger.digits="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");BigInteger.prototype.toString=function(base){base=+base||10;if(base<2||base>36){throw new Error("illegal radix "+base+".");}
if(this._s===0){return"0";}
if(base===10){return(this._s<0?"-":"")+(this._d.slice().reverse().join("")||"0");}
else{var numerals=BigInteger.digits;base=BigInteger(base);var sign=this._s;var n=this.abs();var digits=[];var digit;while(n._s!==0){var divmod=n.divRem(base);n=divmod[0];digit=divmod[1];digits.push(numerals[digit]);}
return(sign<0?"-":"")+digits.reverse().join("");}};BigInteger.parse=function(s,base){function expandExponential(str){str=str.replace(/\s*[*xX]\s*10\s*(\^|\*\*)\s*/,"e");return str.replace(/^([+\-])?(\d+)\.?(\d*)[eE]([+\-]?\d+)$/,function(x,s,n,f,c){c=+c;var l=c<0;var i=n.length+c;x=(l?n:f).length;c=((c=Math.abs(c))>=x?c-x+l:0);var z=(new Array(c+1)).join("0");var r=n+f;return(s||"")+(l?r=z+r:r+=z).substr(0,i+=l?z.length:0)+(i<r.length?"."+r.substr(i):"");});}
s=s.toString();if(typeof base==="undefined"||+base===10){s=expandExponential(s);}
var parts=/^([+\-]?)(0[xXbB]?)?([0-9A-Za-z]*)(?:\.\d*)?$/.exec(s);if(parts){var sign=parts[1]||"+";var baseSection=parts[2]||"";var digits=parts[3]||"";if(typeof base==="undefined"){if(baseSection==="0"){if(digits.length===0){base=10;digits="0";}
else{base=8;}}
else if(baseSection==="0x"||baseSection==="0X"){base=16;}
else if(baseSection==="0b"||baseSection==="0B"){base=2;}
else{base=10;}}
else if(base<2||base>36){throw new Error("Illegal radix "+base+".");}
base=+base;if(!(BigInteger.radixRegex[base].test(digits))){throw new Error("Bad digit for radix "+base);}
digits=digits.replace(/^0+/,"").split("");if(digits.length===0){return BigInteger.ZERO;}
sign=(sign==="-")?-1:1;if(base===10){var len=digits.length;var res=new Array(len);for(var i=0;i<len;i++){res[i]=Number(digits[i]);}
return new BigInteger(res.reverse(),sign);}
var d=BigInteger.ZERO;base=BigInteger(base);var small=BigInteger.small;for(var i=0;i<digits.length;i++){d=d.multiply(base).add(small[parseInt(digits[i],36)]);}
return new BigInteger(d._d,sign);}
else{throw new Error("Invalid BigInteger format: "+s);}};BigInteger.prototype.add=function(n){if(this._s===0){return BigInteger(n);}
n=BigInteger(n);if(n._s===0){return this;}
if(this._s!==n._s){n=n.negate();return this.subtract(n);}
var a=this._d;var b=n._d;var al=a.length;var bl=b.length;var sum=new Array(Math.max(al,bl)+1);var size=Math.min(al,bl);var carry=0;for(var i=0;i<size;i++){var digit=a[i]+b[i]+carry;sum[i]=digit%10;carry=(digit/10)|0;}
if(bl>al){a=b;al=bl;}
for(var i=size;carry&&i<al;i++){var digit=a[i]+carry;sum[i]=digit%10;carry=(digit/10)|0;}
if(carry){sum[i]=carry;}
for(;i<al;i++){sum[i]=a[i];}
return new BigInteger(sum,this._s);};BigInteger.prototype.abs=function(){return(this._s<0)?this.negate():this;};BigInteger.prototype.subtract=function(n){if(this._s===0){return BigInteger(n).negate();}
n=BigInteger(n);if(n._s===0){return this;}
if(this._s!==n._s){n=n.negate();return this.add(n);}
var m=this;if(this._s<0){var t=m;m=new BigInteger(n._d,1);n=new BigInteger(t._d,1);}
var sign=m.compareAbs(n);if(sign===0){return BigInteger.ZERO;}
else if(sign<0){var t=n;n=m;m=t;}
var a=m._d;var b=n._d;var al=a.length;var bl=b.length;var diff=new Array(al);var borrow=0;for(var i=0;i<bl;i++){var digit=a[i]-borrow-b[i];if(digit<0){digit+=10;borrow=1;}
else{borrow=0;}
diff[i]=digit;}
for(var i=bl;i<al;i++){var digit=a[i]-borrow;if(digit<0){digit+=10;}
else{diff[i++]=digit;break;}
diff[i]=digit;}
for(;i<al;i++){diff[i]=a[i];}
return new BigInteger(diff,sign);};(function(){function addOne(n,sign){var a=n._d;var sum=a.slice();var carry=true;var i=0;while(true){var digit=(a[i]||0)+1;sum[i]=digit%10;if(digit<=9){break;}
++i;}
return new BigInteger(sum,sign);}
function subtractOne(n,sign){var a=n._d;var sum=a.slice();var borrow=true;var i=0;while(true){var digit=(a[i]||0)-1;if(digit<0){sum[i]=digit+10;}
else{sum[i]=digit;break;}
++i;}
return new BigInteger(sum,sign);}
BigInteger.prototype.next=function(){switch(this._s){case 0:return BigInteger.ONE;case-1:return subtractOne(this,-1);case 1:default:return addOne(this,1);}};BigInteger.prototype.prev=function(){switch(this._s){case 0:return BigInteger.M_ONE;case-1:return addOne(this,-1);case 1:default:return subtractOne(this,1);}};})();BigInteger.prototype.compareAbs=function(n){if(this===n){return 0;}
n=BigInteger(n);if(this._s===0){return(n._s!==0)?-1:0;}
if(n._s===0){return 1;}
var l=this._d.length;var nl=n._d.length;if(l<nl){return-1;}
else if(l>nl){return 1;}
var a=this._d;var b=n._d;for(var i=l-1;i>=0;i--){if(a[i]!==b[i]){return a[i]<b[i]?-1:1;}}
return 0;};BigInteger.prototype.compare=function(n){if(this===n){return 0;}
n=BigInteger(n);if(this._s===0){return-n._s;}
if(this._s===n._s){var cmp=this.compareAbs(n);return cmp*this._s;}
else{return this._s;}};BigInteger.prototype.isUnit=function(){return this===BigInteger.ONE||this===BigInteger.M_ONE||(this._d.length===1&&this._d[0]===1);};BigInteger.prototype.multiply=function(n){if(this._s===0){return BigInteger.ZERO;}
n=BigInteger(n);if(n._s===0){return BigInteger.ZERO;}
if(this.isUnit()){if(this._s<0){return n.negate();}
return n;}
if(n.isUnit()){if(n._s<0){return this.negate();}
return this;}
if(this===n){return this.square();}
var r=(this._d.length>=n._d.length);var a=(r?this:n)._d;var b=(r?n:this)._d;var al=a.length;var bl=b.length;var pl=al+bl;var partial=new Array(pl);for(var i=0;i<pl;i++){partial[i]=0;}
for(var i=0;i<bl;i++){var carry=0;var bi=b[i];var jlimit=al+i;for(var j=i;j<jlimit;j++){var digit=partial[j]+bi*a[j-i]+carry;carry=(digit/10)|0;partial[j]=(digit%10)|0;}
if(carry){var digit=partial[j]+carry;carry=(digit/10)|0;partial[j]=digit%10;}}
return new BigInteger(partial,this._s*n._s);};BigInteger.prototype.multiplySingleDigit=function(n,cache){if(n===0||this._s===0){return BigInteger.ZERO;}
if(n===1){return this;}
if(cache[n]){return cache[n];}
if(this._d.length===1){var digit=this._d[0]*n;if(digit>9){return new BigInteger([(digit%10)|0,(digit/10)|0],1);}
cache[n]=BigInteger.small[digit];return cache[n];}
if(n===2){cache[n]=this.add(this);return cache[n];}
if(this.isUnit()){cache[n]=BigInteger.small[n];return cache[n];}
var a=this._d;var al=a.length;var pl=al+1;var partial=new Array(pl);for(var i=0;i<pl;i++){partial[i]=0;}
var carry=0;for(var j=0;j<al;j++){var digit=n*a[j]+carry;carry=(digit/10)|0;partial[j]=(digit%10)|0;}
if(carry){var digit=carry;carry=(digit/10)|0;partial[j]=digit%10;}
cache[n]=new BigInteger(partial,1);return cache[n];};BigInteger.prototype.square=function(){if(this._s===0){return BigInteger.ZERO;}
if(this.isUnit()){return BigInteger.ONE;}
var digits=this._d;var length=digits.length;var imult1=new Array(length+length+1);var product,carry,k;for(var i=0;i<length;i++){k=i*2;product=digits[i]*digits[i];carry=(product/10)|0;imult1[k]=product%10;imult1[k+1]=carry;}
for(var i=0;i<length;i++){carry=0;k=i*2+1;for(var j=i+1;j<length;j++,k++){product=digits[j]*digits[i]*2+imult1[k]+carry;carry=(product/10)|0;imult1[k]=product%10;}
k=length+i;var digit=carry+imult1[k];carry=(digit/10)|0;imult1[k]=digit%10;imult1[k+1]+=carry;}
return new BigInteger(imult1,1);};BigInteger.prototype.divide=function(n){return this.divRem(n)[0];};BigInteger.prototype.remainder=function(n){return this.divRem(n)[1];};BigInteger.prototype.divRem=function(n){n=BigInteger(n);if(n._s===0){throw new Error("Divide by zero");}
if(this._s===0){return[BigInteger.ZERO,BigInteger.ZERO];}
if(n._d.length===1){return this.divRemSmall(n._s*n._d[0]);}
switch(this.compareAbs(n)){case 0:return[this._s===n._s?BigInteger.ONE:BigInteger.M_ONE,BigInteger.ZERO];case-1:return[BigInteger.ZERO,this];}
var sign=this._s*n._s;var a=n.abs();var cache=new Array(10);var b_digits=this._d.slice();var digits=n._d.length;var max=b_digits.length;var quot=[];var part=new BigInteger([],1);part._s=1;while(b_digits.length){part._d.unshift(b_digits.pop());part=new BigInteger(part._d,1);if(part.compareAbs(n)<0){quot.push(0);continue;}
if(part._s===0){var guess=0;}
else{var guess=9;}
do{var check=a.multiplySingleDigit(guess,cache);if(check.compareAbs(part)<=0){break;}
guess--;}while(guess);quot.push(guess);if(!guess){continue;}
var diff=part.subtract(check);part._d=diff._d.slice();}
return[new BigInteger(quot.reverse(),sign),new BigInteger(part._d,this._s)];};BigInteger.prototype.divRemSmall=function(n){n=+n;if(n===0){throw new Error("Divide by zero");}
var n_s=n<0?-1:1;var sign=this._s*n_s;n=Math.abs(n);if(n<1||n>9){throw new Error("Argument out of range");}
if(this._s===0){return[BigInteger.ZERO,BigInteger.ZERO];}
if(n===1||n===-1){return[(sign===1)?this.abs():new BigInteger(this._d,sign),BigInteger.ZERO];}
if(this._d.length===1){var q=BigInteger.small[(this._d[0]/n)|0];var r=BigInteger.small[(this._d[0]%n)|0];if(sign<0){q=q.negate();}
if(this._s<0){r=r.negate();}
return[q,r];}
var digits=this._d.slice();var quot=new Array(digits.length);var part=0;var diff=0;var i=0;while(digits.length){part=part*10+digits[digits.length-1];if(part<n){quot[i++]=0;digits.pop();diff=10*diff+part;continue;}
if(part===0){var guess=0;}
else{var guess=(part/n)|0;}
var check=n*guess;diff=part-check;quot[i++]=guess;if(!guess){digits.pop();continue;}
digits.pop();part=diff;}
var r=BigInteger.small[diff];if(this._s<0){r=r.negate();}
return[new BigInteger(quot.reverse(),sign),r];};BigInteger.prototype.isOdd=function(){var digits=this._d;return!(this._s===0||digits.length===0||(digits[0]%2)===0);};BigInteger.prototype.sign=function(){return this._s;};BigInteger.prototype.isPositive=function(){return this._s>0;};BigInteger.prototype.isNegative=function(){return this._s<0;};BigInteger.prototype.modPow=function(exponent,modulus){var result=BigInteger.ONE;var base=this;while(exponent.isPositive()){if(exponent.isOdd()){result=result.multiply(base).remainder(modulus);}
exponent=exponent.divide(BigInteger.small[2]);if(exponent.isPositive()){base=base.square().remainder(modulus);}}
return result;};BigInteger.prototype.valueOf=function(){return parseInt(this.toString(),10);};BigInteger.MAX_EXP=BigInteger(0x7FFFFFFF);function MD5Hash(guid){function shiftLeft(value,shiftBits){return(value<<shiftBits)|(value>>>(32-shiftBits));}
function addUnsigned(lX,lY){var lX4,lY4,lX8,lY8,lResult;lX8=(lX&0x80000000);lY8=(lY&0x80000000);lX4=(lX&0x40000000);lY4=(lY&0x40000000);lResult=(lX&0x3FFFFFFF)+(lY&0x3FFFFFFF);if(lX4&lY4){return(lResult^0x80000000^lX8^lY8);}
if(lX4|lY4){if(lResult&0x40000000){return(lResult^0xC0000000^lX8^lY8);}else{return(lResult^0x40000000^lX8^lY8);}}else{return(lResult^lX8^lY8);}}
function F(x,y,z){return(x&y)|((~x)&z);}
function G(x,y,z){return(x&z)|(y&(~z));}
function H(x,y,z){return(x^y^z);}
function I(x,y,z){return(y^(x|(~z)));}
function FF(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(F(b,c,d),x),ac));return addUnsigned(shiftLeft(a,s),b);};function GG(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(G(b,c,d),x),ac));return addUnsigned(shiftLeft(a,s),b);};function HH(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(H(b,c,d),x),ac));return addUnsigned(shiftLeft(a,s),b);};function II(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(I(b,c,d),x),ac));return addUnsigned(shiftLeft(a,s),b);};function ConvertToWordArray(string){var lWordCount;var lMessageLength=string.length;var lNumberOfWords_temp1=lMessageLength+8;var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1%64))/64;var lNumberOfWords=(lNumberOfWords_temp2+1)*16;var lWordArray=Array(lNumberOfWords-1);var lBytePosition=0;var lByteCount=0;while(lByteCount<lMessageLength){lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=(lWordArray[lWordCount]|(string.charCodeAt(lByteCount)<<lBytePosition));lByteCount++;}
lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=lWordArray[lWordCount]|(0x80<<lBytePosition);lWordArray[lNumberOfWords-2]=lMessageLength<<3;lWordArray[lNumberOfWords-1]=lMessageLength>>>29;return lWordArray;};function WordToHex(lValue){var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;for(lCount=0;lCount<=3;lCount++){lByte=(lValue>>>(lCount*8))&255;WordToHexValue_temp="0"+lByte.toString(16);WordToHexValue=WordToHexValue+WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);}
return WordToHexValue;};function Utf8Encode(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;};var x=Array();var k,AA,BB,CC,DD,a,b,c,d;var S11=7,S12=12,S13=17,S14=22;var S21=5,S22=9,S23=14,S24=20;var S31=4,S32=11,S33=16,S34=23;var S41=6,S42=10,S43=15,S44=21;string=Utf8Encode(guid);x=ConvertToWordArray(guid);a=0x67452301;b=0xEFCDAB89;c=0x98BADCFE;d=0x10325476;for(k=0;k<x.length;k+=16){AA=a;BB=b;CC=c;DD=d;a=FF(a,b,c,d,x[k+0],S11,0xD76AA478);d=FF(d,a,b,c,x[k+1],S12,0xE8C7B756);c=FF(c,d,a,b,x[k+2],S13,0x242070DB);b=FF(b,c,d,a,x[k+3],S14,0xC1BDCEEE);a=FF(a,b,c,d,x[k+4],S11,0xF57C0FAF);d=FF(d,a,b,c,x[k+5],S12,0x4787C62A);c=FF(c,d,a,b,x[k+6],S13,0xA8304613);b=FF(b,c,d,a,x[k+7],S14,0xFD469501);a=FF(a,b,c,d,x[k+8],S11,0x698098D8);d=FF(d,a,b,c,x[k+9],S12,0x8B44F7AF);c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);a=FF(a,b,c,d,x[k+12],S11,0x6B901122);d=FF(d,a,b,c,x[k+13],S12,0xFD987193);c=FF(c,d,a,b,x[k+14],S13,0xA679438E);b=FF(b,c,d,a,x[k+15],S14,0x49B40821);a=GG(a,b,c,d,x[k+1],S21,0xF61E2562);d=GG(d,a,b,c,x[k+6],S22,0xC040B340);c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);b=GG(b,c,d,a,x[k+0],S24,0xE9B6C7AA);a=GG(a,b,c,d,x[k+5],S21,0xD62F105D);d=GG(d,a,b,c,x[k+10],S22,0x2441453);c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);b=GG(b,c,d,a,x[k+4],S24,0xE7D3FBC8);a=GG(a,b,c,d,x[k+9],S21,0x21E1CDE6);d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);c=GG(c,d,a,b,x[k+3],S23,0xF4D50D87);b=GG(b,c,d,a,x[k+8],S24,0x455A14ED);a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);d=GG(d,a,b,c,x[k+2],S22,0xFCEFA3F8);c=GG(c,d,a,b,x[k+7],S23,0x676F02D9);b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);a=HH(a,b,c,d,x[k+5],S31,0xFFFA3942);d=HH(d,a,b,c,x[k+8],S32,0x8771F681);c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);a=HH(a,b,c,d,x[k+1],S31,0xA4BEEA44);d=HH(d,a,b,c,x[k+4],S32,0x4BDECFA9);c=HH(c,d,a,b,x[k+7],S33,0xF6BB4B60);b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);d=HH(d,a,b,c,x[k+0],S32,0xEAA127FA);c=HH(c,d,a,b,x[k+3],S33,0xD4EF3085);b=HH(b,c,d,a,x[k+6],S34,0x4881D05);a=HH(a,b,c,d,x[k+9],S31,0xD9D4D039);d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);b=HH(b,c,d,a,x[k+2],S34,0xC4AC5665);a=II(a,b,c,d,x[k+0],S41,0xF4292244);d=II(d,a,b,c,x[k+7],S42,0x432AFF97);c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);b=II(b,c,d,a,x[k+5],S44,0xFC93A039);a=II(a,b,c,d,x[k+12],S41,0x655B59C3);d=II(d,a,b,c,x[k+3],S42,0x8F0CCC92);c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);b=II(b,c,d,a,x[k+1],S44,0x85845DD1);a=II(a,b,c,d,x[k+8],S41,0x6FA87E4F);d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);c=II(c,d,a,b,x[k+6],S43,0xA3014314);b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);a=II(a,b,c,d,x[k+4],S41,0xF7537E82);d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);c=II(c,d,a,b,x[k+2],S43,0x2AD7D2BB);b=II(b,c,d,a,x[k+9],S44,0xEB86D391);a=addUnsigned(a,AA);b=addUnsigned(b,BB);c=addUnsigned(c,CC);d=addUnsigned(d,DD);}
var temp=WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);this.md5=temp.toLowerCase();this.get16Bits=function(){var str="";for(var i=0;i<8;i++){var ind=14-(i*2);str+=this.md5.substr(ind,2);}
return str;}}
var _PlsrCookieUtil={readCookie:function(cname){var name=cname+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1);if(c.indexOf(name)==0)return c.substring(name.length,c.length);}
return"";},writeCookie:function(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+"; "+expires;}};var CGuidHash={_guidHash:undefined,getMod1000:function(){if(typeof(this._guidHash)=="undefined"){var ck=_plsUBTCookies.readCookie("npii","cguid");if(ck.length>0){var str=new MD5Hash(ck).get16Bits();var x=BigInteger.parse(str,16);this._guidHash=x.modPow(BigInteger.ONE,1000);}}
return this._guidHash;},isInSampling:function(sampling){if(sampling==100)return true;var h=CGuidHash.getMod1000();var sp=Math.floor(parseFloat(sampling*10));var b=(h<0||h>=sp)?false:true;return b;}};var JSON=JSON||{};JSON.stringify=JSON.stringify||function(obj){var t=typeof(obj);if(t!="object"||obj===null){if(t=="string")
obj='"'+obj+'"';return String(obj);}else{var n,v,json=[],arr=(obj&&obj.constructor==Array);for(n in obj){v=obj[n];t=typeof(v);if(t!="function"){if(t=="string")
v='"'+v+'"';else if(t=="object")
v=JSON.stringify(v);json.push((arr?"":'"'+n+'":')+String(v));}}
return(arr?"[":"{")+String(json)+(arr?"]":"}");}};var _plsUBTCookies;if(typeof _plsUBTCookiesObj!=='undefined'){_plsUBTCookies=new _plsUBTCookiesObj();}else if(typeof raptor!=='undefined'){_plsUBTCookies=raptor.require('ebay.cookies');}
function TrackingQueue(){var offset=0;this.getLength=function(queue){return(queue.length-offset);};this.isEmpty=function(queue){return(queue.length==0);};this.pop=function(_plsUBTtaq,q){var l=_plsUBTtaq.getLength(q);var i=0;if(_plsubtInp.isInSampling){for(i=0;i<l;i++){var it=q[i];if(it[0]=="trackImp"){trackImpression();}if(it[0]=="clkThr"||it[0]=="inPage"||it[0]=="exit"){var linkClick=new _plsLinkClickInp();if(isNaN(it[1])&&it[1].indexOf("www.")>-1){linkClick.lurl=it[1];}else{linkClick.lnk=it[1];}
linkClick.clkType=it[0];linkClick.eventOrder=i;linkClick.difTS=it[2];_plsUBTpld.push(linkClick);}if(it[0]=="MSOV"){var linkMO=new _plsLinkMOInp();if(isNaN(it[1])&&it[1].indexOf("www.")>-1){linkMO.lurl=it[1];}else{linkMO.lnk=it[1];}
linkMO.eventOrder=i;linkMO.difTS=it[2];_plsUBTpld.push(linkMO);}if(it[0]=="customEvts"){var customEvents=new _plsCustomEventsInp();customEvents.ef=it[1];customEvents.ea=it[2];customEvents.eventOrder=i;customEvents=mergeJSONObjectPlsUBT(customEvents,it[3]);customEvents.difTS=it[4];_plsUBTpld.push(customEvents);}}}
q.splice(0,l);};}
_plsUBTTQ.push=function(){var array=arguments[0];if(array[0]!='trackImp')
array.push(new Date().getTime());return Array.prototype.push.apply(this,arguments);};getplsUBTAllReq=function(){if(_plsubtInp.pageId==undefined||_plsubtInp.pageId==0){console.error("pageId is not available in _plsubtInp.");return false;}else{return true;}};var plsUBTAllReq=getplsUBTAllReq();trackImpression=function(){var _plsubtImp={"plsUBT":_plsubtInp.plsUBT,"ea":"VIEW","pge":_plsubtInp.pageId,"app":_plsubtInp.app,"scrv":_plsubtInp.resolut,"scrColDep":_plsubtInp.scrColDep,"tiZone":_plsubtInp.tiZone,"sampRate":_plsubtInp.samplingRate,"steSpd":_plsubtInp.steSpd};_plsubtImp=mergeJSONObjectPlsUBT(_plsubtImp,_plsubtInp.customAttribute);if(!_plsubtInp.disableImp&&_plsubtInp.isInSampling&&plsUBTAllReq){var ppImpURL=_plsubtInp.URLTemplate+"pld="+encodeURIComponent("["+JSON.stringify(_plsubtImp)+"]");var img=new Image();img.src=ppImpURL;}};var _plsLinkClickInp=function(){return{"ea":"CLCK","lnk":"","pge":_plsubtInp.pageId,"clkType":"","plsUBT":1,"lurl":"","app":_plsubtInp.app,"eventOrder":0,"difTS":0};};var _plsUBTpld=[];var _plsLinkMOInp=function(){return{"ea":"HOVR","lnk":"","pge":_plsubtInp.pageId,"plsUBT":1,"lurl":"","app":_plsubtInp.app,"difTS":0,"eventOrder":0};};var _plsCustomEventsInp=function(){return{"ef":"","ea":"","pge":_plsubtInp.pageId,"plsUBT":1,"app":_plsubtInp.app,"callingEF":_plsubtInp.eventFamily,"difTS":0,"eventOrder":0};};_plsubtInp.samplingRate=_plsubtInp.samplingRate==null?5:_plsubtInp.samplingRate;_plsubtInp.env=_plsubtInp.env==null?"PROD":_plsubtInp.env;_plsubtInp.disableImp=_plsubtInp.disableImp==null?false:_plsubtInp.disableImp;if(_plsubtInp.eventFamily==null){_plsubtInp.eventFamily="DFLT";}
getPlsUBTBrowser=function(ua){var browser=tracking.pulsarjs.getPlsUBTBrowser2(ua);return browser.name;};_plsubtInp.browser=getPlsUBTBrowser();_plsubtInp.browser2=tracking.pulsarjs.getPlsUBTBrowser2();_plsubtInp.plsUBT=1;_plsubtInp.resolut=screen.width+'x'+screen.height;_plsubtInp.scrColDep=screen.colorDepth;_plsubtInp.tiZone=(new Date().getTimezoneOffset()/60).toString();isPlsUBTInSampling=function(){var isInSamp=false;if(_plsubtInp.samplingRate!=0){try{isInSamp=(CGuidHash.isInSampling(_plsubtInp.samplingRate))?true:false;}catch(err){isInSampg=true;}}
return isInSamp;};_plsubtInp.isInSampling=isPlsUBTInSampling();String.prototype.endsWith=function(suffix){return this.indexOf(suffix,this.length-suffix.length)!==-1;};mergeJSONObjectPlsUBT=function(destination,source){for(var property in source)
destination[property]=source[property];return destination;}
function PlsUBTURLTemplate(inp,hostname,protocol){var baseURLTemplate='';if(inp.serverUrl!=null){baseURLTemplate=inp.serverUrl;}else{var serverHost;var isQA=inp.env=="qa"||hostname.indexOf(".qa.")>-1;var isPreprod=inp.env=="preprod"||hostname.indexOf(".pp.")>-1;if(isQA||isPreprod){var envCode=null;if(isQA){serverHost='www.pulsar.stratus.qa.ebay.com';envCode='qa';}else if(isPreprod){serverHost='www.pulsproxy.pp.stratus.ebay.com';envCode='pp';}
var domainCodeList=["at","au","be","ca","ch","cn","cz","de","dk","es","fi","fr","gr","hk","hu","ie","in","it","my","nl","no","ph","pl","pt","ru","sg","th","uk"];for(var i=0;i<domainCodeList.length;i++){var domainCode=domainCodeList[i];if(hostname.indexOf("."+domainCode+".")>-1){if(isQA){serverHost="www."+domainCode+".pulsar.stratus."+envCode+".ebay.com";}else if(isPreprod){serverHost="www."+domainCode+".pulsproxy."+envCode+".stratus.ebay.com";}
break;}}}else{serverHost="pulsar.ebay.com";var ebayIntlDomains=["ebay.com.au","ebay.at","benl.ebay.be","befr.ebay.be","cafr.ebay.ca","ebay.ca","ebay.fr","ebay.de","ebay.com.cn","ebay.com.hk","ebay.in","ebay.ie","ebay.it","ebay.com.my","ebay.nl","ebay.ph","ebay.pl","ebay.com.sg","ebay.es","ebay.ch","ebay.co.th","ebay.co.uk","ebay.vn"];for(var i=0;i<ebayIntlDomains.length;i++){var domain=ebayIntlDomains[i];if(hostname.endsWith(domain)){serverHost="pulsar."+domain;break;}}}
if(_plsubtInp.https!=null&&_plsubtInp.https==true){baseURLTemplate="https://"+serverHost;}else{baseURLTemplate=protocol+"//"+serverHost;}}
baseURLTemplate=baseURLTemplate+"/plsr/mpe/0/"+inp.eventFamily+"/9?";return baseURLTemplate;};_plsubtInp.URLTemplate=PlsUBTURLTemplate(_plsubtInp,window.location.hostname,window.location.protocol);steSpdPlsUBT=function(){var steSpeed="";if((_plsubtInp.pageLoadTime!=null)&&(_plsubtInp.pageLoadTime!="")&&(_plsubtInp.pageLoadTime>0)){steSpeed=((new Date().getTime())-_plsubtInp.pageLoadTime);}else if(window.performance.timing!=null){steSpeed=window.performance.timing.connectEnd-window.performance.timing.connectStart;}
return steSpeed;};_plsubtInp.steSpd=steSpdPlsUBT();window._plsUBTTQ.push(['trackImp']);;_plsUBTtaq=new TrackingQueue();_plsUBTtaq.pop(_plsUBTtaq,window._plsUBTTQ);var _plsUBTPPURL="";function sendBeacon(url){if(navigator.sendBeacon){navigator.sendBeacon(url,"");return true;}else{return false;}}
function firePulsarProxyURL(unload){_plsUBTPPURL=_plsubtInp.URLTemplate+"pld=";var paylaod="[";plsUBTDebug("Initial event queue size: "+_plsUBTpld.length);for(var i=0;i<_plsUBTpld.length;i++){_plsUBTpld[i].difTS=new Date().getTime()-_plsUBTpld[i].difTS;paylaod=paylaod+JSON.stringify(_plsUBTpld[i]);if(i!=_plsUBTpld.length-1){paylaod=paylaod+", ";}};paylaod=paylaod+"]";_plsUBTPPURL=_plsUBTPPURL+encodeURIComponent(paylaod);plsUBTDebug("Call URL: "+_plsUBTPPURL);if(_plsubtInp.browser2.name!='safari'&&navigator.sendBeacon){sendBeacon(_plsUBTPPURL);}else{plsUBTAjaxCall(unload);}};firePulsarProxyURLAsImg=function(){for(var i=0;i<_plsUBTpld.length;i++){_plsUBTpld[i].difTS=new Date().getTime()-_plsUBTpld[i].difTS;var ppImpURL=_plsubtInp.URLTemplate+"pld="+encodeURIComponent("["+JSON.stringify(_plsUBTpld[i])+"]");var img=new Image();img.src=ppImpURL;}}
function postPlsUBTCALL(unload){if(_plsubtInp.isInSampling&&plsUBTAllReq){_plsUBTtaq.pop(_plsUBTtaq,window._plsUBTTQ);if(_plsUBTpld.length!=0){firePulsarProxyURL(unload);plsUBTDebug("Setting event queue size to 0.");_plsUBTpld.length=0;plsUBTDebug("Final event queue size: "+_plsUBTpld.length);}}};function sendWait(inp){if(inp==undefined||inp==null||inp.sendWait==undefined||inp.sendWait==null||isNaN(inp.sendWait)){return 60000;}else if(inp.sendWait<10000){return 10000;}else{return inp.sendWait;}}
window.addEventListener(tracking.pulsarjs.getUnloadEvent(_plsubtInp.browser2),function doPost(){_unloadAppCallbackHandler.invokeCallbacks();postPlsUBTCALL(true);});setInterval(function(){postPlsUBTCALL(false)},sendWait(_plsubtInp));function plsUBTAjaxCall(unload){var ajax=null;if(window.XDomainRequest){ajax=new window.XDomainRequest();}
if(ajax==null){if(window.XMLHttpRequest){ajax=new window.XMLHttpRequest();}else{ajax=new ActiveXObject("Microsoft.XMLHTTP");}}
var url=_plsUBTPPURL+"&cache="+Math.random();if('withCredentials'in ajax){ajax.withCredentials=true;}else{var i=new Image();i.src=url;return;}
var async;if(unload){async=false;}else{async=true;}
ajax.open("POST",url,async);if(_plsubtInp.browser2.name=='chrome'||_plsubtInp.browser2.name=='safari'){ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");}
ajax.send("");}
function plsUBTDebug(message){if(_plsubtInp.debug){console.log(message);}}
function AppCallbackHandler(){this.callbacks=[];this.registerCallback=function(callback){this.callbacks.push(callback);}
this.clearCallbacks=function(){this.callbacks=[];}
this.invokeCallbacks=function(){this.callbacks.forEach(function(callback){try{callback();}catch(e){}});this.clearCallbacks();}}
var _unloadAppCallbackHandler=new AppCallbackHandler();_plsubtInp.registerUnloadCallback=function(callback){_unloadAppCallbackHandler.registerCallback(callback);}
// b=18898068 -->