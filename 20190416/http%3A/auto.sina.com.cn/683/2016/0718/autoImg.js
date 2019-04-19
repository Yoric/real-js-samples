/**
 * Created by chenguang7 on 2016/7/12.
 */

var parameter_img = {img:'',autotime:'',title:'',description:'',sum:'',current:1,thumbail:'',thumbail_num:6};
var urlpath=/^([\S]+)\/[^\/]+$/i.exec(window.location.href)[1]+'/';

function AutoImg(data,parameter_img){
    this.data = eval(data);            //页面中图片信息json数据
    this.currentPage = 1;            //当前图片下标
    this.pageSum;                    //图集图片总数
    this.pageSumHtml;               //显示图集图片总数元素
    this.imgBox;                    //显示图片元素
    this.description;              //显示图片描述元素
    this.thumbnail;                //缩略图元素
    this.thumbnail_num=6;         //缩略图个数
    this.thumbnail_page=1;        //缩略图分页数
    this.isLastPage = false;    //判断是否是最后一页
    this.isFirstPage = true;   //判断是否是第一页
    this.currentHtml;          //当前图片小标显示元素
    this.next_href=urlpath;  //图集链接href

    if(data===undefined||data===null||data.status!=1){
        window.loaction.href='http://auto.sina.com.cn/404/';
        return false;
    }

    //获取参数
    for(var i in parameter_img){
        switch(i){
            case 'img':
                this.imgBox=$(parameter_img[i]).attr('src',data.data.picList[0]['url']).width('100%');
                break;
            case 'description':
                this.description=$(parameter_img[i]).html(data.data.picList[0]['picDesc']==''?data.data.picList[0]['picName']:data.data.picList[0]['picDesc']);
                break;
            case 'title':
                this.title=$(parameter_img[i]).html(data.data.currentGallery.galleryName).attr({'href':urlpath+'g'+data.data.currentGallery.galleryId+'-'+data.data.currentGallery.source+'.html','title':data.data.currentGallery.galleryName});
                break;
            case 'sum':
                this.pageSumHtml=$(parameter_img[i]).html(data.data.countPic);
                this.pageSum=parseInt(data.data.countPic);
                break;
            case 'current':
                this.currentHtml=$(parameter_img[i]).html(this.currentPage);
                break;
            case 'thumbnail':
                this.thumbnail=$(parameter_img[i]).css({'height':'100%'});
                break;
            case 'thumbnail_num':
                this.thumbnail_num=$(parameter_img[i]);
                break;
        }
    }
    //缩略图
    if(this.thumbnail!==undefined && this.thumbnail!==null && this.thumbnail.size()>0){
        var thumbnailHtml='';
        var x=this.thumbnail_num;
        if(this.pageSum < this.thumbnail_num){
            this.thumbnail_num=this.pageSum;
            x=this.thumbnail_num;
        }else{
            x=this.thumbnail_num*2>this.pageSum?this.pageSum:this.thumbnail_num*2;
        }
        for(var i=0;i<x;i++){
            if(i==0){
                thumbnailHtml+='<li class="cur"><a href="javascript:void(0)"><img src="'+data.data.picList[i]['url'].replace(/\.([^\.]+)$/i,'_150.$1')+'"></a><div class="active"></div></li>';
            }else{
                thumbnailHtml+='<li class=""><a href="javascript:void(0)"><img src="'+data.data.picList[i]['url'].replace(/\.([^\.]+)$/i,'_150.$1')+'"></a></li>';
            }
        }
        this.thumbnail.html(thumbnailHtml);

        this.thumbnail_creat=function(n){
            var n=parseInt(n);
            var thumbnailHtml='';
            var startn=0,overn=0;
            this.thumbnail_page=Math.ceil(n/this.thumbnail_num);
            startn=(this.thumbnail_page-1)*this.thumbnail_num;
            overn=startn + this.thumbnail_num*2>this.pageSum?this.pageSum:startn + this.thumbnail_num*2;

            for (var i = startn; i < overn; i++) {
                if (i == n-1) {
                    thumbnailHtml += '<li class="cur"><a href="javascript:void(0)"><img src="' + data.data.picList[i]['url'].replace(/\.([^\.]+)$/i,'_150.$1') + '"></a><div class="active"></div></li>';
                } else {
                    thumbnailHtml += '<li class=""><a href="javascript:void(0)"><img src="' + data.data.picList[i]['url'].replace(/\.([^\.]+)$/i,'_150.$1') + '"></a></li>';
                }

            }
            this.thumbnail.html(thumbnailHtml);
        }
    }
}
//下一页
AutoImg.prototype.next = function(){
    this.isFirstPage=false;
    if(this.isLastPage){
        this.next_href=urlpath+'g'+data.data.nextGallery.galleryId+'-'+data.data.nextGallery.source+'.html';
        window.location.href=this.next_href;
        this.currentPage = 0;
        this.isLastPage = false;
        this.isFirstPage=true;
    }
    var p = this.currentPage+1;
    if(p>this.pageSum-1){
        this.isLastPage = true;
    }
    this.roll(p);
    SUDA.uaTrack("photo","clicknext___");
    var para=window.location.href+"?photoid="+data.data.picList[p-1]["id"]+"&r="+Math.floor(Math.random()*1000000000);
    SUDA.log && SUDA.log('','',para);

}
//上一页
AutoImg.prototype.prev = function(){
    this.isLastPage=false;
    if(this.isFirstPage){
        if(data.data.prevGallery && data.data.prevGallery.galleryId){
            var previd='';
            if(data.data.prevGallery.lastPicId && data.data.prevGallery.lastPicId!==null && data.data.prevGallery.lastPicId>0){
                previd='#'+data.data.prevGallery.lastPicId;
            }else{
                previd='';
            }
            window.location.href=urlpath+'g'+data.data.prevGallery.galleryId+'-'+data.data.prevGallery.source+'.html'+previd;
        }
        this.currentPage = this.pageSum+1;
        this.isFirstPage = false;
        this.isLastPage=true;
    }
    var p = this.currentPage-1;
    if(p == 1){
        this.isFirstPage = true;
    }
    this.roll(p);
    SUDA.uaTrack("photo","clickprev___");
    var para=window.location.href+"?photoid="+data.data.picList[p-1]["id"]+"&r="+Math.floor(Math.random()*1000000000);
    SUDA.log && SUDA.log('','',para);

}
//显示图片信息
AutoImg.prototype.roll = function(p){

    var p=parseInt(p);
    this.imgBox.attr('src',data.data.picList[p-1]['url'].replace(/\.([^\.]+)$/i,'_950.$1'));
    this.description.html(data.data.picList[p-1]['picDesc']==''?data.data.picList[p-1]['picName']:data.data.picList[p-1]['picDesc']);
    this.currentPage=p;
    this.currentHtml.html(this.currentPage);
    var i=p%this.thumbnail_num;
    this.thumbnail.find(".active").remove();
    this.thumbnail.find("li").removeClass("cur");
    if(this.thumbnail_page>1){
        this.thumbnail.find("li").eq(p-1-this.thumbnail_num*(this.thumbnail_page-1)).addClass("cur").append('<div class="active"></div>');
    }else{
        this.thumbnail.find("li").eq(p-1).addClass("cur").append('<div class="active"></div>');
    }

    this.thumbnail_creat(p);

    this.thumbnail_page=Math.ceil(this.currentPage/this.thumbnail_num);
    // if(data.data.picList[p-1]['url'].indexOf('_950')>-1){
    //     $(".download").attr('href',data.data.picList[p-1]['url'].replace('_950','_src'));
    // }else{
    //     $(".download").attr('href',data.data.picList[p-1]['url'].replace(/\.([^\.]+)$/i,'_src.$1'));
    // }
    if(data.data.picList[p-1]['url'].indexOf('_950')>-1){
        $(".download").attr('href',data.data.picList[p-1]['url']);
    }else{
        $(".download").attr('href',data.data.picList[p-1]['url'].replace(/\.([^\.]+)$/i,'_950.$1'));
    }
    window.location.hash='#'+data.data.picList[p-1]['id'];
}
//缩略图下一页
AutoImg.prototype.thumbnail_next=function(){
    this.thumbnail_page++;
    if(this.thumbnail_page>Math.ceil(this.pageSum/this.thumbnail_num)){
        this.thumbnail_page=Math.ceil(this.pageSum/this.thumbnail_num);
        return false;
    }

    this.currentPage=(this.thumbnail_page-1)*this.thumbnail_num+1;
    this.currentPage=this.currentPage>this.pageSum?this.pageSum:this.currentPage;
    this.isFirstPage=false;
    this.isLastPage=false;
    if(this.currentPage==this.pageSum) {
        this.isLastPage=true;
    }
    this.currentHtml.html(this.currentPage);
    this.roll(this.currentPage);
}
//缩略图上一页
AutoImg.prototype.thumbnail_prev=function(){
    this.thumbnail_page--;
    if(this.thumbnail_page<1){
        this.thumbnail_page=1;
        return false;
    }
    this.currentPage=(this.thumbnail_page-1)*this.thumbnail_num+this.thumbnail_num;
    this.currentPage=this.currentPage<1?1:this.currentPage;
    this.isLastPage=false;
    if(this.currentPage==1){
        this.isFirstPage=true;
    }

    this.currentHtml.html(this.currentPage);
    this.thumbnail_page=Math.ceil(this.currentPage/this.thumbnail_num);
    this.roll(this.currentPage);
}

