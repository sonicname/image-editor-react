import { join } from 'path';
import { spawn } from 'child_process';

export default function upscale(path: string) {
  return new Promise((resolve, reject) => {
    const result: Buffer[] = [];

    const upscalePythonScript = spawn('python', [
      join(__dirname, '../..', 'python_scripts/noise_removal.py'),
      join(__dirname, '../..', 'uploads', path),
    ]);

    upscalePythonScript.stdout.on('data', (data: Buffer) => {
      result.push(data);
    });

    upscalePythonScript.stderr.on('data', (error) => {
      reject();
    });

    upscalePythonScript.stdout.on('close', () => {
      resolve(result.join('').replace('\r\n', ''));
    });
  });
}
