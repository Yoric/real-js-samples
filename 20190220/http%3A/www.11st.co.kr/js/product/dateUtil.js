/**
 * ��ȿ��(�����ϴ�) ��(��)���� üũ
 */
function isValidMonth(mm) {
    var m = parseInt(mm,10);
    return (m >= 1 && m <= 12);
}

/**
 * ��ȿ��(�����ϴ�) ��(��)���� üũ
 */
function isValidDay(yyyy, mm, dd) {
    var m = parseInt(mm,10) - 1;
    var d = parseInt(dd,10);

    var end = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    if ((yyyy % 4 == 0 && yyyy % 100 != 0) || yyyy % 400 == 0) {
        end[1] = 29;
    }

    return (d >= 1 && d <= end[m]);
}

/**
 * ��ȿ��(�����ϴ�) ��(��)���� üũ
 */
function isValidHour(hh) {
    var h = parseInt(hh,10);
    return (h >= 1 && h <= 24);
}

/**
 * ��ȿ��(�����ϴ�) ��(��)���� üũ
 */
function isValidMin(mi) {
    var m = parseInt(mi,10);
    return (m >= 1 && m <= 60);
}

/**
 * Time �������� üũ(������ üũ)
 */
function isValidTimeFormat(time) {
    return (!isNaN(time) && time.length == 12);
}

/**
 * ��ȿ�ϴ�(�����ϴ�) Time ���� üũ

 * ex) var time = form.time.value; //'200102310000'
 *     if (!isValidTime(time)) {
 *         alert("�ùٸ� ��¥�� �ƴմϴ�.");
 *     }
 */
function isValidTime(time) {
    var year  = time.substring(0,4);
    var month = time.substring(4,6);
    var day   = time.substring(6,8);
    var hour  = time.substring(8,10);
    var min   = time.substring(10,12);

    if (parseInt(year,10) >= 1900  && isValidMonth(month) &&
        isValidDay(year,month,day) && isValidHour(hour)   &&
        isValidMin(min)) {
        return true;
    }
    return false;
}

/**
 * Time ��Ʈ���� �ڹٽ�ũ��Ʈ Date ��ü�� ��ȯ
 * parameter time: Time ������ String
 */
function toTimeObject(time) { //parseTime(time)
    var year  = time.substr(0,4);
    var month = time.substr(4,2) - 1; // 1��=0,12��=11
    var day   = time.substr(6,2);
    var hour  = time.substr(8,2);
    var min   = time.substr(10,2);

    return new Date(year,month,day,hour,min);
}

/**
 * Time ��Ʈ���� �ڹٽ�ũ��Ʈ Date ��ü�� ��ȯ
 * parameter time: Time ������ String
 */
function toDateObject(time) { //parseTime(time)
    var year  = time.substr(0,4);
    var month = time.substr(4,2) - 1; // 1��=0,12��=11
    var day   = time.substr(6,2);

    return new Date(year,month,day);
}

/**
 * Time ��Ʈ���� �ڹٽ�ũ��Ʈ Date ��ü�� ��ȯ
 * parameter time: Time ������ String
 */
function toFormatString(time, dele) { //parseTime(time)
    var year  = time.substr(0,4);
    var month = time.substr(4,2); // 1��=0,12��=11
    var day   = time.substr(6,2);

    return ("" + year + dele + month + dele + day)
}


/**
 * �ڹٽ�ũ��Ʈ Date ��ü�� Time ��Ʈ������ ��ȯ
 * parameter date: JavaScript Date Object
 */
function toTimeString(date) { //formatTime(date)
    var year  = date.getFullYear();
    var month = date.getMonth() + 1; // 1��=0,12��=11�̹Ƿ� 1 ����
    var day   = date.getDate();
    var hour  = date.getHours();
    var min   = date.getMinutes();

    if (("" + month).length == 1) { month = "0" + month; }
    if (("" + day).length   == 1) { day   = "0" + day;   }
    if (("" + hour).length  == 1) { hour  = "0" + hour;  }
    if (("" + min).length   == 1) { min   = "0" + min;   }

    return ("" + year + month + day + hour + min)
}

