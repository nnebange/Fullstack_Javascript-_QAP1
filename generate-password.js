const randomString = (length, chars) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };
  
  const generatePassword = (length, numbers, capital, symbols) => {
    let chars = 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) chars += '0123456789';
    if (capital) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (symbols) chars += '!@#$%^&*()_+-=';
  
    return randomString(length, chars);
  };
  
  module.exports = generatePassword;
  