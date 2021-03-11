import { unusedVariable } from '../app';

const newLocal = 'Test1';
// eslint-disable-next-line no-undef
test(newLocal, () => {
  // eslint-disable-next-line no-undef
  expect(unusedVariable).toBe('variable');
});
