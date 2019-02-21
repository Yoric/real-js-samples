/**
 * JS回置函数群
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
 * 回置input text
 */
function set_text( name , value )
{
	var el = getElement( name );
	el.value = value;
}

/**
 * 回置日期框
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
 * 回置下拉框
 *
 * select 的回置必须指定value，如果该option没有value，则显示为空白
 * select回置为数值时，firefox会把01变成1，而ie不会，必须精确匹配 
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
				// ie对于动态生成的下拉框会抛出一个“不能设置selected属性，未指明的错误”的异常
				// 原因不明，先不做处理
			}

		}
	}
}

/**
 * 回置单选按钮
 *
 * 通过遍历该名称的radio组件实现
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
 * 初始化select下拉框
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
 * 添加select的option项 
 *
 */
function add_option( name , texts , value )
{
	var selObj = getElement( name );
	selObj.options[selObj.length]=new Option( texts , value );
}

/**
 * 移出select的选项
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
 * 给元素添加事件
 *
 * 如何传递有参数的函数？
 * 使用匿名function 
 * - 如 add_event( name1 , "change" , function(){ adjust_select( name1 , name2 , array2 ) } );
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
		// 其他浏览器使用addEventListener(是W3c规范)
		el.addEventListener( event , func , false);
	}
	// if( names == "Netscape" )

}

/**
 * adjust_select用于保持二级联动之间的一致性
 * 
 * 由1级选项自动调整2级选项
 * array2是和array1相对应的一个关联数组
 * 详细格式见city.js
 */
function adjust_select( name1 , name2 , array2 , N,callBack )
{
	var obj1 = getElement( name1, N );

	var obj2 = getElement( name2, N );
	// 取得obj1被选中的项
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
 * 由二级菜单的值直接推算一级菜单
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
 * 根据条件生成year
 *
 * 当beginyear小于等于零时，beginyear为相对于当前年份的起始时间，endyear为向后数的年份
 * 0 , 5 - 从今年开始向后5年
 * -5 ， 10 - 从5年前向后10年
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
	//date.options[date.length] = new Option( '地点' , 0 );

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
 * 初始化并回置联动菜单数据
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
 * 初始化联动菜单
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
/* //和08教育首页有冲突
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
// 用正则表达式将前后空格
// 用空字符串替代。
return this.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * 统计字符串字节数
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
		alert(name + "的长度不能少于" + min + "个字符");
		return false;
	}
	if (max !='' && max >0 && l > max)
	{
		alert(name + "的长度不能多于" + max + "个字符");
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

//过滤特殊字符，标题，名称用
function check_special_chr(val)
{
	if((/>|<|,|\[|\]|\{|\}|\?|\/|\+|=|\||\'|\\|\"|:|;|\~|\!|\@|\#|\*|\$|\%|\^|\&|\(|\)|`/i).test(val))
	{
		return false
	}
	return true;
}

//输入框字数统计
//field,输入框对象， showtext,显示框对象, maxlimit,最大字数限制
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

