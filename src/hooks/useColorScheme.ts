import { useColorScheme as _useColorScheme } from "react-native"

import type { ColorScheme } from "@theme/types"

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
export default function useColorScheme(): ColorScheme {
  return _useColorScheme() as ColorScheme
}
