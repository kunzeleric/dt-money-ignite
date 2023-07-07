/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

// Quando usa TS, o styled components precisa deste arquivo para extender a tipagem padrão do tema

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}