/*
	LayoutPhoto (Jindo framework was wrapped to aviod conflict with the previous framework)
	
	2007/04/25 (ilzzang , nszon@nszon.com)
	
	2006.06.01 - 좌우측 방향키 및 휠 기능 추가
	2007.10.15 - 드래깅 가능 / 모션처리 / 디자인 변경 
	
	#example 
	
	1) initialize 
		var mlayoutPhoto = new PhotoImageViewer({target:parent,cssurl:"/storyphoto/original_viewer.css"});
		
	2) run
		mlayoutPhoto.doPlayer(_arr,no);
		
	3) require CSS file
*/
var CusorStylePointer="pointer";
var getElementsByClassName2 = function(className, oParent) {
	var a = [].load(($(oParent) || document.body).all || ($(oParent) || document.body).getElementsByTagName("*"));
	var r = new RegExp('(^|\\s)'+className+'($|\\s)','i');
	return a.filter(function(v){ return r.test(v.className); });
}
	var Drag=Class({
		_status : 0, // 상태
		_bug01 : 0, // 마우스 왼쪽 클릭했다가 바로 오른쪽 클릭할때 생기는 버그 
		_tidDelay : null, // 클릭처리 시간
		_coordi : null, // 좌표  저장	
		__init : function() {
			this.obj=arguments[0];
			this.obj._instance=this;
			this.opt=JINDO.extend({
				dragActDelay : 100,
				target: "",
				passEvent : [],
				onMouseDownReady : function() {},			
				onMouseDown : function() {},
				onMouseMove : function() {},			
				onMouseUp : function() {},
				onMouseClick : function() {},
				onDragStatus : function() {}
			},arguments[1] || {});
			this.pobj=arguments[2]; // 넘겨 받은 객체		

			if(this.opt.target) {
				this.doc=$Agent().IE==true ? this.opt.target.document.body : this.opt.target.window;
			}else{				
				this.doc=$Agent().IE==true ? document.body : window; 
			}
			
			// external
			this.onMouseDownReady = function(e) {this.opt.onMouseDownReady.bind(this,e)(e);}
			this.onMouseDown  = function(e) {this.opt.onMouseDown.bind(this,e)(e);}
			this.onMouseMove  = function(e) {this.opt.onMouseMove.bind(this,e)(e);}
			this.onMouseUp    = function(e) {this.opt.onMouseUp.bind(this,e)(e);}
			this.onMouseClick = function(e) {this.opt.onMouseClick.bind(this,e)(e);}

			// internal
			this.onDragReady = this._dragReady.bindForEvent(this);
			this.onDragging  = this._dragging.bindForEvent(this);
			this.onDragEnd   = this._dragEnd.bindForEvent(this);		
			this.onDragFail  = this._dragFail.bind(this);
			this.onClick     = this._click.bindForEvent(this);

			// event
			// onselectstart='return false' ondragstart='return false'
			Event.register(this.doc,"selectstart",function(el){
				//textarea와 input 태그에서는 드래그 가능하게.
				if(!!el.srcElement && el.srcElement.tagName != undefined && el.srcElement.tagName.toLowerCase()!='input' && el.srcElement.tagName.toLowerCase()!='textarea' ) {
                     return false;
                }

			});
			Event.register(this.obj,"selectstart",function(){return false;});
			Event.register(this.obj,"dragstart",function(){return false;});
			Event.register(this.obj,"mousedown",this.onDragReady);
			
			// IE Event Bug
			this._onChkEventIEBug_BrowserMouseOut  = this._chkEventIEBug_BrowserMouseOut.bind(this);
			this._onChkEventIEBug_BrowserMouseOver   = this._chkEventIEBug_BrowserMouseRelease.bind(this);
			this._onChkEventIEBug_BrowserMouseUp   = this._chkEventIEBug_BrowserMouseRelease.bind(this);
			this.oTmpDiv=null;
			this._IEBug_tid=null;
		},
		/* Ie Browser Event Bug */
		_appendEventIEBug_TmpDiv : function() {
			return;
			if(!document.createEventObject) return;
			if(this.oTmpDiv!=null) return;
			
			// window client Size
			var _width=($Agent().IE==true?this.doc.clientWidth:window.innerWidth);
			var _height=($Agent().IE==true?this.doc.clientHeight:window.innerHeight);	

			// tmp element
			if(this.oTmpDiv==null) {
				this.oTmpDiv=this.opt.target.document.createElement("div");
				this.oTmpDiv.id="__oTmpDragDiv__";
				Element.setCSS(this.oTmpDiv,{
					display : "block",
					position:"absolute",
					top:this.doc.scrollTop+"px",
					left:this.doc.scrollLeft+"px",
					width:_width+"px",
					height:_height+"px",
					backgroundColor:"#fff",
					zIndex:"10000",
					filter:"alpha(opacity:0)",
					opacity:0
				});
				this.doc.appendChild(this.oTmpDiv);
			} else {
				this.oTmpDiv=$("__oTmpDragDiv__");
				Element.setCSS(this.oTmpDiv,{
					display : "block",
					top:this.doc.scrollTop+"px",
					left:this.doc.scrollLeft+"px",
					width:_width+"px",
					height:_height+"px",
					backgroundColor:"red",
					zIndex:"10000",
					filter:"alpha(opacity:50)",
					opacity:0.5
				});	
			}
			Event.register(this.oTmpDiv,"mouseout",this._onChkEventIEBug_BrowserMouseOut);
			Event.register(this.oTmpDiv,"mouseover",this._onChkEventIEBug_BrowserMouseOver);
			Event.register(this.oTmpDiv,"mouseup",this._onChkEventIEBug_BrowserMouseUp);
			this.oTmpDiv.style.cursor=this.obj.style.cursor;
		},
		_removeEventIEBug_TmpDiv : function() {
			return;
			if(!document.createEventObject) return;
			if(this.oTmpDiv==null) return;
			Element.setCSS(this.oTmpDiv,{display:"none"});
			
			Event.unregister(this.oTmpDiv,"mouseout",this._onChkEventIEBug_BrowserMouseOut);
			Event.unregister(this.oTmpDiv,"mouseover",this._onChkEventIEBug_BrowserMouseOver);
			Event.unregister(this.oTmpDiv,"mouseup",this._onChkEventIEBug_BrowserMouseUp);	
			this.oTmpDiv=null;			
		},
		_chkEventIEBug_BrowserMouseOut : function() {
			var t=this;
			if(this._IEBug_tid!=null) clearInterval(this._IEBug_tid);
			this._IEBug_tid=setInterval(function(){t._fireEventIEBug_BrowserMouseMove(t.doc);},1);
		},
		_fireEventIEBug_BrowserMouseMove : function(myobj) {
			if(document.createEvent) { // FF 
				var eObj=document.createEvent("MouseEvents");
				eObj.initMouseEvent("mousemove", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null); 
				myobj.dispatchEvent(eObj);
			}else if(document.createEventObject){ // IE
				myobj.fireEvent("onmousemove");
			}
		},
		_chkEventIEBug_BrowserMouseRelease  : function() {
			if(this._IEBug_tid==null) return;
			clearInterval(this._IEBug_tid);
			this._IEBug_tid=null;				
		},
		/*------------------------------- */
		_dragReady : function(e) { // 드래그 시작
			Event.ready(e);	
			this._e=e;
			
			// event pass
			for(var i=0;i<this.opt.passEvent.length;i++) {
				if(e.element===this.opt.passEvent[i] && $Agent().IE==true) return;
				if(e.element.parentNode===this.opt.passEvent[i] && $Agent().IE!=true) return;
			}

			if(e.mouse.left==false) return;
			if(this._bug01==1) return;
			Event.register(this.doc,"mouseup",this.onDragFail);
			Event.register(this.doc,"mouseup",this.onClick);	
			this._tidDelay=setTimeout(function() {
				this._appendEventIEBug_TmpDiv();
				
				if($Agent().IE) {
					this.doc.focus();
				} else {
					this.doc.document.body.focus();
				}
				
				this._dragStart(e);			
			}.bind(this),this.opt.dragActDelay);
			
			if(this.onMouseDownReady(e)==false) this._dragFail();
			Event.stop(e);
		},
		_dragStart : function(e) {
			this._status=0;	
			this._bug01=1;
			Event.unregister(this.doc,"mouseup",this.onDragFail);
			Event.unregister(this.doc,"mouseup",this.onClick);
			Event.register(this.doc,"mousemove",this.onDragging);
			Event.register(this.doc,"mouseup",this.onDragEnd);
			this.onMouseDown(e);
		},
		_dragging : function(e) {
			this._status=1;	
			if(e.mouse.left==false) {
				if(document.createEventObject){ // BTS CAFE-1872 IE Bug 처리  
					this.doc.fireEvent("onmouseup");
					return;
				}
			}
			this.onMouseMove(e);
		},
		_dragEnd : function(e) {
			this._status=0;
			this._tidDelay2=setTimeout(function() {this._bug01=0;}.bind(this),this.opt.dragActDelay);	

			Event.unregister(this.doc,"mousemove",this.onDragging);
			Event.unregister(this.doc,"mouseup",this.onDragEnd);	
			this.onMouseUp(e);
			this._removeEventIEBug_TmpDiv();
		},
		_dragFail : function() {
			if(this._tidDelay!=null) {
				clearTimeout(this._tidDelay);
				this._tidDelay=null;
			}
			Event.unregister(this.doc,"mouseup",this.onDragFail);
		},
		_click : function(e) {
			if(this._status==0) {this.onMouseClick(e);}
			if(this._status==1) {this._dragEnd(e);}
			this._removeEventIEBug_TmpDiv();
			Event.unregister(this.doc,"mouseup",this.onClick);
		},
		setCoordinates : function(obj) {this._coordi=obj;},
		getCoordinates : function() {return this._coordi;},
		restart : function() {Event.register(this.obj,"mousedown",this.onDragReady);},
		stop : function() {
			Event.unregister(this.obj,"mousedown",this.onDragReady);
			Event.unregister(this.doc,"mousemove",this.onDragging);
			Event.unregister(this.doc,"mouseup",this.onDragFail);
			Event.unregister(this.doc,"mouseup",this.onClick);
			Event.unregister(this.doc,"mouseup",this.onDragEnd);
		}
	});
	
	/** @id PhotoImageViewer **/
	var PhotoImageViewer=Class({
		__init : function() {
			this._ref=[];
			this.tid=null;
			this.tidTimeout=null;		
			this.opt=JINDO.extend({
				imageMax : [964,964],
				marginTop : "50px",
				target : parent,
				cssurl : "",
				ndsurl : "",
				gdid : "",
				popupurl : "http://alpha.common.photo.naver.com/storyphoto",
				allowRightMouseClick : true
			},arguments[0]||{});
		
			// PhotoViewer Element Object
			this.oView=null; 
			this.oViewTopFrame=null;
			this.oViewImgParentFrame=null;
			this.oTabNaviFrame=null;
			this.oPhotoCountFrame=null;
			this.oCountCurrentFrame=null;
			this.oCountTotalFrame=null;
			this.oViewCloseButton=null;
			this.oViewPrevButton=null;
			this.oViewNextButton=null;
			this.oViewOriginalButton=null;		

			this.oTid_initialFunction=null;
			this.oTid_imageLoadFunction=null;	
			
			this._bDragUsed=false;
			this._bPrevButton=this._bNextButton=true;
			this._count=0;
			this._no=0;
			this._imageWidthMin=0;
			this._imageHeightMin=0;
			this._orginalViewFlag=false;
			this._mousewheel_lock=false;
			this._oImageWidthMin={
				single : 170,
				more : 350
			};
			
			this._oImageHeightMin={ single : 100, more : 100 }
			this._nObj={};
			this._marginTop=this.opt.marginTop;
	
			// Append Dynamic CSS 
			if(this.opt.cssurl) {
				var elCSS = this.opt.target.document.createElement("LINK");
				elCSS.rel = "stylesheet";
				elCSS.type = "text/css";
				elCSS.href = this.opt.cssurl;

				try {
					var oBody = this.opt.target.document.body;
					if (oBody.firstChild) {
						oBody.insertBefore(elCSS, oBody.firstChild);
					}
				} catch(e){}
			}

			// Append PhotoView Div Layer
			this.appendViewerDiv();
			this.getButtonDiv();
			
			// Append Dragging
			this.appendDragging();

			/*
				Event Binding
			*/
			this.oView.onMouseOut=function(e) {
				if(this.opt.allowRightMouseClick==false) this.opt.target.document.oncontextmenu=new Function("");
			}.bindForEvent(this);
			this.oView.onMouseDown=function(e) {		
				if(this.opt.allowRightMouseClick==false) { 
					this.opt.target.document.oncontextmenu=new Function("return false");
				} else {
					this.opt.target.document.oncontextmenu=new Function("return true");
				}
				if(e.mouse.right==true && this.opt.allowRightMouseClick==false) {
					alert("마우스 오른쪽 버튼은 사용할 수 없습니다. ");
					return ;
				}
			}.bindForEvent(this);
			
			//added by blankus 2008-06-03
			//게시물 우클릭 비허용일때 이미지 드래그 되는 현상 제거
			if(!this.opt.allowRightMouseClick){
        		this.oView.oncontextmenu = new Function("return false");
    			this.oView.onselectstart = new Function("return false"); 
				this.oView.ondragstart = new Function("return false"); 
       		}
       		
			this.oView.ffmousewheel=function(oEvent) {
				// + up , - dn
				if(this._mousewheel_lock==false) {
					this._mousewheel_lock=true;
					setTimeout(function(){this._mousewheel_lock=false;}.bind(this),700);
					oEvent.detail>0 ? this.doNext() : this.doPrev();
				}
				Event.stop(oEvent);				
			}.bindForEvent(this);
						
			this.oView.iemousewheel=function(oEvent) {
				// - up , + dn
				if(this._mousewheel_lock==false) {
					this._mousewheel_lock=true;
					setTimeout(function(){this._mousewheel_lock=false;}.bind(this),700);
					oEvent.wheelDelta<0 ? this.doNext() : this.doPrev();
				}
				Event.stop(oEvent);
			}.bindForEvent(this);
			
	
			this.oView.keydown=function(e) {
				if(this.oView.style.display=="none") return;
				if(e.key.left) {
					this.doPrev();
				}else if(e.key.right) {
					this.doNext();
				}
			}.bindForEvent(this);

			this.oView.onMotionViewer=this._onMotionViewer.bind(this)
			this.oViewPrevButton.onMouseClick=this.doPrev.bind(this);
			this.oViewNextButton.onMouseClick=this.doNext.bind(this);
			this.oViewCloseButton.onMouseClick=this.doClose.bind(this);
			this.oViewOriginalButton.onMouseClick=this.doOrginalView.bindForEvent(this);
			this.oViewImgParentFrame.onMouseOver=this.doOrginalView.bindForEvent(this,"enabled");
			this.oViewImgParentFrame.onMouseOut=this.doOrginalView.bindForEvent(this,"disabled");
			
			var _setButtonStyleChangeBackground=function(obj,url) {obj.element.style.background="url('https://blogimgs.pstatic.net/blog20/blog/layout_photo/viewer2/"+url+"') no-repeat";}
			var _setButtonStyleChangeBackground2=function(obj,url) {obj.style.background="url('https://blogimgs.pstatic.net/blog20/blog/layout_photo/viewer2/"+url+"') no-repeat";}
			this.oViewCloseButton.onMouseUp=function(e){_setButtonStyleChangeBackground(e,"btn_close.gif");}.bindForEvent(this);
			this.oViewCloseButton.onMouseDown=function(e){_setButtonStyleChangeBackground(e,"btn_close_down.gif");}.bindForEvent(this);
			this.oViewCloseButton.onMouseOver=function(e){_setButtonStyleChangeBackground(e,"btn_close_over.gif");}.bindForEvent(this);
			this.oViewPrevButton.setButtonStatus=function(){if(this._bPrevButton==true) _setButtonStyleChangeBackground2(this.oViewPrevButton,"btn_left.gif"); else _setButtonStyleChangeBackground2(this.oViewPrevButton,"btn_left_off.gif");}.bind(this);
			this.oViewNextButton.setButtonStatus=function(){if(this._bNextButton==true) _setButtonStyleChangeBackground2(this.oViewNextButton,"btn_right.gif"); else _setButtonStyleChangeBackground2(this.oViewNextButton,"btn_right_off.gif");}.bind(this);
			this.oViewPrevButton.onMouseUp=function(e){if(this._bPrevButton==false) {_setButtonStyleChangeBackground(e,"btn_left_off.gif"); return;} _setButtonStyleChangeBackground(e,"btn_left.gif");}.bindForEvent(this);
			this.oViewPrevButton.onMouseDown=function(e){if(this._bPrevButton==false) {_setButtonStyleChangeBackground(e,"btn_left_off.gif"); return;} _setButtonStyleChangeBackground(e,"btn_left_down.gif");}.bindForEvent(this);
			this.oViewPrevButton.onMouseOver=function(e){if(this._bPrevButton==false) {_setButtonStyleChangeBackground(e,"btn_left_off.gif"); return;} _setButtonStyleChangeBackground(e,"btn_left_over.gif");}.bindForEvent(this);
			this.oViewPrevButton.onMouseOut=function(e){if(this._bPrevButton==false) {_setButtonStyleChangeBackground(e,"btn_left_off.gif"); return;} _setButtonStyleChangeBackground(e,"btn_left.gif");}.bindForEvent(this);
			this.oViewNextButton.onMouseUp=function(e){if(this._bNextButton==false) {_setButtonStyleChangeBackground(e,"btn_right_off.gif"); return;} _setButtonStyleChangeBackground(e,"btn_right.gif");}.bindForEvent(this);
			this.oViewNextButton.onMouseDown=function(e){if(this._bNextButton==false) {_setButtonStyleChangeBackground(e,"btn_right_off.gif"); return;} _setButtonStyleChangeBackground(e,"btn_right_down.gif");}.bindForEvent(this);
			this.oViewNextButton.onMouseOver=function(e){if(this._bNextButton==false) {_setButtonStyleChangeBackground(e,"btn_right_off.gif"); return;} _setButtonStyleChangeBackground(e,"btn_right_over.gif");}.bindForEvent(this);
			this.oViewNextButton.onMouseOut=function(e){if(this._bNextButton==false) {_setButtonStyleChangeBackground(e,"btn_right_off.gif"); return;} _setButtonStyleChangeBackground(e,"btn_right.gif");}.bindForEvent(this);			

			/*
				Event Register
			*/
			// Viewer 
			Event.register(this.oViewCloseButton,"click",this.oViewCloseButton.onMouseClick);
			Event.register(this.oViewImgFrame,"click",this.oViewCloseButton.onMouseClick);
			Event.register(this.oViewImgParentFrame,"mouseover",this.oViewImgParentFrame.onMouseOver);
			Event.register(this.oViewImgParentFrame,"mouseout",this.oViewImgParentFrame.onMouseOut);
			Event.register(this.oViewOriginalButton,"click",this.oViewOriginalButton.onMouseClick);
			Event.register(this.oViewPrevButton,"click",this.oViewPrevButton.onMouseClick);
			Event.register(this.oViewNextButton,"click",this.oViewNextButton.onMouseClick);
			Event.register(this.oView,"mousedown",this.oView.onMouseDown);
			Event.register(this.oView,"mouseout",this.oView.onMouseOut);
			Event.register(this.oView,"mousewheel",this.oView.iemousewheel);
			Event.register(this.oView,"DOMMouseScroll",this.oView.ffmousewheel);
			
			// Close Button 
			Event.register(this.oViewCloseButton,"mouseup",this.oViewCloseButton.onMouseUp);
			Event.register(this.oViewCloseButton,"mousedown",this.oViewCloseButton.onMouseDown);
			Event.register(this.oViewCloseButton,"mouseover",this.oViewCloseButton.onMouseOver);
		
			// Prev Button
			Event.register(this.oViewPrevButton,"mouseup",this.oViewPrevButton.onMouseUp);
			Event.register(this.oViewPrevButton,"mousedown",this.oViewPrevButton.onMouseDown);
			Event.register(this.oViewPrevButton,"mouseover",this.oViewPrevButton.onMouseOver);
			Event.register(this.oViewPrevButton,"mouseout",this.oViewPrevButton.onMouseOut);	
		
			// Next
			Event.register(this.oViewNextButton,"mouseup",this.oViewNextButton.onMouseUp);
			Event.register(this.oViewNextButton,"mousedown",this.oViewNextButton.onMouseDown);
			Event.register(this.oViewNextButton,"mouseover",this.oViewNextButton.onMouseOver);
			Event.register(this.oViewNextButton,"mouseout",this.oViewNextButton.onMouseOut);
		},
		setNDSControll : function() { // NDS 호출 하는 함수 - CAFESUS-4811 gdid 에 기반한 LCS 코드 개선						
			if(this.opt.ndsurl) {
				this.oNdsIframe.src=this.opt.ndsurl;
				return;
			}
			
			if(this.opt.gdid == null) { // 댓글이미지
				return;
			}
			
			if(this.opt.gdid) {
				try{
					var etc = {};
					etc["sti"] = "cafe_article_image";
					lcs_do_gdid(this.opt.gdid,etc);
				}catch(e) {}
			} else {
				try{
					var etc = {};
					etc["sti"] = "cafe_article_image";
					lcs_do(etc);
				}catch(e) {}
			}
		},
		setAllowRightMouseClick : function(bAllowRightMouseClick) { 
			this.opt.allowRightMouseClick = bAllowRightMouseClick; 
		},
		setGdid : function(sGdid) { 
			this.opt.gdid = sGdid; 
		},
		doPlayer : function (arr,no) {
			Event.register(this.opt.target.document,"keydown",this.oView.keydown);
			Event.register(document,"keydown",this.oView.keydown);
			
			if(document.createEventObject) {
				this.opt.target.document.body.focus(); // keydown 실행을 위해서..
			}else{
				this.oViewNextButton.focus();
			}

			this.setNDSControll(); // nds 추가코드
			this._imageWidthMin=arr.length>1?this._oImageWidthMin.more:this._oImageWidthMin.single; // 가로 최소 사이즈
			this._imageHeightMin=arr.length>1?this._oImageHeightMin.more:this._oImageHeightMin.single; // 세로 최소 사이즈

			// 버튼 가려지는게 IE 에서는 제대로 안된다..  그래서 delay를 주어 렌더링시 반영되도록 했다. (Ie 렌더링 때문에 종료할때도...)
			setTimeout(function() {
				this.oPhotoCountFrame.style.display=(arr.length>1?"block":"none");
				this.oTabNaviFrame.style.display=(arr.length>1?"block":"none");
			}.bind(this),20);
			
			if(arr.length-1>=no) {
				this._ref=arr;
				this._count=arr.length-1;
				this._no=no;

				// 동일한 이미지 일 경우 작동 하지 않도록 !
				if($("photoview") && $("photoview").style.display=="block") {
					if($("photoview").src.indexOf(this._ref[this._no])>-1) return;
				}	

				this.display();
			}
		},
		doClose : function() {
			Event.unregister(this.opt.target.document,"keydown",this.oView.keydown);
			Event.unregister(document,"keydown",this.oView.keydown);
			
			if(this.tid) clearTimeout(this.tid);
			if(this.tidTimeout) clearTimeout(this.tidTimeout);

			// 버튼 및 탭네비는 보이지 않게 
			this.oPhotoCountFrame.style.display="none";
			this.oTabNaviFrame.style.display="none";	
			
			// 포토뷰어가 보이지 않게
			Element.setCSS(this.oView,{display : "none"});
		},
		doPrev : function() {
			if(this._bPrevButton==false) return;
			this.setNDSControll(); // nds 추가코드

			this._no--;
			this._no<0 ? this._no=0 : this.display();
		},	
		doNext : function() {
			if(this._bNextButton==false) return;
			this.setNDSControll(); // nds 추가코드

			this._no++;
			this._no>this._count ? this._no=this._count : this.display();
		},
		_onMotionViewerReady : function(boxMotion,oldScrollLeft,oldScrollTop,func) {
			this._finishedX=null;
			this._finishedY=null;
			this._finishedScrollX=null;
			this._finishedScrollY=null;
			this._sourceX=boxMotion.sourceX;
			this._sourceY=boxMotion.sourceY;
			this._targetX=boxMotion.targetX;
			this._targetY=boxMotion.targetY;
			this._left=boxMotion.left;
			this._oldScrollLeft=oldScrollLeft;
			this._frameDelayTime=0.18;
			this._heightBugId=this.oViewImgFrame.getElementsByTagName("table")[0];

			this._bodyOffsetWidth=($Agent().IE==false?this.opt.target.document.documentElement.offsetWidth:this.opt.target.document.documentElement.offsetWidth-20);
			this._isScroll=true;
			this._isCenterScroll=true;
			this._isRight=false;
			
			// 화면에 보일때 안보일때 판단하고,..
			if($Agent().IE55) {
				var scrollTop=this.opt.target.document.body.scrollTop==0?this.opt.target.document.body.scrollTop:this.opt.target.document.body.scrollTop;	
				var scrollLeft=this.opt.target.document.body.scrollLeft==0?this.opt.target.document.body.scrollLeft:this.opt.target.document.body.scrollLeft;
				var clientWidth=$Agent().IE==true?this.opt.target.document.body.clientWidth:window.innerWidth;
				clientWidth=clientWidth+scrollLeft;
				var clientHeight=$Agent().IE==true?this.opt.target.document.body.clientHeight:window.innerHeight;
			}else{
				var scrollTop=this.opt.target.document.body.scrollTop==0?this.opt.target.document.documentElement.scrollTop:this.opt.target.document.body.scrollTop;	
				var scrollLeft=this.opt.target.document.body.scrollLeft==0?this.opt.target.document.documentElement.scrollLeft:this.opt.target.document.body.scrollLeft;
				var clientWidth=$Agent().IE==true?this.opt.target.document.documentElement.clientWidth:window.innerWidth;
				clientWidth=clientWidth+scrollLeft;
				var clientHeight=$Agent().IE==true?this.opt.target.document.documentElement.clientHeight:window.innerHeight;
			}
			
			// 화면안에 객체가 있고, 드래그 되었을경우 센터 스크롤을 하지 않는다.
			if(oldScrollTop>=scrollTop && 
				scrollTop+clientHeight>=oldScrollTop && 
				oldScrollLeft>=scrollLeft && 
				oldScrollLeft<=clientWidth && 
				this._bDragUsed==true &&
				this.oView.style.display=="block") 
			{
				this._isCenterScroll=false;
			}

			var _obj=this.getPosCenter(this._targetX,this._targetY);
			if(this._isCenterScroll==false) {this._sourceScrollX=this._left;}else{this._sourceScrollX=oldScrollLeft==0?_obj.left:oldScrollLeft;}			
			if(this._isCenterScroll==false) {
				this._targetScrollX=this._left-(this._targetX/2-this._sourceX/2);
			}else{
				if($Agent().IE55) {
					this._targetScrollX=this.opt.target.document.body.clientWidth/2-(this._targetX/2)+this.opt.target.document.body.scrollLeft;
				}else{
					this._targetScrollX=this.opt.target.document.documentElement.clientWidth/2-(this._targetX/2)+this.opt.target.document.documentElement.scrollLeft;
				}
			}

			this._sourceScrollY=oldScrollTop;
			this._targetScrollY=this.opt.target.document.documentElement.scrollTop + parseInt(this._marginTop);
			
			this.oDrag.stop();
			if(this.oTidMoveMotion) clearInterval(this.oTidMoveMotion);
			this.oTidMoveMotion=setInterval(this.oView.onMotionViewer,10);
			this._runFunc=func;
		},
		_onMotionViewer : function() {	
			if(this._finishedX==null) this._sourceX +=this._frameDelayTime*(this._targetX-this._sourceX);
			if(this._finishedY==null) this._sourceY +=this._frameDelayTime*(this._targetY-this._sourceY);
			if(this._finishedScrollX==null) this._sourceScrollX +=this._frameDelayTime*(this._targetScrollX-this._sourceScrollX);
			if(this._finishedScrollY==null) this._sourceScrollY +=0.3*(this._targetScrollY-this._sourceScrollY);

			if(this._isCenterScroll==false) {
				var iNowLeft=this._sourceScrollX;
				if(iNowLeft<0) { iNowLeft=0; } 
			}else{
				if($Agent().IE55) {
					var iCenterScrollLeft=this.opt.target.document.body.clientWidth/2-(this._sourceX/2)+this.opt.target.document.body.scrollLeft;
				}else{
					var iCenterScrollLeft=this.opt.target.document.documentElement.clientWidth/2-(this._sourceX/2)+this.opt.target.document.documentElement.scrollLeft;
				}
				
				var iNowLeft=this._oldScrollLeft==0?iCenterScrollLeft:this._sourceScrollX;
			}
			
			// 포토뷰어 위치 조정
			//if (iNowLeft<0) iNowLeft=iNowLeft*-1;
			Element.setCSS(this.oView,{
				display : "block",
				width : Math.floor(this._sourceX)+"px",
				height : Math.floor(this._sourceY)+"px",
				left : parseInt(iNowLeft)+"px"
			});
			
			// 렌더링 버그에 따라 같이 사이즈를 증감 함.
			Element.setCSS(this.oViewImgFrame,{height : Math.floor(this._sourceY)+"px"});	
			Element.setCSS(this._heightBugId,{height : Math.floor(this._sourceY)+"px"});				
			
			if(this._isCenterScroll==true) {
				var iNowTop=this._sourceScrollY;
				this.oView.style.top=iNowTop+"px";				
			}
			
			// 브라우저 확대 축소 기능을 사용하면 비교군이 정수가 아닐수 있으므로 보정한다.
			this._targetX = Math.ceil(this._targetX);
			this._targetY = Math.ceil(this._targetY);
			this._targetScrollX = Math.ceil(this._targetScrollX);
			this._targetScrollY = Math.ceil(this._targetScrollY);
			
			if(Math.ceil(this._sourceX)==this._targetX || Math.floor(this._sourceX)==this._targetX) this._finishedX=this._targetX;
			if(Math.ceil(this._sourceY)==this._targetY || Math.floor(this._sourceY)==this._targetY) this._finishedY=this._targetY;
			if(Math.ceil(this._sourceScrollX)==this._targetScrollX || Math.floor(this._sourceScrollX)==this._targetScrollX) this._finishedScrollX=this._targetScrollX;
			if(Math.ceil(this._sourceScrollY)==this._targetScrollY || Math.floor(this._sourceScrollY)==this._targetScrollY) this._finishedScrollY=this._targetScrollY;

			if(this._finishedX!=null && this._finishedY!=null && this._finishedScrollY!=null) {
				Element.setCSS(this.oView,{
					width : this._targetX+"px",
					height : this._targetY+"px"
				});

				if(this._runFunc) this._runFunc();
				this._runFunc=null;
				this._finishedX=null;
				this._finishedY=null;
				this._finishedScrollX=null;
				this._finishedScrollY=null;
				this.oDrag.restart();
				clearInterval(this.oTidMoveMotion);
			}
		},
		display : function() {
			var t=this;
			var img=this.img=new Image();
			if(this.tid) clearTimeout(this.tid);
			if(this.tidTimeout) clearTimeout(this.tidTimeout);
			if(this.oTid_initialFunction) clearTimeout(this.oTid_initialFunction);
			if(this.oTid_imageLoadFunction) clearTimeout(this.oTid_imageLoadFunction);
			if(this.oTidMoveMotion) clearInterval(this.oTidMoveMotion);
			
			// now, total string change
			this._bPrevButton=this._no==0?false:true;
			this._bNextButton=this._no>=this._count?false:true;
			this.oViewPrevButton.setButtonStatus();
			this.oViewNextButton.setButtonStatus();
			this.oCountCurrentFrame.innerHTML=parseInt(this._no)+1;
			this.oCountTotalFrame.innerHTML=parseInt(this._count)+1;		
			
			this.setImageLodingAfterDrawLoading(function() {
				// motion  start ----------------
				var scrollTop=this.oView.style.display=="block"? parseInt(this.oView.style.top) : this.opt.target.document.documentElement.scrollTop;
				var scrollLeft=this.oView.style.display=="block"? parseInt(this.oView.style.left) : 0;		
			
				
				if(!this._oldWidth) {
					this._oldWidth=this._imageWidthMin;
					this._oldHeight=this._imageHeightMin;
				}

				var boxMotion={
					sourceX : this._oldWidth,
					sourceY : this._oldHeight,
					targetX : this._oldWidth,
					targetY : this._oldHeight,
					left : parseInt(this.oView.style.left)||0
				};

				this._onMotionViewerReady(boxMotion,scrollLeft,scrollTop);			
			}.bind(this),function() {
				var scrollTop=this.oView.style.display=="block"? parseInt(this.oView.style.top) : this.opt.target.document.documentElement.scrollTop;
				var scrollLeft=this.oView.style.display=="block"? parseInt(this.oView.style.left) : 0;
				
				// image onload
				img.onload=function() {	
					this.__width=this.width;
					this.__height=this.height;				
					if(t.tidTimeout) clearTimeout(t.tidTimeout);

					// width or height 가 일정 이상 클때 
					t._orginalViewFlag=(this.width>=t.opt.imageMax[0] || this.height>=t.opt.imageMax[1]?true:false);
					
					setTimeout(t.doOrginalViewDisplayReset.bind(t),100);
					if(t.opt.imageMax[0]!=0 && t.opt.imageMax[1]!=0) t.setResizeImage(this,t.opt.imageMax[0],t.opt.imageMax[1]);				
					var _width=this.width<t._imageWidthMin?t._imageWidthMin:this.width+6;
					var _height=this.height<t._imageHeightMin?t._imageHeightMin:this.height;
					var _obj=t.getPosCenter(_width,_height);
					t._nObj.width=_width;
					t._nObj.height=_height;
					
					// imgFrame(p) 가로폭 맞춤
					Element.setCSS(t.oViewImgFrame, {width : (_width - 6) + 'px'});
					
					// motion  start ----------------
					if(!t._oldWidth) {
						t._oldWidth=t._imageWidthMin;
						t._oldHeight=t._imageHeightMin;
					}

					var boxMotion={
						sourceX : t._oldWidth,
						sourceY : t._oldHeight,
						targetX : _width,
						targetY : _height,
						left : parseInt(t.oView.style.left)
					};

					// 모션 완료 후에, 이미지 출력
					var afterMotion=function() {
						t.setDraw(this);
					}.bind(this);

					t._onMotionViewerReady(boxMotion,scrollLeft,scrollTop,afterMotion);
					t._oldWidth=_width;
					t._oldHeight=_height;
		
					this.onload=function(){}; // 2006.05.31 bts 1차해결 (레이아웃에서 ani gif 파일을 등록하고 뷰어로 볼때, 해당 이미지만 반복해서 보여집니다)
				};
				
				/* 
					이미지를 재시간에 로드하지 못했을경우에 대한 처리
				*/
				this.tidTimeout=setTimeout(function() {
					if(t.oView.style.display=="none") {
						var _width=300;
						var _height=300;			
						var _obj=t.getPosCenter(_width,_height);
						Element.setCSS(t.oView,{
							width : _width+"px",
							height : _height+"px",
							left : _obj.left+"px",
							top : 50+document.documentElement.scrollTop+"px"
						});
						Element.setCSS(t.oView,{display : "block"});				
					}

					t.setDraw({
						src : "https://blogimgs.pstatic.net/blog20/blog/layout_photo/viewer/img_no_photo2.gif",
						width : 140,
						height : 140
					});
				},2000);
		
				img.src=this._ref[this._no];

			}.bind(this));
		},
		doOrginalView : function(e,viewFlag) {
			if(viewFlag) {
				if(viewFlag=="disabled") {
					var _display="none";
					if(e.layer_x=="undefined" || e.layer_y=="undefined") _display="block";
				}else if(viewFlag=="enabled") {
					var _display=this._orginalViewFlag==true?"block":"none";
				}
				
				Element.setCSS(this.oViewOriginalButton,{
					display:_display,
					cursor:CusorStylePointer
				});
			}else{
				this.doOpenPopup();
			}
			
			Event.stop(e);
		},
		doOrginalViewDisplayReset : function() {
			var _display=this._orginalViewFlag==true?"block":"none";
			Element.setCSS(this.oViewOriginalButton,{
				display:_display
			});			
		},
		setDraw : function(imgobj) {
			this.oViewImgFrame.innerHTML="<table width=100% height=100% cellspacing=0 cellpadding=0 border=0><tr><td align=center valign=middle><img id='photoview' src='"+imgobj.src+"' width='"+imgobj.width+"' height='"+imgobj.height+"' align=absmiddle></td></tr></table>";	
			Element.setCSS(this.oViewImgFrame, {'height':imgobj.height+'px'});
		},
		setImageLodingAfterDrawLoading : function(initialFunction,imageLoadFunction) {
			if(this.oTid_initialFunction) clearTimeout(this.oTid_initialFunction);
			if(this.oTid_imageLoadFunction) clearTimeout(this.oTid_imageLoadFunction);
			
			this.oViewImgFrame.innerHTML="\
				<table width=100% height=100% cellspacing=0 cellpadding=0 border=0>\
				<tr>\
				<td align=center valign=middle>\
					<table height=100 cellspacing=0 cellpadding=0 border=0>\
					<tr>\
					<td height=100><div class=\"loading_layer\">사진을 불러오는 중...</div>\
					</tr>\
					</table>\
				</td>\
				</tr>\
				</table>\
			";

			this.oTid_initialFunction=setTimeout(initialFunction,10);
			this.oTid_imageLoadFunction=setTimeout(imageLoadFunction,30);
		},		
		chkMouseClick : function(e) {
			var r=Element.realPos(this.oView);
			var r2=Element.getCSS(this.oView);
			var x1=r.left;
			var y1=r.top;
			var x2=x1+this.oView.offsetWidth;
			var y2=y1+this.oView.offsetHeight;
			if(x1<=e.page_x && x2>=e.page_x && y1<=e.page_y && y2>=e.page_y) {
			}else{
				this.doClose();
			}
		},
		_setResizeImage : function(obj,max_width,max_height) {
			if(!max_width) {max_width = this._def.oLimitSize.width;}
			if(!max_height) {max_height = this._def.oLimitSize.height;}
			if((obj.width / obj.height) >= (max_width / max_height) && obj.width > max_width) { 
				obj.height = (obj.height*max_width)/obj.width; 
				obj.width = max_width; 
			}else if((obj.width / obj.height) < (max_width / max_height) && obj.height > max_height){
				obj.width = (obj.width*max_height)/obj.height; 
				obj.height = max_height; 
			}
		},
		setResizeImage : function(obj,max_width,max_height) {
			this._setResizeImage(obj,max_width,max_height);
		},
		getPosCenter : function(objWidth,objHeight) {
			if(window.innerWidth) {
				_width=this.opt.target.window.innerWidth;
			}else{
				if(this.opt.target.document.documentElement.clientWidth!=0) {
					_width=this.opt.target.document.documentElement.clientWidth;
				}else{
					_width=this.opt.target.document.body.clientWidth;
				}
			}
			var _height=window.innerHeight ? this.opt.target.window.innerHeight : this.opt.target.document. documentElement.clientHeight;
			var _scrollTop=this.opt.target.document.documentElement.scrollTop!=0 ? this.opt.target.document.documentElement.scrollTop : this.opt.target.document.body.scrollTop;

			if($Agent().IE55==true) {
				_width=top.document.body.clientWidth;
			}

			var _Left=_width/2-(objWidth/2)+this.opt.target.document.documentElement.scrollLeft;
			
			if(_Left<0) _Left=0;
			var _Top=parseInt(this._marginTop)+_scrollTop;

			return {
				left : _Left,
				top : _Top
			};
		},
		appendViewerDiv : function() {
			// Draw Frame
			var oViewer = this.opt.target.document.getElementById('photoviewer');
			var oView = this.oView = (oViewer) ? oViewer : this.opt.target.document.createElement("div");
			oView.id="photoviewer";
			oView.className="photo_view";
			Element.setCSS(oView,{
				position : "absolute",
				display : "none",
				top : this._marginTop,
				left : "100px",
				width : "200px",
				height : "200px",
				zIndex : "1000",
				cursor : CusorStylePointer
			});	

			// Append
			try {
				var oBody = this.opt.target.document.body;
				if (oBody.firstChild) {
					oBody.insertBefore(oView, oBody.firstChild);
				}
			} catch(e) {}			
	
			oView.innerHTML="\
				<div class=\"view_top\">\
					<h3><img src=\"https://blogimgs.pstatic.net/blog20/blog/layout_photo/viewer2/lg_photoviewer.gif\" width=\"133\" height=\"31\" alt=\"NAVER PHOTO VIEWER\"></h3>\
					<div class=\"tab_navi\">\
						<p class=\"btn_left\"><a href=\"#\" onclick=\"return false;\"><img src=\"https://blogimgs.pstatic.net/blog20/blog/layout_photo/viewer2/btn_left.gif\" width=\"31\" height=\"21\" alt=\"이전\"></a></p>\
						<p class=\"btn_right\"><a href=\"#\" onclick=\"return false;\"><img src=\"https://blogimgs.pstatic.net/blog20/blog/layout_photo/viewer2/btn_right.gif\" width=\"32\" height=\"21\" alt=\"다음\"></a></p>\
					</div>\
					<div class=\"photo_count\"><strong><span class=\"current\"></span></strong>&nbsp;/&nbsp;<span class=\"total\"></span></div>\
				</div>\
				<div class=\"photo_album\">\
					<p></p>\
					<a href=\"#\" title=\"원본보기\" class=\"btn_original\"><img src=\"https://blogimgs.pstatic.net/blog20/blog/layout_photo/viewer2/btn_original2.png\" width=\"80\" height=\"80\" alt=\"원본보기\"></a>\
					<div class=\"photo_shadow\"></div>\
				</div>\
				<div class=\"btn_close\" style=\"z-index:2\"><a href=\"#\" onclick=\"return false;\"><img src=\"https://blogimgs.pstatic.net/blog20/blog/layout_photo/viewer2/btn_close.gif\" width=\"23\" height=\"22\" alt=\"닫기\"></a></div>\
				<iframe style=\"display:block;position:absolute;visibility:hidden;width:0px;height:0px;\"></iframe>\
				<iframe frameborder=\"0\" width=\"100%\" height=\"100%\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\"  style=\"filter:alpha(opacity=0);-ms-filter:'alpha(opacity=0)';position:absolute;top:0;left:0;width:100%;height:100%;display:block;background:transparent;\" src=\"\"></iframe>\
			";	

			// getObject Top Frame
			var oViewTopFrame=this.oViewTopFrame=getElementsByClassName2("view_top",this.oView)[0];
			if(!$Agent().IE) this.oViewTopFrame.getElementsByTagName("h3")[0].style.marginBottom="-6px";

			// getObject Image Frame	
			var oViewImgParentFrame=this.oViewImgParentFrame=getElementsByClassName2("photo_album",this.oView)[0];
			var oViewImgFrame=this.oViewImgFrame=oViewImgParentFrame.getElementsByTagName("p")[0];
			
			// getObject tab navi
			var oTabNaviFrame=this.oTabNaviFrame=getElementsByClassName2("tab_navi",this.oView)[0];
			
			// getObject photo count
			var oPhotoCountFrame=this.oPhotoCountFrame=getElementsByClassName2("photo_count",this.oView)[0];
			
			// getObject now count
			var oCountCurrentFrame=this.oCountCurrentFrame=getElementsByClassName2("current",this.oView)[0];				

			// getObject total count
			var oCountTotalFrame=this.oCountTotalFrame=getElementsByClassName2("total",this.oView)[0];
			
			// getObject NDS Controll
			var oNdsIframe=this.oNdsIframe=this.oView.getElementsByTagName("iframe")[0];
		},
		getButtonDiv : function() {
			// getObject Close Button		
			var oViewCloseButton=this.oViewCloseButton=getElementsByClassName2("btn_close",this.oView)[0];
	
			// getObject Prev Button
			this.oViewPrev=getElementsByClassName2("btn_left",this.oView)[0];
			var oViewPrevButton=this.oViewPrevButton=this.oViewPrev.getElementsByTagName("a")[0];
			Element.setCSS(oViewPrevButton,{cursor:CusorStylePointer});			
			
			// getObject Next Button
			this.oViewNext=getElementsByClassName2("btn_right",this.oView)[0];
			var oViewNextButton=this.oViewNextButton=this.oViewNext.getElementsByTagName("a")[0];
			Element.setCSS(oViewNextButton,{cursor:CusorStylePointer});	
			
			// getObject Origninal Button
			var oViewOriginalButton=this.oViewOriginalButton=getElementsByClassName2("btn_original",this.oView)[0];
			Element.setCSS(oViewOriginalButton,{
				display:"none",
				cursor:CusorStylePointer
			});			
			
			// AppendCloseButton
			this.oView.appendChild(oViewCloseButton);
		},
		appendDragging : function() {
			var t=this;

			this.oDrag=new Drag(this.oViewTopFrame,{
				dragActDelay : 100,
				target : this.opt.target,
				passEvent : [this.oViewNextButton,this.oViewPrevButton,this.oViewCloseButton],
				onMouseDownReady : function(e) {
					var objectOffset=Element.realPos(t.oView);
					this.__relativeX=e.page_x-objectOffset.left;
					this.__relativeY=e.page_y-objectOffset.top;
					this.__bodyOffsetWidth=$Agent().IE==false?t.opt.target.document.documentElement.offsetWidth:t.opt.target.document.documentElement.offsetWidth-20;
					t._bDragUsed=true;
					return true;
				},
				onMouseMove : function(e) {
					var __x=e.page_x-this.__relativeX;
					var __y=e.page_y-this.__relativeY;

					if(__y<=0) {__y=0;}

					Element.setCSS(t.oView,{
						left : __x+"px",
						top : __y+"px"
					});
				},
				onMouseClick : function() {}
			});

			Element.setCSS(this.oViewTopFrame,{cursor:"move"});
		},		
		unload : function() {
			this.doClose();
		},
		doOpenPopup : function() {
			// ImageResize Setting
			var popupLeft=(window.screen.width/2)-(this.img.__width/2);
			var popupTop=(window.screen.height/2)-(this.img.__height/2);
			if(popupTop<0) popupTop=10;
			if(popupLeft<0) popupLeft=10;
			
			// Popup Window Setting
			var is_scrollbar=(window.screen.width<this.img.__width || window.screen.height<this.img.__height? "yes" : "no");
			var pop=window.open(this.opt.popupurl+"/viewer.html?src="+encodeURIComponent(this.img.src),'imageviewer','width='+this.img.__width+',height='+this.img.__height+',left='+popupLeft+',top='+popupTop+',directories=no,location=no,menubar=no,scrollbars='+is_scrollbar+',status=no,toolbar=no,resizable=yes');
		}
	});