(function(e){var t=typeof module=="undefined"?e.baidu=e.baidu||{}:module.exports;t.template=function(t,r){var i=function(){if(!e.document)return n._compile(t);var r=document.getElementById(t);if(r){if(n.cache[t])return n.cache[t];var i=/^(textarea|input)$/i.test(r.nodeName)?r.value:r.innerHTML;return n._compile(i)}return n._compile(t)}(),s=n._isObject(r)?i(r):i;return i=null,s};var n=t.template;n.versions=n.versions||[],n.versions.push("1.0.6"),n.cache={},n.LEFT_DELIMITER=n.LEFT_DELIMITER||"<%",n.RIGHT_DELIMITER=n.RIGHT_DELIMITER||"%>",n.ESCAPE=!0,n._encodeHTML=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\\/g,"&#92;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")},n._encodeReg=function(e){return String(e).replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1")},n._encodeEventHTML=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/\\\\/g,"\\").replace(/\\\//g,"/").replace(/\\n/g,"\n").replace(/\\r/g,"\r")},n._compile=function(e){var t="var _template_fun_array=[];\nvar fn=(function(__data__){\nvar _template_varName='';\nfor(name in __data__){\n_template_varName+=('var '+name+'=__data__[\"'+name+'\"];');\n};\neval(_template_varName);\n_template_fun_array.push('"+n._analysisStr(e)+"');\n_template_varName=null;\n})(_template_object);\nfn = null;\nreturn _template_fun_array.join('');\n";return new Function("_template_object",t)},n._isObject=function(e){return"function"==typeof e||!!e&&"object"==typeof e},n._analysisStr=function(e){var t=n.LEFT_DELIMITER,r=n.RIGHT_DELIMITER,i=n._encodeReg(t),s=n._encodeReg(r);return e=String(e).replace(new RegExp("("+i+"[^"+s+"]*)//.*\n","g"),"$1").replace(new RegExp("<!--.*?-->","g"),"").replace(new RegExp(i+"\\*.*?\\*"+s,"g"),"").replace(new RegExp("[\\r\\t\\n]","g"),"").replace(new RegExp(i+"(?:(?!"+s+")[\\s\\S])*"+s+"|((?:(?!"+i+")[\\s\\S])+)","g"),function(e,t){var n="";if(t){n=t.replace(/\\/g,"&#92;").replace(/'/g,"&#39;");while(/<[^<]*?&#39;[^<]*?>/g.test(n))n=n.replace(/(<[^<]*?)&#39;([^<]*?>)/g,"$1\r$2")}else n=e;return n}),e=e.replace(new RegExp("("+i+"[\\s]*?var[\\s]*?.*?[\\s]*?[^;])[\\s]*?"+s,"g"),"$1;"+r).replace(new RegExp("("+i+":?[hvu]?[\\s]*?=[\\s]*?[^;|"+s+"]*?);[\\s]*?"+s,"g"),"$1"+r).split(t).join("	"),n.ESCAPE?e=e.replace(new RegExp("\\t=(.*?)"+s,"g"),"',typeof($1) === 'undefined'?'':baidu.template._encodeHTML($1),'"):e=e.replace(new RegExp("\\t=(.*?)"+s,"g"),"',typeof($1) === 'undefined'?'':$1,'"),e=e.replace(new RegExp("\\t:h=(.*?)"+s,"g"),"',typeof($1) === 'undefined'?'':baidu.template._encodeHTML($1),'").replace(new RegExp("\\t(?::=|-)(.*?)"+s,"g"),"',typeof($1)==='undefined'?'':$1,'").replace(new RegExp("\\t:u=(.*?)"+s,"g"),"',typeof($1)==='undefined'?'':encodeURIComponent($1),'").replace(new RegExp("\\t:v=(.*?)"+s,"g"),"',typeof($1)==='undefined'?'':baidu.template._encodeEventHTML($1),'").split("	").join("');").split(r).join("_template_fun_array.push('").split("\r").join("\\'"),e}})(window)