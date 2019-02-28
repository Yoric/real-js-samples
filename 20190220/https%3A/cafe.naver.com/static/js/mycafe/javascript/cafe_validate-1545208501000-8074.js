// Common
function _getField(oField)
{
	if (typeof(oField.type) == 'undefined' && typeof(oField.length) != 'undefined')
		return oField[0];
	else
		return oField;
}

function _getFieldType(oField)
{
	return _getField(oField).type;
}

function _alertMessage(strMsg)
{
	if (typeof(strMsg) != 'undefined' && strMsg != "")
		alert(strMsg);
}

function _focusField(oField, blnFocus)
{
	if (typeof(blnFocus) != 'undefined' && blnFocus != null && blnFocus == true)
		_getField(oField).focus();
}

// FORM FIELD CHECK 1. NULL CHECK
function _hasValue(oField)
{
	if (oField.value.replace(/(^\s*)|(\s*$)/g, "") == "")
		return false;
	else
		return true;
}

function _hasEditerValue(oField)
{
	if (oField.value.replace(/&nbsp;/g, " ").replace(/(^\s*)|(\s*$)/g, "") == "")
		return false;
	else
		return true;
}

function _isChecked(oField)
{	
	var checked = false;

	if (typeof(oField.length) != 'undefined')
	{
		for (var i=0; i<oField.length; i++)
		{
			if (oField[i].checked)
				return true;
		}
	}
	else
	{
		return oField.checked;
	}
}

function _isNotSelected(oField)
{
	if (oField.selectedIndex == -1)
	{
		return false;
	}
	else
	{
		if (oField.value == -1)
			return false;
		else
			return true;
	}
}

function checkNull(oField, strMsg, blnFocus)
{
	var isNotNull = false;
	
	switch (_getField(oField).type)
	{
		case "text" :
		case "password" :
		case "file" :
			isNotNull = _hasValue(oField);
			break;
		case "textarea" :
			isNotNull = _hasEditerValue(oField);
			break;
		case "checkbox" :
		case "radio" :		
			isNotNull = _isChecked(oField);
			break;		
		case "select-one" :
		case "select-multiple" :
			isNotNull = _isNotSelected(oField);
			break;
	}

	if (!isNotNull)
	{
		_alertMessage(strMsg);
		_focusField(oField, blnFocus);
	}
	
	return isNotNull;
}

// FORM FIELD CHECK 2. LENGTH CHECK
function checkLength(oField, min, max, strMsg, blnFocus)
{
	var isValid = false;
	var lengthValue = oField.value.length;
	
	if (min < 0)
	{
		if (lengthValue < max)
			isValid = true;
	}
	if (max < 0)
	{
		if (lengthValue > min)
			isValid = true;
	}
	if (min >= 0 && max >= 0)
	{
		if (lengthValue >= min && lengthValue <= max)
			isValid = true;
	}
		
	if (!isValid)
	{
		_alertMessage(strMsg);
		_focusField(oField, blnFocus);
	}
	
	return isValid;
}

// FORM FIELD CHECK 3. LENGTH CHECK (INCLUDE KOREAN)
function checkLengthKor(oField, min, max, strMsg, blnFocus)
{
	var isValid = false;
	var lengthValue = oField.value.bytes();
	
	if (min < 0)
	{
		if (lengthValue < max)
			isValid = true;
	}
	if (max < 0)
	{
		if (lengthValue > min)
			isValid = true;
	}
	if (min >= 0 && max >= 0)
	{
		if (lengthValue >= min && lengthValue <= max)
			isValid = true;
	}
		
	if (!isValid)
	{
		_alertMessage(strMsg);
		_focusField(oField, blnFocus);
	}
	
	return isValid;
}

//substring sensitive at Korean 
function substringKor(str,lengths)
{
  var len = 0;
  var newStr = '';
  
  for (var i=0;i<str.length; i++) {
    var n = str.charCodeAt(i);
    var nv = str.charAt(i);
    if ((n>= 0)&&(n<256)) {
      len ++;
    } else {
      len += 2;
	}

	if (len>lengths)
		break;
	else
		newStr = newStr + nv;
  }
  
  return newStr;
}

// FORM FIELD CHECK 4. WRONG CHAR CHECK (특정문자가 포함되어 있으면 false)
function _hasWrongWord(str, wrongStr)
{
	if(str.indexOf(wrongStr) >= 0) return true;
	else return false;
}

function checkWrongWord(oField, wrongStr, strMsg) // for text and textbox
{
	var isWrong = false;
	var fieldType = null;

	fieldType = _getFieldType(oField);

	switch (fieldType)
	{
		case "text" :
		case "textarea" :
			isWrong = _hasWrongWord(oField.value, wrongStr);
			break;
	}

	if (isWrong)
	{
		_alertMessage(strMsg);

		array = _getField(oField).value.split(wrongStr);
		result = '';
		for (i=0; i<array.length; i++)
		{
			result += array[i];
		}
		_getField(oField).value = result;
		_focusField(oField, true);
	}

	return !isWrong;
}

// FORM FIELD CHECK 5. ALPHA NUMERIC CHARACTER CHECK (영문 소문자와 숫자로만 되어 있으면 true)
function _isLowAlphaNumCheck(value)
{
	if (value.match(/^[a-z0-9]*$/g))
		return true;
	else
		return false;
}

