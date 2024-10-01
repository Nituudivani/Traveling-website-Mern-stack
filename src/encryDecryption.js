var CryptoJS = require("crypto-js");

export const aesEncryptedText = (value, key) => {
  let Securitykey = "031ec009-dc69-4b3a-b65f-64c8280263c4";
  let ciphertext = CryptoJS.AES.encrypt(
    value,
    CryptoJS.enc.Utf8.parse(Securitykey),
    {
      iv: CryptoJS.enc.Utf8.parse(key),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
  ).toString();

  return ciphertext;
};


export const aesDecryptedText = (value, key) => {
  let Securitykey = "031ec009-dc69-4b3a-b65f-64c8280263c4";
  let bytes = CryptoJS.AES.decrypt(
    value,
    CryptoJS.enc.Utf8.parse(Securitykey),
    {
      iv: CryptoJS.enc.Utf8.parse(key),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
  );

  var originalText = bytes.toString(CryptoJS.enc.Utf8);

  return originalText;
};


export const encryptedKey = (value) => {
  let Securitykey = "eef285a4-bee5-451b-b0d9-5f6da848ae70";
  let key = "eef285a4-dc69-b65f-b0d9-64c8280263c4";
  let ciphertext = CryptoJS.AES.encrypt(
    value,
    CryptoJS.enc.Utf8.parse(Securitykey),
    {
      iv: CryptoJS.enc.Utf8.parse(key),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
  ).toString();

  return ciphertext;
};


export const decryptedKey = (value) => {
  let Securitykey = "eef285a4-bee5-451b-b0d9-5f6da848ae70";
  let key = "eef285a4-dc69-b65f-b0d9-64c8280263c4";
  let bytes = CryptoJS.AES.decrypt(
    value,
    CryptoJS.enc.Utf8.parse(Securitykey),
    {
      iv: CryptoJS.enc.Utf8.parse(key),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
  );

  var originalText = bytes.toString(CryptoJS.enc.Utf8);

  return originalText;
};