/**
 * �ڹٽ�ũ��Ʈ Date ��ü�� Time ��Ʈ������ ��ȯ
 * parameter date: JavaScript Date Object
 */
function toTimeStringYYYYMMDDHH(date) { //formatTime(date)
    var year  = date.getFullYear();
    var month = date.getMonth() + 1; // 1��=0,12��=11�̹Ƿ� 1 ����
    var day   = date.getDate();
    var hour  = date.getHours();

    if (("" + month).length == 1) { month = "0" + month; }
    if (("" + day).length   == 1) { day   = "0" + day;   }
    if (("" + hour).length  == 1) { hour  = "0" + hour;  }

    return ("" + year + month + day + hour)
}

/**
 * �ڹٽ�ũ��Ʈ Date ��ü�� Time ��Ʈ������ ��ȯ
 * parameter date: JavaScript Date Object
 */
function toDateString(date) { //formatTime(date)
    var year  = date.getFullYear();
    var month = date.getMonth() + 1; // 1��=0,12��=11�̹Ƿ� 1 ����
    var day   = date.getDate();

    if (("" + month).length == 1) { month = "0" + month; }
    if (("" + day).length   == 1) { day   = "0" + day;   }

    return ("" + year + month + day)
}

/**
 * Time�� ����ð� ����(�̷�)���� üũ
 */
function isFutureTime(time) {
    return (toTimeObject(time) > new Date());
}

/**
 * Time�� ����ð� ����(����)���� üũ
 */
function isPastTime(time) {
    return (toTimeObject(time) < new Date());
}

/**
 * �־��� Time �� y�� m�� d�� ���̳��� Time�� ����

 * ex) var time = form.time.value; //'20000101'
 *     alert(shiftTime(time,0,0,-100));
 *     => 2000/01/01 00:00 ���κ��� 100�� �� Time
 */
function shiftDate(time,y,m,d) { //moveTime(time,y,m,d)
    var date = toDateObject(time);

    date.setFullYear(date.getFullYear() + y); //y���� ����
    date.setMonth(date.getMonth() + m);       //m���� ����
    date.setDate(date.getDate() + d);         //d���� ����

    return toDateString(date);
}

/**
 * �־��� Time �� y�� m�� d�� h�� ���̳��� Time�� ����

 * ex) var time = form.time.value; //'20000101000'
 *     alert(shiftTime(time,0,0,-100,0));
 *     => 2000/01/01 00:00 ���κ��� 100�� �� Time
 */
function shiftTime(time,y,m,d,h) { //moveTime(time,y,m,d,h)
    var date = toTimeObject(time);

    date.setFullYear(date.getFullYear() + y); //y���� ����
    date.setMonth(date.getMonth() + m);       //m���� ����
    date.setDate(date.getDate() + d);         //d���� ����
    date.setHours(date.getHours() + h);       //h�ø� ����

    return toTimeString(date);
}

/**
 * �� Time�� �� ���� ���̳����� ����

 * time1�� time2���� ũ��(�̷���) minus(-)
 */
function getMonthInterval(time1,time2) { //measureMonthInterval(time1,time2)
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);

    var years  = date2.getFullYear() - date1.getFullYear();
    var months = date2.getMonth() - date1.getMonth();
    var days   = date2.getDate() - date1.getDate();

    return (years * 12 + months + (days >= 0 ? 0 : -1) );
}

/**
 * �� Time�� ��ĥ ���̳����� ����
 * time1�� time2���� ũ��(�̷���) minus(-)
 */
function getDayInterval(time1,time2) {
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);
    var day   = 1000 * 3600 * 24; //24�ð�

    return parseInt((date2 - date1) / day, 10);
}

/**
 * �� Time�� �� �ð� ���̳����� ����

 * time1�� time2���� ũ��(�̷���) minus(-)
 */
function getHourInterval(time1,time2) {
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);
    var hour  = 1000 * 3600; //1�ð�

    return parseInt((date2 - date1) / hour, 10);
}

/**
 * ���� �ð��� Date �������� ����

 */
function getCurrentDate() {
    //return toFormatString(toTimeString(new Date()));
    return toTimeString(new Date());
}

/**
 * ���� �ð��� Time �������� ����

 */
