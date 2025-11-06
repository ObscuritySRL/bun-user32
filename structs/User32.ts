import { type FFIFunction, FFIType, dlopen } from 'bun:ffi';

import type {
  ACCESS_MASK,
  ATOM,
  BLENDFUNCTION,
  BOOL,
  BYTE,
  COLORREF,
  DESKTOPENUMPROCW,
  DEVMODEW,
  DIALOG_CONTROL_DPI_CHANGE_BEHAVIORS,
  DIALOG_DPI_CHANGE_BEHAVIORS,
  DISPLAYCONFIG_DEVICE_INFO_HEADER,
  DISPLAYCONFIG_MODE_INFO,
  DISPLAYCONFIG_PATH_INFO,
  DISPLAYCONFIG_TOPOLOGY_ID,
  DLGPROC,
  DPI_AWARENESS,
  DPI_AWARENESS_CONTEXT,
  DPI_HOSTING_BEHAVIOR,
  DRAWSTATEPROC,
  DWORD,
  FEEDBACK_TYPE,
  GRAYSTRINGPROC,
  HACCEL,
  HANDLE,
  HBITMAP,
  HBRUSH,
  HCONV,
  HCONVLIST,
  HCURSOR,
  HDC,
  HDDEDATA,
  HDESK,
  HDEVNOTIFY,
  HDWP,
  HGESTUREINFO,
  HHOOK,
  HICON,
  HINSTANCE,
  HKL,
  HMENU,
  HMODULE,
  HMONITOR,
  HOOKPROC,
  HPOWERNOTIFY,
  HRAWINPUT,
  HRGN,
  HSYNTHETICPOINTERDEVICE,
  HSZ,
  HTOUCHINPUT,
  HWINEVENTHOOK,
  HWINSTA,
  HWND,
  INPUT_MESSAGE_SOURCE,
  INPUT_TRANSFORM,
  INT,
  INT_PTR,
  LONG,
  LONG_PTR,
  LPACCEL,
  LPARAM,
  LPBYTE,
  LPCDLGTEMPLATEW,
  LPCGUID,
  LPCMENUINFO,
  LPCMENUITEMINFOW,
  LPCRECT,
  LPCSCROLLINFO,
  LPCSTR,
  LPCWSTR,
  LPDRAWTEXTPARAMS,
  LPDWORD,
  LPINPUT,
  LPINT,
  LPMENUINFO,
  LPMENUITEMINFOW,
  LPMONITORINFO,
  LPMOUSEMOVEPOINT,
  LPMSG,
  LPPAINTSTRUCT,
  LPPOINT,
  LPRECT,
  LPSCROLLINFO,
  LPSECURITY_ATTRIBUTES,
  LPSTR,
  LPTPMPARAMS,
  LPTRACKMOUSEEVENT,
  LPVOID,
  LPWNDCLASSEXW,
  LPWNDCLASSW,
  LPWORD,
  LPWSTR,
  LRESULT,
  MENUTEMPLATEW,
  MONITORENUMPROC,
  MSGBOXPARAMSW,
  ORIENTATION_PREFERENCE,
  PAINTSTRUCT,
  PALTTABINFO,
  PAR_STATE,
  PBSMINFO,
  PBYTE,
  PCHANGEFILTERSTRUCT,
  PCOMBOBOXINFO,
  PCONVCONTEXT,
  PCONVINFO,
  PCRAWINPUTDEVICE,
  PCURSORINFO,
  PDISPLAY_DEVICEW,
  PDWORD_PTR,
  PFLASHWINFO,
  PFNCALLBACK,
  PGESTURECONFIG,
  PGESTUREINFO,
  PGUITHREADINFO,
  PICONINFO,
  PICONINFOEXW,
  PLASTINPUTINFO,
  PMENUBARINFO,
  POINTER_DEVICE_CURSOR_INFO,
  POINTER_DEVICE_INFO,
  POINTER_DEVICE_PROPERTY,
  POINTER_FEEDBACK_MODE,
  POINTER_INFO,
  POINTER_INPUT_TYPE,
  POINTER_PEN_INFO,
  POINTER_TOUCH_INFO,
  POINTER_TYPE_INFO,
  PRAWINPUT,
  PRAWINPUTDEVICE,
  PRAWINPUTDEVICELIST,
  PROPENUMPROCA,
  PROPENUMPROCEXA,
  PROPENUMPROCEXW,
  PROPENUMPROCW,
  PSCROLLBARINFO,
  PSECURITY_DESCRIPTOR,
  PSECURITY_INFORMATION,
  PTITLEBARINFO,
  PTOUCHINPUT,
  PUINT,
  PULONG,
  PVOID,
  PWINDOWINFO,
  SENDASYNCPROC,
  SHORT,
  SIZE,
  TIMERPROC,
  TOUCH_HIT_TESTING_INPUT,
  TOUCH_HIT_TESTING_PROXIMITY_EVALUATION,
  UINT,
  UINT32,
  UINT_PTR,
  ULONG,
  ULONG_PTR,
  VOID,
  WCHAR,
  WINDOWPLACEMENT,
  WINEVENTPROC,
  WINSTAENUMPROCW,
  WNDCLASSEXW,
  WNDCLASSW,
  WNDENUMPROC,
  WNDPROC,
  WORD,
  WPARAM,
} from '../types/User32';

class User32 {
  public static Init(): typeof User32 {
    const { symbols } = dlopen('user32.dll', User32.Symbols);

    return Object.defineProperties(User32, {
      ...Object.fromEntries(Object.entries(symbols).map(([name, symbol]) => [name, { configurable: false, value: symbol, writable: false }])),
      Init: { configurable: false, value: () => User32, writable: false },
    });
  }

