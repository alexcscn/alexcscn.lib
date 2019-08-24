/**
 * utilities set
 * 工具函数集
 * @module      utils.js
 * @auther      ALEX
 * @date        2019/08/24
 * @email       alex@etechcctv.com
 * @qq          8187265
 */
"use strict";

module.exports = {
    InitObjFromStrArr: (strArr, initVal='')=>{
        let obj = {};
        if (typeof strArr === 'string' && strArr !== '')
            strArr = strArr.split(',');
        else if (!Array.isArray(strArr) || strArr.length===0)
            return obj;
        strArr.forEach((item,index)=> {
            if (typeof item !== 'string' || item.trim().length === 0 )
                return;
            if (Array.isArray(initVal)) {
                if (index <= initVal.length-1)
                    obj[item.trim()] = initVal[index];
                else
                    obj[item.trim()] = null;
            } else
                obj[item.trim()] = initVal;
        });
    }
};
