/**
 * 유효한(존재하는) 월(月)인지 체크
 */
function isValidMonth(mm) {
    var m = parseInt(mm,10);
    return (m >= 1 && m <= 12);
}

/**
 * 유효한(존재하는) 일(日)인지 체크
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
 * 유효한(존재하는) 시(時)인지 체크
 */
function isValidHour(hh) {
    var h = parseInt(hh,10);
    return (h >= 1 && h <= 24);
}

/**
 * 유효한(존재하는) 분(分)인지 체크
 */
function isValidMin(mi) {
    var m = parseInt(mi,10);
    return (m >= 1 && m <= 60);
}

/**
 * Time 형식인지 체크(느슨한 체크)
 */
function isValidTimeFormat(time) {
    return (!isNaN(time) && time.length == 12);
}

/**
 * 유효하는(존재하는) Time 인지 체크

 * ex) var time = form.time.value; //'200102310000'
 *     if (!isValidTime(time)) {
 *         alert("올바른 날짜가 아닙니다.");
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
 * Time 스트링을 자바스크립트 Date 객체로 변환
 * parameter time: Time 형식의 String
 */
function toTimeObject(time) { //parseTime(time)
    var year  = time.substr(0,4);
    var month = time.substr(4,2) - 1; // 1월=0,12월=11
    var day   = time.substr(6,2);
    var hour  = time.substr(8,2);
    var min   = time.substr(10,2);

    return new Date(year,month,day,hour,min);
}

/**
 * Time 스트링을 자바스크립트 Date 객체로 변환
 * parameter time: Time 형식의 String
 */
function toDateObject(time) { //parseTime(time)
    var year  = time.substr(0,4);
    var month = time.substr(4,2) - 1; // 1월=0,12월=11
    var day   = time.substr(6,2);

    return new Date(year,month,day);
}

/**
 * Time 스트링을 자바스크립트 Date 객체로 변환
 * parameter time: Time 형식의 String
 */
function toFormatString(time, dele) { //parseTime(time)
    var year  = time.substr(0,4);
    var month = time.substr(4,2); // 1월=0,12월=11
    var day   = time.substr(6,2);

    return ("" + year + dele + month + dele + day)
}


/**
 * 자바스크립트 Date 객체를 Time 스트링으로 변환
 * parameter date: JavaScript Date Object
 */
function toTimeString(date) { //formatTime(date)
    var year  = date.getFullYear();
    var month = date.getMonth() + 1; // 1월=0,12월=11이므로 1 더함
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
 * 자바스크립트 Date 객체를 Time 스트링으로 변환
 * parameter date: JavaScript Date Object
 */
function toTimeStringYYYYMMDDHH(date) { //formatTime(date)
    var year  = date.getFullYear();
    var month = date.getMonth() + 1; // 1월=0,12월=11이므로 1 더함
    var day   = date.getDate();
    var hour  = date.getHours();

    if (("" + month).length == 1) { month = "0" + month; }
    if (("" + day).length   == 1) { day   = "0" + day;   }
    if (("" + hour).length  == 1) { hour  = "0" + hour;  }

    return ("" + year + month + day + hour)
}

/**
 * 자바스크립트 Date 객체를 Time 스트링으로 변환
 * parameter date: JavaScript Date Object
 */
function toDateString(date) { //formatTime(date)
    var year  = date.getFullYear();
    var month = date.getMonth() + 1; // 1월=0,12월=11이므로 1 더함
    var day   = date.getDate();

    if (("" + month).length == 1) { month = "0" + month; }
    if (("" + day).length   == 1) { day   = "0" + day;   }

    return ("" + year + month + day)
}

/**
 * Time이 현재시각 이후(미래)인지 체크
 */
function isFutureTime(time) {
    return (toTimeObject(time) > new Date());
}

/**
 * Time이 현재시각 이전(과거)인지 체크
 */
function isPastTime(time) {
    return (toTimeObject(time) < new Date());
}

/**
 * 주어진 Time 과 y년 m월 d일 차이나는 Time을 리턴

 * ex) var time = form.time.value; //'20000101'
 *     alert(shiftTime(time,0,0,-100));
 *     => 2000/01/01 00:00 으로부터 100일 전 Time
 */
function shiftDate(time,y,m,d) { //moveTime(time,y,m,d)
    var date = toDateObject(time);

    date.setFullYear(date.getFullYear() + y); //y년을 더함
    date.setMonth(date.getMonth() + m);       //m월을 더함
    date.setDate(date.getDate() + d);         //d일을 더함

    return toDateString(date);
}

/**
 * 주어진 Time 과 y년 m월 d일 h시 차이나는 Time을 리턴

 * ex) var time = form.time.value; //'20000101000'
 *     alert(shiftTime(time,0,0,-100,0));
 *     => 2000/01/01 00:00 으로부터 100일 전 Time
 */
function shiftTime(time,y,m,d,h) { //moveTime(time,y,m,d,h)
    var date = toTimeObject(time);

    date.setFullYear(date.getFullYear() + y); //y년을 더함
    date.setMonth(date.getMonth() + m);       //m월을 더함
    date.setDate(date.getDate() + d);         //d일을 더함
    date.setHours(date.getHours() + h);       //h시를 더함

    return toTimeString(date);
}

/**
 * 두 Time이 몇 개월 차이나는지 구함

 * time1이 time2보다 크면(미래면) minus(-)
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
 * 두 Time이 며칠 차이나는지 구함
 * time1이 time2보다 크면(미래면) minus(-)
 */
function getDayInterval(time1,time2) {
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);
    var day   = 1000 * 3600 * 24; //24시간

    return parseInt((date2 - date1) / day, 10);
}

