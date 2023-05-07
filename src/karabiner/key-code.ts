// See https://github.com/pqrs-org/Karabiner-Elements/blob/main/src/apps/SettingsWindow/Resources/simple_modifications.json

export type StickyModifierKeyCode =
  | 'left_control'
  | 'left_shift'
  | 'left_option'
  | 'left_command'
  | 'right_control'
  | 'right_shift'
  | 'right_option'
  | 'right_command'
  | 'fn'

export type ModifierKeyCode = StickyModifierKeyCode | 'caps_lock'

export type ControlOrSymbolKeyCode =
  | 'return_or_enter'
  | 'escape'
  | 'delete_or_backspace'
  | 'delete_forward'
  | 'tab'
  | 'spacebar'
  | 'hyphen'
  | 'equal_sign'
  | 'open_bracket'
  | 'close_bracket'
  | 'backslash'
  | 'non_us_pound'
  | 'semicolon'
  | 'quote'
  | 'grave_accent_and_tilde'
  | 'comma'
  | 'period'
  | 'slash'
  | 'non_us_backslash'

export type ArrowKeyCode =
  | 'up_arrow'
  | 'down_arrow'
  | 'left_arrow'
  | 'right_arrow'
  | 'page_up'
  | 'page_down'
  | 'home'
  | 'end'

export type LetterKeyCode =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z'

export type NumberKeyCode =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '0'

export type FunctionKeyCode =
  | 'f1'
  | 'f2'
  | 'f3'
  | 'f4'
  | 'f5'
  | 'f6'
  | 'f7'
  | 'f8'
  | 'f9'
  | 'f10'
  | 'f11'
  | 'f12'
  | 'f13'
  | 'f14'
  | 'f15'
  | 'f16'
  | 'f17'
  | 'f18'
  | 'f19'
  | 'f20'

export type KeypadKeyCode =
  | 'keypad_num_lock'
  | 'keypad_slash'
  | 'keypad_asterisk'
  | 'keypad_hyphen'
  | 'keypad_plus'
  | 'keypad_enter'
  | 'keypad_1'
  | 'keypad_2'
  | 'keypad_3'
  | 'keypad_4'
  | 'keypad_5'
  | 'keypad_6'
  | 'keypad_7'
  | 'keypad_8'
  | 'keypad_9'
  | 'keypad_0'
  | 'keypad_period'
  | 'keypad_equal_sign'
  | 'keypad_comma'

export type PcKeyboardKeyCode =
  | 'print_screen'
  | 'scroll_lock'
  | 'pause'
  | 'insert'
  | 'application'
  | 'help'
  | 'power'

export type InternationalKeyCode =
  | 'international1'
  | 'international3'
  | 'lang1'
  | 'lang2'

export type JapaneseKeyCode = 'japanese_eisuu' | 'japanese_kana'

export type OtherKeyCode =
  | 'volume_down' // equal to `volume_decrement`
  | 'volume_up' // equal to `volume_increment`
  | 'mute'
  | 'volume_decrement'
  | 'volume_increment'

export type FromOnlyKeyCode =
  // Function keys
  | 'f21'
  | 'f22'
  | 'f23'
  | 'f24'
  // Keys in pc keyboards
  | 'execute'
  | 'menu'
  | 'select'
  | 'stop'
  | 'again'
  | 'undo'
  | 'cut'
  | 'copy'
  | 'paste'
  | 'find'
  // International keys
  | 'international2'
  | 'international4'
  | 'international5'
  | 'international6'
  | 'international7'
  | 'international8'
  | 'international9'
  | 'lang3'
  | 'lang4'
  | 'lang5'
  | 'lang6'
  | 'lang7'
  | 'lang8'
  | 'lang9'
  // Japanese
  | 'japanese_pc_nfer' // PCキーボードの無変換キー
  | 'japanese_pc_xfer' // PCキーボードの変換キー
  | 'japanese_pc_katakana' // PCキーボードのかなキー
  // Others
  | 'keypad_equal_sign_as400'
  | 'locking_caps_lock'
  | 'locking_num_lock'
  | 'locking_scroll_lock'
  | 'alternate_erase'
  | 'sys_req_or_attention'
  | 'cancel'
  | 'clear'
  | 'prior'
  | 'return' // rarely used return (HID usage 0x9e)
  | 'separator'
  | 'out'
  | 'oper'
  | 'clear_or_again'
  | 'cr_sel_or_props'
  | 'ex_sel'

export type ToOnlyKeyCode =
  // Disable this key
  | 'vk_none'
  // Others
  | 'vk_consumer_brightness_down' // equal to `display_brightness_decrement`
  | 'vk_consumer_brightness_up' // equal to `display_brightness_increment`
  | 'vk_mission_control' // equal to `mission_control`
  | 'vk_launchpad' // equal to `launchpad`
  | 'vk_dashboard' // equal to `dashboard`
  | 'vk_consumer_illumination_down' // equal to `illumination_decrement`
  | 'vk_consumer_illumination_up' // equal to `illumination_increment`
  | 'vk_consumer_previous' // equal to `rewind`
  | 'vk_consumer_play' // equal to `play`
  | 'vk_consumer_next' // equal to `fast_forward`
  | 'display_brightness_decrement'
  | 'display_brightness_increment'
  | 'rewind'
  | 'play_or_pause'
  | 'fastforward'
  | 'apple_display_brightness_decrement'
  | 'apple_display_brightness_increment'
  | 'dashboard'
  | 'launchpad'
  | 'mission_control'
  | 'apple_top_case_display_brightness_decrement'
  | 'apple_top_case_display_brightness_increment'
  | 'illumination_decrement'
  | 'illumination_increment'

export type FromAndToKeyCode =
  | ModifierKeyCode
  | ControlOrSymbolKeyCode
  | ArrowKeyCode
  | LetterKeyCode
  | NumberKeyCode
  | FunctionKeyCode
  | KeypadKeyCode
  | PcKeyboardKeyCode
  | InternationalKeyCode
  | JapaneseKeyCode
  | OtherKeyCode
export type KeyCode = FromAndToKeyCode | FromOnlyKeyCode | ToOnlyKeyCode
export type FromKeyCode = FromAndToKeyCode | FromOnlyKeyCode
export type ToKeyCode = FromAndToKeyCode | ToOnlyKeyCode