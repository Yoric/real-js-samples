/**
 * Created by LeeNamJu on 2015-11-03.
 */

$(document).ready(function () {
    $('img.js-smart-img').each(function () {
        $(this).css('max-width', '100%');
    });

    var dom = function (bdId, sno) {
        var formWrite = $('.js-form-write');
        return {
            //  dataRow: $(".js-data-row[data-bdid=" + bdId + "][data-sno=" + sno + "]"),
            detail: $('.js-comment-area'),
            commentRow: function (memoSno) {
                return this.detail.find('.js-data-comment-row[data-memosno=' + memoSno + ']');
            },
            commentFormWrite: {
                element: formWrite,
                writerNm: formWrite.find('input[name=writerNm]'),
                password: formWrite.find('input[name=password]'),
                memo: formWrite.find('textarea[name=memo]'),
            },
            commentFormAction: function (memoSno) {
                return {
                    element: this.commentRow(memoSno).find('.js-action-form'),
                    writerNm: this.commentRow(memoSno).find('input[name=writerNm]'),
                    password: this.commentRow(memoSno).find('input[name=password]'),
                    memo: this.commentRow(memoSno).find('textarea[name=memo]'),
                    btn: this.commentRow(memoSno).find('.js-comment-btn-action'),
                    init: function () {
                        this.writerNm.val(null);
                        this.password.val(null);
                        this.memo.val(null);
                    },
                }
            }
        }
    }

    var getData = function (id, target) {
        id = id.toLowerCase();
        switch (id) {
            case 'bdid' :
            case 'sno' :
                return $(target).closest('.js-comment-area').data(id)
                break;
            case 'memosno' :
            case 'memoauth' :
                return $(target).closest('.js-data-comment-row').data(id);
        }
    }

    var isValidForm = function (elObj) {
        var writerNmEl = elObj.find('input[name=writerNm]');
        var passwordEl = elObj.find('input[name=password]');
        var memoEl = elObj.find('textarea[name=memo]');
        if (writerNmEl.length > 0) {
            if (writerNmEl.val() == '') {
                alert(__('이름을 입력해주세요.'));
                writerNmEl.focus();
                return false;
            }
        }

        if (passwordEl.length > 0) {
            if (passwordEl.val() == '') {
                alert(__('비밀번호를 입력해주세요.'));
                passwordEl.focus();
                return false;
            }
        }

        if (memoEl.length > 0) {
            if (memoEl.val() == '') {
                alert(__('댓글내용을 입력해주세요.'));
                memoEl.focus();
                return false;
            }
        }

        return true;
    }

    /**
     * 댓글작성
     */
    $('body').delegate('.js-comment-btn-write', 'click', function (e) {
        var bdId = getData('bdId', this);
        var sno = getData('sno', this);
        var domRoot = dom(bdId, sno);

        if ($('#info-collection-agree-write').length > 0) {
            if($('#info-collection-agree-write').is(':checked') == false) {
                alert(__('개인정보 수집항목에 동의해주세요.'));
                return;
            }
        }

        if (!isValidForm(domRoot.commentFormWrite.element)) {
            return false;
        }

        $.ajax({
            method: "POST",
            url: "../board/memo_ps.php",
            data: {
                mode: 'write',
                bdSno: sno,
                bdId: bdId,
                memo: domRoot.commentFormWrite.memo.val(),
                writerNm: domRoot.commentFormWrite.writerNm.val(),
                writerPw: domRoot.commentFormWrite.password.val()
            },
            dataType: 'json'
        }).success(function (data) {
            if (data['result'] == 'ok') {
                alert(data['msg']);
                location.reload();
            }
            else {
                alert(data['msg']);
                return;
            }
        }).error(function (e) {
            alert(e.responseText);
        });
    });


    /**
     * 댓글 수정
     */
    $('body').delegate('.js-comment-btn-modify', 'click', function () {
        var mode = 'modify'
        var bdId = getData('bdId', this);
        var sno = getData('sno', this);
        var memoSno = getData('memosno', this);
        var commentFormAction = dom(bdId, sno).commentFormAction(memoSno);
        commentFormAction.init();
        commentFormAction.element.show();
        commentFormAction.writerNm.prop('readonly', true);
        $.ajax({
            method: "POST",
            url: "../board/memo_ps.php",
            data: {
                mode: 'getMemo',
                bdId: bdId,
                bdSno: sno,
                sno: memoSno,
            },
            dataType: 'json'
        }).success(function (data) {
            if (data['result'] == 'ok') {
                commentFormAction.writerNm.val(data.writerNm);
                commentFormAction.memo.val(data.memo);
            }
            else {
                alert(data['msg']);
                return;
            }
        });

        commentFormAction.btn.unbind('click').bind('click', function () {
            if ($('#info-collection-agree-action').length > 0) {
                if($('#info-collection-agree-action').is(':checked') == false) {
                    alert(__('개인정보 수집항목에 동의해주세요.'));
                    return;
                }
            }

            if (!isValidForm(commentFormAction.element)) {
                return false;
            }

            $.ajax({
                method: "POST",
                url: "../board/memo_ps.php",
                data: {
                    mode: mode,
                    bdSno: sno,
                    sno: memoSno,
                    bdId: bdId,
                    writerNm: commentFormAction.writerNm.val(),
                    writerPw: commentFormAction.password.val(),
                    memo: commentFormAction.memo.val(),
                },
                dataType: 'json'
            }).success(function (data) {
                if (data['result'] == 'ok') {
                    alert(data['msg']);
                    location.reload();
                }
                else {
                    alert(data['msg']);
                    return;
                }
            }).error(function (e) {
                alert(e.responseText);
            });
        });
    });

    /**
     * 댓글답글
     */
    $('body').delegate('.js-comment-btn-reply', 'click', function () {
        var mode = 'reply'
        var bdId = getData('bdId', this);
        var sno = getData('sno', this);
        var memoSno = getData('memosno', this);
        var commentFormAction = dom(bdId, sno).commentFormAction(memoSno);
        commentFormAction.init();
        commentFormAction.element.show();
        commentFormAction.writerNm.prop('readonly', false);
        commentFormAction.btn.unbind('click').bind('click', function () {
            if ($('#info-collection-agree-action').length > 0) {
                if($('#info-collection-agree-action').is(':checked') == false) {
                    alert(__('개인정보 수집항목에 동의해주세요.'));
                    return;
                }
            }

            if (!isValidForm(commentFormAction.element)) {
                return false;
            }

            $.ajax({
                method: "POST",
                url: "../board/memo_ps.php",
                data: {
                    mode: mode,
                    bdId: bdId,
                    bdSno: sno,
                    sno: memoSno,
                    writerNm: commentFormAction.writerNm.val(),
                    writerPw: commentFormAction.password.val(),
                    memo: commentFormAction.memo.val(),
                },
                dataType: 'json'
            }).success(function (data) {
                if (data['result'] == 'ok') {
                    alert(data['msg']);
                    location.reload();
                }
                else {
                    alert(data['msg']);
                    return;
                }
            }).error(function (e) {
                alert(e.responseText);
            });
        });
    });


    /**
     * 댓글삭제
     */
    $('body').delegate('.js-comment-btn-delete', 'click', function () {
        var bdId = getData('bdId', this);
        var sno = getData('sno', this);
        var memoSno = getData('memosno', this);
        var auth = getData('memoauth', this);

        if (auth == 'c') {
            passwordLayer.show();
            passwordLayer.btn.unbind('click').bind('click', function () {
                memoDeleteAjaxProcess();
            });
            return;
        }
        if (!confirm(__('정말 삭제하시겠습니까?'))) {
            return false;
        }

        memoDeleteAjaxProcess(memoSno);

        function memoDeleteAjaxProcess() {
            $.ajax({
                method: "POST",
                url: "../board/memo_ps.php",
                data: {
                    mode: 'delete',
                    bdSno: sno,
                    sno: memoSno,
                    bdId: bdId,
                    writerPw: passwordLayer.value(),
                },
                dataType: 'json'
            }).success(function (data) {
                if (data['result'] == 'ok') {
                    alert(data['msg']);
                    location.reload();
                }
                else {
                    alert(data['msg']);
                    return;
                }
            }).error(function (e) {
                alert(e.responseText);
            });
        }
    });

})
;

