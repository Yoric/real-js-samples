(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-7.4,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(-78.2,-33.4,141.7,64.3), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAFBlQgqAAgUACQADgjAAgwIAAgnQAAgvgDgkIA1ACQAxAAAMgCIgBANIABANQg0gDgOAAQgBAWAAArIBCgDIgBAOIABALQgmgDgcAAIAAAmIABAmQAdAAAlgEIgBANIABANQgYgCgcAAg");
	this.shape.setTransform(195.8,12,0.717,0.716);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8BOQgdgbAAgsQABg5AjgdQAggaAyAAQAPAAASADQASAEAJAHQgFANgCASIgDAAQgWgbgeAAQgbAAgRAVQgXAaABArQAAArAWAWQASAUAdAAQAOAAAQgGQAOgGAKgKIAEACQgFAOgCAMQgXAMgmAAQgxAAgfgcg");
	this.shape_1.setTransform(183,12,0.717,0.716);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABMBlIgMACQg/hKhChGIgBBFQAAA1ACAWIgOgCIgOACQACgIACguQACgzAAgoIgBg8IANACQAHAAAHgCICACNQAAh/gCgOIANACQAHAAAHgCQgFBXAAB2g");
	this.shape_2.setTransform(167.6,12,0.717,0.716);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABFBmIgaABIgUg9IhEAAQgLAbgJAiIgPgBIgOABQAvhqAmhkIAKACIAMgCQAzCMAfBCIgagBgAglAZIA1AAQgPgrgKgbQgMAbgQArg");
	this.shape_3.setTransform(152.2,11.9,0.717,0.716);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABLBlIgLACQg+hKhDhGIgBBFQAAAqACAhIgOgCIgNACQABgIACguQADgzgBgoIgBg8IAOACQAHAAAFgCICBCNQAAh/gCgOIAOACQAHAAAFgCQgEBXAAB2IgNgCg");
	this.shape_4.setTransform(137.1,12,0.717,0.716);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAABlIgXACQACgjAAgwIAAgnQAAgvgCgkQAKACANAAQAPAAAJgCQgCAkAAAvIAAAnQAAAwACAjIgYgCg");
	this.shape_5.setTransform(125.3,12,0.717,0.716);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggBlIgZACQADghAAgyIAAgnQAAgygDghIA1ACQAxAAANgCQgCAGAAAHQAAAHACAGIhDgDQgBAWAAArIBCgDIgBAOIABALQglgDgdAAIAAAPQAAAyACAhIgYgCg");
	this.shape_6.setTransform(116.7,12,0.717,0.716);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCAVQgFgBgEgCQgDgCgDgDIgEgHIAAgIQABgFACgEQADgEADgCIAHgDIAIAAIAJADIAGAFQADAEAAAEQABAEgBADQgBAGgCADQgCAEgDACQgDACgFABg");
	this.shape_7.setTransform(98.5,22.5,0.717,0.716);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYB/IgJAAIAGgrQAGgrADgsIAJhrIAAgBIADgJIADgDIAAAAIADgDIAGgDIAJAAIAAABIACAAIAHACIAGAFIAAABIACADIAAAAIABADIAAABQACADgBAGIgZBoQgQBHgKA7QgDgCgEgBg");
	this.shape_8.setTransform(101,9.6,0.717,0.716);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABcCBQgLABgKACIADh6IiSAAIAAAYIABAyIACAwQgLgCgLgBQgMABgKACIAAkHQAKACAMAAQALAAALgCIgCAzIgBAxIgBAXICTAAIgEh7QALACALAAQAMAAAKgCIgDClIADBiQgJgCgNgBg");
	this.shape_9.setTransform(42.1,12,0.717,0.716);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABrCBQgLABgLACIgfhNIhrAAIgfBNQgKgCgMgBQgLABgLACIAEgIQAhg8BKi9IADgGIABAAQAFADAIgBQAIABAHgDIABAAIACAGQBJC4AiBBIAEAIQgLgCgLgBgAAvAlQgqhpgFgSQgCAKgsBxIBdAAIAAAAg");
	this.shape_10.setTransform(23.6,12,0.717,0.716);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAClQgKAAgLACIADhNIABhCIhyi/IAKADIAUAAIALgCIADgBQATAkBEBwQBFhwATgkQALADALAAIAUgCIACgBIgIAOQgKAOgOAZIgfA1IgyBVIADCPQgLgCgLAAg");
	this.shape_11.setTransform(9.5,12,0.717,0.716);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag5B/QgagJgTgRQgSgSgLgZQgKgZAAghQAAgfAKgZQAKgZATgSQAUgSAZgJQAbgJAeAAQAgAAAaAJQAaAJATASIAAABQATARAKAZQAJAWABAgIAAACQABAhgLAZQgLAagSARQgTARgaAJQgaAJggAAQgeAAgbgJgAgmhwQgSAHgNAPQgNAPgIAXQgIAWABAeQgBAgAIAWQAIAXANAPQAMAOATAIQATAHATAAQAVAAATgHQASgIANgOQANgOAIgYQAIgWAAggQAAgegIgWQgJgYgMgOQgOgPgRgHQgRgHgXAAQgVAAgRAHg");
	this.shape_12.setTransform(61.5,12,0.717,0.716);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhCCOQgcgJgYgUQgWgUgLgcQgMgcgBgkQABgjAMgdQALgcAWgUQAUgQAYgLIAIgCQAfgLAjAAQAlAAAeALIAOAFQAWAKAQAOQAWAUALAcQAMAcABAkQgBAkgMAcQgLAcgWAUIgKAIQgSANgUAGIgEACQgfAKgkAAQgjAAgfgKgAgvh/IgRAIQgMAHgJAKQgQAQgKAaQgJAaAAAiQAAAjAJAaQAIAUAKANQAEAGAEADQAPAQAXAJQAYAIAXAAQAYAAAYgIIANgHQANgGAMgMQAQgRAKgZQAJgZAAgkQAAgjgJgZQgKgZgQgRQgQgQgWgJQgYgIgYAAQgXAAgYAIg");
	this.shape_13.setTransform(84.6,12,0.717,0.716);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,200,24), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0F7CE5").ss(1,1).p("AhKAzICVhl");
	this.shape.setTransform(529.3,93.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0F7CE5").p("EgnnAFrICWghICVhhICVnVICVBfICViZICVg6ICViVICVENICViwICWA8ICVj9ICVHbICVgcICVEyICVhdICVCeICVEeICUBpICWiPICVlbICViRICVAeICVmWICVB+ICVCbICVhdICVjRICVGQICVDBICVg2ICVBpICVC7ICVhMICVCG");
	this.shape_1.setTransform(790.3,52.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3122D").s().p("Ag1BUIAAinIBrAAIAACng");
	this.shape_2.setTransform(543.5,164.2,1.242,1.242);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E3122D").s().p("Ag1BfIAAi9IBrAAIAAC9g");
	this.shape_3.setTransform(647.8,162.9,1.242,1.242);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E3122D").s().p("Ag1BRIAAigIBrAAIAACgg");
	this.shape_4.setTransform(632.9,164.7,1.242,1.242);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#25A960").s().p("Ag1AOIAAgbIBrAAIAAAbg");
	this.shape_5.setTransform(1035.5,168,1.242,4.901);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E3122D").s().p("Ag1AtIAAhZIBrAAIAABZg");
	this.shape_6.setTransform(1020.6,169.1,1.242,1.242);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#25A960").s().p("Ag1AtIAAhZIBrAAIAABZg");
	this.shape_7.setTransform(1005.7,169.1,1.242,1.242);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E3122D").s().p("Ag1BWIAAirIBrAAIAACrg");
	this.shape_8.setTransform(990.8,164,1.242,1.242);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#25A960").s().p("Ag1BCIAAiDIBrAAIAACDg");
	this.shape_9.setTransform(975.9,166.4,1.242,1.242);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#25A960").s().p("Ag1BwIAAjfIBrAAIAADfg");
	this.shape_10.setTransform(961,160.8,1.242,1.242);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#25A960").s().p("Ag1BWIAAirIBrAAIAACrg");
	this.shape_11.setTransform(946,164,1.242,1.242);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#25A960").s().p("Ag1BPIAAidIBrAAIAACdg");
	this.shape_12.setTransform(931.1,164.8,1.242,1.242);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E3122D").s().p("Ag1AtIAAhZIBrAAIAABZg");
	this.shape_13.setTransform(916.2,169.1,1.242,1.242);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E3122D").s().p("Ag1C0IAAlnIBrAAIAAFng");
	this.shape_14.setTransform(901.3,152.3,1.242,1.242);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#25A960").s().p("Ag1B9IAAj5IBrAAIAAD5g");
	this.shape_15.setTransform(886.4,159.1,1.242,1.242);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E3122D").s().p("Ag1BpIAAjRIBrAAIAADRg");
	this.shape_16.setTransform(871.5,161.7,1.242,1.242);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E3122D").s().p("Ag1C+IAAl7IBrAAIAAF7g");
	this.shape_17.setTransform(856.6,151.1,1.242,1.242);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#25A960").s().p("Ag1CQIAAkfIBrAAIAAEfg");
	this.shape_18.setTransform(841.7,156.8,1.242,1.242);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#25A960").s().p("Ag1A0IAAhnIBrAAIAABng");
	this.shape_19.setTransform(528.6,168.2,1.242,1.242);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#25A960").s().p("Ag1A0IAAhnIBrAAIAABng");
	this.shape_20.setTransform(826.8,168.2,1.242,1.242);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E3122D").s().p("Ag1BMIAAiXIBrAAIAACXg");
	this.shape_21.setTransform(782,165.3,1.242,1.242);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#25A960").s().p("Ag1BlIAAjJIBrAAIAADJg");
	this.shape_22.setTransform(811.8,162.2,1.242,1.242);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#25A960").s().p("Ag1BhIAAjBIBrAAIAADBg");
	this.shape_23.setTransform(796.9,162.7,1.242,1.242);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E3122D").s().p("Ag1AtIAAhZIBrAAIAABZg");
	this.shape_24.setTransform(752.2,169.1,1.242,1.242);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E3122D").s().p("Ag1BlIAAjJIBrAAIAADJg");
	this.shape_25.setTransform(737.3,162.2,1.242,1.242);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E3122D").s().p("Ag1BMIAAiXIBrAAIAACXg");
	this.shape_26.setTransform(692.6,165.3,1.242,1.242);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E3122D").s().p("Ag1C5IAAlxIBrAAIAAFxg");
	this.shape_27.setTransform(662.7,151.7,1.242,1.242);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E3122D").s().p("Ag1AtIAAhZIBrAAIAABZg");
	this.shape_28.setTransform(588.2,169.1,1.242,1.242);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E3122D").s().p("Ag1BMIAAiXIBrAAIAACXg");
	this.shape_29.setTransform(573.3,165.3,1.242,1.242);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E3122D").s().p("Ag1BvIAAjdIBrAAIAADdg");
	this.shape_30.setTransform(603.1,160.9,1.242,1.242);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#25A960").s().p("Ag1BqIAAjTIBrAAIAADTg");
	this.shape_31.setTransform(767.1,161.6,1.242,1.242);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#25A960").s().p("Ag1BRIAAigIBrAAIAACgg");
	this.shape_32.setTransform(722.4,164.7,1.242,1.242);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#25A960").s().p("Ag1BFIAAiJIBrAAIAACJg");
	this.shape_33.setTransform(707.5,166.1,1.242,1.242);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#25A960").s().p("Ag1BvIAAjdIBrAAIAADdg");
	this.shape_34.setTransform(677.6,160.9,1.242,1.242);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#25A960").s().p("Ag1AtIAAhZIBrAAIAABZg");
	this.shape_35.setTransform(618,169.1,1.242,1.242);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#25A960").s().p("Ag1BlIAAjJIBrAAIAADJg");
	this.shape_36.setTransform(558.4,162.2,1.242,1.242);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#0F7CE5").ss(1,1).p("EgowAHRICVhmICWghICVhhICVnVICVBfICViZICVg6ICViVICVENICViwICWA8ICVj9ICVHbICVgcICVEyICVhdICVCeICUEeICVBpICWiPICVlbICViRICVAeICVmWICVB+ICVCbICVhdICVjRICVGQICVDBICVg2ICVBpICVC7ICVhMICVCG");
	this.shape_37.setTransform(260.9,52.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E3122D").s().p("Ag1BUIAAinIBrAAIAACng");
	this.shape_38.setTransform(21.7,164.2,1.242,1.242);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E3122D").s().p("Ag1BfIAAi9IBrAAIAAC9g");
	this.shape_39.setTransform(126,162.9,1.242,1.242);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E3122D").s().p("Ag1BRIAAigIBrAAIAACgg");
	this.shape_40.setTransform(111.1,164.7,1.242,1.242);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E3122D").s().p("Ag1AOIAAgbIBrAAIAAAbg");
	this.shape_41.setTransform(513.7,172.9,1.242,1.242);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E3122D").s().p("Ag1AtIAAhZIBrAAIAABZg");
	this.shape_42.setTransform(498.8,169.1,1.242,1.242);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#25A960").s().p("Ag1AtIAAhZIBrAAIAABZg");
	this.shape_43.setTransform(483.9,169.1,1.242,1.242);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E3122D").s().p("Ag1BWIAAirIBrAAIAACrg");
	this.shape_44.setTransform(469,164,1.242,1.242);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#25A960").s().p("Ag1BCIAAiDIBrAAIAACDg");
	this.shape_45.setTransform(454.1,166.4,1.242,1.242);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#25A960").s().p("Ag1BwIAAjfIBrAAIAADfg");
	this.shape_46.setTransform(439.2,160.8,1.242,1.242);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#25A960").s().p("Ag1BWIAAirIBrAAIAACrg");
	this.shape_47.setTransform(424.2,164,1.242,1.242);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#25A960").s().p("Ag1BPIAAidIBrAAIAACdg");
	this.shape_48.setTransform(409.3,164.8,1.242,1.242);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E3122D").s().p("Ag1AtIAAhZIBrAAIAABZg");
	this.shape_49.setTransform(394.4,169.1,1.242,1.242);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E3122D").s().p("Ag1C0IAAlnIBrAAIAAFng");
	this.shape_50.setTransform(379.5,152.3,1.242,1.242);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#25A960").s().p("Ag1B9IAAj5IBrAAIAAD5g");
	this.shape_51.setTransform(364.6,159.1,1.242,1.242);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E3122D").s().p("Ag1BpIAAjRIBrAAIAADRg");
	this.shape_52.setTransform(349.7,161.7,1.242,1.242);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E3122D").s().p("Ag1C+IAAl7IBrAAIAAF7g");
	this.shape_53.setTransform(334.8,151.1,1.242,1.242);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#25A960").s().p("Ag1CQIAAkfIBrAAIAAEfg");
	this.shape_54.setTransform(319.9,156.8,1.242,1.242);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#25A960").s().p("Ag1A0IAAhnIBrAAIAABng");
	this.shape_55.setTransform(6.8,168.2,1.242,1.242);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#25A960").s().p("Ag1A0IAAhnIBrAAIAABng");
	this.shape_56.setTransform(305,168.2,1.242,1.242);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E3122D").s().p("Ag1BMIAAiXIBrAAIAACXg");
	this.shape_57.setTransform(260.2,165.3,1.242,1.242);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#25A960").s().p("Ag1BlIAAjJIBrAAIAADJg");
	this.shape_58.setTransform(290,162.2,1.242,1.242);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#25A960").s().p("Ag1BhIAAjBIBrAAIAADBg");
	this.shape_59.setTransform(275.1,162.7,1.242,1.242);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E3122D").s().p("Ag1AtIAAhZIBrAAIAABZg");
	this.shape_60.setTransform(230.4,169.1,1.242,1.242);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E3122D").s().p("Ag1BlIAAjJIBrAAIAADJg");
	this.shape_61.setTransform(215.5,162.2,1.242,1.242);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E3122D").s().p("Ag1BMIAAiXIBrAAIAACXg");
	this.shape_62.setTransform(170.8,165.3,1.242,1.242);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E3122D").s().p("Ag1C5IAAlxIBrAAIAAFxg");
	this.shape_63.setTransform(140.9,151.7,1.242,1.242);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E3122D").s().p("Ag1AtIAAhZIBrAAIAABZg");
	this.shape_64.setTransform(66.4,169.1,1.242,1.242);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E3122D").s().p("Ag1BMIAAiXIBrAAIAACXg");
	this.shape_65.setTransform(51.5,165.3,1.242,1.242);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E3122D").s().p("Ag1BvIAAjdIBrAAIAADdg");
	this.shape_66.setTransform(81.3,160.9,1.242,1.242);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#25A960").s().p("Ag1BqIAAjTIBrAAIAADTg");
	this.shape_67.setTransform(245.3,161.6,1.242,1.242);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#25A960").s().p("Ag1BRIAAigIBrAAIAACgg");
	this.shape_68.setTransform(200.6,164.7,1.242,1.242);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#25A960").s().p("Ag1BFIAAiJIBrAAIAACJg");
	this.shape_69.setTransform(185.7,166.1,1.242,1.242);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#25A960").s().p("Ag1BvIAAjdIBrAAIAADdg");
	this.shape_70.setTransform(155.8,160.9,1.242,1.242);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#25A960").s().p("Ag1AtIAAhZIBrAAIAABZg");
	this.shape_71.setTransform(96.2,169.1,1.242,1.242);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#25A960").s().p("Ag1BlIAAjJIBrAAIAADJg");
	this.shape_72.setTransform(36.6,162.2,1.242,1.242);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-9.1,1045.6,184.1), null);


(lib.redtick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3122D").s().p("AgvAoIg0gmIA0gpICTAAIAABPg");
	this.shape.setTransform(10,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4,20,8);


(lib.greentick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25A960").s().p("AgvAoIg0gmIA0gpICTAAIAABPg");
	this.shape.setTransform(10,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4,20,8);


(lib.gradient = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(10,221,116,0.8)","#12D0A9","#0BB6C8","#0BBB6C"],[0,0.498,1,1],35.2,123.1,35.2,-126.9).s().p("A0nTiMAAAgnDMApPAAAMgTsAnDg");
	this.shape.setTransform(132,-125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gradient, new cjs.Rectangle(0,-250,264,250), null);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGArQgDgDAAgHIAAgtIgLAAIAAgOIALAAIAAgVIASAAIAAAVIAMAAIAAAOIgMAAIAAAmQAAAFABABQABABAGAAIACAAIACAAIAAAOIgJABIgDAAQgLAAgEgFg");
	this.shape.setTransform(37.5,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAaQgDgHgBgMIAAgsIAUAAIAAAsQAAAHACACQACAGAJAAQAIAAAEgIQACgEAAgIIAAgnIAUAAIAABJIgUAAIAAgKIgBACIgCADQgFAEgEABQgEACgFAAQgRAAgFgMg");
	this.shape_1.setTransform(30.9,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAcQgJgMAAgQQAAgPAJgMQAKgMASAAQATAAAKAMQAJAMAAAPQAAAQgJAMQgKAMgTAAQgSAAgKgMgAgMgQQgFAGAAAKQAAALAFAGQAFAGAHAAQAJAAAEgGQAFgGgBgLQABgKgFgGQgEgGgJAAQgHAAgFAGg");
	this.shape_2.setTransform(22.4,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGArQgDgDAAgHIAAgtIgLAAIAAgOIALAAIAAgVIASAAIAAAVIAMAAIAAAOIgMAAIAAAmQAAAFABABQABABAGAAIACAAIACAAIAAAOIgJABIgDAAQgLAAgEgFg");
	this.shape_3.setTransform(11.9,-0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAzIAAhKIATAAIAABKgAgJggIAAgSIATAAIAAASg");
	this.shape_4.setTransform(7.7,-1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALAyIgRggIgIAJIAAAXIgTAAIAAhjIATAAIAAA1IAXgbIAYAAIgbAbIAcAug");
	this.shape_5.setTransform(-1.4,-1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAdQgIgLAAgRQAAgSAJgLQAJgKAQgBQAOABAJAGQAJAHABAPIgUAAQAAgEgCgDQgEgFgHAAQgIAAgEAKQgCAFAAAIQAAAIACAFQADAJAJAAQAHAAADgDQADgEAAgGIAUAAQgBAJgFAIQgJANgSgBQgRAAgJgKg");
	this.shape_6.setTransform(-9.6,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAeQgLgJAAgUQAAgTAKgKQALgLAPAAQAKABAHADQAIADAGAIQAEAHABAJIABANIg1AAQABAMAGAEQAFADAFgBQAHAAAEgCQACgCACgEIAUAAQgBAHgGAHQgKALgSgBQgOABgMgKgAARgGQAAgIgFgFQgFgEgHAAQgHABgEAEQgDAEgCAIIAhAAIAAAAg");
	this.shape_7.setTransform(-17.3,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAOAyIAAgtQAAgFgCgEQgDgFgHAAQgHAAgEAFQgEAEAAAKIAAAoIgUAAIAAhjIAUAAIAAAjQAEgGAGgDQAEgCAGAAQAHAAAGACQAGADADAEQADAFABAEIABANIAAAsg");
	this.shape_8.setTransform(-25.6,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfAnQgMgOAAgZQAAgZAOgOQAMgNASAAQAZAAALARQAHAJAAAKIgVAAQgCgIgDgDQgGgHgLAAQgKAAgGAJQgHAKAAAQQAAAQAHAJQAHAIAJAAQALAAAGgHQADgEACgIIAVAAQgDARgLAKQgLALgRAAQgVAAgMgOg");
	this.shape_9.setTransform(-34.9,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#188FFF").s().p("AovDSQgoAAAAgoIAAlTQAAgoAoAAIRfAAQAoAAAAAoIAAFTQAAAogoAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-60,-21,120,42), null);


(lib.bluetick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A7CE6").s().p("AgvAoIg0gmIA0gpICTAAIAABPg");
	this.shape.setTransform(10,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4,20,8);


// stage content:
(lib.UK_FinanceOnNet_1117_300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(256));

	// CTA
	this.instance = new lib.CTA();
	this.instance.parent = this;
	this.instance.setTransform(-67.9,197.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({x:80,y:199},21,cjs.Ease.get(1)).wait(211));

	// Logo
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-107.9,42,1,1,0,0,0,100,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({x:121.1},21,cjs.Ease.get(0.86)).wait(211));

	// text brokenup
	this.instance_2 = new lib.text();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-81,116);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({x:99.3},21,cjs.Ease.get(1)).wait(211));

	// gradient
	this.instance_3 = new lib.gradient();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-140,125.5,1,1,0,0,0,132,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({x:-139.9},0).to({x:132,y:125},21,cjs.Ease.get(1)).wait(221));

	// stock
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ALkA+QATgNAJgPQAKgPgBgTQABgTgKgPQgJgOgTgOIAKgOQAyAbAAAxQAAAxgyAcgABoAAQABgxAxgbIAKAOQgUAOgIAOQgKAPAAATQAAATAKAPQAIAPAUANIgKAPQgxgcgBgxgAH4AhIANgQQATAQAVABQAKAAAGgFQAGgEAAgHIAAgBQAAgGgGgEQgFgFgRgDQgWgFgKgHQgKgJgBgQQAAgRANgKQAMgKATAAQAaAAATAPIgLARQgSgNgRABQgJAAgGADQgFAFAAAGIAAABQAAAHAGAEQAGAEASAFQAVAFAJAHQALAJAAAPQAAARgOAKQgMALgTgBQgfABgWgVgAhBAjQgOgTAAgaIAAAAQgBgcAPgSQAQgUAZABQAYgBAOAUQAPARAAAcIAAABQAAAagPASQgOATgZAAQgYAAgQgSgAgxgrQgIANAAATIAAABQAAARAJANQAJANAPABQAOgBAIgNQAIgMAAgSIAAAAQAAgUgIgNQgIgNgPABQgOgBgKANgAjDAjQgPgTAAgaIAAAAQAAgcAQgSQAPgUAYABQAYgBAQAUQAPARAAAcIAAABQAAAagPASQgPATgZAAQgYAAgQgSgAiygrQgJANAAATIAAABQAAARAJANQAJANAOABQAOgBAJgNQAJgMAAgSIAAAAQAAgUgJgNQgJgNgOABQgPgBgIANgAo9AhIANgQQATAQAWABQAJAAAHgFQAFgEAAgHIAAgBQABgGgGgEQgGgFgRgDQgVgFgKgHQgLgJAAgQQAAgRANgKQAMgKASAAQAaAAAUAPIgMARQgSgNgQABQgJAAgGADQgFAFgBAGIAAABQAAAHAHAEQAFAEASAFQAWAFAJAHQAKAJAAAPQAAARgNAKQgMALgUgBQgeABgXgVgAJzA0IAAh9IBeAAIAAATIhHAAIAAAhIA/AAIAAAUIg/AAIAAAhIBIAAIAAAUgAGrA0IAAhpIgoAAIAAgUIBmAAIAAAUIgoAAIAABpgAEWA0IAAh9IBeAAIAAATIhIAAIAAAjIBAAAIAAATIhAAAIAAA0gAkDA0IAAhoIgXAGIgEgSIAigKIAPAAIAAB+gAnBA0IAAh9IBdAAIAAATIhHAAIAAAhIA/AAIAAAUIg/AAIAAAhIBIAAIAAAUgAqKA0IAAhpIgoAAIAAgUIBmAAIAAAUIgnAAIAABpgAseA0IAAh9IBdAAIAAATIhHAAIAAAjIA/AAIAAATIg/AAIAAA0gADrglIgSgXIgSAXIgRAAIAcgkIAPAAIAbAkg");
	this.shape_1.setTransform(100.6,26.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(256));

	// blue-tick copy
	this.instance_4 = new lib.bluetick("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(290,188.5,1,1,0,0,0,10,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:174.8},5).to({y:139.3},5).to({y:124.8},5).to({y:128.3},5).to({y:87.3},5).to({y:99.6},5).to({y:115.3},5).to({y:106.2},5).to({y:85.9},5).to({y:124.9},5).to({y:144.4},5).to({y:139.3},5).to({y:149.8},5).to({y:168.8},5).to({y:161.1},5).to({y:174.1},5).to({y:163.9},5).to({y:160.8},5).to({y:150.8},5).to({y:104.2},5).to({y:113.5},5).to({y:98.2},5).to({y:92.5},5).to({y:77.8},5).to({y:104.2},5).to({y:86.7},5).to({y:92.6},5).to({y:67.8},5).to({y:115.3},5).to({y:112.4},5).to({y:143.1},5).to({y:133.8},5).to({y:149},5).to({y:178.2},5).to({y:188.6},5).to({y:174.3},5).to({y:139.4},5).to({y:125},5).to({y:128},5).to({y:87.5},5).to({y:99.8},5).to({y:115.3},5).to({y:106},5).to({y:85.3},5).to({y:124.7},5).to({y:144.6},5).to({y:139.2},5).to({y:149.4},5).to({y:168.3},5).to({y:160.8},5).to({y:173.8},5).wait(1));

	// green-red-ticks
	this.instance_5 = new lib.greentick("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(290,224.9,1,1,0,0,0,10,0);

	this.instance_6 = new lib.redtick("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(290,202.6,1,1,0,0,0,10,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({y:236.9},0).wait(5).to({y:214.2},0).to({_off:true},5).wait(10).to({_off:false,y:218.7},0).to({_off:true},5).wait(10).to({_off:false,y:230.2},0).wait(5).to({y:228.6},0).wait(5).to({y:221.9},0).wait(5).to({y:233.3},0).to({_off:true},5).wait(5).to({_off:false,y:238.7},0).to({_off:true},5).wait(10).to({_off:false,y:237},0).to({_off:true},5).wait(5).to({_off:false,y:224.9},0).to({_off:true},5).wait(15).to({_off:false,y:238.8},0).to({_off:true},5).wait(15).to({_off:false,y:222.5},0).to({_off:true},5).wait(5).to({_off:false,y:232.6},0).wait(5).to({y:229.9},0).to({_off:true},5).wait(10).to({_off:false,y:223.7},0).to({_off:true},5).wait(5).to({_off:false,y:225.9},0).wait(5).to({y:224.9},0).wait(5).to({y:237},0).wait(5).to({y:214.2},0).to({_off:true},5).wait(10).to({_off:false,y:218.9},0).to({_off:true},5).wait(10).to({_off:false,y:230.2},0).wait(5).to({y:228.5},0).wait(5).to({y:222},0).wait(5).to({y:233.4},0).to({_off:true},5).wait(5).to({_off:false,y:238.8},0).to({_off:true},5).wait(5).to({_off:false,y:246.4},0).wait(5).to({y:236.4},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15).to({_off:false},0).wait(5).to({y:223.9},0).to({_off:true},5).wait(5).to({_off:false,y:205.2},0).wait(5).to({y:238.7},0).to({_off:true},5).wait(20).to({_off:false,y:228.6},0).to({_off:true},5).wait(5).to({_off:false,y:238.8},0).wait(5).to({y:246.4},0).to({_off:true},5).wait(5).to({_off:false,y:229},0).to({_off:true},5).wait(5).to({_off:false,y:231.2},0).wait(5).to({y:238.8},0).wait(5).to({y:222.4},0).to({_off:true},5).wait(5).to({_off:false,y:229.9},0).wait(5).to({y:226.3},0).wait(5).to({y:204},0).to({_off:true},5).wait(5).to({_off:false,y:231},0).to({_off:true},5).wait(10).to({_off:false,y:224.9},0).wait(5).to({y:238.8},0).to({_off:true},5).wait(5).to({_off:false,y:231.2},0).to({_off:true},5).wait(20).to({_off:false,y:202.7},0).wait(5).to({y:223.9},0).to({_off:true},5).wait(5).to({_off:false,y:205.2},0).wait(5).to({y:238.8},0).to({_off:true},5).wait(20).to({_off:false,y:228.5},0).to({_off:true},5).wait(5).to({_off:false,y:238.7},0).to({_off:true},5).wait(6));

	// axesmask
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#EEEEEE").p("AhhpvIDDAAAhhJwIDDAAAhhAAIDDAA");
	this.shape_2.setTransform(290.3,124.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(256));

	// mask
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhhTiMAAAgnDIDCAAMAAAAnDg");
	this.shape_3.setTransform(290.3,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(256));

	// FlashAICB
	this.instance_7 = new lib.Symbol1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(145.7,161.9,1.006,1,0,0,0,149.3,86.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-619.3,y:161.7},255).wait(1));

	// axes
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#EEEEEE").p("A3bpvMAu3AAAA3bAAMAu3AAAA3bJwMAu3AAA");
	this.shape_4.setTransform(150,124.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(256));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,124.5,1317.9,251);
// library properties:
lib.properties = {
	id: '58A82969740B49F09BE4EAFCA7725C48',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['58A82969740B49F09BE4EAFCA7725C48'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;