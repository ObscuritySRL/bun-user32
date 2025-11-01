import type { Pointer } from 'bun:ffi';

// Core Win32 integer and pointer-sized types
export type BOOL = number; // 32-bit signed int
export type BOOLEAN = number; // 8-bit unsigned char (use number)
export type BYTE = number; // 8-bit unsigned
export type WORD = number; // 16-bit unsigned
export type DWORD = number; // 32-bit unsigned
export type SHORT = number; // 16-bit signed
export type USHORT = number; // 16-bit unsigned
export type INT = number; // 32-bit signed
export type UINT = number; // 32-bit unsigned
export type LONG = number; // 32-bit signed
export type ULONG = number; // 32-bit unsigned
// Pointer-sized integers (BigInt on 64-bit)
export type INT_PTR = bigint;
export type UINT_PTR = bigint;
export type LONG_PTR = bigint;
export type ULONG_PTR = bigint;
export type DWORD_PTR = bigint;
export type WPARAM = UINT_PTR; // pointer-sized
export type LPARAM = LONG_PTR; // pointer-sized
export type LRESULT = LONG_PTR; // pointer-sized
export type ATOM = number; // 16-bit

// Common pointer aliases
export type HANDLE = Pointer | null;
export type HINSTANCE = Pointer | null;
export type HMODULE = Pointer | null;
export type HWND = Pointer | null;
export type HICON = Pointer | null;
export type HCURSOR = Pointer | null;
export type HBRUSH = Pointer | null;
export type HMENU = Pointer | null;
export type HACCEL = Pointer | null;
export type HMONITOR = Pointer | null;
export type HDC = Pointer | null;
export type HDEVNOTIFY = Pointer | null;
export type HPOWERNOTIFY = Pointer | null;
export type HHOOK = Pointer | null;
export type HKL = Pointer | null;
export type HDWP = Pointer | null;
export type HRGN = Pointer | null; // GDI region handle used by some User32 APIs
export type HRAWINPUT = Pointer | null;
export type HWINSTA = Pointer | null;
export type HDESK = Pointer | null;
export type HTOUCHINPUT = Pointer | null;
export type HGESTUREINFO = Pointer | null;
export type HWINEVENTHOOK = Pointer | null;
export type DPI_AWARENESS_CONTEXT = Pointer | null; // opaque handle type
export type HBITMAP = Pointer | null;
export type HSYNTHETICPOINTERDEVICE = Pointer | null;

// String and buffer pointer types
export type LPVOID = Pointer | null;
export type PVOID = Pointer | null;
export type LPCVOID = Pointer | null;
export type LPWSTR = Pointer | null; // wide (UTF-16) string buffer
export type LPCWSTR = Pointer | null; // wide (UTF-16) constant string
export type LPSTR = Pointer | null; // narrow string buffer
export type LPCSTR = Pointer | null; // narrow constant string
export type LPBYTE = Pointer | null;
export type LPWORD = Pointer | null;
export type LPINT = Pointer | null;
export type LPDWORD = Pointer | null;

