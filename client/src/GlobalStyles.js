/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }

    *, *:before, *:after {
      box-sizing: border-box;
    }

    h1 {
      font-weight: ${(props) => props.theme.semi_bold};
      font-size: ${(props) => props.theme.h1_headline};
      margin: 0;
    }

    h6 {
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: ${(props) => props.theme.bold};
      font-size: ${(props) => props.theme.h6_headline};
      margin: 0;
    }
`;

export const milkTheme = {
  color_primary: '#356859', // colors
  color_secondary: '#FD5523',
  color_surface: '#B9E4C9',
  color_background: '#FFFBE6',
  color_error: '#b00020',
  color_on_primary: '#ffffff',
  color_on_secondary: '#000000',
  color_on_error: '#ffffff',
  color_on_surface: '#37966F',
  spacer_xs: '4px', // spacers
  spacer_s: '8px',
  spacer_m: '16px',
  spacer_l: '24px',
  spacer_xl: '32px',
  desktop_breakpoint: '1100px', // breakpoints
  tablet_breakpoint: '760px',
  mobile_breakpoint: '560px',
  desktop_grid: 12, // grid systeme
  tablet_grid: 8,
  mobile_grid: 4,
  regular: 400, // font weights
  medium: 500,
  semi_bold: 600,
  bold: 700,
  h1_headline: '96px', // font sizes
  h2_headline: '60px',
  h3_headline: '48px',
  h4_headline: '34px',
  h5_headline: '24px',
  h6_headline: '21px',
  subtitle_1: '17px',
  subtitle_2: '15px',
  body_1: '16px',
  body_2: '14px',
  BUTTON: '16px',
  caption: '12px',
  overline: '10px',
};
