const namesValidators = (value: string) => {
  // Check if value contains latin or cyrillic characters
  const cyrillicPattern = /^[а-яА-ЯёЁ\s]+$/;
  const latinPattern = /^[a-zA-Z\s]+$/;
  if (!cyrillicPattern.test(value) && !latinPattern.test(value)) {
    return "Имя должно содержать только символы кириллицы или латиницы";
  }

  // Check if first letter is not a capital letter
  const firstLetterNotCapitalPattern = /^[^A-ZА-ЯЁ]/;
  if (firstLetterNotCapitalPattern.test(value)) {
    return "Первая буква должна быть заглавной";
  }

  return false;
};

// eslint-disable-next-line @typescript-eslint/naming-convention,camelcase
export const first_name = (value: string) => namesValidators(value);

// eslint-disable-next-line @typescript-eslint/naming-convention,camelcase
export const second_name = (value: string) => namesValidators(value);

// eslint-disable-next-line consistent-return
export const login = (value: string) => {
  // Check if the login is not from 3 to 20 characters long
  if (value.length < 3 || value.length > 20) {
    return "Длина логина должна быть от 3 до 20";
  }

  // Check if login contains any spaces
  const spacesPattern = /\s/;
  if (spacesPattern.test(value)) {
    return "Не должно быть пробелов";
  }

  // Check if login contains any special signs other than dash and underline
  const specialSignsPattern = /[^a-zA-Z0-9-_]/;
  if (specialSignsPattern.test(value)) {
    return "Не должен содержать кроме нижнего подчеркивания и тире";
  }

  // Check if login is not all numbers and contains only Latin characters, numbers, dashes, and underscores
  const latinWithNumbersPattern = /^(?=.*[a-zA-Z])[a-zA-Z0-9-_]+$/;
  if (!latinWithNumbersPattern.test(value)) {
    return "Должен содержать латинские буквы";
  }
};

export const email = (value: string) => {
  // Check if email is valid
  const emailPattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;
  if (!emailPattern.test(value)) {
    return "Введите валидную почту";
  }
  return false;
};

export const password = (value: string) => {
  // Check if the password is not from 8 to 40 characters long
  if (value.length < 8 || value.length > 40) {
    return "Длина пароля должна быть от 8 до 40 символов";
  }

  // Check if password contains at least one uppercase letter
  const uppercasePattern = /[A-Z]/;
  if (!uppercasePattern.test(value)) {
    return "Пароль должен содержать хотя бы одну заглавную букву";
  }

  // Check if password contains at least one digit
  const digitPattern = /\d/;
  if (!digitPattern.test(value)) {
    return "Пароль должен содержать хотя бы одну цифру";
  }

  return false;
};

export const phone = (value: string) => {
  // Check if the phone number is not from 10 to 15 characters long
  if (value.length < 10 || value.length > 15) {
    return "Номер телефона должен содержать от 10 до 15 символов";
  }

  // Check if phone number consists of digits and possibly starts with a plus
  const phonePattern = /^\+?\d+$/;
  if (!phonePattern.test(value)) {
    return "Номер телефона должен состоять только из цифр и (необязательно) начинаться со знака плюс";
  }

  return false;
};

export const message = (value: string) => {
  // Check if the message is empty
  if (!value.trim()) {
    return "Сообщение не должно быть пустым";
  }

  return false;
};
