interface Validations {
  [key: string]: (value: string) => boolean
}

export const validations: Validations = {
  name(value: string): boolean {
    return !!value.length && /^[a-zA-Z\s]*$/.test(value.toLowerCase());
  },
  email(value: string): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  },
  country(value: string): boolean {
    return !!value;
  },
  checkForLowerCase(password: string): boolean {
    return /[a-z]/.test(password)
  },
  checkForUpperCase(password: string): boolean {
    return /[A-Z]/.test(password)
  },
  checkForNumber(password: string): boolean {
    return /[0-9]/.test(password)
  },
  checkForLength(password: string): boolean {
    return password.length > 7
  },
  password(password: string): boolean {
    return this.checkForLowerCase(password)
      && this.checkForUpperCase(password)
      && this.checkForNumber(password)
      && this.checkForLength(password)
  }
};
