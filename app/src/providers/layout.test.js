import { isLayoutValid } from './layout';

describe('Layout util provider tests', () => {
  it('should return true (default)', () => {
    const layout = [[1, 2, 3]];
    const sheet = [1, 1, 1];

    expect(isLayoutValid(layout, sheet)).toBe(true);
  });

  it('should return false (don\'t use all sheet images)', () => {
    const layout = [[1, 2, 3]];
    const sheet = [1, 1, 1, 1];

    expect(isLayoutValid(layout, sheet)).toBe(false);
  });

  it('should return true (two rows)', () => {
    const layout = [
      [1, 2, 3],
      [1, 2, 3]
    ];
    const sheet = [1, 1, 1];

    expect(isLayoutValid(layout, sheet)).toBe(true);
  });

  it('should return true (big, single image)', () => {
    const layout = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    const sheet = [1];

    expect(isLayoutValid(layout, sheet)).toBe(true);
  });

  it('should return true (default, two images, two columns)', () => {
    const layout = [
      [1, 1, 1, 2, 2, 2],
      [1, 1, 1, 2, 2, 2]
    ];
    const sheet = [1, 2];

    expect(isLayoutValid(layout, sheet)).toBe(true);
  });

  it('should return false (image inside another)', () => {
    const layout = [
      [1, 1, 1, 2, 2, 2],
      [1, 1, 1, 2, 3, 2]
    ];
    const sheet = [1, 2, 3];

    expect(isLayoutValid(layout, sheet)).toBe(false);
  });

  it('should return true (two columns, second column with two rows)', () => {
    const layout = [
      [1, 1, 1, 2, 2, 2],
      [1, 1, 1, 2, 2, 2],
      [1, 1, 1, 3, 3, 3],
      [1, 1, 1, 3, 3, 3]
    ];
    const sheet = [1, 2, 3];

    expect(isLayoutValid(layout, sheet)).toBe(true);
  });

  it('should return false (use image not in sheet)', () => {
    const layout = [
      [1, 1, 1, 3, 3, 3],
      [1, 1, 1, 3, 3, 3]
    ];
    const sheet = [1, 2];

    expect(isLayoutValid(layout, sheet)).toBe(false);
  });

  it('should return false (not two dimensional)', () => {
    const layout = [
      [1, 1, 1, 3, 3, [3]],
      [1, 1, 1, 3, 3, 3]
    ];
    const sheet = [1, 2];

    expect(isLayoutValid(layout, sheet)).toBe(false);
  });

  it('should return false (array, not matrix)', () => {
    const layout = [1, 1, 1, 3, 3, 3];
    const sheet = [1, 2];

    expect(isLayoutValid(layout, sheet)).toBe(false);
  });
});