//패스워드입력 레이어 창
var passwordLayer = {
    element: $('.js-password-layer'),
    btn: $('.js-password-layer').find('.js-submit'),
    value: function () {
        return $('.js-password-layer').find('input[name=writerPw]').val();
    },
    show: function () {
        this.element.removeClass('dn');
        $('#layerDim').removeClass('dn');
        $('html').addClass('oh-space');
        $('#scroll-left, #scroll-right').addClass('dim');
        $('.cite-layer .wrap div .text').focus();
    },
    close: function () {
        $('.cite-layer .close').trigger('click');
    }
}

function btnModifyWrite(bdId, sno, auth) {
    switch (auth) {
        case 'n' :
            alert(__('권한이 없습니다.'));
            break;
        case 'y' :
            location.href = boardData.modifyUrl.format(bdId, sno);
            break;
        case 'c' :
            passwordLayer.show();
            passwordLayer.btn.unbind('click').bind('click', function () {
                $.ajax({
                    method: "POST",
                    url: "../board/board_ps.php",
                    data: {mode: 'modifyCheck', sno: sno, bdId: bdId, writerPw: passwordLayer.value()},
                    dataType: 'json'
                }).success(function (data) {
                    if (data['result'] == 'ok') {
                        var formHtml = "<form method='post' action='" + boardData.modifyUrl.format(bdId, sno) + "' id='frmModify'>";
                        formHtml += '<input type="hidden" name="bdId" value="' + bdId + '"/>';
                        formHtml += '<input type="hidden" name="sno" value="' + sno + '"/>';
                        formHtml += '<input type="hidden" name="oldPassword" value="' + passwordLayer.value() + '"/>';
                        $('body').append(formHtml);
                        $('#frmModify').submit();
                    }
                    else {
                        alert(data['msg']);
                        return;
                    }
                }).error(function (e) {
                    alert(e.responseText);
                });
            });
            break;
    }
}
