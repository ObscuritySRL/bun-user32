import User32, { MessageBoxType } from 'bun-user32';

// Optionally preload all symbols once (or rely on lazy binding)
const start = performance.now();
User32.Preload();
const end = performance.now();

const ms = (end - start).toFixed(2);

console.log('User32 loaded in %sms…', ms);

const hWnd = null;

const caption = 'bun-user32';
const text = `User32 loaded in ${ms}ms…`;

// Call MessageBoxW(NULL, L"User32 loaded in 123.45ms…", L"bun-user32", MB_OK)
User32.MessageBoxW(hWnd, text, caption, MessageBoxType.MB_OK);

