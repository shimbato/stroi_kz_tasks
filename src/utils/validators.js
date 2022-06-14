export function required(message) {
  return message || "Обязательное поле";
}

export function validatePassword(value) {
  if (value.length < 8) return "Minimum 8 symbols";
}

export function validateCPassword(password) {
  return function (value) {
    if (value !== password) {
      return "Passwords are not same";
    }
  };
}


  export const validateNumber = (str)=> {
    console.log(str, str.match(/\d+/g).join('') )

    const numbers = str.match(/\d+/g).join('') 
    if (numbers.length !== 11) {
      return "Номер не валиден" 
    } 
  }
