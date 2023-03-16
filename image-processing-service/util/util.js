import fs from "fs";
import Jimp from "jimp";
import path from "path";
import fetch from "node-fetch";

export async function filterImageFromURL(inputURL) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(inputURL);
      // I turn the image to a buffer and then to a Jimp image, otherwise some images are not processed
      const data = await res.arrayBuffer();
      const photo = await Jimp.read(data);
      // Used the new nodejs URL to get the path of the file as I am using modules
      const relativePath = new URL(path.dirname(import.meta.url)).pathname;
      const outpath =
        relativePath +
        "/tmp/filtered." +
        Math.floor(Math.random() * 2000) +
        ".jpg";
      await photo
        .resize(256, 256) // resize
        .quality(60) // set JPEG quality
        .greyscale() // set greyscale
        .write(outpath, (img) => {
          resolve(outpath);
        });
    } catch (error) {
      reject(error);
    }
  });
}

// deleteLocalFiles
// helper function to delete files on the local disk
// useful to cleanup after tasks
// INPUTS
//    files: Array<string> an array of absolute paths to files
export async function deleteLocalFiles(files) {
  for (let file of files) {
    fs.unlinkSync(file);
  }
}
