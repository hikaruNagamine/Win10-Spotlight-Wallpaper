'use strict';
const fse = require('fs-extra')
const sizeOf = require('image-size')
const fs = require('fs')
const path = require('path')

const USER_LOCAL_PATH = process.env.LOCALAPPDATA
// copy元のフォルダー：windows10 spotlightの保存先パス
const SPOTLIGHT_IMG_PATH = path.join(
    USER_LOCAL_PATH,
    'Packages',
    'Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy',
    'LocalState',
    'Assets')
// copy先のフォルダ
const TO_FOLDER = path.join(USER_LOCAL_PATH,'Pictures')

try {
    // fileS list
    fs.readdir(SPOTLIGHT_IMG_PATH, (err, files) => {
        if(err) throw err
        let count = 0
        files.forEach((file)=>{
            count++
            console.log(count + " : " + file)
            // read image file

            // file check : size

            // file check : check existence
            
            // file copy

        })
    })
} catch (e) {
    console.error(e)
}