import { EmailRegex } from './constants';

export function validateEmail(email) {
  return EmailRegex.test(email);
}