// Struct pointer aliases (pass via FFIType.ptr)
export type LPMSG = Pointer | null;
export type MSG_ = Pointer | null;
export type LPRECT = Pointer | null;
export type PRECT = Pointer | null;
export type LPPOINT = Pointer | null;
export type PPOINT = Pointer | null;
export type LPCREATESTRUCTW = Pointer | null;
export type LPWNDCLASSW = Pointer | null;
export type LPWNDCLASSEXW = Pointer | null;
export type WNDCLASSW = Pointer | null;
export type WNDCLASSEXW = Pointer | null;
export type WNDPROC = Pointer | null; // function pointer
export type HOOKPROC = Pointer | null; // function pointer
export type TIMERPROC = Pointer | null; // function pointer
export type WNDENUMPROC = Pointer | null; // function pointer
export type DLGPROC = Pointer | null; // function pointer
export type MONITORENUMPROC = Pointer | null; // function pointer
export type DRAWSTATEPROC = Pointer | null; // callback
export type LPACCEL = Pointer | null;
export type LPMENUITEMINFOW = Pointer | null;
export type LPCMENUINFO = Pointer | null;
export type LPMENUINFO = Pointer | null;
export type LPCMENUITEMINFOW = Pointer | null;
export type LPWINDOWPLACEMENT = Pointer | null;
export type LPTRACKMOUSEEVENT = Pointer | null;
export type LPTITLEBARINFOEX = Pointer | null;
export type LPMINMAXINFO = Pointer | null;
export type LPPAINTSTRUCT = Pointer | null;
export type LPWINDOWINFO = Pointer | null;
export type LPFLASHWINFO = Pointer | null;
export type LPSCROLLINFO = Pointer | null;
export type LPCSCROLLINFO = Pointer | null;
export type LPDEVMODEW = Pointer | null;
export type LPLASTINPUTINFO = Pointer | null;
export type PLASTINPUTINFO = Pointer | null;
export type LPINPUT = Pointer | null; // for SendInput
export type LPTOUCHINPUT = Pointer | null;
export type PTOUCHINPUT = Pointer | null;
export type LPCRECT = Pointer | null;
export type LPWINDOWPOS = Pointer | null;
export type PROPENUMPROCW = Pointer | null; // callback
export type PROPENUMPROCA = Pointer | null; // callback
export type PROPENUMPROCEXW = Pointer | null; // callback
export type PROPENUMPROCEXA = Pointer | null; // callback
export type WINEVENTPROC = Pointer | null; // callback
export type WINSTAENUMPROCW = Pointer | null; // callback
export type DESKTOPENUMPROCW = Pointer | null; // callback
export type LPDRAWTEXTPARAMS = Pointer | null;
export type LPGUITHREADINFO = Pointer | null;
export type LPALTTABINFO = Pointer | null;
export type LPMSGBOXPARAMSW = Pointer | null;
export type PCHANGEFILTERSTRUCT = Pointer | null;
export type PBSMINFO = Pointer | null;
export type GRAYSTRINGPROC = Pointer | null; // callback
export type SENDASYNCPROC = Pointer | null; // callback
export type LPSECURITY_ATTRIBUTES = Pointer | null;
export type LPSIZE = Pointer | null;
export type LPMONITORINFO = Pointer | null;
export type LPMOUSEMOVEPOINT = Pointer | null;
export type PMENUBARINFO = Pointer | null;
export type PICONINFO = Pointer | null;
export type PICONINFOEXW = Pointer | null;
export type PCURSORINFO = Pointer | null;
export type PDISPLAY_DEVICEW = Pointer | null;
export type PCOMBOBOXINFO = Pointer | null;
export type PGESTURECONFIG = Pointer | null;
export type PGESTUREINFO = Pointer | null;
export type PGUITHREADINFO = Pointer | null;
export type PTITLEBARINFO = Pointer | null;
export type PALTTABINFO = Pointer | null;
export type MSGBOXPARAMSW = Pointer | null;
export type MENUTEMPLATEW = Pointer | null;
export type WINDOWPLACEMENT = Pointer | null;
export type PAINTSTRUCT = Pointer | null;
export type PWINDOWINFO = Pointer | null;
export type PDWORD_PTR = Pointer | null;
export type LPCDLGTEMPLATEW = Pointer | null;
export type LPCGUID = Pointer | null;
export type LPTPMPARAMS = Pointer | null;
export type PBYTE = Pointer | null;
export type PCONVCONTEXT = Pointer | null;
export type PCONVINFO = Pointer | null;
export type PFLASHWINFO = Pointer | null;
export type PSCROLLBARINFO = Pointer | null;

// DDEML opaque handle types and callback
export type HCONV = Pointer | null;
export type HCONVLIST = Pointer | null;
export type HSZ = Pointer | null;
export type HDDEDATA = Pointer | null;
export type PFNCALLBACK = Pointer | null; // DDE callback

