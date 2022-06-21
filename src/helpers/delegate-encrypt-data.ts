import crypto from 'crypto-js';

class DelegateEncryptData {
  encrypt(value) {
    return crypto.MD5(`${value}${process.env.SALT_KEY}`);
  }
}

export default new DelegateEncryptData();
