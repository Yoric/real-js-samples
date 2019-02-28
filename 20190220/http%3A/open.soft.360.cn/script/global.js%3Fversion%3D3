var uploaderList = new Array();
$(function(){
    var lineProgress = $('<div class="progress progress-striped active">'
            +'<div class="progress-bar" role="progressbar" style="width: 0%;"></div></div>');
    $('.js-uploadify').each(function(){ 
        var node = $(this);
        var prompt = node.parent().find('.js-uploadify-list');
        var filetype= node.data('filetype');
        var ismulti = node.data('multi')===false?false:true;
        var name = node.data('name');
        var mark = node.data('mark');
        var softExtension = node.data('fileextension');
        if(softExtension === undefined || softExtension == '') softExtension = 'exe,zip,7z,rar,msi';
        var inputName =ismulti?name+'[]':name;
        var html;
        var conf = {
            // 选完文件后，是否自动上传。
            auto: true,
            // swf文件路径
            swf: '/script/Uploader.swf',
            fileVal: 'Filedata',
            // 文件接收服务端。
            server: 'uploadify.php',
            // 选择文件的按钮。可选。
             // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: {
                id:node,
                multiple: false 
            },
            fileNumLimit:200,
            // 只允许选择图片文件
            formData: {
                token:$('input[name=token]').val(),
                stamp:$('input[name=stamp]').val(),
                filetype:filetype,
                mark: mark === undefined ? 'yes' : 'no'
            },
            duplicate :true
        };
        switch(filetype){
            case 'image':
                conf.fileSingleSizeLimit = 5*1024*1024;
                conf.accept = {
                    extensions: 'gif,jpg,png',
                    mimeTypes: 'image/*'
                }
                break;
            case 'soft':
                conf.fileSingleSizeLimit = 512*1024*1024;
                conf.accept = {
                  extensions: softExtension,
                }
                break;
            case 'video':
                conf.fileSingleSizeLimit = 300*1024*1024;
                conf.accept = {
                    extensions: 'rm,rmvb,wmv,avi,mp4,3gp,mkv,mov',
                    mimeTypes: 'video/*'
                }
                break;
        }
        var uploader =  WebUploader.create(conf);
        uploaderList.push(uploader)
        uploader.on( 'uploadProgress', function( file, percentage ) {
            $percent = node.parent().find('.progress-bar');
            // 避免重复创建
            if ( !$percent.length ) {
                var lineProgressTemp = lineProgress.clone();
                node.after(lineProgressTemp)
            }
            $percent.css( 'width', percentage * 100 + '%' );
         });

         // 文件上传成功，给item添加成功class, 用样式标记上传成功。
         uploader.on( 'uploadSuccess', function( file, resp ) {
            if($.trim(resp.error)==='' &&$.trim(resp.url).length>8){
                if(filetype==='image'){
                     html='<div class="cardpic-img"><img src="'+resp.url+'" />'
                             +'<input type="hidden" name="'+inputName+'" value="'+resp.url+'"/>'+
                             '<span class="glyphicon glyphicon-remove cardpic-remove"></span></div>';
                }else if(filetype==='video'){
                     html='<div class="cardpic-img">'
                            +'<a target="_blank" href="'+ resp.videourl + '">'
                            +'<div class="upload_video"></div>'
                            + '</a>'
                            +'<input type="hidden" name="'+inputName+'" value="'+resp.url+'"/>'+
                             '<span class="glyphicon glyphicon-remove cardpic-remove"></span>'+
                            '</div>';
                }else if(filetype==='soft')
                {
                    html='<div class="text-success"><input type="hidden" name="'+inputName+'" value="'+resp.url+'"/>';
                    if(ismulti){
                        html+='<input type="hidden" name="realfilename[]" value="'+file.name+'"/>';
                    }else{
                        html+='<input type="hidden" name="realfilename" value="'+file.name+'"/>';
                    }
                    html+=file.name+'</div>';
                }else 
                {
                    html='<div class="text-success"><input type="hidden" name="'+inputName+'" value="'+resp.url+'"/>'+file.name+'</div>';
                } 
                if(ismulti)
                {
                    prompt.append(html);
                }else
                {
                    prompt.html(html);
                }
                prompt.find('.n-error').detach();
            }else{
                alert(resp.error);
            }
         });

         // 文件上传失败，显示上传出错。
         uploader.on( 'uploadError', function( file ) {
            console.log('error')
            var $li = $( '#'+file.id ),
            $error = $li.find('div.error');

            // 避免重复创建
            if ( !$error.length ) {
                $error = $('<div class="error"></div>').appendTo( $li );
            }
            $error.text('上传失败');
        });
                         
        // 完成上传完了，成功或者失败，先删除进度条。
        uploader.on( 'uploadComplete', function( file ) {
            setTimeout(function(){
                node.parent().find('.progress').remove();
            }, 1000)
        });

    });
   
    $('.js-propover').click(function(){
        var url = this.href;
        if($.trim($(this).data('content')).length>0){
           $(this).popover('show'); 
            window.setTimeout(function(){window.location.href=url;},2000);
            return false;
        }
        return true;
    });
    $(document).delegate('.cardpic-remove','click',function(){
        $(this).parent().detach();
    });
    
    function is_ie_old()
    {
        var useragent = navigator.userAgent;
        var isie = useragent.indexOf("compatible") > -1 && useragent.indexOf("MSIE") > -1 && !(useragent.indexOf("Opera") > -1);
        if (isie)
        {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(useragent);
            var version = parseFloat(RegExp["$1"]);
            if (version === 7||version === 8||version === 9)
            {
                return true;
            }else if (version === 10||version === 11)
            {
                return false;
            }
        }
        return false;
    }
    if(is_ie_old())
    {
        $('input[name=ieold]').val(1);
    }
});
