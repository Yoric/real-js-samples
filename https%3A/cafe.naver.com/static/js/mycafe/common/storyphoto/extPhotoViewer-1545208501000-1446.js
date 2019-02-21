//////////////////////////////////////////////////////////////////////////////// 
// 
// NHN CORPORATION
// Copyright 2002-2009 NHN Coporation 
// All Rights Reserved. 
// 
// 이 문서는 NHN㈜의 지적 자산이므로 NHN(주)의 승인 없이 이 문서를 다른 용도로 임의 
// 변경하여 사용할 수 없습니다. 
// 
// 파일명 : extPhotoViewer.js
// 
// 작성일 : 2009.07.08 
// 
// 최종 수정일: 2009.07.08
// 
////////////////////////////////////////////////////////////////////////////////

document.domain = 'naver.com';

var photoviewerJsonStr = "test";
var win = null;
var domain = apiDomain;
/**
 * 포토뷰어를 위한 JSON문자열 설정 함수
 */
function setForPhotoViewerJsonString(str) {
	photoviewerJsonStr = str;
}

/**
 * 포토 뷰어 팝업으로 띄우기 - 외부
 */
function extOpenPhotoViewer() {
	var width = screen.availWidth - 10;
	var height = screen.availHeight - 20;
	var myform = document.photoViewerFrm;
	myform.photoviewerJsonStr.value = photoviewerJsonStr;
	win = window.open("", "photoviewer", 'width=' + width + ',height=' + height
			+ ',top=0,left=0,scrollbars=no,resizable=no,location=no');
	myform.method = "POST";
	myform.target = "photoviewer";
	myform.action = domain + "/PhotoViewer.nhn";
	win.focus();
	myform.submit();

}

var getApiDomain = function() {
	return apiDomain;
}

/**
 * 포토뷰어 호출
 */
function executeViewer(str) {
	setForPhotoViewerJsonString(str);
	extOpenPhotoViewer();
}