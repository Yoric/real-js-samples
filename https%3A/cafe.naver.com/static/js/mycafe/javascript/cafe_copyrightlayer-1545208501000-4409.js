var filePopup =  
'<div id="CoyprightFilePopup" class="layerpopup" style="width:370px;left:100px;display:none;">'
+'	<!-- PNG Gradation -->'
+'	<div class="shadow1"><div class="shadow1_side"><div class="shadow2"><div class="shadow2_side">'
+'		<div class="border_type">'
+'			<!-- ����Ʈ -->'
+'			<h4 class="header">���۱� ���� ���� �̿� ����</h4>'
+'			<div class="content">'
+'				<dl class="cp_noti" >'
+'					<dt><img src="https://cafe.pstatic.net/img/ico_notice2.gif" width="29" height="26" alt=""></dt>'
+'					<dd>�ش� ����(or ��ũ)�� ���� ���۱� ���� �Ű���<br>�����Ǿ� �̿��� �����մϴ�.</dd>'
+'				</dl>'
+'				<div class="cp_noti_desc">'
+'					<p>���۱��� �ִ� ���� ������ ���۱����� ��� ���� �������� <br>'
+'					�����ϴ� ���� ���۱����� �Ǹ��� ħ���ϴ� �ҹ������Դϴ�.</p>'
+'					<p>���̹��� ���۱� ħ�ط� ���� ���ظ� ������ �����ϱ� ����,<br>'
+'					<span>���۱��ڷκ��� ��ȣ�� ��û�� ���� ���Ͽ� ���� �̿뿡 ������ <br>'
+'					�ΰ� �ֽ��ϴ�. </span></p>'
+'					<p>�ǰ��ϰ� ������ ���ͳ� ȯ���� ����� ���� �� �ֵ��� ���� <br>'
+'					���ɰ� ������ ��Ź�帳�ϴ�.</p>'
+'				</div>'
+'			</div>'
+'			<a href="#BtnCLose" class="closelayer" onclick="oCL.hide(\'CoyprightFilePopup\');"><img src="https://ssl.pstatic.net/static/book/publishingcompany/btn_close.gif" alt="�ݱ�" width="15" height="14"></a>'
+'			<!-- //����Ʈ -->'
+'		</div>'
+'	</div></div></div></div>'
+'	<!-- //PNG Gradation -->'
+'</div>';
var scrapPopup = '<div id="CopyrightScrapPopup" class="layerpopup" style="width:370px;left:100px;display:none;">'
+'<!-- PNG Gradation -->'
+'<div class="shadow1"><div class="shadow1_side"><div class="shadow2"><div class="shadow2_side">'
+'	<div class="border_type">'
+'		<!-- ����Ʈ -->'
+'		<h4 class="header">���۱� ���� ���� �̿� ����</h4>'
+'		<div class="content">'
+'			<dl class="cp_noti" >'
+'				<dt><img src="https://cafe.pstatic.net/img/ico_notice2.gif" width="29" height="26" alt=""></dt>'
+'				<dd>���۱� ���� ������ ���� ���� �־� ��� �����<br>�����մϴ�.</dd>'
+'			</dl>'
+'			<div class="cp_noti_desc">'
+'				<p>���۱��� �ִ� ���� ������ ���۱����� ��� ���� �������� <br>'
+'				�����ϴ� ���� ���۱����� �Ǹ��� ħ���ϴ� �ҹ������Դϴ�.</p>'
+'				<p>���̹��� ���۱� ħ�ط� ���� ���ظ� ������ �����ϱ� ����,<br>'
+'				<span>���۱��ڷκ��� ��ȣ�� ��û�� ���� ���Ͽ� ���� �̿뿡 ������ <br>'
+'				�ΰ� �ֽ��ϴ�. </span></p>'
+'				<p>�ǰ��ϰ� ������ ���ͳ� ȯ���� ����� ���� �� �ֵ��� ���� <br>'
+'				���ɰ� ������ ��Ź�帳�ϴ�.</p>'
+'			</div>'
+'		</div>'
+'		<a href="#BtnCLose" onclick="oCL.hide(\'CopyrightScrapPopup\');" class="closelayer"><img src="https://ssl.pstatic.net/static/book/publishingcompany/btn_close.gif" alt="�ݱ�" width="15" height="14"></a>'
+'		<!-- //����Ʈ -->'
+'	</div>'
+'</div></div></div></div>'
+'<!-- //PNG Gradation -->'
+'</div>';
var noticePopup = '<div id="CopyrightNoticePopup" class="layerpopup" style="width:370px;left:100px;display:none;">'
	+'<!-- PNG Gradation -->'
	+'<div class="shadow1"><div class="shadow1_side"><div class="shadow2"><div class="shadow2_side">'
	+'	<div class="border_type">'
	+'		<!-- ����Ʈ -->'
	+'		<h4 class="header">���۱� ���� ���� �̿� ����</h4>'
	+'		<div class="content">'
	+'			<dl class="cp_noti" >'
	+'				<dt><img src="https://cafe.pstatic.net/img/ico_notice2.gif" width="29" height="26" alt=""></dt>'
	+'				<dd>���۱� ���� ������ ���� ���� �־� ����/�빮 <br>����� �����մϴ�.'
	+'			</dl>'
	+'			<div class="cp_noti_desc">'
	+'				<p>���۱��� �ִ� ���� ������ ���۱����� ��� ���� �������� <br>'
	+'				�����ϴ� ���� ���۱����� �Ǹ��� ħ���ϴ� �ҹ������Դϴ�.</p>'
	+'				<p>���̹��� ���۱� ħ�ط� ���� ���ظ� ������ �����ϱ� ����,<br>'
	+'				<span>���۱��ڷκ��� ��ȣ�� ��û�� ���� ���Ͽ� ���� �̿뿡 ������ <br>'
	+'				�ΰ� �ֽ��ϴ�. </span></p>'
	+'				<p>�ǰ��ϰ� ������ ���ͳ� ȯ���� ����� ���� �� �ֵ��� ���� <br>'
	+'				���ɰ� ������ ��Ź�帳�ϴ�.</p>'
	+'			</div>'
	+'		</div>'
	+'		<a href="#BtnCLose" onclick="oCL.hide(\'CopyrightNoticePopup\');" class="closelayer"><img src="https://ssl.pstatic.net/static/book/publishingcompany/btn_close.gif" alt="�ݱ�" width="15" height="14"></a>'
	+'		<!-- //����Ʈ -->'
	+'	</div>'
	+'</div></div></div></div>'
	+'<!-- //PNG Gradation -->'
	+'</div>';
document.write(filePopup);
document.write(scrapPopup);
document.write(noticePopup);