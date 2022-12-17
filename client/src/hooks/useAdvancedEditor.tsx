import axios from 'axios';
import { toast } from 'react-toastify';

import saveImage from '../utils/saveImage';
import uploadImage from '../utils/uploadImage';

const useUpscale = async (file: File | Blob) => {
  try {
    const dataUpload = await uploadImage(file);
    toast.info('Upscaling...!');

    const { data: dataUpscaled } = await axios<{ message: string; data: string }>({
      method: 'POST',
      url: '/scripts/upscale',
      data: {
        path: dataUpload.path.split('\\')[1],
        scale: '2',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    toast.success('Image Upscaled!');
    saveImage('/uploads/' + dataUpscaled.data, 'upscaled.png');
  } catch (error) {
    toast.error('Upscale Image Error!');
  }
};

const useDownscale = async (file: File | Blob) => {
  try {
    const dataUpload = await uploadImage(file);
    toast.info('Downscaling...!');

    const { data: dataDownscale } = await axios<{ message: string; data: string }>({
      method: 'POST',
      url: '/scripts/downscale',
      data: {
        path: dataUpload.path.split('\\')[1],
        scale: '2',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    toast.success('Image Downscaled!');
    saveImage('/uploads/' + dataDownscale.data, 'downscaled.png');
  } catch (error) {
    toast.error('Downscale Image Error!');
  }
};

const useNoiseRemove = async (file: File | Blob) => {
  try {
    const dataUpload = await uploadImage(file);
    toast.info('Noise Removing...!');

    const { data: dataNoiseRemove } = await axios<{ message: string; data: string }>({
      method: 'POST',
      url: '/scripts/noise_remove',
      data: {
        path: dataUpload.path.split('\\')[1],
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    toast.success('Image Noise Removed!');
    saveImage('/uploads/' + dataNoiseRemove.data, 'noise_removed.png');
  } catch (error) {
    toast.error('Noise Removes Image Error!');
  }
};

export { useUpscale, useDownscale, useNoiseRemove };
