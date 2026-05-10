// Pure Node.js PNG generator - no external dependencies
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

function crc32(data) {
  let crc = 0xffffffff;
  const table = [];
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[i] = c;
  }
  for (let i = 0; i < data.length; i++) crc = table[(crc ^ data[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const typeBytes = Buffer.from(type);
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const crcData = Buffer.concat([typeBytes, data]);
  const crcVal = Buffer.alloc(4);
  crcVal.writeUInt32BE(crc32(crcData), 0);
  return Buffer.concat([len, typeBytes, data, crcVal]);
}

function createPNG(width, height, rgbaFunc) {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8);  // bit depth
  ihdr.writeUInt8(6, 9);  // color type RGBA
  ihdr.writeUInt8(0, 10); // compression
  ihdr.writeUInt8(0, 11); // filter
  ihdr.writeUInt8(0, 12); // interlace

  // Raw pixel data
  const raw = [];
  for (let y = 0; y < height; y++) {
    raw.push(0); // filter byte
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = rgbaFunc(x, y);
      raw.push(r, g, b, a);
    }
  }
  const rawBuf = Buffer.from(raw);
  const compressed = zlib.deflateSync(rawBuf, { level: 9 });

  const idat = makeChunk('IDAT', compressed);
  const iend = makeChunk('IEND', Buffer.alloc(0));
  const ihdrChunk = makeChunk('IHDR', ihdr);

  return Buffer.concat([sig, ihdrChunk, idat, iend]);
}

// Pagoda pixel data at 32x32 (4x scale of 8x8 grid)
function pagodaRGBA32(x, y) {
  const C = [139, 26, 26, 255];    // crimson
  const T = [0, 0, 0, 0];          // transparent

  // Normalized coords (0-32)
  // Row data: 1=pagoda, 0=transparent
  const rows = [
    [0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=0: spire dot
    [0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=1
    [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=2: spire tip
    [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=3
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=4
    [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=5: roof 1
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=6
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=7: roof 1 overhang
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=8: body 1
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=9
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=10
    [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=11: roof 2
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=12
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=13: roof 2 overhang
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=14: body 2
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=15
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=16
    [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=17: roof 3
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=18
    [0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=19: roof 3 overhang
    [0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=20: body 3
    [0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=21
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=22
    [0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=23: roof 4
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=24
    [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=25: roof 4 overhang
    [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=26: body 4
    [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=27
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=28
    [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=29: base
    [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=30: base
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // y=31
  ];

  if (y >= 0 && y < 32 && x >= 0 && x < 32 && rows[y][x]) return C;
  return T;
}

function pagodaRGBA16(x, y) {
  const sx = Math.floor(x * 16 / 32);
  const sy = Math.floor(y * 16 / 32);
  return pagodaRGBA32(sx, sy);
}

function pagodaRGBAApple(x, y) {
  // 180x180 canvas, pagoda centered at ~90x90, 140x140 size
  const px = Math.floor((x - 20) * 32 / 140);
  const py = Math.floor((y - 20) * 32 / 140);
  if (px >= 0 && px < 32 && py >= 0 && py < 32 && pagodaRGBA32(px, py)[3] > 0) {
    return pagodaRGBA32(px, py);
  }
  return [26, 10, 10, 255]; // dark bg #1a0a0a
}

const outDir = path.join(__dirname, '..', 'public');

fs.mkdirSync(outDir, { recursive: true });

// 16x16
const png16 = createPNG(16, 16, (x, y) => pagodaRGBA16(x, y));
fs.writeFileSync(path.join(outDir, 'favicon-16x16.png'), png16);

// 32x32
const png32 = createPNG(32, 32, (x, y) => pagodaRGBA32(x, y));
fs.writeFileSync(path.join(outDir, 'favicon-32x32.png'), png32);

// apple-touch-icon 180x180
const apple = createPNG(180, 180, (x, y) => pagodaRGBAApple(x, y));
fs.writeFileSync(path.join(outDir, 'apple-touch-icon.png'), apple);

// ICO (simple: PNG-based ICO)
const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0); // reserved
icoHeader.writeUInt16LE(1, 2); // type 1 = ICO
icoHeader.writeUInt16LE(2, 4); // 2 images

const e1 = Buffer.alloc(16);
e1.writeUInt8(32, 0); e1.writeUInt8(32, 1); e1.writeUInt8(0, 2); e1.writeUInt8(0, 3);
e1.writeUInt16LE(1, 4); e1.writeUInt16LE(32, 6); e1.writeUInt32LE(png32.length, 8);
const off1 = 6 + 32;

const e2 = Buffer.alloc(16);
e2.writeUInt8(16, 0); e2.writeUInt8(16, 1); e2.writeUInt8(0, 2); e2.writeUInt8(0, 3);
e2.writeUInt16LE(1, 4); e2.writeUInt16LE(32, 6); e2.writeUInt32LE(png16.length, 8);
const off2 = off1 + png32.length;

e1.writeUInt32LE(off1, 12);
e2.writeUInt32LE(off2, 12);

const ico = Buffer.concat([icoHeader, e1, e2, png32, png16]);
fs.writeFileSync(path.join(outDir, 'favicon.ico'), ico);

console.log('Generated: favicon.ico, favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png');