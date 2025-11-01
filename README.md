# bun-user32

Zero-dependency, zero-overhead Win32 User32 bindings for [Bun](https://bun.sh) on Windows.

## Overview

`bun-user32` exposes the User32 entry points exported by `user32.dll` using [Bun](https://bun.sh)'s FFI. It provides a single class, `User32`, which lazily binds native symbols once via `Init()` and then calls directly into the DLL.

The bindings are strongly typed for a smooth DX in TypeScript.

𝐢 · Symbol definitions were generated with AI assistance and reviewed for correctness against User32/Win32 signatures.

## Features

- [Bun](https://bun.sh)-first ergonomics on Windows 10/11.
- Direct FFI to `user32.dll` (windows, input, clipboard, monitors, and more).
- In-source docs – each method includes a Microsoft Docs link above its declaration in `structs/User32.ts`.
- Lazy, one-time initialization (`User32.Init()`).
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
import User32 from 'bun-user32';

// Bind all symbols from user32.dll once
User32.Init();

// Helper to create a null-terminated UTF-16LE buffer
const toWide = (s: string) => Buffer.from(s + '\0', 'utf16le');

// Call MessageBoxW(NULL, L"Hello", L"bun-user32", MB_OK)
User32.MessageBoxW(0, toWide('Hello from bun-user32').ptr, toWide('bun-user32').ptr, 0);
```

## API Highlights

- Exact names and signatures that mirror the native API surface.
- `Init()` – Loads and binds all exported User32 symbols.
- `MessageBoxW`, `FindWindowW`, `GetCursorPos`, `SetForegroundWindow`, `RegisterClassW`, `CreateWindowExW`, and many more.
- Pointer-friendly – this package adds a `.ptr` property to ArrayBuffer/Buffer/DataView/TypedArray via a tiny runtime extension for Bun FFI convenience.

## Notes

- Always call `User32.Init()` before invoking any `User32.*` function.
- User32 wide-string (`*W`) functions expect UTF-16LE + null terminator. Use a helper like `toWide()` and pass `.ptr`.
- Windows only. Bun runtime required.

## TODO

- Additional helpers for string/struct marshalling.
- Small utilities for common patterns (window class registration, message loops).
