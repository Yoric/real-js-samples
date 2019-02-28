 /**
 * Created by LeeNamJu on 2015-11-03.
 */
$(document).ready(function () {
    if ($('.js-datepicker').length) {
        $('.js-datepicker').datetimepicker({
            locale: 'ko',
            format: 'YYYY-MM-DD',
            dayViewHeaderFormat: __('YYYY년 MM월'),
            viewMode: 'days',
            ignoreReadonly: true,
            debug: false
        });
        $('.check-cal img').click(function (e) {
            $(this).prev('.js-datepicker').data('DateTimePicker').show();
        });
        //날짜 체크 정규식 /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;
    }
    if ($('.check-option-inner').length) {
        $('.check-option-inner button.inner').click(function (e) {
            $startDate = $endDate = '';
            $period = $(this).data('value');
            $elements = $('input[name="' + $(this).closest('.check-option-inner').data('target-name') + '"]');
            $format = $($elements[0]).data('DateTimePicker').format();
            if ($period >= 0) {
                $startDate = moment().hours(0).minutes(0).seconds(0).subtract($period, 'days').format($format);
                $endDate = moment().hours(0).minutes(0).seconds(0).format($format);
            }
            $($elements[0]).val($startDate);
            $($elements[1]).val($endDate);

            $('.check-option-inner .btn').removeClass('active');
            $(this).parents('.btn').addClass('active');
        });
        // 선택된 버튼에 따른 값 초기화
        $elements = $('input[name*=\'' + $('.check-option-inner').data('target-name') + '\']');
        $('.check-option-inner .active').find('button').trigger('click');
    }
})
;

var passwordListLayer = {
    element: $('.js-list-password-layer'),
    btnEl: $('.js-list-password-layer').find('.js-submit'),
    inputEl: $('.js-list-password-layer').find('input[name=writerPw]'),
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
