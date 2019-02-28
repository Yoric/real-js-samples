//////////////////////////////////////////////////////////////////////////////// 
// 
// NHN CORPORATION
// Copyright 2002-2009 NHN Coporation 
// All Rights Reserved. 
// 
// �� ������ NHN���� ���� �ڻ��̹Ƿ� NHN(��)�� ���� ���� �� ������ �ٸ� �뵵�� ���� 
// �����Ͽ� ����� �� �����ϴ�. 
// 
// ���ϸ� : extPhotoViewer.js
// 
// �ۼ��� : 2009.07.08 
// 
// ���� ������: 2009.07.08
// 
////////////////////////////////////////////////////////////////////////////////

document.domain = 'naver.com';

var photoviewerJsonStr = "test";
var win = null;
var domain = apiDomain;
/**
 * ����� ���� JSON���ڿ� ���� �Լ�
 */
function setForPhotoViewerJsonString(str) {
	photoviewerJsonStr = str;
}

/**
 * ���� ��� �˾����� ���� - �ܺ�
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
 * ������ ȣ��
 */
function executeViewer(str) {
	setForPhotoViewerJsonString(str);
	extOpenPhotoViewer();
}