/**
 * 두 Time이 몇 시간 차이나는지 구함

 * time1이 time2보다 크면(미래면) minus(-)
 */
function getHourInterval(time1,time2) {
    var date1 = toTimeObject(time1);
    var date2 = toTimeObject(time2);
    var hour  = 1000 * 3600; //1시간

    return parseInt((date2 - date1) / hour, 10);
}

/**
 * 현재 시각을 Date 형식으로 리턴

 */
function getCurrentDate() {
    //return toFormatString(toTimeString(new Date()));
    return toTimeString(new Date());
}

/**
 * 현재 시각을 Time 형식으로 리턴

 */
function getCurrentTime() {
    return toTimeString(new Date());
}

/**
 * 현재 시각과 y년 m월 d일 h시 차이나는 Time을 리턴
 */
function getRelativeTime(y,m,d,h) {
/*
    var date = new Date();

    date.setFullYear(date.getFullYear() + y); //y년을 더함
    date.setMonth(date.getMonth() + m);       //m월을 더함
    date.setDate(date.getDate() + d);         //d일을 더함
    date.setHours(date.getHours() + h);       //h시를 더함

    return toTimeString(date);
*/
    return shiftTime(getCurrentTime(),y,m,d,h);
}

/**
 * 현재 年을 YYYY형식으로 리턴
 */
function getYear() {
/*
    var now = new Date();
    return now.getFullYear();
*/
    return getCurrentTime().substr(0,4);
}

/**
 * 현재 月을 MM형식으로 리턴
 */
function getMonth() {
/*
    var now = new Date();

    var month = now.getMonth() + 1; // 1월=0,12월=11이므로 1 더함
    if (("" + month).length == 1) { month = "0" + month; }

    return month;
*/
    return getCurrentTime().substr(4,2);
}

/**
 * 현재 日을 DD형식으로 리턴

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
 * 현재 時를 HH형식으로 리턴
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
 * 오늘이 무슨 요일이야?

 * ex) alert('오늘은 ' + getDayOfWeek() + '요일입니다.');
 * 특정 날짜의 요일을 구하려면? => 여러분이 직접 만들어 보세요.
 */
function getDayOfWeek() {
    var now = new Date();

    var day = now.getDay(); //일요일=0,월요일=1,...,토요일=6
    var week = new Array('일','월','화','수','목','금','토');

    return week[day];
}


/*
  윤달 포함 달별 일수 Return
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
 	 YEAR와 MONTH에 해당하는 DAY를 목록으로 생성한다.
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
	기존 select값 초기화
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
	화면 기간 날짜값 셋팅
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
	화면의 오늘, 최근1주일, 최근2주일, 최근3주일, 1개월전, 2개월전, 3개월전  기간 구하기
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

	// 오늘
	if(flag == "TODAY") {	
		startDate	 			= getCurrentDate();
		endDate	 				= getCurrentDate();

		setDurationValue(startDate, endDate, startY, startM, startD, endY, endM, endD);
	}

	// 최근1주
	if(flag == "PRE_FIRST_WEEK") {
		startDate	 			= shiftDate(getCurrentTime(), 0, 0, -7);
		endDate	 				= getCurrentDate();

		setDurationValue(startDate, endDate, startY, startM, startD, endY, endM, endD);
	}

	// 최근2주
	if(flag == "PRE_SECOND_WEEK") {
		startDate	 			= shiftDate(getCurrentTime(), 0, 0, -14);
		endDate	 				= getCurrentDate();

		setDurationValue(startDate, endDate, startY, startM, startD, endY, endM, endD);
	}

	// 최근3주
	if(flag == "PRE_THIRD_WEEK") {
		startDate	 			= shiftDate(getCurrentTime(), 0, 0, -21);
		endDate	 				= getCurrentDate();

		setDurationValue(startDate, endDate, startY, startM, startD, endY, endM, endD);
	}

	// 1개월전
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
	// 2개월전
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
	// 3개월전
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
	// 사용자 설정날짜
	if(flag == "USER") {
	    
		startDate = startDateStr.replace(/\//gi, "");
		endDate = endDateStr.replace(/\//gi, "");
		
		setDurationValue(startDate, endDate, startY, startM, startD, endY, endM, endD);
	}
}

