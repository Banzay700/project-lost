export const REGEX = {
  ONE_UPPERCASE_LETTER: /\p{Lu}/u,
  ONLY_LETTERS: /^[a-zA-Zа-яА-ЯіІїЇєЄёЁ\s]+$/,
  NO_SPACES: /^\S*$/,
  ONLY_NUMBERS: /^\d+$/,
  PHONE_NUMBER: /^[0-9\s()+-]+$/,
  CREATE_PHONE_NUMBER: /^(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/,
  NO_SYMBOLS: /^[a-zA-Z0-9а-яА-ЯіІїЇєЄёЁ0-9\s]+$/,
}