// Raw Input / Pointer-related structures (opaque pointers here)
export type PRAWINPUT = Pointer | null;
export type PRAWINPUTDEVICE = Pointer | null;
export type PRAWINPUTDEVICELIST = Pointer | null;
export type PCRAWINPUTDEVICE = Pointer | null;
export type POINTER_INFO = Pointer | null;
export type POINTER_PEN_INFO = Pointer | null;
export type POINTER_TOUCH_INFO = Pointer | null;
export type POINTER_TYPE_INFO = Pointer | null;
export type POINTER_DEVICE_INFO = Pointer | null;
export type POINTER_DEVICE_PROPERTY = Pointer | null;
export type POINTER_DEVICE_CURSOR_INFO = Pointer | null;
export type INPUT_MESSAGE_SOURCE = Pointer | null;
export type INPUT_TRANSFORM = Pointer | null;
export type TOUCH_HIT_TESTING_INPUT = Pointer | null;
export type TOUCH_HIT_TESTING_PROXIMITY_EVALUATION = Pointer | null;

// DISPLAYCONFIG/DEVMODE and related structs
export type DISPLAYCONFIG_DEVICE_INFO_HEADER = Pointer | null;
export type DISPLAYCONFIG_MODE_INFO = Pointer | null;
export type DISPLAYCONFIG_PATH_INFO = Pointer | null;
export type DEVMODEW = Pointer | null;
export type DISPLAYCONFIG_TOPOLOGY_ID = number;
export type PDISPLAYCONFIG_TOPOLOGY_ID = Pointer;

export type COLORREF = number; // DWORD 0x00bbggrr
export type UINT32 = number;
export type ACCESS_MASK = number; // DWORD
export type ORIENTATION_PREFERENCE = number; // enum
export type DPI_AWARENESS = number; // enum
export type DPI_HOSTING_BEHAVIOR = number; // enum
export type DIALOG_CONTROL_DPI_CHANGE_BEHAVIORS = number; // flags
export type DIALOG_DPI_CHANGE_BEHAVIORS = number; // flags
export type FEEDBACK_TYPE = number; // enum
export type POINTER_FEEDBACK_MODE = number; // enum/flags
export type POINTER_INPUT_TYPE = number; // enum
export type WCHAR = number; // UTF-16 code unit
export type SIZE = Pointer | null; // using pointer form when passed by reference
export type VOID = void;
export type PUINT = Pointer | null;
export type PULONG = Pointer | null;
export type PSECURITY_DESCRIPTOR = Pointer;
export type PSECURITY_INFORMATION = Pointer;
export type BLENDFUNCTION = Pointer;
export type PAR_STATE = Pointer;

// Useful constants for window positioning
export const HWND_TOP: HWND = 0 as unknown as HWND;
export const HWND_BOTTOM: HWND = 1 as unknown as HWND;
export const HWND_TOPMOST: HWND = -1 as unknown as HWND;
export const HWND_NOTOPMOST: HWND = -2 as unknown as HWND;

// Selected enums and flags useful for common calls
export enum ShowWindowCommand {
  SW_FORCEMINIMIZE = 11,
  SW_HIDE = 0,
  SW_MAXIMIZE = 3,
  SW_MINIMIZE = 6,
  SW_NORMAL = 1,
  SW_RESTORE = 9,
  SW_SHOW = 5,
  SW_SHOWDEFAULT = 10,
  SW_SHOWMAXIMIZED = 3,
  SW_SHOWMINIMIZED = 2,
  SW_SHOWMINNOACTIVE = 7,
  SW_SHOWNOACTIVATE = 4,
  SW_SHOWNORMAL = 1,
  SW_SHOWNA = 8,
}

export enum WindowStyles {
  WS_OVERLAPPED = 0x00000000,
  WS_POPUP = 0x80000000,
  WS_CHILD = 0x40000000,
  WS_MINIMIZE = 0x20000000,
  WS_VISIBLE = 0x10000000,
  WS_DISABLED = 0x08000000,
  WS_CLIPSIBLINGS = 0x04000000,
  WS_CLIPCHILDREN = 0x02000000,
  WS_MAXIMIZE = 0x01000000,
  WS_CAPTION = 0x00c00000,
  WS_BORDER = 0x00800000,
  WS_DLGFRAME = 0x00400000,
  WS_VSCROLL = 0x00200000,
  WS_HSCROLL = 0x00100000,
  WS_SYSMENU = 0x00080000,
  WS_THICKFRAME = 0x00040000,
  WS_GROUP = 0x00020000,
  WS_TABSTOP = 0x00010000,
  WS_MINIMIZEBOX = 0x00020000,
  WS_MAXIMIZEBOX = 0x00010000,
  WS_TILED = 0x00000000,
  WS_ICONIC = 0x20000000,
  WS_SIZEBOX = 0x00040000,
  WS_TILEDWINDOW = 0x00cf0000,
  WS_OVERLAPPEDWINDOW = 0x00cf0000,
  WS_POPUPWINDOW = 0x80880000,
  WS_CHILDWINDOW = 0x40000000,
}

