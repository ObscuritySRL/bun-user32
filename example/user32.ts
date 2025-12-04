/**
 * Simple MessageBox Example
 *
 * Demonstrates basic usage of the bun-user32 library
 * to display a Windows message box.
 */

import type { Pointer } from 'bun:ffi';
import '../runtime/extensions';
import User32 from '../structs/User32';
import { MessageBoxType } from '../types/User32';

// Null pointer helper for optional HWND parameters
const NULL = null as unknown as Pointer;

// UTF-16LE encoding helper (Windows wide strings)
const encode = (str: string) => Buffer.from(`${str}\0`, 'utf16le');

// Show a simple message box
const result = User32.MessageBoxW(
  NULL,
  encode('Hello from bun-user32! 🎉').ptr,
  encode('Welcome').ptr,
  MessageBoxType.MB_OK | MessageBoxType.MB_ICONINFORMATION
);

console.log(`MessageBox returned: ${result}`);