function getCurrentTime() {
    return toTimeString(new Date());
}

/**
 * ���� �ð��� y�� m�� d�� h�� ���̳��� Time�� ����
 */
function getRelativeTime(y,m,d,h) {
/*
    var date = new Date();

    date.setFullYear(date.getFullYear() + y); //y���� ����
    date.setMonth(date.getMonth() + m);       //m���� ����
    date.setDate(date.getDate() + d);         //d���� ����
    date.setHours(date.getHours() + h);       //h�ø� ����

    return toTimeString(date);
*/
    return shiftTime(getCurrentTime(),y,m,d,h);
}

/**
 * ���� Ҵ�� YYYY�������� ����
 */
function getYear() {
/*
    var now = new Date();
    return now.getFullYear();
*/
    return getCurrentTime().substr(0,4);
}

/**
 * ���� ���� MM�������� ����
 */
function getMonth() {
/*
    var now = new Date();

    var month = now.getMonth() + 1; // 1��=0,12��=11�̹Ƿ� 1 ����
    if (("" + month).length == 1) { month = "0" + month; }

    return month;
*/
    return getCurrentTime().substr(4,2);
}

/**
 * ���� ���� DD�������� ����

 */
function getDay() {
/*
    var now = new Date();

    var day = now.getDate();
    if (("" + day).length == 1) { day = "0" + day; }

    return day;
*/
    return getCurrentTime().substr(6,2);
}

/**
 * ���� ���� HH�������� ����
 */
function getHour() {
/*
    var now = new Date();

    var hour = now.getHours();
    if (("" + hour).length == 1) { hour = "0" + hour; }

    return hour;
*/
    return getCurrentTime().substr(8,2);
}

/**
 * ������ ���� �����̾�?

 * ex) alert('������ ' + getDayOfWeek() + '�����Դϴ�.');
 * Ư�� ��¥�� ������ ���Ϸ���? => �������� ���� ����� ������.
 */
function getDayOfWeek() {
    var now = new Date();

    var day = now.getDay(); //�Ͽ���=0,������=1,...,�����=6
    var week = new Array('��','��','ȭ','��','��','��','��');

    return week[day];
}


/*
  ���� ���� �޺� �ϼ� Return
*/
function daysPerMonth()
{
    var DOMonth  = new Array("31","28","31","30","31","30","31","31","30","31","30","31");
    var IDOMonth = new Array("31","29","31","30","31","30","31","31","30","31","30","31");

    if ( (arguments[0]%4) == 0 )
    {
        if ( (arguments[0]%100) == 0 && (arguments[0]%400) != 0 )
            return DOMonth[arguments[1]-1];
        return IDOMonth[arguments[1]-1];
    }
    else
        return DOMonth[arguments[1]-1];
}

/*
 	 YEAR�� MONTH�� �ش��ϴ� DAY�� ������� �����Ѵ�.
 */
function setDays(sltY, sltM, sltName) {
    var yearValue  = sltY.value;
    var monthValue = sltM.value;
    var selectName = sltName;
    var j = "";

    removeAllOptions(selectName);

	var lastDay = parseInt(daysPerMonth(yearValue, monthValue));
    for(var i=1;i<lastDay + 1;i++) {
    	if(i.toString().length == 1){
    		j = "0"+i.toString();
    	}else{
    		j = i;
    	}
        addOption(selectName, j, j, false);
    }
}

/*
	���� select�� �ʱ�ȭ
*/
function removeAllOptions(sltName){
  for(var i=(sltName.options.length-1);i>=0;i--){
    sltName.options[i] = null;
  }
  sltName.selectedIndex = -1;
}

/*

*/
function addOption(obj,text,value,selected){
  if(obj!=null && obj.options!=null){
    obj.options[obj.options.length] = new Option(text, value, false, selected);
  }
}

