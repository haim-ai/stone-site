import { execFileSync } from 'node:child_process';
import ffmpegPath from 'ffmpeg-static';
import { mkdirSync, rmSync, readdirSync } from 'node:fs';

const videos = [
  'C:/Users/User/Desktop/1.mp4',
  'C:/Users/User/Desktop/2.mp4',
  'C:/Users/User/Desktop/3.mp4',
  'C:/Users/User/Desktop/4.mp4',
];
const outRoot = 'C:/Users/User/Desktop/Claude/Projects/Stone/site/frames';

for (let i = 0; i < videos.length; i++){
  const dir = `${outRoot}/section${i+1}`;
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });
  console.log(`Extracting section${i+1} ...`);
  execFileSync(ffmpegPath, [
    '-y','-i', videos[i],
    '-vf','scale=1920:-2:flags=lanczos',
    '-c:v','libwebp','-quality','88','-compression_level','6','-preset','photo',
    '-vsync','0',
    `${dir}/frame_%03d.webp`
  ], { stdio: 'inherit' });
  const n = readdirSync(dir).length;
  console.log(`  -> ${n} frames`);
}
console.log('DONE');
