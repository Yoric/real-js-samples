





var HeaderKeyPromotion = new function()
{
	var _dispMaxCnt = 3;
	var _dispCnt = Number(TMCookieUtil.getSubCookie(1, "PRD_LINE_MAP"));
	var _isDispBnnr = false;
	var _isTodayIssue = true;
	var _isShockingDeal = true;

	//1. ������ ���̽� ����
	this.TodayIssue = new function()
	{
		var _todayIssueUrl = 'http://www.11st.co.kr/browsing/NewPlusZonePlace.tmall?method=getTodayIssue&addCtgrNo=942652&naviTab=1';
		var _data = [];
		var _clickStatCd = 'PDK0101';
		var _totalCnt = 0;

		this.setData = function(data)
		{
			_data = data;
		}

		this.show = function()
		{
 			try
			{
				var $lineBnnrArea = jQuery('#prdTopLineBanner');
				var today = new Date();
				var month = today.getMonth()+1;
				var day = today.getDate();

				var html = '';
				var naviHtml = '';
				html += '<div class="ban_l">';
				html += '	<div id="header_today_issue" class="ban_box">';
				html += '		<div id="ban_date" class="date calendar">';
				html += '			<a href="' + _todayIssueUrl + '" target="_blank" title="��â����">'
				html += '			<em>'+ month + '��</em><strong>' + day + '<span>��</span></strong>';
				html += '			</a>';
				html += '		</div>';
				html += '		<p>������ �� �̽���';
				html += '			<strong>'
				if ( typeof( _data) == 'object' && _data.length > 0  ){
					_curIdx = parseInt(Math.round(Math.random()*(_data.length-1)), 10);
					_totalCnt =  _data.length;
					html += _getTodayIssueHtml(_curIdx);
					html += '		</strong>�Դϴ�.';
					html += '		<br>11������ ��� �̽��� �� ������ Ȯ���ϼ���!';
					html += '		<strong>';
					html += '			<a href="' + _todayIssueUrl + '" target="_blank" title="��â����"><span>����̽�</span>Ȯ���Ϸ� ����</a>';
					html += '		</strong>';
					html += '	</p>';

					if ( _totalCnt > 1 ){
						naviHtml += '<div class="btnctr_pn">';
						naviHtml += '	<em id="key_todayissue_no">' + (_curIdx + 1) + '</em>/' + _totalCnt;
						naviHtml += '	<button type="button" class="in_prev" onclick="HeaderKeyPromotion.TodayIssue.prev()">���� ���</button>';
						naviHtml += '	<button type="button" class="in_next" onclick="HeaderKeyPromotion.TodayIssue.next()">���� ���</button>';
						naviHtml += '</div>';
					}

					html += '	</div>';
					html += naviHtml;
					html += '</div>'
				}

				$lineBnnrArea
					.removeClass('prdc_navigation')
					.addClass('prdc_navigation_v2 magiccard')
					.html(html)
					.show();

				_randomStyle();

				jQuery('#header_today_issue').bind(
						'click',
						function(evt)
						{
							doCommonStat(_clickStatCd);
						}
					);
			}
			catch(ex)
			{
				_isTodayIssue = false;
			}
		}

		this.prev	= function(){
			_move('prev');
		}

		this.next	= function()
		{
			_move('next');
		}

		//�������� dom ����
		var _getTodayIssueHtml = function(idx)
		{
			var data = _data[idx];
			var html = '<a href="' + data.prdUrl + '" target="_blank" title="'+ data.prdNm + '">';
			html += data.prdNm;
			html += '</a>';

			return html;
		}

		//paging event
		var _move = function(direction)
		{
			var $todayIssue = jQuery('#header_today_issue p strong:eq(0)');
			var $tabNo = jQuery('#key_todayissue_no');

			var totalCnt =  _totalCnt;

			//paging ó��
			if ( direction == 'prev' ){
				_curIdx = ( _totalCnt + ( _curIdx - 1) ) % _totalCnt;
			}else{
				_curIdx = ( _curIdx + 1 ) % _totalCnt;
			}

			//��ǰ���� dom ����
			$todayIssue.html( _getTodayIssueHtml(_curIdx) );
			$tabNo.html(_curIdx + 1);

			_randomStyle();
		}

		//bg-color �� calendar random style����
		var _randomStyle = function(direction)
		{
			//bg-color random class ����
			var colorNum = Math.floor(Math.random()*5) + 1;
			var colorClass = 'ban_box';
			var $color = jQuery('#header_today_issue');

			if(colorNum == 1){colorClass = 'ban_box';}
			else if(colorNum == 2){colorClass = 'ban_box bg_yellow';}
			else if(colorNum == 3){colorClass = 'ban_box bg_pink';}
			else if(colorNum == 4){colorClass = 'ban_box bg_blue';}
			else if(colorNum == 5){colorClass = 'ban_box bg_violet';}

			$color.removeClass().addClass(colorClass);

			//calendar random class ����
			var calNum = Math.floor(Math.random()*3) + 1;
			var calClass = 'date calendar';
			var $date = jQuery('#ban_date');

			if(calNum == 1){calClass = 'date calendar';}
			else if(calNum == 2){calClass = 'date letter';}
			else if(calNum == 3){calClass = 'date newspaper';}

			$date.removeClass().addClass(calClass);
		}
	}
	//2. ��ŷ�� ����
	this.ShockingDeal = new function()
	{
		var _shockingDealUrl = 'http://deal.11st.co.kr/html/nc/deal/main.html';
		var _curIdx = 0;
		var _data = [];
		var _clickStatCd = 'PDK0102';
		var _totalCnt = 0;

		this.setData = function(data)
		{
			_data = data;
		}

		this.show = function()
		{
			try{
			if ( _isTodayIssue ){
				var $lineBnnrArea = jQuery('#prdTopLineBanner');
				var html = '';
				var naviHtml = '';
				html += '<div class="ban_r">';
				html += '	<div id="header_shocking_deal" class="ban_box">';
				html += '		<h2><a href="' + _shockingDealUrl + '" class="tit" target="_blank" alt="��â����">��ŷ��</a></h2>'

				if ( typeof( _data) == 'object' && _data.length > 0  ){
					_curIdx = parseInt(Math.round(Math.random()*(_data.length-1)), 10);
					_totalCnt = _data.length;
					html += _getShockingDealHtml(_curIdx);

					if ( _totalCnt > 1 ){
						naviHtml += '<div class="btnctr_pn">';
						naviHtml += '	<em id="key_shockingdeal_no">' + (_curIdx + 1) + '</em>/' + _data.length;
						naviHtml += '	<button type="button" class="in_prev" onclick="HeaderKeyPromotion.ShockingDeal.prev()">���� ���</button>';
						naviHtml += '	<button type="button" class="in_next" onclick="HeaderKeyPromotion.ShockingDeal.next()">���� ���</button>';
						naviHtml += '</div>';
					}
				}

				html += '	</div>';
				html += naviHtml;
				html += '</div>';

				$lineBnnrArea.append(html);

				jQuery('#header_shocking_deal').bind(
					'click',
					function(evt)
					{
						doCommonStat(_clickStatCd);
					}
				);
			}
			}catch(ex){
				_isShockingDeal = false;
			}
		}

		this.prev	= function()
		{
			_move('prev');
		}

		this.next	= function()
		{
			_move('next');
		}
		//�������� dom ����
		var _getShockingDealHtml = function(idx)
		{
			var data = _data[idx];
			var prdNm = data.prdNm;

			var html = '<a id="shockingDealPrd" href="' + _shockingDealUrl + (_shockingDealUrl.indexOf('?') > -1 ? '&' : '?') + 'prdNo=' + data.prdNo + '" target="_blank" title="' + prdNm + '">';
			html += '<div>' + prdNm + '</div>';
			if ( Number(data.dscRt) > 5 ){
				html += '<strong>' + data.dscRt + '<span>%</span></strong>';
			}else{
				html += '<strong class="tit_special">Ư����</strong>';
			}
			if(data.optYn == 'Y'){
				html += '<em>' + data.salePrice + '<span>��~</span></em>';
			}else{
				html += '<em>' + data.salePrice + '<span>��</span></em>';
			}

			if ( data.img != '' ){
				html += '<img src="' + data.img + '" alt="' + data.prdNm + '">';
			}
			html += '</a>';

			return html;
		}
		//paging event
		var _move = function(direction)
		{
			var $shockingDeal = jQuery('#header_shocking_deal');
			var $tabNo = jQuery('#key_shockingdeal_no');
			var $shockingDealPrd = jQuery('#shockingDealPrd');

			//paging ó��
			if( direction == 'prev' ){
				_curIdx = ( _totalCnt + ( _curIdx - 1) ) % _totalCnt;
			}else{
				_curIdx = ( _curIdx + 1 ) % _totalCnt;
			}

			//��ǰ���� dom ����
			$shockingDealPrd.detach();
			$shockingDeal.append( _getShockingDealHtml(_curIdx) );
			$tabNo.html(_curIdx + 1);
		}
	}

	this.show = function()
	{
		if ( _dispCnt < _dispMaxCnt && _isDispBnnr ){
			this.TodayIssue.show();
			this.ShockingDeal.show();

			//������ �̽� �� ��ŷ�� �������� �ϳ��� ������ ����� ��� ��ǥ��
			if(_isTodayIssue && _isShockingDeal){
				TMCookieUtil.add(1, "PRD_LINE_MAP", String(_dispCnt + 1));
			}else{
				var $lineBnnrArea = jQuery('#prdTopLineBanner');
				$lineBnnrArea
				.removeClass('prdc_navigation_v2 magiccard')
				.addClass('prdc_navigation')
				.html('')
				.hide();
			}
		}
	}
}

HeaderKeyPromotion.show();