function checkAlphaNum(oField, strMsg, blnFocus) // for text and textbox
{
	var isAlphaNum = false;

	switch (_getField(oField).type)
	{
		case "text" :
		case "textarea" :
			isAlphaNum = _isLowAlphaNumCheck(oField.value);
			break;
	}

	if (!isAlphaNum)
	{
		_alertMessage(strMsg);
		_focusField(oField, blnFocus);
	}

	return isAlphaNum;
}

// FORM FIELD CHECK 6. SPECIAL CHARACTER CHECK (특수문자 하나도 없어야 true)
function _hasNotSpecialChar(id_text)
{
	if (!id_text.match(/[`@#$%&\\|<>;\"]/g))
		return true;
	else
		return false;
}

function checkNotSpecialChar(oField, strMsg, blnFocus) // for text and textbox
{
	var notSpecialChar = false;
	var fieldType = null;
	var mainField;

	fieldType = _getField(oField).type;

	switch (fieldType)
	{
		case "text" :
		case "textarea" :
			notSpecialChar = _hasNotSpecialChar(oField.value);
			break;
	}

	if (!notSpecialChar)
	{
		_alertMessage(strMsg);
		_focusField(oField, blnFocus);
	}

	return notSpecialChar;
}

// Utils

// 알파벳,수자 체크
function isAlphaNumCheck(value)
{
	if (value.match(/^[a-zA-Z0-9]*$/g))
		return true;
	else
		return false;
}

// 숫자 체크
function isNumber(value)
{
	if (value.match(/^[0-9]*$/g))
		return true;
	else
		return false;
}

// 한글로만 되어있는지 체크 (한글외의 다른 글자가 있으면 true, 한글로만 되어 있어야 false)
function isNotOnlyKorean(id_text)
{
	for ( var i=0; i < id_text.length; i++ )
	{
		if ( id_text.charCodeAt(i) < 0xAC00 || id_text.charCodeAt(i) > 0xD7A3)
		{
			if (( id_text.charCodeAt(i) < 12593 || id_text.charCodeAt(i) > 12643 ) && ( id_text.charCodeAt(i) != 32))
			{
				return true;
			}
		}
	}

	return false;
}

// keydown시에 영어와 숫자만 먹는 것.
function keydownEngNum()
{
	if (!(event.keyCode>=48&&event.keyCode<=57)&&!(event.keyCode>=65&&event.keyCode<=90)&&event.keyCode!=9&&event.keyCode!=8&&event.keyCode!=46&&event.keyCode!=37&&event.keyCode!=39&&event.keyCode!=45)
	{
		event.keyCode = 0;
		event.cancelBubble = true;
		event.returnValue = false;
	}
}

function isImageFile(filename)
{
    if (filename.match(/(.jpg|.jpeg|.gif|.png)$/i))
        return true;
    else
        return false;
}

function isValidFilename(filename)
{
    if (!filename.match(/[\\\:\*\?\|<>]/))
        return true;
    else
        return false;
}

function getCheckedValue(oField) // for radio button
{
	var value = null;

	for (i=0; i < oField.length; i++) {
		if(oField[i].checked) {
			value = oField[i].value;
			break;
		}
	}

	return value;
}

function radioCheck(oField, paramValue) // for radio button
{
	for (var i=0; i<oField.length; i++) {
		if (oField[i].value == paramValue) {
			oField[i].checked = true;
			break;
		}
	}
}

function getSelectedValue(oField) // for select button
{
	var value = null;

	selectedIndex = oField.selectedIndex;

	value = oField[selectedIndex].value;

	return value;
}

function selectSelect(oField, paramValue) // for select button
{
	for (var i=0; i<oField.length; i++) {
		if (oField[i].value == paramValue) {
			oField[i].selected = true;
			break;
		}
	}
}

function strLenCk(str)
{
  var len = 0;
  for (var i=0;i<str.length; i++) {
    var n = str.charCodeAt(i);
    if ((n>= 0)&&(n<256)) {
      len ++;
    } else {
      len += 2;
	}
  }
  return len;
}

function strLenCnt(str,lengths)	//문자열의 특정 길이를 반환한다.
{
  var len = 0;
  var newStr = '';

  for (var i=0;i<str.length; i++) {
    var n = str.charCodeAt(i);
    var nv = str.charAt(i);
    if ((n>= 0)&&(n<256)) {
      len ++;
    } else {
      len += 2;
	}

	if (len>lengths)
		break;
	else
		newStr = newStr + nv;
  }

  return newStr;
}

function strCutPrint(str,byteLength) //몇글자 이상 되면 ..을 붙여준다.
{
	var strOld = str;
	str = strLenCnt(str,byteLength);
	if (str!=strOld) {
		str = str+'..';
	}
	return str;
}

function strCutPrintT(obj,byteLength) //몇글자 이상 되면 ..을 붙여준다. textarea로부터 불러오기
{	 
	var str = '';
	str = obj.value;
	var strOld = str;
	str = strLenCnt(str,byteLength);
	if (str!=strOld) {
		str = str+'..';
	}
	return str;
}