export enum ExtendedWindowStyles {
  WS_EX_DLGMODALFRAME = 0x00000001,
  WS_EX_NOPARENTNOTIFY = 0x00000004,
  WS_EX_TOPMOST = 0x00000008,
  WS_EX_ACCEPTFILES = 0x00000010,
  WS_EX_TRANSPARENT = 0x00000020,
  WS_EX_MDICHILD = 0x00000040,
  WS_EX_TOOLWINDOW = 0x00000080,
  WS_EX_WINDOWEDGE = 0x00000100,
  WS_EX_CLIENTEDGE = 0x00000200,
  WS_EX_CONTEXTHELP = 0x00000400,
  WS_EX_RIGHT = 0x00001000,
  WS_EX_LEFT = 0x00000000,
  WS_EX_RTLREADING = 0x00002000,
  WS_EX_LTRREADING = 0x00000000,
  WS_EX_LEFTSCROLLBAR = 0x00004000,
  WS_EX_RIGHTSCROLLBAR = 0x00000000,
  WS_EX_CONTROLPARENT = 0x00010000,
  WS_EX_STATICEDGE = 0x00020000,
  WS_EX_APPWINDOW = 0x00040000,
  WS_EX_OVERLAPPEDWINDOW = 0x00000300,
  WS_EX_PALETTEWINDOW = 0x00000188,
  WS_EX_LAYERED = 0x00080000,
  WS_EX_NOINHERITLAYOUT = 0x00100000,
  WS_EX_NOREDIRECTIONBITMAP = 0x00200000,
  WS_EX_LAYOUTRTL = 0x00400000,
  WS_EX_COMPOSITED = 0x02000000,
  WS_EX_NOACTIVATE = 0x08000000,
}

export enum MessageBoxType {
  MB_OK = 0x00000000,
  MB_OKCANCEL = 0x00000001,
  MB_ABORTRETRYIGNORE = 0x00000002,
  MB_YESNOCANCEL = 0x00000003,
  MB_YESNO = 0x00000004,
  MB_RETRYCANCEL = 0x00000005,
  MB_CANCELTRYCONTINUE = 0x00000006,
  MB_ICONHAND = 0x00000010,
  MB_ICONQUESTION = 0x00000020,
  MB_ICONEXCLAMATION = 0x00000030,
  MB_ICONASTERISK = 0x00000040,
  MB_USERICON = 0x00000080,
  MB_ICONWARNING = 0x00000030,
  MB_ICONERROR = 0x00000010,
  MB_ICONINFORMATION = 0x00000040,
  MB_DEFBUTTON1 = 0x00000000,
  MB_DEFBUTTON2 = 0x00000100,
  MB_DEFBUTTON3 = 0x00000200,
  MB_DEFBUTTON4 = 0x00000300,
}

export enum PeekMessageRemoveFlag {
  PM_NOREMOVE = 0x0000,
  PM_REMOVE = 0x0001,
  PM_NOYIELD = 0x0002,
}

export enum WindowLongIndex {
  GWL_WNDPROC = -4,
  GWL_HINSTANCE = -6,
  GWL_HWNDPARENT = -8,
  GWL_STYLE = -16,
  GWL_EXSTYLE = -20,
  GWL_USERDATA = -21,
  GWL_ID = -12,
}

export enum ClassLongIndex {
  GCL_MENUNAME = -8,
  GCL_HBRBACKGROUND = -10,
  GCL_HCURSOR = -12,
  GCL_HICON = -14,
  GCL_HMODULE = -16,
  GCL_WNDPROC = -24,
  GCL_CBWNDEXTRA = -18,
  GCL_CBCLSEXTRA = -20,
}

