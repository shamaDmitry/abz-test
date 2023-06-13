import { emailPattern, phonePattern } from "./const";

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

export const phoneRules = {
  required: "Required",
  pattern: {
    value: phonePattern,
    message: 'Number should start with code of Ukraine +38 (XXX) XXX XX XX',
  }
};

export const positionRules = {
  required: "Required",
};

export const photoRules = {
  required: "Required",
  validate: {
    size: (value) => {
      const { size } = value[0];

      return parseInt(size) <= 5242880 || 'should be lower than 5MB'
    },
    type: (value) => {
      const { type } = value[0];

      return type === 'image/jpeg' || 'should be image/jpeg'
    },
  }
};