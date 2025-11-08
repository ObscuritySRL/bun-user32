import { type Pointer, ptr } from 'bun:ffi';

import User32, { MessageBoxType } from 'bun-user32';

const hWnd = null as unknown as Pointer;
const lpCaption = ptr(Buffer.from('bun-user32\0', 'utf16le'));
const lpText = ptr(Buffer.from('Hello from bun-user32\0', 'utf16le'));
const uType = MessageBoxType.MB_OK;

User32.MessageBoxW(hWnd, lpText, lpCaption, uType);
