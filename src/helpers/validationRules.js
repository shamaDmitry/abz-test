import { emailPattern } from "./const";

export const nameRules = {
  required: "Username should contain 2-60 characters",
  minLength: {
    message: "Username should contain 2-60 characters",
    value: 2,
  },
  maxLength: {
    message: "Username should contain 2-60 characters",
    value: 60,
  },
}

export const emailRules = {
  required: "User email, must be a valid email according to RFC2822",
  minLength: {
    message: "Email should contain min 2 characters",
    value: 2,
  },
  maxLength: {
    message: "Email should contain max 100 characters",
    value: 100,
  },
  pattern: {
    value: emailPattern,
    message: 'Must be a valid email according to RFC2822',
  }
};