  private static readonly Symbols = {
    ActivateKeyboardLayout: { args: [FFIType.ptr, FFIType.u32], returns: FFIType.ptr },
    AddClipboardFormatListener: { args: [FFIType.ptr], returns: FFIType.i32 },
    AdjustWindowRect: { args: [FFIType.ptr, FFIType.u32, FFIType.i32], returns: FFIType.i32 },
    AdjustWindowRectEx: { args: [FFIType.ptr, FFIType.u32, FFIType.i32, FFIType.u32], returns: FFIType.i32 },
    AdjustWindowRectExForDpi: { args: [FFIType.ptr, FFIType.u32, FFIType.i32, FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    AllowSetForegroundWindow: { args: [FFIType.u32], returns: FFIType.i32 },
    AnimateWindow: { args: [FFIType.ptr, FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    AnyPopup: { args: [], returns: FFIType.i32 },
    AppendMenuW: { args: [FFIType.ptr, FFIType.u32, FFIType.u64, FFIType.ptr], returns: FFIType.i32 },
    AreDpiAwarenessContextsEqual: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    ArrangeIconicWindows: { args: [FFIType.ptr], returns: FFIType.u32 },
    AttachThreadInput: { args: [FFIType.u32, FFIType.u32, FFIType.i32], returns: FFIType.i32 },
    BeginDeferWindowPos: { args: [FFIType.i32], returns: FFIType.ptr },
    BeginPaint: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    BlockInput: { args: [FFIType.i32], returns: FFIType.i32 },
    BringWindowToTop: { args: [FFIType.ptr], returns: FFIType.i32 },
    BroadcastSystemMessageExW: { args: [FFIType.u32, FFIType.ptr, FFIType.u32, FFIType.u64, FFIType.i64, FFIType.ptr], returns: FFIType.i32 },
    BroadcastSystemMessageW: { args: [FFIType.u32, FFIType.ptr, FFIType.u32, FFIType.u64, FFIType.i64], returns: FFIType.i32 },
    CalculatePopupWindowPosition: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    CallMsgFilterW: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    CallNextHookEx: { args: [FFIType.ptr, FFIType.i32, FFIType.u64, FFIType.i64], returns: FFIType.i64 },
    CallWindowProcW: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.u64, FFIType.i64], returns: FFIType.i64 },
    CascadeWindows: { args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32, FFIType.ptr], returns: FFIType.u16 },
    ChangeClipboardChain: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    ChangeDisplaySettingsExW: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    ChangeDisplaySettingsW: { args: [FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    ChangeMenuW: { args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    ChangeWindowMessageFilter: { args: [FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    ChangeWindowMessageFilterEx: { args: [FFIType.ptr, FFIType.u32, FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    CharLowerBuffW: { args: [FFIType.ptr, FFIType.u32], returns: FFIType.u32 },
    CharLowerW: { args: [FFIType.ptr], returns: FFIType.ptr },
    CharNextW: { args: [FFIType.ptr], returns: FFIType.ptr },
    CharPrevW: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    CharToOemBuffW: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    CharToOemW: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    CharUpperBuffW: { args: [FFIType.ptr, FFIType.u32], returns: FFIType.u32 },
    CharUpperW: { args: [FFIType.ptr], returns: FFIType.ptr },
    CheckDlgButton: { args: [FFIType.ptr, FFIType.i32, FFIType.u32], returns: FFIType.i32 },
    CheckMenuItem: { args: [FFIType.ptr, FFIType.u32, FFIType.u32], returns: FFIType.u32 },
    CheckMenuRadioItem: { args: [FFIType.ptr, FFIType.u32, FFIType.u32, FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    CheckRadioButton: { args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32], returns: FFIType.i32 },
    ChildWindowFromPoint: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    ChildWindowFromPointEx: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.ptr },
    ClientToScreen: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    ClipCursor: { args: [FFIType.ptr], returns: FFIType.i32 },
    CloseClipboard: { args: [], returns: FFIType.i32 },
    CloseDesktop: { args: [FFIType.ptr], returns: FFIType.i32 },
    CloseGestureInfoHandle: { args: [FFIType.ptr], returns: FFIType.i32 },
    CloseTouchInputHandle: { args: [FFIType.ptr], returns: FFIType.i32 },
    CloseWindow: { args: [FFIType.ptr], returns: FFIType.i32 },
    CloseWindowStation: { args: [FFIType.ptr], returns: FFIType.i32 },
    CopyAcceleratorTableW: { args: [FFIType.ptr, FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    CopyIcon: { args: [FFIType.ptr], returns: FFIType.ptr },
    CopyImage: { args: [FFIType.ptr, FFIType.u32, FFIType.i32, FFIType.i32, FFIType.u32], returns: FFIType.ptr },
    CopyRect: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    CountClipboardFormats: { args: [], returns: FFIType.i32 },
    CreateAcceleratorTableW: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.ptr },
    CreateCaret: { args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.i32], returns: FFIType.i32 },
    CreateCursor: { args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    CreateDesktopExW: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.u32, FFIType.u32, FFIType.ptr], returns: FFIType.ptr },
    CreateDesktopW: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.u32, FFIType.ptr], returns: FFIType.ptr },
    CreateDialogIndirectParamW: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.i64], returns: FFIType.ptr },
    CreateDialogParamW: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.i64], returns: FFIType.ptr },
    CreateIcon: { args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.u8, FFIType.u8, FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    CreateIconFromResource: { args: [FFIType.ptr, FFIType.u32, FFIType.i32, FFIType.u32], returns: FFIType.ptr },
    CreateIconFromResourceEx: { args: [FFIType.ptr, FFIType.u32, FFIType.i32, FFIType.u32, FFIType.i32, FFIType.i32, FFIType.u32], returns: FFIType.ptr },
    CreateIconIndirect: { args: [FFIType.ptr], returns: FFIType.ptr },
    CreateMDIWindowW: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr, FFIType.ptr, FFIType.i64], returns: FFIType.ptr },
    CreateMenu: { args: [], returns: FFIType.ptr },
    CreatePopupMenu: { args: [], returns: FFIType.ptr },
    CreateSyntheticPointerDevice: { args: [FFIType.u32, FFIType.u32, FFIType.u32], returns: FFIType.ptr },
    CreateWindowExW: { args: [FFIType.u32, FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    CreateWindowInBand: { args: [FFIType.u32, FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.ptr },
    CreateWindowInBandEx: {
      args: [FFIType.u32, FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.u32],
      returns: FFIType.ptr,
    },
    CreateWindowStationW: { args: [FFIType.ptr, FFIType.u32, FFIType.u32, FFIType.ptr], returns: FFIType.ptr },
    DdeAbandonTransaction: { args: [FFIType.u32, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    DdeAccessData: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    DdeClientTransaction: { args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.u32, FFIType.u32, FFIType.ptr], returns: FFIType.ptr },
    DdeCmpStringHandles: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    DdeConnect: { args: [FFIType.u32, FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    DdeConnectList: { args: [FFIType.u32, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    DdeCreateDataHandle: { args: [FFIType.u32, FFIType.ptr, FFIType.u32, FFIType.u32, FFIType.u32, FFIType.u32, FFIType.u32], returns: FFIType.ptr },
    DdeCreateStringHandleW: { args: [FFIType.u32, FFIType.ptr, FFIType.i32], returns: FFIType.ptr },
    DdeDisconnect: { args: [FFIType.ptr], returns: FFIType.i32 },
    DdeDisconnectList: { args: [FFIType.ptr], returns: FFIType.i32 },
    DdeEnableCallback: { args: [FFIType.u32, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    DdeFreeDataHandle: { args: [FFIType.ptr], returns: FFIType.i32 },
    DdeFreeStringHandle: { args: [FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    DdeGetData: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.u32], returns: FFIType.u32 },
    DdeGetLastError: { args: [FFIType.u32], returns: FFIType.u32 },
    DdeImpersonateClient: { args: [FFIType.ptr], returns: FFIType.i32 },
    DdeInitializeW: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.u32], returns: FFIType.u32 },
    DdeKeepStringHandle: { args: [FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    DdeQueryConvInfo: { args: [FFIType.ptr, FFIType.u32, FFIType.ptr], returns: FFIType.u32 },
    DdeQueryNextServer: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    DdeQueryStringW: { args: [FFIType.u32, FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.i32], returns: FFIType.u32 },
    DdeUnaccessData: { args: [FFIType.ptr], returns: FFIType.i32 },
    DdeUninitialize: { args: [FFIType.u32], returns: FFIType.i32 },
    DefDlgProcW: { args: [FFIType.ptr, FFIType.u32, FFIType.u64, FFIType.i64], returns: FFIType.i64 },
    DeferWindowPos: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.u32], returns: FFIType.ptr },
    DefFrameProcW: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.u64, FFIType.i64], returns: FFIType.i64 },
    DefMDIChildProcW: { args: [FFIType.ptr, FFIType.u32, FFIType.u64, FFIType.i64], returns: FFIType.i64 },
    DefRawInputProc: { args: [FFIType.ptr, FFIType.i32, FFIType.u32], returns: FFIType.i64 },
    DefWindowProcW: { args: [FFIType.ptr, FFIType.u32, FFIType.u64, FFIType.i64], returns: FFIType.i64 },
    DeleteMenu: { args: [FFIType.ptr, FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    DeregisterShellHookWindow: { args: [FFIType.ptr], returns: FFIType.i32 },
    DestroyAcceleratorTable: { args: [FFIType.ptr], returns: FFIType.i32 },
    DestroyCaret: { args: [], returns: FFIType.i32 },
    DestroyCursor: { args: [FFIType.ptr], returns: FFIType.i32 },
    DestroyIcon: { args: [FFIType.ptr], returns: FFIType.i32 },
    DestroyMenu: { args: [FFIType.ptr], returns: FFIType.i32 },
    DestroySyntheticPointerDevice: { args: [FFIType.ptr], returns: FFIType.void },
    DestroyWindow: { args: [FFIType.ptr], returns: FFIType.i32 },
    DialogBoxIndirectParamW: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.i64], returns: FFIType.i64 },
    DialogBoxParamW: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.i64], returns: FFIType.i64 },
    DisableProcessWindowsGhosting: { args: [], returns: FFIType.void },
    DispatchMessageW: { args: [FFIType.ptr], returns: FFIType.i64 },
    DisplayConfigGetDeviceInfo: { args: [FFIType.ptr], returns: FFIType.i32 },
    DisplayConfigSetDeviceInfo: { args: [FFIType.ptr], returns: FFIType.i32 },
    DlgDirListComboBoxW: { args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.u32], returns: FFIType.i32 },
    DlgDirListW: { args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.u32], returns: FFIType.i32 },
    DlgDirSelectComboBoxExW: { args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.i32], returns: FFIType.i32 },
    DlgDirSelectExW: { args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.i32], returns: FFIType.i32 },
    DragDetect: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    DrawAnimatedRects: { args: [FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    DrawCaption: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    DrawCaptionTempW: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    DrawEdge: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    DrawFocusRect: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    DrawFrameControl: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    DrawIcon: { args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.ptr], returns: FFIType.i32 },
    DrawIconEx: { args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.u32, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    DrawMenuBar: { args: [FFIType.ptr], returns: FFIType.i32 },
    DrawStateW: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.i64, FFIType.u64, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.u32], returns: FFIType.i32 },
    DrawTextExW: { args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    DrawTextW: { args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    EmptyClipboard: { args: [], returns: FFIType.i32 },
    EnableMenuItem: { args: [FFIType.ptr, FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    EnableMouseInPointer: { args: [FFIType.i32], returns: FFIType.i32 },
    EnableNonClientDpiScaling: { args: [FFIType.ptr], returns: FFIType.i32 },
    EnableScrollBar: { args: [FFIType.ptr, FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    EnableWindow: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    EndDeferWindowPos: { args: [FFIType.ptr], returns: FFIType.i32 },
    EndDialog: { args: [FFIType.ptr, FFIType.i64], returns: FFIType.i32 },
    EndMenu: { args: [], returns: FFIType.i32 },
    EndPaint: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    EndTask: { args: [FFIType.ptr, FFIType.i32, FFIType.i32], returns: FFIType.i32 },
    EnumChildWindows: { args: [FFIType.ptr, FFIType.ptr, FFIType.i64], returns: FFIType.i32 },
    EnumClipboardFormats: { args: [FFIType.u32], returns: FFIType.u32 },
    EnumDesktopsW: { args: [FFIType.ptr, FFIType.ptr, FFIType.i64], returns: FFIType.i32 },
    EnumDesktopWindows: { args: [FFIType.ptr, FFIType.ptr, FFIType.i64], returns: FFIType.i32 },
    EnumDisplayDevicesW: { args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    EnumDisplayMonitors: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.i64], returns: FFIType.i32 },
    EnumDisplaySettingsExW: { args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    EnumDisplaySettingsW: { args: [FFIType.ptr, FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    EnumPropsA: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    EnumPropsExA: { args: [FFIType.ptr, FFIType.ptr, FFIType.i64], returns: FFIType.i32 },
    EnumPropsExW: { args: [FFIType.ptr, FFIType.ptr, FFIType.i64], returns: FFIType.i32 },
    EnumPropsW: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    EnumThreadWindows: { args: [FFIType.u32, FFIType.ptr, FFIType.i64], returns: FFIType.i32 },
    EnumWindows: { args: [FFIType.ptr, FFIType.i64], returns: FFIType.i32 },
    EnumWindowStationsW: { args: [FFIType.ptr, FFIType.i64], returns: FFIType.i32 },
    EqualRect: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    EvaluateProximityToPolygon: { args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    EvaluateProximityToRect: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    ExcludeUpdateRgn: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    ExitWindowsEx: { args: [FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    FillRect: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    FindWindowExW: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    FindWindowW: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    FlashWindow: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    FlashWindowEx: { args: [FFIType.ptr], returns: FFIType.i32 },
    FrameRect: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    FreeDDElParam: { args: [FFIType.u32, FFIType.i64], returns: FFIType.i32 },
    GetActiveWindow: { args: [], returns: FFIType.ptr },
    GetAltTabInfoW: { args: [FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    GetAncestor: { args: [FFIType.ptr, FFIType.u32], returns: FFIType.ptr },
    GetAsyncKeyState: { args: [FFIType.i32], returns: FFIType.i16 },
    GetAutoRotationState: { args: [FFIType.ptr], returns: FFIType.i32 },
    GetAwarenessFromDpiAwarenessContext: { args: [FFIType.ptr], returns: FFIType.i32 },
    GetCapture: { args: [], returns: FFIType.ptr },
    GetCaretBlinkTime: { args: [], returns: FFIType.u32 },
    GetCaretPos: { args: [FFIType.ptr], returns: FFIType.i32 },
    GetClassInfoExW: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetClassInfoW: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetClassLongPtrW: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.u64 },
    GetClassLongW: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.u32 },
    GetClassNameW: { args: [FFIType.ptr, FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    GetClassWord: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.u16 },
    GetClientRect: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetClipboardData: { args: [FFIType.u32], returns: FFIType.ptr },
    GetClipboardFormatNameW: { args: [FFIType.u32, FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    GetClipboardOwner: { args: [], returns: FFIType.ptr },
    GetClipboardSequenceNumber: { args: [], returns: FFIType.u32 },
    GetClipboardViewer: { args: [], returns: FFIType.ptr },
    GetClipCursor: { args: [FFIType.ptr], returns: FFIType.i32 },
    GetComboBoxInfo: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetCurrentInputMessageSource: { args: [FFIType.ptr], returns: FFIType.i32 },
    GetCursor: { args: [], returns: FFIType.ptr },
    GetCursorInfo: { args: [FFIType.ptr], returns: FFIType.i32 },
    GetCursorPos: { args: [FFIType.ptr], returns: FFIType.i32 },
    GetDC: { args: [FFIType.ptr], returns: FFIType.ptr },
    GetDCEx: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.ptr },
    GetDesktopWindow: { args: [], returns: FFIType.ptr },
    GetDialogBaseUnits: { args: [], returns: FFIType.i32 },
    GetDialogControlDpiChangeBehavior: { args: [FFIType.ptr], returns: FFIType.i32 },
    GetDialogDpiChangeBehavior: { args: [FFIType.ptr], returns: FFIType.i32 },
    GetDisplayAutoRotationPreferences: { args: [FFIType.ptr], returns: FFIType.i32 },
    GetDisplayConfigBufferSizes: { args: [FFIType.u32, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetDlgCtrlID: { args: [FFIType.ptr], returns: FFIType.i32 },
    GetDlgItem: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.ptr },
    GetDlgItemInt: { args: [FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.i32], returns: FFIType.u32 },
    GetDlgItemTextW: { args: [FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.i32], returns: FFIType.u32 },
    GetDoubleClickTime: { args: [], returns: FFIType.u32 },
    GetDpiForSystem: { args: [], returns: FFIType.u32 },
    GetDpiForWindow: { args: [FFIType.ptr], returns: FFIType.u32 },
    GetDpiFromDpiAwarenessContext: { args: [FFIType.ptr], returns: FFIType.u32 },
    GetFocus: { args: [], returns: FFIType.ptr },
    GetForegroundWindow: { args: [], returns: FFIType.ptr },
    GetGestureConfig: { args: [FFIType.ptr, FFIType.u32, FFIType.u32, FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    GetGestureExtraArgs: { args: [FFIType.ptr, FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    GetGestureInfo: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetGuiResources: { args: [FFIType.ptr, FFIType.u32], returns: FFIType.u32 },
    GetGUIThreadInfo: { args: [FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    GetIconInfo: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetIconInfoExW: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetInputState: { args: [], returns: FFIType.i32 },
    GetKeyboardLayout: { args: [FFIType.u32], returns: FFIType.ptr },
    GetKeyboardLayoutList: { args: [FFIType.i32, FFIType.ptr], returns: FFIType.i32 },
    GetKeyboardLayoutNameW: { args: [FFIType.ptr], returns: FFIType.i32 },
    GetKeyboardState: { args: [FFIType.ptr], returns: FFIType.i32 },
    GetKeyboardType: { args: [FFIType.i32], returns: FFIType.i32 },
    GetKeyNameTextW: { args: [FFIType.i32, FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    GetKeyState: { args: [FFIType.i32], returns: FFIType.i16 },
    GetLastActivePopup: { args: [FFIType.ptr], returns: FFIType.ptr },
    GetLastInputInfo: { args: [FFIType.ptr], returns: FFIType.i32 },
    GetLayeredWindowAttributes: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetListBoxInfo: { args: [FFIType.ptr], returns: FFIType.u32 },
    GetMenu: { args: [FFIType.ptr], returns: FFIType.ptr },
    GetMenuBarInfo: { args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.ptr], returns: FFIType.i32 },
    GetMenuCheckMarkDimensions: { args: [], returns: FFIType.i32 },
    GetMenuContextHelpId: { args: [FFIType.ptr], returns: FFIType.u32 },
    GetMenuDefaultItem: { args: [FFIType.ptr, FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    GetMenuInfo: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetMenuItemCount: { args: [FFIType.ptr], returns: FFIType.i32 },
    GetMenuItemID: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.u32 },
    GetMenuItemInfoW: { args: [FFIType.ptr, FFIType.u32, FFIType.i32, FFIType.ptr], returns: FFIType.i32 },
    GetMenuItemRect: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    GetMenuState: { args: [FFIType.ptr, FFIType.u32, FFIType.u32], returns: FFIType.u32 },
    GetMenuStringW: { args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.i32, FFIType.u32], returns: FFIType.i32 },
    GetMessageExtraInfo: { args: [], returns: FFIType.i64 },
    GetMessagePos: { args: [], returns: FFIType.u32 },
    GetMessageTime: { args: [], returns: FFIType.i32 },
    GetMessageW: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    GetMonitorInfoW: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetMouseMovePointsEx: { args: [FFIType.u32, FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.u32], returns: FFIType.i32 },
    GetNextDlgGroupItem: { args: [FFIType.ptr, FFIType.ptr, FFIType.i32], returns: FFIType.ptr },
    GetNextDlgTabItem: { args: [FFIType.ptr, FFIType.ptr, FFIType.i32], returns: FFIType.ptr },
    GetOpenClipboardWindow: { args: [], returns: FFIType.ptr },
    GetParent: { args: [FFIType.ptr], returns: FFIType.ptr },
    GetPhysicalCursorPos: { args: [FFIType.ptr], returns: FFIType.i32 },
    GetPointerCursorId: { args: [FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    GetPointerDevice: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetPointerDeviceCursors: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetPointerDeviceProperties: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetPointerDeviceRects: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetPointerDevices: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetPointerFrameInfo: { args: [FFIType.u32, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetPointerFrameInfoHistory: { args: [FFIType.u32, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetPointerFramePenInfo: { args: [FFIType.u32, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetPointerFramePenInfoHistory: { args: [FFIType.u32, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetPointerFrameTimes: { args: [FFIType.u32, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetPointerFrameTouchInfo: { args: [FFIType.u32, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetPointerFrameTouchInfoHistory: { args: [FFIType.u32, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetPointerInfo: { args: [FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    GetPointerInfoHistory: { args: [FFIType.u32, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetPointerInputTransform: { args: [FFIType.u32, FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    GetPointerPenInfo: { args: [FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    GetPointerTouchInfo: { args: [FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    GetPointerType: { args: [FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    GetPriorityClipboardFormat: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    GetProcessDefaultLayout: { args: [FFIType.ptr], returns: FFIType.i32 },
    GetProcessWindowStation: { args: [], returns: FFIType.ptr },
    GetPropA: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    GetPropW: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    GetQueueStatus: { args: [FFIType.u32], returns: FFIType.u32 },
    GetRawInputBuffer: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.u32 },
    GetRawInputData: { args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.u32 },
    GetRawInputDeviceInfoW: { args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.ptr], returns: FFIType.u32 },
    GetRawInputDeviceList: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.u32 },
    GetRawPointerDeviceData: { args: [FFIType.u32, FFIType.u32, FFIType.u32, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetRegisteredRawInputDevices: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.u32 },
    GetScrollBarInfo: { args: [FFIType.ptr, FFIType.i32, FFIType.ptr], returns: FFIType.i32 },
    GetScrollInfo: { args: [FFIType.ptr, FFIType.i32, FFIType.ptr], returns: FFIType.i32 },
    GetScrollPos: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    GetScrollRange: { args: [FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetShellWindow: { args: [], returns: FFIType.ptr },
    GetSubMenu: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.ptr },
    GetSysColor: { args: [FFIType.i32], returns: FFIType.u32 },
    GetSysColorBrush: { args: [FFIType.i32], returns: FFIType.ptr },
    GetSystemDpiForProcess: { args: [FFIType.ptr], returns: FFIType.u32 },
    GetSystemMenu: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.ptr },
    GetSystemMetrics: { args: [FFIType.i32], returns: FFIType.i32 },
    GetSystemMetricsForDpi: { args: [FFIType.i32, FFIType.u32], returns: FFIType.i32 },
    GetTabbedTextExtentW: { args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.ptr], returns: FFIType.u32 },
    GetThreadDesktop: { args: [FFIType.u32], returns: FFIType.ptr },
    GetThreadDpiAwarenessContext: { args: [], returns: FFIType.ptr },
    GetThreadDpiHostingBehavior: { args: [], returns: FFIType.i32 },
    GetTitleBarInfo: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetTopWindow: { args: [FFIType.ptr], returns: FFIType.ptr },
    GetTouchInputInfo: { args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    GetUnpredictedMessagePos: { args: [], returns: FFIType.u32 },
    GetUpdatedClipboardFormats: { args: [FFIType.ptr, FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    GetUpdateRect: { args: [FFIType.ptr, FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    GetUpdateRgn: { args: [FFIType.ptr, FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    GetUserObjectInformationW: { args: [FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    GetUserObjectSecurity: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    GetWindow: { args: [FFIType.ptr, FFIType.u32], returns: FFIType.ptr },
    GetWindowBand: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetWindowCompositionAttribute: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetWindowContextHelpId: { args: [FFIType.ptr], returns: FFIType.u32 },
    GetWindowDC: { args: [FFIType.ptr], returns: FFIType.ptr },
    GetWindowDisplayAffinity: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetWindowDpiAwarenessContext: { args: [FFIType.ptr], returns: FFIType.ptr },
    GetWindowDpiHostingBehavior: { args: [FFIType.ptr], returns: FFIType.i32 },
    GetWindowFeedbackSetting: { args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetWindowInfo: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetWindowLongPtrW: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.i64 },
    GetWindowLongW: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    GetWindowModuleFileNameW: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.u32 },
    GetWindowPlacement: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetWindowRect: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetWindowRgn: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetWindowRgnBox: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    GetWindowTextLengthW: { args: [FFIType.ptr], returns: FFIType.i32 },
    GetWindowTextW: { args: [FFIType.ptr, FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    GetWindowThreadProcessId: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.u32 },
    GetWindowWord: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.u16 },
    GrayStringW: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.i64, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32], returns: FFIType.i32 },
    HideCaret: { args: [FFIType.ptr], returns: FFIType.i32 },
    HiliteMenuItem: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    InflateRect: { args: [FFIType.ptr, FFIType.i32, FFIType.i32], returns: FFIType.i32 },
    InitializeTouchInjection: { args: [FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    InjectSyntheticPointerInput: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    InjectTouchInput: { args: [FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    InSendMessage: { args: [], returns: FFIType.i32 },
    InSendMessageEx: { args: [FFIType.ptr], returns: FFIType.u32 },
    InsertMenuItemW: { args: [FFIType.ptr, FFIType.u32, FFIType.i32, FFIType.ptr], returns: FFIType.i32 },
    InsertMenuW: { args: [FFIType.ptr, FFIType.u32, FFIType.u32, FFIType.u64, FFIType.ptr], returns: FFIType.i32 },
    IntersectRect: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    InvalidateRect: { args: [FFIType.ptr, FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    InvalidateRgn: { args: [FFIType.ptr, FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    InvertRect: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    IsCharAlphaNumericW: { args: [FFIType.u16], returns: FFIType.i32 },
    IsCharAlphaW: { args: [FFIType.u16], returns: FFIType.i32 },
    IsCharLowerW: { args: [FFIType.u16], returns: FFIType.i32 },
    IsCharUpperW: { args: [FFIType.u16], returns: FFIType.i32 },
    IsChild: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    IsClipboardFormatAvailable: { args: [FFIType.u32], returns: FFIType.i32 },
    IsDialogMessageW: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    IsDlgButtonChecked: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.u32 },
    IsGUIThread: { args: [FFIType.i32], returns: FFIType.i32 },
    IsHungAppWindow: { args: [FFIType.ptr], returns: FFIType.i32 },
    IsIconic: { args: [FFIType.ptr], returns: FFIType.i32 },
    IsImmersiveProcess: { args: [FFIType.ptr], returns: FFIType.i32 },
    IsMenu: { args: [FFIType.ptr], returns: FFIType.i32 },
    IsMouseInPointerEnabled: { args: [], returns: FFIType.i32 },
    IsProcessDPIAware: { args: [], returns: FFIType.i32 },
    IsRectEmpty: { args: [FFIType.ptr], returns: FFIType.i32 },
    IsTouchWindow: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    IsValidDpiAwarenessContext: { args: [FFIType.ptr], returns: FFIType.i32 },
    IsWindow: { args: [FFIType.ptr], returns: FFIType.i32 },
    IsWindowArranged: { args: [FFIType.ptr], returns: FFIType.i32 },
    IsWindowEnabled: { args: [FFIType.ptr], returns: FFIType.i32 },
    IsWindowRedirectedForPrint: { args: [FFIType.ptr], returns: FFIType.i32 },
    IsWindowUnicode: { args: [FFIType.ptr], returns: FFIType.i32 },
    IsWindowVisible: { args: [FFIType.ptr], returns: FFIType.i32 },
    IsWinEventHookInstalled: { args: [FFIType.u32], returns: FFIType.i32 },
    IsWow64Message: { args: [], returns: FFIType.i32 },
    IsZoomed: { args: [FFIType.ptr], returns: FFIType.i32 },
    KillTimer: { args: [FFIType.ptr, FFIType.u64], returns: FFIType.i32 },
    LoadAcceleratorsW: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    LoadBitmapW: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    LoadCursorFromFileW: { args: [FFIType.ptr], returns: FFIType.ptr },
    LoadCursorW: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    LoadIconW: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    LoadImageW: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.i32, FFIType.i32, FFIType.u32], returns: FFIType.ptr },
    LoadKeyboardLayoutW: { args: [FFIType.ptr, FFIType.u32], returns: FFIType.ptr },
    LoadMenuIndirectW: { args: [FFIType.ptr], returns: FFIType.ptr },
    LoadMenuW: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    LoadStringW: { args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    LockSetForegroundWindow: { args: [FFIType.u32], returns: FFIType.i32 },
    LockWindowUpdate: { args: [FFIType.ptr], returns: FFIType.i32 },
    LockWorkStation: { args: [], returns: FFIType.i32 },
    LogicalToPhysicalPoint: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    LogicalToPhysicalPointForPerMonitorDPI: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    LookupIconIdFromDirectory: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    LookupIconIdFromDirectoryEx: { args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.u32], returns: FFIType.i32 },
    MapDialogRect: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    MapVirtualKeyExW: { args: [FFIType.u32, FFIType.u32, FFIType.ptr], returns: FFIType.u32 },
    MapVirtualKeyW: { args: [FFIType.u32, FFIType.u32], returns: FFIType.u32 },
    MapWindowPoints: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    MenuItemFromPoint: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    MessageBeep: { args: [FFIType.u32], returns: FFIType.i32 },
    MessageBoxExW: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.u16], returns: FFIType.i32 },
    MessageBoxIndirectW: { args: [FFIType.ptr], returns: FFIType.i32 },
    MessageBoxTimeoutW: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.u16, FFIType.u32], returns: FFIType.i32 },
    MessageBoxW: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    ModifyMenuW: { args: [FFIType.ptr, FFIType.u32, FFIType.u32, FFIType.u64, FFIType.ptr], returns: FFIType.i32 },
    MonitorFromPoint: { args: [FFIType.ptr, FFIType.u32], returns: FFIType.ptr },
    MonitorFromRect: { args: [FFIType.ptr, FFIType.u32], returns: FFIType.ptr },
    MonitorFromWindow: { args: [FFIType.ptr, FFIType.u32], returns: FFIType.ptr },
    MoveWindow: { args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32], returns: FFIType.i32 },
    MsgWaitForMultipleObjects: { args: [FFIType.u32, FFIType.ptr, FFIType.i32, FFIType.u32, FFIType.u32], returns: FFIType.u32 },
    MsgWaitForMultipleObjectsEx: { args: [FFIType.u32, FFIType.ptr, FFIType.u32, FFIType.u32, FFIType.u32], returns: FFIType.u32 },
    NotifyWinEvent: { args: [FFIType.u32, FFIType.ptr, FFIType.i32, FFIType.i32], returns: FFIType.void },
    OemKeyScan: { args: [FFIType.u16], returns: FFIType.u32 },
    OemToCharBuffW: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    OemToCharW: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    OffsetRect: { args: [FFIType.ptr, FFIType.i32, FFIType.i32], returns: FFIType.i32 },
    OpenClipboard: { args: [FFIType.ptr], returns: FFIType.i32 },
    OpenDesktopW: { args: [FFIType.ptr, FFIType.u32, FFIType.i32, FFIType.u32], returns: FFIType.ptr },
    OpenIcon: { args: [FFIType.ptr], returns: FFIType.i32 },
    OpenInputDesktop: { args: [FFIType.u32, FFIType.i32, FFIType.u32], returns: FFIType.ptr },
    OpenThreadDesktop: { args: [FFIType.u32, FFIType.i32, FFIType.u32], returns: FFIType.ptr },
    OpenWindowStationW: { args: [FFIType.ptr, FFIType.i32, FFIType.u32], returns: FFIType.ptr },
    PackDDElParam: { args: [FFIType.u32, FFIType.u64, FFIType.i64], returns: FFIType.i64 },
    PaintDesktop: { args: [FFIType.ptr], returns: FFIType.i32 },
    PeekMessageW: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    PhysicalToLogicalPoint: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    PhysicalToLogicalPointForPerMonitorDPI: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    PostMessageW: { args: [FFIType.ptr, FFIType.u32, FFIType.u64, FFIType.i64], returns: FFIType.i32 },
    PostQuitMessage: { args: [FFIType.i32], returns: FFIType.void },
    PostThreadMessageW: { args: [FFIType.u32, FFIType.u32, FFIType.u64, FFIType.i64], returns: FFIType.i32 },
    PrintWindow: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    PrivateExtractIconsW: { args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.u32], returns: FFIType.u32 },
    PtInRect: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    QueryDisplayConfig: { args: [FFIType.u32, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    RealChildWindowFromPoint: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    RealGetWindowClassW: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.u32 },
    RedrawWindow: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    RegisterClassExW: { args: [FFIType.ptr], returns: FFIType.u16 },
    RegisterClassW: { args: [FFIType.ptr], returns: FFIType.u16 },
    RegisterClipboardFormatW: { args: [FFIType.ptr], returns: FFIType.u32 },
    RegisterDeviceNotificationW: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.ptr },
    RegisterHotKey: { args: [FFIType.ptr, FFIType.i32, FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    RegisterPointerDeviceNotifications: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    RegisterPointerInputTarget: { args: [FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    RegisterPowerSettingNotification: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.ptr },
    RegisterRawInputDevices: { args: [FFIType.ptr, FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    RegisterShellHookWindow: { args: [FFIType.ptr], returns: FFIType.i32 },
    RegisterSuspendResumeNotification: { args: [FFIType.ptr, FFIType.u32], returns: FFIType.ptr },
    RegisterTouchHitTestingWindow: { args: [FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    RegisterTouchWindow: { args: [FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    RegisterWindowMessageW: { args: [FFIType.ptr], returns: FFIType.u32 },
    ReleaseCapture: { args: [], returns: FFIType.i32 },
    ReleaseDC: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    RemoveClipboardFormatListener: { args: [FFIType.ptr], returns: FFIType.i32 },
    RemoveMenu: { args: [FFIType.ptr, FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    RemovePropA: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    RemovePropW: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    ReplyMessage: { args: [FFIType.i64], returns: FFIType.i32 },
    ReuseDDElParam: { args: [FFIType.i64, FFIType.u32, FFIType.u32, FFIType.u64, FFIType.u64], returns: FFIType.i64 },
    ScreenToClient: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    ScrollDC: { args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    ScrollWindow: { args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    ScrollWindowEx: { args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    SendDlgItemMessageW: { args: [FFIType.ptr, FFIType.i32, FFIType.u32, FFIType.u64, FFIType.i64], returns: FFIType.i64 },
    SendInput: { args: [FFIType.u32, FFIType.ptr, FFIType.i32], returns: FFIType.u32 },
    SendMessageCallbackW: { args: [FFIType.ptr, FFIType.u32, FFIType.u64, FFIType.i64, FFIType.ptr, FFIType.u64], returns: FFIType.i32 },
    SendMessageTimeoutW: { args: [FFIType.ptr, FFIType.u32, FFIType.u64, FFIType.i64, FFIType.u32, FFIType.u32, FFIType.ptr], returns: FFIType.i64 },
    SendMessageW: { args: [FFIType.ptr, FFIType.u32, FFIType.u64, FFIType.i64], returns: FFIType.i64 },
    SendNotifyMessageW: { args: [FFIType.ptr, FFIType.u32, FFIType.u64, FFIType.i64], returns: FFIType.i32 },
    SetActiveWindow: { args: [FFIType.ptr], returns: FFIType.ptr },
    SetCapture: { args: [FFIType.ptr], returns: FFIType.ptr },
    SetCaretBlinkTime: { args: [FFIType.u32], returns: FFIType.i32 },
    SetCaretPos: { args: [FFIType.i32, FFIType.i32], returns: FFIType.i32 },
    SetClassLongPtrW: { args: [FFIType.ptr, FFIType.i32, FFIType.i64], returns: FFIType.u64 },
    SetClassLongW: { args: [FFIType.ptr, FFIType.i32, FFIType.i32], returns: FFIType.u32 },
    SetClassWord: { args: [FFIType.ptr, FFIType.i32, FFIType.u16], returns: FFIType.u16 },
    SetClipboardData: { args: [FFIType.u32, FFIType.ptr], returns: FFIType.ptr },
    SetClipboardViewer: { args: [FFIType.ptr], returns: FFIType.ptr },
    SetCoalescableTimer: { args: [FFIType.ptr, FFIType.u64, FFIType.u32, FFIType.ptr, FFIType.u32], returns: FFIType.u64 },
    SetCursor: { args: [FFIType.ptr], returns: FFIType.ptr },
    SetCursorPos: { args: [FFIType.i32, FFIType.i32], returns: FFIType.i32 },
    SetDialogControlDpiChangeBehavior: { args: [FFIType.ptr, FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    SetDialogDpiChangeBehavior: { args: [FFIType.ptr, FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    SetDisplayAutoRotationPreferences: { args: [FFIType.u32], returns: FFIType.i32 },
    SetDisplayConfig: { args: [FFIType.u32, FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    SetDlgItemInt: { args: [FFIType.ptr, FFIType.i32, FFIType.u32, FFIType.i32], returns: FFIType.i32 },
    SetDlgItemTextW: { args: [FFIType.ptr, FFIType.i32, FFIType.ptr], returns: FFIType.i32 },
    SetDoubleClickTime: { args: [FFIType.u32], returns: FFIType.i32 },
    SetFocus: { args: [FFIType.ptr], returns: FFIType.ptr },
    SetForegroundWindow: { args: [FFIType.ptr], returns: FFIType.i32 },
    SetGestureConfig: { args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    SetKeyboardState: { args: [FFIType.ptr], returns: FFIType.i32 },
    SetLastErrorEx: { args: [FFIType.u32, FFIType.u32], returns: FFIType.void },
    SetLayeredWindowAttributes: { args: [FFIType.ptr, FFIType.u32, FFIType.u8, FFIType.u32], returns: FFIType.i32 },
    SetMenu: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    SetMenuContextHelpId: { args: [FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    SetMenuDefaultItem: { args: [FFIType.ptr, FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    SetMenuInfo: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    SetMenuItemBitmaps: { args: [FFIType.ptr, FFIType.u32, FFIType.u32, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    SetMenuItemInfoW: { args: [FFIType.ptr, FFIType.u32, FFIType.i32, FFIType.ptr], returns: FFIType.i32 },
    SetMessageExtraInfo: { args: [FFIType.i64], returns: FFIType.i64 },
    SetMessageQueue: { args: [FFIType.i32], returns: FFIType.i32 },
    SetParent: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },
    SetPhysicalCursorPos: { args: [FFIType.i32, FFIType.i32], returns: FFIType.i32 },
    SetProcessDefaultLayout: { args: [FFIType.u32], returns: FFIType.i32 },
    SetProcessDPIAware: { args: [], returns: FFIType.i32 },
    SetProcessDpiAwarenessContext: { args: [FFIType.ptr], returns: FFIType.i32 },
    SetProcessWindowStation: { args: [FFIType.ptr], returns: FFIType.i32 },
    SetPropA: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    SetPropW: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    SetRect: { args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32], returns: FFIType.i32 },
    SetRectEmpty: { args: [FFIType.ptr], returns: FFIType.i32 },
    SetScrollInfo: { args: [FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    SetScrollPos: { args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32], returns: FFIType.i32 },
    SetScrollRange: { args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32], returns: FFIType.i32 },
    SetSysColors: { args: [FFIType.i32, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    SetSystemCursor: { args: [FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    SetThreadDesktop: { args: [FFIType.ptr], returns: FFIType.i32 },
    SetThreadDpiAwarenessContext: { args: [FFIType.ptr], returns: FFIType.ptr },
    SetThreadDpiHostingBehavior: { args: [FFIType.i32], returns: FFIType.i32 },
    SetTimer: { args: [FFIType.ptr, FFIType.u64, FFIType.u32, FFIType.ptr], returns: FFIType.u64 },
    SetUserObjectInformationW: { args: [FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    SetUserObjectSecurity: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    SetWindowBand: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    SetWindowCompositionAttribute: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    SetWindowContextHelpId: { args: [FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    SetWindowDisplayAffinity: { args: [FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    SetWindowFeedbackSetting: { args: [FFIType.ptr, FFIType.u32, FFIType.u32, FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    SetWindowLongPtrW: { args: [FFIType.ptr, FFIType.i32, FFIType.i64], returns: FFIType.i64 },
    SetWindowLongW: { args: [FFIType.ptr, FFIType.i32, FFIType.i32], returns: FFIType.i32 },
    SetWindowPlacement: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    SetWindowPos: { args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.u32], returns: FFIType.i32 },
    SetWindowRgn: { args: [FFIType.ptr, FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    SetWindowsHookExW: { args: [FFIType.i32, FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.ptr },
    SetWindowTextW: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    SetWindowWord: { args: [FFIType.ptr, FFIType.i32, FFIType.u16], returns: FFIType.u16 },
    SetWinEventHook: { args: [FFIType.u32, FFIType.u32, FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.u32, FFIType.u32], returns: FFIType.ptr },
    ShowCaret: { args: [FFIType.ptr], returns: FFIType.i32 },
    ShowCursor: { args: [FFIType.i32], returns: FFIType.i32 },
    ShowOwnedPopups: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    ShowScrollBar: { args: [FFIType.ptr, FFIType.i32, FFIType.i32], returns: FFIType.i32 },
    ShowWindow: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    ShowWindowAsync: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    ShutdownBlockReasonCreate: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    ShutdownBlockReasonDestroy: { args: [FFIType.ptr], returns: FFIType.i32 },
    ShutdownBlockReasonQuery: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    SkipPointerFrameMessages: { args: [FFIType.u32], returns: FFIType.i32 },
    SubtractRect: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    SwapMouseButton: { args: [FFIType.i32], returns: FFIType.i32 },
    SwitchDesktop: { args: [FFIType.ptr], returns: FFIType.i32 },
    SwitchToThisWindow: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.void },
    SystemParametersInfoForDpi: { args: [FFIType.u32, FFIType.u32, FFIType.ptr, FFIType.u32, FFIType.u32], returns: FFIType.i32 },
    SystemParametersInfoW: { args: [FFIType.u32, FFIType.u32, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    TabbedTextOutW: { args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    TileWindows: { args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32, FFIType.ptr], returns: FFIType.u16 },
    ToAscii: { args: [FFIType.u32, FFIType.u32, FFIType.ptr, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    ToAsciiEx: { args: [FFIType.u32, FFIType.u32, FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    ToUnicode: { args: [FFIType.u32, FFIType.u32, FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.u32], returns: FFIType.i32 },
    ToUnicodeEx: { args: [FFIType.u32, FFIType.u32, FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.u32, FFIType.ptr], returns: FFIType.i32 },
    TrackMouseEvent: { args: [FFIType.ptr], returns: FFIType.i32 },
    TrackPopupMenu: { args: [FFIType.ptr, FFIType.u32, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    TrackPopupMenuEx: { args: [FFIType.ptr, FFIType.u32, FFIType.i32, FFIType.i32, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    TranslateAcceleratorW: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    TranslateMDISysAccel: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    TranslateMessage: { args: [FFIType.ptr], returns: FFIType.i32 },
    UnhookWindowsHookEx: { args: [FFIType.ptr], returns: FFIType.i32 },
    UnhookWinEvent: { args: [FFIType.ptr], returns: FFIType.i32 },
    UnionRect: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    UnloadKeyboardLayout: { args: [FFIType.ptr], returns: FFIType.i32 },
    UnpackDDElParam: { args: [FFIType.u32, FFIType.i64, FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    UnregisterClassW: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    UnregisterDeviceNotification: { args: [FFIType.ptr], returns: FFIType.i32 },
    UnregisterHotKey: { args: [FFIType.ptr, FFIType.i32], returns: FFIType.i32 },
    UnregisterPointerInputTarget: { args: [FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    UnregisterPowerSettingNotification: { args: [FFIType.ptr], returns: FFIType.i32 },
    UnregisterSuspendResumeNotification: { args: [FFIType.ptr], returns: FFIType.i32 },
    UnregisterTouchWindow: { args: [FFIType.ptr], returns: FFIType.i32 },
    UpdateLayeredWindow: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32], returns: FFIType.i32 },
    UpdateLayeredWindowIndirect: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    UpdateWindow: { args: [FFIType.ptr], returns: FFIType.i32 },
    ValidateRect: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    ValidateRgn: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.i32 },
    VkKeyScanExW: { args: [FFIType.u16, FFIType.ptr], returns: FFIType.i16 },
    VkKeyScanW: { args: [FFIType.u16], returns: FFIType.i16 },
    WaitForInputIdle: { args: [FFIType.ptr, FFIType.u32], returns: FFIType.u32 },
    WaitMessage: { args: [], returns: FFIType.i32 },
    WindowFromDC: { args: [FFIType.ptr], returns: FFIType.ptr },
    WindowFromPhysicalPoint: { args: [FFIType.ptr], returns: FFIType.ptr },
    WindowFromPoint: { args: [FFIType.ptr], returns: FFIType.ptr },
    WinHelpW: { args: [FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.u64], returns: FFIType.i32 },
    keybd_event: { args: [FFIType.u8, FFIType.u8, FFIType.u32, FFIType.u64], returns: FFIType.void },
    mouse_event: { args: [FFIType.u32, FFIType.u32, FFIType.u32, FFIType.u32, FFIType.u64], returns: FFIType.void },
  } as const satisfies Record<string, FFIFunction>;

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-activatekeyboardlayout
  public static ActivateKeyboardLayout(hkl: HKL, Flags: UINT): HKL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-addclipboardformatlistener
  public static AddClipboardFormatListener(hwnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-adjustwindowrect
  public static AdjustWindowRect(lpRect: LPRECT, dwStyle: DWORD, bMenu: BOOL): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-adjustwindowrectex
  public static AdjustWindowRectEx(lpRect: LPRECT, dwStyle: DWORD, bMenu: BOOL, dwExStyle: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-adjustwindowrectexfordpi
  public static AdjustWindowRectExForDpi(lpRect: LPRECT, dwStyle: DWORD, bMenu: BOOL, dwExStyle: DWORD, dpi: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-allowsetforegroundwindow
  public static AllowSetForegroundWindow(dwProcessId: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-animatewindow
  public static AnimateWindow(hWnd: HWND, dwTime: DWORD, dwFlags: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-anypopup
  public static AnyPopup(): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-appendmenuw
  public static AppendMenuW(hMenu: HMENU, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCWSTR): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-aredpiawarenesscontextsequal
  public static AreDpiAwarenessContextsEqual(dpiContextA: DPI_AWARENESS_CONTEXT, dpiContextB: DPI_AWARENESS_CONTEXT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-arrangeiconicwindows
  public static ArrangeIconicWindows(hWnd: HWND): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-attachthreadinput
  public static AttachThreadInput(idAttach: DWORD, idAttachTo: DWORD, fAttach: BOOL): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-begindeferwindowpos
  public static BeginDeferWindowPos(nNumWindows: INT): HDWP {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-beginpaint
  public static BeginPaint(hWnd: HWND, lpPaint: LPPAINTSTRUCT): HDC {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-blockinput
  public static BlockInput(fBlockIt: BOOL): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-bringwindowtotop
  public static BringWindowToTop(hWnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-broadcastsystemmessageexw
  public static BroadcastSystemMessageExW(flags: DWORD, lpInfo: LPDWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM, pbsmInfo: PBSMINFO): LONG {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-broadcastsystemmessagew
  public static BroadcastSystemMessageW(flags: DWORD, lpInfo: LPDWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM): LONG {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-calculatepopupwindowposition
  public static CalculatePopupWindowPosition(anchorPoint: LPPOINT, windowSize: SIZE, flags: UINT, excludeRect: LPRECT, popupWindowPosition: LPRECT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-callmsgfilterw
  public static CallMsgFilterW(lpMsg: LPMSG, nCode: INT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-callnexthookex
  public static CallNextHookEx(hhk: HHOOK, nCode: INT, wParam: WPARAM, lParam: LPARAM): LRESULT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-callwindowprocw
  public static CallWindowProcW(lpPrevWndFunc: WNDPROC, hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM): LRESULT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-cascadewindows
  public static CascadeWindows(hwndParent: HWND, wHow: UINT, lpRect: LPRECT, cKids: UINT, lpKids: HWND): WORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-changeclipboardchain
  public static ChangeClipboardChain(hWndRemove: HWND, hWndNewNext: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-changedisplaysettingsexw
  public static ChangeDisplaySettingsExW(lpszDeviceName: LPCWSTR, lpDevMode: DEVMODEW, hwnd: HWND, dwflags: DWORD, lParam: LPVOID): LONG {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-changedisplaysettingsw
  public static ChangeDisplaySettingsW(lpDevMode: DEVMODEW, dwFlags: DWORD): LONG {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-changewindowmessagefilter
  public static ChangeWindowMessageFilter(message: UINT, dwFlag: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-changewindowmessagefilterex
  public static ChangeWindowMessageFilterEx(hwnd: HWND, message: UINT, action: DWORD, pChangeFilterStruct: PCHANGEFILTERSTRUCT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-charlowerbuffw
  public static CharLowerBuffW(lpsz: LPWSTR, cchLength: DWORD): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-charlowerw
  public static CharLowerW(lpsz: LPWSTR): LPWSTR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-charnextw
  public static CharNextW(lpsz: LPCWSTR): LPWSTR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-charprevw
  public static CharPrevW(lpszStart: LPCWSTR, lpszCurrent: LPCWSTR): LPWSTR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-chartooembuffw
  public static CharToOemBuffW(lpszSrc: LPCWSTR, lpszDst: LPSTR, cchDstLength: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-chartooemw
  public static CharToOemW(pSrc: LPCWSTR, pDst: LPSTR): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-charupperbuffw
  public static CharUpperBuffW(lpsz: LPWSTR, cchLength: DWORD): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-charupperw
  public static CharUpperW(lpsz: LPWSTR): LPWSTR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-checkdlgbutton
  public static CheckDlgButton(hDlg: HWND, nIDButton: INT, uCheck: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-checkmenuitem
  public static CheckMenuItem(hMenu: HMENU, uIDCheckItem: UINT, uCheck: UINT): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-checkmenuradioitem
  public static CheckMenuRadioItem(hmenu: HMENU, first: UINT, last: UINT, check: UINT, flags: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-checkradiobutton
  public static CheckRadioButton(hDlg: HWND, nIDFirstButton: INT, nIDLastButton: INT, nIDCheckButton: INT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-childwindowfrompoint
  public static ChildWindowFromPoint(hWndParent: HWND, Point: LPPOINT): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-childwindowfrompointex
  public static ChildWindowFromPointEx(hwnd: HWND, pt: LPPOINT, flags: UINT): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-clienttoscreen
  public static ClientToScreen(hWnd: HWND, lpPoint: LPPOINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-clipcursor
  public static ClipCursor(lpRect: LPRECT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-closeclipboard
  public static CloseClipboard(): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-closedesktop
  public static CloseDesktop(hDesktop: HDESK): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-closegestureinfohandle
  public static CloseGestureInfoHandle(hGestureInfo: HGESTUREINFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-closetouchinputhandle
  public static CloseTouchInputHandle(hTouchInput: HTOUCHINPUT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-closewindow
  public static CloseWindow(hWnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-closewindowstation
  public static CloseWindowStation(hWinSta: HWINSTA): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-copyacceleratortablew
  public static CopyAcceleratorTableW(hAccelSrc: HACCEL, lpAccelDst: LPACCEL, cAccelEntries: INT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-copyicon
  public static CopyIcon(hIcon: HICON): HICON {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-copyimage
  public static CopyImage(h: HANDLE, type: UINT, cx: INT, cy: INT, flags: UINT): HANDLE {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-copyrect
  public static CopyRect(lprcDst: LPRECT, lprcSrc: LPRECT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-countclipboardformats
  public static CountClipboardFormats(): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-createacceleratortablew
  public static CreateAcceleratorTableW(paccel: LPACCEL, cAccel: INT): HACCEL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-createcaret
  public static CreateCaret(hWnd: HWND, hBitmap: HBITMAP, nWidth: INT, nHeight: INT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-createcursor
  public static CreateCursor(hInst: HINSTANCE, xHotSpot: INT, yHotSpot: INT, nWidth: INT, nHeight: INT, pvANDPlane: PBYTE, pvXORPlane: PBYTE): HCURSOR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-createdesktopexw
  public static CreateDesktopExW(lpszDesktop: LPCWSTR, lpszDevice: LPCWSTR, pDevmode: DEVMODEW, dwFlags: DWORD, dwDesiredAccess: ACCESS_MASK, lpsa: LPSECURITY_ATTRIBUTES, ulHeapSize: ULONG, pvoid: PVOID): HDESK {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-createdesktopw
  public static CreateDesktopW(lpszDesktop: LPCWSTR, lpszDevice: LPCWSTR, pDevmode: DEVMODEW, dwFlags: DWORD, dwDesiredAccess: ACCESS_MASK, lpsa: LPSECURITY_ATTRIBUTES): HDESK {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-createdialogindirectparamw
  public static CreateDialogIndirectParamW(hInstance: HINSTANCE, lpTemplate: LPCDLGTEMPLATEW, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-createdialogparamw
  public static CreateDialogParamW(hInstance: HINSTANCE, lpTemplateName: LPCWSTR, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-createicon
  public static CreateIcon(hInstance: HINSTANCE, nWidth: INT, nHeight: INT, cPlanes: BYTE, cBitsPixel: BYTE, lpbANDbits: BYTE, lpbXORbits: BYTE): HICON {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-createiconfromresource
  public static CreateIconFromResource(presbits: PBYTE, dwResSize: DWORD, fIcon: BOOL, dwVer: DWORD): HICON {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-createiconfromresourceex
  public static CreateIconFromResourceEx(presbits: PBYTE, dwResSize: DWORD, fIcon: BOOL, dwVer: DWORD, cxDesired: INT, cyDesired: INT, Flags: UINT): HICON {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-createiconindirect
  public static CreateIconIndirect(piconinfo: PICONINFO): HICON {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-createmdiwindoww
  public static CreateMDIWindowW(lpClassName: LPCWSTR, lpWindowName: LPCWSTR, dwStyle: DWORD, X: INT, Y: INT, nWidth: INT, nHeight: INT, hWndParent: HWND, hInstance: HINSTANCE, lParam: LPARAM): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-createmenu
  public static CreateMenu(): HMENU {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-createpopupmenu
  public static CreatePopupMenu(): HMENU {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-createsyntheticpointerdevice
  public static CreateSyntheticPointerDevice(pointerType: POINTER_INPUT_TYPE, maxCount: ULONG, mode: POINTER_FEEDBACK_MODE): HSYNTHETICPOINTERDEVICE {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-createwindowexw
  public static CreateWindowExW(dwExStyle: DWORD, lpClassName: LPCWSTR, lpWindowName: LPCWSTR, dwStyle: DWORD, X: INT, Y: INT, nWidth: INT, nHeight: INT, hWndParent: HWND, hMenu: HMENU, hInstance: HINSTANCE, lpParam: LPVOID): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-createwindowstationw
  public static CreateWindowStationW(lpwinsta: LPCWSTR, dwFlags: DWORD, dwDesiredAccess: ACCESS_MASK, lpsa: LPSECURITY_ATTRIBUTES): HWINSTA {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddeabandontransaction
  public static DdeAbandonTransaction(idInst: DWORD, hConv: HCONV, idTransaction: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddeaccessdata
  public static DdeAccessData(hData: HDDEDATA, pcbDataSize: LPDWORD): LPBYTE {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddeclienttransaction
  public static DdeClientTransaction(pData: LPBYTE, cbData: DWORD, hConv: HCONV, hszItem: HSZ, wFmt: UINT, wType: UINT, dwTimeout: DWORD, pdwResult: LPDWORD): HDDEDATA {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddecmpstringhandles
  public static DdeCmpStringHandles(hsz1: HSZ, hsz2: HSZ): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddeconnect
  public static DdeConnect(idInst: DWORD, hszService: HSZ, hszTopic: HSZ, pCC: PCONVCONTEXT): HCONV {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddeconnectlist
  public static DdeConnectList(idInst: DWORD, hszService: HSZ, hszTopic: HSZ, hConvList: HCONVLIST, pCC: PCONVCONTEXT): HCONVLIST {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddecreatedatahandle
  public static DdeCreateDataHandle(idInst: DWORD, pSrc: LPBYTE, cb: DWORD, cbOff: DWORD, hszItem: HSZ, wFmt: UINT, afCmd: UINT): HDDEDATA {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddecreatestringhandlew
  public static DdeCreateStringHandleW(idInst: DWORD, psz: LPCWSTR, iCodePage: INT): HSZ {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddedisconnect
  public static DdeDisconnect(hConv: HCONV): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddedisconnectlist
  public static DdeDisconnectList(hConvList: HCONVLIST): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddeenablecallback
  public static DdeEnableCallback(idInst: DWORD, hConv: HCONV, wCmd: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddefreedatahandle
  public static DdeFreeDataHandle(hData: HDDEDATA): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddefreestringhandle
  public static DdeFreeStringHandle(idInst: DWORD, hsz: HSZ): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddegetdata
  public static DdeGetData(hData: HDDEDATA, pDst: LPBYTE, cbMax: DWORD, cbOff: DWORD): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddegetlasterror
  public static DdeGetLastError(idInst: DWORD): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddeimpersonateclient
  public static DdeImpersonateClient(hConv: HCONV): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddeinitializew
  public static DdeInitializeW(pidInst: LPDWORD, pfnCallback: PFNCALLBACK, afCmd: DWORD, ulRes: DWORD): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddekeepstringhandle
  public static DdeKeepStringHandle(idInst: DWORD, hsz: HSZ): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddequeryconvinfo
  public static DdeQueryConvInfo(hConv: HCONV, idTransaction: DWORD, pConvInfo: PCONVINFO): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddequerynextserver
  public static DdeQueryNextServer(hConvList: HCONVLIST, hConvPrev: HCONV): HCONV {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddequerystringw
  public static DdeQueryStringW(idInst: DWORD, hsz: HSZ, psz: LPWSTR, cchMax: DWORD, iCodePage: INT): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddeunaccessdata
  public static DdeUnaccessData(hData: HDDEDATA): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/ddeml/nf-ddeml-ddeuninitialize
  public static DdeUninitialize(idInst: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-defdlgprocw
  public static DefDlgProcW(hDlg: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM): LRESULT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-deferwindowpos
  public static DeferWindowPos(hWinPosInfo: HDWP, hWnd: HWND, hWndInsertAfter: HWND, x: INT, y: INT, cx: INT, cy: INT, uFlags: UINT): HDWP {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-defframeprocw
  public static DefFrameProcW(hWnd: HWND, hWndMDIClient: HWND, uMsg: UINT, wParam: WPARAM, lParam: LPARAM): LRESULT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-defmdichildprocw
  public static DefMDIChildProcW(hWnd: HWND, uMsg: UINT, wParam: WPARAM, lParam: LPARAM): LRESULT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-defrawinputproc
  public static DefRawInputProc(paRawInput: PRAWINPUT, nInput: INT, cbSizeHeader: UINT): LRESULT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-defwindowprocw
  public static DefWindowProcW(hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM): LRESULT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-deletemenu
  public static DeleteMenu(hMenu: HMENU, uPosition: UINT, uFlags: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-deregistershellhookwindow
  public static DeregisterShellHookWindow(hwnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-destroyacceleratortable
  public static DestroyAcceleratorTable(hAccel: HACCEL): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-destroycaret
  public static DestroyCaret(): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-destroycursor
  public static DestroyCursor(hCursor: HCURSOR): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-destroyicon
  public static DestroyIcon(hIcon: HICON): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-destroymenu
  public static DestroyMenu(hMenu: HMENU): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-destroysyntheticpointerdevice
  public static DestroySyntheticPointerDevice(device: HSYNTHETICPOINTERDEVICE): VOID {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-destroywindow
  public static DestroyWindow(hWnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-dialogboxindirectparamw
  public static DialogBoxIndirectParamW(hInstance: HINSTANCE, hDialogTemplate: LPCDLGTEMPLATEW, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM): INT_PTR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-dialogboxparamw
  public static DialogBoxParamW(hInstance: HINSTANCE, lpTemplateName: LPCWSTR, hWndParent: HWND, lpDialogFunc: DLGPROC, dwInitParam: LPARAM): INT_PTR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-disableprocesswindowsghosting
  public static DisableProcessWindowsGhosting(): VOID {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-dispatchmessagew
  public static DispatchMessageW(lpMsg: LPMSG): LRESULT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-displayconfiggetdeviceinfo
  public static DisplayConfigGetDeviceInfo(requestPacket: DISPLAYCONFIG_DEVICE_INFO_HEADER): LONG {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-displayconfigsetdeviceinfo
  public static DisplayConfigSetDeviceInfo(setPacket: DISPLAYCONFIG_DEVICE_INFO_HEADER): LONG {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-dlgdirlistcomboboxw
  public static DlgDirListComboBoxW(hDlg: HWND, lpPathSpec: LPWSTR, nIDComboBox: INT, nIDStaticPath: INT, uFiletype: UINT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-dlgdirlistw
  public static DlgDirListW(hDlg: HWND, lpPathSpec: LPWSTR, nIDListBox: INT, nIDStaticPath: INT, uFileType: UINT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-dlgdirselectcomboboxexw
  public static DlgDirSelectComboBoxExW(hwndDlg: HWND, lpString: LPWSTR, cchOut: INT, idComboBox: INT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-dlgdirselectexw
  public static DlgDirSelectExW(hwndDlg: HWND, lpString: LPWSTR, chCount: INT, idListBox: INT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-dragdetect
  public static DragDetect(hwnd: HWND, pt: LPPOINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-drawanimatedrects
  public static DrawAnimatedRects(hwnd: HWND, idAni: INT, lprcFrom: LPRECT, lprcTo: LPRECT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-drawcaption
  public static DrawCaption(hwnd: HWND, hdc: HDC, lprect: LPRECT, flags: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-drawedge
  public static DrawEdge(hdc: HDC, qrc: LPRECT, edge: UINT, grfFlags: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-drawfocusrect
  public static DrawFocusRect(hDC: HDC, lprc: LPRECT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-drawframecontrol
  public static DrawFrameControl(hdc: HDC, lprc: LPRECT, uType: UINT, uState: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-drawicon
  public static DrawIcon(hDC: HDC, X: INT, Y: INT, hIcon: HICON): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-drawiconex
  public static DrawIconEx(hdc: HDC, xLeft: INT, yTop: INT, hIcon: HICON, cxWidth: INT, cyWidth: INT, istepIfAniCur: UINT, hbrFlickerFreeDraw: HBRUSH, diFlags: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-drawmenubar
  public static DrawMenuBar(hWnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-drawstatew
  public static DrawStateW(hdc: HDC, hbrFore: HBRUSH, qfnCallBack: DRAWSTATEPROC, lData: LPARAM, wData: WPARAM, x: INT, y: INT, cx: INT, cy: INT, uFlags: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-drawtextexw
  public static DrawTextExW(hdc: HDC, lpchText: LPWSTR, cchText: INT, lprc: LPRECT, format: UINT, lpdtp: LPDRAWTEXTPARAMS): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-drawtextw
  public static DrawTextW(hdc: HDC, lpchText: LPCWSTR, cchText: INT, lprc: LPRECT, format: UINT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-emptyclipboard
  public static EmptyClipboard(): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-enablemenuitem
  public static EnableMenuItem(hMenu: HMENU, uIDEnableItem: UINT, uEnable: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-enablemouseinpointer
  public static EnableMouseInPointer(fEnable: BOOL): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-enablenonclientdpiscaling
  public static EnableNonClientDpiScaling(hwnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-enablescrollbar
  public static EnableScrollBar(hWnd: HWND, wSBflags: UINT, wArrows: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-enablewindow
  public static EnableWindow(hWnd: HWND, bEnable: BOOL): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-enddeferwindowpos
  public static EndDeferWindowPos(hWinPosInfo: HDWP): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-enddialog
  public static EndDialog(hDlg: HWND, nResult: INT_PTR): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-endmenu
  public static EndMenu(): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-endpaint
  public static EndPaint(hWnd: HWND, lpPaint: PAINTSTRUCT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-endtask
  public static EndTask(hWnd: HWND, fShutDown: BOOL, fForce: BOOL): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-enumchildwindows
  public static EnumChildWindows(hWndParent: HWND, lpEnumFunc: WNDENUMPROC, lParam: LPARAM): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-enumclipboardformats
  public static EnumClipboardFormats(format: UINT): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-enumdesktopsw
  public static EnumDesktopsW(hwinsta: HWINSTA, lpEnumFunc: DESKTOPENUMPROCW, lParam: LPARAM): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-enumdesktopwindows
  public static EnumDesktopWindows(hDesktop: HDESK, lpfn: WNDENUMPROC, lParam: LPARAM): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-enumdisplaydevicesw
  public static EnumDisplayDevicesW(lpDevice: LPCWSTR, iDevNum: DWORD, lpDisplayDevice: PDISPLAY_DEVICEW, dwFlags: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-enumdisplaymonitors
  public static EnumDisplayMonitors(hdc: HDC, lprcClip: LPCRECT, lpfnEnum: MONITORENUMPROC, dwData: LPARAM): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-enumdisplaysettingsexw
  public static EnumDisplaySettingsExW(lpszDeviceName: LPCWSTR, iModeNum: DWORD, lpDevMode: DEVMODEW, dwFlags: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-enumdisplaysettingsw
  public static EnumDisplaySettingsW(lpszDeviceName: LPCWSTR, iModeNum: DWORD, lpDevMode: DEVMODEW): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-enumpropsa
  public static EnumPropsA(hWnd: HWND, lpEnumFunc: PROPENUMPROCA): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-enumpropsexa
  public static EnumPropsExA(hWnd: HWND, lpEnumFunc: PROPENUMPROCEXA, lParam: LPARAM): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-enumpropsexw
  public static EnumPropsExW(hWnd: HWND, lpEnumFunc: PROPENUMPROCEXW, lParam: LPARAM): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-enumpropsw
  public static EnumPropsW(hWnd: HWND, lpEnumFunc: PROPENUMPROCW): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-enumthreadwindows
  public static EnumThreadWindows(dwThreadId: DWORD, lpfn: WNDENUMPROC, lParam: LPARAM): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-enumwindows
  public static EnumWindows(lpEnumFunc: WNDENUMPROC, lParam: LPARAM): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-enumwindowstationsw
  public static EnumWindowStationsW(lpEnumFunc: WINSTAENUMPROCW, lParam: LPARAM): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-equalrect
  public static EqualRect(lprc1: LPRECT, lprc2: LPRECT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-evaluateproximitytopolygon
  public static EvaluateProximityToPolygon(numVertices: UINT32, controlPolygon: LPPOINT, pHitTestingInput: TOUCH_HIT_TESTING_INPUT, pProximityEval: TOUCH_HIT_TESTING_PROXIMITY_EVALUATION): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-evaluateproximitytorect
  public static EvaluateProximityToRect(controlBoundingBox: LPRECT, pHitTestingInput: TOUCH_HIT_TESTING_INPUT, pProximityEval: TOUCH_HIT_TESTING_PROXIMITY_EVALUATION): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-excludeupdatergn
  public static ExcludeUpdateRgn(hDC: HDC, hWnd: HWND): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-exitwindowsex
  public static ExitWindowsEx(uFlags: UINT, dwReason: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-fillrect
  public static FillRect(hDC: HDC, lprc: LPRECT, hbr: HBRUSH): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-findwindowexw
  public static FindWindowExW(hWndParent: HWND, hWndChildAfter: HWND, lpszClass: LPCWSTR, lpszWindow: LPCWSTR): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-findwindoww
  public static FindWindowW(lpClassName: LPCWSTR, lpWindowName: LPCWSTR): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-flashwindow
  public static FlashWindow(hWnd: HWND, bInvert: BOOL): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-flashwindowex
  public static FlashWindowEx(pfwi: PFLASHWINFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-framerect
  public static FrameRect(hDC: HDC, lprc: LPRECT, hbr: HBRUSH): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getactivewindow
  public static GetActiveWindow(): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getalttabinfow
  public static GetAltTabInfoW(hwnd: HWND, iItem: INT, pati: PALTTABINFO, pszItemText: LPWSTR, cchItemText: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getancestor
  public static GetAncestor(hwnd: HWND, gaFlags: UINT): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getasynckeystate
  public static GetAsyncKeyState(vKey: INT): SHORT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getautorotationstate
  public static GetAutoRotationState(pState: PAR_STATE): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getawarenessfromdpiawarenesscontext
  public static GetAwarenessFromDpiAwarenessContext(value: DPI_AWARENESS_CONTEXT): DPI_AWARENESS {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getcapture
  public static GetCapture(): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getcaretblinktime
  public static GetCaretBlinkTime(): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getcaretpos
  public static GetCaretPos(lpPoint: LPPOINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getclassinfoexw
  public static GetClassInfoExW(hInstance: HINSTANCE, lpszClass: LPCWSTR, lpwcx: LPWNDCLASSEXW): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getclassinfow
  public static GetClassInfoW(hInstance: HINSTANCE, lpClassName: LPCWSTR, lpWndClass: LPWNDCLASSW): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getclasslongptrw
  public static GetClassLongPtrW(hWnd: HWND, nIndex: INT): ULONG_PTR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getclasslongw
  public static GetClassLongW(hWnd: HWND, nIndex: INT): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getclassnamew
  public static GetClassNameW(hWnd: HWND, lpClassName: LPWSTR, nMaxCount: INT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getclassword
  public static GetClassWord(hWnd: HWND, nIndex: INT): WORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getclientrect
  public static GetClientRect(hWnd: HWND, lpRect: LPRECT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getclipboarddata
  public static GetClipboardData(uFormat: UINT): HANDLE {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getclipboardformatnamew
  public static GetClipboardFormatNameW(format: UINT, lpszFormatName: LPWSTR, cchMaxCount: INT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getclipboardowner
  public static GetClipboardOwner(): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getclipboardsequencenumber
  public static GetClipboardSequenceNumber(): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getclipboardviewer
  public static GetClipboardViewer(): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getclipcursor
  public static GetClipCursor(lpRect: LPRECT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getcomboboxinfo
  public static GetComboBoxInfo(hwndCombo: HWND, pcbi: PCOMBOBOXINFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getcurrentinputmessagesource
  public static GetCurrentInputMessageSource(inputMessageSource: INPUT_MESSAGE_SOURCE): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getcursor
  public static GetCursor(): HCURSOR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getcursorinfo
  public static GetCursorInfo(pci: PCURSORINFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getcursorpos
  public static GetCursorPos(lpPoint: LPPOINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getdc
  public static GetDC(hWnd: HWND): HDC {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getdcex
  public static GetDCEx(hWnd: HWND, hrgnClip: HRGN, flags: DWORD): HDC {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getdesktopwindow
  public static GetDesktopWindow(): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getdialogbaseunits
  public static GetDialogBaseUnits(): LONG {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getdialogcontroldpichangebehavior
  public static GetDialogControlDpiChangeBehavior(hWnd: HWND): DIALOG_CONTROL_DPI_CHANGE_BEHAVIORS {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getdialogdpichangebehavior
  public static GetDialogDpiChangeBehavior(hDlg: HWND): DIALOG_DPI_CHANGE_BEHAVIORS {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getdisplayautorotationpreferences
  public static GetDisplayAutoRotationPreferences(pOrientation: ORIENTATION_PREFERENCE): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getdisplayconfigbuffersizes
  public static GetDisplayConfigBufferSizes(flags: UINT32, numPathArrayElements: PUINT, numModeInfoArrayElements: PUINT): LONG {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getdlgctrlid
  public static GetDlgCtrlID(hWnd: HWND): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getdlgitem
  public static GetDlgItem(hDlg: HWND, nIDDlgItem: INT): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getdlgitemint
  public static GetDlgItemInt(hDlg: HWND, nIDDlgItem: INT, lpTranslated: BOOL, bSigned: BOOL): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getdlgitemtextw
  public static GetDlgItemTextW(hDlg: HWND, nIDDlgItem: INT, lpString: LPWSTR, cchMax: INT): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getdoubleclicktime
  public static GetDoubleClickTime(): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getdpiforsystem
  public static GetDpiForSystem(): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getdpiforwindow
  public static GetDpiForWindow(hwnd: HWND): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getdpifromdpiawarenesscontext
  public static GetDpiFromDpiAwarenessContext(value: DPI_AWARENESS_CONTEXT): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getfocus
  public static GetFocus(): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getforegroundwindow
  public static GetForegroundWindow(): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getgestureconfig
  public static GetGestureConfig(hwnd: HWND, dwReserved: DWORD, dwFlags: DWORD, pcIDs: PUINT, pGestureConfig: PGESTURECONFIG, cbSize: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getgestureextraargs
  public static GetGestureExtraArgs(hGestureInfo: HGESTUREINFO, cbExtraArgs: UINT, pExtraArgs: PBYTE): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getgestureinfo
  public static GetGestureInfo(hGestureInfo: HGESTUREINFO, pGestureInfo: PGESTUREINFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getguiresources
  public static GetGuiResources(hProcess: HANDLE, uiFlags: DWORD): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getguithreadinfo
  public static GetGUIThreadInfo(idThread: DWORD, pgui: PGUITHREADINFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-geticoninfo
  public static GetIconInfo(hIcon: HICON, piconinfo: PICONINFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-geticoninfoexw
  public static GetIconInfoExW(hicon: HICON, piconinfo: PICONINFOEXW): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getinputstate
  public static GetInputState(): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getkeyboardlayout
  public static GetKeyboardLayout(idThread: DWORD): HKL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getkeyboardlayoutlist
  public static GetKeyboardLayoutList(nBuff: INT, lpList: HKL): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getkeyboardlayoutnamew
  public static GetKeyboardLayoutNameW(pwszKLID: LPWSTR): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getkeyboardstate
  public static GetKeyboardState(lpKeyState: PBYTE): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getkeyboardtype
  public static GetKeyboardType(nTypeFlag: INT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getkeynametextw
  public static GetKeyNameTextW(lParam: LONG, lpString: LPWSTR, cchSize: INT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getkeystate
  public static GetKeyState(nVirtKey: INT): SHORT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getlastactivepopup
  public static GetLastActivePopup(hWnd: HWND): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getlastinputinfo
  public static GetLastInputInfo(plii: PLASTINPUTINFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getlayeredwindowattributes
  public static GetLayeredWindowAttributes(hwnd: HWND, pcrKey: LPDWORD, pbAlpha: LPBYTE, pdwFlags: LPDWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getlistboxinfo
  public static GetListBoxInfo(hwnd: HWND): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getmenu
  public static GetMenu(hWnd: HWND): HMENU {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getmenubarinfo
  public static GetMenuBarInfo(hwnd: HWND, idObject: LONG, idItem: LONG, pmbi: PMENUBARINFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getmenucheckmarkdimensions
  public static GetMenuCheckMarkDimensions(): LONG {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getmenucontexthelpid
  public static GetMenuContextHelpId(unnamedParam1: HMENU): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getmenudefaultitem
  public static GetMenuDefaultItem(hMenu: HMENU, fByPos: UINT, gmdiFlags: UINT): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getmenuinfo
  public static GetMenuInfo(unnamedParam1: HMENU, unnamedParam2: LPMENUINFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getmenuitemcount
  public static GetMenuItemCount(hMenu: HMENU): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getmenuitemid
  public static GetMenuItemID(hMenu: HMENU, nPos: INT): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getmenuiteminfow
  public static GetMenuItemInfoW(hmenu: HMENU, item: UINT, fByPosition: BOOL, lpmii: LPMENUITEMINFOW): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getmenuitemrect
  public static GetMenuItemRect(hWnd: HWND, hMenu: HMENU, uItem: UINT, lprcItem: LPRECT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getmenustate
  public static GetMenuState(hMenu: HMENU, uId: UINT, uFlags: UINT): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getmenustringw
  public static GetMenuStringW(hMenu: HMENU, uIDItem: UINT, lpString: LPWSTR, cchMax: INT, flags: UINT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getmessageextrainfo
  public static GetMessageExtraInfo(): LPARAM {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getmessagepos
  public static GetMessagePos(): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getmessagetime
  public static GetMessageTime(): LONG {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getmessagew
  public static GetMessageW(lpMsg: LPMSG, hWnd: HWND, wMsgFilterMin: UINT, wMsgFilterMax: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getmonitorinfow
  public static GetMonitorInfoW(hMonitor: HMONITOR, lpmi: LPMONITORINFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getmousemovepointsex
  public static GetMouseMovePointsEx(cbSize: UINT, lppt: LPMOUSEMOVEPOINT, lpptBuf: LPMOUSEMOVEPOINT, nBufPoints: INT, resolution: DWORD): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getnextdlggroupitem
  public static GetNextDlgGroupItem(hDlg: HWND, hCtl: HWND, bPrevious: BOOL): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getnextdlgtabitem
  public static GetNextDlgTabItem(hDlg: HWND, hCtl: HWND, bPrevious: BOOL): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getopenclipboardwindow
  public static GetOpenClipboardWindow(): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getparent
  public static GetParent(hWnd: HWND): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getphysicalcursorpos
  public static GetPhysicalCursorPos(lpPoint: LPPOINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getpointercursorid
  public static GetPointerCursorId(pointerId: UINT32, cursorId: UINT32): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getpointerdevice
  public static GetPointerDevice(device: HANDLE, pointerDevice: POINTER_DEVICE_INFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getpointerdevicecursors
  public static GetPointerDeviceCursors(device: HANDLE, cursorCount: UINT32, deviceCursors: POINTER_DEVICE_CURSOR_INFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getpointerdeviceproperties
  public static GetPointerDeviceProperties(device: HANDLE, propertyCount: UINT32, pointerProperties: POINTER_DEVICE_PROPERTY): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getpointerdevicerects
  public static GetPointerDeviceRects(device: HANDLE, pointerDeviceRect: LPRECT, displayRect: LPRECT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getpointerdevices
  public static GetPointerDevices(deviceCount: UINT32, pointerDevices: POINTER_DEVICE_INFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getpointerframeinfo
  public static GetPointerFrameInfo(pointerId: UINT32, pointerCount: UINT32, pointerInfo: POINTER_INFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getpointerframeinfohistory
  public static GetPointerFrameInfoHistory(pointerId: UINT32, entriesCount: UINT32, pointerCount: UINT32, pointerInfo: POINTER_INFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getpointerframepeninfo
  public static GetPointerFramePenInfo(pointerId: UINT32, pointerCount: UINT32, penInfo: POINTER_PEN_INFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getpointerframepeninfohistory
  public static GetPointerFramePenInfoHistory(pointerId: UINT32, entriesCount: UINT32, pointerCount: UINT32, penInfo: POINTER_PEN_INFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getpointerframetouchinfo
  public static GetPointerFrameTouchInfo(pointerId: UINT32, pointerCount: UINT32, touchInfo: POINTER_TOUCH_INFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getpointerframetouchinfohistory
  public static GetPointerFrameTouchInfoHistory(pointerId: UINT32, entriesCount: UINT32, pointerCount: UINT32, touchInfo: POINTER_TOUCH_INFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getpointerinfo
  public static GetPointerInfo(pointerId: UINT32, pointerInfo: POINTER_INFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getpointerinfohistory
  public static GetPointerInfoHistory(pointerId: UINT32, entriesCount: UINT32, pointerInfo: POINTER_INFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getpointerinputtransform
  public static GetPointerInputTransform(pointerId: UINT32, historyCount: UINT32, inputTransform: INPUT_TRANSFORM): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getpointerpeninfo
  public static GetPointerPenInfo(pointerId: UINT32, penInfo: POINTER_PEN_INFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getpointertouchinfo
  public static GetPointerTouchInfo(pointerId: UINT32, touchInfo: POINTER_TOUCH_INFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getpointertype
  public static GetPointerType(pointerId: UINT32, pointerType: POINTER_INPUT_TYPE): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getpriorityclipboardformat
  public static GetPriorityClipboardFormat(paFormatPriorityList: UINT, cFormats: INT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getprocessdefaultlayout
  public static GetProcessDefaultLayout(pdwDefaultLayout: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getprocesswindowstation
  public static GetProcessWindowStation(): HWINSTA {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getpropa
  public static GetPropA(hWnd: HWND, lpString: LPCSTR): HANDLE {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getpropw
  public static GetPropW(hWnd: HWND, lpString: LPCWSTR): HANDLE {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getqueuestatus
  public static GetQueueStatus(flags: UINT): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getrawinputbuffer
  public static GetRawInputBuffer(pData: PRAWINPUT, pcbSize: PUINT, cbSizeHeader: UINT): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getrawinputdata
  public static GetRawInputData(hRawInput: HRAWINPUT, uiCommand: UINT, pData: LPVOID, pcbSize: PUINT, cbSizeHeader: UINT): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getrawinputdeviceinfow
  public static GetRawInputDeviceInfoW(hDevice: HANDLE, uiCommand: UINT, pData: LPVOID, pcbSize: PUINT): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getrawinputdevicelist
  public static GetRawInputDeviceList(pRawInputDeviceList: PRAWINPUTDEVICELIST, puiNumDevices: PUINT, cbSize: UINT): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getrawpointerdevicedata
  public static GetRawPointerDeviceData(pointerId: UINT32, historyCount: UINT32, propertiesCount: UINT32, pProperties: POINTER_DEVICE_PROPERTY, pValues: LPINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getregisteredrawinputdevices
  public static GetRegisteredRawInputDevices(pRawInputDevices: PRAWINPUTDEVICE, puiNumDevices: PUINT, cbSize: UINT): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getscrollbarinfo
  public static GetScrollBarInfo(hwnd: HWND, idObject: LONG, psbi: PSCROLLBARINFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getscrollinfo
  public static GetScrollInfo(hwnd: HWND, nBar: INT, lpsi: LPSCROLLINFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getscrollpos
  public static GetScrollPos(hWnd: HWND, nBar: INT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getscrollrange
  public static GetScrollRange(hWnd: HWND, nBar: INT, lpMinPos: LPINT, lpMaxPos: LPINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getshellwindow
  public static GetShellWindow(): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getsubmenu
  public static GetSubMenu(hMenu: HMENU, nPos: INT): HMENU {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getsyscolor
  public static GetSysColor(nIndex: INT): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getsyscolorbrush
  public static GetSysColorBrush(nIndex: INT): HBRUSH {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getsystemdpiforprocess
  public static GetSystemDpiForProcess(hProcess: HANDLE): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getsystemmenu
  public static GetSystemMenu(hWnd: HWND, bRevert: BOOL): HMENU {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getsystemmetrics
  public static GetSystemMetrics(nIndex: INT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getsystemmetricsfordpi
  public static GetSystemMetricsForDpi(nIndex: INT, dpi: UINT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-gettabbedtextextentw
  public static GetTabbedTextExtentW(hdc: HDC, lpString: LPCWSTR, chCount: INT, nTabPositions: INT, lpnTabStopPositions: LPINT): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getthreaddesktop
  public static GetThreadDesktop(dwThreadId: DWORD): HDESK {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getthreaddpiawarenesscontext
  public static GetThreadDpiAwarenessContext(): DPI_AWARENESS_CONTEXT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getthreaddpihostingbehavior
  public static GetThreadDpiHostingBehavior(): DPI_HOSTING_BEHAVIOR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-gettitlebarinfo
  public static GetTitleBarInfo(hwnd: HWND, pti: PTITLEBARINFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-gettopwindow
  public static GetTopWindow(hWnd: HWND): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-gettouchinputinfo
  public static GetTouchInputInfo(hTouchInput: HTOUCHINPUT, cInputs: UINT, pInputs: PTOUCHINPUT, cbSize: INT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getunpredictedmessagepos
  public static GetUnpredictedMessagePos(): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getupdatedclipboardformats
  public static GetUpdatedClipboardFormats(lpuiFormats: PUINT, cFormats: UINT, pcFormatsOut: PUINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getupdaterect
  public static GetUpdateRect(hWnd: HWND, lpRect: LPRECT, bErase: BOOL): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getupdatergn
  public static GetUpdateRgn(hWnd: HWND, hRgn: HRGN, bErase: BOOL): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getuserobjectinformationw
  public static GetUserObjectInformationW(hObj: HANDLE, nIndex: INT, pvInfo: PVOID, nLength: DWORD, lpnLengthNeeded: LPDWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getuserobjectsecurity
  public static GetUserObjectSecurity(hObj: HANDLE, pSIRequested: PSECURITY_INFORMATION, pSID: PSECURITY_DESCRIPTOR, nLength: DWORD, lpnLengthNeeded: LPDWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindow
  public static GetWindow(hWnd: HWND, uCmd: UINT): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowcontexthelpid
  public static GetWindowContextHelpId(unnamedParam1: HWND): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowdc
  public static GetWindowDC(hWnd: HWND): HDC {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowdisplayaffinity
  public static GetWindowDisplayAffinity(hWnd: HWND, pdwAffinity: LPDWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowdpiawarenesscontext
  public static GetWindowDpiAwarenessContext(hwnd: HWND): DPI_AWARENESS_CONTEXT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowdpihostingbehavior
  public static GetWindowDpiHostingBehavior(hwnd: HWND): DPI_HOSTING_BEHAVIOR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowfeedbacksetting
  public static GetWindowFeedbackSetting(hwnd: HWND, feedback: FEEDBACK_TYPE, dwFlags: DWORD, pSize: PUINT, config: PVOID): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowinfo
  public static GetWindowInfo(hwnd: HWND, pwi: PWINDOWINFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowlongptrw
  public static GetWindowLongPtrW(hWnd: HWND, nIndex: INT): LONG_PTR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowlongw
  public static GetWindowLongW(hWnd: HWND, nIndex: INT): LONG {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowmodulefilenamew
  public static GetWindowModuleFileNameW(hwnd: HWND, pszFileName: LPWSTR, cchFileNameMax: UINT): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowplacement
  public static GetWindowPlacement(hWnd: HWND, lpwndpl: WINDOWPLACEMENT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowrect
  public static GetWindowRect(hWnd: HWND, lpRect: LPRECT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowrgn
  public static GetWindowRgn(hWnd: HWND, hRgn: HRGN): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowrgnbox
  public static GetWindowRgnBox(hWnd: HWND, lprc: LPRECT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowtextlengthw
  public static GetWindowTextLengthW(hWnd: HWND): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowtextw
  public static GetWindowTextW(hWnd: HWND, lpString: LPWSTR, nMaxCount: INT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowthreadprocessid
  public static GetWindowThreadProcessId(hWnd: HWND, lpdwProcessId: LPDWORD): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowword
  public static GetWindowWord(hWnd: HWND, nIndex: INT): WORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-graystringw
  public static GrayStringW(hDC: HDC, hBrush: HBRUSH, lpOutputFunc: GRAYSTRINGPROC, lpData: LPARAM, nCount: INT, X: INT, Y: INT, nWidth: INT, nHeight: INT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-hidecaret
  public static HideCaret(hWnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-hilitemenuitem
  public static HiliteMenuItem(hWnd: HWND, hMenu: HMENU, uIDHiliteItem: UINT, uHilite: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-inflaterect
  public static InflateRect(lprc: LPRECT, dx: INT, dy: INT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-initializetouchinjection
  public static InitializeTouchInjection(maxCount: UINT32, dwMode: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-injectsyntheticpointerinput
  public static InjectSyntheticPointerInput(device: HSYNTHETICPOINTERDEVICE, pointerInfo: POINTER_TYPE_INFO, count: UINT32): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-injecttouchinput
  public static InjectTouchInput(count: UINT32, contacts: POINTER_TOUCH_INFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-insendmessage
  public static InSendMessage(): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-insendmessageex
  public static InSendMessageEx(lpReserved: LPVOID): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-insertmenuitemw
  public static InsertMenuItemW(hmenu: HMENU, item: UINT, fByPosition: BOOL, lpmi: LPCMENUITEMINFOW): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-insertmenuw
  public static InsertMenuW(hMenu: HMENU, uPosition: UINT, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCWSTR): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-intersectrect
  public static IntersectRect(lprcDst: LPRECT, lprcSrc1: LPRECT, lprcSrc2: LPRECT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-invalidaterect
  public static InvalidateRect(hWnd: HWND, lpRect: LPRECT, bErase: BOOL): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-invalidatergn
  public static InvalidateRgn(hWnd: HWND, hRgn: HRGN, bErase: BOOL): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-invertrect
  public static InvertRect(hDC: HDC, lprc: LPRECT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-ischaralphanumericw
  public static IsCharAlphaNumericW(ch: WCHAR): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-ischaralphaw
  public static IsCharAlphaW(ch: WCHAR): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-ischarlowerw
  public static IsCharLowerW(ch: WCHAR): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-ischarupperw
  public static IsCharUpperW(ch: WCHAR): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-ischild
  public static IsChild(hWndParent: HWND, hWnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-isclipboardformatavailable
  public static IsClipboardFormatAvailable(format: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-isdialogmessagew
  public static IsDialogMessageW(hDlg: HWND, lpMsg: LPMSG): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-isdlgbuttonchecked
  public static IsDlgButtonChecked(hDlg: HWND, nIDButton: INT): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-isguithread
  public static IsGUIThread(bConvert: BOOL): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-ishungappwindow
  public static IsHungAppWindow(hwnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-isiconic
  public static IsIconic(hWnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-isimmersiveprocess
  public static IsImmersiveProcess(hProcess: HANDLE): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-ismenu
  public static IsMenu(hMenu: HMENU): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-ismouseinpointerenabled
  public static IsMouseInPointerEnabled(): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-isprocessdpiaware
  public static IsProcessDPIAware(): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-isrectempty
  public static IsRectEmpty(lprc: LPRECT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-istouchwindow
  public static IsTouchWindow(hwnd: HWND, pulFlags: PULONG): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-isvaliddpiawarenesscontext
  public static IsValidDpiAwarenessContext(value: DPI_AWARENESS_CONTEXT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-iswindow
  public static IsWindow(hWnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-iswindowarranged
  public static IsWindowArranged(hwnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-iswindowenabled
  public static IsWindowEnabled(hWnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-iswindowunicode
  public static IsWindowUnicode(hWnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-iswindowvisible
  public static IsWindowVisible(hWnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-iswineventhookinstalled
  public static IsWinEventHookInstalled(event: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-iswow64message
  public static IsWow64Message(): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-iszoomed
  public static IsZoomed(hWnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-killtimer
  public static KillTimer(hWnd: HWND, uIDEvent: UINT_PTR): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-loadacceleratorsw
  public static LoadAcceleratorsW(hInstance: HINSTANCE, lpTableName: LPCWSTR): HACCEL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-loadbitmapw
  public static LoadBitmapW(hInstance: HINSTANCE, lpBitmapName: LPCWSTR): HBITMAP {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-loadcursorfromfilew
  public static LoadCursorFromFileW(lpFileName: LPCWSTR): HCURSOR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-loadcursorw
  public static LoadCursorW(hInstance: HINSTANCE, lpCursorName: LPCWSTR): HCURSOR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-loadiconw
  public static LoadIconW(hInstance: HINSTANCE, lpIconName: LPCWSTR): HICON {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-loadimagew
  public static LoadImageW(hInst: HINSTANCE, name: LPCWSTR, type: UINT, cx: INT, cy: INT, fuLoad: UINT): HANDLE {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-loadkeyboardlayoutw
  public static LoadKeyboardLayoutW(pwszKLID: LPCWSTR, Flags: UINT): HKL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-loadmenuindirectw
  public static LoadMenuIndirectW(lpMenuTemplate: MENUTEMPLATEW): HMENU {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-loadmenuw
  public static LoadMenuW(hInstance: HINSTANCE, lpMenuName: LPCWSTR): HMENU {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-loadstringw
  public static LoadStringW(hInstance: HINSTANCE, uID: UINT, lpBuffer: LPWSTR, cchBufferMax: INT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-locksetforegroundwindow
  public static LockSetForegroundWindow(uLockCode: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-lockwindowupdate
  public static LockWindowUpdate(hWndLock: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-lockworkstation
  public static LockWorkStation(): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-logicaltophysicalpoint
  public static LogicalToPhysicalPoint(hWnd: HWND, lpPoint: LPPOINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-logicaltophysicalpointforpermonitordpi
  public static LogicalToPhysicalPointForPerMonitorDPI(hWnd: HWND, lpPoint: LPPOINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-lookupiconidfromdirectory
  public static LookupIconIdFromDirectory(presbits: PBYTE, fIcon: BOOL): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-lookupiconidfromdirectoryex
  public static LookupIconIdFromDirectoryEx(presbits: PBYTE, fIcon: BOOL, cxDesired: INT, cyDesired: INT, Flags: UINT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-mapdialogrect
  public static MapDialogRect(hDlg: HWND, lpRect: LPRECT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-mapvirtualkeyexw
  public static MapVirtualKeyExW(uCode: UINT, uMapType: UINT, dwhkl: HKL): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-mapvirtualkeyw
  public static MapVirtualKeyW(uCode: UINT, uMapType: UINT): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-mapwindowpoints
  public static MapWindowPoints(hWndFrom: HWND, hWndTo: HWND, lpPoints: LPPOINT, cPoints: UINT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-menuitemfrompoint
  public static MenuItemFromPoint(hWnd: HWND, hMenu: HMENU, ptScreen: LPPOINT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-messagebeep
  public static MessageBeep(uType: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-messageboxexw
  public static MessageBoxExW(hWnd: HWND, lpText: LPCWSTR, lpCaption: LPCWSTR, uType: UINT, wLanguageId: WORD): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-messageboxindirectw
  public static MessageBoxIndirectW(lpmbp: MSGBOXPARAMSW): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-messageboxw
  public static MessageBoxW(hWnd: HWND, lpText: LPCWSTR, lpCaption: LPCWSTR, uType: UINT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-modifymenuw
  public static ModifyMenuW(hMnu: HMENU, uPosition: UINT, uFlags: UINT, uIDNewItem: UINT_PTR, lpNewItem: LPCWSTR): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-monitorfrompoint
  public static MonitorFromPoint(pt: LPPOINT, dwFlags: DWORD): HMONITOR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-monitorfromrect
  public static MonitorFromRect(lprc: LPCRECT, dwFlags: DWORD): HMONITOR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-monitorfromwindow
  public static MonitorFromWindow(hwnd: HWND, dwFlags: DWORD): HMONITOR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-movewindow
  public static MoveWindow(hWnd: HWND, X: INT, Y: INT, nWidth: INT, nHeight: INT, bRepaint: BOOL): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-msgwaitformultipleobjects
  public static MsgWaitForMultipleObjects(nCount: DWORD, pHandles: HANDLE, fWaitAll: BOOL, dwMilliseconds: DWORD, dwWakeMask: DWORD): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-msgwaitformultipleobjectsex
  public static MsgWaitForMultipleObjectsEx(nCount: DWORD, pHandles: HANDLE, dwMilliseconds: DWORD, dwWakeMask: DWORD, dwFlags: DWORD): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-notifywinevent
  public static NotifyWinEvent(event: DWORD, hwnd: HWND, idObject: LONG, idChild: LONG): VOID {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-oemkeyscan
  public static OemKeyScan(wOemChar: WORD): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-oemtocharbuffw
  public static OemToCharBuffW(lpszSrc: LPCSTR, lpszDst: LPWSTR, cchDstLength: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-oemtocharw
  public static OemToCharW(pSrc: LPCSTR, pDst: LPWSTR): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-offsetrect
  public static OffsetRect(lprc: LPRECT, dx: INT, dy: INT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-openclipboard
  public static OpenClipboard(hWndNewOwner: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-opendesktopw
  public static OpenDesktopW(lpszDesktop: LPCWSTR, dwFlags: DWORD, fInherit: BOOL, dwDesiredAccess: ACCESS_MASK): HDESK {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-openicon
  public static OpenIcon(hWnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-openinputdesktop
  public static OpenInputDesktop(dwFlags: DWORD, fInherit: BOOL, dwDesiredAccess: ACCESS_MASK): HDESK {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-openwindowstationw
  public static OpenWindowStationW(lpszWinSta: LPCWSTR, fInherit: BOOL, dwDesiredAccess: ACCESS_MASK): HWINSTA {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-paintdesktop
  public static PaintDesktop(hdc: HDC): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-peekmessagew
  public static PeekMessageW(lpMsg: LPMSG, hWnd: HWND, wMsgFilterMin: UINT, wMsgFilterMax: UINT, wRemoveMsg: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-physicaltologicalpoint
  public static PhysicalToLogicalPoint(hWnd: HWND, lpPoint: LPPOINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-physicaltologicalpointforpermonitordpi
  public static PhysicalToLogicalPointForPerMonitorDPI(hWnd: HWND, lpPoint: LPPOINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-postmessagew
  public static PostMessageW(hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-postquitmessage
  public static PostQuitMessage(nExitCode: INT): VOID {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-postthreadmessagew
  public static PostThreadMessageW(idThread: DWORD, Msg: UINT, wParam: WPARAM, lParam: LPARAM): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-printwindow
  public static PrintWindow(hwnd: HWND, hdcBlt: HDC, nFlags: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-privateextracticonsw
  public static PrivateExtractIconsW(szFileName: LPCWSTR, nIconIndex: INT, cxIcon: INT, cyIcon: INT, phicon: HICON, piconid: UINT, nIcons: UINT, flags: UINT): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-ptinrect
  public static PtInRect(lprc: LPRECT, pt: LPPOINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-querydisplayconfig
  public static QueryDisplayConfig(
    flags: UINT32,
    numPathArrayElements: PUINT,
    pathArray: DISPLAYCONFIG_PATH_INFO,
    numModeInfoArrayElements: PUINT,
    modeInfoArray: DISPLAYCONFIG_MODE_INFO,
    currentTopologyId: DISPLAYCONFIG_TOPOLOGY_ID
  ): LONG {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-realchildwindowfrompoint
  public static RealChildWindowFromPoint(hwndParent: HWND, ptParentClientCoords: LPPOINT): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-realgetwindowclassw
  public static RealGetWindowClassW(hwnd: HWND, ptszClassName: LPWSTR, cchClassNameMax: UINT): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-redrawwindow
  public static RedrawWindow(hWnd: HWND, lprcUpdate: LPRECT, hrgnUpdate: HRGN, flags: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-registerclassexw
  public static RegisterClassExW(unnamedParam1: WNDCLASSEXW): ATOM {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-registerclassw
  public static RegisterClassW(lpWndClass: WNDCLASSW): ATOM {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-registerclipboardformatw
  public static RegisterClipboardFormatW(lpszFormat: LPCWSTR): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-registerdevicenotificationw
  public static RegisterDeviceNotificationW(hRecipient: HANDLE, NotificationFilter: LPVOID, Flags: DWORD): HDEVNOTIFY {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-registerhotkey
  public static RegisterHotKey(hWnd: HWND, id: INT, fsModifiers: UINT, vk: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-registerpointerdevicenotifications
  public static RegisterPointerDeviceNotifications(window: HWND, notifyRange: BOOL): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-registerpointerinputtarget
  public static RegisterPointerInputTarget(hwnd: HWND, pointerType: POINTER_INPUT_TYPE): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-registerpowersettingnotification
  public static RegisterPowerSettingNotification(hRecipient: HANDLE, PowerSettingGuid: LPCGUID, Flags: DWORD): HPOWERNOTIFY {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-registerrawinputdevices
  public static RegisterRawInputDevices(pRawInputDevices: PCRAWINPUTDEVICE, uiNumDevices: UINT, cbSize: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-registershellhookwindow
  public static RegisterShellHookWindow(hwnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-registersuspendresumenotification
  public static RegisterSuspendResumeNotification(hRecipient: HANDLE, Flags: DWORD): HPOWERNOTIFY {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-registertouchhittestingwindow
  public static RegisterTouchHitTestingWindow(hwnd: HWND, value: ULONG): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-registertouchwindow
  public static RegisterTouchWindow(hwnd: HWND, ulFlags: ULONG): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-registerwindowmessagew
  public static RegisterWindowMessageW(lpString: LPCWSTR): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-releasecapture
  public static ReleaseCapture(): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-releasedc
  public static ReleaseDC(hWnd: HWND, hDC: HDC): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-removeclipboardformatlistener
  public static RemoveClipboardFormatListener(hwnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-removemenu
  public static RemoveMenu(hMenu: HMENU, uPosition: UINT, uFlags: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-removepropa
  public static RemovePropA(hWnd: HWND, lpString: LPCSTR): HANDLE {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-removepropw
  public static RemovePropW(hWnd: HWND, lpString: LPCWSTR): HANDLE {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-replymessage
  public static ReplyMessage(lResult: LRESULT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-screentoclient
  public static ScreenToClient(hWnd: HWND, lpPoint: LPPOINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-scrolldc
  public static ScrollDC(hDC: HDC, dx: INT, dy: INT, lprcScroll: LPRECT, lprcClip: LPRECT, hrgnUpdate: HRGN, lprcUpdate: LPRECT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-scrollwindow
  public static ScrollWindow(hWnd: HWND, XAmount: INT, YAmount: INT, lpRect: LPRECT, lpClipRect: LPRECT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-scrollwindowex
  public static ScrollWindowEx(hWnd: HWND, dx: INT, dy: INT, prcScroll: LPRECT, prcClip: LPRECT, hrgnUpdate: HRGN, prcUpdate: LPRECT, flags: UINT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-senddlgitemmessagew
  public static SendDlgItemMessageW(hDlg: HWND, nIDDlgItem: INT, Msg: UINT, wParam: WPARAM, lParam: LPARAM): LRESULT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-sendinput
  public static SendInput(cInputs: UINT, pInputs: LPINPUT, cbSize: INT): UINT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-sendmessagecallbackw
  public static SendMessageCallbackW(hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, lpResultCallBack: SENDASYNCPROC, dwData: ULONG_PTR): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-sendmessagetimeoutw
  public static SendMessageTimeoutW(hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM, fuFlags: UINT, uTimeout: UINT, lpdwResult: PDWORD_PTR): LRESULT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-sendmessagew
  public static SendMessageW(hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM): LRESULT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-sendnotifymessagew
  public static SendNotifyMessageW(hWnd: HWND, Msg: UINT, wParam: WPARAM, lParam: LPARAM): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setactivewindow
  public static SetActiveWindow(hWnd: HWND): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setcapture
  public static SetCapture(hWnd: HWND): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setcaretblinktime
  public static SetCaretBlinkTime(uMSeconds: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setcaretpos
  public static SetCaretPos(X: INT, Y: INT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setclasslongptrw
  public static SetClassLongPtrW(hWnd: HWND, nIndex: INT, dwNewLong: LONG_PTR): ULONG_PTR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setclasslongw
  public static SetClassLongW(hWnd: HWND, nIndex: INT, dwNewLong: LONG): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setclassword
  public static SetClassWord(hWnd: HWND, nIndex: INT, wNewWord: WORD): WORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setclipboarddata
  public static SetClipboardData(uFormat: UINT, hMem: HANDLE): HANDLE {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setclipboardviewer
  public static SetClipboardViewer(hWndNewViewer: HWND): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setcoalescabletimer
  public static SetCoalescableTimer(hWnd: HWND, nIDEvent: UINT_PTR, uElapse: UINT, lpTimerFunc: TIMERPROC, uToleranceDelay: ULONG): UINT_PTR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setcursor
  public static SetCursor(hCursor: HCURSOR): HCURSOR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setcursorpos
  public static SetCursorPos(X: INT, Y: INT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setdialogcontroldpichangebehavior
  public static SetDialogControlDpiChangeBehavior(hWnd: HWND, mask: DIALOG_CONTROL_DPI_CHANGE_BEHAVIORS, values: DIALOG_CONTROL_DPI_CHANGE_BEHAVIORS): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setdialogdpichangebehavior
  public static SetDialogDpiChangeBehavior(hDlg: HWND, mask: DIALOG_DPI_CHANGE_BEHAVIORS, values: DIALOG_DPI_CHANGE_BEHAVIORS): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setdisplayautorotationpreferences
  public static SetDisplayAutoRotationPreferences(orientation: ORIENTATION_PREFERENCE): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setdisplayconfig
  public static SetDisplayConfig(numPathArrayElements: UINT32, pathArray: DISPLAYCONFIG_PATH_INFO, numModeInfoArrayElements: UINT32, modeInfoArray: DISPLAYCONFIG_MODE_INFO, flags: UINT32): LONG {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setdlgitemint
  public static SetDlgItemInt(hDlg: HWND, nIDDlgItem: INT, uValue: UINT, bSigned: BOOL): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setdlgitemtextw
  public static SetDlgItemTextW(hDlg: HWND, nIDDlgItem: INT, lpString: LPCWSTR): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setdoubleclicktime
  public static SetDoubleClickTime(unnamedParam1: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setfocus
  public static SetFocus(hWnd: HWND): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setforegroundwindow
  public static SetForegroundWindow(hWnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setgestureconfig
  public static SetGestureConfig(hwnd: HWND, dwReserved: DWORD, cIDs: UINT, pGestureConfig: PGESTURECONFIG, cbSize: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setkeyboardstate
  public static SetKeyboardState(lpKeyState: LPBYTE): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setlasterrorex
  public static SetLastErrorEx(dwErrCode: DWORD, dwType: DWORD): VOID {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setlayeredwindowattributes
  public static SetLayeredWindowAttributes(hwnd: HWND, crKey: COLORREF, bAlpha: BYTE, dwFlags: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setmenu
  public static SetMenu(hWnd: HWND, hMenu: HMENU): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setmenucontexthelpid
  public static SetMenuContextHelpId(unnamedParam1: HMENU, unnamedParam2: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setmenudefaultitem
  public static SetMenuDefaultItem(hMenu: HMENU, uItem: UINT, fByPos: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setmenuinfo
  public static SetMenuInfo(unnamedParam1: HMENU, unnamedParam2: LPCMENUINFO): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setmenuitembitmaps
  public static SetMenuItemBitmaps(hMenu: HMENU, uPosition: UINT, uFlags: UINT, hBitmapUnchecked: HBITMAP, hBitmapChecked: HBITMAP): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setmenuiteminfow
  public static SetMenuItemInfoW(hmenu: HMENU, item: UINT, fByPosition: BOOL, lpmii: LPCMENUITEMINFOW): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setmessageextrainfo
  public static SetMessageExtraInfo(lParam: LPARAM): LPARAM {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setparent
  public static SetParent(hWndChild: HWND, hWndNewParent: HWND): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setphysicalcursorpos
  public static SetPhysicalCursorPos(X: INT, Y: INT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setprocessdefaultlayout
  public static SetProcessDefaultLayout(dwDefaultLayout: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setprocessdpiaware
  public static SetProcessDPIAware(): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setprocessdpiawarenesscontext
  public static SetProcessDpiAwarenessContext(value: DPI_AWARENESS_CONTEXT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setprocesswindowstation
  public static SetProcessWindowStation(hWinSta: HWINSTA): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setpropa
  public static SetPropA(hWnd: HWND, lpString: LPCSTR, hData: HANDLE): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setpropw
  public static SetPropW(hWnd: HWND, lpString: LPCWSTR, hData: HANDLE): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setrect
  public static SetRect(lprc: LPRECT, xLeft: INT, yTop: INT, xRight: INT, yBottom: INT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setrectempty
  public static SetRectEmpty(lprc: LPRECT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setscrollinfo
  public static SetScrollInfo(hwnd: HWND, nBar: INT, lpsi: LPCSCROLLINFO, redraw: BOOL): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setscrollpos
  public static SetScrollPos(hWnd: HWND, nBar: INT, nPos: INT, bRedraw: BOOL): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setscrollrange
  public static SetScrollRange(hWnd: HWND, nBar: INT, nMinPos: INT, nMaxPos: INT, bRedraw: BOOL): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setsyscolors
  public static SetSysColors(cElements: INT, lpaElements: LPINT, lpaRgbValues: LPDWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setsystemcursor
  public static SetSystemCursor(hcur: HCURSOR, id: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setthreaddesktop
  public static SetThreadDesktop(hDesktop: HDESK): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setthreaddpiawarenesscontext
  public static SetThreadDpiAwarenessContext(dpiContext: DPI_AWARENESS_CONTEXT): DPI_AWARENESS_CONTEXT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setthreaddpihostingbehavior
  public static SetThreadDpiHostingBehavior(value: DPI_HOSTING_BEHAVIOR): DPI_HOSTING_BEHAVIOR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-settimer
  public static SetTimer(hWnd: HWND, nIDEvent: UINT_PTR, uElapse: UINT, lpTimerFunc: TIMERPROC): UINT_PTR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setuserobjectinformationw
  public static SetUserObjectInformationW(hObj: HANDLE, nIndex: INT, pvInfo: PVOID, nLength: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setuserobjectsecurity
  public static SetUserObjectSecurity(hObj: HANDLE, pSIRequested: PSECURITY_INFORMATION, pSID: PSECURITY_DESCRIPTOR): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setwindowcontexthelpid
  public static SetWindowContextHelpId(unnamedParam1: HWND, unnamedParam2: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setwindowdisplayaffinity
  public static SetWindowDisplayAffinity(hWnd: HWND, dwAffinity: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setwindowfeedbacksetting
  public static SetWindowFeedbackSetting(hwnd: HWND, feedback: FEEDBACK_TYPE, dwFlags: DWORD, size: UINT32, configuration: PVOID): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setwindowlongptrw
  public static SetWindowLongPtrW(hWnd: HWND, nIndex: INT, dwNewLong: LONG_PTR): LONG_PTR {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setwindowlongw
  public static SetWindowLongW(hWnd: HWND, nIndex: INT, dwNewLong: LONG): LONG {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setwindowplacement
  public static SetWindowPlacement(hWnd: HWND, lpwndpl: WINDOWPLACEMENT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setwindowpos
  public static SetWindowPos(hWnd: HWND, hWndInsertAfter: HWND, X: INT, Y: INT, cx: INT, cy: INT, uFlags: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setwindowrgn
  public static SetWindowRgn(hWnd: HWND, hRgn: HRGN, bRedraw: BOOL): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setwindowshookexw
  public static SetWindowsHookExW(idHook: INT, lpfn: HOOKPROC, hmod: HINSTANCE, dwThreadId: DWORD): HHOOK {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setwindowtextw
  public static SetWindowTextW(hWnd: HWND, lpString: LPCWSTR): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setwineventhook
  public static SetWinEventHook(eventMin: DWORD, eventMax: DWORD, hmodWinEventProc: HMODULE, pfnWinEventProc: WINEVENTPROC, idProcess: DWORD, idThread: DWORD, dwFlags: DWORD): HWINEVENTHOOK {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-showcaret
  public static ShowCaret(hWnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-showcursor
  public static ShowCursor(bShow: BOOL): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-showownedpopups
  public static ShowOwnedPopups(hWnd: HWND, fShow: BOOL): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-showscrollbar
  public static ShowScrollBar(hWnd: HWND, wBar: INT, bShow: BOOL): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-showwindow
  public static ShowWindow(hWnd: HWND, nCmdShow: INT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-showwindowasync
  public static ShowWindowAsync(hWnd: HWND, nCmdShow: INT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-shutdownblockreasoncreate
  public static ShutdownBlockReasonCreate(hWnd: HWND, pwszReason: LPCWSTR): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-shutdownblockreasondestroy
  public static ShutdownBlockReasonDestroy(hWnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-shutdownblockreasonquery
  public static ShutdownBlockReasonQuery(hWnd: HWND, pwszBuff: LPWSTR, pcchBuff: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-skippointerframemessages
  public static SkipPointerFrameMessages(pointerId: UINT32): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-subtractrect
  public static SubtractRect(lprcDst: LPRECT, lprcSrc1: LPRECT, lprcSrc2: LPRECT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-swapmousebutton
  public static SwapMouseButton(fSwap: BOOL): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-switchdesktop
  public static SwitchDesktop(hDesktop: HDESK): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-switchtothiswindow
  public static SwitchToThisWindow(hwnd: HWND, fUnknown: BOOL): VOID {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-systemparametersinfofordpi
  public static SystemParametersInfoForDpi(uiAction: UINT, uiParam: UINT, pvParam: PVOID, fWinIni: UINT, dpi: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-systemparametersinfow
  public static SystemParametersInfoW(uiAction: UINT, uiParam: UINT, pvParam: PVOID, fWinIni: UINT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-tabbedtextoutw
  public static TabbedTextOutW(hdc: HDC, x: INT, y: INT, lpString: LPCWSTR, chCount: INT, nTabPositions: INT, lpnTabStopPositions: LPINT, nTabOrigin: INT): LONG {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-tilewindows
  public static TileWindows(hwndParent: HWND, wHow: UINT, lpRect: LPRECT, cKids: UINT, lpKids: HWND): WORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-toascii
  public static ToAscii(uVirtKey: UINT, uScanCode: UINT, lpKeyState: BYTE, lpChar: LPWORD, uFlags: UINT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-toasciiex
  public static ToAsciiEx(uVirtKey: UINT, uScanCode: UINT, lpKeyState: BYTE, lpChar: LPWORD, uFlags: UINT, dwhkl: HKL): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-tounicode
  public static ToUnicode(wVirtKey: UINT, wScanCode: UINT, lpKeyState: BYTE, pwszBuff: LPWSTR, cchBuff: INT, wFlags: UINT): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-tounicodeex
  public static ToUnicodeEx(wVirtKey: UINT, wScanCode: UINT, lpKeyState: BYTE, pwszBuff: LPWSTR, cchBuff: INT, wFlags: UINT, dwhkl: HKL): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-trackmouseevent
  public static TrackMouseEvent(lpEventTrack: LPTRACKMOUSEEVENT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-trackpopupmenu
  public static TrackPopupMenu(hMenu: HMENU, uFlags: UINT, x: INT, y: INT, nReserved: INT, hWnd: HWND, prcRect: LPRECT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-trackpopupmenuex
  public static TrackPopupMenuEx(hMenu: HMENU, uFlags: UINT, x: INT, y: INT, hwnd: HWND, lptpm: LPTPMPARAMS): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-translateacceleratorw
  public static TranslateAcceleratorW(hWnd: HWND, hAccTable: HACCEL, lpMsg: LPMSG): INT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-translatemdisysaccel
  public static TranslateMDISysAccel(hWndClient: HWND, lpMsg: LPMSG): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-translatemessage
  public static TranslateMessage(lpMsg: LPMSG): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-unhookwindowshookex
  public static UnhookWindowsHookEx(hhk: HHOOK): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-unhookwinevent
  public static UnhookWinEvent(hWinEventHook: HWINEVENTHOOK): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-unionrect
  public static UnionRect(lprcDst: LPRECT, lprcSrc1: LPRECT, lprcSrc2: LPRECT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-unloadkeyboardlayout
  public static UnloadKeyboardLayout(hkl: HKL): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-unregisterclassw
  public static UnregisterClassW(lpClassName: LPCWSTR, hInstance: HINSTANCE): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-unregisterdevicenotification
  public static UnregisterDeviceNotification(Handle: HDEVNOTIFY): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-unregisterhotkey
  public static UnregisterHotKey(hWnd: HWND, id: INT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-unregisterpointerinputtarget
  public static UnregisterPointerInputTarget(hwnd: HWND, pointerType: POINTER_INPUT_TYPE): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-unregisterpowersettingnotification
  public static UnregisterPowerSettingNotification(Handle: HPOWERNOTIFY): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-unregistersuspendresumenotification
  public static UnregisterSuspendResumeNotification(Handle: HPOWERNOTIFY): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-unregistertouchwindow
  public static UnregisterTouchWindow(hwnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-updatelayeredwindow
  public static UpdateLayeredWindow(hWnd: HWND, hdcDst: HDC, pptDst: LPPOINT, psize: SIZE, hdcSrc: HDC, pptSrc: LPPOINT, crKey: COLORREF, pblend: BLENDFUNCTION, dwFlags: DWORD): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-updatewindow
  public static UpdateWindow(hWnd: HWND): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-validaterect
  public static ValidateRect(hWnd: HWND, lpRect: LPRECT): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-validatergn
  public static ValidateRgn(hWnd: HWND, hRgn: HRGN): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-vkkeyscanexw
  public static VkKeyScanExW(ch: WCHAR, dwhkl: HKL): SHORT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-vkkeyscanw
  public static VkKeyScanW(ch: WCHAR): SHORT {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-waitforinputidle
  public static WaitForInputIdle(hProcess: HANDLE, dwMilliseconds: DWORD): DWORD {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-waitmessage
  public static WaitMessage(): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-windowfromdc
  public static WindowFromDC(hDC: HDC): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-windowfromphysicalpoint
  public static WindowFromPhysicalPoint(Point: LPPOINT): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-windowfrompoint
  public static WindowFromPoint(Point: LPPOINT): HWND {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-winhelpw
  public static WinHelpW(hWndMain: HWND, lpszHelp: LPCWSTR, uCommand: UINT, dwData: ULONG_PTR): BOOL {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-keybd_event
  public static keybd_event(bVk: BYTE, bScan: BYTE, dwFlags: DWORD, dwExtraInfo: ULONG_PTR): VOID {
    throw new Error('User32 has not been initialized');
  }

  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-mouse_event
  public static mouse_event(dwFlags: DWORD, dx: DWORD, dy: DWORD, dwData: DWORD, dwExtraInfo: ULONG_PTR): VOID {
    throw new Error('User32 has not been initialized');
  }

  // PLACEHOLDER: Prototype not found on Learn.
  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-changemenuw
  public static ChangeMenuW(p0: LPVOID, p1: UINT, p2: LPVOID, p3: UINT, p4: UINT): any {
    throw new Error('User32 has not been initialized (placeholder signature)');
  }

  // PLACEHOLDER: Prototype not found on Learn.
  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-createwindowinband
  public static CreateWindowInBand(p0: UINT, p1: LPVOID, p2: LPVOID, p3: UINT, p4: INT, p5: INT, p6: INT, p7: INT, p8: LPVOID, p9: LPVOID, p10: LPVOID, p11: LPVOID, p12: UINT): any {
    throw new Error('User32 has not been initialized (placeholder signature)');
  }

  // PLACEHOLDER: Prototype not found on Learn.
  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-createwindowinbandex
  public static CreateWindowInBandEx(p0: UINT, p1: LPVOID, p2: LPVOID, p3: UINT, p4: INT, p5: INT, p6: INT, p7: INT, p8: LPVOID, p9: LPVOID, p10: LPVOID, p11: LPVOID, p12: UINT, p13: UINT): any {
    throw new Error('User32 has not been initialized (placeholder signature)');
  }

  // PLACEHOLDER: Prototype not found on Learn.
  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-drawcaptiontempw
  public static DrawCaptionTempW(p0: LPVOID, p1: LPVOID, p2: LPVOID, p3: LPVOID, p4: LPVOID, p5: UINT): any {
    throw new Error('User32 has not been initialized (placeholder signature)');
  }

  // PLACEHOLDER: Prototype not found on Learn.
  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-freeddelparam
  public static FreeDDElParam(p0: UINT, p1: LONG_PTR): any {
    throw new Error('User32 has not been initialized (placeholder signature)');
  }

  // PLACEHOLDER: Prototype not found on Learn.
  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getpointerframetimes
  public static GetPointerFrameTimes(p0: UINT, p1: LPVOID, p2: LPVOID): any {
    throw new Error('User32 has not been initialized (placeholder signature)');
  }

  // PLACEHOLDER: Prototype not found on Learn.
  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowband
  public static GetWindowBand(p0: LPVOID, p1: LPVOID): any {
    throw new Error('User32 has not been initialized (placeholder signature)');
  }

  // PLACEHOLDER: Prototype not found on Learn.
  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowcompositionattribute
  public static GetWindowCompositionAttribute(p0: LPVOID, p1: LPVOID): any {
    throw new Error('User32 has not been initialized (placeholder signature)');
  }

  // PLACEHOLDER: Prototype not found on Learn.
  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-iswindowredirectedforprint
  public static IsWindowRedirectedForPrint(p0: LPVOID): any {
    throw new Error('User32 has not been initialized (placeholder signature)');
  }

  // PLACEHOLDER: Prototype not found on Learn.
  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-messageboxtimeoutw
  public static MessageBoxTimeoutW(p0: LPVOID, p1: LPVOID, p2: LPVOID, p3: UINT, p4: WORD, p5: UINT): any {
    throw new Error('User32 has not been initialized (placeholder signature)');
  }

  // PLACEHOLDER: Prototype not found on Learn.
  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-openthreaddesktop
  public static OpenThreadDesktop(p0: UINT, p1: INT, p2: UINT): any {
    throw new Error('User32 has not been initialized (placeholder signature)');
  }

  // PLACEHOLDER: Prototype not found on Learn.
  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-packddelparam
  public static PackDDElParam(p0: UINT, p1: ULONG_PTR, p2: LONG_PTR): any {
    throw new Error('User32 has not been initialized (placeholder signature)');
  }

  // PLACEHOLDER: Prototype not found on Learn.
  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-reuseddelparam
  public static ReuseDDElParam(p0: LONG_PTR, p1: UINT, p2: UINT, p3: ULONG_PTR, p4: ULONG_PTR): any {
    throw new Error('User32 has not been initialized (placeholder signature)');
  }

  // PLACEHOLDER: Prototype not found on Learn.
  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setmessagequeue
  public static SetMessageQueue(p0: INT): any {
    throw new Error('User32 has not been initialized (placeholder signature)');
  }

  // PLACEHOLDER: Prototype not found on Learn.
  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setwindowband
  public static SetWindowBand(p0: LPVOID, p1: LPVOID, p2: UINT): any {
    throw new Error('User32 has not been initialized (placeholder signature)');
  }

  // PLACEHOLDER: Prototype not found on Learn.
  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setwindowcompositionattribute
  public static SetWindowCompositionAttribute(p0: LPVOID, p1: LPVOID): any {
    throw new Error('User32 has not been initialized (placeholder signature)');
  }

  // PLACEHOLDER: Prototype not found on Learn.
  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setwindowword
  public static SetWindowWord(p0: LPVOID, p1: INT, p2: WORD): any {
    throw new Error('User32 has not been initialized (placeholder signature)');
  }

  // PLACEHOLDER: Prototype not found on Learn.
  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-unpackddelparam
  public static UnpackDDElParam(p0: UINT, p1: LONG_PTR, p2: LPVOID, p3: LPVOID): any {
    throw new Error('User32 has not been initialized (placeholder signature)');
  }

  // PLACEHOLDER: Prototype not found on Learn.
  // https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-updatelayeredwindowindirect
  public static UpdateLayeredWindowIndirect(p0: LPVOID, p1: LPVOID): any {
    throw new Error('User32 has not been initialized (placeholder signature)');
  }
}

export default User32;
