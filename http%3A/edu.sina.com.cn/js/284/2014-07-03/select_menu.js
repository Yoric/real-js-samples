/**
 * JS���ú���Ⱥ
 * 
 * Author : EasyChen@Gmail.com
 * GreatThanksto : liyuan's selectPro.js
 *
 */

 function getElement( name, N )
 {
	e = document.getElementById( name ); 
	if( e == null )
	{
		e = document.getElementsByName( name ); 
		return e[0];
	}
	return e;
	 /*
	var idx = parseInt(N)-1;
	var el = document.getElementsByName( name );
	if( el[idx] == null )
	{
    	var e2 = document.getElementById( name );
   		if(e2 == null)
	    {
			alert( 'cannot find ' + name + ' ! ' );
	    }
    else
    {
      return e2;
    }
	}
	else
	{
		return el[idx];
	}
	*/
 }

/**
 * ����input text
 */
function set_text( name , value )
{
	var el = getElement( name );
	el.value = value;
}

/**
 * �������ڿ�
 */
function set_date( str , yname , mname , dname )
{
	var vs = str.split( '-' );
	set_select( yname , vs[0] );
	set_select( mname , vs[1] );
	set_select( dname , vs[2] );
}

/**
 * just setback year and month
 */
function set_year_month( str , yname , mname )
{
	var vs = str.split( '-' );
	set_select( yname , vs[0] );
	set_select( mname , vs[1] );
}

/**
 * ����������
 *
 * select �Ļ��ñ���ָ��value�������optionû��value������ʾΪ�հ�
 * select����Ϊ��ֵʱ��firefox���01���1����ie���ᣬ���뾫ȷƥ�� 
 */
function set_select( name , value , N )
{
	var sel = getElement( name , N );
	var ops = sel.options;
	for( var i = 0 ; i < ops.length ; i++ )
	{
		if( ops[i].value == value  )
		{
			try
			{
				if( i != ops.selectedIndex )
				{
					ops.selectedIndex = i;
					ops[i].selected = true;
				}

			}
			catch( e ) 
			{
				// alert( e.description );
				// ie���ڶ�̬���ɵ���������׳�һ������������selected���ԣ�δָ���Ĵ��󡱵��쳣
				// ԭ�������Ȳ�������
			}

		}
	}
}

/**
 * ���õ�ѡ��ť
 *
 * ͨ�����������Ƶ�radio���ʵ��
 */
function set_radio( name , value )
{
	var objRadio = document.getElementsByName( name );
	for(var i=0;i<objRadio.length;i++)
	{
		if(objRadio[i].type=="radio")
		{
			if( objRadio[i].value == value )
			{
				objRadio[i].checked = true;
			}
		}
	}
}

function set_checkbox( name , value )
{
	var obj = document.getElementsByName( name );
	for(var i=0;i<obj.length;i++)
	{
		if(obj[i].type=="checkbox")
		{
			if( obj[i].value == value )
			{
				obj[i].checked = true;
			}
		}
	}
}

/**
 * ��ʼ��select������
 *
 */
function ini_select( name , Karray, N)
{
	var selObj = getElement( name, N );

	for( key in Karray )
	{
		selObj.options[selObj.length]=new Option( Karray[key] , key );
	}
}

/**
 * ���select��option�� 
 *
 */
function add_option( name , texts , value )
{
	var selObj = getElement( name );
	selObj.options[selObj.length]=new Option( texts , value );
}

/**
 * �Ƴ�select��ѡ��
 */
function remove_option( name , value )
{
	var selObj = getElement( name );

	for( var i = 0 ; i < selObj.length ; i++ )
	{
		if( selObj[i].value == value  )
		{
			try
			{
				selObj.remove( i );
			}
			catch( e ) 
			{
				// alert( e.description );
				//e.description
			}		
		}
	}
}

/*
 * ��Ԫ������¼�
 *
 * ��δ����в����ĺ�����
 * ʹ������function 
 * - �� add_event( name1 , "change" , function(){ adjust_select( name1 , name2 , array2 ) } );
 */
function add_event( name , event , func , N )
{
	var el = getElement( name , N);  

	var names = navigator.appName;
	if( names == "Microsoft Internet Explorer" )
	{
		// IE 
		el.attachEvent( "on" + event , func );
	}
	else
	{
		// ���������ʹ��addEventListener(��W3c�淶)
		el.addEventListener( event , func , false);
	}
	// if( names == "Netscape" )

}

