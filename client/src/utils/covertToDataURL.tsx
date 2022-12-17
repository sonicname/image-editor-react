interface IEditSetting {
  blur?: number;
  brightness?: number;
  contrast?: number;
  grayscale?: number;
  invert?: number;
  sepia?: number;
  saturate?: number;
  isFlipped?: boolean;
  isReverseFlipped?: boolean;
  rotateDeg: number;
  opacity?: number;
}

export default function covertToDataURL(
  image: HTMLImageElement,
  {
    blur,
    brightness,
    contrast,
    grayscale,
    invert,
    isFlipped,
    isReverseFlipped,
    rotateDeg,
    saturate,
    sepia,
    opacity,
  }: IEditSetting,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.width = image.width;
    canvas.height = image.height;

    ctx.save();

    ctx.filter = `blur(${blur}px) brightness(${brightness}%) saturate(${saturate}%) contrast(${contrast}%) grayscale(${grayscale}%) opacity(${opacity}%) invert(${invert}%) sepia(${sepia}%)`;

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(isFlipped ? -1 : 1, isReverseFlipped ? -1 : 1);

    if (rotateDeg != 0 && (isFlipped || isReverseFlipped))
      ctx.rotate(((rotateDeg + (rotateDeg == 180 ? 0 : 180)) * Math.PI) / 180);
    else if (rotateDeg != 0) ctx.rotate((rotateDeg * Math.PI) / 180);

    ctx.drawImage(image, -image.width / 2, -image.height / 2, image.width, image.height);

    ctx.restore();

    resolve(canvas.toDataURL('image/png'));
  });
}