/*
	ȭ�� �Ⱓ ��¥�� ����
*/
function setDurationValue(startDate, endDate, startY, startM, startD, endY, endM, endD) {	
	startY.value 			= startDate.substr(0,4);
	startY.value.selected 	= "Y";
	startM.value 			= startDate.substr(4,2);
	startM.value.selected 	= "Y"

	setDays(startY, startM, startD);
	startD.value 			= startDate.substr(6,2);
	startD.value.selected 	= "Y"

	endY.value 				= endDate.substr(0,4);
	endY.value.selected 	= "Y";
	endM.value 				= endDate.substr(4,2);
	endM.value.selected 	= "Y"

	setDays(endY, endM, endD);
	endD.value 				= endDate.substr(6,2);
	endD.value.selected 	= "Y"
}


/*
	ȭ���� ����, �ֱ�1����, �ֱ�2����, �ֱ�3����, 1������, 2������, 3������  �Ⱓ ���ϱ�
*/

function setDuration(flag, frm, sYear, sMonth, sDay, eYear, eMonth, eDay, startDateStr, endDateStr) {
	var startDate = "";
	var endDate   = "";

	var startY 	  = eval(frm+"."+sYear);
	var startM 	  = eval(frm+"."+sMonth);
	var startD 	  = eval(frm+"."+sDay);
	var endY 	  = eval(frm+"."+eYear);
	var endM 	  = eval(frm+"."+eMonth);
	var endD 	  = eval(frm+"."+eDay);

	// ����
	if(flag == "TODAY") {	
		startDate	 			= getCurrentDate();
		endDate	 				= getCurrentDate();

		setDurationValue(startDate, endDate, startY, startM, startD, endY, endM, endD);
	}

	// �ֱ�1��
	if(flag == "PRE_FIRST_WEEK") {
		startDate	 			= shiftDate(getCurrentTime(), 0, 0, -7);
		endDate	 				= getCurrentDate();

		setDurationValue(startDate, endDate, startY, startM, startD, endY, endM, endD);
	}

	// �ֱ�2��
	if(flag == "PRE_SECOND_WEEK") {
		startDate	 			= shiftDate(getCurrentTime(), 0, 0, -14);
		endDate	 				= getCurrentDate();

		setDurationValue(startDate, endDate, startY, startM, startD, endY, endM, endD);
	}

	// �ֱ�3��
	if(flag == "PRE_THIRD_WEEK") {
		startDate	 			= shiftDate(getCurrentTime(), 0, 0, -21);
		endDate	 				= getCurrentDate();

		setDurationValue(startDate, endDate, startY, startM, startD, endY, endM, endD);
	}

	// 1������
	if(flag == "PRE_FIRST_MONTH") {
		startDate = shiftDate(getCurrentTime(), 0, -1, 0);
		var s_year = startDate.substr(0,4);
		var s_month = startDate.substr(4,2);
		var s_day = '01';
		var e_day = daysPerMonth(s_year, s_month)
		
		startDate = s_year + s_month + s_day;
		endDate = s_year + s_month + e_day;
		
		setDurationValue(startDate, endDate, startY, startM, startD, endY, endM, endD);
	}
	// 2������
	if(flag == "PRE_SECOND_MONTH") {
	    startDate = shiftDate(getCurrentTime(), 0, -2, 0);
		var s_year = startDate.substr(0,4);
		var s_month = startDate.substr(4,2);
		var s_day = '01';
		var e_day = daysPerMonth(s_year, s_month)
		
		startDate = s_year + s_month + s_day;
		endDate = s_year + s_month + e_day;

		setDurationValue(startDate, endDate, startY, startM, startD, endY, endM, endD);
	}
	// 3������
	if(flag == "PRE_THIRD_MONTH") {
	    startDate = shiftDate(getCurrentTime(), 0, -3, 0);
		var s_year = startDate.substr(0,4);
		var s_month = startDate.substr(4,2);
		var s_day = '01';
		var e_day = daysPerMonth(s_year, s_month)
		
		startDate = s_year + s_month + s_day;
		endDate = s_year + s_month + e_day;

		setDurationValue(startDate, endDate, startY, startM, startD, endY, endM, endD);
	}	
	// ����� ������¥
	if(flag == "USER") {
	    
		startDate = startDateStr.replace(/\//gi, "");
		endDate = endDateStr.replace(/\//gi, "");
		
		setDurationValue(startDate, endDate, startY, startM, startD, endY, endM, endD);
	}
}

