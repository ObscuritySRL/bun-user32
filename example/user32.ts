import User32 from 'bun-user32';

// Minimal demo: pass UTF-16LE buffers via .ptr
const hWnd = null;
const lpCaption = Buffer.from('bun-user32\0', 'utf16le');
const lpText = Buffer.from('Hello from bun-user32\0', 'utf16le');
const uType = 0; // MB_OK

User32.MessageBoxW(hWnd, lpText.ptr, lpCaption.ptr, uType);
