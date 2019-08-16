/**
 * string coding converting
 * 中文和unicode之间互相转换
 * @module      coding.js
 * @auther      ALEX
 * @date        2019/08/16
 * @email       alex@etechcctv.com
 * @qq          8187265
 */
"use strict";

function left_zero_4(str) {
    if (str != null && str !== '' && str !== 'undefined')
        if (str.length === 2)
            return '00' + str;
    return str;
}

module.exports = {
    /**
     * 从unicode编码的ascii字符串还原中文
     * @param str
     * @returns {string | *}
     */
    reconvert: (str) => {
        str = str.replace(/(\\u)(\w{1,4})/gi,function($0){
            return (String.fromCharCode(parseInt((escape($0).replace(/(%5Cu)(\w{1,4})/g,"$2")),16)));
        });
        str = str.replace(/(&#x)(\w{1,4});/gi,function($0){
            return String.fromCharCode(parseInt(escape($0).replace(/(%26%23x)(\w{1,4})(%3B)/g,"$2"),16));
        });
        str = str.replace(/(&#)(\d{1,6});/gi,function($0){
            return String.fromCharCode(parseInt(escape($0).replace(/(%26%23)(\d{1,6})(%3B)/g,"$2")));
        });
        return str;
    },
    /**
     * 中文汉字转unicode
     * @param str
     * @returns {string}
     */
    tounicode: (str) => {
        let value='';
        for (let i = 0; i < str.length; i++)
            value += '\\u' + left_zero_4(parseInt(str.charCodeAt(i)).toString(16));
        return value;
    },
    /**
     * 中文转换&#xxxx格式的ascii串
     * @param str
     * @returns {string}
     */
    toascii: (str) => {
        let value='';
        for (let i = 0; i < str.length; i++)
            value += '\&#x' + left_zero_4(parseInt(str.charCodeAt(i)).toString(16))+';';
        return value;
    },
    /**
     * unicode转换ascii串
     * @param str
     * @returns {string}
     */
    unicode2ascii: (str) => {
        let value='';
        for (let i = 0; i < str.length; i++)
            value += '&#' + str.charCodeAt(i) + ';';
        return value;
    }
};
