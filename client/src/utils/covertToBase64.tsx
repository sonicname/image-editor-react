// https://stackoverflow.com/questions/41778434/javascript-convert-an-url-to-a-base64-image

export default function convertToBase64(link: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = link;
    img.setAttribute('crossOrigin', 'anonymous');

    img.onload = () => {
      const canvas = document.createElement('canvas') as HTMLCanvasElement;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL('image/png');
      resolve(dataURL.replace(/^data:image\/(png|jpg);base64,/, ''));
    };

    img.onerror = () => {
      reject('Error when load image!');
    };
  });
}