export enum SetWindowPosFlags {
  SWP_FRAMECHANGED = 0x0020,
  SWP_HIDEWINDOW = 0x0080,
  SWP_NOACTIVATE = 0x0010,
  SWP_NOCOPYBITS = 0x0100,
  SWP_NOMOVE = 0x0002,
  SWP_NOOWNERZORDER = 0x0200,
  SWP_NOREDRAW = 0x0008,
  SWP_NOSENDCHANGING = 0x0400,
  SWP_NOSIZE = 0x0001,
  SWP_NOZORDER = 0x0004,
  SWP_SHOWWINDOW = 0x0040,
}

// Common virtual key codes (subset)
export enum VirtualKey {
  VK_BACK = 0x08,
  VK_CANCEL = 0x03,
  VK_CAPITAL = 0x14,
  VK_CONTROL = 0x11,
  VK_DELETE = 0x2e,
  VK_DOWN = 0x28,
  VK_END = 0x23,
  VK_ESCAPE = 0x1b,
  VK_HOME = 0x24,
  VK_INSERT = 0x2d,
  VK_LBUTTON = 0x01,
  VK_LEFT = 0x25,
  VK_MENU = 0x12,
  VK_MBUTTON = 0x04,
  VK_NEXT = 0x22,
  VK_PAUSE = 0x13,
  VK_PRIOR = 0x21,
  VK_RBUTTON = 0x02,
  VK_RETURN = 0x0d,
  VK_RIGHT = 0x27,
  VK_SHIFT = 0x10,
  VK_SPACE = 0x20,
  VK_TAB = 0x09,
  VK_UP = 0x26,
  VK_XBUTTON1 = 0x05,
  VK_XBUTTON2 = 0x06,
}

// Message filter constants for PeekMessage
export enum MessageFilter {
  WM_ACTIVATE = 0x0006,
  WM_CREATE = 0x0001,
  WM_DESTROY = 0x0002,
  WM_ENABLE = 0x000a,
  WM_GETTEXT = 0x000d,
  WM_GETTEXTLENGTH = 0x000e,
  WM_KILLFOCUS = 0x0008,
  WM_MOVE = 0x0003,
  WM_NULL = 0x0000,
  WM_PAINT = 0x000f,
  WM_SETFOCUS = 0x0007,
  WM_SETREDRAW = 0x000b,
  WM_SETTEXT = 0x000c,
  WM_SIZE = 0x0005,
}

// Hook types (for SetWindowsHookEx)
export enum HookType {
  WH_CALLWNDPROC = 4,
  WH_CALLWNDPROCRET = 12,
  WH_CBT = 5,
  WH_DEBUG = 9,
  WH_FOREGROUNDIDLE = 11,
  WH_GETMESSAGE = 3,
  WH_HARDWARE = 8,
  WH_JOURNALPLAYBACK = 1,
  WH_JOURNALRECORD = 0,
  WH_KEYBOARD = 2,
  WH_KEYBOARD_LL = 13,
  WH_MOUSE = 7,
  WH_MOUSE_LL = 14,
  WH_MSGFILTER = -1,
  WH_SHELL = 10,
  WH_SYSMSGFILTER = 6,
}

// GetWindow() uCmd values
export enum GetWindowCmd {
  GW_CHILD = 5,
  GW_ENABLEDPOPUP = 6,
  GW_HWNDFIRST = 0,
  GW_HWNDLAST = 1,
  GW_HWNDNEXT = 2,
  GW_HWNDPREV = 3,
  GW_OWNER = 4,
}

// GetAncestor flags
export enum GetAncestorFlags {
  GA_PARENT = 1,
  GA_ROOT = 2,
  GA_ROOTOWNER = 3,
}

// SystemParametersInfo actions (subset)
export enum SystemParametersInfoAction {
  SPI_GETWHEELSCROLLLINES = 0x0068,
  SPI_GETWORKAREA = 0x0030,
  SPI_SETWHEELSCROLLLINES = 0x0069,
  SPI_SETWORKAREA = 0x002f,
}
