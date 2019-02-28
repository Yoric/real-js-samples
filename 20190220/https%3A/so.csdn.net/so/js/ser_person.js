/**
 * 右侧关注博主
 */

$(function(){
    var loginname=getCookie('UserName');
    var $ser_person = $('.person-list');

    $ser_person.each(function(){

        $this = $(this);
        var $list_name = $this.attr("id");        
        var $focus_btn = $this.find('.person_pic .btn_focus');     
        var $flag;

        if(loginname)
        {
            var check_follow_url = '//my.csdn.net/index.php/follow/check_is_followed/' + loginname + '/' + $list_name + '?jsonpcallback=?';

            $.ajax({
                    type: "get",
                    url: check_follow_url,
                    dataType: "jsonp",
                    success: function (data) 
                    {

                        if (data.msg == 'failed') {

                            $focus_btn.removeAttr("class");                            
                            $flag = false;

                        }
                        else {

                            $focus_btn.attr("class","has_focus");
                            $flag = true;
                        }

                        $focus_btn.click(function(){

				            if($flag)
				            {
				                var do_unfollow_url = '//my.csdn.net/index.php/follow/do_unfollow?username=' + $list_name + '&jsonpcallback=?';
				                $.ajax({
				                    type: "get",
				                    url: do_unfollow_url,
				                    dataType: "jsonp",
				                    success: function (data) {
				                        if (parseInt(data.succ) == 1) {

				                            $focus_btn.removeAttr("class");                            
				                            $flag = false;
				                        }                            
				                    }
				                })
				            }
				            else
				            {
				               var do_follow_url = '//my.csdn.net/index.php/follow/do_follow?username=' + $list_name + '&type =10&jsonpcallback=?';
				                $.ajax({
				                    type: "get",
				                    url: do_follow_url,
				                    dataType: "jsonp",
				                    success: function (data) {			                    			                    	
				                        if (parseInt(data.succ) == 1) {

				                           $focus_btn.attr("class","has_focus");
				                           $flag = true;
				                        }                           
				                    }
				                });
				            }
				        });

                    }
             });  

        }
        else
        {
           $focus_btn.click(function(){

                window.location.href = "https://passport.csdn.net/";

           }); 
        }        
    });
});


function getCookie(objName)
{
  var arrStr = document.cookie.split("; ");
  for(var i = 0;i < arrStr.length;i ++)
  {
    var temp = arrStr[i].split("=");
    if(temp[0] == objName)
    {
        return decodeURI(temp[1]);
    } 
  }
}