$(function(){

    if($(".main_wrap .nav").attr("data-sudaclick")!='suda_photov3_picture_2'){
        //非车型图集
        parameter_img.img='.pic_big';                            //大图显示容器元素id
        parameter_img.description='.main_summary';            //图片描述元素id
        parameter_img.title='.header h1 a';                  //图集标题元素id
        parameter_img.sum='.index > strong';                             //图片总数显示元素id
        parameter_img.current='.index > em';                        //当前图片下标数显示元素id
        parameter_img.thumbnail='.scroll-pane';               //缩略图容器元素id

        //图片显示方法
        var autoimg = new AutoImg(data,parameter_img);
        var nhreg=window.location.href.replace(/\/([^\/]+)?.html([\s\S]+)?$/ig,'');
        autoimg.next_href=urlpath+'g'+data.data.nextGallery.galleryId+'-'+data.data.nextGallery.galleryType+'.html';
        var picid=/#(\d+)/ig.test(window.location.href)?/#(\d+)/ig.exec(window.location.href)[1]:data.data.picList[0]['id'];

        for(var i in data.data.picList){
            if(picid==data.data.picList[i]['id']){
                autoimg.roll(parseInt(i)+1);
                if(i==0){
                    autoimg.isFirstPage=true;
                    autoimg.isLastPage=false;
                }else{
                    if(i==data.data.picList.length-1){
                        autoimg.isFirstPage=false;
                        autoimg.isLastPage=true;
                    }else{
                        autoimg.isFirstPage=false;
                        autoimg.isLastPage=false;
                    }
                }
            }
        }
        //$(".download").attr('href',$(".pic_big").attr('src').replace('_950','_src'));
        $(".download").attr('href',$(".pic_big").attr('src'));
        $("#share_txt").attr("share_txt_value",data.data.picList[0]['picName']);
        //$("#comment_value").attr('params','channel=qc&newsid=33-HD-'+data.data.currentGallery.galleryId+'&style=0');
        //params = $('#comment_value').attr('params').split('&');

//上一张图片
        $(".btn_left").bind("click",function(){
            autoimg.prev();
        });
//下一张图片
        $(".btn_right").bind("click",function(){
            autoimg.next();
        });
//下一组图片
        $("#right_arrow").bind("click",function(){
            autoimg.thumbnail_next();
        });
//上一组图片
        $("#left_arrow").bind("click",function(){
            autoimg.thumbnail_prev();
        });
//缩略图浏览
        $(".scroll-pane li").live("click",function(){
            var p=1;
            if(autoimg.thumbnail_page>1){
                p=$(this).index()+1+autoimg.thumbnail_num*(autoimg.thumbnail_page-1);
            }else{
                p=$(this).index()+1;
            }
            autoimg.roll(p);
        });
//下载按钮
        try{
            //$('.side_btns .download').attr("href", $("#img_box").attr("src").replace('_950','_src') );
            $('.side_btns .download').attr("href", $("#img_box").attr("src") );
        }
        catch(e){}

        $(document).keydown(function(event){
            if(event.keyCode == 37) {
                autoimg.prev();
                event.preventDefault();
            } else if(event.keyCode == 39) {
                autoimg.next();
                event.preventDefault();
            }
        });

    }else{
        //车型图集

    }

});
