> [!NOTE]
> A Bug in Bun is making it impossible to pass `CString` to `FFITpe.cstring`:
> https://github.com/oven-sh/bun/issues/24518
>
> Until this is fixed, all `Symbols` with `FFITpe.cstring` have been temporarily changed to `FFITpe.ptr`.

# bun-user32

Zero-dependency, zero-overhead Win32 User32 bindings for [Bun](https://bun.sh) on Windows.

## Overview

`bun-user32` exposes the User32 entry points exported by `user32.dll` using [Bun](https://bun.sh)'s FFI. It provides a single class, `User32`, which lazily binds native symbols on first use and then calls directly into the DLL. You can optionally preload a subset or all symbols up-front via `Preload()`.

The bindings are strongly typed for a smooth DX in TypeScript.

𝐢 · Symbol definitions were generated with AI assistance and reviewed for correctness against User32/Win32 signatures.

## Features

- [Bun](https://bun.sh)-first ergonomics on Windows 10/11.
- Direct FFI to `user32.dll` (windows, input, clipboard, monitors, and more).
- In-source docs – each method includes a Microsoft Docs link above its declaration in `structs/User32.ts`.
- Lazy binding on first call; optional eager preload (`User32.Preload()`).
- No wrapper overhead; calls map 1:1 to native APIs.
- Strongly-typed Win32 aliases (see `types/User32.ts`).

## Requirements

- [Bun](https://bun.sh) runtime
- Windows 10 or later

## Installation

```sh
bun add bun-user32
```

## Quick Start

```ts
import type { Pointer } from 'bun:ffi';
import User32, { MessageBoxType } from 'bun-user32';

// Helper: UTF-16LE null-terminated string
const encode = (str: string) => Buffer.from(`${str}\0`, 'utf16le');

// Null pointer for optional HWND
const NULL = null as unknown as Pointer;

// Show a message box
User32.MessageBoxW(
  NULL,
  encode('Hello from bun-user32!').ptr,
  encode('Welcome').ptr,
  MessageBoxType.MB_OK | MessageBoxType.MB_ICONINFORMATION
);
```

## API Highlights

- Exact names and signatures that mirror the native API surface.
- `Preload()` – Loads and binds a subset or all User32 symbols.
- `MessageBoxW`, `FindWindowW`, `GetCursorPos`, `SetForegroundWindow`, `RegisterClassW`, `CreateWindowExW`, and many more.
- Pointer-friendly – this package adds a `.ptr` property to ArrayBuffer/Buffer/DataView/TypedArray via a tiny runtime extension for Bun FFI convenience.

## Notes

- No global init required. Either rely on lazy binding or call `User32.Preload()`.
- User32 wide-string (`*W`) functions expect UTF-16LE + null terminator. Use a helper like `toWide()` and pass `.ptr`.
- Windows only. Bun runtime required.

## TODO

- Additional helpers for string/struct marshalling.
- Small utilities for common patterns (window class registration, message loops).
