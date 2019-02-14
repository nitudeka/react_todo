const validate = (input, rules) => {
  let valid = true;
  if (rules.required) {
    valid = input.length >= 1;
    if (!valid) return false;
  };
  if (rules.minLength) {
    valid = input.length >= rules.minLength;
    if (!valid) return false;
  };
  if (rules.maxLength) {
    valid = input.length <= rules.maxLength;
    if (!valid) return false;
  };
  if (rules.email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    valid = re.test(String(input).toLowerCase());
    if (!valid) return false;
  }
  return valid;
}

export default validate;
