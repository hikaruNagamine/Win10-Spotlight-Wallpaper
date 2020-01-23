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
            let fromFile = path.join(SPOTLIGHT_IMG_PATH, file)
            let toFile = path.join(TO_FOLDER, file)
            count++
            console.log(count + " : " + file)
            // read image file
            let dimensions = sizeOf(fromFile);
            console.log(dimensions.width, dimensions.height);

            // file check : 1980 * 1080 size
            if(dimensions.width != 1920) {
                return
            }

            // file check : check existence
            
            // file copy
            fs.copyFile(fromFile, toFile + '.' + dimensions.type,(err) => {
                if (err) throw err;
            });
              
        })
    })
} catch (e) {
    console.error(e)
}