export namespace Keyboard {
  export type Combination =
    | NativeEventCode
    | {
        readonly code: NativeEventCode
        readonly ctrl?: boolean
        readonly shift?: boolean
        /** The same as `option` for macOS */
        readonly alt?: boolean
        readonly meta?: boolean
        /** The same as `meta` for macOS and `ctrl` for other operating systems */
        readonly cmd?: boolean
      }

  export type Combinations = Combination | readonly Combination[]

  // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values
  export type NativeEventCode =
    | 'ArrowUp'
    | 'ArrowDown'
    | 'ArrowLeft'
    | 'ArrowRight'
    | 'ControlRight'
    | 'ShiftRight'
    | 'AltRight'
    | 'MetaRight'
    | 'ControlLeft'
    | 'ShiftLeft'
    | 'AltLeft'
    | 'MetaLeft'
    | 'Enter'
    | 'Backspace'
    | 'Escape'
    | 'Tab'
    | 'Space'
    | 'F1'
    | 'F2'
    | 'F3'
    | 'F4'
    | 'F5'
    | 'F6'
    | 'F7'
    | 'F8'
    | 'F9'
    | 'F10'
    | 'F11'
    | 'F12'
    | 'Digit1'
    | 'Digit2'
    | 'Digit3'
    | 'Digit4'
    | 'Digit5'
    | 'Digit6'
    | 'Digit7'
    | 'Digit8'
    | 'Digit9'
    | 'Digit0'
    | 'Minus'
    | 'Equal'
    | 'BracketLeft'
    | 'BracketRight'
    | 'Backquote'
    | 'Semicolon'
    | 'Quote'
    | 'Comma'
    | 'Period'
    | 'Slash'
    | 'Backslash'
    | 'KeyA'
    | 'KeyB'
    | 'KeyC'
    | 'KeyD'
    | 'KeyE'
    | 'KeyF'
    | 'KeyG'
    | 'KeyH'
    | 'KeyI'
    | 'KeyJ'
    | 'KeyK'
    | 'KeyL'
    | 'KeyM'
    | 'KeyN'
    | 'KeyO'
    | 'KeyP'
    | 'KeyQ'
    | 'KeyR'
    | 'KeyS'
    | 'KeyT'
    | 'KeyU'
    | 'KeyV'
    | 'KeyW'
    | 'KeyX'
    | 'KeyY'
    | 'KeyZ'
    | 'Numpad0'
    | 'Numpad1'
    | 'Numpad2'
    | 'Numpad3'
    | 'Numpad4'
    | 'Numpad5'
    | 'Numpad6'
    | 'Numpad7'
    | 'Numpad8'
    | 'Numpad9'
    | 'NumpadEnter'
    | 'NumpadDecimal'
    | 'NumpadAdd'
    | 'NumpadSubtract'
    | 'NumpadMultiply'
    | 'NumpadDivide'
    | 'Home'
    | 'End'
    | 'PageUp'
    | 'PageDown'
    | 'Delete'
    | 'Insert'
    | 'Pause'
    | 'ContextMenu'
    | 'IntlBackslash'
    | 'IntlYen'
    | 'ScrollLock'
    | 'CapsLock'
    | 'NumLock'
}
