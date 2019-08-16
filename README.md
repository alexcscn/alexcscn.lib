# alex.lib

[![npm version](https://img.shields.io/badge/npm-v1.0.2-orange?style=flat-square)](https://www.npmjs.org/package/alex.lib)
[![build status](https://img.shields.io/badge/build-passing-green?style=flat-square)](https://travis-ci.org/axios/axios)
[![install size](https://packagephobia.now.sh/badge?p=alex.lib)](https://packagephobia.now.sh/result?p=alex.lib)
![contact](https://img.shields.io/badge/qq-8187265-blue?style=flat-square)
![email](https://img.shields.io/badge/email-alex%40etechcctv.com-blue?style=flat-square)

常用库文件

## Features
- coding: 中文与unicode之间的相互转换

## Installing

Using npm:

```bash
$ npm install alex.lib
```

## Example
```js
const alexlib = require('alex.lib');

var text1 = alexlib.coding.toascii('中文');
var text2 = alexlib.coding.tounicode('中文');
var text3 = alexlib.coding.reconvert('&#xe789;')
```

## Reference
### coding 
> 中文与unicode之间的相互转换
<table>
    <tr>
        <th>function</th>
        <th>description</th>
    </tr>
    <tr>
        <td>reconvert</td>
        <td>从unicode编码的ascii字符串还原中文</td>
    </tr>
    <tr>
        <td>tounicode</td>
        <td>中文汉字转unicode</td>
    </tr>
    <tr>
        <td>toascii</td>
        <td>中文转换&#xxxx;格式的ascii串</td>
    </tr>
    <tr>
        <td>unicode2ascii</td>
        <td>unicode转换ascii串</td>
    </tr>
</table>