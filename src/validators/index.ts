class ValidationContract {
  private errors = [];

  public isRequired(value, id, message) {
    if (!value || value.length <= 0)
      this.errors.push({
        [id]: message
      });
    return this;
  }

  public isEmail(value, id, message) {
    const reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value))
      this.errors.push({
        [id]: message
      });
    return this;
  }

  public min = (value, id, min, message) => {
    if (!value || value.length < min)
      this.errors.push({
        [id]: message
      });
  };

  public get errorsMessage() {
    return this.errors;
  }

  public get isValid() {
    return this.errors.length === 0;
  }

  public clearErrors() {
    return (this.errors = [{}]);
  }
}

export default new ValidationContract();