/**
 * adjust_select���ڱ��ֶ�������֮���һ����
 * 
 * ��1��ѡ���Զ�����2��ѡ��
 * array2�Ǻ�array1���Ӧ��һ����������
 * ��ϸ��ʽ��city.js
 */
function adjust_select( name1 , name2 , array2 , N,callBack )
{
	var obj1 = getElement( name1, N );

	var obj2 = getElement( name2, N );
	// ȡ��obj1��ѡ�е���
	//var str = parseInt( obj1.options[obj1.selectedIndex].value );
	var str = obj1.options[obj1.selectedIndex].value ;
	//if( str != 0 && str != NaN )
	if( str != NaN )
	{
		obj2.innerHTML="";
		ini_select( name2 , array2[str] , N );
	}
	else
	{
		obj2.innerHTML="";
	}
        if(!!callBack){
        callBack();
        }
}

/**
 * �ɶ����˵���ֱֵ������һ���˵�
 */
function set_select_by_2( name1 , name2 , array2 , value2 , N )
{
	value2 = value2 + '';
	var pcode = value2.substr( 0 , 2 );
	set_select( name1 , pcode, N );
	adjust_select( name1 , name2 , array2 , N );
	set_select( name2 , value2 , N );
}

/**
 * ������������year
 *
 * ��beginyearС�ڵ�����ʱ��beginyearΪ����ڵ�ǰ��ݵ���ʼʱ�䣬endyearΪ����������
 * 0 , 5 - �ӽ��꿪ʼ���5��
 * -5 �� 10 - ��5��ǰ���10��
 */
function ini_year( yname , beginyear , endyear )
{
	var year = getElement( yname );

	year.innerHTML = '';

	var d = new Date();

	if( beginyear <= 0 )
	{
		beginyear += d.getFullYear();
		endyear += beginyear;
	}

	if( beginyear < endyear )
	{
		for( var i = beginyear ; i <= endyear ; i++  )
		{
			year.options[year.length] = new Option( i + '' , i );
		}
	}
	else
	{
		for( var i = beginyear ; i >= endyear ; i--  )
		{
			year.options[year.length] = new Option( i + '' , i );
		}
	}
}

function ini_month( name )
{
	ini_num( name , 12 );
}

function ini_date( name )
{
	ini_num( name , 31 );
}

function ini_num( name , num )
{
	var date = getElement( name )

	var o = date.value;

	date.innerHTML = '';
	//date.options[date.length] = new Option( '�ص�' , 0 );

	for( var i =1 ; i <= num ; i++ )
	{
		date.options[date.length] = new Option( i + '' , i );
	}

	if( o != NaN )
	{
		set_select( name , o );
	}
}

function year_set_ini( yname , beginyear , endyear , mname , dname)
{
	ini_year( yname , beginyear , endyear);
	ini_month( mname );
	ini_date( dname );
	add_event( mname , "change" , function(){ adjust_date( yname , mname , dname ) } );
	add_event( yname , "change" , function(){ adjust_date( yname , mname , dname ) } );
}

function year_set_back( yname , beginyear , endyear , mname , dname , value)
{
	year_set_ini( yname , beginyear , endyear , mname , dname);
	set_date( value , yname , mname , dname );
	adjust_date( yname , mname , dname );
}

function adjust_date( yname , mname , dname )
{
	var year = getElement( yname );
	var month = getElement( mname );
	var date = getElement( dname );

	var n = 31;
	var y = year.options[year.selectedIndex].value;
	var m = month.options[month.selectedIndex].value;
	if( m == 4 || m == 6 || m == 9 || m == 11  )
	{
		n = 30;
	}

	if( m == 2 )
	{
		if( y % 4 == 0 && y % 100 != 0 )
		{
			n = 29;
		}
		else
		{
			n =28;
		}
	}

	ini_num( dname , n );

}

function select_set_back( name , array , value , N )
{
	ini_select( name , array , N );
	if( value != '' )
	{
		set_select( name , value );
	}
}

function select_set_ini( name , array , N )
{
	ini_select( name , array , N );
}

function change_action( name , formname , action )
{
	add_event( name , "click" , function(){  var f = getElement( formname );f.action = action; } );
}

/**
 * ��ʼ�������������˵�����
 */
function dselect_set_back( name1 , array1 , name2 , array2 , value2 , N ,callBack)
{
	//ini_select( name1 , array1  );	
	//add_event( name1 , "change" , function(){ adjust_select( name1 , name2 , array2 } );
	dselect_set_ini( name1 , array1 , name2 , array2 , N,callBack );
	if( value2 != '' )
	{
		set_select_by_2( name1 , name2 , array2 , value2 , N  );
	}	
}

