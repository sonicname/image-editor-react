interface IColorTools {
  title: string;
  id: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  step?: number;
}

const colorTools: IColorTools[] = [
  {
    id: 'brightness',
    title: 'Brightness',
    min: 0,
    max: 200,
    defaultValue: 100,
  },
  {
    id: 'blur',
    title: 'Blur',
    min: 0,
    max: 10,
    step: 1,
    defaultValue: 0,
  },
  {
    id: 'saturate',
    title: 'Saturate',
    min: 100,
    max: 200,
    defaultValue: 100,
  },
  {
    id: 'contrast',
    title: 'Contrast',
    min: 0,
    max: 200,
    defaultValue: 100,
  },
  {
    id: 'grayscale',
    title: 'Grayscale',
    min: 0,
    max: 100,
    defaultValue: 0,
  },
  {
    id: 'opacity',
    title: 'Opacity',
    step: 50,
    min: 0,
    max: 100,
    defaultValue: 100,
  },
  {
    id: 'invert',
    title: 'Invert',
    min: 0,
    max: 100,
    defaultValue: 0,
  },
  {
    id: 'sepia',
    title: 'Sepia',
    min: 0,
    max: 100,
    defaultValue: 0,
  },
];

export { colorTools };
export type { IColorTools };
