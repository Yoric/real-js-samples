/**
 * Read domain and set it again after get rid of sub domain.
 * ex) 	blog.naver.com => naver.com
 * 		blogdev10.blog.me => blog.me
 */
var separate = document.domain.split('.');
if(separate.length > 2){
	var topLevelDomain = separate.pop();
	var secondLevelDomain = separate.pop();
	document.domain = secondLevelDomain + "." + topLevelDomain;
}


