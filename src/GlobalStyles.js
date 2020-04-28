/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }

    *, *:before, *:after {
      box-sizing: border-box;
    }
`;

export const milkTheme = {
  color_primary: '#356859',
  color_secondary: '#FD5523',
  color_surface: '#B9E4C9',
  color_background: '#FFFBE6',
  color_error: '#b00020',
  color_on_primary: '#ffffff',
  color_on_secondary: '#000000',
  color_on_error: '#ffffff',
  color_on_surface: '#356859',
  spacer_xs: '4px',
  spacer_s: '8px',
  spacer_m: '16px',
  spacer_l: '24px',
  spacer_xl: '32px',
  desktop_breakpoint: '1100px',
  tablet_breakpoint: '760px',
  mobile_breakpoint: '560px',
  desktop_grid: 12,
  tablet_grid: 8,
  mobile_grid: 4,
};
