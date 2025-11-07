import User32, { MessageBoxType } from 'bun-user32';

// Optionally preload all symbols once (or rely on lazy binding)
const start = performance.now();
User32.Preload();
const end = performance.now();

const ms = (end - start).toFixed(2);

console.log('User32 loaded in %sms…', ms);

const hWnd = null;

const lpCaption = Buffer.from('bun-user32\0', 'utf16le');
const lpText = Buffer.from(`User32 loaded in ${ms}ms…\0`, 'utf16le');

// Call MessageBoxW(NULL, L"User32 loaded in 123.45ms…", L"bun-user32", MB_OK)
User32.MessageBoxW(hWnd, lpText.ptr, lpCaption.ptr, MessageBoxType.MB_OK);
