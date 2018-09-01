import { getLayoutGrid, errorMessages } from './layout';

describe('Layout util provider tests', () => {
  it('should correct grid for simple layout', () => {
    const layout = [[1, 2, 3]];
    const sheet = [1, 1, 1];

    expect(getLayoutGrid(layout, sheet)).toEqual([
      {
        i: 'image0',
        x: 0,
        y: 0,
        w: 1,
        h: 1
      },
      {
        i: 'image1',
        x: 1,
        y: 0,
        w: 1,
        h: 1
      },
      {
        i: 'image2',
        x: 2,
        y: 0,
        w: 1,
        h: 1
      },
    ]);
  });

  it('should return "sheet" error, as layout don\'t use all sheet images', () => {
    const layout = [[1, 2, 3]];
    const sheet = [1, 1, 1, 1];

    expect(getLayoutGrid(layout, sheet)).toEqual(errorMessages.sheet);
  });

  it('should return grid (two rows)', () => {
    const layout = [
      [1, 2, 3],
      [1, 2, 3]
    ];
    const sheet = [1, 1, 1];

    expect(getLayoutGrid(layout, sheet)).toEqual([
      {
        i: 'image0',
        x: 0,
        y: 0,
        w: 1,
        h: 2
      },
      {
        i: 'image1',
        x: 1,
        y: 0,
        w: 1,
        h: 2
      },
      {
        i: 'image2',
        x: 2,
        y: 0,
        w: 1,
        h: 2
      }
    ]);
  });

  it('should return correct grid for a big, single image', () => {
    const layout = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    const sheet = [1];

    expect(getLayoutGrid(layout, sheet)).toEqual([
      {
        i: 'image0',
        x: 0,
        y: 0,
        w: 11,
        h: 6
      }
    ]);
  });

  it('should return correct grid for layout with two images and two columns)', () => {
    const layout = [
      [1, 1, 1, 2, 2, 2],
      [1, 1, 1, 2, 2, 2]
    ];
    const sheet = [1, 2];

    expect(getLayoutGrid(layout, sheet)).toEqual([
      {
        i: 'image0',
        x: 0,
        y: 0,
        w: 3,
        h: 2
      },
      {
        i: 'image1',
        x: 3,
        y: 0,
        w: 3,
        h: 2
      }
    ]);
  });

  it('should return "grid" error, as layout has an image inside another', () => {
    const layout = [
      [1, 1, 1, 2, 2, 2],
      [1, 1, 1, 2, 3, 2]
    ];
    const sheet = [1, 2, 3];

    expect(getLayoutGrid(layout, sheet)).toEqual(errorMessages.grid);
  });

  it('should return correct grid with two columns, the second column having two rows', () => {
    const layout = [
      [1, 1, 1, 2, 2, 2],
      [1, 1, 1, 2, 2, 2],
      [1, 1, 1, 3, 3, 3],
      [1, 1, 1, 3, 3, 3]
    ];
    const sheet = [1, 2, 3];

    expect(getLayoutGrid(layout, sheet)).toEqual([
      {
        i: 'image0',
        x: 0,
        y: 0,
        w: 3,
        h: 4
      },
      {
        i: 'image1',
        x: 3,
        y: 0,
        w: 3,
        h: 2
      },
      {
        i: 'image2',
        x: 3,
        y: 2,
        w: 3,
        h: 2
      }
    ]);
  });

  it('should return "sheet" error, as layout uses an image not in the sheet', () => {
    const layout = [
      [1, 1, 1, 3, 3, 3],
      [1, 1, 1, 3, 3, 3]
    ];
    const sheet = [1, 2];

    expect(getLayoutGrid(layout, sheet)).toEqual(errorMessages.sheet);
  });

  it('should return "dimension" error, as layout is not two dimensional', () => {
    const layout = [
      [1, 1, 1, 2, 2, [2]],
      [1, 1, 1, 2, 2, 2]
    ];
    const sheet = [1, 2];

    expect(getLayoutGrid(layout, sheet)).toEqual(errorMessages.dimension);
  });

  it('should return "dimension" error, as layout is an array, not a matrix', () => {
    const layout = [1, 1, 1, 2, 2, 2];
    const sheet = [1, 2];

    expect(getLayoutGrid(layout, sheet)).toEqual(errorMessages.dimension);
  });

  it('should return "dimension" error, as layout is a number, not a matrix', () => {
    const layout = 1;
    const sheet = [1];

    expect(getLayoutGrid(layout, sheet)).toEqual(errorMessages.dimension);
  });
});
