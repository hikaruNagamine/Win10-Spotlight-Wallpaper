'use strict';
const sizeOf = require('image-size')
const fs = require('fs')
const path = require('path')

// copy元のフォルダー：windows10 spotlightの保存先パス
const SPOTLIGHT_IMG_PATH = path.join(
    process.env.LOCALAPPDATA,
    'Packages',
    'Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy',
    'LocalState',
    'Assets')
// copy先のフォルダ
const TO_FOLDER = path.join(process.env.HOMEPATH,'WallpaperPictures')

let main = async () => {
    try {
        console.log("****** windows10 spotlight image to wallpaper ******")
        // copy先フォルダを作成する
        await fs.mkdir(TO_FOLDER, { recursive: true }, (err) => {
            if (err) throw err;
        });
        // file list
        fs.readdir(SPOTLIGHT_IMG_PATH, (err, files) => {
            if(err) throw err
            let count = 0
            files.forEach((file)=>{
                let fromFile = path.join(SPOTLIGHT_IMG_PATH, file)
                let toFile = path.join(TO_FOLDER, file)
                count++
                // console.log(count + " : " + file)
                // read image file
                let dimensions = sizeOf(fromFile);
                // console.log(dimensions.width, dimensions.height)
    
                // file check : 1980 * 1080 size
                if(dimensions.width != 1920) {
                    return
                }
    
                // file copy
                fs.copyFile(fromFile, toFile + '.' + dimensions.type,(err) => {
                    if (err) throw err;
                    console.log(count + " : " + file)
                    console.log(dimensions.width, dimensions.height)
                });
                  
            })
        })
    } catch (e) {
        console.error(e)
    }
}

main();