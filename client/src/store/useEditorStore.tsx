import create from 'zustand';
import { ImageListType } from 'react-images-uploading';

interface IEditorStore {
  image: ImageListType;
  fileEdited: File | undefined;
  brightness: number;
  blur: number;
  saturate: number;
  contrast: number;
  grayscale: number;
  opacity: number;
  invert: number;
  sepia: number;
  rotateDeg: number;
  isFlipped: boolean;
  isReverseFlipped: boolean;
  setFileEdited: (file: File) => void;
  setRotateDeg: (val: number) => void;
  touchedFlipped: () => void;
  touchedReverseFlip: () => void;
  setImage: (imageList: ImageListType) => void;
  setOption: (optionID: string, value: number) => void;
  resetOption: () => void;
}

const useEditorStore = create<IEditorStore>((set) => ({
  image: [],
  fileEdited: undefined,
  brightness: 100,
  blur: 0,
  opacity: 100,
  grayscale: 0,
  saturate: 100,
  contrast: 100,
  invert: 0,
  sepia: 0,
  rotateDeg: 0,
  isFlipped: false,
  isReverseFlipped: false,
  setFileEdited: (file) => set(() => ({ fileEdited: file })),
  setRotateDeg: (deg) =>
    set((state) => ({
      rotateDeg:
        state.rotateDeg + deg >= 360 || state.rotateDeg + deg <= -360 ? 0 : state.rotateDeg + deg,
    })),
  touchedReverseFlip: () =>
    set((state) => ({ isReverseFlipped: !state.isReverseFlipped, isFlipped: false })),
  touchedFlipped: () => set((state) => ({ isFlipped: !state.isFlipped, isReverseFlipped: false })),
  setImage: (imageList) => set(() => ({ image: imageList })),
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
      case 'invert':
        return set(() => ({ invert: value }));
      case 'sepia':
        return set(() => ({ sepia: value }));
      default:
        return set(() => ({ contrast: value }));
    }
  },
  resetOption: () =>
    set(() => ({
      brightness: 100,
      blur: 0,
      opacity: 100,
      grayscale: 0,
      saturate: 100,
      contrast: 100,
      invert: 0,
      sepia: 0,
    })),
}));

export default useEditorStore;
