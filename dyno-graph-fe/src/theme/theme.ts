export type ThemeMode = 'dark' | 'light';

const darkThemePalette = {
}

const lightThemePalette = {
}

export const themeSettings = (mode: ThemeMode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark' ? darkThemePalette : lightThemePalette),
    }
  }
}