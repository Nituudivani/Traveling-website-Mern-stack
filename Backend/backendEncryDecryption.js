var CryptoJS = require("crypto-js");
require("dotenv").config();
exports = module.exports = {


  aesEncryptedText: (value, key) => {
    let ciphertext = CryptoJS.AES.encrypt(
      value,
      CryptoJS.enc.Utf8.parse(process.env.SECRETKEY),
      {
        iv: CryptoJS.enc.Utf8.parse(key),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    ).toString();

    return ciphertext;
  },
  
  aesDecryptedText: (value, key) => {
    let bytes = CryptoJS.AES.decrypt(
      value,
      CryptoJS.enc.Utf8.parse(process.env.SECRETKEY),
      {
        iv: CryptoJS.enc.Utf8.parse(key),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    );

    var originalText = bytes.toString(CryptoJS.enc.Utf8);

    return originalText;
  },
 
  encryptedKey: (value) => {
    let ciphertext = CryptoJS.AES.encrypt(
      value,
      CryptoJS.enc.Utf8.parse(process.env.SECRETKEY_KEY),
      {
        iv: CryptoJS.enc.Utf8.parse(process.env.SECRETKEY_KEY_IV),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    ).toString();

    return ciphertext;
  },

  decryptedKey: (value) => {
    let bytes = CryptoJS.AES.decrypt(
      value,
      CryptoJS.enc.Utf8.parse(process.env.SECRETKEY_KEY),
      {
        iv: CryptoJS.enc.Utf8.parse(process.env.SECRETKEY_KEY_IV),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    );
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  },
};