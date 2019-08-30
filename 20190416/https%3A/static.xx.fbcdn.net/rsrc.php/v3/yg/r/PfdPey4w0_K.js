if (self.CavalryLogger) { CavalryLogger.start_js(["FjeO4"]); }

__d("AbstractSelector.react",["cx","invariant","ContextualLayerAutoFlip","InlineBlock.react","PopoverMenu.react","PopoverMenuContextMinWidth","PopoverMenuOverlappingBorder","React","ReactSelectorUtils","intlList","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();c=b("React").PropTypes;function a(a,b,c){if(a[b]==null)return;c=Array.isArray(a[b]);if(a.multiple){if(!c)return new Error("You are trying to set a single value for `"+b+"` but the menu has `multiple` set to true, so it should be an array of values.")}else if(c)return new Error("You are trying to set an array of values for `"+b+"` but the menu has `multiple` set to false, so it should be a single value.")}d=b("React").createClass({displayName:"AbstractSelector",propTypes:{config:c.object.isRequired,alignh:c.oneOf(["left","center","right"]),name:c.string,overlappingborder:c.bool,onChange:c.func,disabled:c.bool,maxheight:c.number,multiple:c.bool,defaultLabel:c.string,defaultValue:a,value:a,initialValue:a,onReturnWithoutFocusedItem:c.func,onHide:c.func,onShow:c.func},getInitialState:function(){return{value:this.props.value!=null?this.props.value:this.props.defaultValue!=null?this.props.defaultValue:this.props.initialValue}},setMenuValue:function(a){this.refs&&this.refs.popover||h(0,1741),this._internalChange=!0,this.refs.popover.getMenu().setValue(a),this._internalChange=!1},onChange:function(a,b){if(this._internalChange)return;if(this.props.value==null){this.props.multiple?a=b.map(function(a){return a.value}):a=b.value;this.setState({value:a})}else this.setMenuValue(this.props.value);this.props.onChange&&this.props.onChange(b)},UNSAFE_componentWillReceiveProps:function(a){a.value!=null?this.setState({value:a.value}):this.props.multiple!==a.multiple&&this.setState({value:a.multiple?[this.state.value]:this.state.value[0]})},render:function(){__p&&__p();var a=this.props.config,c=this.props.multiple?b("ReactSelectorUtils").processMultiMenuItems(this.props.children,this.state.value):b("ReactSelectorUtils").processMenuItems(this.props.children,this.state.value),d=b("React").cloneElement(a.menu,{children:c.items,className:b("joinClasses")("_575t",a.menu.props.className),maxheight:this.props.maxheight,onChange:this.onChange}),e="",f=null;if(!this.props.multiple){var g=c.selectedItem;e=g.props.label||g.props.children;g.props.icon&&(f=b("React").cloneElement(g.props.icon,{}))}else{g=c.selectedItems;!g.length?e=this.props.defaultLabel:e=b("intlList")(g.map(function(a){return a.props.children}),b("intlList").CONJUNCTIONS.NONE)}c={label:e,disabled:this.props.disabled};f&&(c.image=f);g=b("React").cloneElement(a.button,c);e=[b("ContextualLayerAutoFlip")];a.layerBehaviors&&(e=e.concat(a.layerBehaviors));f=[b("PopoverMenuContextMinWidth")];this.props.overlappingborder&&f.push(b("PopoverMenuOverlappingBorder"));c=null;if(this.props.multiple){var h=this.props.name+"[]",i;this.state.value&&(i=this.state.value.map(function(a){return b("React").createElement("input",{key:a,type:"hidden",name:h,value:a})}));c=b("React").createElement("div",null,i)}else c=b("React").createElement("input",{type:"hidden",name:this.props.name,value:this.state.value});return b("React").createElement(b("InlineBlock.react"),babelHelpers["extends"]({},this.props,{alignv:"middle",name:null}),b("React").createElement(b("PopoverMenu.react"),{alignh:this.props.alignh,behaviors:f,disabled:this.props.disabled,layerBehaviors:e,menu:d,position:this.props.position,onReturnWithoutFocusedItem:this.props.onReturnWithoutFocusedItem,onHide:this.props.onHide,onShow:this.props.onShow,ref:"popover"},g),c)},showMenu:function(){this.isMounted()||h(0,1742),this.refs.popover.showPopover()},showAndFocusMenu:function(){this.isMounted()||h(0,1743),this.refs.popover.showPopover(!0)},hideMenu:function(){this.isMounted()||h(0,1744),this.refs.popover.hidePopover()}});e.exports=d}),null);