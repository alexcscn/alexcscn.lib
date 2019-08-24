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

        for(let index=0; index<strArr.length; index++) {
            let item = strArr[index];
            if (typeof item !== 'string' || item.trim().length === 0 ) {
                continue
            }
            item = item.trim();
            if (!Array.isArray(initVal))
                obj[item] = initVal;
            else
            if (index <= initVal.length-1)
                obj[item] = initVal[index];
            else
                obj[item] = null;
        }
        return obj;
    }
};
