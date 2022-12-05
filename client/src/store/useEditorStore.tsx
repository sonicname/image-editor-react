import create from 'zustand';

interface IEditorStore {
  brightness: number;
  blur: number;
  saturate: number;
  contrast: number;
  grayscale: number;
  opacity: number;
  setOption: (optionID: string, value: number) => void;
}

const useEditorStore = create<IEditorStore>((set) => ({
  brightness: 100,
  blur: 0,
  opacity: 100,
  grayscale: 0,
  saturate: 100,
  contrast: 100,
  setOption: (option, value) => {
    switch (option) {
      case 'brightness':
        return set(() => ({ brightness: value }));
      case 'blur':
        return set(() => ({ blur: value }));
      case 'opacity':
        return set(() => ({ opacity: value }));
      case 'grayscale':
        return set(() => ({ grayscale: value }));
      case 'saturate':
        return set(() => ({ saturate: value }));
      default:
        return set(() => ({ contrast: value }));
    }
  },
}));

export default useEditorStore;
