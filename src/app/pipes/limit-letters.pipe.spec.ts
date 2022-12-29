import { LimitLettersPipe } from './limit-letters.pipe';

describe('LimitLettersPipe', () => {
  it('create an instance', () => {
    const pipe = new LimitLettersPipe();
    expect(pipe).toBeTruthy();
  });
});
