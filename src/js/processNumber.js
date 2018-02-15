import {
  parse,
  isValidNumber,
  format,
  getNumberType,
  getCountryCallingCode,
} from 'libphonenumber-js';

function processNumber(number) {
  const result = {};
  const parsed = parse(number);
  result.raw = number;
  if (typeof parsed.phone !== 'undefined') {
    result.E164 = format(parsed, 'E.164');
    result.international = format(parsed, 'International');
    result.country = parsed.country;
    result.isValid = isValidNumber(parsed);
    result.type = getNumberType(parsed);
  } else {
    result.isValid = false;
  }
  return result;
}

function getCountryNumber(countryCode) {
  return getCountryCallingCode(countryCode);
}

export { processNumber, getCountryNumber };
