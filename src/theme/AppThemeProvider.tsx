import React, {useEffect, useState} from 'react';
import {DefaultTheme, ThemeProvider} from 'styled-components/native';

import {IFontGroup, fontMap} from './Typography';

interface AppThemeProviderProps {
  theme: Omit<DefaultTheme, 'fonts'>;
}
/*
  This wrapper around our theme provider is very useful for dynamically updating our theme
  based on user interactions (e.g. changing language or dark-mode).
  This Stack Overflow answer provides a good example of how this component can be extended with React Context:
  https://stackoverflow.com/questions/65882833/styled-components-change-theme-dynamically
*/
export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  theme,
  children,
}) => {
  const fonts = fontMap;
  const [appTheme, setAppTheme] = useState<DefaultTheme & {fonts: IFontGroup}>({
    ...theme,
    fonts,
  });

  useEffect(() => {
    // Update theme fonts when fontMapKey changes
    setAppTheme({...theme, fonts});
  }, [fonts, theme]);

  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};
