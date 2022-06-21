import Contract from '../validators';

const delegateFormatError = (id) =>
  Contract.errorsMessage
    .filter((error) => Object.keys(error).includes(id))
    .map((error) => {
      return Object.assign(error, { ['message']: error[id] })[id];
    });

export default delegateFormatError;
