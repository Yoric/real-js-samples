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

    // �۽����� ���ý� �۽����� �̹����� �ݿ� ��������� �� �̹����� �ִٸ� �������ش�.
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