import unikey from '../src/index';

/**
 * @description is a function that determine the system under test (sut)
 */
const makeSut = () => ({
  sut: unikey,
});

/**
 * @description is a constant that contains the inputs and respective expected outputs
 */
const LENGTH_IO = [
  [undefined, 8],
  [2, 2],
  [4, 4],
  [32, 32],
  [NaN, 0],
  [-1, 0],
  [99, 99],
  [300, 300],
  [500, 500],
  [1000, 1000],
];

describe('Check if the length of result is equal than input param', () => {
  it.each(LENGTH_IO)(
    'should receive %s and return %d caracteres',
    (input, output) => {
      const { sut } = makeSut();

      expect(sut(input).length).toBe(output);
    }
  );
});

describe('Check if only return alphanumeric strings in 100 attempts', () => {
  const { sut } = makeSut();

  it.each(Array.from({ length: 100 }, () => sut()))(
    'should receive %s and return only alphanumeric string',
    (key) => {
      const regex = new RegExp(/^[a-zA-Z0-9]+$/i);

      expect(regex.test(key)).toBeTruthy();
    }
  );
});

describe('Check if two generation will never be equals strings in 100 attempts', () => {
  const { sut } = makeSut();

  it.each(Array.from({ length: 100 }, () => [sut(), sut()]))(
    'should %s be different from %s',
    (input, output) => {
      expect(input).not.toBe(output);
    }
  );
});

describe('Check if two generation will never be equals strings in 100 attempts with the mixedCase', () => {
  const { sut } = makeSut();

  it.each(
    Array.from({ length: 100 }, () => [
      sut(16, { case: 'mixed' }),
      sut(16, { case: 'mixed' }),
    ])
  )('should %s be different from %s', (input, output) => {
    expect(input).not.toBe(output);
  });
});

describe('Check if two generation will never be equals strings in 100 attempts with the upperCase', () => {
  const { sut } = makeSut();

  it.each(
    Array.from({ length: 100 }, () => [
      sut(16, { case: 'upper' }),
      sut(16, { case: 'upper' }),
    ])
  )('should %s be different from %s', (input, output) => {
    expect(input).not.toBe(output);
  });
});
