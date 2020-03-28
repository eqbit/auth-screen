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
  }
};
