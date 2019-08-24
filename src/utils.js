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
        if (!Array.isArray(strArr) || strArr.length===0)
            return obj;
        for(let item of strArr) {
            if (typeof item !== 'string' || item.length === 0 )
                continue;
            obj["item"] = initVal;
        }
    }
};
