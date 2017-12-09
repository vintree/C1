/*
 * @Author: puxiao.wh 
 * @Date: 2017-12-05 02:58:31 
 * @Last Modified by: puxiao.wh
 * @Last Modified time: 2017-12-05 03:09:23
 * 十六进制颜色值的正则表达式  
 */

const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;  
/*RGB颜色转换为16进制*/  
function getColorHex (str = '') {  
    var that = str;  
    if(/^(rgb|RGB)/.test(that)){  
        var aColor = that.replace(/(?:||rgb|RGB)*/g,"").split(",");  
        var strHex = "#";  
        for(var i=0; i<aColor.length; i++){  
            var hex = Number(aColor[i]).toString(16);  
            if(hex === "0"){  
                hex += hex;   
            }  
            strHex += hex;  
        }  
        if(strHex.length !== 7){  
            strHex = that;    
        }  
        return strHex;  
    }else if(reg.test(that)){  
        var aNum = that.replace(/#/,"").split("");  
        if(aNum.length === 6){  
            return that;      
        }else if(aNum.length === 3){  
            var numHex = "#";  
            for(var i=0; i<aNum.length; i+=1){  
                numHex += (aNum[i]+aNum[i]);  
            }  
            return numHex;  
        }  
    }else{  
        return that;      
    }  
};  
  
//-------------------------------------------------  
  
/*16进制颜色转为RGB格式*/  
function getColorRgba (str = '#fff', a = 1) {
    var sColor = str.toLowerCase();  
    if(sColor && reg.test(sColor)){  
        if(sColor.length === 4){  
            var sColorNew = "#";  
            for(var i=1; i<4; i+=1){  
                sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));     
            }  
            sColor = sColorNew;  
        }  
        //处理六位的颜色值  
        var sColorChange = [];  
        for(var i=1; i<7; i+=2){  
            sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));    
        }  
        return `RGB(${sColorChange.join(",")}, ${a})`;
    }else{  
        return sColor;    
    }  
};  

function color(color, a) {
    if(Object.prototype.toString.call(color) === '[object String]') {
        // 十六进制
        return getColorHex(color)
    } else if(Object.prototype.toString.call(color) === '[object Array]' && color.length ===3) {
        // rgb
        return getColorRgba(color, a)
    }
}

export default color