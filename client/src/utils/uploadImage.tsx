import axios from 'axios';

export default async function uploadImage(file: File | Blob) {
  try {
    const formData = new FormData();
    formData.append('images', file);

    const { data } = await axios<{ message: string; path: string }>({
      method: 'POST',
      data: formData,
      url: '/upload',
    });

    return data;
  } catch (e) {
    throw e;
  }
}
