import _ from 'lodash';

const validateStartRange = (number: string | number) => {
  if (!Number.isInteger(Number(number))) {
    return Promise.reject('Please enter a positive integer');
  }
  if (Number(number) < 1) {
    return Promise.reject('Please enter a number greater than 1');
  }
  return Promise.resolve();
};

const validateCorrectOrder = (number: string | number, arrOption: any) => {
  const arrOptionFormat = arrOption?.map((item: any) => Number(item));

  if (_.countBy(arrOptionFormat)[+number] >= 2) {
    return Promise.reject('');
  }
  if (!Number.isInteger(Number(number))) {
    return Promise.reject('');
  }
  if (Number(number) < 1) {
    return Promise.reject('');
  }
  if (Number(number) > arrOptionFormat?.length) {
    return Promise.reject('');
  }
  return Promise.resolve();
};

const validateEndRange = (
  startNumber: number | string,
  endNumber: number | string,
) => {
  if (!Number.isInteger(Number(endNumber))) {
    return Promise.reject('Please enter a positive integer');
  }
  if (Number(endNumber) < 1) {
    return Promise.reject('Please enter a number greater than 1');
  }
  if (Number(endNumber) < Number(startNumber)) {
    return Promise.reject(
      'The subsequent number must be greater than the previous number',
    );
  }
  return Promise.resolve();
};

const validateMaximun = (number: string | number, max: number | string) => {
  if (!Number.isInteger(Number(number))) {
    return Promise.reject('Please enter a positive integer');
  }
  if (Number(number) < 1) {
    return Promise.reject('Please enter a number greater than 1');
  }
  if (Number(number) > Number(max)) {
    return Promise.reject('Number limit exceeded');
  }
  return Promise.resolve();
};

const validateMaximunAmountToken = (
  number: string | number,
  max: number | string,
) => {
  if (Number(number) <= 0) {
    return Promise.reject('Please enter a number greater than 0');
  }
  if (Number(number) > Number(max)) {
    return Promise.reject('Number limit exceeded');
  }
  return Promise.resolve();
};

export {
  validateStartRange,
  validateEndRange,
  validateMaximun,
  validateMaximunAmountToken,
  validateCorrectOrder,
};
