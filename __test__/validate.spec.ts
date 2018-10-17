import { validate } from '@src/index';
const UNSAFE_STRING = 'faceboоk.eth';
const SAFE_STRING = 'facebook.eth';

describe('test', () => {
  it('should import validate function', () => {
    expect(validate.name).toEqual('validate');
  });
  it('should return false on an unsafe string', () => {
    expect(validate(UNSAFE_STRING, false)).toBeFalsy();
  });
  it('should return true on a safe string', () => {
    expect(validate(SAFE_STRING, false)).toBeTruthy();
  });
});
