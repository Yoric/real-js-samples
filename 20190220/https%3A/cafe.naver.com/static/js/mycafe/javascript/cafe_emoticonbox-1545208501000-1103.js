function setEmoticonNum(emot) {
    document.getElementById("emotion").value = emot;
}

function setEmoticon(emot) {
    document.getElementById("myemoticon").width = 16;
    document.getElementById("myemoticon").height = 17;
    document.getElementById("myemoticon").src = "https://cafe.pstatic.net/img/emot/emo" + emot + ".gif";
    document.getElementById("emotion").value = emot;

    oCL.hide("emoticon");
}

function setPersonacon(emot, emoturl) {
	document.getElementById("myemoticon").width = 19;
	document.getElementById("myemoticon").height = 19;
	document.getElementById("myemoticon").src = emoturl;
	document.getElementById("emotion").value = emot;

    // 퍼스나콘 선택시 퍼스나콘 이미지를 반영 변경해줘야 할 이미지가 있다면 변경해준다.
	try {
		document.getElementById("myemoticonform").src = emoturl;
	} catch(e) {
		
	}
	
	oCL.hide("emoticon");
}

function disablePersonacon() {
    $('defaultPersonacon').value = $("emotion").value;
    $("emotion").value = 0;
}

function enablePersonacon() {
    $("emotion").value = $('defaultPersonacon').value;
}