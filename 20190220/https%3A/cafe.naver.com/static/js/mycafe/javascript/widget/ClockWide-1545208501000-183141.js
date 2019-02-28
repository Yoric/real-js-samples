/**
 * Created by naver on 2016. 11. 7..
 */
var naver = {};
naver.widget = {};
naver.widget.Clock = (function(){
    var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || window.msRequestAnimationFrame;

    var cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame || window.msCancelAnimationFrame;

    var changeNums = [1, 4, 2, 5, 8, 3, 6, 7, 9];
    var SkinData = (function(){
        var SkinData = function(){
            this.am = '';
            this.pm = '';
            this.ampmX = 0;
            this.ampmY = 0;
            this.bg = '';
            this.bgX = -1;
            this.bgY = -1;
            this.lineHour = '';
            this.lineMin = '';
            this.lineSec = '';
            this.NumView = false;

            this.isClip = false;
            this.reflection = false;
            this.bgColorAtive = false;
            this.type = 'analog'; // digital
            this.sizes = [{w:171, h:121}, {w:171, h:64}, {w:171, h:38}, {w:200, h:64}];
            this.sizeType = 1;

            this.fontGaps = [7, 6, -1, 8, 6, 8, 10, 10, 10];
            this.textGap = 3;
            this.interactType = "square"; // circle, square
            this.interactArea = {x: 0, y: 0, width: 100, height: 100};
        };

        SkinData.prototype.setType00 = function(){
            this.typeName = "analog_121_03";
            this.id = 0;
            this.NumView = true;
            this.am = "am0";
            this.pm = "pm0";
            this.ampmX = 115.5;
            this.ampmY = 58.5;
            this.bgColorAtive = true;
            this.bg = "bg0";
            this.bgX = 0;
            this.bgY = 0;
            this.lineHourOffset = {x:4, y:9};
            this.lineMinOffset = {x:2, y:8};
            this.lineSecOffset = {x:1, y:12};
            this.shadow = 'bg0-s';
            this.fontSizes = [48, 48];
            this.textPoses = [{x:85, y:20}, {x:85, y:101}];
            this.interactArea = {x: 0, y:0 , width:171, height:121};
            this.lineHour = "line0-1";
            this.lineMin = "line0-2";
            this.lineSec = "line0-3";
            this.addImages = [{name: "add0-img", x: 0, y: 0}];
        };
        SkinData.prototype.setType01 = function(){
            this.typeName = "analog_121_04";
            this.id = 1;
            this.NumView = true;
            this.am = "am2";
            this.pm = "pm2";
            this.ampmX = 114.5;
            this.ampmY = 58.5;
            this.lineHourOffset = {x:3, y:5};
            this.lineMinOffset = {x:2, y:4};
            // this.lineSecOffset = {x:2, y:2};
            this.shadow = 'bg3-s';
            this.fontSizes = [26, 26, 26, 26];
            this.textPoses = [{x:85, y:10}, {x:135, y:61}, {x:85, y:110}, {x:35, y:61}];
            this.interactType = 'circle';
            this.interactArea = {x: 85, y:60 , radius: 60.5};
            this.lineHour = "line3-1";
            this.lineMin = "line3-2";
        };
        SkinData.prototype.setType02 = function(){
            this.typeName = "analog_121_07";
            this.id = 2;
            this.bg = "bg3"; // 수박
            this.bgX = 26;
            this.bgY = 0;
            this.lineHour = "line2-1";
            this.lineMin = "line2-3";
            this.lineSec = "line2-2"; // 노랑색 초심을 찾아야 한다.
            this.lineHourOffset = {x:2.5, y:5.5};
            this.shadow = 'bg3-s';
            this.interactType = 'circle';
            this.interactArea = {x: 85, y:60 , radius: 60.5};
            this.lineMinOffset = {x:1, y:3};
            this.lineSecOffset = {x:1, y:3};
        };
        SkinData.prototype.setType03 = function(){
            this.typeName = "analog_121_08";
            this.id = 3;
            this.bg = "bg1"; // 곰
            // this.bg = "line1-0"; // 곰 코
            this.lineHour = "line1-1";
            this.lineMin = "line1-2";
            this.bgX = 19;
            this.bgY = 0;
            this.shadow = 'bg1-s';
            this.lineHourOffset = {x:2.5, y:5.5};
            this.lineMinOffset = {x:1, y:3};
            this.lineSecOffset = {x:2, y:2};
            this.interactArea = {x: 20, y: 0, width: 132, height: 121};
            this.addImages = [{name: "line1-0", x: 76, y: 52}];
        };
        SkinData.prototype.setType04 = function(){
            this.typeName = "analog_121_14";
            this.id = 4;
            this.NumView = true;
            this.am = "am4";
            this.pm = "pm4";
            this.ampmX = 117;
            this.ampmY = 55;
            this.shadow = 'a4_shadow';
            this.lineHour = "line5-1";
            this.lineMin = "line5-2";
            this.lineSec = "line5-3";
            this.lineHourOffset = {x:1, y:-3};
            this.lineMinOffset = {x:1, y:-3};
            this.lineSecOffset = {x:1, y:1};
            this.fontSizes = [14, 12, 32, 24];
            this.interactArea = {x: 14, y: 1, width: 142, height: 118};
            this.textPoses = [{x:85, y:9}, {x:145, y:58}, {x:85, y:102}, {x:28, y:58}];
            this.addImages = [{name: "image13", x: 80, y: 55}];
        };
        SkinData.prototype.setType05 = function(){
            this.typeName = "analog_121_25";
            this.id = 5;
            this.bgColorAtive = true;
            this.am = "am1";
            this.pm = "pm1";
            this.bgX = 25;
            this.bgY = 0;
            this.ampmX = 76;
            this.ampmY = 91;
            this.bg = "bg4-1";
            this.shadow = 'bg4-s';
            this.lineHour = "line4-1";
            this.lineMin = "line4-2";
            this.lineSec = "line4-3";
            this.lineHourOffset = {x:4, y:3};
            this.lineMinOffset = {x:7, y:7};
            this.lineSecOffset = {x:1, y:14};
            this.interactArea = {x: 26, y: 1, width: 120, height: 120};
            this.addImages = [{name: "bg4-2", x: 25, y: 0}];
        };
        SkinData.prototype.setType06 = function(){
            this.typeName = "digital_038_01";
            this.id = 6;
            this.type = 'digital';
            this.am = "am3";
            this.pm = "pm3";
            this.ampmY = 1;
            this.sizeType = 3;
            this.fontSizes = [43, 43];
            this.shadow = 'd1_shadow';
            this.colon = 'colon6';
            this.colonGap = 3;
            this.colonRect = {x: 93, y: 12, w: 4, h: 14};
            this.interactArea = {x: 0, y: 0, width: 171, height: 38};
        };
        SkinData.prototype.setType07 = function(){
            this.typeName = "digital_064_05";
            this.id = 7;
            this.bgColorAtive = true;
            this.type = 'digital';
            this.am = "am1";
            this.pm = "pm1";
            this.ampmX = 30;
            this.ampmY = 25;
            this.bg = "bg5-1";
            this.sizeType = 4;
            this.fontSizes = [43, 43];
            this.shadow = 'd2_shadow';
            this.addImages = [{name: "bg5-2", x: -1, y: -1}];
            this.interactArea = {x: 0, y: 0, width: 200, height: 64};
            this.colon = 'colon6';
            this.colonGap = 4;
            this.colonRect = {x: 120, y: 22, w: 3, h: 18};
        };
        SkinData.prototype.setType08 = function(){
            this.typeName = "digital_064_07";
            this.id = 8;
            this.type = 'digital';
            this.reflection = true;
            this.am = "am1";
            this.pm = "pm1";
            this.ampmX = 10;
            this.ampmY = 21;
            this.bg = "bg6";
            this.bgX = 0;
            this.bgY = 32;
            this.fontSizes = [43, 43];
            this.shadow = 'd2_shadow';
            this.colon = 'colon6';
            this.colonGap = 5;
            this.colonRect = {x: 105, y: 11, w: 3, h: 18};
            this.yterms = [[5, -2], [5, -5], [3, -5], [3, -2], [5, -2], [5, 0], [5, -3], [5, -3], [5, -3]];
            this.interactArea = {x: 0, y: 0, width: 171, height: 64};
            this.sizeType = 2;
        };
        SkinData.prototype.setType09 = function(){
            this.typeName = "digital_121_03";
            this.id = 9;
            this.bgColorAtive = true;
            this.type = 'digital';
            this.bg = "bg2";
            this.bgX = 25;
            this.bgY = 1;
            this.fontSizes = [35, 28];
            this.shadow = 'bg3-s';
            this.colon = 'colon6';
            this.colonGap = 3;
            this.colonRect = {x: 87, y: 58, w: 2, h: 10};
            this.interactType = 'circle';
            this.interactArea = {x: 86, y: 61, radius: 61};
        };
        SkinData.prototype.setType10 = function(){
            this.typeName = "digital_121_06";
            this.id = 10;
            this.bgColorAtive = true;
            this.type = 'digital';
            this.am = "am1";
            this.pm = "pm1";
            this.bgX = 25;
            this.bgY = 0;
            this.ampmX = 76;
            this.ampmY = 91;
            this.shadow = 'bg4-s';
            this.fontSizes = [43, 43];
            this.colon = 'colon6';
            this.colonGap = 2;
            this.colonRect = {x: 84, y: 49, w: 3, h: 18};
            this.isClip = true;
            this.clipRect = {x: 31, y: 30, w: 110, h: 59};
            this.interactArea = {x: 26, y: 1, width: 120, height: 120};
            this.bg = "bg4-1";
            this.addImages = [{name: "bg4-2", x: 25, y: 0}];
        };
        SkinData.prototype.setFontGap = function(type){
            this.textGap = this.fontGaps[type - 1];
            return this.fontGaps[type - 1];
        };
        return SkinData;
    })();
    var data = {

        "a4_shadow":
            {
                "frame": {"x":690,"y":2,"w":142,"h":118},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":142,"h":118},
                "sourceSize": {"w":142,"h":118}
            },
        "add0-img":
            {
                "frame": {"x":2,"y":2,"w":171,"h":121},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":171,"h":121},
                "sourceSize": {"w":171,"h":121}
            },
        "am0":
            {
                "frame": {"x":919,"y":497,"w":16,"h":7},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":16,"h":7},
                "sourceSize": {"w":16,"h":7}
            },
        "am1":
            {
                "frame": {"x":670,"y":226,"w":18,"h":14},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":18,"h":14},
                "sourceSize": {"w":18,"h":14}
            },
        "am2":
            {
                "frame": {"x":1008,"y":239,"w":10,"h":7},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":10,"h":7},
                "sourceSize": {"w":10,"h":7}
            },
        "am3":
            {
                "frame": {"x":580,"y":413,"w":13,"h":5},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":13,"h":5},
                "sourceSize": {"w":13,"h":5}
            },
        "am4":
            {
                "frame": {"x":919,"y":484,"w":18,"h":12},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":18,"h":12},
                "sourceSize": {"w":18,"h":12}
            },
        "an_0_10000":
            {
                "frame": {"x":966,"y":2,"w":51,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":51,"h":61},
                "sourceSize": {"w":51,"h":61}
            },
        "an_0_10001":
            {
                "frame": {"x":901,"y":312,"w":51,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":51,"h":61},
                "sourceSize": {"w":51,"h":61}
            },
        "an_0_20000":
            {
                "frame": {"x":966,"y":64,"w":45,"h":55},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":45,"h":55},
                "sourceSize": {"w":45,"h":55}
            },
        "an_0_20001":
            {
                "frame": {"x":534,"y":370,"w":45,"h":55},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":45,"h":55},
                "sourceSize": {"w":45,"h":55}
            },
        "an_0_30000":
            {
                "frame": {"x":580,"y":490,"w":59,"h":34},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":59,"h":34},
                "sourceSize": {"w":59,"h":34}
            },
        "an_0_30001":
            {
                "frame": {"x":640,"y":490,"w":59,"h":34},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":59,"h":34},
                "sourceSize": {"w":59,"h":34}
            },
        "an_0_40000":
            {
                "frame": {"x":418,"y":311,"w":57,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":57,"h":61},
                "sourceSize": {"w":57,"h":61}
            },
        "an_0_40001":
            {
                "frame": {"x":476,"y":311,"w":57,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":57,"h":61},
                "sourceSize": {"w":57,"h":61}
            },
        "an_0_50000":
            {
                "frame": {"x":610,"y":124,"w":73,"h":59},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":73,"h":59},
                "sourceSize": {"w":73,"h":59}
            },
        "an_0_50001":
            {
                "frame": {"x":946,"y":124,"w":73,"h":59},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":73,"h":59},
                "sourceSize": {"w":73,"h":59}
            },
        "an_0_60000":
            {
                "frame": {"x":174,"y":311,"w":59,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":59,"h":63},
                "sourceSize": {"w":59,"h":63}
            },
        "an_0_60001":
            {
                "frame": {"x":234,"y":311,"w":59,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":59,"h":63},
                "sourceSize": {"w":59,"h":63}
            },
        "an_0_70000":
            {
                "frame": {"x":294,"y":311,"w":61,"h":59},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":61,"h":59},
                "sourceSize": {"w":61,"h":59}
            },
        "an_0_70001":
            {
                "frame": {"x":356,"y":311,"w":61,"h":59},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":61,"h":59},
                "sourceSize": {"w":61,"h":59}
            },
        "an_0_80000":
            {
                "frame": {"x":610,"y":184,"w":59,"h":58},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":59,"h":58},
                "sourceSize": {"w":59,"h":58}
            },
        "an_0_80001":
            {
                "frame": {"x":534,"y":311,"w":59,"h":58},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":59,"h":58},
                "sourceSize": {"w":59,"h":58}
            },
        "an_0_90000":
            {
                "frame": {"x":946,"y":184,"w":61,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":61,"h":63},
                "sourceSize": {"w":61,"h":63}
            },
        "an_0_90001":
            {
                "frame": {"x":930,"y":248,"w":61,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":61,"h":63},
                "sourceSize": {"w":61,"h":63}
            },
        "an_1_10000":
            {
                "frame": {"x":92,"y":715,"w":29,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":35},
                "sourceSize": {"w":29,"h":35}
            },
        "an_1_10001":
            {
                "frame": {"x":301,"y":831,"w":29,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":35},
                "sourceSize": {"w":29,"h":35}
            },
        "an_1_10002":
            {
                "frame": {"x":80,"y":832,"w":29,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":35},
                "sourceSize": {"w":29,"h":35}
            },
        "an_1_10003":
            {
                "frame": {"x":331,"y":841,"w":29,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":35},
                "sourceSize": {"w":29,"h":35}
            },
        "an_1_20000":
            {
                "frame": {"x":700,"y":490,"w":21,"h":31},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":31},
                "sourceSize": {"w":21,"h":31}
            },
        "an_1_20001":
            {
                "frame": {"x":222,"y":718,"w":21,"h":31},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":31},
                "sourceSize": {"w":21,"h":31}
            },
        "an_1_20002":
            {
                "frame": {"x":313,"y":961,"w":21,"h":31},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":31},
                "sourceSize": {"w":21,"h":31}
            },
        "an_1_20003":
            {
                "frame": {"x":335,"y":961,"w":21,"h":31},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":31},
                "sourceSize": {"w":21,"h":31}
            },
        "an_1_30000":
            {
                "frame": {"x":861,"y":349,"w":28,"h":23},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":28,"h":23},
                "sourceSize": {"w":28,"h":23}
            },
        "an_1_30001":
            {
                "frame": {"x":134,"y":350,"w":28,"h":23},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":28,"h":23},
                "sourceSize": {"w":28,"h":23}
            },
        "an_1_30002":
            {
                "frame": {"x":867,"y":962,"w":28,"h":23},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":28,"h":23},
                "sourceSize": {"w":28,"h":23}
            },
        "an_1_30003":
            {
                "frame": {"x":153,"y":966,"w":28,"h":23},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":28,"h":23},
                "sourceSize": {"w":28,"h":23}
            },
        "an_1_40000":
            {
                "frame": {"x":644,"y":785,"w":33,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":35},
                "sourceSize": {"w":33,"h":35}
            },
        "an_1_40001":
            {
                "frame": {"x":678,"y":785,"w":33,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":35},
                "sourceSize": {"w":33,"h":35}
            },
        "an_1_40002":
            {
                "frame": {"x":712,"y":785,"w":33,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":35},
                "sourceSize": {"w":33,"h":35}
            },
        "an_1_40003":
            {
                "frame": {"x":67,"y":786,"w":33,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":35},
                "sourceSize": {"w":33,"h":35}
            },
        "an_1_50000":
            {
                "frame": {"x":361,"y":841,"w":29,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":35},
                "sourceSize": {"w":29,"h":35}
            },
        "an_1_50001":
            {
                "frame": {"x":473,"y":842,"w":29,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":35},
                "sourceSize": {"w":29,"h":35}
            },
        "an_1_50002":
            {
                "frame": {"x":503,"y":848,"w":29,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":35},
                "sourceSize": {"w":29,"h":35}
            },
        "an_1_50003":
            {
                "frame": {"x":864,"y":849,"w":29,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":35},
                "sourceSize": {"w":29,"h":35}
            },
        "an_1_60000":
            {
                "frame": {"x":478,"y":716,"w":35,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":35,"h":35},
                "sourceSize": {"w":35,"h":35}
            },
        "an_1_60001":
            {
                "frame": {"x":514,"y":718,"w":35,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":35,"h":35},
                "sourceSize": {"w":35,"h":35}
            },
        "an_1_60002":
            {
                "frame": {"x":896,"y":719,"w":35,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":35,"h":35},
                "sourceSize": {"w":35,"h":35}
            },
        "an_1_60003":
            {
                "frame": {"x":932,"y":721,"w":35,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":35,"h":35},
                "sourceSize": {"w":35,"h":35}
            },
        "an_1_70000":
            {
                "frame": {"x":150,"y":726,"w":35,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":35,"h":35},
                "sourceSize": {"w":35,"h":35}
            },
        "an_1_70001":
            {
                "frame": {"x":186,"y":726,"w":35,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":35,"h":35},
                "sourceSize": {"w":35,"h":35}
            },
        "an_1_70002":
            {
                "frame": {"x":968,"y":731,"w":35,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":35,"h":35},
                "sourceSize": {"w":35,"h":35}
            },
        "an_1_70003":
            {
                "frame": {"x":856,"y":744,"w":35,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":35,"h":35},
                "sourceSize": {"w":35,"h":35}
            },
        "an_1_80000":
            {
                "frame": {"x":409,"y":823,"w":31,"h":33},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":33},
                "sourceSize": {"w":31,"h":33}
            },
        "an_1_80001":
            {
                "frame": {"x":832,"y":824,"w":31,"h":33},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":33},
                "sourceSize": {"w":31,"h":33}
            },
        "an_1_80002":
            {
                "frame": {"x":441,"y":829,"w":31,"h":33},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":33},
                "sourceSize": {"w":31,"h":33}
            },
        "an_1_80003":
            {
                "frame": {"x":740,"y":830,"w":31,"h":33},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":33},
                "sourceSize": {"w":31,"h":33}
            },
        "an_1_90000":
            {
                "frame": {"x":213,"y":786,"w":33,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":35},
                "sourceSize": {"w":33,"h":35}
            },
        "an_1_90001":
            {
                "frame": {"x":289,"y":786,"w":33,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":35},
                "sourceSize": {"w":33,"h":35}
            },
        "an_1_90002":
            {
                "frame": {"x":746,"y":794,"w":33,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":35},
                "sourceSize": {"w":33,"h":35}
            },
        "an_1_90003":
            {
                "frame": {"x":323,"y":795,"w":33,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":35},
                "sourceSize": {"w":33,"h":35}
            },
        "an_4_10000":
            {
                "frame": {"x":670,"y":184,"w":19,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":41},
                "sourceSize": {"w":19,"h":41}
            },
        "an_4_10001":
            {
                "frame": {"x":514,"y":373,"w":19,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":41},
                "sourceSize": {"w":19,"h":41}
            },
        "an_4_10002":
            {
                "frame": {"x":942,"y":905,"w":19,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":41},
                "sourceSize": {"w":19,"h":41}
            },
        "an_4_10003":
            {
                "frame": {"x":271,"y":906,"w":19,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":41},
                "sourceSize": {"w":19,"h":41}
            },
        "an_4_20000":
            {
                "frame": {"x":942,"y":947,"w":19,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":37},
                "sourceSize": {"w":19,"h":37}
            },
        "an_4_20001":
            {
                "frame": {"x":55,"y":948,"w":19,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":37},
                "sourceSize": {"w":19,"h":37}
            },
        "an_4_20002":
            {
                "frame": {"x":185,"y":948,"w":19,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":37},
                "sourceSize": {"w":19,"h":37}
            },
        "an_4_20003":
            {
                "frame": {"x":205,"y":948,"w":19,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":37},
                "sourceSize": {"w":19,"h":37}
            },
        "an_4_30000":
            {
                "frame": {"x":443,"y":916,"w":30,"h":25},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":30,"h":25},
                "sourceSize": {"w":30,"h":25}
            },
        "an_4_30001":
            {
                "frame": {"x":474,"y":922,"w":30,"h":25},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":30,"h":25},
                "sourceSize": {"w":30,"h":25}
            },
        "an_4_30002":
            {
                "frame": {"x":838,"y":923,"w":30,"h":25},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":30,"h":25},
                "sourceSize": {"w":30,"h":25}
            },
        "an_4_30003":
            {
                "frame": {"x":743,"y":929,"w":30,"h":25},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":30,"h":25},
                "sourceSize": {"w":30,"h":25}
            },
        "an_4_40000":
            {
                "frame": {"x":154,"y":898,"w":22,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":22,"h":41},
                "sourceSize": {"w":22,"h":41}
            },
        "an_4_40001":
            {
                "frame": {"x":533,"y":898,"w":22,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":22,"h":41},
                "sourceSize": {"w":22,"h":41}
            },
        "an_4_40002":
            {
                "frame": {"x":556,"y":898,"w":22,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":22,"h":41},
                "sourceSize": {"w":22,"h":41}
            },
        "an_4_40003":
            {
                "frame": {"x":579,"y":900,"w":22,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":22,"h":41},
                "sourceSize": {"w":22,"h":41}
            },
        "an_4_50000":
            {
                "frame": {"x":767,"y":752,"w":29,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":41},
                "sourceSize": {"w":29,"h":41}
            },
        "an_4_50001":
            {
                "frame": {"x":352,"y":753,"w":29,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":41},
                "sourceSize": {"w":29,"h":41}
            },
        "an_4_50002":
            {
                "frame": {"x":382,"y":753,"w":29,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":41},
                "sourceSize": {"w":29,"h":41}
            },
        "an_4_50003":
            {
                "frame": {"x":510,"y":754,"w":29,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":41},
                "sourceSize": {"w":29,"h":41}
            },
        "an_4_60000":
            {
                "frame": {"x":151,"y":854,"w":23,"h":43},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":43},
                "sourceSize": {"w":23,"h":43}
            },
        "an_4_60001":
            {
                "frame": {"x":175,"y":854,"w":23,"h":43},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":43},
                "sourceSize": {"w":23,"h":43}
            },
        "an_4_60002":
            {
                "frame": {"x":533,"y":854,"w":23,"h":43},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":43},
                "sourceSize": {"w":23,"h":43}
            },
        "an_4_60003":
            {
                "frame": {"x":557,"y":854,"w":23,"h":43},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":43},
                "sourceSize": {"w":23,"h":43}
            },
        "an_4_70000":
            {
                "frame": {"x":964,"y":859,"w":23,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":41},
                "sourceSize": {"w":23,"h":41}
            },
        "an_4_70001":
            {
                "frame": {"x":988,"y":859,"w":23,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":41},
                "sourceSize": {"w":23,"h":41}
            },
        "an_4_70002":
            {
                "frame": {"x":435,"y":863,"w":23,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":41},
                "sourceSize": {"w":23,"h":41}
            },
        "an_4_70003":
            {
                "frame": {"x":740,"y":864,"w":23,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":41},
                "sourceSize": {"w":23,"h":41}
            },
        "an_4_80000":
            {
                "frame": {"x":26,"y":850,"w":25,"h":40},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":40},
                "sourceSize": {"w":25,"h":40}
            },
        "an_4_80001":
            {
                "frame": {"x":772,"y":850,"w":25,"h":40},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":40},
                "sourceSize": {"w":25,"h":40}
            },
        "an_4_80002":
            {
                "frame": {"x":798,"y":850,"w":25,"h":40},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":40},
                "sourceSize": {"w":25,"h":40}
            },
        "an_4_80003":
            {
                "frame": {"x":894,"y":851,"w":25,"h":40},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":40},
                "sourceSize": {"w":25,"h":40}
            },
        "an_4_90000":
            {
                "frame": {"x":511,"y":884,"w":21,"h":43},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":43},
                "sourceSize": {"w":21,"h":43}
            },
        "an_4_90001":
            {
                "frame": {"x":28,"y":891,"w":21,"h":43},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":43},
                "sourceSize": {"w":21,"h":43}
            },
        "an_4_90002":
            {
                "frame": {"x":898,"y":892,"w":21,"h":43},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":43},
                "sourceSize": {"w":21,"h":43}
            },
        "an_4_90003":
            {
                "frame": {"x":132,"y":898,"w":21,"h":43},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":43},
                "sourceSize": {"w":21,"h":43}
            },
        "bg0":
            {
                "frame": {"x":174,"y":2,"w":171,"h":121},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":171,"h":121},
                "sourceSize": {"w":171,"h":121}
            },
        "bg0-s":
            {
                "frame": {"x":346,"y":2,"w":171,"h":121},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":171,"h":121},
                "sourceSize": {"w":171,"h":121}
            },
        "bg1":
            {
                "frame": {"x":833,"y":2,"w":132,"h":121},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":132,"h":121},
                "sourceSize": {"w":132,"h":121}
            },
        "bg1-s":
            {
                "frame": {"x":690,"y":121,"w":132,"h":121},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":132,"h":121},
                "sourceSize": {"w":132,"h":121}
            },
        "bg2":
            {
                "frame": {"x":823,"y":124,"w":122,"h":118},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":122,"h":118},
                "sourceSize": {"w":122,"h":118}
            },
        "bg3":
            {
                "frame": {"x":368,"y":124,"w":120,"h":121},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":120,"h":121},
                "sourceSize": {"w":120,"h":121}
            },
        "bg3-s":
            {
                "frame": {"x":489,"y":124,"w":120,"h":121},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":120,"h":121},
                "sourceSize": {"w":120,"h":121}
            },
        "bg4-1":
            {
                "frame": {"x":2,"y":124,"w":121,"h":121},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":121,"h":121},
                "sourceSize": {"w":121,"h":121}
            },
        "bg4-2":
            {
                "frame": {"x":124,"y":124,"w":121,"h":121},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":121,"h":121},
                "sourceSize": {"w":121,"h":121}
            },
        "bg4-s":
            {
                "frame": {"x":610,"y":243,"w":118,"h":118},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":118,"h":118},
                "sourceSize": {"w":118,"h":118}
            },
        "bg5-1":
            {
                "frame": {"x":729,"y":243,"w":200,"h":66},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":200,"h":66},
                "sourceSize": {"w":200,"h":66}
            },
        "bg5-2":
            {
                "frame": {"x":2,"y":246,"w":200,"h":64},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":200,"h":64},
                "sourceSize": {"w":200,"h":64}
            },
        "bg6":
            {
                "frame": {"x":134,"y":990,"w":171,"h":3},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":171,"h":3},
                "sourceSize": {"w":171,"h":3}
            },
        "colon6":
            {
                "frame": {"x":167,"y":350,"w":4,"h":14},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":4,"h":14},
                "sourceSize": {"w":4,"h":14}
            },
        "colon9":
            {
                "frame": {"x":1012,"y":110,"w":4,"h":12},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":4,"h":12},
                "sourceSize": {"w":4,"h":12}
            },
        "d1_shadow":
            {
                "frame": {"x":729,"y":310,"w":171,"h":38},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":171,"h":38},
                "sourceSize": {"w":171,"h":38}
            },
        "d2_shadow":
            {
                "frame": {"x":203,"y":246,"w":200,"h":64},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":200,"h":64},
                "sourceSize": {"w":200,"h":64}
            },
        "errorType1":
            {
                "frame": {"x":518,"y":2,"w":171,"h":121},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":171,"h":121},
                "sourceSize": {"w":171,"h":121}
            },
        "errorType2":
            {
                "frame": {"x":404,"y":246,"w":171,"h":64},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":171,"h":64},
                "sourceSize": {"w":171,"h":64}
            },
        "errorType3":
            {
                "frame": {"x":2,"y":311,"w":171,"h":38},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":171,"h":38},
                "sourceSize": {"w":171,"h":38}
            },
        "image13":
            {
                "frame": {"x":594,"y":345,"w":11,"h":11},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":11,"h":11},
                "sourceSize": {"w":11,"h":11}
            },
        "line0-1":
            {
                "frame": {"x":1012,"y":64,"w":7,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":7,"h":45},
                "sourceSize": {"w":7,"h":45}
            },
        "line0-2":
            {
                "frame": {"x":1018,"y":2,"w":4,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":4,"h":57},
                "sourceSize": {"w":4,"h":57}
            },
        "line0-3":
            {
                "frame": {"x":684,"y":124,"w":3,"h":59},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":3,"h":59},
                "sourceSize": {"w":3,"h":59}
            },
        "line1-0":
            {
                "frame": {"x":212,"y":421,"w":20,"h":14},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":20,"h":14},
                "sourceSize": {"w":20,"h":14}
            },
        "line1-1":
            {
                "frame": {"x":278,"y":375,"w":4,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":4,"h":35},
                "sourceSize": {"w":4,"h":35}
            },
        "line1-2":
            {
                "frame": {"x":288,"y":375,"w":3,"h":38},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":3,"h":38},
                "sourceSize": {"w":3,"h":38}
            },
        "line2-1":
            {
                "frame": {"x":580,"y":370,"w":5,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":5,"h":35},
                "sourceSize": {"w":5,"h":35}
            },
        "line2-2":
            {
                "frame": {"x":1005,"y":406,"w":3,"h":30},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":3,"h":30},
                "sourceSize": {"w":3,"h":30}
            },
        "line2-3":
            {
                "frame": {"x":1010,"y":406,"w":3,"h":38},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":3,"h":38},
                "sourceSize": {"w":3,"h":38}
            },
        "line3-1":
            {
                "frame": {"x":602,"y":310,"w":6,"h":30},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":6,"h":30},
                "sourceSize": {"w":6,"h":30}
            },
        "line3-2":
            {
                "frame": {"x":586,"y":370,"w":4,"h":42},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":4,"h":42},
                "sourceSize": {"w":4,"h":42}
            },
        "line4-1":
            {
                "frame": {"x":594,"y":310,"w":7,"h":34},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":7,"h":34},
                "sourceSize": {"w":7,"h":34}
            },
        "line4-2":
            {
                "frame": {"x":1008,"y":184,"w":13,"h":54},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":13,"h":54},
                "sourceSize": {"w":13,"h":54}
            },
        "line4-3":
            {
                "frame": {"x":1020,"y":60,"w":2,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":2,"h":57},
                "sourceSize": {"w":2,"h":57}
            },
        "line5-1":
            {
                "frame": {"x":163,"y":350,"w":3,"h":23},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":3,"h":23},
                "sourceSize": {"w":3,"h":23}
            },
        "line5-2":
            {
                "frame": {"x":1020,"y":239,"w":2,"h":40},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":2,"h":40},
                "sourceSize": {"w":2,"h":40}
            },
        "line5-3":
            {
                "frame": {"x":1020,"y":118,"w":2,"h":46},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":2,"h":46},
                "sourceSize": {"w":2,"h":46}
            },
        "num_1_280000":
            {
                "frame": {"x":1005,"y":368,"w":17,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":17,"h":37},
                "sourceSize": {"w":17,"h":37}
            },
        "num_1_280001":
            {
                "frame": {"x":284,"y":649,"w":17,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":17,"h":37},
                "sourceSize": {"w":17,"h":37}
            },
        "num_1_280002":
            {
                "frame": {"x":132,"y":858,"w":17,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":17,"h":37},
                "sourceSize": {"w":17,"h":37}
            },
        "num_1_280003":
            {
                "frame": {"x":721,"y":867,"w":17,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":17,"h":37},
                "sourceSize": {"w":17,"h":37}
            },
        "num_1_280004":
            {
                "frame": {"x":75,"y":948,"w":17,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":17,"h":37},
                "sourceSize": {"w":17,"h":37}
            },
        "num_1_280005":
            {
                "frame": {"x":245,"y":950,"w":17,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":17,"h":37},
                "sourceSize": {"w":17,"h":37}
            },
        "num_1_280006":
            {
                "frame": {"x":357,"y":961,"w":17,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":17,"h":37},
                "sourceSize": {"w":17,"h":37}
            },
        "num_1_280007":
            {
                "frame": {"x":503,"y":966,"w":17,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":17,"h":37},
                "sourceSize": {"w":17,"h":37}
            },
        "num_1_280008":
            {
                "frame": {"x":521,"y":966,"w":17,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":17,"h":37},
                "sourceSize": {"w":17,"h":37}
            },
        "num_1_280009":
            {
                "frame": {"x":539,"y":966,"w":17,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":17,"h":37},
                "sourceSize": {"w":17,"h":37}
            },
        "num_1_350000":
            {
                "frame": {"x":1001,"y":767,"w":21,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":45},
                "sourceSize": {"w":21,"h":45}
            },
        "num_1_350001":
            {
                "frame": {"x":1001,"y":813,"w":21,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":45},
                "sourceSize": {"w":21,"h":45}
            },
        "num_1_350002":
            {
                "frame": {"x":581,"y":854,"w":21,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":45},
                "sourceSize": {"w":21,"h":45}
            },
        "num_1_350003":
            {
                "frame": {"x":603,"y":854,"w":21,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":45},
                "sourceSize": {"w":21,"h":45}
            },
        "num_1_350004":
            {
                "frame": {"x":391,"y":857,"w":21,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":45},
                "sourceSize": {"w":21,"h":45}
            },
        "num_1_350005":
            {
                "frame": {"x":413,"y":857,"w":21,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":45},
                "sourceSize": {"w":21,"h":45}
            },
        "num_1_350006":
            {
                "frame": {"x":110,"y":858,"w":21,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":45},
                "sourceSize": {"w":21,"h":45}
            },
        "num_1_350007":
            {
                "frame": {"x":824,"y":858,"w":21,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":45},
                "sourceSize": {"w":21,"h":45}
            },
        "num_1_350008":
            {
                "frame": {"x":920,"y":859,"w":21,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":45},
                "sourceSize": {"w":21,"h":45}
            },
        "num_1_350009":
            {
                "frame": {"x":942,"y":859,"w":21,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":45},
                "sourceSize": {"w":21,"h":45}
            },
        "num_1_430000":
            {
                "frame": {"x":997,"y":312,"w":25,"h":55},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":55},
                "sourceSize": {"w":25,"h":55}
            },
        "num_1_430001":
            {
                "frame": {"x":996,"y":619,"w":25,"h":55},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":55},
                "sourceSize": {"w":25,"h":55}
            },
        "num_1_430002":
            {
                "frame": {"x":996,"y":675,"w":25,"h":55},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":55},
                "sourceSize": {"w":25,"h":55}
            },
        "num_1_430003":
            {
                "frame": {"x":690,"y":692,"w":25,"h":55},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":55},
                "sourceSize": {"w":25,"h":55}
            },
        "num_1_430004":
            {
                "frame": {"x":66,"y":700,"w":25,"h":55},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":55},
                "sourceSize": {"w":25,"h":55}
            },
        "num_1_430005":
            {
                "frame": {"x":804,"y":700,"w":25,"h":55},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":55},
                "sourceSize": {"w":25,"h":55}
            },
        "num_1_430006":
            {
                "frame": {"x":830,"y":700,"w":25,"h":55},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":55},
                "sourceSize": {"w":25,"h":55}
            },
        "num_1_430007":
            {
                "frame": {"x":572,"y":702,"w":25,"h":55},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":55},
                "sourceSize": {"w":25,"h":55}
            },
        "num_1_430008":
            {
                "frame": {"x":598,"y":702,"w":25,"h":55},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":55},
                "sourceSize": {"w":25,"h":55}
            },
        "num_1_430009":
            {
                "frame": {"x":624,"y":702,"w":25,"h":55},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":55},
                "sourceSize": {"w":25,"h":55}
            },
        "num_1_500000":
            {
                "frame": {"x":992,"y":248,"w":27,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":63},
                "sourceSize": {"w":27,"h":63}
            },
        "num_1_500001":
            {
                "frame": {"x":578,"y":580,"w":27,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":63},
                "sourceSize": {"w":27,"h":63}
            },
        "num_1_500002":
            {
                "frame": {"x":606,"y":580,"w":27,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":63},
                "sourceSize": {"w":27,"h":63}
            },
        "num_1_500003":
            {
                "frame": {"x":634,"y":580,"w":27,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":63},
                "sourceSize": {"w":27,"h":63}
            },
        "num_1_500004":
            {
                "frame": {"x":662,"y":580,"w":27,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":63},
                "sourceSize": {"w":27,"h":63}
            },
        "num_1_500005":
            {
                "frame": {"x":726,"y":580,"w":27,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":63},
                "sourceSize": {"w":27,"h":63}
            },
        "num_1_500006":
            {
                "frame": {"x":754,"y":580,"w":27,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":63},
                "sourceSize": {"w":27,"h":63}
            },
        "num_1_500007":
            {
                "frame": {"x":782,"y":580,"w":27,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":63},
                "sourceSize": {"w":27,"h":63}
            },
        "num_1_500008":
            {
                "frame": {"x":130,"y":585,"w":27,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":63},
                "sourceSize": {"w":27,"h":63}
            },
        "num_1_500009":
            {
                "frame": {"x":274,"y":585,"w":27,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":63},
                "sourceSize": {"w":27,"h":63}
            },
        "num_2_280000":
            {
                "frame": {"x":962,"y":967,"w":19,"h":33},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":33},
                "sourceSize": {"w":19,"h":33}
            },
        "num_2_280001":
            {
                "frame": {"x":114,"y":968,"w":19,"h":33},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":33},
                "sourceSize": {"w":19,"h":33}
            },
        "num_2_280002":
            {
                "frame": {"x":896,"y":976,"w":19,"h":33},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":33},
                "sourceSize": {"w":19,"h":33}
            },
        "num_2_280003":
            {
                "frame": {"x":587,"y":980,"w":19,"h":33},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":33},
                "sourceSize": {"w":19,"h":33}
            },
        "num_2_280004":
            {
                "frame": {"x":792,"y":980,"w":19,"h":33},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":33},
                "sourceSize": {"w":19,"h":33}
            },
        "num_2_280005":
            {
                "frame": {"x":415,"y":981,"w":19,"h":33},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":33},
                "sourceSize": {"w":19,"h":33}
            },
        "num_2_280006":
            {
                "frame": {"x":916,"y":981,"w":19,"h":33},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":33},
                "sourceSize": {"w":19,"h":33}
            },
        "num_2_280007":
            {
                "frame": {"x":982,"y":981,"w":19,"h":33},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":33},
                "sourceSize": {"w":19,"h":33}
            },
        "num_2_280008":
            {
                "frame": {"x":1002,"y":981,"w":19,"h":33},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":33},
                "sourceSize": {"w":19,"h":33}
            },
        "num_2_280009":
            {
                "frame": {"x":435,"y":982,"w":19,"h":33},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":33},
                "sourceSize": {"w":19,"h":33}
            },
        "num_2_350000":
            {
                "frame": {"x":301,"y":867,"w":23,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":41},
                "sourceSize": {"w":23,"h":41}
            },
        "num_2_350001":
            {
                "frame": {"x":625,"y":867,"w":23,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":41},
                "sourceSize": {"w":23,"h":41}
            },
        "num_2_350002":
            {
                "frame": {"x":649,"y":867,"w":23,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":41},
                "sourceSize": {"w":23,"h":41}
            },
        "num_2_350003":
            {
                "frame": {"x":673,"y":867,"w":23,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":41},
                "sourceSize": {"w":23,"h":41}
            },
        "num_2_350004":
            {
                "frame": {"x":697,"y":867,"w":23,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":41},
                "sourceSize": {"w":23,"h":41}
            },
        "num_2_350005":
            {
                "frame": {"x":52,"y":868,"w":23,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":41},
                "sourceSize": {"w":23,"h":41}
            },
        "num_2_350006":
            {
                "frame": {"x":76,"y":868,"w":23,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":41},
                "sourceSize": {"w":23,"h":41}
            },
        "num_2_350007":
            {
                "frame": {"x":199,"y":868,"w":23,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":41},
                "sourceSize": {"w":23,"h":41}
            },
        "num_2_350008":
            {
                "frame": {"x":223,"y":868,"w":23,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":41},
                "sourceSize": {"w":23,"h":41}
            },
        "num_2_350009":
            {
                "frame": {"x":247,"y":868,"w":23,"h":41},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":41},
                "sourceSize": {"w":23,"h":41}
            },
        "num_2_430000":
            {
                "frame": {"x":995,"y":506,"w":27,"h":49},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":49},
                "sourceSize": {"w":27,"h":49}
            },
        "num_2_430001":
            {
                "frame": {"x":650,"y":702,"w":27,"h":49},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":49},
                "sourceSize": {"w":27,"h":49}
            },
        "num_2_430002":
            {
                "frame": {"x":716,"y":702,"w":27,"h":49},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":49},
                "sourceSize": {"w":27,"h":49}
            },
        "num_2_430003":
            {
                "frame": {"x":744,"y":702,"w":27,"h":49},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":49},
                "sourceSize": {"w":27,"h":49}
            },
        "num_2_430004":
            {
                "frame": {"x":772,"y":702,"w":27,"h":49},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":49},
                "sourceSize": {"w":27,"h":49}
            },
        "num_2_430005":
            {
                "frame": {"x":122,"y":703,"w":27,"h":49},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":49},
                "sourceSize": {"w":27,"h":49}
            },
        "num_2_430006":
            {
                "frame": {"x":246,"y":703,"w":27,"h":49},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":49},
                "sourceSize": {"w":27,"h":49}
            },
        "num_2_430007":
            {
                "frame": {"x":348,"y":703,"w":27,"h":49},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":49},
                "sourceSize": {"w":27,"h":49}
            },
        "num_2_430008":
            {
                "frame": {"x":376,"y":703,"w":27,"h":49},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":49},
                "sourceSize": {"w":27,"h":49}
            },
        "num_2_430009":
            {
                "frame": {"x":404,"y":703,"w":27,"h":49},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":49},
                "sourceSize": {"w":27,"h":49}
            },
        "num_2_500000":
            {
                "frame": {"x":98,"y":549,"w":31,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":57},
                "sourceSize": {"w":31,"h":57}
            },
        "num_2_500001":
            {
                "frame": {"x":514,"y":550,"w":31,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":57},
                "sourceSize": {"w":31,"h":57}
            },
        "num_2_500002":
            {
                "frame": {"x":546,"y":550,"w":31,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":57},
                "sourceSize": {"w":31,"h":57}
            },
        "num_2_500003":
            {
                "frame": {"x":178,"y":560,"w":31,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":57},
                "sourceSize": {"w":31,"h":57}
            },
        "num_2_500004":
            {
                "frame": {"x":210,"y":560,"w":31,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":57},
                "sourceSize": {"w":31,"h":57}
            },
        "num_2_500005":
            {
                "frame": {"x":242,"y":560,"w":31,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":57},
                "sourceSize": {"w":31,"h":57}
            },
        "num_2_500006":
            {
                "frame": {"x":910,"y":561,"w":31,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":57},
                "sourceSize": {"w":31,"h":57}
            },
        "num_2_500007":
            {
                "frame": {"x":942,"y":561,"w":31,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":57},
                "sourceSize": {"w":31,"h":57}
            },
        "num_2_500008":
            {
                "frame": {"x":974,"y":561,"w":31,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":57},
                "sourceSize": {"w":31,"h":57}
            },
        "num_2_500009":
            {
                "frame": {"x":694,"y":578,"w":31,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":57},
                "sourceSize": {"w":31,"h":57}
            },
        "num_3_280000":
            {
                "frame": {"x":774,"y":929,"w":30,"h":25},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":30,"h":25},
                "sourceSize": {"w":30,"h":25}
            },
        "num_3_280001":
            {
                "frame": {"x":2,"y":935,"w":30,"h":25},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":30,"h":25},
                "sourceSize": {"w":30,"h":25}
            },
        "num_3_280002":
            {
                "frame": {"x":313,"y":935,"w":30,"h":25},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":30,"h":25},
                "sourceSize": {"w":30,"h":25}
            },
        "num_3_280003":
            {
                "frame": {"x":344,"y":935,"w":30,"h":25},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":30,"h":25},
                "sourceSize": {"w":30,"h":25}
            },
        "num_3_280004":
            {
                "frame": {"x":869,"y":936,"w":30,"h":25},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":30,"h":25},
                "sourceSize": {"w":30,"h":25}
            },
        "num_3_280005":
            {
                "frame": {"x":154,"y":940,"w":30,"h":25},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":30,"h":25},
                "sourceSize": {"w":30,"h":25}
            },
        "num_3_280006":
            {
                "frame": {"x":505,"y":940,"w":30,"h":25},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":30,"h":25},
                "sourceSize": {"w":30,"h":25}
            },
        "num_3_280007":
            {
                "frame": {"x":536,"y":940,"w":30,"h":25},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":30,"h":25},
                "sourceSize": {"w":30,"h":25}
            },
        "num_3_280008":
            {
                "frame": {"x":962,"y":941,"w":30,"h":25},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":30,"h":25},
                "sourceSize": {"w":30,"h":25}
            },
        "num_3_280009":
            {
                "frame": {"x":122,"y":942,"w":30,"h":25},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":30,"h":25},
                "sourceSize": {"w":30,"h":25}
            },
        "num_3_350000":
            {
                "frame": {"x":274,"y":745,"w":38,"h":32},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":38,"h":32},
                "sourceSize": {"w":38,"h":32}
            },
        "num_3_350001":
            {
                "frame": {"x":2,"y":746,"w":38,"h":32},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":38,"h":32},
                "sourceSize": {"w":38,"h":32}
            },
        "num_3_350002":
            {
                "frame": {"x":432,"y":746,"w":38,"h":32},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":38,"h":32},
                "sourceSize": {"w":38,"h":32}
            },
        "num_3_350003":
            {
                "frame": {"x":471,"y":752,"w":38,"h":32},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":38,"h":32},
                "sourceSize": {"w":38,"h":32}
            },
        "num_3_350004":
            {
                "frame": {"x":650,"y":752,"w":38,"h":32},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":38,"h":32},
                "sourceSize": {"w":38,"h":32}
            },
        "num_3_350005":
            {
                "frame": {"x":689,"y":752,"w":38,"h":32},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":38,"h":32},
                "sourceSize": {"w":38,"h":32}
            },
        "num_3_350006":
            {
                "frame": {"x":728,"y":752,"w":38,"h":32},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":38,"h":32},
                "sourceSize": {"w":38,"h":32}
            },
        "num_3_350007":
            {
                "frame": {"x":92,"y":753,"w":38,"h":32},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":38,"h":32},
                "sourceSize": {"w":38,"h":32}
            },
        "num_3_350008":
            {
                "frame": {"x":222,"y":753,"w":38,"h":32},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":38,"h":32},
                "sourceSize": {"w":38,"h":32}
            },
        "num_3_350009":
            {
                "frame": {"x":313,"y":753,"w":38,"h":32},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":38,"h":32},
                "sourceSize": {"w":38,"h":32}
            },
        "num_3_430000":
            {
                "frame": {"x":130,"y":545,"w":47,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":47,"h":39},
                "sourceSize": {"w":47,"h":39}
            },
        "num_3_430001":
            {
                "frame": {"x":274,"y":545,"w":47,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":47,"h":39},
                "sourceSize": {"w":47,"h":39}
            },
        "num_3_430002":
            {
                "frame": {"x":322,"y":545,"w":47,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":47,"h":39},
                "sourceSize": {"w":47,"h":39}
            },
        "num_3_430003":
            {
                "frame": {"x":2,"y":546,"w":47,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":47,"h":39},
                "sourceSize": {"w":47,"h":39}
            },
        "num_3_430004":
            {
                "frame": {"x":50,"y":546,"w":47,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":47,"h":39},
                "sourceSize": {"w":47,"h":39}
            },
        "num_3_430005":
            {
                "frame": {"x":370,"y":547,"w":47,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":47,"h":39},
                "sourceSize": {"w":47,"h":39}
            },
        "num_3_430006":
            {
                "frame": {"x":418,"y":547,"w":47,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":47,"h":39},
                "sourceSize": {"w":47,"h":39}
            },
        "num_3_430007":
            {
                "frame": {"x":814,"y":548,"w":47,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":47,"h":39},
                "sourceSize": {"w":47,"h":39}
            },
        "num_3_430008":
            {
                "frame": {"x":862,"y":548,"w":47,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":47,"h":39},
                "sourceSize": {"w":47,"h":39}
            },
        "num_3_430009":
            {
                "frame": {"x":466,"y":550,"w":47,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":47,"h":39},
                "sourceSize": {"w":47,"h":39}
            },
        "num_3_500000":
            {
                "frame": {"x":294,"y":371,"w":54,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":54,"h":45},
                "sourceSize": {"w":54,"h":45}
            },
        "num_3_500001":
            {
                "frame": {"x":349,"y":371,"w":54,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":54,"h":45},
                "sourceSize": {"w":54,"h":45}
            },
        "num_3_500002":
            {
                "frame": {"x":404,"y":373,"w":54,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":54,"h":45},
                "sourceSize": {"w":54,"h":45}
            },
        "num_3_500003":
            {
                "frame": {"x":459,"y":373,"w":54,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":54,"h":45},
                "sourceSize": {"w":54,"h":45}
            },
        "num_3_500004":
            {
                "frame": {"x":861,"y":374,"w":54,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":54,"h":45},
                "sourceSize": {"w":54,"h":45}
            },
        "num_3_500005":
            {
                "frame": {"x":134,"y":375,"w":54,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":54,"h":45},
                "sourceSize": {"w":54,"h":45}
            },
        "num_3_500006":
            {
                "frame": {"x":189,"y":375,"w":54,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":54,"h":45},
                "sourceSize": {"w":54,"h":45}
            },
        "num_3_500007":
            {
                "frame": {"x":916,"y":376,"w":54,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":54,"h":45},
                "sourceSize": {"w":54,"h":45}
            },
        "num_3_500008":
            {
                "frame": {"x":726,"y":413,"w":54,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":54,"h":45},
                "sourceSize": {"w":54,"h":45}
            },
        "num_3_500009":
            {
                "frame": {"x":781,"y":413,"w":54,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":54,"h":45},
                "sourceSize": {"w":54,"h":45}
            },
        "num_4_280000":
            {
                "frame": {"x":263,"y":948,"w":19,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":37},
                "sourceSize": {"w":19,"h":37}
            },
        "num_4_280001":
            {
                "frame": {"x":463,"y":948,"w":19,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":37},
                "sourceSize": {"w":19,"h":37}
            },
        "num_4_280002":
            {
                "frame": {"x":483,"y":948,"w":19,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":37},
                "sourceSize": {"w":19,"h":37}
            },
        "num_4_280003":
            {
                "frame": {"x":827,"y":949,"w":19,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":37},
                "sourceSize": {"w":19,"h":37}
            },
        "num_4_280004":
            {
                "frame": {"x":847,"y":949,"w":19,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":37},
                "sourceSize": {"w":19,"h":37}
            },
        "num_4_280005":
            {
                "frame": {"x":225,"y":950,"w":19,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":37},
                "sourceSize": {"w":19,"h":37}
            },
        "num_4_280006":
            {
                "frame": {"x":732,"y":955,"w":19,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":37},
                "sourceSize": {"w":19,"h":37}
            },
        "num_4_280007":
            {
                "frame": {"x":752,"y":955,"w":19,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":37},
                "sourceSize": {"w":19,"h":37}
            },
        "num_4_280008":
            {
                "frame": {"x":772,"y":955,"w":19,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":37},
                "sourceSize": {"w":19,"h":37}
            },
        "num_4_280009":
            {
                "frame": {"x":2,"y":961,"w":19,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":37},
                "sourceSize": {"w":19,"h":37}
            },
        "num_4_350000":
            {
                "frame": {"x":644,"y":821,"w":23,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":45},
                "sourceSize": {"w":23,"h":45}
            },
        "num_4_350001":
            {
                "frame": {"x":668,"y":821,"w":23,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":45},
                "sourceSize": {"w":23,"h":45}
            },
        "num_4_350002":
            {
                "frame": {"x":692,"y":821,"w":23,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":45},
                "sourceSize": {"w":23,"h":45}
            },
        "num_4_350003":
            {
                "frame": {"x":716,"y":821,"w":23,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":45},
                "sourceSize": {"w":23,"h":45}
            },
        "num_4_350004":
            {
                "frame": {"x":56,"y":822,"w":23,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":45},
                "sourceSize": {"w":23,"h":45}
            },
        "num_4_350005":
            {
                "frame": {"x":205,"y":822,"w":23,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":45},
                "sourceSize": {"w":23,"h":45}
            },
        "num_4_350006":
            {
                "frame": {"x":229,"y":822,"w":23,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":45},
                "sourceSize": {"w":23,"h":45}
            },
        "num_4_350007":
            {
                "frame": {"x":253,"y":822,"w":23,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":45},
                "sourceSize": {"w":23,"h":45}
            },
        "num_4_350008":
            {
                "frame": {"x":277,"y":822,"w":23,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":45},
                "sourceSize": {"w":23,"h":45}
            },
        "num_4_350009":
            {
                "frame": {"x":2,"y":823,"w":23,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":45},
                "sourceSize": {"w":23,"h":45}
            },
        "num_4_430000":
            {
                "frame": {"x":548,"y":608,"w":29,"h":55},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":55},
                "sourceSize": {"w":29,"h":55}
            },
        "num_4_430001":
            {
                "frame": {"x":966,"y":619,"w":29,"h":55},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":55},
                "sourceSize": {"w":29,"h":55}
            },
        "num_4_430002":
            {
                "frame": {"x":690,"y":636,"w":29,"h":55},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":55},
                "sourceSize": {"w":29,"h":55}
            },
        "num_4_430003":
            {
                "frame": {"x":870,"y":642,"w":29,"h":55},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":55},
                "sourceSize": {"w":29,"h":55}
            },
        "num_4_430004":
            {
                "frame": {"x":302,"y":643,"w":29,"h":55},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":55},
                "sourceSize": {"w":29,"h":55}
            },
        "num_4_430005":
            {
                "frame": {"x":332,"y":643,"w":29,"h":55},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":55},
                "sourceSize": {"w":29,"h":55}
            },
        "num_4_430006":
            {
                "frame": {"x":2,"y":644,"w":29,"h":55},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":55},
                "sourceSize": {"w":29,"h":55}
            },
        "num_4_430007":
            {
                "frame": {"x":32,"y":644,"w":29,"h":55},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":55},
                "sourceSize": {"w":29,"h":55}
            },
        "num_4_430008":
            {
                "frame": {"x":62,"y":644,"w":29,"h":55},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":55},
                "sourceSize": {"w":29,"h":55}
            },
        "num_4_430009":
            {
                "frame": {"x":452,"y":644,"w":29,"h":55},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":55},
                "sourceSize": {"w":29,"h":55}
            },
        "num_4_500000":
            {
                "frame": {"x":576,"y":246,"w":32,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":32,"h":63},
                "sourceSize": {"w":32,"h":63}
            },
        "num_4_500001":
            {
                "frame": {"x":592,"y":426,"w":32,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":32,"h":63},
                "sourceSize": {"w":32,"h":63}
            },
        "num_4_500002":
            {
                "frame": {"x":625,"y":426,"w":32,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":32,"h":63},
                "sourceSize": {"w":32,"h":63}
            },
        "num_4_500003":
            {
                "frame": {"x":658,"y":426,"w":32,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":32,"h":63},
                "sourceSize": {"w":32,"h":63}
            },
        "num_4_500004":
            {
                "frame": {"x":691,"y":426,"w":32,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":32,"h":63},
                "sourceSize": {"w":32,"h":63}
            },
        "num_4_500005":
            {
                "frame": {"x":212,"y":441,"w":32,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":32,"h":63},
                "sourceSize": {"w":32,"h":63}
            },
        "num_4_500006":
            {
                "frame": {"x":245,"y":441,"w":32,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":32,"h":63},
                "sourceSize": {"w":32,"h":63}
            },
        "num_4_500007":
            {
                "frame": {"x":944,"y":442,"w":32,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":32,"h":63},
                "sourceSize": {"w":32,"h":63}
            },
        "num_4_500008":
            {
                "frame": {"x":977,"y":442,"w":32,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":32,"h":63},
                "sourceSize": {"w":32,"h":63}
            },
        "num_4_500009":
            {
                "frame": {"x":724,"y":459,"w":32,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":32,"h":63},
                "sourceSize": {"w":32,"h":63}
            },
        "num_5_280000":
            {
                "frame": {"x":271,"y":868,"w":25,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":37},
                "sourceSize": {"w":25,"h":37}
            },
        "num_5_280001":
            {
                "frame": {"x":459,"y":878,"w":25,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":37},
                "sourceSize": {"w":25,"h":37}
            },
        "num_5_280002":
            {
                "frame": {"x":485,"y":884,"w":25,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":37},
                "sourceSize": {"w":25,"h":37}
            },
        "num_5_280003":
            {
                "frame": {"x":846,"y":885,"w":25,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":37},
                "sourceSize": {"w":25,"h":37}
            },
        "num_5_280004":
            {
                "frame": {"x":2,"y":891,"w":25,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":37},
                "sourceSize": {"w":25,"h":37}
            },
        "num_5_280005":
            {
                "frame": {"x":764,"y":891,"w":25,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":37},
                "sourceSize": {"w":25,"h":37}
            },
        "num_5_280006":
            {
                "frame": {"x":790,"y":891,"w":25,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":37},
                "sourceSize": {"w":25,"h":37}
            },
        "num_5_280007":
            {
                "frame": {"x":872,"y":892,"w":25,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":37},
                "sourceSize": {"w":25,"h":37}
            },
        "num_5_280008":
            {
                "frame": {"x":325,"y":897,"w":25,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":37},
                "sourceSize": {"w":25,"h":37}
            },
        "num_5_280009":
            {
                "frame": {"x":351,"y":897,"w":25,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":37},
                "sourceSize": {"w":25,"h":37}
            },
        "num_5_350000":
            {
                "frame": {"x":214,"y":672,"w":31,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":45},
                "sourceSize": {"w":31,"h":45}
            },
        "num_5_350001":
            {
                "frame": {"x":900,"y":673,"w":31,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":45},
                "sourceSize": {"w":31,"h":45}
            },
        "num_5_350002":
            {
                "frame": {"x":932,"y":673,"w":31,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":45},
                "sourceSize": {"w":31,"h":45}
            },
        "num_5_350003":
            {
                "frame": {"x":964,"y":675,"w":31,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":45},
                "sourceSize": {"w":31,"h":45}
            },
        "num_5_350004":
            {
                "frame": {"x":864,"y":698,"w":31,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":45},
                "sourceSize": {"w":31,"h":45}
            },
        "num_5_350005":
            {
                "frame": {"x":284,"y":699,"w":31,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":45},
                "sourceSize": {"w":31,"h":45}
            },
        "num_5_350006":
            {
                "frame": {"x":316,"y":699,"w":31,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":45},
                "sourceSize": {"w":31,"h":45}
            },
        "num_5_350007":
            {
                "frame": {"x":2,"y":700,"w":31,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":45},
                "sourceSize": {"w":31,"h":45}
            },
        "num_5_350008":
            {
                "frame": {"x":34,"y":700,"w":31,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":45},
                "sourceSize": {"w":31,"h":45}
            },
        "num_5_350009":
            {
                "frame": {"x":446,"y":700,"w":31,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":45},
                "sourceSize": {"w":31,"h":45}
            },
        "num_5_430000":
            {
                "frame": {"x":198,"y":505,"w":37,"h":54},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":37,"h":54},
                "sourceSize": {"w":37,"h":54}
            },
        "num_5_430001":
            {
                "frame": {"x":236,"y":505,"w":37,"h":54},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":37,"h":54},
                "sourceSize": {"w":37,"h":54}
            },
        "num_5_430002":
            {
                "frame": {"x":919,"y":506,"w":37,"h":54},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":37,"h":54},
                "sourceSize": {"w":37,"h":54}
            },
        "num_5_430003":
            {
                "frame": {"x":957,"y":506,"w":37,"h":54},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":37,"h":54},
                "sourceSize": {"w":37,"h":54}
            },
        "num_5_430004":
            {
                "frame": {"x":700,"y":523,"w":37,"h":54},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":37,"h":54},
                "sourceSize": {"w":37,"h":54}
            },
        "num_5_430005":
            {
                "frame": {"x":580,"y":525,"w":37,"h":54},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":37,"h":54},
                "sourceSize": {"w":37,"h":54}
            },
        "num_5_430006":
            {
                "frame": {"x":618,"y":525,"w":37,"h":54},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":37,"h":54},
                "sourceSize": {"w":37,"h":54}
            },
        "num_5_430007":
            {
                "frame": {"x":656,"y":525,"w":37,"h":54},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":37,"h":54},
                "sourceSize": {"w":37,"h":54}
            },
        "num_5_430008":
            {
                "frame": {"x":738,"y":525,"w":37,"h":54},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":37,"h":54},
                "sourceSize": {"w":37,"h":54}
            },
        "num_5_430009":
            {
                "frame": {"x":776,"y":525,"w":37,"h":54},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":37,"h":54},
                "sourceSize": {"w":37,"h":54}
            },
        "num_5_500000":
            {
                "frame": {"x":953,"y":312,"w":43,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":43,"h":63},
                "sourceSize": {"w":43,"h":63}
            },
        "num_5_500001":
            {
                "frame": {"x":729,"y":349,"w":43,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":43,"h":63},
                "sourceSize": {"w":43,"h":63}
            },
        "num_5_500002":
            {
                "frame": {"x":773,"y":349,"w":43,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":43,"h":63},
                "sourceSize": {"w":43,"h":63}
            },
        "num_5_500003":
            {
                "frame": {"x":817,"y":349,"w":43,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":43,"h":63},
                "sourceSize": {"w":43,"h":63}
            },
        "num_5_500004":
            {
                "frame": {"x":2,"y":350,"w":43,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":43,"h":63},
                "sourceSize": {"w":43,"h":63}
            },
        "num_5_500005":
            {
                "frame": {"x":46,"y":350,"w":43,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":43,"h":63},
                "sourceSize": {"w":43,"h":63}
            },
        "num_5_500006":
            {
                "frame": {"x":90,"y":350,"w":43,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":43,"h":63},
                "sourceSize": {"w":43,"h":63}
            },
        "num_5_500007":
            {
                "frame": {"x":594,"y":362,"w":43,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":43,"h":63},
                "sourceSize": {"w":43,"h":63}
            },
        "num_5_500008":
            {
                "frame": {"x":638,"y":362,"w":43,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":43,"h":63},
                "sourceSize": {"w":43,"h":63}
            },
        "num_5_500009":
            {
                "frame": {"x":682,"y":362,"w":43,"h":63},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":43,"h":63},
                "sourceSize": {"w":43,"h":63}
            },
        "num_6_280000":
            {
                "frame": {"x":177,"y":898,"w":21,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":39},
                "sourceSize": {"w":21,"h":39}
            },
        "num_6_280001":
            {
                "frame": {"x":602,"y":900,"w":21,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":39},
                "sourceSize": {"w":21,"h":39}
            },
        "num_6_280002":
            {
                "frame": {"x":964,"y":901,"w":21,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":39},
                "sourceSize": {"w":21,"h":39}
            },
        "num_6_280003":
            {
                "frame": {"x":986,"y":901,"w":21,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":39},
                "sourceSize": {"w":21,"h":39}
            },
        "num_6_280004":
            {
                "frame": {"x":377,"y":903,"w":21,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":39},
                "sourceSize": {"w":21,"h":39}
            },
        "num_6_280005":
            {
                "frame": {"x":399,"y":903,"w":21,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":39},
                "sourceSize": {"w":21,"h":39}
            },
        "num_6_280006":
            {
                "frame": {"x":100,"y":904,"w":21,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":39},
                "sourceSize": {"w":21,"h":39}
            },
        "num_6_280007":
            {
                "frame": {"x":816,"y":904,"w":21,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":39},
                "sourceSize": {"w":21,"h":39}
            },
        "num_6_280008":
            {
                "frame": {"x":421,"y":905,"w":21,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":39},
                "sourceSize": {"w":21,"h":39}
            },
        "num_6_280009":
            {
                "frame": {"x":920,"y":905,"w":21,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":39},
                "sourceSize": {"w":21,"h":39}
            },
        "num_6_350000":
            {
                "frame": {"x":540,"y":754,"w":25,"h":47},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":47},
                "sourceSize": {"w":25,"h":47}
            },
        "num_6_350001":
            {
                "frame": {"x":892,"y":755,"w":25,"h":47},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":47},
                "sourceSize": {"w":25,"h":47}
            },
        "num_6_350002":
            {
                "frame": {"x":41,"y":756,"w":25,"h":47},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":47},
                "sourceSize": {"w":25,"h":47}
            },
        "num_6_350003":
            {
                "frame": {"x":797,"y":756,"w":25,"h":47},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":47},
                "sourceSize": {"w":25,"h":47}
            },
        "num_6_350004":
            {
                "frame": {"x":823,"y":756,"w":25,"h":47},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":47},
                "sourceSize": {"w":25,"h":47}
            },
        "num_6_350005":
            {
                "frame": {"x":918,"y":757,"w":25,"h":47},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":47},
                "sourceSize": {"w":25,"h":47}
            },
        "num_6_350006":
            {
                "frame": {"x":566,"y":758,"w":25,"h":47},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":47},
                "sourceSize": {"w":25,"h":47}
            },
        "num_6_350007":
            {
                "frame": {"x":592,"y":758,"w":25,"h":47},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":47},
                "sourceSize": {"w":25,"h":47}
            },
        "num_6_350008":
            {
                "frame": {"x":618,"y":758,"w":25,"h":47},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":47},
                "sourceSize": {"w":25,"h":47}
            },
        "num_6_350009":
            {
                "frame": {"x":131,"y":762,"w":25,"h":47},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":47},
                "sourceSize": {"w":25,"h":47}
            },
        "num_6_430000":
            {
                "frame": {"x":302,"y":585,"w":29,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":57},
                "sourceSize": {"w":29,"h":57}
            },
        "num_6_430001":
            {
                "frame": {"x":332,"y":585,"w":29,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":57},
                "sourceSize": {"w":29,"h":57}
            },
        "num_6_430002":
            {
                "frame": {"x":2,"y":586,"w":29,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":57},
                "sourceSize": {"w":29,"h":57}
            },
        "num_6_430003":
            {
                "frame": {"x":32,"y":586,"w":29,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":57},
                "sourceSize": {"w":29,"h":57}
            },
        "num_6_430004":
            {
                "frame": {"x":62,"y":586,"w":29,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":57},
                "sourceSize": {"w":29,"h":57}
            },
        "num_6_430005":
            {
                "frame": {"x":362,"y":587,"w":29,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":57},
                "sourceSize": {"w":29,"h":57}
            },
        "num_6_430006":
            {
                "frame": {"x":392,"y":587,"w":29,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":57},
                "sourceSize": {"w":29,"h":57}
            },
        "num_6_430007":
            {
                "frame": {"x":422,"y":587,"w":29,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":57},
                "sourceSize": {"w":29,"h":57}
            },
        "num_6_430008":
            {
                "frame": {"x":810,"y":588,"w":29,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":57},
                "sourceSize": {"w":29,"h":57}
            },
        "num_6_430009":
            {
                "frame": {"x":840,"y":588,"w":29,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":57},
                "sourceSize": {"w":29,"h":57}
            },
        "num_6_500000":
            {
                "frame": {"x":244,"y":375,"w":33,"h":65},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":65},
                "sourceSize": {"w":33,"h":65}
            },
        "num_6_500001":
            {
                "frame": {"x":971,"y":376,"w":33,"h":65},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":65},
                "sourceSize": {"w":33,"h":65}
            },
        "num_6_500002":
            {
                "frame": {"x":2,"y":414,"w":33,"h":65},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":65},
                "sourceSize": {"w":33,"h":65}
            },
        "num_6_500003":
            {
                "frame": {"x":36,"y":414,"w":33,"h":65},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":65},
                "sourceSize": {"w":33,"h":65}
            },
        "num_6_500004":
            {
                "frame": {"x":70,"y":414,"w":33,"h":65},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":65},
                "sourceSize": {"w":33,"h":65}
            },
        "num_6_500005":
            {
                "frame": {"x":278,"y":417,"w":33,"h":65},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":65},
                "sourceSize": {"w":33,"h":65}
            },
        "num_6_500006":
            {
                "frame": {"x":312,"y":417,"w":33,"h":65},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":65},
                "sourceSize": {"w":33,"h":65}
            },
        "num_6_500007":
            {
                "frame": {"x":346,"y":417,"w":33,"h":65},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":65},
                "sourceSize": {"w":33,"h":65}
            },
        "num_6_500008":
            {
                "frame": {"x":380,"y":419,"w":33,"h":65},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":65},
                "sourceSize": {"w":33,"h":65}
            },
        "num_6_500009":
            {
                "frame": {"x":414,"y":419,"w":33,"h":65},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":65},
                "sourceSize": {"w":33,"h":65}
            },
        "num_7_280000":
            {
                "frame": {"x":721,"y":906,"w":21,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":37},
                "sourceSize": {"w":21,"h":37}
            },
        "num_7_280001":
            {
                "frame": {"x":291,"y":909,"w":21,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":37},
                "sourceSize": {"w":21,"h":37}
            },
        "num_7_280002":
            {
                "frame": {"x":624,"y":909,"w":21,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":37},
                "sourceSize": {"w":21,"h":37}
            },
        "num_7_280003":
            {
                "frame": {"x":646,"y":909,"w":21,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":37},
                "sourceSize": {"w":21,"h":37}
            },
        "num_7_280004":
            {
                "frame": {"x":668,"y":909,"w":21,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":37},
                "sourceSize": {"w":21,"h":37}
            },
        "num_7_280005":
            {
                "frame": {"x":690,"y":909,"w":21,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":37},
                "sourceSize": {"w":21,"h":37}
            },
        "num_7_280006":
            {
                "frame": {"x":50,"y":910,"w":21,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":37},
                "sourceSize": {"w":21,"h":37}
            },
        "num_7_280007":
            {
                "frame": {"x":72,"y":910,"w":21,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":37},
                "sourceSize": {"w":21,"h":37}
            },
        "num_7_280008":
            {
                "frame": {"x":199,"y":910,"w":21,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":37},
                "sourceSize": {"w":21,"h":37}
            },
        "num_7_280009":
            {
                "frame": {"x":221,"y":910,"w":21,"h":37},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":37},
                "sourceSize": {"w":21,"h":37}
            },
        "num_7_350000":
            {
                "frame": {"x":101,"y":786,"w":25,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":45},
                "sourceSize": {"w":25,"h":45}
            },
        "num_7_350001":
            {
                "frame": {"x":357,"y":795,"w":25,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":45},
                "sourceSize": {"w":25,"h":45}
            },
        "num_7_350002":
            {
                "frame": {"x":383,"y":795,"w":25,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":45},
                "sourceSize": {"w":25,"h":45}
            },
        "num_7_350003":
            {
                "frame": {"x":496,"y":796,"w":25,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":45},
                "sourceSize": {"w":25,"h":45}
            },
        "num_7_350004":
            {
                "frame": {"x":522,"y":802,"w":25,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":45},
                "sourceSize": {"w":25,"h":45}
            },
        "num_7_350005":
            {
                "frame": {"x":877,"y":803,"w":25,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":45},
                "sourceSize": {"w":25,"h":45}
            },
        "num_7_350006":
            {
                "frame": {"x":30,"y":804,"w":25,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":45},
                "sourceSize": {"w":25,"h":45}
            },
        "num_7_350007":
            {
                "frame": {"x":780,"y":804,"w":25,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":45},
                "sourceSize": {"w":25,"h":45}
            },
        "num_7_350008":
            {
                "frame": {"x":806,"y":804,"w":25,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":45},
                "sourceSize": {"w":25,"h":45}
            },
        "num_7_350009":
            {
                "frame": {"x":903,"y":805,"w":25,"h":45},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":25,"h":45},
                "sourceSize": {"w":25,"h":45}
            },
        "num_7_430000":
            {
                "frame": {"x":804,"y":646,"w":29,"h":53},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":53},
                "sourceSize": {"w":29,"h":53}
            },
        "num_7_430001":
            {
                "frame": {"x":834,"y":646,"w":29,"h":53},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":53},
                "sourceSize": {"w":29,"h":53}
            },
        "num_7_430002":
            {
                "frame": {"x":124,"y":649,"w":29,"h":53},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":53},
                "sourceSize": {"w":29,"h":53}
            },
        "num_7_430003":
            {
                "frame": {"x":254,"y":649,"w":29,"h":53},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":53},
                "sourceSize": {"w":29,"h":53}
            },
        "num_7_430004":
            {
                "frame": {"x":92,"y":661,"w":29,"h":53},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":53},
                "sourceSize": {"w":29,"h":53}
            },
        "num_7_430005":
            {
                "frame": {"x":482,"y":662,"w":29,"h":53},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":53},
                "sourceSize": {"w":29,"h":53}
            },
        "num_7_430006":
            {
                "frame": {"x":512,"y":662,"w":29,"h":53},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":53},
                "sourceSize": {"w":29,"h":53}
            },
        "num_7_430007":
            {
                "frame": {"x":542,"y":664,"w":29,"h":53},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":53},
                "sourceSize": {"w":29,"h":53}
            },
        "num_7_430008":
            {
                "frame": {"x":154,"y":672,"w":29,"h":53},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":53},
                "sourceSize": {"w":29,"h":53}
            },
        "num_7_430009":
            {
                "frame": {"x":184,"y":672,"w":29,"h":53},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":29,"h":53},
                "sourceSize": {"w":29,"h":53}
            },
        "num_7_500000":
            {
                "frame": {"x":130,"y":483,"w":33,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":61},
                "sourceSize": {"w":33,"h":61}
            },
        "num_7_500001":
            {
                "frame": {"x":164,"y":483,"w":33,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":61},
                "sourceSize": {"w":33,"h":61}
            },
        "num_7_500002":
            {
                "frame": {"x":278,"y":483,"w":33,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":61},
                "sourceSize": {"w":33,"h":61}
            },
        "num_7_500003":
            {
                "frame": {"x":312,"y":483,"w":33,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":61},
                "sourceSize": {"w":33,"h":61}
            },
        "num_7_500004":
            {
                "frame": {"x":346,"y":483,"w":33,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":61},
                "sourceSize": {"w":33,"h":61}
            },
        "num_7_500005":
            {
                "frame": {"x":885,"y":484,"w":33,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":61},
                "sourceSize": {"w":33,"h":61}
            },
        "num_7_500006":
            {
                "frame": {"x":380,"y":485,"w":33,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":61},
                "sourceSize": {"w":33,"h":61}
            },
        "num_7_500007":
            {
                "frame": {"x":414,"y":485,"w":33,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":61},
                "sourceSize": {"w":33,"h":61}
            },
        "num_7_500008":
            {
                "frame": {"x":512,"y":488,"w":33,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":61},
                "sourceSize": {"w":33,"h":61}
            },
        "num_7_500009":
            {
                "frame": {"x":546,"y":488,"w":33,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":33,"h":61},
                "sourceSize": {"w":33,"h":61}
            },
        "num_8_280000":
            {
                "frame": {"x":550,"y":718,"w":21,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":35},
                "sourceSize": {"w":21,"h":35}
            },
        "num_8_280001":
            {
                "frame": {"x":805,"y":944,"w":21,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":35},
                "sourceSize": {"w":21,"h":35}
            },
        "num_8_280002":
            {
                "frame": {"x":415,"y":945,"w":21,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":35},
                "sourceSize": {"w":21,"h":35}
            },
        "num_8_280003":
            {
                "frame": {"x":920,"y":945,"w":21,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":35},
                "sourceSize": {"w":21,"h":35}
            },
        "num_8_280004":
            {
                "frame": {"x":291,"y":947,"w":21,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":35},
                "sourceSize": {"w":21,"h":35}
            },
        "num_8_280005":
            {
                "frame": {"x":622,"y":947,"w":21,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":35},
                "sourceSize": {"w":21,"h":35}
            },
        "num_8_280006":
            {
                "frame": {"x":644,"y":947,"w":21,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":35},
                "sourceSize": {"w":21,"h":35}
            },
        "num_8_280007":
            {
                "frame": {"x":666,"y":947,"w":21,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":35},
                "sourceSize": {"w":21,"h":35}
            },
        "num_8_280008":
            {
                "frame": {"x":688,"y":947,"w":21,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":35},
                "sourceSize": {"w":21,"h":35}
            },
        "num_8_280009":
            {
                "frame": {"x":33,"y":948,"w":21,"h":35},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":21,"h":35},
                "sourceSize": {"w":21,"h":35}
            },
        "num_8_350000":
            {
                "frame": {"x":157,"y":762,"w":27,"h":43},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":43},
                "sourceSize": {"w":27,"h":43}
            },
        "num_8_350001":
            {
                "frame": {"x":185,"y":762,"w":27,"h":43},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":43},
                "sourceSize": {"w":27,"h":43}
            },
        "num_8_350002":
            {
                "frame": {"x":944,"y":767,"w":27,"h":43},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":43},
                "sourceSize": {"w":27,"h":43}
            },
        "num_8_350003":
            {
                "frame": {"x":972,"y":767,"w":27,"h":43},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":43},
                "sourceSize": {"w":27,"h":43}
            },
        "num_8_350004":
            {
                "frame": {"x":261,"y":778,"w":27,"h":43},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":43},
                "sourceSize": {"w":27,"h":43}
            },
        "num_8_350005":
            {
                "frame": {"x":2,"y":779,"w":27,"h":43},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":43},
                "sourceSize": {"w":27,"h":43}
            },
        "num_8_350006":
            {
                "frame": {"x":412,"y":779,"w":27,"h":43},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":43},
                "sourceSize": {"w":27,"h":43}
            },
        "num_8_350007":
            {
                "frame": {"x":440,"y":779,"w":27,"h":43},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":43},
                "sourceSize": {"w":27,"h":43}
            },
        "num_8_350008":
            {
                "frame": {"x":849,"y":780,"w":27,"h":43},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":43},
                "sourceSize": {"w":27,"h":43}
            },
        "num_8_350009":
            {
                "frame": {"x":468,"y":785,"w":27,"h":43},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":43},
                "sourceSize": {"w":27,"h":43}
            },
        "num_8_430000":
            {
                "frame": {"x":870,"y":588,"w":31,"h":53},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":53},
                "sourceSize": {"w":31,"h":53}
            },
        "num_8_430001":
            {
                "frame": {"x":452,"y":590,"w":31,"h":53},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":53},
                "sourceSize": {"w":31,"h":53}
            },
        "num_8_430002":
            {
                "frame": {"x":92,"y":607,"w":31,"h":53},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":53},
                "sourceSize": {"w":31,"h":53}
            },
        "num_8_430003":
            {
                "frame": {"x":484,"y":608,"w":31,"h":53},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":53},
                "sourceSize": {"w":31,"h":53}
            },
        "num_8_430004":
            {
                "frame": {"x":516,"y":608,"w":31,"h":53},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":53},
                "sourceSize": {"w":31,"h":53}
            },
        "num_8_430005":
            {
                "frame": {"x":158,"y":618,"w":31,"h":53},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":53},
                "sourceSize": {"w":31,"h":53}
            },
        "num_8_430006":
            {
                "frame": {"x":190,"y":618,"w":31,"h":53},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":53},
                "sourceSize": {"w":31,"h":53}
            },
        "num_8_430007":
            {
                "frame": {"x":222,"y":618,"w":31,"h":53},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":53},
                "sourceSize": {"w":31,"h":53}
            },
        "num_8_430008":
            {
                "frame": {"x":902,"y":619,"w":31,"h":53},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":53},
                "sourceSize": {"w":31,"h":53}
            },
        "num_8_430009":
            {
                "frame": {"x":934,"y":619,"w":31,"h":53},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":53},
                "sourceSize": {"w":31,"h":53}
            },
        "num_8_500000":
            {
                "frame": {"x":448,"y":419,"w":35,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":35,"h":61},
                "sourceSize": {"w":35,"h":61}
            },
        "num_8_500001":
            {
                "frame": {"x":484,"y":419,"w":35,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":35,"h":61},
                "sourceSize": {"w":35,"h":61}
            },
        "num_8_500002":
            {
                "frame": {"x":836,"y":420,"w":35,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":35,"h":61},
                "sourceSize": {"w":35,"h":61}
            },
        "num_8_500003":
            {
                "frame": {"x":872,"y":420,"w":35,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":35,"h":61},
                "sourceSize": {"w":35,"h":61}
            },
        "num_8_500004":
            {
                "frame": {"x":104,"y":421,"w":35,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":35,"h":61},
                "sourceSize": {"w":35,"h":61}
            },
        "num_8_500005":
            {
                "frame": {"x":140,"y":421,"w":35,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":35,"h":61},
                "sourceSize": {"w":35,"h":61}
            },
        "num_8_500006":
            {
                "frame": {"x":176,"y":421,"w":35,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":35,"h":61},
                "sourceSize": {"w":35,"h":61}
            },
        "num_8_500007":
            {
                "frame": {"x":908,"y":422,"w":35,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":35,"h":61},
                "sourceSize": {"w":35,"h":61}
            },
        "num_8_500008":
            {
                "frame": {"x":520,"y":426,"w":35,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":35,"h":61},
                "sourceSize": {"w":35,"h":61}
            },
        "num_8_500009":
            {
                "frame": {"x":556,"y":426,"w":35,"h":61},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":35,"h":61},
                "sourceSize": {"w":35,"h":61}
            },
        "num_9_280000":
            {
                "frame": {"x":243,"y":910,"w":19,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":39},
                "sourceSize": {"w":19,"h":39}
            },
        "num_9_280001":
            {
                "frame": {"x":900,"y":936,"w":19,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":39},
                "sourceSize": {"w":19,"h":39}
            },
        "num_9_280002":
            {
                "frame": {"x":602,"y":940,"w":19,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":39},
                "sourceSize": {"w":19,"h":39}
            },
        "num_9_280003":
            {
                "frame": {"x":993,"y":941,"w":19,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":39},
                "sourceSize": {"w":19,"h":39}
            },
        "num_9_280004":
            {
                "frame": {"x":443,"y":942,"w":19,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":39},
                "sourceSize": {"w":19,"h":39}
            },
        "num_9_280005":
            {
                "frame": {"x":567,"y":942,"w":19,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":39},
                "sourceSize": {"w":19,"h":39}
            },
        "num_9_280006":
            {
                "frame": {"x":375,"y":943,"w":19,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":39},
                "sourceSize": {"w":19,"h":39}
            },
        "num_9_280007":
            {
                "frame": {"x":395,"y":943,"w":19,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":39},
                "sourceSize": {"w":19,"h":39}
            },
        "num_9_280008":
            {
                "frame": {"x":94,"y":944,"w":19,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":39},
                "sourceSize": {"w":19,"h":39}
            },
        "num_9_280009":
            {
                "frame": {"x":712,"y":944,"w":19,"h":39},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":19,"h":39},
                "sourceSize": {"w":19,"h":39}
            },
        "num_9_350000":
            {
                "frame": {"x":157,"y":806,"w":23,"h":47},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":47},
                "sourceSize": {"w":23,"h":47}
            },
        "num_9_350001":
            {
                "frame": {"x":181,"y":806,"w":23,"h":47},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":47},
                "sourceSize": {"w":23,"h":47}
            },
        "num_9_350002":
            {
                "frame": {"x":548,"y":806,"w":23,"h":47},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":47},
                "sourceSize": {"w":23,"h":47}
            },
        "num_9_350003":
            {
                "frame": {"x":572,"y":806,"w":23,"h":47},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":47},
                "sourceSize": {"w":23,"h":47}
            },
        "num_9_350004":
            {
                "frame": {"x":596,"y":806,"w":23,"h":47},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":47},
                "sourceSize": {"w":23,"h":47}
            },
        "num_9_350005":
            {
                "frame": {"x":620,"y":806,"w":23,"h":47},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":47},
                "sourceSize": {"w":23,"h":47}
            },
        "num_9_350006":
            {
                "frame": {"x":127,"y":810,"w":23,"h":47},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":47},
                "sourceSize": {"w":23,"h":47}
            },
        "num_9_350007":
            {
                "frame": {"x":929,"y":811,"w":23,"h":47},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":47},
                "sourceSize": {"w":23,"h":47}
            },
        "num_9_350008":
            {
                "frame": {"x":953,"y":811,"w":23,"h":47},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":47},
                "sourceSize": {"w":23,"h":47}
            },
        "num_9_350009":
            {
                "frame": {"x":977,"y":811,"w":23,"h":47},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":23,"h":47},
                "sourceSize": {"w":23,"h":47}
            },
        "num_9_430000":
            {
                "frame": {"x":578,"y":644,"w":27,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":57},
                "sourceSize": {"w":27,"h":57}
            },
        "num_9_430001":
            {
                "frame": {"x":606,"y":644,"w":27,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":57},
                "sourceSize": {"w":27,"h":57}
            },
        "num_9_430002":
            {
                "frame": {"x":634,"y":644,"w":27,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":57},
                "sourceSize": {"w":27,"h":57}
            },
        "num_9_430003":
            {
                "frame": {"x":662,"y":644,"w":27,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":57},
                "sourceSize": {"w":27,"h":57}
            },
        "num_9_430004":
            {
                "frame": {"x":720,"y":644,"w":27,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":57},
                "sourceSize": {"w":27,"h":57}
            },
        "num_9_430005":
            {
                "frame": {"x":748,"y":644,"w":27,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":57},
                "sourceSize": {"w":27,"h":57}
            },
        "num_9_430006":
            {
                "frame": {"x":776,"y":644,"w":27,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":57},
                "sourceSize": {"w":27,"h":57}
            },
        "num_9_430007":
            {
                "frame": {"x":362,"y":645,"w":27,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":57},
                "sourceSize": {"w":27,"h":57}
            },
        "num_9_430008":
            {
                "frame": {"x":390,"y":645,"w":27,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":57},
                "sourceSize": {"w":27,"h":57}
            },
        "num_9_430009":
            {
                "frame": {"x":418,"y":645,"w":27,"h":57},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":27,"h":57},
                "sourceSize": {"w":27,"h":57}
            },
        "num_9_500000":
            {
                "frame": {"x":757,"y":459,"w":31,"h":65},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":65},
                "sourceSize": {"w":31,"h":65}
            },
        "num_9_500001":
            {
                "frame": {"x":789,"y":459,"w":31,"h":65},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":65},
                "sourceSize": {"w":31,"h":65}
            },
        "num_9_500002":
            {
                "frame": {"x":2,"y":480,"w":31,"h":65},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":65},
                "sourceSize": {"w":31,"h":65}
            },
        "num_9_500003":
            {
                "frame": {"x":34,"y":480,"w":31,"h":65},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":65},
                "sourceSize": {"w":31,"h":65}
            },
        "num_9_500004":
            {
                "frame": {"x":66,"y":480,"w":31,"h":65},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":65},
                "sourceSize": {"w":31,"h":65}
            },
        "num_9_500005":
            {
                "frame": {"x":448,"y":481,"w":31,"h":65},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":65},
                "sourceSize": {"w":31,"h":65}
            },
        "num_9_500006":
            {
                "frame": {"x":480,"y":481,"w":31,"h":65},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":65},
                "sourceSize": {"w":31,"h":65}
            },
        "num_9_500007":
            {
                "frame": {"x":821,"y":482,"w":31,"h":65},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":65},
                "sourceSize": {"w":31,"h":65}
            },
        "num_9_500008":
            {
                "frame": {"x":853,"y":482,"w":31,"h":65},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":65},
                "sourceSize": {"w":31,"h":65}
            },
        "num_9_500009":
            {
                "frame": {"x":98,"y":483,"w":31,"h":65},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":31,"h":65},
                "sourceSize": {"w":31,"h":65}
            },
        "pm0":
            {
                "frame": {"x":1006,"y":556,"w":15,"h":7},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":15,"h":7},
                "sourceSize": {"w":15,"h":7}
            },
        "pm1":
            {
                "frame": {"x":944,"y":422,"w":18,"h":14},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":18,"h":14},
                "sourceSize": {"w":18,"h":14}
            },
        "pm2":
            {
                "frame": {"x":890,"y":349,"w":10,"h":7},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":10,"h":7},
                "sourceSize": {"w":10,"h":7}
            },
        "pm3":
            {
                "frame": {"x":836,"y":413,"w":13,"h":5},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":13,"h":5},
                "sourceSize": {"w":13,"h":5}
            },
        "pm4":
            {
                "frame": {"x":178,"y":545,"w":18,"h":12},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":18,"h":12},
                "sourceSize": {"w":18,"h":12}
            },
        "reflashBtn":
            {
                "frame": {"x":325,"y":877,"w":49,"h":19},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":49,"h":19},
                "sourceSize": {"w":49,"h":19}
            },
        "shape13":
            {
                "frame": {"x":246,"y":124,"w":121,"h":121},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":121,"h":121},
                "sourceSize": {"w":121,"h":121}
            },
        "shape15":
            {
                "frame": {"x":283,"y":375,"w":4,"h":34},
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {"x":0,"y":0,"w":4,"h":34},
                "sourceSize": {"w":4,"h":34}
            }
    };

    var Main = function(option){
        var num = option.contentsType;
        var div = document.getElementById(option.containerName);
        var div2 = div.appendChild(document.createElement('div'));
        this.canvas = div2.appendChild(document.createElement('canvas'));

        this.context = this.canvas.getContext('2d');
        this.sin = Math.sin(Math.PI/30);
        this.cos = Math.cos(Math.PI/30);

        this.delayOverTime = 500;

        this.errorPoses = [{x:61, y:87}, {x:61, y:39}, {x:108, y:9}];
        this.refreshBtnWH = {w: 49, h: 19};
        this.currAlpha = 0;

        this.imgStr = option.img_url;
        this.over = false;
        this.overActive = false;
        this.cityFont = '13px bold';
        this.ani = false;
        this.img = new Image();

        this.contentNum = num;





        this.skinData = new SkinData(num);
        this.setOption(option);
        this.initialize();

        this.skinData['setType'+(100 + num + "").slice(1)]();

        this.canvasRect = this.skinData.sizes[this.skinData.sizeType - 1];
        this.canvas.width = this.canvasRect.w;
        this.canvas.height = this.canvasRect.h;

        this._mouseMoveHandler = this.mouseMove.bind(this);

        this.mouseOverHandler = (function(e) {
            this.canvas.addEventListener('mousemove', this._mouseMoveHandler);
            this.overIntervalID = setTimeout((function(){
                this.overActive = true;
                this.ani = true;
            }).bind(this), this.delayOverTime);

        }).bind(this);

        this.mouseOutHandler = (function(e) {
            if (this.overIntervalID){
                clearTimeout(this.overIntervalID);
            }
            this.overActive = false;
            this.over = false;
            this.ani = true;
            this.canvas.removeEventListener('mousemove', this._mouseMoveHandler);
        }).bind(this);



        this.offscreenCanvas = document.createElement('canvas');
        this.offscreenCtx = this.offscreenCanvas.getContext('2d');

        this.cacheCanvas = document.createElement('canvas');
        this.cacheCtx = this.cacheCanvas.getContext('2d');

        this.checkTime();
        setInterval(this.checkTime.bind(this), 300);
    };

    Main.prototype.checkTime = function(){
        if (!this.beginTime){
            return;
        }

        var d = new Date(),
            currTime = d.getTime(),
            diffSec, resultSec, min, sec, hour;

        if (this.oldTime && Math.abs(currTime - this.oldTime) > 2000) {
            this.beginTime += currTime - this.oldTime;
        }

        diffSec = (currTime - this.beginTime) / 1000 | 0;
        resultSec = this.startSec + diffSec;

        this.oldTime = currTime;

        resultSec = resultSec % 86400;

        this.startSec = this.startH * 3600 + this.startM * 60 + this.startS;

        min = resultSec / 60 | 0;
        sec = resultSec % 60;
        hour = min / 60 | 0;
        min = min % 60;

        this.isPM = Math.floor(hour / 12) == 1;
        this.h = hour == 12 ? 12 : Math.floor(hour % 12);
        this.m = min;
        this.s = sec;

        if (!this.animateID){
            this.draw();
        }
    };

    Main.prototype.updateStartTime = function(option, startStr){
        var num = option.contentsType;
        var div = document.getElementById(option.containerName);
        var div2 = div.appendChild(document.createElement('div'));

        this.imgStr = option.img_url;
        this.stop();

        if (this.canvas){
            this.canvas.parentNode.parentNode.removeChild(this.canvas.parentNode);
        }

        this.canvas = div2.appendChild(document.createElement('canvas'));

        this.context = this.canvas.getContext('2d');
        this.contentNum = num;

        this.skinData = new SkinData(num);
        this.setOption(option);
        this.skinData['setType'+(100 + num + "").slice(1)]();
        this.canvasRect = this.skinData.sizes[this.skinData.sizeType - 1];
        this.canvas.width = this.canvasRect.w;
        this.canvas.height = this.canvasRect.h;

        this.jsonLoad();
        this.imgLoad(this.imgStr, (function(){
            this.cityName = "서울";
            this.startH = parseInt(startStr.substr(0, 2));
            this.startM = parseInt(startStr.substr(2, 2));
            this.startS = parseInt(startStr.substr(4, 2));
            this.startSec = this.startH * 3600 + this.startM * 60 + this.startS;

            this.beginTime = new Date().getTime();


            this.canvas.addEventListener('mouseover', this.mouseOverHandler);
            this.canvas.addEventListener('mouseout', this.mouseOutHandler);

            this.prevTime = null;
            this.draw();
        }).bind(this));
    };

    Main.prototype.update = function(option){
        var num = option.contentsType;
        var div = document.getElementById(option.containerName);
        var div2 = div.appendChild(document.createElement('div'));

        this.stop();

        if (this.canvas){
            this.canvas.parentNode.parentNode.removeChild(this.canvas.parentNode);
        }

        this.canvas = div2.appendChild(document.createElement('canvas'));

        this.context = this.canvas.getContext('2d');
        this.contentNum = num;

        this.skinData = new SkinData(num);
        this.setOption(option);
        this.skinData['setType'+(100 + num + "").slice(1)]();
        this.canvasRect = this.skinData.sizes[this.skinData.sizeType - 1];
        this.canvas.width = this.canvasRect.w;
        this.canvas.height = this.canvasRect.h;
        this.initialize();
        // this.dataLoad(this.dateInfoURL, (function(result){
        //     this.start(result);
        // }).bind(this));
    };

    Main.prototype.imgLoad = function(src, callback){
        var url, xhr, ieVer = this.get_version_of_IE(), img = this.img;
        var reject = (this.reject).bind(this);

        if (ieVer !== "N/A" && ieVer == 10){
            xhr = new XMLHttpRequest();
            xhr.onload = function(){
                try{
                    url = URL.createObjectURL(this.response);
                    img.onload = function(){
                        URL.revokeObjectURL(url);
                        callback();
                    };
                    img.src = url;
                }catch (e){
                    reject();
                }
            };

            xhr.onerror = function(){
                reject();
            };

            try{
                xhr.open('GET', src, true);
                xhr.withCredentials = false;
                xhr.responseType = 'blob';
                xhr.send();
            }catch (e){
                reject();
            }
        }else{
            img.onload = function(e){
                callback();
            };
            img.onerror = function(e){
                reject(e.toString());
            };
            try{
                img.crossOrigin = "Anonymous";
                img.src = src;
            }catch (e){
                reject();
            }

        }
    };


    Main.prototype.get_version_of_IE = function() {
        var word;
        var version = "N/A";
        var agent = navigator.userAgent.toLowerCase();
        var name = navigator.appName;

        // IE old version ( IE 10 or Lower )
        if ( name == "Microsoft Internet Explorer" ) word = "msie ";

        else {
            // IE 11
            if ( agent.search("trident") > -1 ) word = "trident/.*rv:";

            // Microsoft Edge
            else if ( agent.search("edge/") > -1 ) word = "edge/";
        }

        var reg = new RegExp( word + "([0-9]{1,})(\\.{0,}[0-9]{0,1})" );

        if (  reg.exec( agent ) != null  ) version = RegExp.$1 + RegExp.$2;

        return version;
    };

    Main.prototype.dataLoad = function(url, callback){
        var xhr = new XMLHttpRequest();
        var reject = (this.xmlReject).bind(this);
        try{
            xhr.open('GET', url, true);
            xhr.setRequestHeader('Content-Type', 'text/xml; charset="euc-kr"');
            xhr.addEventListener('load', (function(e){
                callback(e.target.responseXML || (new window.DOMParser()).parseFromString(e.target.response, 'text/xml'));
            }).bind(this));
            xhr.addEventListener('error', (function(e){
                reject(e.toString());
            }));
            xhr.send(null);
        }catch (e){
            reject(e);
        }
    };

    Main.prototype.xmlReject = function(){
        this.start(( new window.DOMParser() ).parseFromString('<date>'+
            '<cityname>서울</cityname>'+
            '<starttime>20161023083640</starttime>'+
            '</date>', "text/xml"));
    };

    Main.prototype.reject = function(log){
        this.errorView();
    };

    Main.prototype.initialize = function() {
        this.jsonLoad();

        this.imgLoad(this.imgStr, (function(){
            this.dataLoad(this.dateInfoURL, (function(result){
                this.start(result);
            }).bind(this));
        }).bind(this));
    };

    Main.prototype.errorView = function(){
        var pos = this.errorPoses[this.skinData.sizeType - 1];
        this.clickEvt = this.refreshClick.bind(this);

        this.getImgObject('errorType' + this.skinData.sizeType, this.context, -1, -1);
        this.getImgObject('reflashBtn', this.context, pos.x, pos.y);

        this.canvas.addEventListener('click', this.clickEvt);
    };

    Main.prototype.refreshClick = function(e){
        var pos = this.errorPoses[this.skinData.sizeType - 1];
        var overPos = this.getMousePos(this.canvas, e);
        if (overPos.x > pos.x && overPos.y > pos.y &&
            overPos.x < pos.x + this.refreshBtnWH.w &&
            overPos.y < pos.y + this.refreshBtnWH.h){

            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.canvas.removeEventListener('click', this.clickEvt);
            this.initialize();
        }
    };

    Main.prototype.stop = function(){
        this.canvas.removeEventListener('mouseover', this.mouseOverHandler);
        this.canvas.removeEventListener('mouseout', this.mouseOutHandler);
        if (this.animateID){
            cancelAnimationFrame(this.animateID);
            this.animateID = null;
        }
    };

    Main.prototype.start = function(xmlData){
        this.cityName = xmlData.childNodes[0].getElementsByTagName('cityname')[0].firstChild.nodeValue;
        var timeStr = xmlData.childNodes[0].getElementsByTagName('starttime')[0].firstChild.nodeValue;
        timeStr = timeStr.substr(8);
        this.startH = parseInt(timeStr.substr(0, 2));
        this.startM = parseInt(timeStr.substr(2, 2));
        this.startS = parseInt(timeStr.substr(4, 2));
        this.startSec = this.startH * 3600 + this.startM * 60 + this.startS;

        this.beginTime = new Date().getTime();


        this.canvas.addEventListener('mouseover', this.mouseOverHandler);
        this.canvas.addEventListener('mouseout', this.mouseOutHandler);

        this.prevTime = null;
        this.draw();
    };

    Main.prototype.mouseMove = function(e){
        var overPos = this.getMousePos(this.canvas, e);
        switch(this.skinData.interactType){
            case 'circle':
                if ((Math.pow(this.skinData.interactArea.x - overPos.x, 2) +
                        Math.pow(this.skinData.interactArea.y - overPos.y, 2) - Math.pow(this.skinData.interactArea.radius, 2) > 0)){
                    if (this.over == true){
                        this.ani = true;
                    }
                    this.over = false;
                }else{
                    if (this.over == false){
                        this.ani = true;
                    }
                    this.over = true;
                }
                break;
            case 'square':
                if (overPos.x < this.skinData.interactArea.x ||
                    overPos.y < this.skinData.interactArea.y ||
                    overPos.x > this.skinData.interactArea.x + this.skinData.interactArea.width ||
                    overPos.y > this.skinData.interactArea.y + this.skinData.interactArea.height){
                    if (this.over == true){
                        this.ani = true;
                    }
                    this.over = false;
                }else{
                    if (this.over == false){
                        this.ani = true;
                    }
                    this.over = true;
                }

                break;
        }
    };

    Main.prototype.getMousePos = function(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    };

    Main.prototype.jsonLoad = function(){
        this.jsonData = data;
    };

    Main.prototype.changeFont = function(font){

        this.fontData = font || 2;

        this.skinData.setFontGap(this.fontData);
    };

    Main.prototype.changeFontColor = function(color){
        if (color.charAt(0) !== '#'){
            color = '#' + color;
        }
        this.fontColor = color || "#FF0000";
    };

    Main.prototype.changeBGColor = function(color){
        if (color.charAt(0) !== '#'){
            color = '#' + color;
        }
        this.bgColor = color || "#00ff00";
    };

    Main.prototype.getImgObject = function(objName, ctx, x, y, w, h) {
        if(!this.jsonData[objName]){
            return;
        }
        var sx = this.jsonData[objName].frame.x;
        var sy = this.jsonData[objName].frame.y;
        var sw = this.jsonData[objName].frame.w;
        var sh = this.jsonData[objName].frame.h;

        ctx.drawImage(this.img, sx, sy, sw, sh, x || 0, y || 0, w || sw, h || sh);
        return {x: x || 0, y: y || 0, w: w || sw, h: h || sh};
    };

    Main.prototype.drawCanvas = function(canvas, x, y){
        this.context.drawImage(canvas, 0, 0, canvas.width, canvas.height, x, y, canvas.width, canvas.height);
    };

    Main.prototype.setOption = function(option) {
        this.dateInfoURL = option.req_url || "./old_swf_resources/date.xml";
        this.changeFont(option.fontData || 2);
        this.changeFontColor(option.fontColor || "#FF00FF");
        this.changeBGColor(option.bgColor || "#00ff00");
    };

    Main.prototype.draw = function() {
        this.animateID = requestAnimationFrame(this.drawView.bind(this));
    };

    Main.prototype.drawView = function() {
        if (!this.h || !this.m){
            cancelAnimationFrame(this.animateID);
            this.animateID = null;
            return;
        }
        var checkDraw = this.ani == true || this.currAlpha > 0;

        if ((!this.prevTime || this.prevTime.h != this.h || this.prevTime.m != this.m)  ||
            (this.skinData.type == 'analog' && this.skinData.lineSec && this.prevTime.s != this.s)){
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            if (this.skinData.type == 'analog'){
                this.drawAnalog();
            }else{
                this.drawDigital();
            }
            this.cacheCanvas.width = this.canvas.width;
            this.cacheCanvas.height = this.canvas.height;
            this.cacheCtx.drawImage(this.canvas, 0, 0);
            this.prevTime = {h: this.h, m: this.m, s: this.s};
        }else{
            if (checkDraw){
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.context.drawImage(this.cacheCanvas, 0, 0);
            }
        }

        if (checkDraw){
            this.checkOver();
        }

        this.animateID = requestAnimationFrame(this.drawView.bind(this));
    };

    Main.prototype.checkOver = function(){
        if (this.over == true && this.overActive == true){
            this.overAni();
        }else{
            this.outAni();
        }
    };

    Main.prototype.overAni = function(){
        this.currAlpha += .1;
        if (this.currAlpha >= 1){
            this.currAlpha = 1;
            this.ani = false;
        }

        this.drawShadow();
    };

    Main.prototype.outAni = function(){
        this.currAlpha -= .1;
        if (this.currAlpha <= 0){
            this.currAlpha = 0;
            this.ani = false;
        }

        this.drawShadow();
    };

    Main.prototype.drawShadow = function(){
        var pos = {x: 0, y: 0};
        var centerPos = {x: 0, y: 0};

        this.context.save();

        if (this.skinData.interactType == 'circle'){
            pos.x = this.skinData.interactArea.x - this.skinData.interactArea.radius;
            pos.y = this.skinData.interactArea.y - this.skinData.interactArea.radius;
            centerPos.x = this.skinData.interactArea.x;
            centerPos.y = this.skinData.interactArea.y;
        }else{
            pos.x = this.skinData.interactArea.x;
            pos.y = this.skinData.interactArea.y;
            centerPos.x = this.skinData.interactArea.x + this.skinData.interactArea.width / 2;
            centerPos.y = this.skinData.interactArea.y + this.skinData.interactArea.height / 2;
        }

        this.context.globalAlpha = this.currAlpha;

        this.getImgObject(this.skinData.shadow, this.context, pos.x, pos.y);

        this.context.fillStyle = 'white';
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
        this.context.font = this.cityFont;
        this.context.fillText(this.cityName, centerPos.x, centerPos.y);

        this.context.restore();
    };

    Main.prototype.colorTransform = function(ctx, rect, color){
        if (color.charAt(0) !== '#'){
            color = '#' + color;
        }
        if (rect.x < 0){
            rect.w += rect.x;
            rect.x = 0;
        }
        if (rect.y < 0){
            rect.h += rect.y;
            rect.y = 0;
        }
        var imageData = ctx.getImageData(rect.x, rect.y, rect.w, rect.h);
        var index, r = parseInt(color.substr(1, 2), 16), g = parseInt(color.substr(3, 2), 16), b = parseInt(color.substr(5, 2), 16);

        for (var i = 0; i < imageData.data.length; i+=4){
            index = i;
            imageData.data[index] = r;
            imageData.data[index + 1] = g;
            imageData.data[index + 2] = b;
        }
        ctx.putImageData(imageData, rect.x, rect.y);
    };

    Main.prototype.drawBg = function(){
        if (this.skinData.bg){
            var rect = this.getImgObject(this.skinData.bg, this.context, this.skinData.bgX, this.skinData.bgY);
            if (this.skinData.bgColorAtive){
                this.colorTransform(this.context, rect, this.bgColor);
            }
            return rect;
        }
        return null;
    };

    Main.prototype.drawAPM = function(){
        if (this.skinData.am){
            if (this.contentNum == 6){
                if(this.isPM == true)
                    this.drawUseOffscreen(this.skinData.pm, this.jsonData[this.skinData.pm].frame.w, this.jsonData[this.skinData.pm].frame.h, this.skinData.ampmX, this.skinData.ampmY);
                else
                    this.drawUseOffscreen(this.skinData.am, this.jsonData[this.skinData.am].frame.w, this.jsonData[this.skinData.am].frame.h, this.skinData.ampmX, this.skinData.ampmY);
            }else{
                if(this.isPM == true)
                    this.getImgObject(this.skinData.pm, this.context, this.skinData.ampmX, this.skinData.ampmY);
                else
                    this.getImgObject(this.skinData.am, this.context, this.skinData.ampmX, this.skinData.ampmY);
            }
        }
    };

    Main.prototype.drawImageNum = function(objName, pos){
        if(!this.jsonData[objName]){
            return;
        }

        return this.drawUseOffscreen(objName, this.jsonData[objName].frame.w, this.jsonData[objName].frame.h,
            (pos.x - this.jsonData[objName].frame.w / 2) | 0,
            (pos.y - this.jsonData[objName].frame.h / 2) | 0);
    };

    Main.prototype.drawUseOffscreen = function(objName, w, h, x, y){
        var rect;

        this.offscreenCanvas.width = w;
        this.offscreenCanvas.height = h;

        rect = this.getImgObject(objName, this.offscreenCtx, 0, 0, w, h);

        this.colorTransform(this.offscreenCtx, {x: 0, y: 0, w: rect.w, h: rect.h}, this.fontColor);
        this.drawCanvas(this.offscreenCanvas, x, y);
        return rect;
    };

    Main.prototype.drawNums = function(){

        var textPoses;
        if (this.skinData.NumView == true) {
            textPoses = this.skinData.textPoses;

            this.context.fillStyle = this.fontColor;
            this.context.textAlign = 'center';
            this.context.textBaseline = 'middle';

            this.drawImageNum('an_' + this.skinData.id + '_' + this.fontData + '0000', textPoses[0]);
            this.drawImageNum('an_' + this.skinData.id + '_' + this.fontData + '0001', textPoses[1]);
            this.drawImageNum('an_' + this.skinData.id + '_' + this.fontData + '0002', textPoses[2]);
            this.drawImageNum('an_' + this.skinData.id + '_' + this.fontData + '0003', textPoses[3]);
        }
    };

    Main.prototype.drawAppendImg = function(){
        var imgObj;
        if (this.skinData.addImages){
            for (var i = 0; i < this.skinData.addImages.length; i++){
                imgObj = this.skinData.addImages[i];
                this.getImgObject(imgObj.name, this.context, imgObj.x, imgObj.y);
            }
        }
    };

    Main.prototype.drawAnSec = function(){
        var piPer30 = Math.PI/30;
        if (this.skinData.lineSec){
            this.context.save();
            this.context.translate(this.canvas.width/2, this.canvas.height/2);
            this.sin = Math.sin(piPer30*(this.s+30));
            this.cos = Math.cos(piPer30*(this.s+30));
            this.context.transform(this.cos, this.sin, -this.sin, this.cos,
                this.cos * -this.skinData.lineSecOffset.x - this.sin * -this.skinData.lineSecOffset.y,
                this.sin * -this.skinData.lineSecOffset.x + this.cos * -this.skinData.lineSecOffset.y);
            this.getImgObject(this.skinData.lineSec, this.context);
            this.context.restore();
        }
    };

    Main.prototype.drawAnMin = function(){
        var piPer30 = Math.PI/30;
        if (this.skinData.lineMin){
            this.context.save();
            this.context.translate(this.canvas.width/2, this.canvas.height/2);
            this.sin = Math.sin(piPer30*(this.m+30));
            this.cos = Math.cos(piPer30*(this.m+30));
            this.context.transform(this.cos, this.sin, -this.sin, this.cos,
                this.cos * -this.skinData.lineMinOffset.x - this.sin * -this.skinData.lineMinOffset.y,
                this.sin * -this.skinData.lineMinOffset.x + this.cos * -this.skinData.lineMinOffset.y);
            this.getImgObject(this.skinData.lineMin, this.context);
            this.context.restore();
        }
    };

    Main.prototype.drawAnHour = function(){
        var piPer6 = Math.PI/6;
        if (this.skinData.lineHour){
            this.context.save();
            this.context.translate(this.canvas.width/2, this.canvas.height/2);
            this.sin = Math.sin(piPer6*(this.h+6) + piPer6/60 * this.m);
            this.cos = Math.cos(piPer6*(this.h+6) + piPer6/60 * this.m);
            this.context.transform(this.cos, this.sin, -this.sin, this.cos,
                this.cos * -this.skinData.lineHourOffset.x - this.sin * -this.skinData.lineHourOffset.y,
                this.sin * -this.skinData.lineHourOffset.x + this.cos * -this.skinData.lineHourOffset.y);
            this.getImgObject(this.skinData.lineHour, this.context);
            this.context.restore();
        }
    };

    Main.prototype.drawAnalog = function() {
        // 배경 표시
        this.drawBg();

        // am&pm 표시
        this.drawAPM();

        // 12, 3, 6, 9 숫자 표시
        this.drawNums();

        // 초심
        this.drawAnSec();

        // 분침
        this.drawAnMin();

        // 시침
        this.drawAnHour();

        this.drawAppendImg();
    };

    Main.prototype.drawDigiNum = function(hour, min, fontSize, ygap, clipRect){
        var h0 = "num_" + this.fontData + "_" + fontSize[0] + "000" + hour.charAt(0);
        var h1 = "num_" + this.fontData + "_" + fontSize[0] + "000" + hour.charAt(1);
        var m0 = "num_" + this.fontData + "_" + fontSize[1] + "000" + min.charAt(0);
        var m1 = "num_" + this.fontData + "_" + fontSize[1] + "000" + min.charAt(1);

        var startY = ygap + this.skinData.colonRect.h / 2;
        var customX = this.fontData == 3 ? 8 : 0;


        this.context.save();
        if(clipRect){
            this.context.beginPath();
            this.context.rect(clipRect.x, clipRect.y, clipRect.w, clipRect.h);
            this.context.closePath();
            this.context.clip();
        }
        this.drawImageNum(h1, {
            x: this.skinData.colonRect.x - this.jsonData[h1].frame.w / 2 - this.skinData.colonGap + customX,
            y: startY
        });
        this.drawImageNum(h0, {
            x: this.skinData.colonRect.x - this.jsonData[h1].frame.w - this.skinData.colonGap - this.skinData.textGap + customX,
            y: startY
        });
        this.drawImageNum(m0, {
            x: this.skinData.colonRect.x + this.skinData.colonRect.w + this.jsonData[m0].frame.w / 2 + this.skinData.colonGap - customX,
            y: startY
        });
        this.drawImageNum(m1, {
            x: this.skinData.colonRect.x + this.skinData.colonRect.w + this.jsonData[m0].frame.w + this.skinData.colonGap + this.skinData.textGap - customX,
            y: startY
        });
        this.context.restore();
    };

    Main.prototype.drawDigital = function() {
        this.context.fillStyle = this.fontColor;
        var bgRect, refColonY;

        // am&pm 표시
        bgRect = this.drawBg();
        this.drawAPM();

        if (this.skinData.reflection){
            this.skinData.colonRect.y = this.canvas.height / 2 - this.jsonData["num_" + this.fontData + "_" + this.skinData.fontSizes[0] + "000" + this.convertNumToString(this.h).charAt(0)].frame.h / 2 + this.skinData.yterms[parseInt(this.fontData) - 1][0];
        }

        this.drawDigiNum(this.convertNumToString(this.h), this.convertNumToString(this.m), this.skinData.fontSizes, this.skinData.colonRect.y, this.skinData.isClip ? this.skinData.clipRect : null);

        if (this.skinData.colon){
            this.drawUseOffscreen(this.skinData.colon,
                this.skinData.colonRect.w, this.skinData.colonRect.h,
                this.skinData.colonRect.x, this.skinData.colonRect.y);
        }

        if (this.skinData.reflection){
            this.context.save();
            this.context.globalAlpha = 0.6;
            this.context.translate(0, this.canvas.height);
            this.context.scale(1, -1);

            refColonY = this.skinData.colonRect.y + this.skinData.yterms[parseInt(this.fontData) - 1][1];

            this.drawDigiNum(this.convertNumToString(this.h), this.convertNumToString(this.m), this.skinData.fontSizes, refColonY);

            if (this.skinData.colon){
                this.drawUseOffscreen(this.skinData.colon,
                    this.skinData.colonRect.w, this.skinData.colonRect.h,
                    this.skinData.colonRect.x, refColonY);
            }

            if (this.skinData.am){
                if(this.isPM == true)
                    this.getImgObject(this.skinData.pm, this.context, this.skinData.ampmX, this.skinData.ampmY - bgRect.h);
                else
                    this.getImgObject(this.skinData.am, this.context, this.skinData.ampmX, this.skinData.ampmY - bgRect.h);
            }

            this.context.restore();
        }

        this.drawAppendImg();
    };

    Main.prototype.convertNumToString = function(num) {
        var rtn = (100 + num + "").slice(1);
        return rtn;
    };

    return Main;
})();