/**
 * ��ʼ�������˵�
 */
function dselect_set_ini( name1 , array1 , name2 , array2 , N,callBack  )
{
	ini_select( name1 , array1 , N );	
	add_event( name1 , "change" , function(){ adjust_select( name1 , name2 , array2 , N,callBack ) } , N);
}

function getYear()
{
	var d = new Date();
	return d.getFullYear();
}

function getMon()
{
  var d = new Date();
	return d.getMonth();
}

function getCurrentDate()
{
	var d = new Date();
	var y = d.getFullYear();
	var m = d.getMonth()+1;
	var dt = d.getDate();
	return y + '-' + m + '-' + dt ;
}

function set_minute(name)
{
  for (var i=0; i<=59 ; i++)
  {
    if (i < 10)
    {
      v = '0' + i;
    }else{
      v = i;
    }
    add_option(name, v, v);
  }
}

function set_hour(name)
{
  for (var i=0; i<=23 ; i++)
  {
    if (i < 10)
    {
      v = '0' + i;
    }else{
      v = i;
    }
    add_option(name, v, v);
  }
}

/*
function GetObj(objName){
	if(document.getElementById){
		return eval('document.getElementById("' + objName + '")');
	}else{
		return eval('document.all.' + objName);
	}
}
*/
/* //��08������ҳ�г�ͻ
function GetObj(objName){
  var v;
  v = document.getElementById(objName);
  if(v == null)
  {
    var e1 = document.getElementsByName(objName);
    v = e1[0];
    if(v == null)
    {
      v = document.all(objName);
    }
  }
  if(v == null)
  {
    alert( 'cannot find ' + objName + ' ! ' );
  }
  return eval(v);
}*/

String.prototype.trim = function()
{
// ��������ʽ��ǰ��ո�
// �ÿ��ַ��������
return this.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * ͳ���ַ����ֽ���
 *
 * return	integer
 */
String.prototype.ByteCount = function()
{
	txt = this.replace(/(<.*?>)/ig,'');
	txt = txt.replace(/([\u0391-\uFFE5])/ig, '11');
	var count = txt.length;
	return count;
}

function check_length(str, name, min, max)
{
	var l = str.trim().ByteCount();
	if (min !='' && min >0 && l < min)
	{
		alert(name + "�ĳ��Ȳ�������" + min + "���ַ�");
		return false;
	}
	if (max !='' && max >0 && l > max)
	{
		alert(name + "�ĳ��Ȳ��ܶ���" + max + "���ַ�");
		return false;
	}
	return true;
}

function is_email(str)
{
	var reg_email = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	if(!reg_email.test(str.trim()))
	{
		return false;
	}
	return true;
}

function is_plus(str)
{
	var reg = /^\d+$/;
	return reg.test(str.trim());
}

String.prototype.avail = function()
{
	str = this.trim();
	if(str == '' || str == 0 || str == NULL)
	{
		return false;
	}
	return true;
}

//���������ַ������⣬������
function check_special_chr(val)
{
	if((/>|<|,|\[|\]|\{|\}|\?|\/|\+|=|\||\'|\\|\"|:|;|\~|\!|\@|\#|\*|\$|\%|\^|\&|\(|\)|`/i).test(val))
	{
		return false
	}
	return true;
}

//���������ͳ��
//field,�������� showtext,��ʾ�����, maxlimit,�����������
function textCounter(field, numtext, maxlimit) { 
	if (field.value.length > maxlimit) 
		field.value = field.value.substring(0, maxlimit); 
	else 
		numtext.value = maxlimit - field.value.length;
}

function dselect_set_back_major(cate_objid , cate_data , major_objid, major_data)
{
	select_set_back(cate_objid , cate_data, '00');
	adjust_select_major(cate_objid, major_objid, major_data)
	add_event(cate_objid , "change" , function(){ adjust_select_major(cate_objid, major_objid, major_data) }); 
}

function adjust_select_major(cate_objid, major_objid, major_data)
{
	var cateObj = getElement(cate_objid);
	var majorObj = getElement(major_objid);
	var cateid = cateObj.options[cateObj.selectedIndex].value ;
	var curr_major_data = major_data[cateid];
	majorObj.innerHTML = '';
	for(key in curr_major_data)
	{
		if (key.length==4)
		{
			var optgroup = document.createElement('OPTGROUP');
			optgroup.label = curr_major_data[key];
			majorObj.appendChild(optgroup);
		}else{
			var opt = new Option(curr_major_data[key], key);
			majorObj.options[majorObj.length] = opt;
		}
	}

}

