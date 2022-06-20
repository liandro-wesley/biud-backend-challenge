let errors = [];

function ValidationContract() {
  errors = [];
}

ValidationContract.prototype.isEmail = (value, message) => {
  const reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
  if (!reg.test(value)) errors.push({ message });
};

ValidationContract.prototype.hasMinLen = (value, min, message) => {
  if (!value || value.length < min) errors.push({ message });
};

ValidationContract.prototype.errors = () => {
  return errors;
};

ValidationContract.prototype.clear = () => {
  errors = [];
};

ValidationContract.prototype.isValid = () => {
  return errors.length == 0;
};

module.exports = ValidationContract;
