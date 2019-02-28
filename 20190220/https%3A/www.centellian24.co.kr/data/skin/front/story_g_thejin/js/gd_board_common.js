var boardData = {
    writeUrl: '../board/write.php?' + getUrlVars() + '&bdId={0}',
    viewUrl: '../board/view.php?' + getUrlVars() + '&bdId={0}&sno={1}',
    modifyUrl: '../board/write.php?' + getUrlVars() + '&bdId={0}&mode=modify&sno={1}',
    listUrl: '../board/list.php?' + getUrlVars() + '&bdId={0}',
    replyUrl: '../board/write.php?' + getUrlVars() + '&mode=reply&bdId={0}&sno={1}',
}

function getUrlVars(paramKey) {
    if (typeof paramKey == 'undefined') {
        paramKey = '';
    }
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    if(window.location.href.indexOf('?')<0) {
        return '';
    }
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        key = hash[0];
        val = hash[1];
        if (paramKey != '') {
            if (key == paramKey) {
                return val;
            }
        }

        if (key == 'sno' || key == 'mode' || key == 'bdId') {
            continue;
        }

        vars.push(hashes[i]);
    }

    if (paramKey != '') {
        return '';
    }

    return vars.join('&');
}

function btnWrite(bdId) {
    location.href = boardData.writeUrl.format(bdId);
}

function btnDelete(bdId, sno, auth) {
    switch (auth) {
        case 'n' :
            alert(__('권한이 없습니다.'));
            return;
            break;
        case 'y' :
            if (confirm(__('정말 삭제하시겠습니까?'))) {
                deleteAjaxProcess();
            }
            break;
        case 'c' :
            passwordLayer.show();
            passwordLayer.btn.unbind('click').bind('click', function () {
                deleteAjaxProcess();
            });
            break;
    }

    function deleteAjaxProcess() {
        $.ajax({
            method: "POST",
            url: "../board/board_ps.php",
            data: {mode: 'delete', sno: sno, bdId: bdId, writerPw: passwordLayer.value()},
            dataType: 'json'
        }).success(function (data) {
            if (data['result'] == 'ok') {
                alert(data['msg']);
                location.href = boardData.listUrl.format(bdId);
            }
            else if (data['result'] == 'confirmPassword') {
                passwordLayer.show();
            }
            else {
                alert(data['msg']);
                return;
            }
        }).error(function (e) {
            if(e.responseText)
                alert(e.responseText);
        });
    }

    return;
}

function btnView(bdId, sno, auth) {
    switch (auth) {
        case 'n' :
        case 'y' :
            location.href = boardData.viewUrl.format(bdId, sno);
            break;
        case 'c' :
            passwordListLayer.show();
            passwordListLayer.inputEl.bind('keydown', function () {
                if (event.keyCode == 13) {
                    passwordListLayer.btnEl.trigger('click');
                }
            });
            passwordListLayer.btnEl.unbind('click').bind('click', function () {
                if (passwordListLayer.inputEl.val() == '') {
                    alert(__('비밀번호를 입력해주세요.'));
                    return false;
                }

                var form= passwordListLayer.element.closest('form');
                form.attr('method', 'post');
                form.attr('action', boardData.viewUrl.format(bdId, sno));
                form.submit();
            });
            break;
    }
}

function btnReplyWrite(bdId, sno) {
    location.href = boardData.replyUrl.format(bdId, sno);
}

function btnList(bdId) {
    location.href = boardData.listUrl.format(bdId);
}

function recommend(bdId, sno) {
    $.get('../board/board_ps.php', {
        'mode': 'recommend',
        'bdId': bdId,
        'sno': sno
    }, function (data, status) {
        if (status == 'success') {
            alert(data['message']);
            $('#recommendCount').find('strong').html(data['recommendCount']);
        }
        else {
            alert('request fail. ajax status (' + status + ')');
        }
    }, 'json');
}
