var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(width, height, bkColor, label, labelColor, labelStyle) {
        _super.call(this);
        this._width = width != null ? width : 200;
        this._height = height != null ? height : 150;
        this._bkColor = bkColor != null ? bkColor : "#999999";
        this._label = label != null ? label : "按钮";
        this._labelColor = labelColor != null ? labelColor : "#333333";
        this._labelStyle = labelStyle != null ? labelStyle : "16px Arial";
    }
    ;
    Button.prototype.drawButton = function (xPointer, yPointer) {
        var text = new createjs.Text(this._label, this._labelStyle, this._labelColor);
        text.textBaseline = "top";
        text.textAlign = "center";
        var width = this._width;
        var height = this._height;
        text.x = width / 2 + xPointer;
        text.y = 10 + yPointer;
        this._background = new createjs.Shape();
        this._background.graphics.beginFill(this._bkColor).drawRoundRect(xPointer, yPointer, width, height, 10);
        this.addChild(this._background, text);
        this.mouseChildren = false;
    };
    return Button;
})(createjs.Container);
var GeziType = (function () {
    function GeziType() {
    }
    GeziType.NONE = "none";
    GeziType.FANGGE = "fangge";
    GeziType.TIANZIGE = "tianzige";
    GeziType.MIZIGE = "mizige";
    GeziType.PINYINGE = "pinyinge";
    return GeziType;
})();
var HZTools = (function () {
    function HZTools() {
    }
    HZTools.drawGezi = function (type, g, width, height, lineDash, borderWidth, borderColor, fillColor, lineWidth, lineColor, dashArr) {
        if (lineDash === void 0) { lineDash = true; }
        if (borderWidth === void 0) { borderWidth = 1; }
        if (borderColor === void 0) { borderColor = "#000000"; }
        if (fillColor === void 0) { fillColor = "#ffffff"; }
        if (lineWidth === void 0) { lineWidth = 1; }
        if (lineColor === void 0) { lineColor = "#888888"; }
        if (dashArr === void 0) { dashArr = [7, 3]; }
        if (type == GeziType.NONE) {
            g.beginFill(fillColor);
            g.drawRect(0, 0, width, height);
        }
        else {
            g.setStrokeStyle(borderWidth).beginStroke(borderColor);
            g.beginFill(fillColor);
            g.drawRect(0, 0, width, height);
            g.setStrokeStyle(lineWidth).beginStroke(lineColor);
            if (lineDash == true) {
                g.setStrokeDash(dashArr);
            }
            if (type == GeziType.TIANZIGE || type == GeziType.MIZIGE) {
                g.moveTo(width / 2, 0);
                g.lineTo(width / 2, height);
                g.moveTo(0, height / 2);
                g.lineTo(width, height / 2);
            }
            if (type == GeziType.MIZIGE) {
                g.moveTo(0, 0);
                g.lineTo(width, height);
                g.moveTo(width, 0);
                g.lineTo(0, height);
            }
        }
        g.endFill();
        g.endStroke();
        g.setStrokeDash();
    };
    HZTools.drawHZ = function (g, size, comm, path) {
        var j = 0;
        var scale = size / 500;
        for (var i = 0; i < comm.length; i++) {
            if (comm[i] == 1) {
                g.closePath();
                g.moveTo(path[j++] * scale, path[j++] * scale);
            }
            else if (comm[i] == 2) {
                g.lineTo(path[j++] * scale, path[j++] * scale);
            }
            else if (comm[i] == 3) {
                g.quadraticCurveTo(path[j++] * scale, path[j++] * scale, path[j++] * scale, path[j++] * scale);
            }
        }
        g.endFill();
        g.setStrokeDash();
        g.endStroke();
    };
    HZTools.showHanzi = function (hzData, g, size, color, stroke, lineWidth, lineColor, lineDash, dashArr) {
        if (color === void 0) { color = "#ff0000"; }
        if (stroke === void 0) { stroke = false; }
        if (lineWidth === void 0) { lineWidth = 1; }
        if (lineColor === void 0) { lineColor = "#000000"; }
        if (lineDash === void 0) { lineDash = false; }
        if (dashArr === void 0) { dashArr = [7, 3]; }
        g.beginFill(color);
        if (stroke == true) {
            g.setStrokeStyle(lineWidth).beginStroke(lineColor);
            if (lineDash == true) {
                g.setStrokeDash(dashArr);
            }
        }
        HZTools.drawHZ(g, size, hzData.outlineComm, hzData.outlinePath);
    };
    HZTools.drawBihua = function (hzData, g, size, index, bkColor, oldColor, newColor) {
        if (index === void 0) { index = 0; }
        if (bkColor === void 0) { bkColor = "#eeeeee"; }
        if (oldColor === void 0) { oldColor = "#000000"; }
        if (newColor === void 0) { newColor = "#ff0000"; }
        var length = hzData.commands.length;
        g.beginFill(bkColor);
        HZTools.drawHZ(g, size, hzData.outlineComm, hzData.outlinePath);
        for (var i = 0; i < length; i++) {
            if (i == index) {
                g.beginFill(newColor);
                HZTools.drawHZ(g, size, hzData.commands[i], hzData.paths[i]);
                break;
            }
            else {
                g.beginFill(oldColor);
                HZTools.drawHZ(g, size, hzData.commands[i], hzData.paths[i]);
            }
        }
    };
    HZTools.showBishunList = function (hzData, container, size, option) {
        if (option === void 0) { option = {}; }
        var bkColor = "#eeeeee", oldColor = "#000000", newColor = "#ff0000";
        var geziType = "fangge", lineDash = true, borderWidth = 1, borderColor = "#000000";
        var fillColor = "#ffffff", lineWidth = 1, lineColor = "#888888", dashArr = [7, 3];
        var col = 8;
        var space = 0;
        var count = 32;
        var length = hzData.commands.length;
        var row = Math.ceil(length / col);
        count = option.count == undefined ? count : option.count;
        bkColor = option.bkColor == undefined ? bkColor : option.bkColor;
        oldColor = option.oldColor == undefined ? oldColor : option.oldColor;
        newColor = option.newColor == undefined ? newColor : option.newColor;
        geziType = option.geziType == undefined ? geziType : option.geziType;
        lineDash = option.lineDash == undefined ? lineDash : option.lineDash;
        borderWidth = option.borderWidth == undefined ? borderWidth : option.borderWidth;
        borderColor = option.borderColor == undefined ? borderColor : option.borderColor;
        fillColor = option.fillColor == undefined ? fillColor : option.fillColor;
        lineWidth = option.lineWidth == undefined ? lineWidth : option.lineWidth;
        lineColor = option.lineColor == undefined ? lineColor : option.lineColor;
        dashArr = option.dashArr == undefined ? dashArr : option.dashArr;
        for (var i = 0; i < count; i++) {
            var shape = new createjs.Shape();
            shape.id = i;
            shape.x = i % col * (size + space);
            shape.y = parseInt((i / col).toString()) * (size + space);
            HZTools.drawGezi(geziType, shape.graphics, size, size, lineDash, borderWidth, borderColor, fillColor, lineWidth, lineColor, dashArr);
            if (i < length) {
                HZTools.drawBihua(hzData, shape.graphics, size, i, bkColor, oldColor, newColor);
                shape.addEventListener("click", function (e) {
                    e.target.dispatchEvent("showBihua", true);
                });
            }
            container.addChild(shape);
        }
    };
    return HZTools;
})();
var Main = (function () {
    function Main() {
    }
    Main.main = function (canvasName) {
        var data = {"outlinePath":[376.5,88.60000000000002,365.9,89.89999999999998,352.1,91.5,335.5,93.3,316,95.2,294.1,97.39999999999998,269.7,99.8,243.1,102.3,214.5,105,195.9,106.7,178.5,108.10000000000002,162.1,109.3,146.7,110.39999999999998,132.2,111.2,118.4,111.89999999999998,105.2,112.39999999999998,92.5,112.7,86.2,112.8,80.3,113,74.9,113.2,70.1,113.39999999999998,66,113.60000000000002,62.9,113.8,60.7,114,59.8,114.2,58.9,114.8,58.3,115.5,58.1,116.3,58.2,117.3,58.7,118.39999999999998,59.4,119.7,60.5,121.10000000000002,62,122.7,64,124.7,66.2,126.7,68.5,128.5,70.8,130.10000000000002,73.3,131.7,75.8,133.2,78.5,134.5,81.2,135.7,85.2,137.10000000000002,89.3,138.10000000000002,94.4,138.60000000000002,101.1,138.5,110.2,137.89999999999998,122.4,136.8,138.4,135,158.9,132.60000000000002,170.1,131.3,180.5,130,189.9,128.89999999999998,198.2,127.89999999999998,205,127.10000000000002,210.2,126.5,213.5,126.10000000000002,214.7,126,214.9,126.7,215,128.60000000000002,215,131.39999999999998,214.9,135,214.7,139,214.3,143.2,213.9,147.2,213.5,151,212.2,158.7,210.4,166.60000000000002,208.2,174.8,205.5,183.1,202.5,191.4,199.2,199.7,195.5,207.7,191.6,215.5,186.3,225.5,175.4,225.4,172.4,225.3,169.7,225.2,167.1,225,164.6,224.8,162.1,224.4,159.6,223.9,157,223.3,154.1,222.6,152,222.1,149.9,221.6,147.9,221.1,146,220.8,144.3,220.5,142.9,220.3,141.8,220.2,141.1,220.2,139.8,220.6,138.9,221.3,138.4,222.6,138.2,224.4,138.5,226.8,139.1,229.8,140,233.4,141.4,237.8,144.1,246.9,146.3,256.3,148,266.2,149.3,276.7,150.2,287.9,150.6,300.1,150.7,313.4,150.4,328,149.9,342.6,149.7,355.1,149.6,365.8,149.7,374.9,149.9,382.4,150.4,388.7,151,393.8,151.8,398,152.8,402,153.8,405.7,154.9,409,155.9,412,157,414.6,158,416.7,158.9,418.2,159.8,419.3,161.4,420.2,163.1,420.2,164.8,419.1,166.6,417.1,168.4,414.1,170.2,410.1,172,405.2,173.8,399.3,176.6,389.5,194.1,387.8,198.1,387.4,202.8,386.9,208.2,386.3,213.9,385.6,219.8,384.9,225.7,384.2,231.5,383.5,237,382.8,248.1,381.5,258.4,380.5,267.7,379.8,276.1,379.5,283.6,379.5,290.2,379.8,295.9,380.4,300.8,381.4,302.7,381.9,304.3,382.4,305.7,382.8,306.7,383.3,307.6,383.8,308.2,384.3,308.7,384.8,309,385.4,309.3,386.2,309.7,387.7,310.2,389.9,310.8,392.6,311.6,395.8,312.3,399.3,313.2,403,314,407,316.2,416.8,318.2,425.1,320,432.1,321.7,437.7,323.4,442.1,324.9,445.5,326.4,447.7,327.9,449,330.7,448.9,333.7,446.2,337,441.3,340.3,434.4,343.5,426,346.5,416.4,349.1,406,351.1,395,351.4,392.6,351.6,388.2,351.8,382.1,352.1,374.5,352.3,365.8,352.5,356,352.8,345.5,352.9,334.5,353.3,313,353.7,295.9,354.3,282.6,355.2,272.3,356.3,264.1,357.9,257.3,359.9,251.1,362.6,244.7,364,241.2,365,238.1,365.5,235.5,365.5,233.1,365,230.9,364.1,228.8,362.6,226.7,360.6,224.5,358.6,222.8,355.9,220.8,352.7,218.7,349,216.5,345,214.3,340.8,212.2,336.4,210.1,332,208.2,326.6,206.1,322,204.6,317.9,203.7,314.2,203.3,310.4,203.5,306.6,204.3,302.3,205.7,297.4,207.6,293.7,209,289.9,210.3,285.8,211.6,281.4,212.8,276.5,213.9,271,215.1,264.9,216.2,257.9,217.5,250.2,218.7,241.7,220,232.7,221.3,223.9,222.5,215.8,223.5,209.1,224.3,204.3,224.7,202,224.8,202.6,222.5,206.1,216.7,211.8,208.2,219.1,198.1,227.2,187.3,235.4,176.7,243,167.39999999999998,249.4,160.2,251.6,157.8,253.3,155.60000000000002,254.5,153.7,255.2,152,255.3,150.3,255,148.7,254.3,147,253.1,145.10000000000002,251.7,143.39999999999998,249.8,141.60000000000002,247.5,139.60000000000002,244.8,137.5,241.7,135.39999999999998,238.3,133.3,234.6,131.10000000000002,230.7,128.89999999999998,221.7,124.2,228.1,123.60000000000002,230.2,123.39999999999998,233.6,123.10000000000002,238.3,122.8,243.9,122.39999999999998,250.4,122,257.5,121.5,265.1,121,273,120.5,281,120,289.1,119.39999999999998,297,118.89999999999998,304.5,118.39999999999998,311.4,118,317.4,117.60000000000002,322.4,117.3,326.1,117,329.8,116.8,334.5,116.5,340.2,116.3,346.6,116,353.5,115.8,360.7,115.5,368,115.2,375.1,115,397.6,114.39999999999998,414.4,113.8,426.4,113.39999999999998,434.5,112.8,439.5,112.2,442.5,111.39999999999998,444.2,110.39999999999998,445.5,109,446,108.39999999999998,446.4,107.89999999999998,446.6,107.39999999999998,446.7,106.89999999999998,446.7,106.3,446.6,105.7,446.4,104.89999999999998,446,104.10000000000002,444.7,101.8,442.4,99.3,439.4,96.7,435.9,94.10000000000002,432,91.60000000000002,428.1,89.39999999999998,424.2,87.60000000000002,420.5,86.39999999999998,417.7,85.80000000000001,414.7,85.39999999999998,411.1,85.19999999999999,406.7,85.30000000000001,401.3,85.69999999999999,394.7,86.39999999999998,386.5,87.30000000000001,376.5,88.60000000000002,299.8,230.5,302.4,231.5,304.8,232.7,307,234.2,309,235.9,310.8,237.9,312.3,240.1,313.5,242.4,314.4,245,315.7,249.8,316.8,254.6,317.7,259.8,318.3,265.8,318.8,272.8,319.2,281.2,319.5,291.3,319.7,303.5,319.9,323.9,319.6,340.1,319,352.4,317.8,361.3,315.9,367.1,313.5,370.1,310.3,370.7,306.3,369.1,301.9,366.7,298.4,364.8,295.5,363.5,292.9,362.6,290.3,362,287.4,361.7,284.1,361.6,280,361.6,274.2,361.9,264.5,362.8,251.9,364.2,237.4,365.9,221.9,367.8,206.5,369.8,192.1,371.7,179.8,373.6,176,374.2,176,342.7,176,311.2,182.3,312.6,187.7,313.3,195.3,313.8,204.4,313.9,214.4,313.7,225,313.3,235.4,312.5,245.3,311.6,254,310.4,261.1,309.2,267.2,307.9,272.3,306.7,276.5,305.3,279.8,304,282.2,302.5,283.8,301,284.6,299.4,284.8,298.6,284.8,297.8,284.8,297.2,284.5,296.5,284.1,295.9,283.5,295.1,282.6,294.3,281.6,293.4,278.4,291,275,289.3,271.2,288,267,287.3,262.3,287.1,257,287.4,251.2,288.3,244.7,289.6,237.7,291.2,231.3,292.5,225,293.7,218.4,294.8,211,295.8,202.4,296.9,192.2,298.1,179.9,299.4,176.2,299.8,175.1,292.1,174.6,288.1,174.1,281.6,173.6,273.8,173.1,265.3,172.6,257.2,172.3,250.2,172.2,245.3,172.3,243.4,173,243.2,174.9,243,177.8,242.6,181.6,242.1,186.2,241.5,191.5,240.9,197.3,240.2,203.5,239.5,210.2,238.7,217.2,237.9,224.3,237,231.4,236.1,238.3,235.2,244.6,234.4,250.3,233.7,255,233,259.2,232.4,263.2,231.8,267,231.3,270.4,230.8,273.3,230.4,275.7,230.1,277.5,229.8,278.5,229.7,281.3,229.4,284.2,229.2,287.1,229.2,290,229.2,292.9,229.4,295.5,229.7,297.8,230.1,299.8,230.5],"commands":[[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]],"size":500,"outlineComm":[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],"bishun":[[[25,128,30,128,35,129,40,129,45,129,50,128,55,128,60,128,65,128,70,128,75,128,80,128,86,128,91,128,97,128,103,127,107,126,112,125,118,125,122,123,127,123,132,122,137,122,143,121,149,120,154,120,160,120,165,120,171,119,176,119,181,118,186,118,191,117,197,117,201,117,207,117,212,116,217,115,222,115,228,115,233,115,238,114,243,113,248,113,253,112,258,112,263,111,268,111,273,111,278,111,283,111,289,111,294,111,300,111,305,111,311,111,316,111,322,111,327,111,332,111,337,111,342,111,347,111,352,111,357,110,362,109,367,107,371,105,376,103,382,102,387,101,392,100,397,99,402,99,408,99,415,99,422,100,428,100,433,101,438,102,443,102]],[[226,99,228,103,229,107,230,112,231,117,233,121,235,126,236,131,236,136,237,141,237,146,233,150,230,155,226,160,223,165,220,170,217,176,215,181,213,186,211,191,210,196,207,201,205,206,200,211,197,215,194,221,191,226,189,230,186,235]],[[134,189,134,194,136,198,138,203,141,207,143,211,145,215,147,219,149,224,150,229,152,234,154,238,155,242,157,247,158,252,159,257,159,262,160,267,160,272,160,277,160,282,160,287,160,292,160,297,161,302,162,306,163,311,164,316,164,321,164,326,164,331,164,336,164,341,164,346,164,352,164,357,164,362,164,367,164,372,164,378,165,383,165,388,165,394,165,399,165,404]],[[120,242,125,242,130,240,136,238,142,236,147,236,152,236,157,234,162,234,168,232,173,230,178,229,184,229,189,227,194,227,198,225,203,225,208,224,214,223,220,222,227,222,232,221,237,221,243,220,249,219,254,219,259,219,264,219,269,219,274,219,279,217,284,217,289,217,294,216,299,216,304,216,308,219,312,221,316,223,320,225,324,228,328,231,333,232,337,235,339,239,342,242,338,246,336,251,336,256,336,261,336,266,336,271,336,276,336,281,336,286,336,291,335,297,335,302,335,307,335,312,335,317,335,322,335,327,334,332,333,337,333,342,333,347,334,352,334,357,334,362,333,367,333,372,332,377,331,382,331,387,330,392,329,397,329,402,329,407,329,412,329,417,329,422,329,427,329,432,329,437,329,442]],[[100,309,105,307,110,307,115,305,120,305,126,303,131,303,136,303,141,301,147,301,153,301,159,301,166,301,174,301,180,301,186,301,191,301,197,301,202,301,208,301,213,301,219,301,224,301,231,301,237,301,242,301,248,301,254,301,259,301,264,300,269,300,274,299,279,298,285,298,290,298,298,298]],[[116,389,122,386,127,385,132,385,138,384,143,383,148,383,153,382,159,381,164,381,169,381,174,380,179,380,185,380,190,379,196,379,202,378,207,377,213,377,219,377,224,376,230,375,237,375,243,375,248,375,255,375,262,375,268,375,273,374,280,373,285,372,290,372,296,372,301,372,306,372,311,372,316,372]]],"paths":[[396,86.60000000000002,395.1,86.80000000000001,393.7,86.89999999999998,392.1,87.10000000000002,390.1,87.39999999999998,388,87.60000000000002,385.7,87.89999999999998,383.4,88.19999999999999,381,88.5,372.1,89.60000000000002,359.7,91,344.2,92.69999999999999,326.5,94.5,307.2,96.5,287,98.5,266.5,100.5,246.5,102.39999999999998,219.2,105,195.1,107.10000000000002,173.6,108.80000000000001,154.1,110.30000000000001,136,111.39999999999998,118.7,112.30000000000001,101.6,113,84,113.5,79.1,113.69999999999999,74.5,113.89999999999998,70.4,114,66.8,114.30000000000001,63.8,114.5,61.5,114.69999999999999,60,114.89999999999998,59.3,115.19999999999999,58.7,116.5,59.1,118.39999999999998,60.6,120.69999999999999,62.9,123.30000000000001,65.9,126,69.5,128.8,73.5,131.39999999999998,77.9,133.8,85.4,137.5,102,137.39999999999998,107,137.3,112.2,137.10000000000002,117.9,136.8,124.5,136.2,132.3,135.5,141.5,134.5,152.7,133.2,166,131.60000000000002,175.7,130.5,185,129.3,193.8,128.2,201.8,127.19999999999999,208.7,126.30000000000001,214.3,125.5,218.5,124.89999999999998,221,124.5,223.2,124.19999999999999,226.5,123.80000000000001,230.8,123.30000000000001,236,122.89999999999998,241.8,122.39999999999998,248.1,121.89999999999998,254.7,121.39999999999998,261.5,121,268.6,120.5,276,120.10000000000002,283.5,119.60000000000002,291,119.10000000000002,298.1,118.60000000000002,304.7,118.19999999999999,310.6,117.80000000000001,315.5,117.5,320.4,117.19999999999999,326.4,116.80000000000001,333.2,116.5,340.6,116.19999999999999,348.4,115.80000000000001,356.3,115.5,364,115.19999999999999,371.5,115,394.9,114.30000000000001,412.8,113.60000000000002,426,112.89999999999998,435.1,112.10000000000002,441,111.19999999999999,444.2,109.89999999999998,445.7,108.30000000000001,446,106.30000000000001,445.6,104.69999999999999,444.6,102.89999999999998,442.9,100.80000000000001,440.8,98.60000000000002,438.2,96.39999999999998,435.3,94.30000000000001,432.1,92.19999999999999,428.8,90.30000000000001,426.4,89.10000000000002,424.5,88.19999999999999,422.7,87.60000000000002,421,87.10000000000002,419.1,86.80000000000001,416.8,86.60000000000002,414,86.5,410.5,86.39999999999998,408.2,86.39999999999998,406,86.39999999999998,403.8,86.39999999999998,401.7,86.39999999999998,399.8,86.39999999999998,398.2,86.5,396.9,86.60000000000002,396,86.60000000000002],[215.6,125.19999999999999,215.5,125.80000000000001,215.4,126.69999999999999,215.2,128.10000000000002,215.1,129.8,215,131.8,214.9,134,214.7,136.5,214.6,139,214,147.5,212.8,156,211,164.7,208.8,173.60000000000002,205.9,182.60000000000002,202.4,191.89999999999998,198.4,201.39999999999998,193.7,211.3,190.5,218,188,223.10000000000002,186.3,227,185.2,229.7,184.8,231.5,184.9,232.60000000000002,185.4,233.2,186.3,233.5,188.3,233.60000000000002,190.7,233.10000000000002,193.3,232.10000000000002,195.9,230.7,198.2,229,200.2,227.3,201.5,225.60000000000002,202,224,203.1,221.39999999999998,206,216.5,210.6,209.8,216.2,201.8,222.7,193.10000000000002,229.7,184.10000000000002,236.7,175.3,243.4,167.2,246.6,163.39999999999998,249.2,160.2,251.2,157.7,252.8,155.60000000000002,253.8,153.89999999999998,254.5,152.5,254.9,151.3,255,150.3,254.5,148.2,253,145.7,250.5,143,247.2,140.10000000000002,243.2,137,238.4,133.89999999999998,233.1,130.7,227.2,127.60000000000002,224.6,126.30000000000001,222.3,125.39999999999998,220.4,124.69999999999999,218.8,124.19999999999999,217.6,124.10000000000002,216.6,124.19999999999999,215.9,124.60000000000002,215.6,125.19999999999999],[139.2,226.2,139.4,227.60000000000002,139.7,229.3,140.1,231.3,140.6,233.60000000000002,141.2,236.10000000000002,141.8,238.7,142.5,241.39999999999998,143.2,244,145.5,252.4,147.3,259.8,148.5,267.2,149.4,275.5,150,285.6,150.3,298.6,150.5,315.2,150.5,336.5,150.5,355,150.6,369,150.7,379.5,150.9,386.9,151.1,392.2,151.5,395.8,152.1,398.7,152.8,401.4,154,405.5,155.2,409.1,156.4,412.3,157.6,415,158.8,417.1,159.8,418.7,160.9,419.7,161.8,420,163.2,419.7,164.6,418.7,166.1,417.1,167.5,414.9,169,412,170.5,408.4,172,404.3,173.5,399.5,176.1,390.5,176,344.5,175.9,335.2,175.9,326.3,175.8,318.1,175.7,310.7,175.5,304.4,175.4,299.4,175.2,295.8,175,294,174.8,292.6,174.6,290.5,174.3,287.7,174.1,284.4,173.8,280.5,173.5,276.4,173.3,272,173,267.5,172.6,259.5,172,252.1,171.4,245.5,170.7,239.60000000000002,170,234.60000000000002,169.3,230.60000000000002,168.5,227.8,167.8,226.3,167.5,226,167.2,225.8,166.8,225.60000000000002,166.3,225.39999999999998,165.8,225.2,165.2,225.10000000000002,164.7,225,164.1,225,163.4,224.89999999999998,162.5,224.8,161.4,224.60000000000002,160.1,224.39999999999998,158.6,224.10000000000002,157.1,223.8,155.6,223.39999999999998,154,223,152.4,222.60000000000002,150.8,222.2,149.2,221.89999999999998,147.6,221.60000000000002,146.1,221.39999999999998,144.7,221.2,143.6,221.10000000000002,142.7,221,138.8,221,139.2,226.2],[295.1,208.60000000000002,289.8,210.39999999999998,284.2,212.10000000000002,278.3,213.7,271.9,215.10000000000002,264.8,216.60000000000002,256.9,218,247.9,219.39999999999998,237.8,221,227.8,222.39999999999998,218.6,223.5,210.1,224.39999999999998,202.3,225.10000000000002,195,225.60000000000002,188.1,225.8,181.4,225.89999999999998,174.9,225.7,160.3,225.2,159.3,228.39999999999998,159.1,229.2,158.9,230,158.9,230.8,158.8,231.60000000000002,158.9,232.39999999999998,159,233.3,159.2,234.10000000000002,159.5,235,159.9,236,160.3,236.89999999999998,160.8,237.60000000000002,161.5,238.2,162.4,238.8,163.5,239.39999999999998,164.9,240.10000000000002,166.6,240.8,168.5,241.5,170,242,171.5,242.39999999999998,172.9,242.60000000000002,174.4,242.60000000000002,176.2,242.5,178.3,242.3,181,242,183.3,241.7,186.6,241.3,190.7,240.8,195.5,240.2,200.9,239.60000000000002,206.6,238.89999999999998,212.5,238.2,218.5,237.39999999999998,224.7,236.7,231.1,235.89999999999998,237.6,235.10000000000002,243.9,234.2,249.9,233.39999999999998,255.4,232.7,260.3,232,264.2,231.5,274.6,230.10000000000002,283.3,229.39999999999998,290.6,229.2,296.6,229.8,301.5,231.10000000000002,305.6,233.10000000000002,309,235.89999999999998,311.9,239.5,314,243.7,315.8,249.5,317.3,256.9,318.4,266.2,319.2,277.3,319.7,290.4,319.9,305.6,319.7,323.1,319.5,335.8,319.3,345.8,318.9,353.4,318.3,359.1,317.4,363.2,316.2,366.2,314.6,368.5,312.6,370.6,311.5,371.6,310.7,372.5,310.1,373.3,309.6,374.2,309.3,375.1,309.1,376.1,309,377.4,309,378.9,309.4,382.8,310.6,389.5,312.4,398.1,314.5,407.7,316.8,417.5,319.1,426.5,321.1,434.1,322.7,439.1,323.7,441.6,324.7,443.8,325.7,445.6,326.6,446.9,327.6,448,328.6,448.6,329.5,448.8,330.4,448.7,332.3,447.4,334.4,444.9,336.5,441.4,338.7,437,340.9,431.7,343.1,425.7,345.2,419.1,347.2,412,348.4,406.7,349.4,401.1,350.2,394.8,350.9,387.3,351.4,378.3,351.8,367.2,352.2,353.6,352.5,337,352.8,322.4,353.1,309.5,353.5,298.1,354,288.2,354.5,279.8,355.1,272.8,355.7,267.2,356.4,263,356.8,261.5,357.3,259.7,357.8,257.7,358.5,255.6,359.2,253.4,359.9,251.3,360.6,249.1,361.4,247.1,362.1,245.2,362.8,243.3,363.4,241.39999999999998,363.9,239.60000000000002,364.4,238,364.7,236.60000000000002,364.9,235.5,365,234.60000000000002,364.7,232,363.7,229.5,362,226.89999999999998,359.6,224.39999999999998,356.4,221.8,352.3,219,347.4,216.2,341.5,213.10000000000002,334.1,209.60000000000002,327.9,206.89999999999998,322.4,205.2,317.4,204.3,312.5,204.2,307.3,204.89999999999998,301.7,206.39999999999998,295.1,208.60000000000002],[239.5,291.1,232.5,292.5,226.1,293.8,219.9,294.9,213.3,295.8,205.8,296.8,196.8,297.9,185.8,299.1,172.3,300.6,170.3,300.8,168.7,301.1,167.6,301.5,166.8,301.9,166.4,302.5,166.3,303.2,166.6,304,167,305.1,169,307.3,172.4,309.2,177,310.8,182.7,312,189.4,313,197.1,313.6,205.5,313.7,214.5,313.5,225.8,312.9,236.3,312.1,245.9,311.1,254.5,310,262.1,308.7,268.6,307.3,273.9,305.8,278.1,304.2,280.2,303,281.9,301.9,283,300.7,283.7,299.5,283.9,298.3,283.7,297.1,283,295.7,281.8,294.3,279.1,291.9,275.7,290.1,271.7,288.8,266.9,288.2,261.4,288,255,288.5,247.7,289.5,239.5,291.1],[270.5,362.6,254.6,364.4,238.4,366.2,222.8,368.2,208.3,370.1,195.8,371.8,185.7,373.4,179,374.7,176.1,375.5,175.9,375.8,175.6,376.3,175.3,377,175,377.7,174.8,378.5,174.6,379.4,174.4,380.2,174.3,381.1,174.2,382.4,174.1,383.4,174.2,384.3,174.3,385,174.5,385.6,174.8,386.2,175.3,386.8,175.8,387.3,176.5,387.9,177.3,388.3,178.3,388.6,179.8,388.7,181.8,388.6,184.7,388.4,188.6,388,193.7,387.5,197.1,387.2,200.8,386.8,204.6,386.4,208.4,386,212.1,385.6,215.6,385.2,218.8,384.8,221.5,384.5,224.2,384.1,227.3,383.8,230.6,383.4,234.1,382.9,237.6,382.5,241.1,382.1,244.4,381.7,247.5,381.3,255.1,380.6,262.9,380,270.8,379.7,278.4,379.6,285.5,379.7,291.8,380,297,380.6,300.8,381.3,302.8,381.9,304.4,382.2,305.6,382.5,306.6,382.6,307.4,382.5,308.1,382.3,308.8,382,309.6,381.5,310.2,381.1,310.8,380.6,311.2,380.1,311.5,379.5,311.7,378.8,311.9,378,312,377.1,312,376.1,312,374.8,311.9,373.8,311.5,372.9,310.8,372.1,309.7,371.2,308.1,370.3,305.8,369,302.8,367.4,299.7,365.9,297.3,364.7,295.3,363.9,293.5,363.3,291.6,362.9,289.6,362.6,287.1,362.5,284,362.4,282,362.4,280,362.4,278,362.4,276.1,362.4,274.4,362.4,272.8,362.5,271.5,362.6,270.5,362.6]],"style":0,"str":"百","shuxing":[]};
        var stage = new createjs.Stage(canvasName);
        var action = new createjs.Stage("canvas-action");
        var myButton1 = new Button(80, 40, "#21bbff", "播放", "#eeeeee", "16px Arial");
        myButton1.drawButton(18, 10);
        action.addChild(myButton1);
        var myButton2 = new Button(80, 40, "#21bbff", "上一步", "#eeeeee", "16px Arial");
        myButton2.drawButton(113, 10);
        action.addChild(myButton2);
        var myButton3 = new Button(80, 40, "#21bbff", "下一步", "#eeeeee", "16px Arial");
        myButton3.drawButton(208, 10);
        action.addChild(myButton3);
        var myButton4 = new Button(80, 40, "#21bbff", "暂停", "#eeeeee", "16px Arial");
        myButton4.drawButton(303, 10);
        action.addChild(myButton4);
        var sp = new createjs.Container();
        sp.x = 0.5;
        sp.y = 0.5;
        var bihua = new createjs.Stage("canvas-bihua");
        bihua.addChild(sp);
        var scale = window.screen.width > 900 ? 1 : window.screen.width / 500 / 2;
        if (window.screen.width / window.screen.height > 1) {
            scale = 1;
        }
        var p = new PPanel(data);
        p.scaleX = scale;
        p.scaleY = scale;
        stage.addChild(p);
        HZTools.showBishunList(data, sp, 50, { borderColor: "#aaaaaa" });
        sp.addEventListener("showBihua", function (e) {
            console.log(e.target.id);
            if (e.target.id == 6) {
                p.play();
            }
            else {
                p.playIndex(e.target.id);
            }
        });
        action.addEventListener("mousedown", function (e) {
            console.log(e.target._label);
            var currentBiHuaIndex = p.currentBihuaIndex;
            if (e.target._label === "播放") {
                p.play();
            }
            else if (e.target._label === "上一步") {
                p.playIndex(currentBiHuaIndex - 1);
            }
            else if (e.target._label === "下一步") {
                p.playIndex(currentBiHuaIndex + 1);
            }
            else if (e.target._label === "暂停") {
                p.stop();
            }
        });
        createjs.Ticker.addEventListener("tick", function (e) { stage.update(); bihua.update(); action.update(); });
    };
    return Main;
})();
var PPanel = (function (_super) {
    __extends(PPanel, _super);
    function PPanel(data, size) {
        if (size === void 0) { size = 500; }
        _super.call(this);
        this._scale = 1;
        this._bihuaIndex = 0;
        this._bihuaLength = 0;
        this._commIndex = 0;
        this._commLength = 0;
        this._pause = false;
        this._timer = new Timer(20);
        this.initData(data, size);
    }
    PPanel.prototype.initData = function (data, size) {
        if (size === void 0) { size = 500; }
        this.stopAll(false);
        this._data = data;
        this._scale = size / 500;
        if (this._bkLayer == undefined) {
            this._bkLayer = new createjs.Shape();
            this.addChild(this._bkLayer);
        }
        this._bkLayer.graphics.clear();
        HZTools.drawGezi(GeziType.MIZIGE, this._bkLayer.graphics, 500, 500);
        HZTools.showHanzi(data, this._bkLayer.graphics, size, "#dddddd");
        this._bkLayer.scaleX = this._scale;
        this._bkLayer.scaleY = this._scale;
        if (this._maskArr == undefined) {
            this._maskArr = new Array();
            this._brushArr = new Array();
        }
        else {
            while (this._maskArr.length > 0) {
                this._maskArr[0].parent.removeChild(this._maskArr[0]);
                this._brushArr[0].parent.removeChild(this._brushArr[0]);
                this._maskArr.shift();
                this._brushArr.shift();
            }
        }
        var length = this._data.commands.length;
        for (var i = 0; i < length; i++) {
            var mask = new createjs.Shape();
            mask.x = 0;
            mask.y = 0;
            mask.scaleX = this._scale;
            mask.scaleY = this._scale;
            mask.graphics.clear();
            mask.graphics.beginFill("#000000");
            HZTools.drawHZ(mask.graphics, size, this._data.commands[i], this._data.paths[i]);
            mask.graphics.endFill();
            this._maskArr.push(mask);
            var brush = new createjs.Shape();
            brush.scaleX = this._scale;
            brush.scaleY = this._scale;
            console.log("scale", this._scale);
            brush.graphics.beginFill("red");
            this.addChild(brush);
            this._brushArr.push(brush);
            brush.mask = mask;
            console.log(this.numChildren + "        >>>>>>>>>>>>>>>>>>");
        }
    };
    PPanel.prototype.play = function () {
        if (this._pause) {
            this._timer.start();
            this._pause = false;
            console.log("开始");
        }
        else {
            this._bihuaIndex = 0;
            this._bihuaLength = this._data.commands.length;
            this._commIndex = 0;
            this._commLength = 0;
            this.clearPath();
            this.drawPath(this._bihuaIndex);
        }
    };
    PPanel.prototype.getPathAt = function (index) {
        var bishunPath = this._data.bishun[index];
        var comm = [];
        var path = [];
        var arr;
        for (var i = 0; i < bishunPath.length; i++) {
            arr = bishunPath[i];
            for (var j = 0; j < arr.length; j += 2) {
                if (j == 0) {
                    comm.push(0);
                }
                else {
                    comm.push(1);
                }
                path.push(arr[j], arr[j + 1]);
            }
        }
        return { comm: comm, path: path };
    };
    PPanel.prototype.playIndex = function (index) {
        index = Math.max(index, 0);
        index = Math.min(index, this._data.commands.length);
        this.stop();
        for (var i = 0; i < index; i++) {
            var g = this._brushArr[i].graphics;
            g.beginFill("black");
            var o = this.getPathAt(i);
            for (var j = 0; j < o.comm.length; j++) {
                if (o.comm[j] == 0) {
                    g.beginFill("black");
                    g.drawCircle(o.path[j * 2], o.path[j * 2 + 1], 30);
                }
                else {
                    g.beginFill("black");
                    g.drawCircle(o.path[j * 2], o.path[j * 2 + 1], 30);
                }
            }
        }
        this._bihuaIndex = index;
        this._bihuaLength = this._data.commands.length;
        this._commIndex = 0;
        this._commLength = 0;
        this.drawPath(this._bihuaIndex, true);
    };
    PPanel.prototype.pause = function () {
        if (this._timer.running) {
            this._timer.stop();
            this._pause = true;
        }
    };
    Object.defineProperty(PPanel.prototype, "currentBihuaIndex", {
        get: function () {
            return this._bihuaIndex;
        },
        enumerable: true,
        configurable: true
    });
    PPanel.prototype.stop = function (clear) {
        if (clear === void 0) { clear = true; }
        this._pause = false;
        this._timer.reset();
        this._timer.removeEventListener("timer", this.onTime);
        this._timer.removeEventListener("timerComplete", this.onTimerComplete);
        if (clear) {
            this.clearPath();
        }
    };
    PPanel.prototype.stopAll = function (clear) {
        if (clear === void 0) { clear = true; }
        this.stop(clear);
    };
    PPanel.prototype.clearPath = function () {
        for (var i = 0; i < this._brushArr.length; i++) {
            this._brushArr[i].graphics.clear();
            this._brushArr[i].graphics.beginFill("red");
        }
    };
    PPanel.prototype.drawPath = function (index, single) {
        if (single === void 0) { single = false; }
        var o = this.getPathAt(index);
        this._comm = o.comm;
        this._path = o.path;
        this._commIndex = 0;
        this._commLength = this._comm.length;
        if (this._commIndex < this._commLength) {
            this.dispatchEvent("change");
            this._timer.reset();
            this._timer.repeatCount = this._commLength;
            this._timer.addEvent("timer", this.onTime, this);
            if (single == false) {
                this._timer.addEvent("timerComplete", this.onTimerComplete, this);
            }
            this._timer.start();
        }
        else {
            this._bihuaIndex++;
            if (this._bihuaIndex < this._bihuaLength) {
                this.drawPath(this._bihuaIndex);
            }
            else {
                this.dispatchEvent("complete");
            }
        }
    };
    PPanel.prototype.onTime = function (e) {
        var self = e.p;
        var g = self._brushArr[self._bihuaIndex].graphics;
        if (self._comm[self._commIndex] == 0) {
            g.beginFill("red");
            g.drawCircle(self._path[self._commIndex * 2], self._path[self._commIndex * 2 + 1], 30);
        }
        else {
            g.beginFill("red");
            g.drawCircle(self._path[self._commIndex * 2], self._path[self._commIndex * 2 + 1], 30);
        }
        self._commIndex++;
    };
    PPanel.prototype.onTimerComplete = function (e) {
        var self = e.p;
        self._bihuaIndex++;
        if (self._bihuaIndex < self._bihuaLength) {
            self.drawPath(self._bihuaIndex);
        }
        else {
            self.dispatchEvent("complete");
        }
    };
    return PPanel;
})(createjs.Container);
var Timer = (function (_super) {
    __extends(Timer, _super);
    function Timer(delay, repeatCount) {
        var _this = this;
        if (repeatCount === void 0) { repeatCount = 0; }
        _super.call(this);
        this.handler = function () {
            _this._running = true;
            _this._currentCount++;
            _this.dispatchEvent({ type: "timer", p: _this._p });
            if (_this._repeatCount != 0 && _this._currentCount >= _this._repeatCount) {
                _this.stop();
                _this.dispatchEvent({ type: "timerComplete", p: _this._p });
            }
        };
        this._delay = delay;
        this._repeatCount = repeatCount;
        this._currentCount = 0;
        this._running = false;
        this._tid = -1;
    }
    Object.defineProperty(Timer.prototype, "currentCount", {
        get: function () {
            return this._currentCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "delay", {
        get: function () {
            return this._delay;
        },
        set: function (d) {
            this.stop();
            this._delay = d;
            this.start();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "repeatCount", {
        get: function () {
            return this._repeatCount;
        },
        set: function (r) {
            this._repeatCount = r;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "running", {
        get: function () {
            return this._running;
        },
        enumerable: true,
        configurable: true
    });
    Timer.prototype.reset = function () {
        this.stop();
        this._currentCount = 0;
    };
    Timer.prototype.addEvent = function (type, fun, p) {
        this._p = p;
        this.addEventListener(type, fun);
    };
    Timer.prototype.start = function () {
        this._tid = setInterval(this.handler, this._delay);
        this._running = true;
    };
    Timer.prototype.stop = function () {
        clearInterval(this._tid);
        this._tid = -1;
        this._running = false;
    };
    return Timer;
})(createjs.EventDispatcher);
var WPanel = (function (_super) {
    __extends(WPanel, _super);
    function WPanel(data, size) {
        if (size === void 0) { size = 500; }
        _super.call(this);
        this.initData(data, size);
        this.initEvent();
    }
    WPanel.prototype.initData = function (data, size) {
        if (size === void 0) { size = 500; }
        this._data = data;
        this._scale = size / 500;
        if (this._bklayer == null) {
            this._bklayer = new createjs.Shape();
            this.addChild(this._bklayer);
        }
        this._bklayer.graphics.clear();
        HZTools.drawGezi(GeziType.MIZIGE, this._bklayer.graphics, 500, 500);
        HZTools.showHanzi(data, this._bklayer.graphics, size, "white", true, 1, "red", true);
        this._bklayer.scaleX = this._scale;
        this._bklayer.scaleY = this._scale;
        if (this._brush == null) {
            this._brush = new createjs.Shape();
            this.addChild(this._brush);
        }
        this._brush.graphics.clear();
        this._brush.scaleX = this._scale;
        this._brush.scaleY = this._scale;
        if (this._brushmask == null) {
            this._brushmask = new createjs.Shape();
        }
        this._brushmask.scaleX = this._scale;
        this._brushmask.scaleY = this._scale;
        this._brushmask.graphics.clear();
        this._brushmask.graphics.beginFill("green");
        var g = this._brushmask.graphics;
        for (var c = 0; c < this._data.commands.length; c++) {
            var j = 0;
            var scale = size / 500;
            var comm = this._data.commands[c];
            var path = this._data.paths[c];
            for (var i = 0; i < comm.length; i++) {
                if (comm[i] == 1) {
                    g.moveTo(path[j++] * scale, path[j++] * scale);
                }
                else if (comm[i] == 2) {
                    g.lineTo(path[j++] * scale, path[j++] * scale);
                }
                else if (comm[i] == 3) {
                    g.quadraticCurveTo(path[j++] * scale, path[j++] * scale, path[j++] * scale, path[j++] * scale);
                }
            }
        }
        this._brush.mask = this._brushmask;
    };
    WPanel.prototype.initEvent = function () {
        this.addEventListener("mousedown", function (e) {
            var self = e.currentTarget;
            self._brush.graphics.setStrokeStyle(40, 'round', 'round').beginStroke("red");
            self._brush.graphics.moveTo(e.localX, e.localY);
            self._mousedown = true;
            console.log("asdfasdfadf");
        });
        this.addEventListener("pressmove", function (e) {
            var self = e.currentTarget;
            if (self._mousedown == true) {
                self._brush.graphics.lineTo(e.localX, e.localY);
            }
        });
        this.addEventListener("pressup", function (e) {
            var self = e.currentTarget;
            self._mousedown = false;
        });
        this.addEventListener("mouseout", function (e) {
            var self = e.currentTarget;
            self._mousedown = false;
        });
    };
    WPanel.prototype.clear = function () {
        this._brush.graphics.clear();
    };
    return WPanel;
})(createjs.Container);
//# sourceMappingURL=.js.map